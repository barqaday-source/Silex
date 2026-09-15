import { useState, useEffect, type FormEvent } from "react";
import { ChevronLeft, ChevronRight, Heart, Send, ShoppingBag, X } from "lucide-react";
import { Product, Story } from "@/types";

export function StoryViewerModal({
  story,
  stories = [story],
  onClose,
  onOpenStore,
  products,
  onAddToCart,
  onSendMessage,
}: {
  story: Story;
  stories?: Story[];
  onClose: () => void;
  onOpenStore: (storeId: string) => void;
  products: Product[];
  onAddToCart: (product: Product) => void;
  onSendMessage?: (storeId: string, storeName: string, message: string) => void;
}) {
  const initialIndex = Math.max(0, stories.findIndex((item) => item.id === story.id));
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [progress, setProgress] = useState(0);
  const [liked, setLiked] = useState(false);
  const [message, setMessage] = useState("");
  const [isPaused, setIsPaused] = useState(false);
  const [sent, setSent] = useState(false);
  const activeStory = stories[activeIndex] ?? story;
  const storyProduct = products.find((product) => product.id === activeStory.productId);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          if (activeIndex < stories.length - 1) {
            setActiveIndex((current) => current + 1);
            return 0;
          }
          onClose();
          return 0;
        }
        return prev + 2;
      });
    }, 100);
    return () => clearInterval(timer);
  }, [activeIndex, isPaused, onClose, stories.length]);

  useEffect(() => {
    setProgress(0);
    setLiked(false);
    setMessage("");
    setSent(false);
  }, [activeIndex]);

  const goTo = (index: number) => {
    if (index < 0) {
      setProgress(0);
      return;
    }
    if (index >= stories.length) {
      onClose();
      return;
    }
    setActiveIndex(index);
  };

  const sendReply = (event: FormEvent) => {
    event.preventDefault();
    const trimmedMessage = message.trim();
    if (!trimmedMessage) return;
    onSendMessage?.(activeStory.storeId, activeStory.storeName, trimmedMessage);
    setMessage("");
    setSent(true);
    window.setTimeout(() => setSent(false), 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md"
      onMouseDown={() => setIsPaused(true)}
      onMouseUp={() => setIsPaused(false)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      dir="rtl"
    >
      <div className="relative flex h-full w-full max-w-md flex-col justify-between overflow-hidden p-4">
        <img src={activeStory.mediaUrl} alt={activeStory.caption ?? "Story"} className="absolute inset-0 size-full object-contain" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90" />

        <div className="space-y-3 z-10">
          <div className="flex h-1 gap-1">
            {stories.map((item, index) => <div key={item.id} className="flex-1 overflow-hidden rounded-full bg-white/30"><div className="h-full bg-white transition-[width] duration-100" style={{ width: index < activeIndex ? "100%" : index === activeIndex ? `${progress}%` : "0%" }} /></div>)}
          </div>

          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => onOpenStore(activeStory.storeId)}
              className="flex items-center gap-2 text-white"
            >
              <img
                src={activeStory.storeAvatar}
                alt={activeStory.storeName}
                className="size-10 rounded-full border-2 border-primary object-cover"
              />
              <div className="text-right">
                <p className="text-xs font-black">{activeStory.storeName}</p>
                <p className="text-[10px] text-white/70">{activeStory.createdAt}</p>
              </div>
            </button>

            <button type="button" onClick={onClose} className="grid size-9 place-items-center rounded-full bg-white/20 text-white hover:bg-white/30" aria-label="إغلاق الستوري">
              <X size={18} />
            </button>
          </div>
        </div>

        <button type="button" onClick={() => goTo(activeIndex + 1)} className="absolute left-2 top-1/2 z-20 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-black/20 text-white/70 hover:text-white" aria-label="الستوري التالية"><ChevronLeft size={24} /></button>
        <button type="button" onClick={() => goTo(activeIndex - 1)} className="absolute right-2 top-1/2 z-20 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-black/20 text-white/70 hover:text-white" aria-label="الستوري السابقة"><ChevronRight size={24} /></button>

        <div className="relative z-10 space-y-3 text-white">
          {storyProduct && <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/20 bg-black/55 p-3 backdrop-blur-md"><div className="min-w-0 text-right"><p className="truncate text-xs font-black">{storyProduct.name}</p><p className="mt-1 text-[11px] font-bold text-primary">{storyProduct.price.toLocaleString("ar-IQ")} د.ع</p></div><button type="button" onClick={() => onAddToCart(storyProduct)} className="flex shrink-0 items-center gap-1.5 rounded-xl bg-primary px-3 py-2 text-[11px] font-black text-primary-foreground"><ShoppingBag size={14} /> شراء الآن</button></div>}
          {activeStory.caption && <p className="text-sm font-medium leading-relaxed">{activeStory.caption}</p>}
          <form onSubmit={sendReply} className="flex items-center gap-2 pt-1">
            <input type="text" value={message} onChange={(event) => setMessage(event.target.value)} placeholder={`الرد على ${activeStory.storeName}...`} className="flex-1 rounded-full border border-white/20 bg-black/55 px-4 py-3 text-xs text-white placeholder-white/60 outline-none backdrop-blur-md focus:border-white" />
            <button type="button" onClick={() => setLiked((current) => !current)} className={`grid size-10 shrink-0 place-items-center rounded-full backdrop-blur-md ${liked ? "bg-rose-500 text-white" : "bg-white/10 text-white"}`} aria-label="إعجاب"><Heart size={18} fill={liked ? "currentColor" : "none"} /></button>
            <button type="submit" className="grid size-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground" aria-label="إرسال الرد"><Send size={17} /></button>
          </form>
          {sent && <p className="text-center text-[11px] font-bold text-primary">تم إرسال الرد إلى المتجر</p>}
        </div>
      </div>
    </div>
  );
}
