import { useEffect, useState } from "react";
import { BarChart3, ClipboardList } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { MobileMenuDrawer } from "@/components/layout/MobileMenuDrawer";
import { HomeScreen } from "@/components/home/HomeScreen";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { StoryViewerModal } from "@/components/stories/StoryViewerModal";
import { NotificationsDrawer } from "@/components/notifications/NotificationsDrawer";
import { StoreProfileModal } from "@/components/store/StoreProfileModal";
import { BottomNavigation, NavTab } from "@/components/layout/BottomNavigation";
import { ChatList } from "@/components/chat/ChatList";
import { ChatRoom } from "@/components/chat/ChatRoom";
import { ProfileScreen } from "@/components/profile/ProfileScreen";
import { ProfileSettingsView } from "@/components/profile/ProfileSettingsView";
import { InventoryManager } from "@/components/inventory/InventoryManager";
import { WelcomeScreen } from "@/components/WelcomeScreen";
import { useAppState } from "@/context/AppStateContext";
import { Toaster } from "@/components/ui/sonner";
import { MOCK_PRODUCTS, MOCK_STORIES, MOCK_STORES, MOCK_NOTIFICATIONS } from "@/data/mock";
import { MOCK_CONVERSATIONS } from "@/data/chatMock";
import { supabase } from "@/integrations/supabase/client";
import { createOrder } from "@/services/businessLogic";
import type { CartItem, Conversation, NotificationItem, Product, Store, Story } from "@/types";
import type { Session } from "@supabase/supabase-js";

export const Route = createFileRoute("/")({ component: IndexPage });

