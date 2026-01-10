import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/buyer/HomePage';
import { ProductDetailPage } from './pages/buyer/ProductDetailPage';
import { CartPage } from './pages/buyer/CartPage';
import { CheckoutPage } from './pages/buyer/CheckoutPage';
import { SearchPage } from './pages/buyer/SearchPage';
import { ProfilePage } from './pages/buyer/ProfilePage';
import { OrdersPage } from './pages/buyer/OrdersPage';
import { RateOrderPage } from './pages/buyer/RateOrderPage';
import { ReturnsPage } from './pages/buyer/ReturnsPage';
import { OrderTrackingPage } from './pages/buyer/OrderTrackingPage';
import { OrderReceivedPage } from './pages/buyer/OrderReceivedPage';
import { HelpCenterPage } from './pages/buyer/HelpCenterPage';
import { NotificationPage } from './pages/buyer/NotificationPage';
import { ChatListPage } from './pages/buyer/ChatListPage';
import { ChatRoomPage } from './pages/buyer/ChatRoomPage';
import { WishlistPage } from './pages/buyer/WishlistPage';
import { RecentlyViewedPage } from './pages/buyer/RecentlyViewedPage';
import { AddressPage } from './pages/buyer/AddressPage';
import { SettingsPage } from './pages/buyer/SettingsPage';
import { SellerCenterPage } from './pages/buyer/SellerCenterPage';
import { CategoryPage } from './pages/buyer/CategoryPage';

// Seller Pages
import { ProductManagementPage } from './pages/seller/ProductManagementPage';
import { OrderManagementPage } from './pages/seller/OrderManagementPage';
import { FinancePage } from './pages/seller/FinancePage';
import { AdsManagementPage } from './pages/seller/AdsManagementPage';
import { SalesStatisticsPage } from './pages/seller/SalesStatisticsPage';
import { LiveStreamingPage } from './pages/seller/LiveStreamingPage';
import { SellerChatListPage } from './pages/seller/SellerChatListPage';
import { SellerChatRoomPage } from './pages/seller/SellerChatRoomPage';

import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:title" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/profile" element={<ProfilePage />} />

        {/* Order Routes */}
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/orders/rate" element={<RateOrderPage />} />
        <Route path="/orders/returns" element={<ReturnsPage />} />
        <Route path="/orders/track/:title" element={<OrderTrackingPage />} />
        <Route path="/orders/received/:title" element={<OrderReceivedPage />} />

        {/* New Pages */}
        <Route path="/help" element={<HelpCenterPage />} />
        <Route path="/notification" element={<NotificationPage />} />
        <Route path="/chat" element={<ChatListPage />} />
        <Route path="/chat/:title" element={<ChatRoomPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/recently-viewed" element={<RecentlyViewedPage />} />
        <Route path="/addresses" element={<AddressPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/seller-center" element={<SellerCenterPage />} />

        {/* Seller Center Routes */}
        <Route path="/seller/products" element={<ProductManagementPage />} />
        <Route path="/seller/orders" element={<OrderManagementPage />} />
        <Route path="/seller/shipping" element={<OrderManagementPage />} />
        <Route path="/seller/finance" element={<FinancePage />} />
        <Route path="/seller/ads" element={<AdsManagementPage />} />
        <Route path="/seller/statistics" element={<SalesStatisticsPage />} />
        <Route path="/seller/live" element={<LiveStreamingPage />} />
        <Route path="/seller/chat" element={<SellerChatListPage />} />
        <Route path="/seller/chat/:title" element={<SellerChatRoomPage />} />
      </Routes>
    </Router>
  );
}

export default App;
