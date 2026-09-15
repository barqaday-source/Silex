import type { Product } from "@/types";
import { supabase } from "@/integrations/supabase/client";

export type StoreRagData = {
  name: string;
  products: Array<Pick<Product, "id" | "name" | "price" | "in_stock"> & { quantity: number }>;
  deliveryPolicy: string;
  returnPolicy: string;
  ledger?: { outstanding: number; collected: number };
  stories?: { active: number; clicks: number };
};

export type AssistantResponse = {
  intent: "RECOMMEND_PRODUCT" | "INVENTORY_QUERY" | "DELIVERY_QUERY" | "TRANSFER_TO_HUMAN" | "UNKNOWN";
  text_response: string;
  widget?: { type: "PRODUCT_CARD"; data: { id: string; name: string; price: number; in_stock: boolean; quantity: number } };
  action?: "TRANSFER_TO_HUMAN";
};

export const SALIX_AI_SYSTEM_PROMPT = `
أنت "مساعد صفصاف" (Salix AI Assistant)، المساعد الذكي المدمج في نظام التشغيل التجاري Salix (SELX).
دورك هو دعم التاجر في إدارة متجره، تحليل المبيعات، متابعة الديون، وتحسين أداء الستوريات والتجارة الاجتماعية.

قواعد الشخصية والسلوك:
1. الهوية: تتحدث باسم "صفصاف / Salix" فقط.
2. النبرة: احترافية، عملية، ودودة، ومباشرة بدون مقدمات طويلة.
3. النطاق: مخصص للعمليات التجارية داخل Salix (المخزون، الدفتر، المنتجات، الاستفسارات، التحليلات).
4. الأمان: تلتزم بخصوصية بيانات التاجر والزبائن ولا تتردد في التنبيه على سياسات الأمان (الاحتيال، التحديثات).

بيانات سياق التاجر المتاحة لك:
- حالة المنتجات والمخزون الحالية.
- سجل الذمم المالية (دفتر الديون).
- تفاعلات الستوريات والعروض الترويجية.

قواعد البيانات:
- أجب فقط من سياق JSON اللحظي المرفق.
- لا تخترع منتجاً أو سعراً أو كمية أو رصيداً.
- عند نقص البيانات، قل بوضوح إن البيانات غير متاحة وحوّل الحالة للتاجر.
- أعد JSON مطابقاً للمخطط المطلوب، لا نصاً حراً.
`;

export const GENERATE_BOT_PROMPT = (storeData: StoreRagData, userMessage: string) => `${SALIX_AI_SYSTEM_PROMPT}
اسم المتجر: "${storeData.name}"
سياق JSON اللحظي: ${JSON.stringify(storeData)}
طريقة الدفع: نقداً عند الاستلام فقط (COD).
رسالة التاجر الحالية: "${userMessage}"
إذا طلب المستخدم التحدث مع التاجر أو ذكر مشكلة، أرجع {"action":"TRANSFER_TO_HUMAN"}.`;

export async function loadSalixStoreContext(storeId: string): Promise<StoreRagData> {
  const [{ data: products, error: productsError }, { data: inventory, error: inventoryError }, { data: stories, error: storiesError }] = await Promise.all([
    supabase.from("products").select("id, name, price, status").eq("seller_id", storeId),
    supabase.from("inventory_items").select("product_id, quantity").eq("store_id", storeId),
    supabase.from("stories").select("id").eq("store_id", storeId).gt("expires_at", new Date().toISOString()),
  ]);

  if (productsError) throw new Error(`تعذر تحميل منتجات صفصاف: ${productsError.message}`);
  if (inventoryError) throw new Error(`تعذر تحميل مخزون صفصاف: ${inventoryError.message}`);
  if (storiesError) throw new Error(`تعذر تحميل ستوريات صفصاف: ${storiesError.message}`);

  const quantityByProduct = new Map((inventory ?? []).map((item) => [item.product_id, item.quantity]));
  const productContext = (products ?? []).map((product) => ({
    id: product.id,
    name: product.name,
    price: product.price,
    in_stock: product.status === "active" && (quantityByProduct.get(product.id) ?? 0) > 0,
    quantity: quantityByProduct.get(product.id) ?? 0,
  }));

  return {
    name: "متجر صفصاف",
    products: productContext,
    deliveryPolicy: "بغداد 2-3 أيام، البصرة 1-2 يوم",
    returnPolicy: "الاستبدال خلال 7 أيام",
    ledger: { outstanding: 0, collected: 0 },
    stories: { active: stories?.length ?? 0, clicks: 0 },
  };
}

export function buildStoreRagData(products: Product[]): StoreRagData {
  return { name: "متجر بغداد الرقمي", products: products.map((product) => ({ id: product.id, name: product.name, price: product.price, in_stock: product.in_stock, quantity: product.in_stock ? 1 : 0 })), deliveryPolicy: "بغداد 2-3 أيام، البصرة 1-2 يوم", returnPolicy: "الاستبدال خلال 7 أيام", ledger: { outstanding: 0, collected: 0 }, stories: { active: 0, clicks: 0 } };
}

export function answerFromStoreData(storeData: StoreRagData, userMessage: string): AssistantResponse {
  const message = userMessage.trim().toLowerCase();
  if (/التاجر|موظف|مشكلة|غاضب|شكوى|human/.test(message)) return { intent: "TRANSFER_TO_HUMAN", text_response: "سأحوّل المحادثة الآن إلى موظف المتجر لمساعدتك بدقة.", action: "TRANSFER_TO_HUMAN" };
  if (/توصيل|شحن|يوصل/.test(message)) return { intent: "DELIVERY_QUERY", text_response: `التوصيل: ${storeData.deliveryPolicy}` };
  const product = storeData.products.find((item) => message.includes(item.name.toLowerCase()) || item.name.toLowerCase().split(" ").some((word) => word.length > 3 && message.includes(word)));
  if (!product) return { intent: "UNKNOWN", text_response: "عذراً، هذا المنتج غير متوفر حالياً. يمكنني تحويلك إلى موظف المتجر." };
  if (!product.in_stock || product.quantity <= 0) return { intent: "INVENTORY_QUERY", text_response: "عذراً، هذا المنتج غير متوفر حالياً." };
  return { intent: "RECOMMEND_PRODUCT", text_response: `هذا المنتج متوفر بسعر ${product.price.toLocaleString("ar-IQ")} د.ع.`, widget: { type: "PRODUCT_CARD", data: product } };
}
