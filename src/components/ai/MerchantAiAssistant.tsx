import { useMemo, useState } from "react";
import {
  Bot,
  Check,
  ChevronLeft,
  CircleHelp,
  FileText,
  Gauge,
  MessageCircle,
  Package,
  Plus,
  Send,
  Settings2,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  UserRound,
  X,
} from "lucide-react";
import { MOCK_PRODUCTS } from "@/data/mock";

type AssistantMode = "friendly" | "formal" | "concise" | "store";
type KnowledgeTab = "knowledge" | "permissions" | "faq";
type PermissionKey =
  | "products"
  | "prices"
  | "inventory"
  | "orders"
  | "recommendations"
  | "faq";

type ChatMessage = {
  id: number;
  sender: "customer" | "ai" | "human";
  text: string;
  productId?: string;
};

const permissionLabels: Record<PermissionKey, string> = {
  products: "الإجابة عن المنتجات",
  prices: "الإجابة عن الأسعار",
  inventory: "معرفة المخزون",
  orders: "تتبع الطلبات",
  recommendations: "اقتراح المنتجات",
  faq: "الإجابة عن الأسئلة الشائعة",
};

const initialPermissions: Record<PermissionKey, boolean> = {
  products: true,
  prices: true,
  inventory: true,
  orders: true,
  recommendations: true,
  faq: true,
};

