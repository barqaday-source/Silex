import { X, Home, Store, ShoppingBag, Heart, Settings, HelpCircle, Compass, Sparkles, PhoneCall } from "lucide-react";

export function MobileMenuDrawer({
  isOpen,
  onClose,
  onNavigate,
}: {
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: (route: string) => void;
}) {
  if (!isOpen) return null;

  const menuItems = [
    { id: "home", label: "الرئيسية", icon: Home },
    { id: "explore", label: "استكشف العروض", icon: Compass },
    { id: "stores", label: "المتاجر المعتمدة", icon: Store },
    { id: "orders", label: "طلباتي ومشترياتي", icon: ShoppingBag },
    { id: "favorites", label: "المفضلة", icon: Heart },
    { id: "featured", label: "عروض الموسم", icon: Sparkles },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity" onClick={onClose}>
      <div
        className="absolute right-0 top-0 h-full w-4/5 max-w-xs bg-white p-5 shadow-2xl transition-transform dark:bg-slate-900 text-slate-900 dark:text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b pb-4 dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="grid size-9 place-items-center rounded-xl bg-emerald-500 font-black text-white shadow-md shadow-emerald-500/20">
              س
            </div>
            <div>
              <h2 className="font-black text-sm">القائمة الرئيسية</h2>
              <p className="text-[10px] text-slate-400">تصفح أقسام المنصة</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X size={18} />
          </button>
        </div>

        <div className="mt-6 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  if (onNavigate) onNavigate(item.id);
                  onClose();
                }}
                className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-right text-xs font-bold text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-600 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                <Icon size={18} className="text-emerald-500" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        <hr className="my-6 border-slate-100 dark:border-slate-800" />

        <div className="space-y-1">
          <button
            onClick={onClose}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-right text-xs font-bold text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
          >
            <Settings size={18} />
            <span>الإعدادات</span>
          </button>
          <button
            onClick={onClose}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-right text-xs font-bold text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
          >
            <HelpCircle size={18} />
            <span>مركز المساعدة والشكاوى</span>
          </button>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-right text-xs font-bold text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/30"
          >
            <PhoneCall size={18} />
            <span>تواصل مع الإدارة</span>
          </a>
        </div>

        <div className="absolute bottom-5 left-5 right-5 text-center text-[10px] text-slate-400 border-t pt-3 dark:border-slate-800">
          <p className="font-bold">السوق المحترفة v1.0.0</p>
          <p className="mt-0.5">جميع الحقوق محفوظة © 2026</p>
        </div>
      </div>
    </div>
  );
}
