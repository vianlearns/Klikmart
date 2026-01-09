import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/buyer/HomePage';
import { ProductDetailPage } from './pages/buyer/ProductDetailPage';
import { CartPage } from './pages/buyer/CartPage';
import { CheckoutPage } from './pages/buyer/CheckoutPage';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:title" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </Router>
  );
}

export default App;

