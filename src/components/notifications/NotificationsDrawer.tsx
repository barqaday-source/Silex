import { X, ShoppingBag, Tag, Info } from "lucide-react";
import { NotificationItem } from "@/types";

export function NotificationsDrawer({
  notifications,
  onClose,
  onMarkAllRead,
}: {
  notifications: NotificationItem[];
  onClose: () => void;
  onMarkAllRead: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div
        className="absolute left-0 top-0 h-full w-full max-w-sm bg-white p-5 shadow-2xl dark:bg-slate-900 text-slate-900 dark:text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b pb-4 dark:border-slate-800">
          <h2 className="text-base font-black">التنبيهات الإشعارات</h2>
          <button onClick={onClose} className="rounded-lg p-1 hover:bg-slate-100 dark:hover:bg-slate-800">
            <X size={18} />
          </button>
        </div>

        <div className="mt-4 flex justify-between items-center text-xs">
          <span className="text-slate-400">لديك {notifications.filter((n) => !n.read).length} إشعارات غير قراءتها</span>
          <button onClick={onMarkAllRead} className="font-bold text-emerald-600 hover:underline">
            تحديد الكل كقراءة
          </button>
        </div>

        <div className="mt-4 space-y-3 overflow-y-auto max-h-[calc(100vh-140px)]">
          {notifications.map((item) => (
            <div
              key={item.id}
              className={`flex gap-3 rounded-2xl p-3 border transition ${
                item.read
                  ? "border-slate-100 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-900/50"
                  : "border-emerald-200 bg-emerald-50/30 dark:border-emerald-900 dark:bg-emerald-950/20"
              }`}
            >
              <div className="grid size-9 shrink-0 place-items-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50">
                {item.type === "order" && <ShoppingBag size={16} />}
                {item.type === "discount" && <Tag size={16} />}
                {item.type === "system" && <Info size={16} />}
              </div>

              <div className="min-w-0 flex-1 text-right">
                <p className="text-xs font-black">{item.title}</p>
                <p className="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400">{item.description}</p>
                <span className="mt-2 block text-[9px] text-slate-400">{item.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