export function MerchantAiAssistant() {
  const [isEnabled, setIsEnabled] = useState(true);
  const [isAfterHoursEnabled, setIsAfterHoursEnabled] = useState(true);
  const [isSuggestionsEnabled, setIsSuggestionsEnabled] = useState(true);
  const [assistantMode, setAssistantMode] = useState<AssistantMode>("friendly");
  const [knowledgeTab, setKnowledgeTab] = useState<KnowledgeTab>("knowledge");
  const [permissions, setPermissions] = useState(initialPermissions);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isHumanMode, setIsHumanMode] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      sender: "customer",
      text: "هل عندكم حذاء رياضي أسود؟",
    },
    {
      id: 2,
      sender: "ai",
      text: "هلا بيك 🌷 نعم، أفحص المنتجات والمخزون الفعلي حتى أرشح لك الأنسب.",
    },
  ]);

  const availableProducts = useMemo(
    () => MOCK_PRODUCTS.filter((product) => product.in_stock),
    [],
  );

  const togglePermission = (key: PermissionKey) => {
    setPermissions((current) => ({ ...current, [key]: !current[key] }));
  };

  const sendMessage = (textToSend = input) => {
    const text = textToSend.trim();
    if (!text) return;

    const customerMessage: ChatMessage = {
      id: Date.now(),
      sender: "customer",
      text,
    };
    setMessages((current) => [...current, customerMessage]);
    setInput("");

    if (isHumanMode) {
      setMessages((current) => [
        ...current,
        {
          id: Date.now() + 1,
          sender: "human",
          text: "تم تحويل المحادثة لك. يمكنك متابعة الرد كموظف المتجر.",
        },
      ]);
      return;
    }

    const matchedProduct = availableProducts.find((product) => {
      const firstWord = product.name.toLowerCase().split(" ")[0] ?? "";
      return firstWord.length > 0 && text.toLowerCase().includes(firstWord);
    });
    const product = matchedProduct ?? availableProducts[0];
    const response = product && permissions.inventory
      ? `أكيد، ${product.name} متوفر حاليًا بسعر ${product.price.toLocaleString("ar-IQ")} د.ع. أقدر أعرضه لك أو أضيفه للسلة بعد تأكيدك.`
      : permissions.faq
        ? "هلا بيك، أقدر أساعدك بالمنتجات والأسعار والتوصيل. اختر أحد الاقتراحات أو حوّل المحادثة لموظف المتجر."
        : "سأحوّل سؤالك لموظف المتجر حتى تحصل على إجابة دقيقة.";

    const aiMessage: ChatMessage = {
      id: Date.now() + 1,
      sender: "ai",
      text: response,
    };
    if (product) aiMessage.productId = product.id;
    setMessages((current) => [...current, aiMessage]);
  };

  return (
    <section className="space-y-4 rounded-3xl border border-emerald-100 bg-white p-4 text-right shadow-sm dark:border-emerald-950/60 dark:bg-slate-900">
      <div className="flex items-start justify-between gap-3">
        <button
          type="button"
          onClick={() => setIsEnabled((current) => !current)}
          className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-black transition ${
            isEnabled
              ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300"
              : "bg-slate-100 text-slate-500 dark:bg-slate-800"
          }`}
        >
          <span className={`size-2 rounded-full ${isEnabled ? "bg-emerald-500" : "bg-slate-400"}`} />
          {isEnabled ? "يعمل الآن" : "متوقف مؤقتًا"}
        </button>
        <div className="flex items-center gap-2">
          <div className="grid size-10 place-items-center rounded-2xl bg-emerald-500 text-white shadow-md shadow-emerald-500/20">
            <Bot size={21} />
          </div>
          <div>
            <h3 className="text-sm font-black">مساعد المتجر الذكي</h3>
            <p className="text-[10px] text-slate-400">AI Store Assistant</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Metric label="المحادثات اليوم" value="428" icon={MessageCircle} />
        <Metric label="رد عليها AI" value="371" icon={Bot} />
        <Metric label="مبيعات من AI" value="4,820 د.ع" icon={ShoppingBag} />
        <Metric label="تحتاج تدخل" value="12" icon={UserRound} />
      </div>

      <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-3 rounded-2xl bg-slate-50 p-3 dark:bg-slate-800/60">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setIsSettingsOpen((current) => !current)}
              className="grid size-8 place-items-center rounded-xl bg-white text-slate-500 shadow-sm dark:bg-slate-900"
              aria-label="إعدادات الذكاء الاصطناعي"
            >
              <Settings2 size={16} />
            </button>
            <h4 className="flex items-center gap-1.5 text-xs font-black">
              <Gauge size={15} className="text-emerald-500" /> إعدادات المساعد
            </h4>
          </div>

          <ToggleRow label="الرد التلقائي" enabled={isEnabled} onChange={() => setIsEnabled((current) => !current)} />
          <ToggleRow label="الرد خارج أوقات العمل" enabled={isAfterHoursEnabled} onChange={() => setIsAfterHoursEnabled((current) => !current)} />
          <ToggleRow label="اقتراح المنتجات" enabled={isSuggestionsEnabled} onChange={() => setIsSuggestionsEnabled((current) => !current)} />

          {isSettingsOpen && (
            <div className="space-y-2 border-t border-slate-200 pt-3 dark:border-slate-700">
              <p className="text-[10px] font-black text-slate-400">شخصية المساعد</p>
              <div className="grid grid-cols-2 gap-2">
                {([
                  ["friendly", "ودود"],
                  ["formal", "رسمي"],
                  ["concise", "مختصر"],
                  ["store", "أسلوب المتجر"],
                ] as const).map(([value, label]) => (
                  <button
                    type="button"
                    key={value}
                    onClick={() => setAssistantMode(value)}
                    className={`rounded-xl px-2 py-2 text-[10px] font-bold ${
                      assistantMode === value
                        ? "bg-emerald-500 text-white"
                        : "bg-white text-slate-600 dark:bg-slate-900 dark:text-slate-300"
                    }`}
                  >
                    {assistantMode === value && <Check size={12} className="mr-1 inline" />}
                    {label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="space-y-3 rounded-2xl border border-slate-100 p-3 dark:border-slate-800">
          <div className="flex gap-1 rounded-xl bg-slate-100 p-1 dark:bg-slate-800">
            <KnowledgeTabButton active={knowledgeTab === "faq"} onClick={() => setKnowledgeTab("faq")} label="FAQ" />
            <KnowledgeTabButton active={knowledgeTab === "permissions"} onClick={() => setKnowledgeTab("permissions")} label="الحدود" />
            <KnowledgeTabButton active={knowledgeTab === "knowledge"} onClick={() => setKnowledgeTab("knowledge")} label="معرفة المتجر" />
          </div>

          {knowledgeTab === "knowledge" && (
            <div className="space-y-2 text-xs">
              <KnowledgeRow icon={Package} label="المنتجات والمخزون" value={`${availableProducts.length} منتجات متاحة`} />
              <KnowledgeRow icon={FileText} label="سياسة الاستبدال" value="الاستبدال خلال 7 أيام" />
              <KnowledgeRow icon={MessageCircle} label="أسلوب الرد" value={assistantMode === "friendly" ? "ودود، عراقي، مختصر" : "مخصص حسب الإعداد"} />
              <KnowledgeRow icon={Sparkles} label="التوصيل" value="البصرة 1–2 يوم، بغداد 2–3 أيام" />
            </div>
          )}

          {knowledgeTab === "permissions" && (
            <div className="space-y-2">
              <p className="flex items-center gap-1 text-[10px] font-bold text-amber-600"><ShieldCheck size={13} /> لا توجد صلاحية لتغيير الأسعار أو إلغاء الطلبات أو إصدار Refund.</p>
              {(Object.keys(permissionLabels) as PermissionKey[]).map((key) => (
                <ToggleRow key={key} label={permissionLabels[key]} enabled={permissions[key]} onChange={() => togglePermission(key)} />
              ))}
            </div>
          )}

          {knowledgeTab === "faq" && (
            <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
              <p className="flex items-start gap-2 rounded-xl bg-slate-50 p-2.5 dark:bg-slate-800"><CircleHelp size={15} className="mt-0.5 text-emerald-500" /> التوصيل للبصرة متاح، والمدة المتوقعة من يوم إلى يومين.</p>
              <p className="flex items-start gap-2 rounded-xl bg-slate-50 p-2.5 dark:bg-slate-800"><CircleHelp size={15} className="mt-0.5 text-emerald-500" /> يراجع المساعد المخزون قبل الإجابة عن التوفر.</p>
              <button type="button" className="flex w-full items-center justify-between rounded-xl border border-dashed border-emerald-300 p-2 text-[10px] font-bold text-emerald-600"><ChevronLeft size={14} /> إضافة سؤال شائع</button>
            </div>
          )}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-100 dark:border-slate-800">
        <div className="flex items-center justify-between border-b border-slate-100 p-3 dark:border-slate-800">
          <button
            type="button"
            onClick={() => setIsHumanMode((current) => !current)}
            className={`flex items-center gap-1.5 rounded-xl px-2.5 py-1.5 text-[10px] font-black ${isHumanMode ? "bg-amber-100 text-amber-700" : "bg-slate-100 text-slate-500 dark:bg-slate-800"}`}
          >
            {isHumanMode ? <UserRound size={13} /> : <Bot size={13} />}
            {isHumanMode ? "وضع الموظف" : "وضع AI"}
          </button>
          <div className="flex items-center gap-1.5 text-xs font-black"><span className="size-2 rounded-full bg-emerald-500" /> محادثة تجريبية آمنة</div>
        </div>

        <div className="max-h-64 space-y-2 overflow-y-auto p-3">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === "customer" ? "justify-start" : "justify-end"}`}>
              <div className={`max-w-[88%] rounded-2xl px-3 py-2 text-[11px] font-medium ${
                message.sender === "customer"
                  ? "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                  : message.sender === "human"
                    ? "bg-amber-100 text-amber-800"
                    : "bg-emerald-500 text-white"
              }`}>
                <p>{message.text}</p>
                {message.productId && (
                  <div className="mt-2 flex items-center gap-2 rounded-xl bg-white/15 p-2 text-[10px]">
                    <Package size={13} /> تحقق من المنتج والمخزون قبل الإضافة
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {isSuggestionsEnabled && !isHumanMode && (
          <div className="flex gap-2 overflow-x-auto border-t border-slate-100 px-3 py-2 dark:border-slate-800">
            <button type="button" onClick={() => sendMessage("أريد المنتج الأكثر مبيعًا")} className="shrink-0 rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-bold text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">اقتراح الأكثر مبيعًا</button>
            <button type="button" onClick={() => setIsHumanMode(true)} className="shrink-0 rounded-full bg-amber-50 px-3 py-1.5 text-[10px] font-bold text-amber-700 dark:bg-amber-950/40 dark:text-amber-300">تحويل لموظف</button>
          </div>
        )}

        <div className="flex items-center gap-2 border-t border-slate-100 p-3 dark:border-slate-800">
          <button type="button" onClick={() => sendMessage()} className="grid size-9 place-items-center rounded-xl bg-emerald-500 text-white" aria-label="إرسال رسالة"><Send size={15} /></button>
          <input value={input} onChange={(event) => setInput(event.target.value)} onKeyDown={(event) => event.key === "Enter" && sendMessage()} placeholder={isHumanMode ? "اكتب رد الموظف..." : "اختبر سؤال العميل..."} className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-[11px] outline-none focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-800" />
          <button type="button" onClick={() => setIsHumanMode((current) => !current)} className="grid size-9 place-items-center rounded-xl bg-slate-100 text-slate-500 dark:bg-slate-800" aria-label="تحويل لموظف"><UserRound size={15} /></button>
        </div>
      </div>

      <div className="flex items-start gap-2 rounded-2xl bg-amber-50 p-3 text-[10px] text-amber-800 dark:bg-amber-950/30 dark:text-amber-200">
        <ShieldCheck size={15} className="mt-0.5 shrink-0" />
        <p>المساعد يطلب تنفيذ الأدوات عبر صلاحيات محددة فقط. لا يتم الشراء أو تعديل الطلب أو أي إجراء حساس دون تأكيد واضح من المستخدم.</p>
      </div>
    </section>
  );
}

