// Shared TypeScript interfaces for Klikmart data

// ===========================================
// Product Related Types
// ===========================================

export interface Product {
    id: string;
    name: string;
    image: string;
    price: number;
    originalPrice?: number;
    rating?: number;
    reviews?: string;
    location?: string;
    badge?: string;
    discount?: number;
}

export interface CategoryProduct {
    id: string;
    name: string;
    image: string;
    price: number;
    originalPrice?: number;
    rating: number;
    reviews: string;
    location?: string;
    badge?: string;
    discount?: number;
}

export interface FlashSaleProduct {
    id: string;
    name: string;
    image: string;
    price: number;
    originalPrice: number;
    discount: number;
    soldPercent: number;
}

export interface CategoryConfig {
    name: string;
    title: string;
    icon: string;
    gradient: string;
    bannerImage: string;
    bannerTitle: string;
    bannerSubtitle: string;
    subcategories: string[];
}

export interface Category {
    id: string;
    title: string;
    name: string;
    icon: string;
    color: string;
}

export interface HeroBanner {
    id: string;
    image: string;
    title: string;
    subtitle: string;
    label: string;
    buttonText: string;
}

// ===========================================
// Cart Related Types
// ===========================================

export interface CartItem {
    id: string;
    name: string;
    image: string;
    variant: string;
    price: number;
    originalPrice?: number;
    quantity: number;
    checked: boolean;
}

export interface CartStore {
    id: string;
    name: string;
    checked: boolean;
    items: CartItem[];
}

// ===========================================
// Order Related Types (Buyer)
// ===========================================

export type OrderStatus = 'unpaid' | 'processing' | 'shipped' | 'completed' | 'cancelled' | 'return';

export interface OrderProduct {
    id: string;
    name: string;
    image: string;
    variant: string;
    quantity: number;
    price: number;
    originalPrice?: number;
}

export interface Order {
    id: string;
    storeName: string;
    storeVerified?: boolean;
    status: OrderStatus;
    statusLabel: string;
    products: OrderProduct[];
    totalPrice: number;
    shippingCost: number;
    createdAt: string;
    paymentDeadline?: string;
    trackingNumber?: string;
    courier?: string;
    estimatedArrival?: string;
    latestUpdate?: string;
    needsRating?: boolean;
    returnDeadline?: string;
    refundAmount?: number;
}

export interface TrackingEvent {
    id: string;
    icon?: string;
    isActive?: boolean;
    isStart?: boolean;
    title: string;
    time: string;
    location?: string;
    driverName?: string;
}

// ===========================================
// User Related Types
// ===========================================

export interface UserAddress {
    id: string;
    label: string;
    recipient: string;
    phone: string;
    address: string;
    city: string;
    postalCode: string;
    isPrimary: boolean;
}

export interface UserWallet {
    coins: number;
    vouchers: number;
}

export interface UserProfile {
    name: string;
    avatar: string;
    membershipLevel: string;
    followers: number;
    following: number;
    wallet: UserWallet;
    orderCounts: {
        unpaid: number;
        processing: number;
        shipped: number;
        needsRating: number;
        returns: number;
    };
}

// ===========================================
// Chat Related Types
// ===========================================

export interface ChatRoom {
    id: string;
    title: string;
    lastMessage: string;
    time: string;
    unread: number;
    avatar: string;
    isOnline: boolean;
    type: 'seller' | 'courier' | 'system';
}

export interface ChatMessage {
    id: string;
    sender: 'user' | 'seller' | 'system';
    text: string;
    time: string;
    isProductContext?: boolean;
    type: 'text' | 'image' | 'product';
}

// ===========================================
// Notification Related Types
// ===========================================

export interface Notification {
    id: number;
    type: 'order' | 'wallet' | 'system' | 'promo';
    title: string;
    time: string;
    content: string;
    isRead: boolean;
    icon?: string;
    color?: string;
    image?: string;
    action?: string;
    group: string;
}

// ===========================================
// Help Related Types
// ===========================================

export interface HelpTopic {
    title: string;
    slug: string;
}

export interface HelpCategory {
    icon: string;
    title: string;
    desc: string;
}

export interface HelpQuickAction {
    icon: string;
    label: string;
    route: string;
}

// ===========================================
// Store Related Types
// ===========================================

export interface StoreProfile {
    name: string;
    isVerified: boolean;
    location: string;
    isOnline: boolean;
    lastSeen: string;
    banner: string;
    logo: string;
    followers: string;
    rating: number;
    chatResponse: string;
    description: string;
}

export interface StoreVoucher {
    id: string;
    title: string;
    minPurchase: string;
    expiry: string;
}

// ===========================================
// Seller Order Types
// ===========================================

export interface SellerOrderItem {
    name: string;
    variant: string;
    quantity: number;
    price: number;
    image: string;
}

export type SellerOrderStatus = 'pending' | 'ready' | 'shipped' | 'completed' | 'cancelled' | 'returned';

export interface SellerOrder {
    id: string;
    buyerName: string;
    buyerAvatar: string;
    status: SellerOrderStatus;
    statusLabel: string;
    items: SellerOrderItem[];
    totalAmount: number;
    courier: string;
    courierType: string;
    deadline: string;
    isUrgent?: boolean;
    isCOD?: boolean;
    trackingNumber?: string;
    selected?: boolean;
}

export interface SellerOrderTab {
    id: string;
    label: string;
    count: number;
}

// ===========================================
// Seller Product Types
// ===========================================

export interface SellerProduct {
    id: string;
    name: string;
    sku: string;
    price: number;
    stock: number;
    sold: number;
    rating: number;
    image: string;
    isOutOfStock?: boolean;
}

export interface SellerProductTab {
    id: string;
    label: string;
    count: number;
}

// ===========================================
// Seller Finance Types
// ===========================================

export interface Transaction {
    id: string;
    type: 'income' | 'withdrawal' | 'fee';
    title: string;
    subtitle: string;
    amount: number;
    isPositive?: boolean;
    time: string;
    date?: string;
}

// ===========================================
// Seller Statistics Types
// ===========================================

export interface TopProduct {
    id: string;
    rank: number;
    name: string;
    image: string;
    sold: number;
    revenue: number;
}

export interface PeriodOption {
    id: string;
    label: string;
}