export default function IndexPage() {
  const { can } = useAppState();
  const [session, setSession] = useState<Session | null>(null);
  const [authReady, setAuthReady] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<NavTab>("home");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSellerMode, setIsSellerMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [activeStory, setActiveStory] = useState<Story | null>(null);
  const [activeStore, setActiveStore] = useState<Store | null>(null);
  const [activeConversation, setActiveConversation] = useState<Conversation | null>(null);
  const [showProfileSettings, setShowProfileSettings] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [notifications, setNotifications] = useState<NotificationItem[]>(MOCK_NOTIFICATIONS);

  useEffect(() => {
    let mounted = true;
    supabase.auth.getSession().then(({ data, error }) => {
      if (!mounted) return;
      if (error) setAuthError("تعذر الاتصال بخدمة تسجيل الدخول. حاول تحديث الصفحة.");
      setSession(data.session);
      setAuthReady(true);
    }).catch(() => {
      if (!mounted) return;
      setAuthError("تعذر الاتصال بخدمة تسجيل الدخول. حاول تحديث الصفحة.");
      setAuthReady(true);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, nextSession) => { setSession(nextSession); setAuthReady(true); });
    return () => { mounted = false; listener.subscription.unsubscribe(); };
  }, []);

  const addToCart = (product: Product) => setCartItems((current) => { const existing = current.find((item) => item.id === product.id); return existing ? current.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item) : [...current, { ...product, quantity: 1 }]; });
  const updateCartQuantity = (id: string, delta: number) => setCartItems((current) => current.map((item) => item.id === id ? { ...item, quantity: item.quantity + delta } : item).filter((item) => item.quantity > 0));
  const openStore = (store: Store) => setActiveStore(store);
  const sendStoryMessage = (storeId: string, storeName: string, message: string) => {
    const conversation = MOCK_CONVERSATIONS.find((item) => item.storeId === storeId);
    if (!conversation) return;
    setActiveConversation({
      ...conversation,
      storeName,
      lastMessage: message,
      lastTime: "الآن",
      messages: [...conversation.messages, { id: `story-${Date.now()}`, sender: "user", text: message, time: "الآن" }],
    });
    setActiveStory(null);
  };
  const openStoreChat = (storeId: string) => {
    const conversation = MOCK_CONVERSATIONS.find((item) => item.storeId === storeId);
    if (conversation) setActiveConversation(conversation);
  };
  const checkout = async (items: CartItem[]) => {
    if (!session?.user.id) throw new Error("يجب تسجيل الدخول أولاً");
    const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    const grouped = new Map<string, CartItem[]>();
    for (const item of items) grouped.set(item.seller_id, [...(grouped.get(item.seller_id) ?? []), item]);
    for (const [storeId, storeItems] of grouped) {
      if (!uuidPattern.test(storeId) || !uuidPattern.test(storeItems[0].id)) throw new Error("بيانات المتجر الحالية تجريبية؛ اربط المنتجات والمتاجر بقاعدة البيانات أولاً");
      await createOrder({
        buyerId: session.user.id,
        storeId,
        productId: storeItems[0].id,
        quantity: storeItems.reduce((sum, item) => sum + item.quantity, 0),
        totalIqd: storeItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
      });
    }
    setCartItems([]);
    setIsCartOpen(false);
  };
  const logout = () => { void supabase.auth.signOut(); };

  if (!authReady) return <div className="grid min-h-screen place-items-center bg-background text-sm text-muted-foreground">جارٍ تجهيز صفصاف...</div>;
  if (authError && !session) return <AuthConnectionError message={authError} onRetry={() => window.location.reload()} />;
  if (!session) return <WelcomeScreen />;

  return <div className="min-h-screen bg-slate-50 pb-16 text-slate-900 dark:bg-slate-950 dark:text-white">
    <Header cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} unreadNotificationsCount={notifications.filter((item) => !item.read).length} searchQuery={searchQuery} onSearchChange={setSearchQuery} onOpenCart={() => setIsCartOpen(true)} onOpenNotifications={() => setIsNotificationsOpen(true)} onOpenMenu={() => setIsMenuOpen(true)} />
    <main className="mx-auto max-w-7xl space-y-4 px-4 py-4">
      {!isSellerMode && activeTab === "home" && <HomeScreen products={MOCK_PRODUCTS} stores={MOCK_STORES} stories={MOCK_STORIES} selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} onSelectStory={setActiveStory} onSelectProduct={(product) => { const store = MOCK_STORES.find((item) => item.name === product.seller_name) ?? MOCK_STORES[0]; if (store) openStore(store); }} onSelectStore={openStore} onAddToCart={addToCart} />}
      {!isSellerMode && activeTab === "stores" && <section className="space-y-3 text-right"><h2 className="text-base font-black">المتاجر المعتمدة</h2><div className="grid gap-3 sm:grid-cols-2">{MOCK_STORES.map((store) => <button key={store.id} type="button" onClick={() => openStore(store)} className="flex items-center gap-3 rounded-3xl border border-slate-100 bg-white p-4 text-right shadow-sm dark:border-slate-800 dark:bg-slate-900"><img src={store.avatar} alt={store.name} className="size-14 rounded-full border-2 border-emerald-500 object-cover" /><div><h3 className="text-xs font-black">{store.name}</h3><p className="mt-1 text-[10px] text-slate-400">{store.bio}</p></div></button>)}</div></section>}
      {activeTab === "chat" && <ChatList conversations={MOCK_CONVERSATIONS} onSelectConversation={setActiveConversation} />}
      {!isSellerMode && activeTab === "profile" && (showProfileSettings ? <ProfileSettingsView initialEmail={session?.user.email ?? ""} onBack={() => setShowProfileSettings(false)} onLogout={logout} /> : <ProfileScreen accountMode="personal" onEnterSellerMode={can.manageStore ? () => { setIsSellerMode(true); setActiveTab("seller-dashboard"); } : undefined} onOpenSettings={() => setShowProfileSettings(true)} onLogout={logout} onAddToCart={addToCart} />)}
      {isSellerMode && can.manageStore && activeTab === "seller-dashboard" && <ProfileScreen accountMode="seller" onExitSellerMode={() => { setIsSellerMode(false); setActiveTab("profile"); }} onOpenSettings={() => setShowProfileSettings(true)} onLogout={logout} onAddToCart={addToCart} />}
      {isSellerMode && can.updateOrderStatus && activeTab === "seller-orders" && <SellerPlaceholder title="الطلبات الواردة" description="تابع الطلبات عبر خط التجميع من الجديد حتى المكتمل." icon={ClipboardList} />}
      {isSellerMode && can.manageStore && activeTab === "seller-inventory" && <InventoryManager />}
      {isSellerMode && can.manageStore && activeTab === "seller-analytics" && <SellerPlaceholder title="تحليلات المبيعات" description="افتح لوحة المتجر لرؤية الذروة والمنتجات الأكثر طلباً." icon={BarChart3} />}
    </main>
    <BottomNavigation activeTab={activeTab} unreadChatCount={MOCK_CONVERSATIONS.reduce((sum, item) => sum + item.unreadCount, 0)} isSellerMode={isSellerMode} onTabChange={setActiveTab} />
    <MobileMenuDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} onNavigateTab={(tab) => { setActiveTab(tab); setIsMenuOpen(false); }} />
    <CartDrawer isOpen={isCartOpen} items={cartItems} onClose={() => setIsCartOpen(false)} onUpdateQuantity={updateCartQuantity} onCheckout={checkout} onContinueShopping={() => { setIsCartOpen(false); setActiveTab("home"); }} />
    {isNotificationsOpen && <NotificationsDrawer notifications={notifications} onClose={() => setIsNotificationsOpen(false)} onMarkAllRead={() => setNotifications((current) => current.map((item) => ({ ...item, read: true })))} />}
    {activeStory && <StoryViewerModal story={activeStory} stories={MOCK_STORIES} products={MOCK_PRODUCTS} onAddToCart={addToCart} onSendMessage={sendStoryMessage} onClose={() => setActiveStory(null)} onOpenStore={(storeId) => { const store = MOCK_STORES.find((item) => item.id === storeId); if (store) openStore(store); }} />}
    {activeStore && <StoreProfileModal store={activeStore} products={MOCK_PRODUCTS} onClose={() => setActiveStore(null)} onOpenProduct={() => undefined} onAddToCart={addToCart} onOpenChat={openStoreChat} />}
    {activeConversation && <ChatRoom conversation={activeConversation} products={MOCK_PRODUCTS} onBack={() => setActiveConversation(null)} onOpenStore={(storeId) => { const store = MOCK_STORES.find((item) => item.id === storeId); if (store) { setActiveConversation(null); openStore(store); } }} />}
    <Toaster position="top-center" richColors />
  </div>;
}

function SellerPlaceholder({ title, description, icon: Icon }: { title: string; description: string; icon: typeof BarChart3 }) {
  return <section className="grid min-h-72 place-items-center rounded-3xl border border-emerald-100 bg-white p-8 text-center shadow-sm dark:border-emerald-950/50 dark:bg-slate-900"><div className="max-w-sm"><div className="mx-auto grid size-14 place-items-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-300"><Icon size={26} /></div><h2 className="mt-4 text-lg font-black">{title}</h2><p className="mt-2 text-xs leading-6 text-slate-500 dark:text-slate-400">{description}</p></div></section>;
}

function AuthConnectionError({ message, onRetry }: { message: string; onRetry: () => void }) {
  return <div dir="rtl" className="grid min-h-screen place-items-center bg-background px-6 text-center"><div className="max-w-sm"><h1 className="text-xl font-black text-foreground">تعذر فتح تسجيل الدخول</h1><p className="mt-2 text-xs leading-6 text-muted-foreground">{message}</p><button type="button" onClick={onRetry} className="mt-5 rounded-2xl bg-primary px-5 py-3 text-xs font-black text-primary-foreground">إعادة المحاولة</button></div></div>;
}
