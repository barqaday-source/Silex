import { supabase } from "@/integrations/supabase/client";

export type OrderStatus = "pending" | "accepted" | "shipped" | "delivered" | "cancelled";

type OrderRow = {
  id: string;
  buyer_id: string;
  store_id: string;
  product_id: string | null;
  quantity: number;
  total_iqd: number;
  status: OrderStatus;
  created_at: string;
  updated_at: string;
};

type UntypedClient = {
  from: (table: string) => {
    insert: (values: Record<string, unknown>) => { select: () => { single: () => Promise<{ data: OrderRow | null; error: { message: string } | null }> } };
  };
  rpc: (name: string, args: Record<string, unknown>) => Promise<{ data: OrderRow | null; error: { message: string } | null }>;
};

const client = () => supabase as unknown as UntypedClient;

export async function createOrder(input: { storeId: string; productId?: string; quantity: number; totalIqd: number; buyerId: string }) {
  if (!Number.isInteger(input.quantity) || input.quantity < 1) throw new Error("كمية الطلب غير صالحة");
  if (!Number.isFinite(input.totalIqd) || input.totalIqd < 0) throw new Error("قيمة الطلب غير صالحة");
  const { data, error } = await client().from("orders").insert({ buyer_id: input.buyerId, store_id: input.storeId, product_id: input.productId ?? null, quantity: input.quantity, total_iqd: input.totalIqd }).select().single();
  if (error) throw new Error(`تعذر إنشاء الطلب: ${error.message}`);
  return data;
}

export async function transitionOrderStatus(orderId: string, nextStatus: OrderStatus) {
  const { data, error } = await client().rpc("transition_order_status", { p_order_id: orderId, p_next_status: nextStatus });
  if (error) throw new Error(`تعذر تحديث حالة الطلب: ${error.message}`);
  return data;
}

export async function blockUser(blockedId: string) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("يجب تسجيل الدخول أولاً");
  const { error } = await (supabase as any).from("user_blocks").insert({ blocker_id: user.id, blocked_id: blockedId });
  if (error) throw new Error(`تعذر حظر المستخدم: ${error.message}`);
}

export async function reportUser(reportedId: string, reason: string) {
  const trimmedReason = reason.trim();
  if (trimmedReason.length < 2) throw new Error("سبب البلاغ مطلوب");
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("يجب تسجيل الدخول أولاً");
  const { error } = await (supabase as any).from("reports").insert({ reporter_id: user.id, reported_id: reportedId, reason: trimmedReason });
  if (error) throw new Error(`تعذر إرسال البلاغ: ${error.message}`);
}
