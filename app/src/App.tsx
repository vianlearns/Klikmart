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
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/orders/rate" element={<RateOrderPage />} />
        <Route path="/orders/returns" element={<ReturnsPage />} />
        <Route path="/orders/track/:title" element={<OrderTrackingPage />} />
        <Route path="/orders/received/:title" element={<OrderReceivedPage />} />
      </Routes>
    </Router>
  );
}

export default App;

