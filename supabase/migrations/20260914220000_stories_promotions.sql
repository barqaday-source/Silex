-- Stories, story engagement, and promotion requests.
-- This migration uses the public.stores/auth.users model established by the inventory migration.
CREATE TABLE public.stories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  store_id UUID NOT NULL REFERENCES public.stores(id) ON DELETE CASCADE,
  content_type VARCHAR(20) NOT NULL CHECK (content_type IN ('product', 'offer', 'new_arrival', 'discount', 'announcement', 'custom')),
  media_url TEXT NOT NULL,
  caption TEXT,
  product_id UUID REFERENCES public.products(id) ON DELETE SET NULL,
  discount_percentage INTEGER CHECK (discount_percentage IS NULL OR discount_percentage BETWEEN 0 AND 100),
  expires_at TIMESTAMPTZ NOT NULL DEFAULT (now() + INTERVAL '24 hours'),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX stories_active_idx ON public.stories (expires_at DESC);
CREATE INDEX stories_store_idx ON public.stories (store_id, created_at DESC);

ALTER TABLE public.stories ENABLE ROW LEVEL SECURITY;
GRANT SELECT ON public.stories TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.stories TO authenticated;

CREATE POLICY "stories_select_active"
  ON public.stories FOR SELECT
  USING (expires_at > now());

CREATE POLICY "stories_insert_store_owner"
  ON public.stories FOR INSERT TO authenticated
  WITH CHECK (store_id = auth.uid());

CREATE POLICY "stories_update_store_owner"
  ON public.stories FOR UPDATE TO authenticated
  USING (store_id = auth.uid())
  WITH CHECK (store_id = auth.uid());

CREATE POLICY "stories_delete_store_owner"
  ON public.stories FOR DELETE TO authenticated
  USING (store_id = auth.uid());

CREATE TABLE public.story_views (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  story_id UUID NOT NULL REFERENCES public.stories(id) ON DELETE CASCADE,
  viewer_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  clicked_product BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (story_id, viewer_id)
);

CREATE INDEX story_views_story_idx ON public.story_views (story_id, created_at DESC);

ALTER TABLE public.story_views ENABLE ROW LEVEL SECURITY;
GRANT SELECT, INSERT ON public.story_views TO authenticated;

CREATE POLICY "story_views_select_story_owner"
  ON public.story_views FOR SELECT TO authenticated
  USING (EXISTS (
    SELECT 1 FROM public.stories
    WHERE stories.id = story_views.story_id
      AND stories.store_id = auth.uid()
  ));

CREATE POLICY "story_views_insert_viewer"
  ON public.story_views FOR INSERT TO authenticated
  WITH CHECK (viewer_id = auth.uid());

CREATE TABLE public.promotion_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  store_id UUID NOT NULL REFERENCES public.stores(id) ON DELETE CASCADE,
  target_type VARCHAR(30) NOT NULL CHECK (target_type IN ('store', 'product', 'story', 'reel', 'offer')),
  target_id UUID,
  target_city VARCHAR(50) NOT NULL DEFAULT 'Basrah',
  duration_days INTEGER NOT NULL DEFAULT 7 CHECK (duration_days > 0),
  budget_iqd NUMERIC(12, 2) NOT NULL DEFAULT 0 CHECK (budget_iqd >= 0),
  status VARCHAR(20) NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected', 'active', 'completed')),
  admin_notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX promotion_requests_store_idx ON public.promotion_requests (store_id, created_at DESC);
CREATE INDEX promotion_requests_status_idx ON public.promotion_requests (status, created_at DESC);

ALTER TABLE public.promotion_requests ENABLE ROW LEVEL SECURITY;
GRANT SELECT, INSERT ON public.promotion_requests TO authenticated;

CREATE POLICY "promotion_requests_select_store_owner"
  ON public.promotion_requests FOR SELECT TO authenticated
  USING (store_id = auth.uid());

CREATE POLICY "promotion_requests_insert_store_owner"
  ON public.promotion_requests FOR INSERT TO authenticated
  WITH CHECK (store_id = auth.uid());

-- Status changes are intentionally excluded from client RLS policies.
-- Approvals/rejections must run from a protected admin server function using service role.
