import { useMemo, useState } from "react";
import {
  AlertTriangle,
  ArrowDown,
  ArrowUp,
  Barcode,
  ChevronDown,
  History,
  MapPin,
  Package,
  Plus,
  Search,
  X,
} from "lucide-react";
import { MOCK_PRODUCTS } from "@/data/mock";

type StockMovement = {
  id: number;
  quantity: number;
  reason: string;
  time: string;
};

type InventoryItem = {
  id: string;
  productId: string;
  name: string;
  sku: string;
  variant: string;
  quantity: number;
  minimum: number;
  purchaseCost: number;
  sellingPrice: number;
  location: string;
  movements: StockMovement[];
};

const initialInventory: InventoryItem[] = [
  {
    id: "stock-p1",
    productId: "p1",
    name: "حذاء نايكي اير فورس كلاسيك",
    sku: "NK-AF-43-BLK",
    variant: "43 • أسود",
    quantity: 24,
    minimum: 5,
    purchaseCost: 70000,
    sellingPrice: 90000,
    location: "المتجر",
    movements: [
      { id: 1, quantity: 20, reason: "استلام بضاعة", time: "اليوم 10:32" },
      { id: 2, quantity: -1, reason: "طلب #18291", time: "اليوم 12:15" },
      { id: 3, quantity: -1, reason: "طلب #18294", time: "اليوم 13:40" },
      { id: 4, quantity: 5, reason: "إضافة يدوية", time: "أمس" },
    ],
  },
  {
    id: "stock-p2",
    productId: "p2",
    name: "آيفون 15 برو ماكس 256GB",
    sku: "IP15-PM-256",
    variant: "256GB • تيتانيوم",
    quantity: 4,
    minimum: 5,
    purchaseCost: 1250000,
    sellingPrice: 1450000,
    location: "المخزن الرئيسي",
    movements: [
      { id: 5, quantity: 8, reason: "استلام بضاعة", time: "قبل يومين" },
      { id: 6, quantity: -4, reason: "طلبات مؤكدة", time: "اليوم 09:20" },
    ],
  },
];

