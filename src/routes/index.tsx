import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { MobileMenuDrawer } from "@/components/layout/MobileMenuDrawer";
import { HomeScreen } from "@/components/home/HomeScreen";
import { ExploreScreen } from "@/components/explore/ExploreScreen";
import { ReelsFeed } from "@/components/social/ReelsFeed";
import { ProductCard } from "@/components/product/ProductCard";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { StoryViewerModal } from "@/components/stories/StoryViewerModal";
import { NotificationsDrawer } from "@/components/notifications/NotificationsDrawer";
import { StoreProfileModal } from "@/components/store/StoreProfileModal";
import { UserProfileModal } from "@/components/social/UserProfileModal";
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
  const [isUserProfileOpen, setIsUserProfileOpen] = useState(false);
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

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white pb-16">
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
        {activeTab === "home" && (
          <HomeScreen
            products={MOCK_PRODUCTS}
            stores={MOCK_STORES}
            stories={MOCK_STORIES}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            onSelectStory={setActiveStory}
            onSelectProduct={(p) => {
              const store = MOCK_STORES.find((s) => s.name === p.seller_name);
              if (store) setActiveStore(store);
            }}
            onSelectStore={setActiveStore}
            onAddToCart={handleAddToCart}
          />
        )}

        {activeTab === "explore" && (
          <ExploreScreen
            products={MOCK_PRODUCTS}
            stores={MOCK_STORES}
            onSelectProduct={(p) => {
              const store = MOCK_STORES.find((s) => s.name === p.seller_name);
              if (store) setActiveStore(store);
            }}
            onSelectStore={setActiveStore}
          />
        )}

        {activeTab === "reels" && (
          <ReelsFeed
            products={MOCK_PRODUCTS}
            onAddToCart={handleAddToCart}
            onOpenProduct={(p) => {
              const store = MOCK_STORES.find((s) => s.name === p.seller_name);
              if (store) setActiveStore(store);
            }}
          />
        )}

        {activeTab === "chat" && (
          <ChatList
            conversations={MOCK_CONVERSATIONS}
            onSelectConversation={setActiveConversation}
          />
        )}

        {activeTab === "profile" && <ProfileScreen />}
      </main>

      <BottomNavigation
        activeTab={activeTab}
        unreadChatCount={MOCK_CONVERSATIONS.reduce((acc, c) => acc + c.unreadCount, 0)}
        favoritesCount={favoriteProducts.length}
        onTabChange={setActiveTab}
      />

      <MobileMenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onNavigateTab={(tab) => {
          if (tab === "profile") setIsUserProfileOpen(true);
          else setActiveTab(tab);
        }}
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

      <UserProfileModal
        isOpen={isUserProfileOpen}
        onClose={() => setIsUserProfileOpen(false)}
        onOpenChat={() => {
          setActiveTab("chat");
          setActiveConversation(MOCK_CONVERSATIONS[0]);
        }}
      />

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
