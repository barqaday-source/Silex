import { supabaseAdmin } from "@/integrations/supabase/client.server";
import type { PromotionStatus } from "@/types/socialCommerce";

export async function updatePromotionStatusByAdmin(
  requestId: string,
  status: PromotionStatus,
  adminNotes?: string,
) {
  const { data, error } = await supabaseAdmin
    .from("promotion_requests")
    .update({
      status,
      ...(adminNotes === undefined ? {} : { admin_notes: adminNotes }),
    })
    .eq("id", requestId)
    .select()
    .single();

  if (error) {
    throw new Error(`فشل تحديث حالة طلب الترويج: ${error.message}`);
  }

  return data;
}
