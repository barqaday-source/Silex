import { useState, useEffect } from "react";
import { X, Heart, Send } from "lucide-react";
import { Story } from "@/types";

export function StoryViewerModal({
  story,
  onClose,
  onOpenStore,
}: {
  story: Story;
  onClose: () => void;
  onOpenStore: (storeId: string) => void;
}) {
  const [progress, setProgress] = useState(0);
  const [liked, setLiked] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          onClose();
          return 100;
        }
        return prev + 2;
      });
    }, 100);
    return () => clearInterval(timer);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md">
      <div className="relative h-full w-full max-w-md flex-col justify-between p-4 flex">
        <div className="space-y-3 z-10">
          <div className="h-1 w-full overflow-hidden rounded-full bg-white/30">
            <div
              className="h-full bg-white transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={() => onOpenStore(story.storeId)}
              className="flex items-center gap-2 text-white"
            >
              <img
                src={story.storeAvatar}
                alt={story.storeName}
                className="size-10 rounded-full border-2 border-emerald-500 object-cover"
              />
              <div className="text-right">
                <p className="text-xs font-black">{story.storeName}</p>
                <p className="text-[10px] text-white/70">{story.createdAt}</p>
              </div>
            </button>

            <button
              onClick={onClose}
              className="grid size-9 place-items-center rounded-full bg-white/20 text-white hover:bg-white/30"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="absolute inset-0 grid place-items-center p-2">
          <img
            src={story.mediaUrl}
            alt="Story"
            className="max-h-[75vh] w-full rounded-2xl object-cover"
          />
        </div>

        <div className="z-10 flex items-center gap-2 pt-4">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={`رد على ${story.storeName}...`}
            className="flex-1 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-xs text-white placeholder-white/60 outline-none backdrop-blur-md"
          />
          <button
            onClick={() => setLiked(!liked)}
            className={`grid size-10 place-items-center rounded-full backdrop-blur-md ${
              liked ? "bg-rose-500 text-white" : "bg-white/10 text-white"
            }`}
          >
            <Heart size={18} fill={liked ? "currentColor" : "none"} />
          </button>
          <button
            onClick={() => {
              if (message) {
                alert(`تم إرسال الرسالة إلى ${story.storeName}: ${message}`);
                setMessage("");
              }
            }}
            className="grid size-10 place-items-center rounded-full bg-emerald-500 text-white"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