function Metric({ label, value, icon: Icon }: { label: string; value: string; icon: typeof Bot }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-2.5 dark:bg-slate-800/60">
      <Icon size={15} className="text-emerald-500" />
      <p className="mt-1 text-xs font-black">{value}</p>
      <span className="text-[9px] text-slate-400">{label}</span>
    </div>
  );
}

function ToggleRow({ label, enabled, onChange }: { label: string; enabled: boolean; onChange: () => void }) {
  return (
    <button type="button" onClick={onChange} className="flex w-full items-center justify-between py-1 text-[11px] font-bold">
      <span className={`relative h-5 w-9 rounded-full transition ${enabled ? "bg-emerald-500" : "bg-slate-300 dark:bg-slate-700"}`}>
        <span className={`absolute top-1 size-3 rounded-full bg-white transition ${enabled ? "right-1" : "left-1"}`} />
      </span>
      <span>{label}</span>
    </button>
  );
}

function KnowledgeTabButton({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return <button type="button" onClick={onClick} className={`flex-1 rounded-lg py-1.5 text-[10px] font-bold ${active ? "bg-white text-emerald-600 shadow-sm dark:bg-slate-900 dark:text-emerald-400" : "text-slate-400"}`}>{label}</button>;
}

function KnowledgeRow({ icon: Icon, label, value }: { icon: typeof Package; label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-2 rounded-xl bg-slate-50 p-2.5 dark:bg-slate-800">
      <span className="text-[10px] text-slate-500 dark:text-slate-400">{value}</span>
      <span className="flex items-center gap-1.5 font-bold"><Icon size={14} className="text-emerald-500" />{label}</span>
    </div>
  );
}
