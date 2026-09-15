import { CheckCircle2, Copy, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { CartItem } from "@/types";

export function CartDrawer({
  isOpen,
  items,
  onClose,
  onUpdateQuantity,
  onContinueShopping,
}: {
  isOpen: boolean;
  items: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (id: string, delta: number) => void;
  onContinueShopping?: () => void;
}) {
  if (!isOpen) return null;
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const [cashAmount, setCashAmount] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const change = Number(cashAmount) >= total ? Number(cashAmount) - total : 0;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div className="absolute left-0 top-0 h-full w-full max-w-sm bg-white p-5 shadow-2xl dark:bg-slate-900 text-slate-900 dark:text-white" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between border-b pb-4 dark:border-slate-800">
          <h2 className="text-base font-black">السلة الذكية</h2>
          <button onClick={onClose} className="rounded-lg p-1 hover:bg-slate-100 dark:hover:bg-slate-800"><X size={18} /></button>
        </div>
        {items.length === 0 ? (
          <div className="mt-20 flex flex-col items-center space-y-3 text-center text-slate-400">
            <ShoppingBag size={40} className="mx-auto text-slate-300" />
            <p className="text-xs font-bold">السلة فارغة حالياً</p>
            <button type="button" onClick={onContinueShopping} className="rounded-xl bg-emerald-50 px-4 py-2 text-[11px] font-black text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300">استكشف المنتجات</button>
          </div>
        ) : (
          <div className="mt-4 space-y-3 overflow-y-auto max-h-[calc(100vh-200px)]">
            {items.map((item) => (
              <div key={item.id} className="flex gap-3 rounded-2xl border p-3 dark:border-slate-800">
                <img src={item.image_url} alt={item.name} className="size-16 rounded-xl object-cover" />
                <div className="flex-1 text-right">
                  <h4 className="text-xs font-black truncate">{item.name}</h4>
                  <p className="text-xs font-bold text-emerald-600 mt-1">{item.price.toLocaleString('ar-IQ')} د.ع</p>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center gap-2 rounded-lg bg-slate-100 p-1 dark:bg-slate-800">
                      <button onClick={() => onUpdateQuantity(item.id, 1)} className="px-2 font-bold">+</button>
                      <span className="text-xs font-black">{item.quantity}</span>
                      <button onClick={() => onUpdateQuantity(item.id, -1)} className="px-2 font-bold">-</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {items.length > 0 && (
          <div className="absolute bottom-5 left-5 right-5 border-t pt-4 dark:border-slate-800 space-y-3">
            <div className="flex justify-between text-sm font-black">
              <span>الإجمالي:</span>
              <span className="text-emerald-600">{total.toLocaleString('ar-IQ')} د.ع</span>
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-3 text-right dark:border-emerald-950/50 dark:bg-emerald-950/20">
              <p className="flex items-center gap-1 text-xs font-black text-emerald-800 dark:text-emerald-300"><CheckCircle2 size={15} /> الدفع عند الاستلام</p>
              <label className="mt-2 block text-[10px] font-bold text-slate-600 dark:text-slate-300">سأدفع بفئة نقدية
                <select value={cashAmount} onChange={(event) => setCashAmount(event.target.value)} className="mt-1 w-full rounded-xl border border-slate-200 bg-white p-2.5 text-xs outline-none dark:border-slate-700 dark:bg-slate-900">
                  <option value="">اختيار الفئة</option>
                  {[50000, 100000, 250000, 500000, 1000000, 2000000].filter((amount) => amount >= total).map((amount) => <option key={amount} value={amount}>{amount.toLocaleString("ar-IQ")} د.ع</option>)}
                </select>
              </label>
              {cashAmount && <p className="mt-2 text-[11px] font-black text-emerald-700 dark:text-emerald-300">سيحضر المندوب باقي {change.toLocaleString("ar-IQ")} د.ع</p>}
            </div>
            {orderPlaced ? <div className="flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 py-3 text-xs font-black text-white"><CheckCircle2 size={16} /> تم تسجيل طلبك داخل صفصاف</div> : <button type="button" onClick={() => setOrderPlaced(true)} className="w-full rounded-2xl bg-emerald-500 py-3 text-xs font-black text-white hover:bg-emerald-600">تأكيد الطلب نقداً عند الاستلام</button>}
          </div>
        )}
      </div>
    </div>
  );
}
