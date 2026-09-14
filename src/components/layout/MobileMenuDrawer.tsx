import {
  X,
  Store,
  Package,
  Ticket,
  Wallet,
  Award,
  Settings,
  Globe,
  HelpCircle,
  Info,
  ChevronLeft,
  User,
} from "lucide-react";

export function MobileMenuDrawer({
  isOpen,
  onClose,
  onNavigateTab,
}: {
  isOpen: boolean;
  onClose: () => void;
  onNavigateTab: (tab: "profile" | "stores") => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Content */}
      <div className="relative flex w-4/5 max-w-xs flex-col bg-white p-5 text-right shadow-2xl dark:bg-slate-900">
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4 dark:border-slate-800">
          <button
            onClick={onClose}
            className="grid size-9 place-items-center rounded-xl bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
          >
            <X size={18} />
          </button>
          <span className="text-xs font-black text-slate-400">القائمة الرئيسية</span>
        </div>

        {/* User Identity Shortcut Card */}
        <div
          onClick={() => {
            onNavigateTab("profile");
            onClose();
          }}
          className="my-4 flex cursor-pointer items-center justify-between rounded-2xl bg-emerald-50 p-3 dark:bg-emerald-950/40"
        >
          <ChevronLeft size={16} className="text-emerald-600 dark:text-emerald-400" />
          <div className="flex items-center gap-3">
            <div className="text-right">
              <h4 className="text-xs font-black text-slate-900 dark:text-white">جود الجابر</h4>
              <p className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">عرض الحساب الشخصي ←</p>
            </div>
            <div className="grid size-10 place-items-center rounded-xl bg-emerald-500 font-black text-white">
              <User size={18} />
            </div>
          </div>
        </div>

        {/* Menu Sections */}
        <div className="flex-1 space-y-4 overflow-y-auto no-scrollbar">
          {/* Section 1: Marketplace Actions */}
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-slate-400 px-2">خدمات التسوق والتجارة</span>

            <button
              onClick={() => {
                onNavigateTab("stores");
                onClose();
              }}
              className="flex w-full items-center justify-between rounded-xl p-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              <ChevronLeft size={14} className="text-slate-400" />
              <div className="flex items-center gap-2.5">
                <span>بيع معنا وافتح متجرك</span>
                <Store size={16} className="text-emerald-500" />
              </div>
            </button>

            <button className="flex w-full items-center justify-between rounded-xl p-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800">
              <ChevronLeft size={14} className="text-slate-400" />
              <div className="flex items-center gap-2.5">
                <span>متابعة طلبياتي</span>
                <Package size={16} className="text-blue-500" />
              </div>
            </button>

            <button className="flex w-full items-center justify-between rounded-xl p-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800">
              <ChevronLeft size={14} className="text-slate-400" />
              <div className="flex items-center gap-2.5">
                <span>العروض والتخفيضات</span>
                <Ticket size={16} className="text-amber-500" />
              </div>
            </button>

            <button className="flex w-full items-center justify-between rounded-xl p-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800">
              <ChevronLeft size={14} className="text-slate-400" />
              <div className="flex items-center gap-2.5">
                <span>المحفظة الرقمية</span>
                <Wallet size={16} className="text-purple-500" />
              </div>
            </button>

            <button className="flex w-full items-center justify-between rounded-xl p-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800">
              <ChevronLeft size={14} className="text-slate-400" />
              <div className="flex items-center gap-2.5">
                <span>نقاط الولاء والمكافآت</span>
                <Award size={16} className="text-rose-500" />
              </div>
            </button>
          </div>

          <hr className="border-slate-100 dark:border-slate-800" />

          {/* Section 2: System Settings */}
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-slate-400 px-2">النظام والتطبيق</span>

            <button className="flex w-full items-center justify-between rounded-xl p-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800">
              <ChevronLeft size={14} className="text-slate-400" />
              <div className="flex items-center gap-2.5">
                <span>إعدادات الحساب</span>
                <Settings size={16} className="text-slate-400" />
              </div>
            </button>

            <button className="flex w-full items-center justify-between rounded-xl p-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800">
              <span className="text-[10px] font-bold text-emerald-600">العربية</span>
              <div className="flex items-center gap-2.5">
                <span>اللغة والعملة</span>
                <Globe size={16} className="text-slate-400" />
              </div>
            </button>

            <button className="flex w-full items-center justify-between rounded-xl p-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800">
              <ChevronLeft size={14} className="text-slate-400" />
              <div className="flex items-center gap-2.5">
                <span>المساعدة والدعم الفني</span>
                <HelpCircle size={16} className="text-slate-400" />
              </div>
            </button>

            <button className="flex w-full items-center justify-between rounded-xl p-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800">
              <ChevronLeft size={14} className="text-slate-400" />
              <div className="flex items-center gap-2.5">
                <span>عن المنصة</span>
                <Info size={16} className="text-slate-400" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
