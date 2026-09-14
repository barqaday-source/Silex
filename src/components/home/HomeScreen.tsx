import { useState } from "react";
import { Product, Store, Story } from "@/types";
import { Sparkles } from "lucide-react";

export function HomeScreen({
  products,
  stores,
  stories,
  selectedCategory,
  onSelectCategory,
  onSelectStory,
  onSelectProduct,
  onSelectStore,
  onAddToCart,
}: {
  products: Product[];
  stores: Store[];
  stories: Story[];
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  onSelectStory: (story: Story) => void;
  onSelectProduct: (product: Product) => void;
  onSelectStore: (store: Store) => void;
  onAddToCart: (product: Product) => void;
}) {
  const banners = [
    { id: 1, title: "عروض الموسم 🔥", subtitle: "خصومات تصل إلى 50% على الإلكترونيات", btnText: "تسوق الآن" },
    { id: 2, title: "متاجر موثقة ⭐️", subtitle: "توصيل سريع لكافة المحافظات", btnText: "استكشف المتاجر" },
  ];

  const categories = [
    { id: "all", label: "الكل" },
    { id: "electronics", label: "إلكترونيات" },
    { id: "fashion", label: "أزياء" },
    { id: "home", label: "المنزل" },
  ];

  const activeBanner = banners[0];

  return (
    <div className="space-y-6 text-right pb-10">
      {/* Stories Bar */}
      <div className="flex gap-3 overflow-x-auto no-scrollbar py-2">
        {stories.map((story) => (
          <button
            key={story.id}
            onClick={() => onSelectStory(story)}
            className="flex flex-col items-center gap-1 shrink-0"
          >
            <div className="size-16 rounded-full p-0.5 bg-gradient-to-tr from-amber-500 via-rose-500 to-emerald-500">
              <img
                src={story.storeAvatar}
                alt={story.storeName}
                className="size-full rounded-full object-cover border-2 border-white dark:border-slate-900"
              />
            </div>
            <span className="text-[10px] font-bold truncate max-w-[64px]">{story.storeName}</span>
          </button>
        ))}
      </div>

      {/* Banner Slider */}
      {activeBanner && (
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-700 p-6 text-white shadow-xl">
          <h2 className="text-xl font-black">{activeBanner.title}</h2>
          <p className="text-xs text-slate-100 mt-1">{activeBanner.subtitle}</p>
          <button className="mt-4 rounded-xl bg-white px-4 py-2 text-xs font-black text-emerald-800 shadow-md transition hover:bg-slate-100">
            {activeBanner.btnText}
          </button>
        </div>
      )}

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`rounded-2xl px-4 py-2 text-xs font-bold transition shrink-0 ${
              selectedCategory === cat.id
                ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/20"
                : "bg-white text-slate-600 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-300"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-emerald-600">عرض الكل</span>
          <h3 className="text-sm font-black flex items-center gap-1">
            <Sparkles size={16} className="text-amber-500" /> المنتجات المقترحة
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => onSelectProduct(product)}
              className="group cursor-pointer rounded-2xl border border-slate-100 bg-white p-3 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="aspect-square overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
                <img src={product.image_url} alt={product.name} className="size-full object-cover transition duration-300 group-hover:scale-105" />
              </div>
              <div className="mt-2 space-y-1">
                <h4 className="text-xs font-black truncate">{product.name}</h4>
                <p className="text-[10px] text-slate-400">{product.seller_name}</p>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs font-black text-emerald-600">{product.price.toLocaleString("ar-IQ")} د.ع</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(product);
                    }}
                    className="rounded-lg bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-600 hover:bg-emerald-500 hover:text-white transition"
                  >
                    + إضافة
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}