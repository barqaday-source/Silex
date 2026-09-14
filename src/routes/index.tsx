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
import { MOCK_PRODUCTS, MOCK_STORIES, MOCK_STORES, MOCK_NOTIFICATIONS } from "@/data/mock";
import { Product, Story, CartItem, NotificationItem, Store } from "@/types";

export const Route = createFileRoute("/")({
  component: IndexPage,
});

export default function IndexPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [activeStory, setActiveStory] = useState<Story | null>(null);
  const [activeStore, setActiveStore] = useState<Store | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [notifications, setNotifications] = useState<NotificationItem[]>(MOCK_NOTIFICATIONS);

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

  const filteredProducts = selectedCategory === "all"
    ? MOCK_PRODUCTS
    : MOCK_PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white">
      <Header
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        unreadNotificationsCount={notifications.filter((n) => !n.read).length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenNotifications={() => setIsNotificationsOpen(true)}
        onOpenMenu={() => setIsMenuOpen(true)}
      />

      <main className="mx-auto max-w-5xl px-4 py-4 space-y-4">
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
      </main>

      <MobileMenuDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
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
    </div>
  );
}
