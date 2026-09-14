import { Menu, ShoppingBag, Bell, Search } from "lucide-react";

export function Header({
  cartCount,
  unreadNotificationsCount,
  searchQuery,
  onSearchChange,
  onOpenCart,
  onOpenNotifications,
  onOpenMenu,
}: {
  cartCount: number;
  unreadNotificationsCount: number;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onOpenCart: () => void;
  onOpenNotifications: () => void;
  onOpenMenu: () => void;
}) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/90">
      {/* Top Action Bar */}
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        {/* Hamburger Menu Trigger */}
        <button
          onClick={onOpenMenu}
          className="grid size-10 place-items-center rounded-2xl bg-slate-100 text-slate-700 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200"
          aria-label="القائمة الجانبية"
        >
          <Menu size={20} />
        </button>

        {/* Brand Logo */}
        <div className="flex items-center gap-2">
          <div className="grid size-9 place-items-center rounded-xl bg-emerald-500 font-black text-white shadow-md shadow-emerald-500/20 text-lg">
            S
          </div>
          <span className="text-base font-black tracking-tight text-slate-900 dark:text-white">
            السوق <span className="text-emerald-500">الذكي</span>
          </span>
        </div>

        {/* Action Controls: Notifications & Cart */}
        <div className="flex items-center gap-2">
          {/* Notifications Button */}
          <button
            onClick={onOpenNotifications}
            className="relative grid size-10 place-items-center rounded-2xl bg-slate-100 text-slate-700 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200"
            aria-label="الإشعارات"
          >
            <Bell size={19} />
            {unreadNotificationsCount > 0 && (
              <span className="absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full bg-rose-500 text-[9px] font-black text-white ring-2 ring-white dark:ring-slate-900">
                {unreadNotificationsCount}
              </span>
            )}
          </button>

          {/* Cart Button with Counter */}
          <button
            onClick={onOpenCart}
            className="relative flex items-center gap-2 rounded-2xl bg-emerald-500 px-3 py-2.5 font-bold text-white shadow-md shadow-emerald-500/20 transition hover:bg-emerald-600"
            aria-label="سلة التسوق"
          >
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-black text-emerald-700">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Global Sticky Search Bar */}
      <div className="mx-auto max-w-5xl px-4 pb-3">
        <div className="relative">
          <Search size={16} className="absolute right-3.5 top-3 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="ابحث عن منتجات، متاجر، تصنيفات..."
            className="w-full rounded-2xl border border-slate-200 bg-slate-100/70 py-2.5 pr-10 pl-4 text-xs font-medium outline-none transition focus:border-emerald-500 focus:bg-white dark:border-slate-800 dark:bg-slate-800/60 dark:text-white dark:focus:bg-slate-900"
          />
        </div>
      </div>
    </header>
  );
}
