import { X, ShoppingBag } from "lucide-react";
import { CartItem } from "@/types";

export function CartDrawer({
  isOpen,
  items,
  onClose,
  onUpdateQuantity,
}: {
  isOpen: boolean;
  items: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (id: string, delta: number) => void;
}) {
  if (!isOpen) return null;
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div className="absolute left-0 top-0 h-full w-full max-w-sm bg-white p-5 shadow-2xl dark:bg-slate-900 text-slate-900 dark:text-white" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between border-b pb-4 dark:border-slate-800">
          <h2 className="text-base font-black">السلة الذكية</h2>
          <button onClick={onClose} className="rounded-lg p-1 hover:bg-slate-100 dark:hover:bg-slate-800"><X size={18} /></button>
        </div>
        {items.length === 0 ? (
          <div className="mt-20 text-center text-slate-400 space-y-2">
            <ShoppingBag size={40} className="mx-auto text-slate-300" />
            <p className="text-xs font-bold">السلة فارغة حالياً</p>
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
            <button className="w-full rounded-2xl bg-emerald-500 py-3 text-xs font-black text-white hover:bg-emerald-600">إرسال الطلب عبر واتساب</button>
          </div>
        )}
      </div>
    </div>
  );
}
