import { CheckCircle2, Copy, MapPin, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { Store, Product } from "@/types";
import { ProductCard } from "../product/ProductCard";

export function StoreProfileModal({
  store,
  products,
  onClose,
  onOpenProduct,
  onAddToCart,
}: {
  store: Store;
  products: Product[];
  onClose: () => void;
  onOpenProduct: (p: Product) => void;
  onAddToCart: (p: Product) => void;
}) {
  const [copied, setCopied] = useState(false);
  const storeProducts = products.filter((p) => p.seller_name === store.name);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm p-4 sm:p-6" onClick={onClose}>
      <div
        className="mx-auto max-w-2xl rounded-3xl bg-white p-6 shadow-2xl dark:bg-slate-900 text-slate-900 dark:text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start">
          <button onClick={onClose} className="rounded-full bg-slate-100 p-2 dark:bg-slate-800">
            <X size={18} />
          </button>
        </div>

        <div className="mt-2 text-center space-y-3">
          <img
            src={store.avatar}
            alt={store.name}
            className="mx-auto size-24 rounded-full border-4 border-emerald-500 object-cover shadow-lg"
          />
          <div className="flex items-center justify-center gap-1.5">
            <h2 className="text-lg font-black">{store.name}</h2>
            {store.verified && <CheckCircle2 size={18} className="text-emerald-500 fill-emerald-500/20" />}
          </div>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">{store.bio || "متجر موثوق يقدم أفضل المنتجات المحلية بأعلى جودة."}</p>

          {store.location && (
            <p className="flex items-center justify-center gap-1 text-[11px] text-slate-400">
              <MapPin size={13} /> {store.location}
            </p>
          )}

          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <button type="button" onClick={() => { if (store.phone) void navigator.clipboard?.writeText(store.phone); setCopied(true); }} className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-xs font-bold dark:border-slate-800"><Copy size={15} /> {copied ? "تم نسخ الرقم" : "نسخ رقم المتجر"}</button>
            <button type="button" className="flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-500"><MessageCircle size={15} /> بدء محادثة داخل سيلكس</button>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 dark:border-slate-800 space-y-4">
          <h3 className="text-sm font-black text-right">منتجات المتجر ({storeProducts.length})</h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {storeProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpen={onOpenProduct}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
