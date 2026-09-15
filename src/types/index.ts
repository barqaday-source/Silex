export type Store = {
  id: string;
  name: string;
  avatar: string;
  verified?: boolean;
  bio?: string;
  phone?: string;
  location?: string;
  rating?: number;
};

export type Story = {
  id: string;
  storeId: string;
  storeName: string;
  storeAvatar: string;
  mediaUrl: string;
  createdAt: string;
  productId?: string;
};

export type NotificationItem = {
  id: string;
  title: string;
  description: string;
  time: string;
  read: boolean;
  type: 'order' | 'discount' | 'system';
};

export type Product = {
  id: string;
  name: string;
  price: number;
  image_url: string;
  seller_id: string;
  seller_name: string;
  seller_avatar?: string;
  category: string;
  in_stock: boolean;
  created_at: string;
  description?: string;
  likes_count?: number;
};

export type CartItem = Product & {
  quantity: number;
};

export type ChatMessage = {
  id: string;
  sender: 'user' | 'store';
  text?: string;
  time: string;
  type?: 'text' | 'product' | 'order' | 'offer';
  productDetails?: {
    id: string;
    name: string;
    price: number;
    image: string;
  };
  orderDetails?: {
    orderId: string;
    status: string;
  };
  offerDetails?: {
    amount: number;
    expiresIn: string;
  };
};

export type Conversation = {
  id: string;
  storeId: string;
  storeName: string;
  storeAvatar: string;
  isOnline: boolean;
  unreadCount: number;
  lastMessage: string;
  lastTime: string;
  relatedProductName?: string;
  hasActiveOrder?: boolean;
  messages: ChatMessage[];
};
