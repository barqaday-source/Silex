import { useState } from "react";
import { Heart, MessageCircle, Share2, Bookmark, ShoppingBag, CheckCircle2, ChevronRight, Volume2, VolumeX } from "lucide-react";
import { Product } from "@/types";

export function ReelsFeed({
  products,
  onAddToCart,
  onOpenProduct,
}: {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onOpenProduct: (product: Product) => void;
}) {
  const [activeReelIndex, setActiveReelIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [liked, setLiked] = useState<Record<number, boolean>>({});
  const [saved, setSaved] = useState<Record<number, boolean>>({});

  const reels = [
    {
      id: 1,
      creator: "جود الجابر",
      username: "@jood_aljaber",
      verified: true,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      description: "تجربة سريعة لسماعة Sony WH-1000XM5 العازلة للضوضاء 🔥 الصوت خيالي للتنقل والعزل تام!",
      likesCount: 12400,
      commentsCount: 382,
      product: products[0],
      bgGradient: "bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-950",
    },
    {
      id: 2,
      creator: "أحمد العراقي",
      username: "@ahmed_tech",
      verified: true,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      description: "استعراض حذاء Nike Air Max الرياضي، راحة خرافية للمشي اليومي 👟",
      likesCount: 8900,
      commentsCount: 194,
      product: products[1],
      bgGradient: "bg-gradient-to-b from-teal-950 via-slate-900 to-black",
    },
  ];

  const current = reels[activeReelIndex] ?? reels[0];
  if (!current) return null;
  const isCurrentLiked = !!liked[current.id];
  const isCurrentSaved = !!saved[current.id];

  return (
    <div className="relative mx-auto h-[calc(100vh-140px)] w-full max-w-md overflow-hidden rounded-3xl bg-black text-white shadow-2xl">
      <div className={`absolute inset-0 ${current.bgGradient} flex flex-col justify-between p-5`}>
        {/* Top Header */}
        <div className="flex items-center justify-between z-10 pt-2">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="grid size-9 place-items-center rounded-full bg-black/40 backdrop-blur-md text-white"
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
          <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-black text-emerald-400 backdrop-blur-md border border-emerald-500/30">
            Social Commerce Reels 🎬
          </span>
        </div>

        {/* Navigation */}
        <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-between px-2 z-0">
          <button
            onClick={() => setActiveReelIndex((prev) => (prev > 0 ? prev - 1 : reels.length - 1))}
            className="grid size-10 place-items-center rounded-full bg-black/30 backdrop-blur-md opacity-60 hover:opacity-100"
          >
            <ChevronRight size={20} className="rotate-180" />
          </button>
          <button
            onClick={() => setActiveReelIndex((prev) => (prev < reels.length - 1 ? prev + 1 : 0))}
            className="grid size-10 place-items-center rounded-full bg-black/30 backdrop-blur-md opacity-60 hover:opacity-100"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Right Actions */}
        <div className="absolute left-4 bottom-24 flex flex-col items-center gap-5 z-10">
          <button
            onClick={() => setLiked((prev) => ({ ...prev, [current.id]: !prev[current.id] }))}
            className="flex flex-col items-center gap-1"
          >
            <div className={`grid size-11 place-items-center rounded-full backdrop-blur-md ${isCurrentLiked ? "bg-rose-500 text-white" : "bg-black/40 text-white"}`}>
              <Heart size={22} fill={isCurrentLiked ? "currentColor" : "none"} />
            </div>
            <span className="text-[10px] font-bold">{(current.likesCount + (isCurrentLiked ? 1 : 0)).toLocaleString()}</span>
          </button>

          <button className="flex flex-col items-center gap-1">
            <div className="grid size-11 place-items-center rounded-full bg-black/40 backdrop-blur-md text-white">
              <MessageCircle size={22} />
            </div>
            <span className="text-[10px] font-bold">{current.commentsCount}</span>
          </button>

          <button
            onClick={() => setSaved((prev) => ({ ...prev, [current.id]: !prev[current.id] }))}
            className="flex flex-col items-center gap-1"
          >
            <div className={`grid size-11 place-items-center rounded-full backdrop-blur-md ${isCurrentSaved ? "bg-amber-500 text-white" : "bg-black/40 text-white"}`}>
              <Bookmark size={22} fill={isCurrentSaved ? "currentColor" : "none"} />
            </div>
            <span className="text-[10px] font-bold">حفظ</span>
          </button>

          <button className="flex flex-col items-center gap-1">
            <div className="grid size-11 place-items-center rounded-full bg-black/40 backdrop-blur-md text-white">
              <Share2 size={22} />
            </div>
            <span className="text-[10px] font-bold">مشاركة</span>
          </button>
        </div>

        {/* Bottom Details */}
        <div className="space-y-3 z-10 text-right pr-12">
          <div className="flex items-center justify-end gap-2.5">
            <span className="rounded-full bg-emerald-500 px-2.5 py-0.5 text-[10px] font-black text-white">متابعة</span>
            <div>
              <div className="flex items-center gap-1 justify-end">
                {current.verified && <CheckCircle2 size={13} className="text-emerald-400" />}
                <h4 className="text-xs font-black">{current.creator}</h4>
              </div>
              <p className="text-[10px] text-slate-300 dir-ltr text-right">{current.username}</p>
            </div>
            <img src={current.avatar} alt={current.creator} className="size-10 rounded-full object-cover ring-2 ring-emerald-500" />
          </div>

          <p className="text-xs text-slate-200 leading-relaxed font-medium">{current.description}</p>

          {current.product && (
            <div className="flex items-center justify-between rounded-2xl bg-white/10 p-3 backdrop-blur-md border border-white/20">
              <button
                onClick={() => onAddToCart(current.product!)}
                className="flex items-center gap-1.5 rounded-xl bg-emerald-500 px-3 py-2 text-xs font-black text-white shadow-lg transition hover:bg-emerald-600"
              >
                <ShoppingBag size={15} />
                <span>إضافة بالسلة</span>
              </button>

              <div
                onClick={() => onOpenProduct(current.product!)}
                className="flex cursor-pointer items-center gap-2.5 text-right"
              >
                <div>
                  <h5 className="text-xs font-black text-white truncate max-w-[140px]">{current.product.name}</h5>
                  <span className="text-xs font-bold text-emerald-400">
                    {current.product.price.toLocaleString("ar-IQ")} د.ع
                  </span>
                </div>
                <img src={current.product.image_url} alt={current.product.name} className="size-11 rounded-xl object-cover" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}