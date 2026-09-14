import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { MobileMenuDrawer } from "@/components/layout/MobileMenuDrawer";
import { CategoryBar } from "@/components/home/CategoryBar";
import { PromotionBanner } from "@/components/home/PromotionBanner";
import { StoryBar } from "@/components/home/StoryBar";
import { ProductCard } from "@/components/product/ProductCard";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { StoryViewerModal } from "@/components/stories/StoryViewerModal";
import { NotificationsDrawer } from "@/components/notifications/NotificationsDrawer";
import { StoreProfileModal } from "@/components/store/StoreProfileModal";
import { BottomNavigation, NavTab } from "@/components/layout/BottomNavigation";
import { ChatList } from "@/components/chat/ChatList";
import { ChatRoom } from "@/components/chat/ChatRoom";
import { ProfileScreen } from "@/components/profile/ProfileScreen";
import { MOCK_PRODUCTS, MOCK_STORIES, MOCK_STORES, MOCK_NOTIFICATIONS } from "@/data/mock";
import { MOCK_CONVERSATIONS } from "@/data/chatMock";
import { Product, Story, CartItem, NotificationItem, Store, Conversation } from "@/types";

export const Route = createFileRoute("/")({
  component: IndexPage,
});

export default function IndexPage() {
  const [activeTab, setActiveTab] = useState<NavTab>("home");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [activeStory, setActiveStory] = useState<Story | null>(null);
  const [activeStore, setActiveStore] = useState<Store | null>(null);
  const [activeConversation, setActiveConversation] = useState<Conversation | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [notifications, setNotifications] = useState<NotificationItem[]>(MOCK_NOTIFICATIONS);
  const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([MOCK_PRODUCTS[0]]);

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      }).filter(Boolean) as CartItem[]
    );
  };

  const filteredProducts = MOCK_PRODUCTS.filter((p) => {
    const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.seller_name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white pb-16">
      {/* Global Clean Shell Header */}
      <Header
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        unreadNotificationsCount={notifications.filter((n) => !n.read).length}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenNotifications={() => setIsNotificationsOpen(true)}
        onOpenMenu={() => setIsMenuOpen(true)}
      />

      <main className="mx-auto max-w-5xl px-4 py-4 space-y-4">
        {/* TABS VIEW ROUTING */}
        {activeTab === "home" && (
          <>
            <StoryBar stories={MOCK_STORIES} onSelectStory={setActiveStory} />
            <CategoryBar selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
            <PromotionBanner />

            <section className="space-y-3">
              <h2 className="text-base font-black text-right">أحدث المنتجات</h2>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onOpen={() => {
                      const store = MOCK_STORES.find(s => s.name === product.seller_name);
                      if (store) setActiveStore(store);
                    }}
                    onAddToCart={handleAddToCart}
                  />
                ))}
              </div>
            </section>
          </>
        )}

        {activeTab === "stores" && (
          <section className="space-y-3 text-right">
            <h2 className="text-base font-black">المتاجر المعتمدة</h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {MOCK_STORES.map((store) => (
                <div
                  key={store.id}
                  onClick={() => setActiveStore(store)}
                  className="flex cursor-pointer items-center justify-between rounded-3xl border border-slate-100 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="flex items-center gap-3">
                    <img src={store.avatar} alt={store.name} className="size-14 rounded-full object-cover border-2 border-emerald-500" />
                    <div>
                      <h3 className="text-xs font-black">{store.name}</h3>
                      <p className="text-[10px] text-slate-400 mt-1">{store.bio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === "favorites" && (
          <section className="space-y-3 text-right">
            <h2 className="text-base font-black">المنتجات المفضلة ❤️</h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {favoriteProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onOpen={() => {
                    const store = MOCK_STORES.find(s => s.name === product.seller_name);
                    if (store) setActiveStore(store);
                  }}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </section>
        )}

        {activeTab === "chat" && (
          <ChatList
            conversations={MOCK_CONVERSATIONS}
            onSelectConversation={setActiveConversation}
          />
        )}

        {activeTab === "profile" && <ProfileScreen />}
      </main>

      {/* GLOBAL BOTTOM NAVIGATION */}
      <BottomNavigation
        activeTab={activeTab}
        unreadChatCount={MOCK_CONVERSATIONS.reduce((acc, c) => acc + c.unreadCount, 0)}
        favoritesCount={favoriteProducts.length}
        onTabChange={setActiveTab}
      />

      {/* DRAWERS & MODALS */}
      <MobileMenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onNavigateTab={(tab) => setActiveTab(tab)}
      />
      
      <CartDrawer isOpen={isCartOpen} items={cartItems} onClose={() => setIsCartOpen(false)} onUpdateQuantity={handleUpdateQuantity} />

      {isNotificationsOpen && (
        <NotificationsDrawer
          notifications={notifications}
          onClose={() => setIsNotificationsOpen(false)}
          onMarkAllRead={() => setNotifications((prev) => prev.map((n) => ({ ...n, read: true })))}
        />
      )}

      {activeStory && (
        <StoryViewerModal
          story={activeStory}
          onClose={() => setActiveStory(null)}
          onOpenStore={(storeId) => {
            const store = MOCK_STORES.find((s) => s.id === storeId);
            if (store) setActiveStore(store);
          }}
        />
      )}

      {activeStore && (
        <StoreProfileModal
          store={activeStore}
          products={MOCK_PRODUCTS}
          onClose={() => setActiveStore(null)}
          onOpenProduct={() => {}}
          onAddToCart={handleAddToCart}
        />
      )}

      {activeConversation && (
        <ChatRoom
          conversation={activeConversation}
          onBack={() => setActiveConversation(null)}
          onOpenStore={(storeId) => {
            const store = MOCK_STORES.find((s) => s.id === storeId);
            if (store) setActiveStore(store);
          }}
        />
      )}
    </div>
  );
}
