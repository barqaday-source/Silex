import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  Heart,
  Share2,
  ShoppingBag,
  X,
} from "lucide-react";
import type { Story } from "@/types/socialCommerce";

type StoryViewerProps = {
  stories: Story[];
  initialIndex?: number;
  onClose: () => void;
  onNavigateToProduct: (productId: string) => void;
};

export function StoryViewer({
  stories,
  initialIndex = 0,
  onClose,
  onNavigateToProduct,
}: StoryViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [liked, setLiked] = useState(false);
  const [progress, setProgress] = useState(0);
  const activeStory = stories[currentIndex];

  useEffect(() => {
    setProgress(0);
    const timer = window.setInterval(() => {
      setProgress((current) => {
        if (current >= 100) {
          window.clearInterval(timer);
          if (currentIndex < stories.length - 1) {
            setCurrentIndex((index) => index + 1);
          } else {
            onClose();
          }
          return 100;
        }
        return current + 2;
      });
    }, 100);

    return () => window.clearInterval(timer);
  }, [currentIndex, onClose, stories.length]);

  if (!activeStory) return null;

  const goToPrevious = () => {
    setCurrentIndex((current) => Math.max(0, current - 1));
  };

  const goToNext = () => {
    if (currentIndex >= stories.length - 1) {
      onClose();
      return;
    }
    setCurrentIndex((current) => current + 1);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-2 backdrop-blur-md" dir="rtl">
      <div className="relative flex h-full max-h-[92vh] w-full max-w-md flex-col justify-between overflow-hidden rounded-3xl bg-slate-900 shadow-2xl">
        <img src={activeStory.mediaUrl} alt={activeStory.caption ?? "Story content"} className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90" />

        <div className="relative z-10 space-y-3 p-3">
          <div className="flex gap-1">
            {stories.map((story, index) => (
              <div key={story.id} className="h-1 flex-1 overflow-hidden rounded-full bg-white/30">
                <div className={`h-full bg-white ${index < currentIndex ? "w-full" : index === currentIndex ? "transition-[width]" : "w-0"}`} style={index === currentIndex ? { width: `${progress}%` } : undefined} />
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between text-white">
            <button type="button" onClick={onClose} className="grid size-9 place-items-center rounded-full bg-black/30 hover:bg-white/20" aria-label="إغلاق الستوري"><X size={18} /></button>
            <button type="button" className="flex items-center gap-2 text-right" aria-label={`فتح متجر ${activeStory.storeName}`}>
              <div><p className="text-xs font-black">{activeStory.storeName}</p><p className="text-[10px] text-white/70">{activeStory.contentType === "discount" ? "عرض خاص" : "ستوريات المتجر"}</p></div>
              <img src={activeStory.storeAvatar} alt={activeStory.storeName} className="size-10 rounded-full border-2 border-emerald-400 object-cover" />
            </button>
          </div>
        </div>

        <button type="button" onClick={goToPrevious} className="absolute right-2 top-1/2 z-20 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-black/20 text-white/70 hover:text-white" aria-label="الستوري السابقة"><ChevronRight size={24} /></button>
        <button type="button" onClick={goToNext} className="absolute left-2 top-1/2 z-20 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-black/20 text-white/70 hover:text-white" aria-label="الستوري التالية"><ChevronLeft size={24} /></button>

        <div className="relative z-10 space-y-3 p-4 text-white">
          {activeStory.productId && (
            <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/20 bg-white/10 p-3 backdrop-blur-md">
              <button type="button" onClick={() => onNavigateToProduct(activeStory.productId!)} className="rounded-xl bg-white px-3 py-2 text-[11px] font-black text-slate-900 shadow-lg hover:bg-emerald-50">عرض المنتج</button>
              <div className="flex items-center gap-2 text-right"><div><p className="text-xs font-black">منتج مرتبط بالستوري</p>{activeStory.productPrice !== undefined && <p className="text-xs font-black text-emerald-300">{activeStory.productPrice.toLocaleString("ar-IQ")} د.ع</p>}</div><ShoppingBag size={18} className="text-emerald-300" /></div>
            </div>
          )}
          {activeStory.caption && <p className="text-sm font-medium leading-relaxed">{activeStory.caption}</p>}
          <div className="flex items-center justify-between border-t border-white/20 pt-3 text-white/80">
            <div className="flex items-center gap-3"><button type="button" onClick={() => setLiked((current) => !current)} className={liked ? "text-rose-400" : "hover:text-rose-300"} aria-label="إعجاب"><Heart size={19} fill={liked ? "currentColor" : "none"} /></button><button type="button" className="hover:text-emerald-300" aria-label="مشاركة"><Share2 size={18} /></button></div>
            {activeStory.viewsCount !== undefined && <span className="flex items-center gap-1 text-[10px]"><Eye size={14} /> {activeStory.viewsCount} مشاهدة</span>}
          </div>
        </div>
      </div>
    </div>
  );
}
