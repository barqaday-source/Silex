import { useState } from "react";
import { FileText, PackageCheck, Printer, Truck } from "lucide-react";

type OrderStatus = "new" | "packing" | "shipped" | "completed" | "cancelled";
type SellerOrder = { id: string; customer: string; items: string; amount: number; status: OrderStatus };

const statusLabels: Record<OrderStatus, string> = { new: "جديد", packing: "قيد التجميع", shipped: "تم الشحن", completed: "مكتمل", cancelled: "ملغى" };
const nextStatus: Partial<Record<OrderStatus, OrderStatus>> = { new: "packing", packing: "shipped", shipped: "completed" };
const initialOrders: SellerOrder[] = [
  { id: "#18294", customer: "سارة أحمد", items: "حذاء نايكي • 43", amount: 90000, status: "new" },
  { id: "#18291", customer: "محمد علي", items: "آيفون 15 برو", amount: 1450000, status: "packing" },
  { id: "#18288", customer: "نور حسين", items: "حذاء نايكي • 42", amount: 90000, status: "shipped" },
  { id: "#18271", customer: "علي كريم", items: "إكسسوارات رياضية", amount: 125000, status: "completed" },
];

export function OrderPipeline() {
  const [orders, setOrders] = useState(initialOrders);
  const columns: OrderStatus[] = ["new", "packing", "shipped", "completed", "cancelled"];
  const moveOrder = (orderId: string) => setOrders((current) => current.map((order) => order.id === orderId && nextStatus[order.status] ? { ...order, status: nextStatus[order.status]! } : order));
  const printDocument = (order: SellerOrder, document: "invoice" | "waybill") => {
    const popup = window.open("", "_blank", "width=720,height=720");
    if (!popup) return;
    popup.document.write(`<html dir="rtl"><head><title>${document === "invoice" ? "فاتورة" : "بوليصة توصيل"} ${order.id}</title><style>body{font-family:Arial;padding:40px}h1{color:#059669}table{width:100%;border-collapse:collapse}td{padding:12px;border-bottom:1px solid #ddd}</style></head><body><h1>سيلكس</h1><h2>${document === "invoice" ? "فاتورة الطلب" : "بوليصة التوصيل"} ${order.id}</h2><table><tr><td>العميل</td><td>${order.customer}</td></tr><tr><td>المحتويات</td><td>${order.items}</td></tr><tr><td>المبلغ نقداً</td><td>${order.amount.toLocaleString("ar-IQ")} د.ع</td></tr></table><script>window.print()</script></body></html>`);
    popup.document.close();
  };

  return <section className="space-y-4 rounded-3xl border border-emerald-100 bg-white p-4 shadow-sm dark:border-emerald-950/50 dark:bg-slate-900"><div className="flex items-center justify-between"><span className="text-[10px] font-bold text-slate-400">{orders.length} طلبات نشطة</span><h2 className="flex items-center gap-2 text-sm font-black"><PackageCheck size={18} className="text-emerald-500" /> خط سير الطلبات</h2></div><div className="grid gap-3 xl:grid-cols-5">{columns.map((status) => <div key={status} className="min-h-44 rounded-2xl bg-slate-50 p-2.5 dark:bg-slate-800/60"><div className="mb-3 flex items-center justify-between"><span className="rounded-full bg-white px-2 py-1 text-[10px] font-black shadow-sm dark:bg-slate-900">{orders.filter((order) => order.status === status).length}</span><h3 className="text-xs font-black">{statusLabels[status]}</h3></div><div className="space-y-2">{orders.filter((order) => order.status === status).map((order) => <article key={order.id} className="rounded-xl border border-slate-200 bg-white p-3 text-right shadow-sm dark:border-slate-700 dark:bg-slate-900"><div className="flex items-center justify-between text-[10px] font-black"><span className="text-emerald-600">{order.id}</span><span>{order.customer}</span></div><p className="mt-2 text-[10px] text-slate-500">{order.items}</p><p className="mt-2 text-[11px] font-black">{order.amount.toLocaleString("ar-IQ")} د.ع</p><div className="mt-3 flex gap-1"><button type="button" onClick={() => printDocument(order, "invoice")} className="grid size-8 place-items-center rounded-lg bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-200" aria-label="طباعة الفاتورة"><FileText size={13} /></button><button type="button" onClick={() => printDocument(order, "waybill")} className="grid size-8 place-items-center rounded-lg bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-200" aria-label="طباعة بوليصة التوصيل"><Printer size={13} /></button>{nextStatus[status] && <button type="button" onClick={() => moveOrder(order.id)} className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-emerald-50 px-2 text-[9px] font-black text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300">التالي <Truck size={12} /></button>}</div></article>)}</div></div>)}</div></section>;
}
