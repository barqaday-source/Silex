import { useState, useEffect } from "react";
import {
  MapPin,
  Flame,
  Sparkles,
  Clock,
  Store as StoreIcon,
  ChevronLeft,
  ChevronRight,
  Heart,
  ShoppingBag,
  Layers,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import { CategoryBar } from "@/components/home/CategoryBar";
import { StoryBar } from "@/components/home/StoryBar";
import { Product, Store, Story } from "@/types";

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
  const [heroIndex, setHeroIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 41, seconds: 18 });

  // Hero Banners Mock Data
  const banners = [
    {
      id: 1,
      title: "تخفيضات موسمية حصرية ⚡",
      subtitle: "خصومات تصل إلى 40% على أحدث الإلكترونيات والملابس",
      bg: "from-emerald-600 to-teal-800",
      btnText: "تسوق العروض الآن",
    },
    {
      id: 2,
      title: "تشكيلة الشتاء الجديدة 🧥",
      subtitle: "استكشف أرقى الماركات من المتاجر المحلية المعتمدة",
      bg: "from-slate-900 via-indigo-950 to-slate-900",
      btnText: "استكشف التشكيلة",
    },
  ];

  // Limited Deals Countdown Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (val: number) => String(val).padStart(2, "0");

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-5 text-right pb-10">
      {/* 1. Dynamic Location Header */}
      <div className="flex items-center justify-between rounded-2xl bg-slate-100/80 p-3 dark:bg-slate-900/80">
        <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-black text-emerald-600 dark:text-emerald-400">
          توصيل سريع ⚡
        </span>
        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-300">
          <span>التوصيل إلى: <strong className="text-slate-950 dark:text-white">البصرة، العراق</strong></span>
          <MapPin size={16} className="text-emerald-500" />
        </div>
      </div>

      {/* 2. Interactive Stories Bar */}
      <StoryBar stories={stories} onSelectStory={onSelectStory} />

      {/* 3. Hero Carousel Banner */}
      <div className="relative overflow-hidden rounded-3xl shadow-lg">
        <div
          className={`bg-gradient-to-r ${banners[heroIndex].bg} p-6 text-white transition-all duration-500 min-h-[160px] flex flex-col justify-between`}
        >
          <div className="space-y-1 max-w-xs">
            <span className="inline-block rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-black backdrop-blur-md">
              عروض يومية
            </span>
            <h2 className="text-lg font-black leading-tight">{banners[heroIndex].title}</h2>
            <p className="text-xs text-slate-100/90">{banners[heroIndex].subtitle}</p>
          </div>

          <div className="flex items-center justify-between pt-4">
            <button className="rounded-xl bg-white px-4 py-2 text-xs font-black text-slate-900 shadow-md transition hover:bg-emerald-50">
              {banners[heroIndex].btnText}
            </button>

            {/* Slider Dots */}
            <div className="flex gap-1.5">
              {banners.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setHeroIndex(idx)}
                  className={`size-2 rounded-full transition-all ${
                    idx === heroIndex ? "w-6 bg-white" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4. Categories Selection Bar */}
      <CategoryBar selectedCategory={selectedCategory} onSelectCategory={onSelectCategory} />

      {/* 5. Limited Deals (Flash Sale Section) */}
      <section className="rounded-3xl border border-rose-100 bg-rose-50/40 p-4 dark:border-rose-950/40 dark:bg-rose-950/20 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 rounded-xl bg-rose-500 px-3 py-1 font-mono text-xs font-black text-white dir-ltr">
            <Clock size={14} />
            <span>
              {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <h3 className="text-sm font-black text-slate-900 dark:text-white">عروض محدودة بوقت</h3>
            <span className="text-base">🏷️</span>
          </div>
        </div>

        {/* Flash Products Scroll */}
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
          {products.slice(0, 3).map((product) => (
            <div
              key={product.id}
              onClick={() => onSelectProduct(product)}
              className="w-40 shrink-0 cursor-pointer rounded-2xl bg-white p-2.5 shadow-sm transition hover:shadow-md dark:bg-slate-900 border border-slate-100 dark:border-slate-800"
            >
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <img src={product.image_url} alt={product.name} className="size-full object-cover" />
                <span className="absolute top-1 right-1 rounded-md bg-rose-500 px-1.5 py-0.5 text-[9px] font-black text-white">
                  خصم 20%
                </span>
              </div>
              <p className="mt-2 text-xs font-black truncate">{product.name}</p>
              <div className="mt-1 flex items-center justify-between">
                <span className="text-xs font-black text-rose-600">
                  {product.price.toLocaleString("ar-IQ")} د.ع
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Personalized Feed: "مختار لك يا جود" */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <button className="flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
            عرض الكل <ChevronLeft size={14} />
          </button>
          <h3 className="flex items-center gap-1.5 text-sm font-black text-slate-900 dark:text-white">
            <Sparkles size={16} className="text-amber-500" /> مختار لك خصيصاً
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col justify-between rounded-3xl border border-slate-100 bg-white p-3 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
            >
              <div>
                <div
                  onClick={() => onSelectProduct(product)}
                  className="relative aspect-square cursor-pointer overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800"
                >
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="size-full object-cover transition duration-300 group-hover:scale-105"
                  />
                  <button
                    className="absolute top-2 left-2 grid size-7 place-items-center rounded-full bg-white/80 text-slate-700 backdrop-blur-md transition hover:bg-rose-500 hover:text-white dark:bg-slate-800/80 dark:text-slate-200"
                    aria-label="إضافة للمفضلة"
                  >
                    <Heart size={14} />
                  </button>
                </div>

                <div className="mt-2 text-right">
                  <span className="text-[10px] font-bold text-slate-400">{product.seller_name}</span>
                  <h4
                    onClick={() => onSelectProduct(product)}
                    className="cursor-pointer text-xs font-black text-slate-900 dark:text-white truncate"
                  >
                    {product.name}
                  </h4>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => onAddToCart(product)}
                  className="grid size-8 place-items-center rounded-xl bg-emerald-50 text-emerald-600 transition hover:bg-emerald-500 hover:text-white dark:bg-emerald-950/50 dark:text-emerald-400"
                >
                  <ShoppingBag size={15} />
                </button>
                <span className="text-xs font-black text-emerald-600 dark:text-emerald-400">
                  {product.price.toLocaleString("ar-IQ")} د.ع
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Recommended Stores Showcase */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <button className="flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
            اكتشف المتاجر <ChevronLeft size={14} />
          </button>
          <h3 className="flex items-center gap-1.5 text-sm font-black text-slate-900 dark:text-white">
            <StoreIcon size={16} className="text-emerald-500" /> متاجر موصى بها
          </h3>
        </div>

        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
          {stores.map((store) => (
            <div
              key={store.id}
              onClick={() => onSelectStore(store)}
              className="flex w-56 shrink-0 cursor-pointer items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3 shadow-sm transition hover:border-emerald-300 dark:border-slate-800 dark:bg-slate-900"
            >
              <img src={store.avatar} alt={store.name} className="size-12 rounded-2xl object-cover" />
              <div className="text-right flex-1 min-w-0">
                <h4 className="text-xs font-black truncate">{store.name}</h4>
                <p className="text-[10px] text-slate-400 truncate mt-0.5">{store.bio}</p>
                <span className="text-[9px] font-bold text-emerald-600 dark:text-emerald-400 mt-1 block">
                  ★ 4.9 (مترأس التقييمات)
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Curated Collections: "إطلالات ومجموعات متكاملة" */}
      <section className="rounded-3xl bg-slate-900 p-5 text-white shadow-xl space-y-3">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[10px] font-bold text-emerald-400 border border-emerald-500/30">
            تنسيقات ذكية
          </span>
          <h3 className="flex items-center gap-1.5 text-sm font-black">
            <Layers size={16} className="text-emerald-400" /> تشكيلات ومجموعات تجارية
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-2 pt-1">
          <div className="rounded-2xl bg-white/10 p-3 backdrop-blur-md space-y-2">
            <h4 className="text-xs font-black">إطلالة الرياضة الكاملة 👟</h4>
            <p className="text-[10px] text-slate-300">أحذية، ملابس وإكسسوارات لياقة</p>
            <span className="inline-block text-[10px] font-bold text-emerald-400">24 منتج ←</span>
          </div>
          <div className="rounded-2xl bg-white/10 p-3 backdrop-blur-md space-y-2">
            <h4 className="text-xs font-black">معدات مكتبية ومنزلية 💻</h4>
            <p className="text-[10px] text-slate-300">طاولات، إضاءات وأجهزة ذكية</p>
            <span className="inline-block text-[10px] font-bold text-emerald-400">18 منتج ←</span>
          </div>
        </div>
      </section>
    </div>
  );
}
