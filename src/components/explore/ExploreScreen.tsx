import { Search, Flame, Store, Tag, Sparkles } from "lucide-react";
import { Product, Store as StoreType } from "@/types";

export function ExploreScreen({
  products,
  stores,
  onSelectProduct,
  onSelectStore,
}: {
  products: Product[];
  stores: StoreType[];
  onSelectProduct: (p: Product) => void;
  onSelectStore: (s: StoreType) => void;
}) {
  const hashtags = ["#عروض_الشتاء", "#إلكترونيات_البصرة", "#أحذية_رياضية", "#موضة_2026", "#توصيل_سريع"];

  return (
    <div className="space-y-5 text-right pb-10">
      {/* 1. Explore Search Header */}
      <div className="space-y-2">
        <h2 className="text-base font-black">استكشف المجتمع والسوق 🔥</h2>
        <div className="relative">
          <Search size={16} className="absolute right-3.5 top-3 text-slate-400" />
          <input
            type="text"
            placeholder="ابحث عن أشخاص، متاجر، منشورات، أو منتجات..."
            className="w-full rounded-2xl border border-slate-200 bg-white py-2.5 pr-10 pl-4 text-xs font-medium outline-none shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-white"
          />
        </div>
      </div>

      {/* 2. Trending Hashtags */}
      <div className="space-y-2">
        <span className="text-xs font-bold text-slate-400">الهاشتاغات الأكثر تداولاً</span>
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          {hashtags.map((tag, idx) => (
            <span
              key={idx}
              className="shrink-0 cursor-pointer rounded-xl bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-600 dark:bg-slate-800 dark:text-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* 3. Featured Stores Section */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-emerald-600">عرض الكل ←</span>
          <h3 className="flex items-center gap-1.5 text-xs font-black">
            <Store size={15} className="text-emerald-500" /> المتاجر الأكثر شعبية
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {stores.map((store) => (
            <div
              key={store.id}
              onClick={() => onSelectStore(store)}
              className="flex cursor-pointer items-center justify-between rounded-2xl border border-slate-100 bg-white p-3 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="text-right flex-1 min-w-0 pr-2">
                <h4 className="text-xs font-black truncate">{store.name}</h4>
                <p className="text-[10px] text-slate-400 truncate">{store.bio}</p>
              </div>
              <img src={store.avatar} alt={store.name} className="size-10 rounded-xl object-cover ring-2 ring-emerald-500/20" />
            </div>
          ))}
        </div>
      </div>

      {/* 4. Visual Exploration Grid */}
      <div className="space-y-3">
        <h3 className="flex items-center justify-end gap-1.5 text-xs font-black">
          <Sparkles size={15} className="text-amber-500" /> اكتشاف المنتجات والصور
        </h3>

        <div className="grid grid-cols-3 gap-2">
          {products.map((product, idx) => (
            <div
              key={product.id}
              onClick={() => onSelectProduct(product)}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800 ${
                idx % 4 === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
              }`}
            >
              <img src={product.image_url} alt={product.name} className="size-full object-cover transition duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition group-hover:opacity-100 flex items-end p-2 text-white">
                <div>
                  <p className="text-[10px] font-black truncate">{product.name}</p>
                  <span className="text-[9px] text-emerald-300 font-bold">{product.price.toLocaleString("ar-IQ")} د.ع</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
