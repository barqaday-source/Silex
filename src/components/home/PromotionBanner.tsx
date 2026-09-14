export function PromotionBanner() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-800 p-6 text-white shadow-xl my-4">
      <div className="relative z-10 max-w-xs text-right">
        <span className="rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold backdrop-blur-md">عروض الموسم</span>
        <h2 className="mt-2 text-xl font-black">تنزيلات تصل إلى 50%</h2>
        <p className="mt-1 text-xs text-emerald-100">احصل على أفضل المنتجات بأفضل الأسعار المتاحة</p>
      </div>
    </div>
  );
}
