import { useState } from "react";
import { ArrowRight, Send, Image, Plus, ExternalLink, Package, Store } from "lucide-react";
import { Conversation, ChatMessage } from "@/types";

export function ChatRoom({
  conversation,
  onBack,
  onOpenStore,
}: {
  conversation: Conversation;
  onBack: () => void;
  onOpenStore?: (storeId: string) => void;
}) {
  const [messages, setMessages] = useState<ChatMessage[]>(conversation.messages);
  const [input, setInput] = useState("");
  const [showTools, setShowTools] = useState(false);

  const quickReplies = [
    "هل المنتج متوفر؟",
    "كم سعر النهائي مع التوصيل؟",
    "متى يصل الطلب؟",
  ];

  const handleSend = (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    const newMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: "user",
      text,
      time: "الآن",
    };

    setMessages((prev) => [...prev, newMsg]);
    if (!textToSend) setInput("");
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-slate-50 dark:bg-slate-950">
      {/* Top Header */}
      <header className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="rounded-xl p-1.5 text-slate-600 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800">
            <ArrowRight size={20} />
          </button>
          <div className="flex items-center gap-2.5">
            <img src={conversation.storeAvatar} alt={conversation.storeName} className="size-10 rounded-full object-cover" />
            <div className="text-right">
              <h3 className="text-xs font-black text-slate-900 dark:text-white">{conversation.storeName}</h3>
              <span className="text-[10px] text-emerald-500 font-bold">
                {conversation.isOnline ? "● متصل الآن" : "متصل مؤخراً"}
              </span>
            </div>
          </div>
        </div>

        {onOpenStore && (
          <button
            onClick={() => onOpenStore(conversation.storeId)}
            className="flex items-center gap-1.5 rounded-xl bg-slate-100 px-3 py-1.5 text-[11px] font-bold text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 dark:bg-slate-800 dark:text-slate-200"
          >
            <Store size={14} /> المتجر
          </button>
        )}
      </header>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg) => {
          const isUser = msg.sender === "user";

          return (
            <div key={msg.id} className={`flex flex-col ${isUser ? "items-start" : "items-end"}`}>
              {/* Product Card Attachment */}
              {msg.type === "product" && msg.productDetails && (
                <div className="mb-2 w-full max-w-xs rounded-2xl border border-emerald-200 bg-emerald-50/60 p-3 dark:border-emerald-900 dark:bg-emerald-950/40">
                  <span className="text-[9px] font-bold text-emerald-700 dark:text-emerald-400">🛍️ المنتج المرتبط للمناقشة</span>
                  <div className="mt-2 flex items-center gap-3">
                    <img src={msg.productDetails.image} alt={msg.productDetails.name} className="size-12 rounded-xl object-cover" />
                    <div className="text-right flex-1 min-w-0">
                      <p className="text-xs font-black truncate">{msg.productDetails.name}</p>
                      <p className="text-xs font-bold text-emerald-600 mt-0.5">{msg.productDetails.price.toLocaleString("ar-IQ")} د.ع</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Order Status Card Attachment */}
              {msg.type === "order" && msg.orderDetails && (
                <div className="mb-2 w-full max-w-xs rounded-2xl border border-blue-200 bg-blue-50 p-3 dark:border-blue-900 dark:bg-blue-950/40">
                  <div className="flex items-center justify-between text-xs font-black text-blue-700 dark:text-blue-300">
                    <span className="flex items-center gap-1"><Package size={14} /> حالة الطلب</span>
                    <span>{msg.orderDetails.orderId}</span>
                  </div>
                  <p className="mt-1 text-xs text-slate-700 dark:text-slate-300 font-bold">{msg.orderDetails.status}</p>
                </div>
              )}

              {/* Text Bubble */}
              {msg.text && (
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-xs font-bold shadow-sm ${
                    isUser
                      ? "bg-emerald-500 text-white rounded-br-none"
                      : "bg-white text-slate-800 dark:bg-slate-800 dark:text-slate-100 rounded-bl-none"
                  }`}
                >
                  {msg.text}
                  <span className="mt-1 block text-[9px] opacity-70 text-left">{msg.time}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Quick Replies Bar */}
      <div className="flex gap-1.5 overflow-x-auto px-4 py-2 bg-slate-100 dark:bg-slate-900/50 no-scrollbar">
        {quickReplies.map((qr, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(qr)}
            className="shrink-0 rounded-full bg-white px-3 py-1 text-[11px] font-bold text-slate-700 shadow-sm transition hover:bg-emerald-50 hover:text-emerald-600 dark:bg-slate-800 dark:text-slate-200"
          >
            {qr}
          </button>
        ))}
      </div>

      {/* Seller Action Tools Drawer */}
      {showTools && (
        <div className="grid grid-cols-3 gap-2 bg-white p-3 border-t dark:bg-slate-900 dark:border-slate-800 text-center text-xs font-bold">
          <button className="rounded-xl bg-slate-100 p-2 text-slate-700 dark:bg-slate-800 dark:text-slate-200">💰 إرسال عرض سعر</button>
          <button className="rounded-xl bg-slate-100 p-2 text-slate-700 dark:bg-slate-800 dark:text-slate-200">📦 ربط بطلب</button>
          <button className="rounded-xl bg-slate-100 p-2 text-slate-700 dark:bg-slate-800 dark:text-slate-200">📍 إرسال موقع</button>
        </div>
      )}

      {/* Input Bar */}
      <div className="flex items-center gap-2 border-t border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900">
        <button
          onClick={() => setShowTools(!showTools)}
          className="grid size-10 place-items-center rounded-xl bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
        >
          <Plus size={20} />
        </button>

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="اكتب رسالتك للبائع..."
          className="flex-1 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs outline-none focus:border-emerald-500 dark:border-slate-800 dark:bg-slate-800 dark:text-white"
        />

        <button
          onClick={() => handleSend()}
          className="grid size-10 place-items-center rounded-xl bg-emerald-500 text-white shadow-md shadow-emerald-500/20 hover:bg-emerald-600"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}
