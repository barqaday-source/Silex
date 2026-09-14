import { Product, Store, Story, NotificationItem } from "@/types";

export const MOCK_STORES: Store[] = [
  { id: "1", name: "متجر بغداد سبورت", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150", verified: true, bio: "أفضل المستلزمات الرياضية والأحذية الأصلية", phone: "9647700000001", location: "بغداد - المنصور" },
  { id: "2", name: "مركز المنصور للتكنولوجيا", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150", verified: true, bio: "أحدث أجهزة الآيفون واللابتوبات بضمان حقيقي", phone: "9647700000002", location: "بغداد - الكرادة" },
];

export const MOCK_STORIES: Story[] = [
  { id: "s1", storeId: "1", storeName: "بغداد سبورت", storeAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150", mediaUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600", createdAt: "قبل 15 دقيقة" },
  { id: "s2", storeId: "2", storeName: "المنصور تِك", storeAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150", mediaUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600", createdAt: "قبل ساعة" },
];

export const MOCK_PRODUCTS: Product[] = [
  { id: "p1", name: "حذاء نايكي اير فورس كلاسيك", price: 90000, image_url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600", seller_id: "1", seller_name: "متجر بغداد سبورت", seller_avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150", category: "fashion", in_stock: true, created_at: "منذ ساعتين", description: "حذاء رياضي أصلي ومريح للارتداء اليومي" },
  { id: "p2", name: "آيفون 15 برو ماكس 256GB", price: 1450000, image_url: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600", seller_id: "2", seller_name: "مركز المنصور للتكنولوجيا", seller_avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150", category: "electronics", in_stock: true, created_at: "منذ 4 ساعات", description: "جهاز جديد بالكرتونة مع ضمان سنة كاملة" },
];

export const MOCK_NOTIFICATIONS: NotificationItem[] = [
  { id: "n1", title: "تم تأكيد طلبك", description: "طلبك لحذاء نايكي في طريقه إليك الآن", time: "قبل 10 دقائق", read: false, type: "order" },
  { id: "n2", title: "خصم خاص 20%", description: "خصومات حصرية على قسم الإلكترونيات اليوم فقط", time: "قبل ساعة", read: false, type: "discount" },
];
