import { supabase } from "@/integrations/supabase/client";
import type {
  PromotionRequest,
  PromotionStatus,
  PromotionTargetType,
} from "@/types/socialCommerce";

export type SubmitPromotionPayload = Omit<
  PromotionRequest,
  "id" | "status" | "createdAt" | "storeName"
>;

export async function submitPromotionRequest(payload: SubmitPromotionPayload) {
  const insertPayload = {
    store_id: payload.storeId,
    target_type: payload.targetType,
    target_city: payload.targetCity,
    duration_days: payload.durationDays,
    budget_iqd: payload.budgetIqd,
    ...(payload.targetId ? { target_id: payload.targetId } : {}),
  };

  const { data, error } = await supabase
    .from("promotion_requests")
    .insert(insertPayload)
    .select()
    .single();

  if (error) {
    throw new Error(`فشل إرسال طلب الترويج: ${error.message}`);
  }

  return data;
}

export async function listPromotionRequests(storeId: string) {
  const { data, error } = await supabase
    .from("promotion_requests")
    .select("*")
    .eq("store_id", storeId)
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(`فشل جلب طلبات الترويج: ${error.message}`);
  }

  return data;
}

export type PromotionTarget = {
  targetType: PromotionTargetType;
  targetId?: string;
};

export type PromotionStatusChange = {
  requestId: string;
  status: PromotionStatus;
  adminNotes?: string;
};