export function InventoryManager() {
  const [items, setItems] = useState(initialInventory);
  const [search, setSearch] = useState("");
  const [activeItemId, setActiveItemId] = useState<string | null>(null);
  const [showAddStock, setShowAddStock] = useState(false);
  const [showScanner, setShowScanner] = useState(false);
  const [minimumAlertsEnabled, setMinimumAlertsEnabled] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState("الكل");

  const locations = ["الكل", ...new Set(items.map((item) => item.location))];
  const filteredItems = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();
    return items.filter((item) => {
      const matchesSearch = [item.name, item.sku, item.variant]
        .join(" ")
        .toLowerCase()
        .includes(normalizedSearch);
      const matchesLocation = selectedLocation === "الكل" || item.location === selectedLocation;
      return matchesSearch && matchesLocation;
    });
  }, [items, search, selectedLocation]);

  const lowStockCount = items.filter((item) => item.quantity <= item.minimum).length;
  const totalCost = items.reduce((sum, item) => sum + item.quantity * item.purchaseCost, 0);

  const updateQuantity = (itemId: string, delta: number) => {
    setItems((current) => current.map((item) => {
      if (item.id !== itemId) return item;
      const nextQuantity = Math.max(0, item.quantity + delta);
      return {
        ...item,
        quantity: nextQuantity,
        movements: [
          {
            id: Date.now(),
            quantity: delta,
            reason: delta > 0 ? "إضافة يدوية" : "سحب يدوي",
            time: "الآن",
          },
          ...item.movements,
        ],
      };
    }));
  };

  const addStock = (itemId: string, quantity: number, reason: string) => {
    if (!Number.isFinite(quantity) || quantity <= 0) return;
    setItems((current) => current.map((item) => {
      if (item.id !== itemId) return item;
      return {
        ...item,
        quantity: item.quantity + quantity,
        movements: [{ id: Date.now(), quantity, reason: reason || "استلام بضاعة", time: "الآن" }, ...item.movements],
      };
    }));
    setShowAddStock(false);
  };

  return (
    <section className="space-y-4 rounded-3xl border border-slate-100 bg-white p-4 text-right shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <button type="button" onClick={() => setShowScanner(true)} className="grid size-9 place-items-center rounded-xl bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-200" aria-label="مسح المنتج">
            <Barcode size={18} />
          </button>
          <button type="button" onClick={() => setShowAddStock(true)} className="flex items-center gap-1.5 rounded-xl bg-emerald-500 px-3 py-2 text-[11px] font-black text-white shadow-md shadow-emerald-500/20">
            <Plus size={15} /> إضافة مخزون
          </button>
        </div>
        <div>
          <h3 className="flex items-center justify-end gap-2 text-sm font-black"><Package size={18} className="text-emerald-500" /> إدارة المخزون</h3>
          <p className="mt-1 text-[10px] text-slate-400">الرصيد، التكلفة، والحركات في مكان واحد</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <SummaryCard label="إجمالي القطع" value={String(items.reduce((sum, item) => sum + item.quantity, 0))} />
        <SummaryCard label="مخزون منخفض" value={String(lowStockCount)} tone={lowStockCount > 0 ? "warning" : "normal"} />
        <SummaryCard label="قيمة التكلفة" value={`${totalCost.toLocaleString("ar-IQ")} د.ع`} />
        <SummaryCard label="المواقع" value={String(locations.length - 1)} />
      </div>

      {minimumAlertsEnabled && lowStockCount > 0 && (
        <div className="flex items-start justify-between gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-3 text-amber-900 dark:border-amber-900/50 dark:bg-amber-950/30 dark:text-amber-200">
          <button type="button" onClick={() => setMinimumAlertsEnabled(false)} className="text-amber-700 dark:text-amber-300" aria-label="إخفاء تنبيه المخزون"><X size={15} /></button>
          <div className="flex items-start gap-2 text-[11px]"><AlertTriangle size={16} className="mt-0.5 shrink-0" /><p><strong>مخزون منخفض:</strong> {lowStockCount} منتجات وصلت إلى الحد الأدنى أو أقل. راجعها قبل استقبال طلبات جديدة.</p></div>
        </div>
      )}

      <div className="flex flex-col gap-2 sm:flex-row">
        <div className="relative flex-1">
          <Search size={16} className="absolute right-3 top-3 text-slate-400" />
          <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="ابحث عن منتج أو SKU..." className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pr-9 pl-3 text-xs outline-none focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-800" />
        </div>
        <label className="relative min-w-40">
          <MapPin size={14} className="absolute right-3 top-3 text-slate-400" />
          <select value={selectedLocation} onChange={(event) => setSelectedLocation(event.target.value)} className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 py-2.5 pr-9 pl-8 text-xs outline-none dark:border-slate-700 dark:bg-slate-800">
            {locations.map((location) => <option key={location}>{location}</option>)}
          </select>
          <ChevronDown size={14} className="pointer-events-none absolute left-3 top-3 text-slate-400" />
        </label>
      </div>

      <div className="space-y-3">
        {filteredItems.map((item) => {
          const isLow = item.quantity <= item.minimum;
          const isActive = item.id === activeItemId;
          const profit = item.sellingPrice - item.purchaseCost;
          return (
            <article key={item.id} className={`rounded-2xl border p-3 transition ${isLow ? "border-amber-200 bg-amber-50/50 dark:border-amber-900/60 dark:bg-amber-950/20" : "border-slate-100 dark:border-slate-800"}`}>
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                  <button type="button" onClick={() => updateQuantity(item.id, -1)} className="grid size-8 place-items-center rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200" aria-label={`سحب قطعة من ${item.name}`}><ArrowDown size={15} /></button>
                  <span className="min-w-8 text-center text-sm font-black">{item.quantity}</span>
                  <button type="button" onClick={() => updateQuantity(item.id, 1)} className="grid size-8 place-items-center rounded-lg bg-emerald-500 text-white hover:bg-emerald-600" aria-label={`إضافة قطعة إلى ${item.name}`}><ArrowUp size={15} /></button>
                </div>
                <div className="min-w-0">
                  <div className="flex items-center justify-end gap-1.5">
                    <span className={`rounded-full px-2 py-0.5 text-[9px] font-black ${isLow ? "bg-amber-200 text-amber-800" : "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300"}`}>{isLow ? "مخزون منخفض" : "متوفر"}</span>
                    <h4 className="truncate text-xs font-black">{item.name}</h4>
                  </div>
                  <p className="mt-1 text-[10px] text-slate-400">{item.variant} • SKU: {item.sku}</p>
                  <p className="mt-1 flex items-center justify-end gap-1 text-[10px] text-slate-500 dark:text-slate-400"><MapPin size={11} /> {item.location} • الحد الأدنى {item.minimum}</p>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-3 gap-2 border-t border-slate-100 pt-3 text-center dark:border-slate-800">
                <div><span className="block text-[9px] text-slate-400">سعر البيع</span><strong className="text-[11px]">{item.sellingPrice.toLocaleString("ar-IQ")} د.ع</strong></div>
                <div><span className="block text-[9px] text-slate-400">الربح المتوقع</span><strong className="text-[11px] text-emerald-600">{profit.toLocaleString("ar-IQ")} د.ع</strong></div>
                <div><span className="block text-[9px] text-slate-400">قيمة التكلفة</span><strong className="text-[11px]">{(item.quantity * item.purchaseCost).toLocaleString("ar-IQ")} د.ع</strong></div>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <button type="button" onClick={() => setActiveItemId(isActive ? null : item.id)} className="flex items-center gap-1 text-[10px] font-bold text-slate-500 hover:text-emerald-600"><History size={13} /> {isActive ? "إخفاء الحركة" : "عرض حركة المخزون"}</button>
                <button type="button" onClick={() => { setActiveItemId(item.id); setShowAddStock(true); }} className="flex items-center gap-1 rounded-lg bg-emerald-50 px-2.5 py-1.5 text-[10px] font-bold text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300"><Plus size={13} /> إضافة بضاعة</button>
              </div>

              {isActive && <MovementList movements={item.movements} />}
            </article>
          );
        })}
        {filteredItems.length === 0 && <div className="rounded-2xl border border-dashed border-slate-200 p-8 text-center text-xs text-slate-400 dark:border-slate-700">لا توجد منتجات مطابقة للبحث.</div>}
      </div>

      {showAddStock && <AddStockModal items={items} selectedItemId={activeItemId} onClose={() => setShowAddStock(false)} onAdd={addStock} />}
      {showScanner && <ScannerModal onClose={() => setShowScanner(false)} />}
    </section>
  );
}

