import { useNavigate } from 'react-router-dom';
import { Icon } from '../../components/common/Icon';
import { MobileContainer } from '../../components/layout/MobileContainer';
import { ProductCard } from '../../components/product/ProductCard';
import { recommendedProducts } from '../../data/mockData';
import { Header } from '../../components/layout/Header';
import { useState } from 'react';

export function WishlistPage() {
    const navigate = useNavigate();
    const [wishlistItems, setWishlistItems] = useState(recommendedProducts);

    const handleRemoveItem = (id: string) => {
        if (window.confirm("Hapus dari wishlist?")) {
            setWishlistItems(prev => prev.filter(item => item.id !== id));
        }
    };

    return (
        <MobileContainer className="bg-background-light dark:bg-background-dark min-h-screen">
            {/* Desktop Header */}
            <Header className="hidden md:block" showMobileElements={false} />

            <div className="md:max-w-7xl md:mx-auto md:px-6 md:py-8 w-full">
                {/* Desktop Title */}
                <div className="hidden md:flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Wishlist</h1>
                    <span className="text-gray-500">{wishlistItems.length} Barang</span>
                </div>

                {/* Mobile Header */}
                <div className="md:hidden sticky top-0 z-50 bg-white dark:bg-[#1a120b] border-b border-gray-100 dark:border-white/5 px-4 py-3 shadow-sm">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => navigate(-1)}
                            className="flex items-center justify-center p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
                        >
                            <Icon name="arrow_back" size={24} className="text-gray-900 dark:text-white" />
                        </button>
                        <h1 className="text-lg font-bold text-gray-900 dark:text-white flex-1">Wishlist</h1>
                        <span className="text-sm font-medium text-gray-500">{wishlistItems.length}</span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-4 md:p-0">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {wishlistItems.map((product) => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>

                    {wishlistItems.length === 0 && (
                        <div className="flex flex-col items-center justify-center py-20 text-center bg-white dark:bg-[#221810] md:rounded-2xl md:shadow-sm md:border md:border-gray-100 md:dark:border-gray-800">
                            <div className="w-24 h-24 bg-gray-100 dark:bg-white/5 rounded-full flex items-center justify-center mb-4">
                                <Icon name="favorite" size={48} className="text-gray-300 dark:text-gray-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Wishlist Kosong</h3>
                            <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-md">
                                Simpan produk favoritmu disini agar mudah ditemukan nanti.
                            </p>
                            <button
                                onClick={() => navigate('/')}
                                className="px-6 py-2.5 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-colors shadow-md shadow-primary/25"
                            >
                                Cari Produk
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </MobileContainer>
    );
}
