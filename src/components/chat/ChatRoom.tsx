import { useState } from "react";
import { ArrowRight, Ban, Check, CheckCheck, CornerUpRight, Flag, MoreVertical, Package, Pin, Plus, Send, ShieldAlert, Store, Tag, Trash2, X } from "lucide-react";
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
  const [replyingTo, setReplyingTo] = useState<ChatMessage | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const relatedProduct = products.find((product) => product.seller_id === conversation.storeId) ?? products[0];

  const quickReplies = [
    "هل المنتج متوفر؟",
    "كم سعر النهائي مع التوصيل؟",
    "متى يصل الطلب؟",
  ];

  const handleSend = (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim() || blocked) return;

    const newMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: "user",
      text,
      time: "الآن",
      replyTo: replyingTo ? { id: replyingTo.id, text: replyingTo.text ?? "رسالة مرفقة" } : undefined,
    };

    setMessages((prev) => [...prev, newMsg]);
    if (!textToSend) setInput("");
    setReplyingTo(null);
  };

  const showNotice = (message: string) => {
    setNotice(message);
    window.setTimeout(() => setNotice(null), 2500);
  };

  const togglePin = (message: ChatMessage) => {
    setMessages((current) => current.map((item) => item.id === message.id ? { ...item, isPinned: !item.isPinned } : item));
    showNotice(message.isPinned ? "تم إلغاء تثبيت الرسالة" : "تم تثبيت الرسالة");
  };

  const deleteMessage = (messageId: string) => {
    setMessages((current) => current.filter((item) => item.id !== messageId));
    if (replyingTo?.id === messageId) setReplyingTo(null);
    showNotice("تم حذف الرسالة");
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
    <div dir="rtl" className="fixed inset-0 z-50 flex flex-col bg-background">
      {notice && <div className="fixed left-1/2 top-5 z-[70] flex -translate-x-1/2 items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 text-xs font-bold text-foreground shadow-xl"><Check size={14} className="text-primary" />{notice}</div>}
      {/* Top Header */}
      <header className="flex items-center justify-between border-b border-border bg-card px-4 py-3">
        <div className="flex items-center gap-3">
          <button type="button" onClick={onBack} className="rounded-xl p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground" aria-label="العودة">
            <ArrowRight size={20} />
          </button>
          <button type="button" onClick={() => onOpenStore?.(conversation.storeId)} className="flex items-center gap-2.5 text-right">
            <img src={conversation.storeAvatar} alt={conversation.storeName} className="size-10 rounded-full border-2 border-primary/40 object-cover" />
            <div className="text-right">
              <h3 className="text-xs font-black text-foreground">{conversation.storeName}</h3>
              <span className="text-[10px] font-bold text-primary">
                {conversation.isOnline ? "● متصل الآن" : "متصل مؤخراً"}
              </span>
            </div>
          </button>
        </div>

        <div className="relative flex items-center gap-2">
          {onOpenStore && <button type="button" onClick={() => onOpenStore(conversation.storeId)} className="flex items-center gap-1.5 rounded-xl bg-muted px-3 py-1.5 text-[11px] font-bold text-foreground hover:bg-accent hover:text-accent-foreground"><Store size={14} /> المتجر</button>}
          <button type="button" onClick={() => setShowSafetyMenu((current) => !current)} className="grid size-9 place-items-center rounded-xl bg-muted text-muted-foreground hover:text-foreground" aria-label="خيارات المحادثة"><MoreVertical size={18} /></button>
          {showSafetyMenu && <div className="absolute left-0 top-11 z-20 w-44 rounded-2xl border border-border bg-card p-1.5 text-right shadow-xl"><button type="button" onClick={() => { setBlocked(true); setShowSafetyMenu(false); showNotice("تم حظر المتجر"); }} className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-xs font-bold text-destructive hover:bg-destructive/10"><Ban size={14} /> حظر المتجر</button><button type="button" onClick={() => { setShowReport(true); setShowSafetyMenu(false); }} className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-xs font-bold text-foreground hover:bg-muted"><Flag size={14} /> إبلاغ عن انتهاك</button></div>}
        </div>
      </header>

      {messages.some((message) => message.isPinned) && <div className="flex items-center gap-2 border-b border-border bg-secondary/50 px-4 py-2 text-[11px] text-foreground"><Pin size={14} className="shrink-0 text-primary" /><span className="truncate">رسالة مثبتة: {messages.find((message) => message.isPinned)?.text}</span></div>}

      {/* Messages Scroll Area */}
      <div className="flex-1 space-y-3 overflow-y-auto bg-muted/40 p-4">
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
                <div className="group relative max-w-[80%]">
                  {msg.replyTo && <div className="mb-1 flex items-center gap-1 rounded-t-xl border-r-2 border-primary bg-secondary px-3 py-1.5 text-[10px] text-muted-foreground"><CornerUpRight size={12} className="text-primary" /><span className="truncate">{msg.replyTo.text}</span></div>}
                  <div
                    className={`rounded-2xl px-4 py-2.5 text-xs font-bold shadow-sm ${
                    isUser
                      ? "rounded-br-none bg-primary text-primary-foreground"
                      : "rounded-bl-none bg-card text-foreground"
                  }`}
                  >
                    {msg.text}
                    <span className="mt-1 flex items-center justify-end gap-1 text-[9px] opacity-70"><span>{msg.time}</span>{isUser && <CheckCheck size={12} />}</span>
                  </div>
                  <div className={`absolute -top-3 ${isUser ? "left-2" : "right-2"} hidden items-center rounded-lg border border-border bg-card shadow-lg group-hover:flex`}>
                    <button type="button" onClick={() => setReplyingTo(msg)} className="p-1.5 text-muted-foreground hover:text-primary" title="رد"><CornerUpRight size={13} /></button>
                    <button type="button" onClick={() => togglePin(msg)} className="p-1.5 text-muted-foreground hover:text-primary" title="تثبيت"><Pin size={13} /></button>
                    <button type="button" onClick={() => deleteMessage(msg.id)} className="p-1.5 text-muted-foreground hover:text-destructive" title="حذف"><Trash2 size={13} /></button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {replyingTo && <div className="flex items-center justify-between border-t border-border bg-card px-4 py-2 text-xs"><div className="flex min-w-0 items-center gap-2 text-muted-foreground"><CornerUpRight className="size-4 shrink-0 text-primary" /><span className="truncate">الرد على: {replyingTo.text}</span></div><button type="button" onClick={() => setReplyingTo(null)} className="text-muted-foreground hover:text-foreground" aria-label="إلغاء الرد"><X className="size-4" /></button></div>}

      {/* Quick Replies Bar */}
      <div className="flex gap-1.5 overflow-x-auto bg-muted px-4 py-2 no-scrollbar">
        {quickReplies.map((qr, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(qr)}
            className="shrink-0 rounded-full bg-card px-3 py-1 text-[11px] font-bold text-foreground shadow-sm transition hover:bg-accent hover:text-accent-foreground"
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
      <div className="flex items-center gap-2 border-t border-border bg-card p-3">
        <button
          onClick={() => setShowTools(!showTools)}
          className="grid size-10 place-items-center rounded-xl bg-muted text-muted-foreground"
        >
          <Plus size={20} />
        </button>

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="اكتب رسالتك للبائع..."
          disabled={blocked}
          className="flex-1 rounded-2xl border border-input bg-muted px-4 py-2.5 text-xs text-foreground outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
        />

        <button
          onClick={() => handleSend()}
          type="button"
          disabled={blocked}
          className="grid size-10 place-items-center rounded-xl bg-primary text-primary-foreground shadow-md shadow-primary/20 hover:bg-primary/90 disabled:opacity-50"
        >
          <Send size={18} />
        </button>
      </div>

      {showReport && <div className="fixed inset-0 z-[60] grid place-items-center bg-black/60 p-4" onClick={() => setShowReport(false)}><div className="w-full max-w-sm rounded-3xl bg-white p-5 text-right shadow-2xl dark:bg-slate-900" onClick={(event) => event.stopPropagation()}><div className="flex items-center justify-between"><button type="button" onClick={() => setShowReport(false)} className="grid size-8 place-items-center rounded-xl bg-slate-100 dark:bg-slate-800"><X size={15} /></button><h3 className="text-sm font-black">إبلاغ عن انتهاك</h3></div><p className="mt-3 text-xs text-slate-500">اختر سبب البلاغ ليبقى التواصل آمناً داخل صفصاف.</p><div className="mt-3 space-y-2">{["احتيال", "تأخير متكرر", "أسلوب غير لائق"].map((reason) => <button type="button" key={reason} onClick={() => setReportReason(reason)} className={`flex w-full items-center justify-between rounded-xl border p-3 text-xs font-bold ${reportReason === reason ? "border-emerald-500 bg-emerald-50 text-emerald-700" : "border-slate-200 dark:border-slate-700"}`}>{reason}{reportReason === reason && <Check size={14} />}</button>)}</div><button type="button" onClick={() => setShowReport(false)} className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-rose-500 py-2.5 text-xs font-black text-white"><ShieldAlert size={15} /> إرسال البلاغ</button></div></div>}
    </div>
  );
}
