import { useState } from "react";
import { ArrowRight, Ban, Check, Flag, MoreVertical, Package, Plus, Send, ShieldAlert, Store, Tag, X } from "lucide-react";
import { Conversation, ChatMessage, Product } from "@/types";

export function ChatRoom({
  conversation,
  onBack,
  onOpenStore,
  products = [],
}: {
  conversation: Conversation;
  onBack: () => void;
  onOpenStore?: (storeId: string) => void;
  products?: Product[];
}) {
  const [messages, setMessages] = useState<ChatMessage[]>(conversation.messages);
  const [input, setInput] = useState("");
  const [showTools, setShowTools] = useState(false);
  const [showSafetyMenu, setShowSafetyMenu] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const [reportReason, setReportReason] = useState("احتيال");
  const [offerAmount, setOfferAmount] = useState("");
  const relatedProduct = products.find((product) => product.seller_id === conversation.storeId) ?? products[0];

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

  const sendProductCard = () => {
    if (!relatedProduct) return;
    setMessages((current) => [...current, {
      id: Date.now().toString(),
      sender: "user",
      text: "أرغب بالاستفسار عن هذا المنتج داخل صفصاف.",
      time: "الآن",
      type: "product",
      productDetails: { id: relatedProduct.id, name: relatedProduct.name, price: relatedProduct.price, image: relatedProduct.image_url },
    }]);
    setShowTools(false);
  };

  const sendOffer = () => {
    const amount = Number(offerAmount);
    if (!Number.isFinite(amount) || amount <= 0) return;
    setMessages((current) => [...current, {
      id: Date.now().toString(), sender: "user", time: "الآن", type: "offer",
      text: "عرض خاص للطلب داخل صفصاف.", offerDetails: { amount, expiresIn: "24 ساعة" },
    }]);
    setOfferAmount("");
    setShowTools(false);
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

        <div className="relative flex items-center gap-2">
          {onOpenStore && <button onClick={() => onOpenStore(conversation.storeId)} className="flex items-center gap-1.5 rounded-xl bg-slate-100 px-3 py-1.5 text-[11px] font-bold text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 dark:bg-slate-800 dark:text-slate-200"><Store size={14} /> المتجر</button>}
          <button type="button" onClick={() => setShowSafetyMenu((current) => !current)} className="grid size-9 place-items-center rounded-xl bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-200" aria-label="خيارات المحادثة"><MoreVertical size={18} /></button>
          {showSafetyMenu && <div className="absolute left-0 top-11 z-20 w-44 rounded-2xl border border-slate-200 bg-white p-1.5 text-right shadow-xl dark:border-slate-700 dark:bg-slate-900"><button type="button" onClick={() => { setBlocked(true); setShowSafetyMenu(false); }} className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-xs font-bold text-rose-600 hover:bg-rose-50"><Ban size={14} /> حظر المتجر</button><button type="button" onClick={() => { setShowReport(true); setShowSafetyMenu(false); }} className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800"><Flag size={14} /> إبلاغ عن انتهاك</button></div>}
        </div>
      </header>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {blocked && <div className="mx-auto max-w-sm rounded-2xl border border-rose-200 bg-rose-50 p-4 text-center text-xs font-bold text-rose-700"><Ban size={18} className="mx-auto mb-2" />تم حظر هذا المتجر ولن تصلك رسائل جديدة.</div>}
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

              {msg.type === "offer" && msg.offerDetails && <div className="mb-2 w-full max-w-xs rounded-2xl border border-amber-200 bg-amber-50 p-3 text-right dark:border-amber-900 dark:bg-amber-950/30"><div className="flex items-center justify-between text-xs font-black text-amber-800 dark:text-amber-300"><span className="flex items-center gap-1"><Tag size={14} /> عرض خاص</span><span>{msg.offerDetails.expiresIn}</span></div><p className="mt-2 text-lg font-black text-amber-900 dark:text-amber-200">{msg.offerDetails.amount.toLocaleString("ar-IQ")} د.ع</p></div>}

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
          <button type="button" onClick={sendProductCard} className="rounded-xl bg-slate-100 p-2 text-slate-700 dark:bg-slate-800 dark:text-slate-200"><Package size={15} className="mx-auto mb-1" />إرسال المنتج</button>
          <button type="button" onClick={sendOffer} className="rounded-xl bg-slate-100 p-2 text-slate-700 dark:bg-slate-800 dark:text-slate-200"><Tag size={15} className="mx-auto mb-1" />إرسال العرض</button>
          <button type="button" onClick={() => setShowTools(false)} className="rounded-xl bg-slate-100 p-2 text-slate-700 dark:bg-slate-800 dark:text-slate-200"><X size={15} className="mx-auto mb-1" />إغلاق</button>
        </div>
      )}

      {showTools && <div className="border-t bg-amber-50 p-3 text-right dark:border-slate-800 dark:bg-amber-950/20"><label className="block text-[10px] font-bold text-amber-900 dark:text-amber-200">قيمة العرض الخاص<input value={offerAmount} onChange={(event) => setOfferAmount(event.target.value)} type="number" min="1" placeholder="مثال: 85000" className="mt-1 w-full rounded-xl border border-amber-200 bg-white p-2 text-xs outline-none dark:border-amber-900 dark:bg-slate-900" /></label></div>}

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

      {showReport && <div className="fixed inset-0 z-[60] grid place-items-center bg-black/60 p-4" onClick={() => setShowReport(false)}><div className="w-full max-w-sm rounded-3xl bg-white p-5 text-right shadow-2xl dark:bg-slate-900" onClick={(event) => event.stopPropagation()}><div className="flex items-center justify-between"><button type="button" onClick={() => setShowReport(false)} className="grid size-8 place-items-center rounded-xl bg-slate-100 dark:bg-slate-800"><X size={15} /></button><h3 className="text-sm font-black">إبلاغ عن انتهاك</h3></div><p className="mt-3 text-xs text-slate-500">اختر سبب البلاغ ليبقى التواصل آمناً داخل صفصاف.</p><div className="mt-3 space-y-2">{["احتيال", "تأخير متكرر", "أسلوب غير لائق"].map((reason) => <button type="button" key={reason} onClick={() => setReportReason(reason)} className={`flex w-full items-center justify-between rounded-xl border p-3 text-xs font-bold ${reportReason === reason ? "border-emerald-500 bg-emerald-50 text-emerald-700" : "border-slate-200 dark:border-slate-700"}`}>{reason}{reportReason === reason && <Check size={14} />}</button>)}</div><button type="button" onClick={() => setShowReport(false)} className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-rose-500 py-2.5 text-xs font-black text-white"><ShieldAlert size={15} /> إرسال البلاغ</button></div></div>}
    </div>
  );
}
