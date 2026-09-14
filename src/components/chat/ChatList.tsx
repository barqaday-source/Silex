import { useState } from "react";
import { Search, ShoppingBag, CheckCheck } from "lucide-react";
import { Conversation } from "@/types";

export function ChatList({
  conversations,
  onSelectConversation,
}: {
  conversations: Conversation[];
  onSelectConversation: (c: Conversation) => void;
}) {
  const [filter, setFilter] = useState<"all" | "unread" | "orders">("all");
  const [search, setSearch] = useState("");

  const filtered = conversations.filter((c) => {
    const matchesFilter =
      filter === "all" ||
      (filter === "unread" && c.unreadCount > 0) ||
      (filter === "orders" && c.hasActiveOrder);
    const matchesSearch =
      c.storeName.toLowerCase().includes(search.toLowerCase()) ||
      (c.relatedProductName && c.relatedProductName.toLowerCase().includes(search.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-3 pb-20">
      {/* Search Input */}
      <div className="relative">
        <Search size={16} className="absolute right-3 top-3 text-slate-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="ابحث عن متجر أو منتج..."
          className="w-full rounded-2xl border border-slate-200 bg-white py-2.5 pr-9 pl-4 text-xs shadow-sm outline-none focus:border-emerald-500 dark:border-slate-800 dark:bg-slate-900 dark:text-white"
        />
      </div>

      {/* Commercial Filter Tabs */}
      <div className="flex gap-2 border-b border-slate-100 pb-2 dark:border-slate-800">
        <button
          onClick={() => setFilter("all")}
          className={`rounded-xl px-3 py-1.5 text-xs font-bold transition ${
            filter === "all"
              ? "bg-emerald-500 text-white"
              : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
          }`}
        >
          الكل
        </button>
        <button
          onClick={() => setFilter("unread")}
          className={`rounded-xl px-3 py-1.5 text-xs font-bold transition ${
            filter === "unread"
              ? "bg-emerald-500 text-white"
              : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
          }`}
        >
          غير مقروء
        </button>
        <button
          onClick={() => setFilter("orders")}
          className={`rounded-xl px-3 py-1.5 text-xs font-bold transition ${
            filter === "orders"
              ? "bg-emerald-500 text-white"
              : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
          }`}
        >
          طلباتي 📦
        </button>
      </div>

      {/* Conversations List */}
      <div className="space-y-2">
        {filtered.map((chat) => (
          <div
            key={chat.id}
            onClick={() => onSelectConversation(chat)}
            className="flex cursor-pointer items-center justify-between gap-3 rounded-2xl border border-slate-100 bg-white p-3.5 shadow-sm transition hover:border-emerald-300 dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="relative">
              <img
                src={chat.storeAvatar}
                alt={chat.storeName}
                className="size-12 rounded-2xl object-cover"
              />
              {chat.isOnline && (
                <span className="absolute -bottom-0.5 -right-0.5 size-3.5 rounded-full border-2 border-white bg-emerald-500 dark:border-slate-900" />
              )}
            </div>

            <div className="flex-1 min-w-0 text-right">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-black text-slate-800 dark:text-slate-100 truncate">
                  {chat.storeName}
                </h4>
                <span className="text-[10px] text-slate-400">{chat.lastTime}</span>
              </div>

              {chat.relatedProductName && (
                <p className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">
                  <ShoppingBag size={11} /> بخصوص: {chat.relatedProductName}
                </p>
              )}

              <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-1">
                {chat.lastMessage}
              </p>
            </div>

            {chat.unreadCount > 0 ? (
              <span className="grid size-5 place-items-center rounded-full bg-emerald-500 text-[10px] font-black text-white">
                {chat.unreadCount}
              </span>
            ) : (
              <CheckCheck size={16} className="text-slate-400" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
