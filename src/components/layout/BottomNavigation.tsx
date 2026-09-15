import { BarChart3, Boxes, ClipboardList, Home, MessageSquare, Store, User } from "lucide-react";

export type NavTab = "home" | "chat" | "stores" | "profile" | "seller-dashboard" | "seller-orders" | "seller-inventory" | "seller-analytics";

export function BottomNavigation({
  activeTab,
  unreadChatCount,
  isSellerMode,
  onTabChange,
}: {
  activeTab: NavTab;
  unreadChatCount: number;
  isSellerMode: boolean;
  onTabChange: (tab: NavTab) => void;
}) {
  const tabs = isSellerMode
    ? [
        { id: "seller-dashboard", label: "لوحة المتجر", icon: Store },
        { id: "seller-orders", label: "الطلبات", icon: ClipboardList },
        { id: "seller-inventory", label: "المخزون", icon: Boxes },
        { id: "seller-analytics", label: "التحليلات", icon: BarChart3 },
        { id: "chat", label: "المحادثات", icon: MessageSquare, badge: unreadChatCount },
      ]
    : [
        { id: "home", label: "الرئيسية", icon: Home },
        { id: "stores", label: "المتاجر", icon: Store },
        { id: "chat", label: "المحادثات", icon: MessageSquare, badge: unreadChatCount },
        { id: "profile", label: "حسابي", icon: User },
      ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200/80 bg-white/95 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/95">
      <div className="mx-auto flex max-w-3xl items-center justify-around gap-1 px-2 py-2 dir-rtl">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id as NavTab)}
              className={`relative flex flex-col items-center gap-1 px-3 py-1 transition ${
                isActive
                  ? "scale-105 font-bold text-emerald-500"
                  : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              }`}
            >
              <div className="relative">
                <Icon size={20} />
                {!!tab.badge && tab.badge > 0 && (
                  <span className="absolute -top-1.5 -right-2.5 flex size-4 items-center justify-center rounded-full bg-rose-500 text-[9px] font-black text-white">
                    {tab.badge}
                  </span>
                )}
              </div>
              <span className="text-[10px]">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
