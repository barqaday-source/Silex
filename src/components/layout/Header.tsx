import { Bell, Search, Settings, ShoppingBag } from "lucide-react";

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
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 px-4 py-4 backdrop-blur-md sm:px-8">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <button
          onClick={onOpenMenu}
          className="rounded-xl p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          aria-label="القائمة الجانبية"
        >
          <Settings className="size-5" />
        </button>

        <div className="select-none text-xl font-black uppercase tracking-widest text-foreground" dir="ltr">
          SALIX
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenNotifications}
            className="relative rounded-full p-2.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="الإشعارات"
          >
            <Bell className="size-5" />
            {unreadNotificationsCount > 0 && (
              <span className="absolute right-2.5 top-2.5 size-2 animate-pulse rounded-full bg-primary" />
            )}
            {unreadNotificationsCount > 1 && (
              <span className="absolute -right-1 -top-1 flex size-4 items-center justify-center rounded-full bg-primary text-[9px] font-black text-primary-foreground">
                {unreadNotificationsCount}
              </span>
            )}
          </button>

          {/* Cart Button with Counter */}
          <button
            onClick={onOpenCart}
            className="relative rounded-full p-2.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="سلة التسوق"
          >
            <ShoppingBag className="size-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex size-4 items-center justify-center rounded-full bg-primary text-[10px] font-black text-primary-foreground">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 pb-3">
        <div className="relative">
          <Search size={16} className="absolute right-3.5 top-3 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="ابحث عن منتجات، متاجر، تصنيفات..."
            className="w-full rounded-2xl border border-input bg-card py-2.5 pr-10 pl-4 text-xs font-medium text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>
    </header>
  );
}
