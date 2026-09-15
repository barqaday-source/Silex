import { ShoppingBag, MessageCircle } from "lucide-react";
import { Product } from "@/types";

export function ProductCard({
  product,
  onOpen,
  onAddToCart,
  onInquiry,
}: {
  product: Product;
  onOpen: (p: Product) => void;
  onAddToCart: (p: Product) => void;
  onInquiry?: (p: Product) => void;
}) {
  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-100 bg-white p-3 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center justify-between pb-2">
        <div className="flex items-center gap-2">
          <img src={product.seller_avatar} alt={product.seller_name} className="size-6 rounded-full object-cover" />
          <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 truncate max-w-[100px]">{product.seller_name}</span>
        </div>
        <span className={`rounded-full px-2 py-0.5 text-[9px] font-bold ${product.in_stock ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
          {product.in_stock ? 'متوفر' : 'نفذت'}
        </span>
      </div>

      <div className="relative aspect-square w-full cursor-pointer overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800" onClick={() => onOpen(product)}>
        <img src={product.image_url} alt={product.name} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
      </div>

      <div className="mt-3 text-right">
        <h3 className="line-clamp-1 text-xs font-black text-slate-800 dark:text-slate-100">{product.name}</h3>
        <p className="mt-1 text-sm font-black text-emerald-600 dark:text-emerald-400">{product.price.toLocaleString('ar-IQ')} د.ع</p>
      </div>

      <div className="mt-3 flex items-center justify-between gap-1 border-t pt-2.5 dark:border-slate-800">
        <button onClick={() => onAddToCart(product)} className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-emerald-500 py-2 text-[11px] font-bold text-white transition hover:bg-emerald-600">
          <ShoppingBag size={14} /> إضافة
        </button>
        <button type="button" onClick={() => (onInquiry ? onInquiry(product) : onOpen(product))} className="grid size-8 place-items-center rounded-xl bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-600 dark:bg-slate-800 dark:text-slate-300" aria-label="استفسار داخل سيلكس">
          <MessageCircle size={15} />
        </button>
      </div>
    </div>
  );
}
