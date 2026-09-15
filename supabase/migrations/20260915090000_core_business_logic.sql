-- Core roles, orders, moderation, and server-side state transitions.

ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS role TEXT NOT NULL DEFAULT 'customer'
  CHECK (role IN ('customer', 'merchant'));

CREATE INDEX IF NOT EXISTS profiles_role_idx ON public.profiles (role);

CREATE OR REPLACE FUNCTION public.prevent_client_role_change()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF auth.uid() IS NOT NULL AND NEW.role IS DISTINCT FROM OLD.role THEN
    RAISE EXCEPTION 'Profile roles can only be changed by a trusted server';
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS protect_profile_role ON public.profiles;
CREATE TRIGGER protect_profile_role
BEFORE UPDATE ON public.profiles
FOR EACH ROW EXECUTE FUNCTION public.prevent_client_role_change();

REVOKE EXECUTE ON FUNCTION public.prevent_client_role_change() FROM PUBLIC, anon, authenticated;

CREATE TABLE IF NOT EXISTS public.user_blocks (
  blocker_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  blocked_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (blocker_id, blocked_id),
  CHECK (blocker_id <> blocked_id)
);

ALTER TABLE public.user_blocks ENABLE ROW LEVEL SECURITY;
GRANT SELECT, INSERT, DELETE ON public.user_blocks TO authenticated;

CREATE POLICY "blocks_select_own"
  ON public.user_blocks FOR SELECT TO authenticated
  USING (blocker_id = auth.uid() OR blocked_id = auth.uid());

CREATE POLICY "blocks_insert_own"
  ON public.user_blocks FOR INSERT TO authenticated
  WITH CHECK (blocker_id = auth.uid());

CREATE POLICY "blocks_delete_own"
  ON public.user_blocks FOR DELETE TO authenticated
  USING (blocker_id = auth.uid());

CREATE TABLE IF NOT EXISTS public.orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  buyer_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  store_id UUID NOT NULL REFERENCES public.stores(id) ON DELETE CASCADE,
  product_id UUID REFERENCES public.products(id) ON DELETE SET NULL,
  quantity INTEGER NOT NULL DEFAULT 1 CHECK (quantity > 0),
  total_iqd NUMERIC(12, 2) NOT NULL CHECK (total_iqd >= 0),
  status TEXT NOT NULL DEFAULT 'pending'
    CHECK (status IN ('pending', 'accepted', 'shipped', 'delivered', 'cancelled')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS orders_buyer_idx ON public.orders (buyer_id, created_at DESC);
CREATE INDEX IF NOT EXISTS orders_store_idx ON public.orders (store_id, created_at DESC);

ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
GRANT SELECT, INSERT, UPDATE ON public.orders TO authenticated;

CREATE POLICY "orders_select_participant"
  ON public.orders FOR SELECT TO authenticated
  USING (buyer_id = auth.uid() OR store_id = auth.uid());

CREATE POLICY "orders_insert_buyer"
  ON public.orders FOR INSERT TO authenticated
  WITH CHECK (buyer_id = auth.uid() AND NOT EXISTS (
    SELECT 1 FROM public.user_blocks
    WHERE blocker_id = store_id AND blocked_id = auth.uid()
  ));

CREATE POLICY "orders_update_store_owner"
  ON public.orders FOR UPDATE TO authenticated
  USING (store_id = auth.uid())
  WITH CHECK (store_id = auth.uid());

CREATE TABLE IF NOT EXISTS public.reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  reporter_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  reported_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  reason TEXT NOT NULL CHECK (length(trim(reason)) BETWEEN 2 AND 500),
  status TEXT NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'reviewing', 'resolved', 'dismissed')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CHECK (reporter_id <> reported_id)
);

ALTER TABLE public.reports ENABLE ROW LEVEL SECURITY;
GRANT INSERT ON public.reports TO authenticated;

CREATE POLICY "reports_insert_own"
  ON public.reports FOR INSERT TO authenticated
  WITH CHECK (reporter_id = auth.uid());

CREATE OR REPLACE FUNCTION public.transition_order_status(
  p_order_id UUID,
  p_next_status TEXT
) RETURNS public.orders
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_order public.orders;
  v_allowed BOOLEAN := false;
BEGIN
  SELECT * INTO v_order FROM public.orders WHERE id = p_order_id FOR UPDATE;
  IF v_order IS NULL THEN RAISE EXCEPTION 'Order not found'; END IF;
  IF v_order.store_id <> auth.uid() THEN RAISE EXCEPTION 'Only the store owner can update this order'; END IF;

  v_allowed := (v_order.status = 'pending' AND p_next_status IN ('accepted', 'cancelled'))
    OR (v_order.status = 'accepted' AND p_next_status IN ('shipped', 'cancelled'))
    OR (v_order.status = 'shipped' AND p_next_status = 'delivered');
  IF NOT v_allowed THEN RAISE EXCEPTION 'Invalid order status transition'; END IF;

  UPDATE public.orders SET status = p_next_status, updated_at = now() WHERE id = p_order_id RETURNING * INTO v_order;
  RETURN v_order;
END;
$$;

REVOKE ALL ON FUNCTION public.transition_order_status(UUID, TEXT) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.transition_order_status(UUID, TEXT) TO authenticated;
