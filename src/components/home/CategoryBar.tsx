import { 
  Grid, 
  Smartphone, 
  Shirt, 
  Sparkles, 
  Watch, 
  Home, 
  ShoppingBag, 
  Gamepad2, 
  Car, 
  Utensils 
} from "lucide-react";

export type Category = {
  id: string;
  name: string;
  icon: React.ElementType;
  badge?: string;
};

const CATEGORIES: Category[] = [
  { id: "all", name: "الكل", icon: Grid },
  { id: "electronics", name: "إلكترونيات وهواتف", icon: Smartphone, badge: "شائع" },
  { id: "fashion", name: "أزياء وموضة", icon: Shirt },
  { id: "beauty", name: "عناية وتجميل", icon: Sparkles },
  { id: "watches", name: "ساعات واكسسوارات", icon: Watch },
  { id: "home", name: "أثاث ومستلزمات منزل", icon: Home },
  { id: "supermarket", name: "سوبرماركت ومواد غذائية", icon: ShoppingBag },
  { id: "gaming", name: "ألعاب وقيمنق", icon: Gamepad2, badge: "عروض" },
  { id: "automotive", name: "سيارات وقطع غيار", icon: Car },
  { id: "food", name: "مطاعم وحلويات", icon: Utensils },
];

export function CategoryBar({
  selectedCategory,
  onSelectCategory,
}: {
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
}) {
  return (
    <div className="w-full overflow-x-auto py-2.5 no-scrollbar scroll-smooth border-b border-slate-100 dark:border-slate-800">
      <div className="flex min-w-max items-center gap-2 px-4">
        {CATEGORIES.map((cat) => {
          const Icon = cat.icon;
          const isSelected = selectedCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`relative flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-bold transition-all duration-200 active:scale-95 ${
                isSelected
                  ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/20 scale-105"
                  : "bg-slate-100/80 text-slate-700 hover:bg-slate-200/80 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:bg-slate-800"
              }`}
            >
              <Icon size={16} className={isSelected ? "text-white" : "text-emerald-500"} />
              <span>{cat.name}</span>

              {cat.badge && (
                <span
                  className={`mr-1 rounded-full px-1.5 py-0.5 text-[9px] font-black leading-none ${
                    isSelected
                      ? "bg-white text-emerald-600"
                      : "bg-rose-500 text-white"
                  }`}
                >
                  {cat.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
