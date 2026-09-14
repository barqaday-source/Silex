import { useState } from "react";
import { X, CheckCircle2, MoreVertical, UserX, VolumeX, Flag, Share2, MessageSquare, Heart, Package, Grid } from "lucide-react";

export function UserProfileModal({
  isOpen,
  onClose,
  onOpenChat,
}: {
  isOpen: boolean;
  onClose: () => void;
  onOpenChat: () => void;
}) {
  const [activeTab, setActiveTab] = useState<"posts" | "reels" | "likes">("posts");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Main Profile Card */}
      <div className="relative w-full max-w-lg rounded-3xl bg-white text-slate-900 shadow-2xl dark:bg-slate-900 dark:text-white max-h-[90vh] flex flex-col overflow-hidden text-right">
        {/* Top Header Actions */}
        <div className="flex items-center justify-between p-4 border-b border-slate-100 dark:border-slate-800">
          <div className="relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="grid size-9 place-items-center rounded-xl bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
              aria-label="خيارات الحساب"
            >
              <MoreVertical size={18} />
            </button>

            {/* Dropdown Safety Menu */}
            {isMenuOpen && (
              <div className="absolute top-11 right-0 z-30 w-44 rounded-2xl bg-white p-1.5 shadow-xl ring-1 ring-slate-200 dark:bg-slate-800 dark:ring-slate-700 space-y-1">
                <button className="flex w-full items-center justify-end gap-2 rounded-xl px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-700">
                  <span>مشاركة الملف</span>
                  <Share2 size={14} />
                </button>
                <button className="flex w-full items-center justify-end gap-2 rounded-xl px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-700">
                  <span>كتم الحساب</span>
                  <VolumeX size={14} />
                </button>
                <button className="flex w-full items-center justify-end gap-2 rounded-xl px-3 py-2 text-xs font-bold text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-950/40">
                  <span>حظر المستخدم</span>
                  <UserX size={14} />
                </button>
                <button className="flex w-full items-center justify-end gap-2 rounded-xl px-3 py-2 text-xs font-bold text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40">
                  <span>إبلاغ عن الحساب</span>
                  <Flag size={14} />
                </button>
              </div>
            )}
          </div>

          <button
            onClick={onClose}
            className="grid size-9 place-items-center rounded-xl bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
          >
            <X size={18} />
          </button>
        </div>

        {/* Profile Details & Cover */}
        <div className="overflow-y-auto p-5 space-y-4 no-scrollbar">
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
                alt="جود الجابر"
                className="size-20 rounded-full object-cover ring-4 ring-emerald-500"
              />
              <span className="absolute bottom-0 right-0 grid size-6 place-items-center rounded-full bg-emerald-500 text-white ring-2 ring-white">
                <CheckCircle2 size={14} />
              </span>
            </div>

            <div>
              <h3 className="text-base font-black">جود الجابر</h3>
              <p className="text-xs font-medium text-slate-400 dir-ltr">@jood_aljaber</p>
            </div>

            <p className="text-xs font-medium text-slate-600 dark:text-slate-300 max-w-xs">
              صانعة محتوى مراجعات تقنية وتأثير أزياء | البصرة 🇮🇶
            </p>

            {/* Stats */}
            <div className="flex items-center gap-6 py-2 border-y border-slate-100 dark:border-slate-800 w-full justify-center text-center">
              <div>
                <span className="block text-xs font-black">1.2K</span>
                <span className="text-[10px] text-slate-400 font-bold">متابع</span>
              </div>
              <div>
                <span className="block text-xs font-black">342</span>
                <span className="text-[10px] text-slate-400 font-bold">يتابع</span>
              </div>
              <div>
                <span className="block text-xs font-black">15.4K</span>
                <span className="text-[10px] text-slate-400 font-bold">إعجاب</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex items-center gap-2 w-full pt-1">
              <button
                onClick={() => setIsFollowing(!isFollowing)}
                className={`flex-1 rounded-2xl py-2.5 text-xs font-black transition ${
                  isFollowing
                    ? "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200"
                    : "bg-emerald-500 text-white shadow-md shadow-emerald-500/20 hover:bg-emerald-600"
                }`}
              >
                {isFollowing ? "تتابعه" : "متابعة"}
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenChat();
                }}
                className="flex items-center gap-1.5 rounded-2xl bg-slate-100 px-4 py-2.5 text-xs font-bold text-slate-700 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200"
              >
                <MessageSquare size={16} />
                <span>رسالة</span>
              </button>
            </div>
          </div>

          {/* User Content Tabs */}
          <div className="flex border-b border-slate-100 dark:border-slate-800">
            <button
              onClick={() => setActiveTab("posts")}
              className={`flex-1 py-2 text-center text-xs font-bold border-b-2 transition ${
                activeTab === "posts" ? "border-emerald-500 text-emerald-500" : "border-transparent text-slate-400"
              }`}
            >
              المنشورات
            </button>
            <button
              onClick={() => setActiveTab("reels")}
              className={`flex-1 py-2 text-center text-xs font-bold border-b-2 transition ${
                activeTab === "reels" ? "border-emerald-500 text-emerald-500" : "border-transparent text-slate-400"
              }`}
            >
              الريلز 🎬
            </button>
            <button
              onClick={() => setActiveTab("likes")}
              className={`flex-1 py-2 text-center text-xs font-bold border-b-2 transition ${
                activeTab === "likes" ? "border-emerald-500 text-emerald-500" : "border-transparent text-slate-400"
              }`}
            >
              الإعجابات ❤️
            </button>
          </div>

          {/* Grid Content Placeholder */}
          <div className="grid grid-cols-3 gap-2 pt-2">
            {[1, 2, 3, 4, 5, 6].map((idx) => (
              <div key={idx} className="aspect-square rounded-2xl bg-slate-100 dark:bg-slate-800 overflow-hidden relative">
                <img
                  src={`https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=200&q=80`}
                  alt="منشور"
                  className="size-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
