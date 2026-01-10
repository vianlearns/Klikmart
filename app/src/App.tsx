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
      </Routes>
    </Router>
  );
}

export default App;

