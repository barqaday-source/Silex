import { User, ShoppingBag, Heart, ShieldCheck, MapPin, Bell, LogOut } from "lucide-react";

export function ProfileScreen() {
  return (
    <div className="space-y-4 pb-20 text-right">
      {/* Header Profile Card */}
      <div className="flex items-center gap-4 rounded-3xl bg-emerald-500 p-5 text-white shadow-xl">
        <div className="grid size-16 place-items-center rounded-2xl bg-white/20 font-black text-2xl backdrop-blur-md">
          ج
        </div>
        <div>
          <h2 className="text-base font-black">جود الجابر</h2>
          <p className="text-xs text-emerald-100 mt-0.5">jood@example.com</p>
          <span className="mt-2 inline-block rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-bold backdrop-blur-md">
            حساب مشتري موثق ✓
          </span>
        </div>
      </div>

      {/* Options List */}
      <div className="rounded-3xl border border-slate-100 bg-white p-2 shadow-sm dark:border-slate-800 dark:bg-slate-900 space-y-1">
        <button className="flex w-full items-center justify-between rounded-2xl p-3 text-xs font-bold text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800">
          <div className="flex items-center gap-3">
            <ShoppingBag size={18} className="text-emerald-500" />
            <span>طلباتي ومشترياتي</span>
          </div>
          <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] text-emerald-700 font-black">2 طلبات</span>
        </button>

        <button className="flex w-full items-center justify-between rounded-2xl p-3 text-xs font-bold text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800">
          <div className="flex items-center gap-3">
            <Heart size={18} className="text-rose-500" />
            <span>المنتجات المفضلة</span>
          </div>
        </button>

        <button className="flex w-full items-center justify-between rounded-2xl p-3 text-xs font-bold text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800">
          <div className="flex items-center gap-3">
            <MapPin size={18} className="text-amber-500" />
            <span>عناوين التوصيل</span>
          </div>
        </button>

        <button className="flex w-full items-center justify-between rounded-2xl p-3 text-xs font-bold text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800">
          <div className="flex items-center gap-3">
            <ShieldCheck size={18} className="text-blue-500" />
            <span>الأمان والخصوصية</span>
          </div>
        </button>
      </div>

      <button className="flex w-full items-center justify-center gap-2 rounded-2xl border border-rose-200 bg-rose-50 py-3 text-xs font-black text-rose-600 dark:border-rose-900 dark:bg-rose-950/30">
        <LogOut size={16} /> تسجيل الخروج
      </button>
    </div>
  );
}
