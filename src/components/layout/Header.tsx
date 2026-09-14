import { Bell, ShoppingBag, Menu } from "lucide-react";

export function Header({
  cartCount,
  unreadNotificationsCount,
  onOpenCart,
  onOpenNotifications,
  onOpenMenu,
}: {
  cartCount: number;
  unreadNotificationsCount: number;
  onOpenCart: () => void;
  onOpenNotifications: () => void;
  onOpenMenu?: () => void;
}) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/80">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          {onOpenMenu && (
            <button
              onClick={onOpenMenu}
              className="grid size-10 place-items-center rounded-xl bg-slate-100 text-slate-700 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200"
              aria-label="القائمة الجانبية"
            >
              <Menu size={20} />
            </button>
          )}

          <div className="flex items-center gap-2.5">
            <div className="grid size-10 place-items-center rounded-2xl bg-emerald-500 font-black text-white shadow-lg shadow-emerald-500/20">
              س
            </div>
            <div className="text-right">
              <h1 className="text-base font-black tracking-tight text-slate-900 dark:text-white">
                السوق المحترفة
              </h1>
              <p className="text-[10px] font-medium text-slate-400">
                منصة المتاجر المحلية
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenNotifications}
            className="relative grid size-10 place-items-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-200"
            aria-label="التنبيهات"
          >
            <Bell size={19} />
            {unreadNotificationsCount > 0 && (
              <span className="absolute -top-1 -right-1 flex size-5 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white ring-2 ring-white dark:ring-slate-900 animate-pulse">
                {unreadNotificationsCount > 9 ? "+9" : unreadNotificationsCount}
              </span>
            )}
          </button>

          <button
            onClick={onOpenCart}
            className="relative grid size-10 place-items-center rounded-xl bg-emerald-500 text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-600"
            aria-label="سلة المشتريات"
          >
            <ShoppingBag size={19} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex size-5 items-center justify-center rounded-full bg-slate-900 text-[10px] font-bold text-white ring-2 ring-white dark:bg-white dark:text-slate-900 dark:ring-slate-900">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
