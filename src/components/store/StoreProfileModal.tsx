import { useState } from "react";
import { AlertTriangle, ArrowRight, Check, CheckCircle2, ExternalLink, Grid3X3, MessageSquare, MoreVertical, Shield, ShoppingBag, UserCheck, UserPlus, X } from "lucide-react";
import type { Product, Store } from "@/types";

export function StoreProfileModal({
  store,
  products,
  onClose,
  onOpenProduct,
  onAddToCart: _onAddToCart,
  onOpenChat,
}: {
  store: Store;
  products: Product[];
  onClose: () => void;
  onOpenProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onOpenChat?: (storeId: string) => void;
}) {
  const [following, setFollowing] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);
  const [reportReason, setReportReason] = useState("");
  const [notice, setNotice] = useState<string | null>(null);
  const storeProducts = products.filter((product) => product.seller_id === store.id || product.seller_name === store.name);

  const showNotice = (message: string) => {
    setNotice(message);
    window.setTimeout(() => setNotice(null), 2500);
  };

  return (
    <div dir="rtl" className="fixed inset-0 z-50 overflow-y-auto bg-black/60 p-3 backdrop-blur-sm sm:p-6" onClick={onClose}>
      {notice && <div className="fixed left-1/2 top-5 z-[70] flex -translate-x-1/2 items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 text-xs font-bold text-foreground shadow-xl"><Check size={14} className="text-primary" />{notice}</div>}
      <div className="mx-auto min-h-full max-w-2xl overflow-hidden rounded-3xl bg-background text-foreground shadow-2xl" onClick={(event) => event.stopPropagation()}>
        <header className="sticky top-0 z-20 flex items-center justify-between border-b border-border bg-background/90 px-4 py-3 backdrop-blur-md">
          <div className="flex items-center gap-2"><button type="button" onClick={onClose} className="rounded-xl p-2 text-muted-foreground hover:bg-muted hover:text-foreground" aria-label="إغلاق"><ArrowRight size={19} /></button><span dir="ltr" className="text-sm font-bold tracking-wide">{store.name.replace(/^متجر\s*/, "")}</span></div>
          <div className="relative"><button type="button" onClick={() => setMenuOpen((current) => !current)} className="rounded-xl p-2 text-muted-foreground hover:bg-muted hover:text-foreground" aria-label="خيارات المتجر"><MoreVertical size={19} /></button>{menuOpen && <div className="absolute left-0 top-11 z-30 w-48 rounded-2xl border border-border bg-card p-1.5 text-right shadow-xl"><button type="button" onClick={() => { setMenuOpen(false); showNotice("تم حظر المتجر"); }} className="flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-xs font-bold text-destructive hover:bg-destructive/10"><Shield size={14} /> حظر المتجر</button><button type="button" onClick={() => { setMenuOpen(false); setReportOpen(true); }} className="flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-xs font-bold text-foreground hover:bg-muted"><AlertTriangle size={14} /> إبلاغ عن المتجر</button></div>}</div>
        </header>

        <section className="mx-auto max-w-xl space-y-4 px-4 pb-5 pt-5">
          <div className="flex items-center justify-between gap-5"><img src={store.avatar} alt={store.name} className="size-20 shrink-0 rounded-full object-cover ring-2 ring-primary/30" /><div className="grid flex-1 grid-cols-3 text-center"><Stat value={String(storeProducts.length)} label="منتجات" /><Stat value="1.2K" label="متابعون" /><Stat value="98%" label="التقييم" /></div></div>
          <div className="space-y-1 text-xs"><div className="flex items-center gap-1.5"><h1 className="text-sm font-black">{store.name}</h1>{store.verified && <CheckCircle2 size={15} className="text-primary" />}</div><p className="leading-relaxed text-muted-foreground">{store.bio || "متجر موثوق يقدم أفضل المنتجات المحلية بأعلى جودة."}</p>{store.location && <p className="text-[11px] text-muted-foreground">{store.location}</p>}{store.phone && <p dir="ltr" className="w-fit text-primary"><ExternalLink size={12} className="ml-1 inline" />{store.phone}</p>}</div>
          <div className="flex gap-2"><button type="button" onClick={() => { setFollowing((current) => !current); showNotice(following ? "تم إلغاء المتابعة" : "تمت المتابعة بنجاح"); }} className={`flex-1 rounded-xl py-2.5 text-xs font-bold transition ${following ? "border border-border bg-card text-foreground" : "bg-primary text-primary-foreground hover:bg-primary/90"}`}>{following ? <><UserCheck size={15} className="ml-1 inline" />تمت المتابعة</> : <><UserPlus size={15} className="ml-1 inline" />متابعة</>}</button><button type="button" onClick={() => { onClose(); onOpenChat?.(store.id); }} className="flex-1 rounded-xl border border-border bg-card py-2.5 text-xs font-bold text-foreground hover:bg-muted"><MessageSquare size={15} className="ml-1 inline" />مراسلة</button></div>
        </section>

        <div className="border-t border-border"><div className="flex justify-center border-b border-border"><div className="border-b-2 border-primary px-6 py-3 text-primary"><Grid3X3 size={17} /></div></div><div className="grid grid-cols-3 gap-0.5 bg-border p-0.5">{storeProducts.map((product) => <button type="button" key={product.id} onClick={() => onOpenProduct(product)} className="group relative aspect-square overflow-hidden bg-muted"><img src={product.image_url} alt={product.name} className="size-full object-cover transition duration-300 group-hover:scale-105" /><span className="absolute inset-x-1 bottom-1 truncate rounded bg-black/60 px-1 py-1 text-[9px] text-white opacity-0 transition group-hover:opacity-100">{product.name}</span></button>)}{storeProducts.length === 0 && <div className="col-span-3 grid min-h-48 place-items-center p-8 text-center text-xs text-muted-foreground"><ShoppingBag size={24} className="mb-2 text-primary" />لا توجد منتجات منشورة حالياً</div>}</div></div>
      </div>

      {reportOpen && <div className="fixed inset-0 z-[60] grid place-items-center bg-black/60 p-4" onClick={() => setReportOpen(false)}><div className="w-full max-w-sm space-y-4 rounded-3xl border border-border bg-card p-5 shadow-2xl" onClick={(event) => event.stopPropagation()}><div className="flex items-center justify-between"><button type="button" onClick={() => setReportOpen(false)} className="rounded-lg p-1 text-muted-foreground hover:bg-muted" aria-label="إغلاق"><X size={18} /></button><h3 className="text-sm font-black">إبلاغ عن المتجر</h3></div><div className="space-y-2 text-xs">{["حساب مزيف", "محتوى غير لائق", "احتيال"].map((reason) => <button type="button" key={reason} onClick={() => setReportReason(reason)} className={`w-full rounded-xl border p-3 text-right transition ${reportReason === reason ? "border-primary bg-secondary text-foreground" : "border-border text-muted-foreground hover:bg-muted"}`}>{reason}</button>)}</div><div className="flex gap-2"><button type="button" disabled={!reportReason} onClick={() => { setReportOpen(false); showNotice("تم إرسال البلاغ بنجاح"); }} className="flex-1 rounded-xl bg-primary py-2.5 text-xs font-bold text-primary-foreground disabled:opacity-50">إرسال البلاغ</button><button type="button" onClick={() => setReportOpen(false)} className="rounded-xl bg-muted px-4 py-2.5 text-xs font-bold">إلغاء</button></div></div></div>}
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return <div><div className="text-sm font-black">{value}</div><div className="text-[11px] text-muted-foreground">{label}</div></div>;
}
