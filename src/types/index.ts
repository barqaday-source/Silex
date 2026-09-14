export type Store = {
  id: string;
  name: string;
  avatar: string;
  verified?: boolean;
  bio?: string;
  phone?: string;
  location?: string;
};

export type Story = {
  id: string;
  storeId: string;
  storeName: string;
  storeAvatar: string;
  mediaUrl: string;
  createdAt: string;
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
