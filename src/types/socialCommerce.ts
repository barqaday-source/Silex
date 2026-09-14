export type StoryContentType =
  | "product"
  | "offer"
  | "new_arrival"
  | "discount"
  | "announcement"
  | "custom";

export interface Story {
  id: string;
  storeId: string;
  storeName: string;
  storeAvatar: string;
  contentType: StoryContentType;
  mediaUrl: string;
  caption?: string;
  productId?: string;
  productPrice?: number;
  discountPercentage?: number;
  expiresAt: string;
  viewsCount?: number;
  productClicksCount?: number;
}

export type PromotionStatus =
  | "pending"
  | "approved"
  | "rejected"
  | "active"
  | "completed";

export type PromotionTargetType = "store" | "product" | "story" | "reel" | "offer";

export interface PromotionRequest {
  id: string;
  storeId: string;
  storeName: string;
  targetType: PromotionTargetType;
  targetId?: string;
  targetCity: string;
  durationDays: number;
  budgetIqd: number;
  status: PromotionStatus;
  adminNotes?: string;
  createdAt: string;
}
