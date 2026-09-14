-- Inventory foundation for merchant stores.
-- The current project has auth.users and products.seller_id, but no public stores/users tables.
CREATE TABLE public.stores (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.stores ENABLE ROW LEVEL SECURITY;
GRANT SELECT ON public.stores TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.stores TO authenticated;

CREATE POLICY "stores_select_public"
  ON public.stores FOR SELECT
  USING (true);

CREATE POLICY "stores_insert_own"
  ON public.stores FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = id);

CREATE POLICY "stores_update_own"
  ON public.stores FOR UPDATE TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "stores_delete_own"
  ON public.stores FOR DELETE TO authenticated
  USING (auth.uid() = id);

CREATE TABLE public.inventory_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  store_id UUID NOT NULL REFERENCES public.stores(id) ON DELETE CASCADE,
  product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
  sku VARCHAR(50) NOT NULL UNIQUE,
  product_name VARCHAR(150) NOT NULL,
  variant_name VARCHAR(100),
  quantity INTEGER NOT NULL DEFAULT 0 CHECK (quantity >= 0),
  min_stock_alert INTEGER NOT NULL DEFAULT 5 CHECK (min_stock_alert >= 0),
  cost_price NUMERIC(12, 2) NOT NULL DEFAULT 0 CHECK (cost_price >= 0),
  selling_price NUMERIC(12, 2) NOT NULL DEFAULT 0 CHECK (selling_price >= 0),
  location VARCHAR(100) NOT NULL DEFAULT 'المتجر الرئيسي',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (store_id, product_id, variant_name)
);

ALTER TABLE public.inventory_items ENABLE ROW LEVEL SECURITY;
GRANT SELECT ON public.inventory_items TO authenticated;
GRANT INSERT, UPDATE, DELETE ON public.inventory_items TO authenticated;

CREATE POLICY "inventory_items_select_store_owner"
  ON public.inventory_items FOR SELECT
  USING (store_id = auth.uid());

CREATE POLICY "inventory_items_insert_store_owner"
  ON public.inventory_items FOR INSERT TO authenticated
  WITH CHECK (EXISTS (
    SELECT 1 FROM public.stores
    WHERE stores.id = inventory_items.store_id
      AND stores.id = auth.uid()
  ));

CREATE POLICY "inventory_items_update_store_owner"
  ON public.inventory_items FOR UPDATE TO authenticated
  USING (store_id = auth.uid())
  WITH CHECK (store_id = auth.uid());

CREATE POLICY "inventory_items_delete_store_owner"
  ON public.inventory_items FOR DELETE TO authenticated
  USING (store_id = auth.uid());

CREATE TABLE public.inventory_movements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  inventory_item_id UUID NOT NULL REFERENCES public.inventory_items(id) ON DELETE CASCADE,
  change_type VARCHAR(30) NOT NULL CHECK (change_type IN ('restock', 'sale', 'manual_add', 'manual_subtract', 'return')),
  quantity_changed INTEGER NOT NULL CHECK (quantity_changed <> 0),
  resulting_quantity INTEGER NOT NULL CHECK (resulting_quantity >= 0),
  notes TEXT,
  reference_id VARCHAR(100),
  created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.inventory_movements ENABLE ROW LEVEL SECURITY;
GRANT SELECT ON public.inventory_movements TO authenticated;
GRANT INSERT ON public.inventory_movements TO authenticated;

CREATE POLICY "inventory_movements_select_store_owner"
  ON public.inventory_movements FOR SELECT
  USING (EXISTS (
    SELECT 1
    FROM public.inventory_items
    WHERE inventory_items.id = inventory_movements.inventory_item_id
      AND inventory_items.store_id = auth.uid()
  ));

CREATE POLICY "inventory_movements_insert_store_owner"
  ON public.inventory_movements FOR INSERT TO authenticated
  WITH CHECK (EXISTS (
    SELECT 1
    FROM public.inventory_items
    WHERE inventory_items.id = inventory_movements.inventory_item_id
      AND inventory_items.store_id = auth.uid()
  ));

CREATE OR REPLACE FUNCTION public.adjust_stock(
  p_item_id UUID,
  p_change_amount INTEGER,
  p_type VARCHAR,
  p_notes TEXT DEFAULT NULL,
  p_ref_id VARCHAR DEFAULT NULL,
  p_user_id UUID DEFAULT NULL
) RETURNS INTEGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_item public.inventory_items%ROWTYPE;
  v_new_quantity INTEGER;
  v_actor UUID;
BEGIN
  IF p_change_amount = 0 THEN
    RAISE EXCEPTION 'Stock change cannot be zero';
  END IF;

  IF p_type NOT IN ('restock', 'sale', 'manual_add', 'manual_subtract', 'return') THEN
    RAISE EXCEPTION 'Unsupported stock movement type: %', p_type;
  END IF;

  IF auth.uid() IS NULL THEN
    IF p_user_id IS NULL THEN
      RAISE EXCEPTION 'An authenticated actor is required';
    END IF;
    v_actor := p_user_id;
  ELSE
    IF p_user_id IS NOT NULL AND p_user_id <> auth.uid() THEN
      RAISE EXCEPTION 'The supplied actor does not match the authenticated user';
    END IF;
    v_actor := auth.uid();
  END IF;

  SELECT inventory_items.*
  INTO v_item
  FROM public.inventory_items
  WHERE inventory_items.id = p_item_id
  FOR UPDATE;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'Inventory item not found: %', p_item_id;
  END IF;

  IF v_actor IS NULL OR v_item.store_id <> v_actor THEN
    RAISE EXCEPTION 'You are not allowed to adjust this inventory item';
  END IF;

  v_new_quantity := v_item.quantity + p_change_amount;
  IF v_new_quantity < 0 THEN
    RAISE EXCEPTION 'Insufficient stock: available %, requested change %', v_item.quantity, p_change_amount;
  END IF;

  UPDATE public.inventory_items
  SET quantity = v_new_quantity,
      updated_at = now()
  WHERE id = p_item_id;

  INSERT INTO public.inventory_movements (
    inventory_item_id,
    change_type,
    quantity_changed,
    resulting_quantity,
    notes,
    reference_id,
    created_by
  ) VALUES (
    p_item_id,
    p_type,
    p_change_amount,
    v_new_quantity,
    p_notes,
    p_ref_id,
    v_actor
  );

  RETURN v_new_quantity;
END;
$$;

REVOKE ALL ON FUNCTION public.adjust_stock(UUID, INTEGER, VARCHAR, TEXT, VARCHAR, UUID) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.adjust_stock(UUID, INTEGER, VARCHAR, TEXT, VARCHAR, UUID) TO authenticated;
