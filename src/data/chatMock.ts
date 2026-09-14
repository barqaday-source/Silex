import { Conversation } from "@/types";

export const MOCK_CONVERSATIONS: Conversation[] = [
  {
    id: "c1",
    storeId: "1",
    storeName: "متجر بغداد سبورت",
    storeAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    isOnline: true,
    unreadCount: 2,
    lastMessage: "نعم، المنتج متوفر وجاهز للشحن اليوم 👍",
    lastTime: "10:42 ص",
    relatedProductName: "حذاء نايكي اير فورس كلاسيك",
    hasActiveOrder: true,
    messages: [
      {
        id: "m1",
        sender: "user",
        type: "product",
        time: "10:30 ص",
        productDetails: {
          id: "p1",
          name: "حذاء نايكي اير فورس كلاسيك",
          price: 90000,
          image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
        },
      },
      {
        id: "m2",
        sender: "user",
        text: "مرحباً، هل قياس 42 متوفر من هذا الحذاء؟",
        time: "10:31 ص",
      },
      {
        id: "m3",
        sender: "store",
        text: "أهلاً بك! نعم متوفر وجاهز للشحن اليوم 👍",
        time: "10:42 ص",
      },
      {
        id: "m4",
        sender: "store",
        type: "order",
        time: "10:43 ص",
        orderDetails: {
          orderId: "#IQ-88219",
          status: "قيد التجهيز للتوصيل 📦",
        },
      },
    ],
  },
  {
    id: "c2",
    storeId: "2",
    storeName: "مركز المنصور للتكنولوجيا",
    storeAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    isOnline: false,
    unreadCount: 0,
    lastMessage: "تم تأكيد طلب الآيفون وسيتصل بك المندوب.",
    lastTime: "أمس",
    relatedProductName: "آيفون 15 برو ماكس 256GB",
    hasActiveOrder: false,
    messages: [
      {
        id: "m10",
        sender: "store",
        text: "تم تأكيد طلب الآيفون وسيتصل بك المندوب.",
        time: "أمس 04:15 م",
      },
    ],
  },
];