function SummaryCard({ label, value, tone = "normal" }: { label: string; value: string; tone?: "normal" | "warning" }) {
  return <div className={`rounded-2xl p-2.5 ${tone === "warning" ? "bg-amber-50 dark:bg-amber-950/30" : "bg-slate-50 dark:bg-slate-800/60"}`}><p className="text-xs font-black">{value}</p><span className="text-[9px] text-slate-400">{label}</span></div>;
}

function MovementList({ movements }: { movements: StockMovement[] }) {
  return <div className="mt-3 space-y-2 rounded-xl bg-slate-50 p-3 dark:bg-slate-800/60"><h5 className="flex items-center justify-end gap-1 text-[10px] font-black"><History size={13} className="text-emerald-500" /> حركة المخزون</h5>{movements.map((movement) => <div key={movement.id} className="flex items-center justify-between border-b border-slate-200 pb-1.5 text-[10px] last:border-0 last:pb-0 dark:border-slate-700"><span className="text-slate-400">{movement.time}</span><span className={movement.quantity > 0 ? "text-emerald-600" : "text-rose-600"}>{movement.quantity > 0 ? "+" : ""}{movement.quantity} • {movement.reason}</span></div>)}</div>;
}

function AddStockModal({ items, selectedItemId, onClose, onAdd }: { items: InventoryItem[]; selectedItemId: string | null; onClose: () => void; onAdd: (itemId: string, quantity: number, reason: string) => void }) {
  const [itemId, setItemId] = useState(selectedItemId ?? items[0]?.id ?? "");
  const [quantity, setQuantity] = useState("1");
  const [reason, setReason] = useState("استلام بضاعة");
  return <ModalShell title="إضافة مخزون" onClose={onClose}><div className="space-y-3 text-right"><label className="block text-xs font-bold">المنتج<select value={itemId} onChange={(event) => setItemId(event.target.value)} className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-xs dark:border-slate-700 dark:bg-slate-800">{items.map((item) => <option key={item.id} value={item.id}>{item.name} • {item.variant}</option>)}</select></label><label className="block text-xs font-bold">الكمية<input type="number" min="1" value={quantity} onChange={(event) => setQuantity(event.target.value)} className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-xs dark:border-slate-700 dark:bg-slate-800" /></label><label className="block text-xs font-bold">الملاحظة<input value={reason} onChange={(event) => setReason(event.target.value)} className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-xs dark:border-slate-700 dark:bg-slate-800" /></label><button type="button" onClick={() => onAdd(itemId, Number(quantity), reason)} className="w-full rounded-xl bg-emerald-500 py-2.5 text-xs font-black text-white">إضافة وتسجيل الحركة</button></div></ModalShell>;
}

function ScannerModal({ onClose }: { onClose: () => void }) {
  return <ModalShell title="مسح المنتج" onClose={onClose}><div className="space-y-3 text-center"><div className="grid aspect-video place-items-center rounded-2xl border-2 border-dashed border-emerald-400 bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30"><Barcode size={58} /></div><p className="text-xs text-slate-500 dark:text-slate-400">واجهة المسح جاهزة للربط مع كاميرا الجهاز أو قارئ Barcode.</p><button type="button" onClick={onClose} className="w-full rounded-xl bg-slate-100 py-2.5 text-xs font-bold dark:bg-slate-800">إغلاق</button></div></ModalShell>;
}

function ModalShell({ title, children, onClose }: { title: string; children: React.ReactNode; onClose: () => void }) {
  return <div className="fixed inset-0 z-[60] grid place-items-center bg-black/60 p-4 backdrop-blur-sm"><div className="w-full max-w-sm rounded-3xl bg-white p-5 shadow-2xl dark:bg-slate-900"><div className="mb-4 flex items-center justify-between"><button type="button" onClick={onClose} className="grid size-8 place-items-center rounded-xl bg-slate-100 text-slate-500 dark:bg-slate-800" aria-label="إغلاق"><X size={16} /></button><h3 className="text-sm font-black">{title}</h3></div>{children}</div></div>;
}
