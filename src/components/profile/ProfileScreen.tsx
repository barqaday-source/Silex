import { useState } from "react";
import {
  User,
  ShoppingBag,
  Heart,
  ShieldCheck,
  MapPin,
  Bell,
  LogOut,
  QrCode,
  Share2,
  Wallet,
  Award,
  Store,
  Clock,
  Ticket,
  CreditCard,
  Sparkles,
  TrendingUp,
  PackageCheck,
  PlusCircle,
  ChevronLeft,
  CheckCircle2,
} from "lucide-react";
import { MerchantAiAssistant } from "@/components/ai/MerchantAiAssistant";
import { InventoryManager } from "@/components/inventory/InventoryManager";
import { OrderPipeline } from "@/components/seller/OrderPipeline";
import { CodLedger } from "@/components/seller/CodLedger";
import { SellerAnalytics } from "@/components/seller/SellerAnalytics";
import { BulkOperations } from "@/components/seller/BulkOperations";
import type { Product } from "@/types";

export function ProfileScreen({
  accountMode = "personal",
  onEnterSellerMode,
  onExitSellerMode,
  onAddToCart,
}: {
  accountMode?: "personal" | "seller";
  onEnterSellerMode?: () => void;
  onExitSellerMode?: () => void;
  onAddToCart?: (product: Product) => void;
}) {
  const [showQrModal, setShowQrModal] = useState(false);

  return (
    <div className="space-y-4 pb-20 text-right">
      {/* Explicit entry points keep shopping and selling workflows separate. */}
      <div className="flex items-center justify-between rounded-2xl border border-emerald-100 bg-white p-3 shadow-sm dark:border-emerald-950/50 dark:bg-slate-900">
        <button
          onClick={accountMode === "seller" ? onExitSellerMode : onEnterSellerMode}
          className="flex items-center gap-2 rounded-xl bg-emerald-500 px-3 py-2 text-[11px] font-black text-white shadow-sm transition hover:bg-emerald-600"
        >
          {accountMode === "seller" ? <User size={14} /> : <Store size={14} />}
          {accountMode === "seller" ? "العودة للتسوق" : "فتح لوحة التاجر"}
        </button>
        <div className="text-right">
          <p className="text-[10px] font-bold text-slate-400">مساحة العمل الحالية</p>
          <p className="text-xs font-black text-slate-800 dark:text-white">{accountMode === "seller" ? "إدارة المتجر" : "الحساب الشخصي"}</p>
        </div>
      </div>

      {/* Personal account stays focused on shopping. */}
      {false && <div className="flex rounded-2xl bg-slate-200/70 p-1 dark:bg-slate-800/80">
        <button
          onClick={() => undefined}
          className={`flex-1 rounded-xl py-2 text-xs font-black transition ${
            accountMode === "personal"
              ? "bg-white text-emerald-600 shadow-md dark:bg-slate-900 dark:text-emerald-400"
              : "text-slate-600 dark:text-slate-400"
          }`}
        >
          👤 حساب شخصي (مشتري)
        </button>
        <button
          onClick={() => undefined}
          className={`flex-1 rounded-xl py-2 text-xs font-black transition ${
            accountMode === "seller"
              ? "bg-white text-emerald-600 shadow-md dark:bg-slate-900 dark:text-emerald-400"
              : "text-slate-600 dark:text-slate-400"
          }`}
        >
          🏪 متجري (بائع)
        </button>
      </div>}

      {/* HEADER SECTION: Identity & Avatar */}
      {accountMode === "personal" ? (
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-800 p-5 text-white shadow-xl">
          <div className="flex items-start justify-between">
            <div className="flex gap-2">
              <button
                onClick={() => setShowQrModal(true)}
                className="grid size-9 place-items-center rounded-xl bg-white/15 backdrop-blur-md transition hover:bg-white/25"
                title="رمز QR"
              >
                <QrCode size={18} />
              </button>
              <button
                className="grid size-9 place-items-center rounded-xl bg-white/15 backdrop-blur-md transition hover:bg-white/25"
                title="مشاركة البروفايل"
              >
                <Share2 size={18} />
              </button>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="flex items-center gap-1.5 justify-end">
                  <span className="rounded-md bg-emerald-400/30 px-1.5 py-0.5 text-[10px] font-bold text-emerald-100">
                    عضو منذ 2025
                  </span>
                  <h2 className="text-base font-black">جود الجابر</h2>
                </div>
                <p className="text-[11px] text-emerald-100/80 dir-ltr font-mono">@jood_aljaber</p>
                <div className="mt-1 flex items-center gap-2 justify-end text-[10px] font-bold">
                  <span className="flex items-center gap-0.5 text-amber-300">
                    ★ 4.9 (28 تقييم)
                  </span>
                  <span className="flex items-center gap-1 text-emerald-200">
                    <CheckCircle2 size={12} className="text-emerald-300" /> موثق
                  </span>
                </div>
              </div>

              <div className="relative">
                <div className="grid size-16 place-items-center rounded-2xl bg-white/20 font-black text-2xl text-white backdrop-blur-md border-2 border-white/30">
                  ج
                </div>
              </div>
            </div>
          </div>

          {/* Quick Wallet & Loyalty Card */}
          <div className="mt-5 grid grid-cols-2 gap-2 border-t border-white/15 pt-4">
            <div className="flex items-center gap-2.5 rounded-2xl bg-white/10 p-2.5 backdrop-blur-md">
              <div className="grid size-8 place-items-center rounded-xl bg-amber-400/20 text-amber-300">
                <Wallet size={16} />
              </div>
              <div className="text-right">
                <span className="text-[9px] text-emerald-100">رصيد المحفظة</span>
                <p className="text-xs font-black">125,000 د.ع</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 rounded-2xl bg-white/10 p-2.5 backdrop-blur-md">
              <div className="grid size-8 place-items-center rounded-xl bg-purple-400/20 text-purple-300">
                <Award size={16} />
              </div>
              <div className="text-right">
                <span className="text-[9px] text-emerald-100">نقاط الولاء</span>
                <p className="text-xs font-black">450 نقطة ⭐</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* SELLER MODE HEADER */
        <div className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-emerald-50 p-5 text-slate-900 shadow-sm dark:border-emerald-950/50 dark:bg-emerald-950/20 dark:text-white">
          <div className="flex items-start justify-between">
            <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-[10px] font-black text-emerald-400 border border-emerald-500/30">
              Top Seller ★
            </span>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <h2 className="text-base font-black">متجر بغداد الرقمي</h2>
                <p className="text-[11px] text-slate-500 dark:text-slate-300">1.2K مبيعات • 98% تقييم إيجابي</p>
              </div>
              <div className="grid size-14 place-items-center rounded-2xl bg-emerald-500 text-white font-black text-xl">
                🏪
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2 border-t border-emerald-200 pt-3 text-center dark:border-emerald-900">
            <div>
              <span className="text-[10px] text-slate-500 dark:text-slate-300">الطلبات اليوم</span>
              <p className="text-sm font-black text-emerald-400">18</p>
            </div>
            <div>
              <span className="text-[10px] text-slate-400">وقت الرد</span>
              <p className="text-sm font-black text-slate-700 dark:text-slate-100">5 دقائق</p>
            </div>
            <div>
              <span className="text-[10px] text-slate-500 dark:text-slate-300">المنتجات النشطة</span>
              <p className="text-sm font-black text-slate-700 dark:text-slate-100">42</p>
            </div>
          </div>
        </div>
      )}

      {/* CONTENT LEVEL 2: Shopping vs Selling Sections */}
      {accountMode === "personal" ? (
        <>
          {/* ORDERS TRACKING HUB */}
          <div className="rounded-3xl border border-slate-100 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1 cursor-pointer">
                عرض الكل <ChevronLeft size={14} />
              </span>
              <h3 className="text-xs font-black text-slate-800 dark:text-slate-100 flex items-center gap-1.5">
                <ShoppingBag size={15} className="text-emerald-500" /> متابعة الطلبات
              </h3>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="rounded-2xl bg-slate-50 p-2.5 dark:bg-slate-800/50">
                <span className="text-lg">📦</span>
                <p className="text-[10px] font-black text-slate-700 dark:text-slate-300 mt-1">قيد التنفيذ (2)</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-2.5 dark:bg-slate-800/50">
                <span className="text-lg">🚚</span>
                <p className="text-[10px] font-black text-slate-700 dark:text-slate-300 mt-1">تم الشحن (1)</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-2.5 dark:bg-slate-800/50">
                <span className="text-lg">✅</span>
                <p className="text-[10px] font-black text-slate-700 dark:text-slate-300 mt-1">مكتملة (14)</p>
              </div>
            </div>
          </div>

          {/* SHOPPING HUB MENU */}
          <div className="rounded-3xl border border-slate-100 bg-white p-2 shadow-sm dark:border-slate-800 dark:bg-slate-900 space-y-1">
            <button className="flex w-full items-center justify-between rounded-2xl p-3 text-xs font-bold text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800">
              <ChevronLeft size={16} className="text-slate-400" />
              <div className="flex items-center gap-3">
                <span>المفضلة والمنتجات المحفوظة</span>
                <Heart size={18} className="text-rose-500" />
              </div>
            </button>

            <button className="flex w-full items-center justify-between rounded-2xl p-3 text-xs font-bold text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800">
              <ChevronLeft size={16} className="text-slate-400" />
              <div className="flex items-center gap-3">
                <span>الكوبونات وقسائم الخصم</span>
                <Ticket size={18} className="text-amber-500" />
              </div>
            </button>

            <button className="flex w-full items-center justify-between rounded-2xl p-3 text-xs font-bold text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800">
              <ChevronLeft size={16} className="text-slate-400" />
              <div className="flex items-center gap-3">
                <span>عناوين التوصيل المخزنة</span>
                <MapPin size={18} className="text-emerald-500" />
              </div>
            </button>

            <button className="flex w-full items-center justify-between rounded-2xl p-3 text-xs font-bold text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800">
              <ChevronLeft size={16} className="text-slate-400" />
              <div className="flex items-center gap-3">
                <span>طرق الدفع والبطاقات</span>
                <CreditCard size={18} className="text-blue-500" />
              </div>
            </button>
          </div>
        </>
      ) : (
        /* SELLER DASHBOARD CONTROLS */
        <div className="grid gap-4 space-y-0 xl:grid-cols-2">
          <div className="xl:col-span-2"><OrderPipeline /></div>
          <CodLedger />
          <SellerAnalytics />
          <div className="xl:col-span-2"><BulkOperations /></div>
          <InventoryManager />
          <MerchantAiAssistant onAddToCart={onAddToCart} />

          <div className="grid grid-cols-2 gap-2">
            <button className="flex flex-col items-center justify-center rounded-3xl bg-emerald-500 p-4 text-white shadow-md hover:bg-emerald-600 transition space-y-2">
              <PlusCircle size={24} />
              <span className="text-xs font-black">إضافة منتج جديد</span>
            </button>

            <button className="flex flex-col items-center justify-center rounded-3xl border border-slate-100 bg-white p-4 text-slate-800 shadow-sm hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-white space-y-2">
              <TrendingUp size={24} className="text-emerald-500" />
              <span className="text-xs font-black">تحليلات المبيعات</span>
            </button>
          </div>

          <div className="xl:col-span-2 rounded-3xl border border-slate-100 bg-white p-2 shadow-sm dark:border-slate-800 dark:bg-slate-900 space-y-1">
            <button className="flex w-full items-center justify-between rounded-2xl p-3 text-xs font-bold text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800">
              <ChevronLeft size={16} className="text-slate-400" />
              <div className="flex items-center gap-3">
                <span>إدارة مخزون المتجر</span>
                <Store size={18} className="text-emerald-500" />
              </div>
            </button>

            <button className="flex w-full items-center justify-between rounded-2xl p-3 text-xs font-bold text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800">
              <ChevronLeft size={16} className="text-slate-400" />
              <div className="flex items-center gap-3">
                <span>الطلبات الواردة من الزبائن</span>
                <PackageCheck size={18} className="text-blue-500" />
              </div>
            </button>
          </div>
        </div>
      )}

      {/* SYSTEM SETTINGS & SECURITY */}
      <div className="rounded-3xl border border-slate-100 bg-white p-2 shadow-sm dark:border-slate-800 dark:bg-slate-900 space-y-1">
        <button className="flex w-full items-center justify-between rounded-2xl p-3 text-xs font-bold text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800">
          <ChevronLeft size={16} className="text-slate-400" />
          <div className="flex items-center gap-3">
            <span>تنبيهات الإشعارات</span>
            <Bell size={18} className="text-purple-500" />
          </div>
        </button>

        <button className="flex w-full items-center justify-between rounded-2xl p-3 text-xs font-bold text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800">
          <ChevronLeft size={16} className="text-slate-400" />
          <div className="flex items-center gap-3">
            <span>الخصوصية والجلسات النشطة</span>
            <ShieldCheck size={18} className="text-slate-500" />
          </div>
        </button>
      </div>

      <button className="flex w-full items-center justify-center gap-2 rounded-2xl border border-rose-200 bg-rose-50 py-3.5 text-xs font-black text-rose-600 transition hover:bg-rose-100 dark:border-rose-900/50 dark:bg-rose-950/30">
        <LogOut size={16} /> تسجيل الخروج من الحساب
      </button>

      {/* QR MODAL */}
      {showQrModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={() => setShowQrModal(false)}
        >
          <div
            className="w-full max-w-xs rounded-3xl bg-white p-6 text-center shadow-2xl dark:bg-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-sm font-black text-slate-900 dark:text-white">رمز QR الخاص بحسابك</h3>
            <p className="mt-1 text-[11px] text-slate-400">امسح الرمز للتواصل مباشرة مع @jood_aljaber</p>

            <div className="my-5 grid aspect-square place-items-center rounded-2xl bg-slate-100 dark:bg-slate-800 border-2 border-dashed border-emerald-500 p-4">
              <QrCode size={120} className="text-emerald-600 dark:text-emerald-400" />
            </div>

            <button
              onClick={() => setShowQrModal(false)}
              className="w-full rounded-2xl bg-slate-100 py-2.5 text-xs font-black text-slate-700 dark:bg-slate-800 dark:text-slate-200"
            >
              إغلاق
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
