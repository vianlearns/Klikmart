import { useNavigate } from 'react-router-dom';
import { Icon } from '../../components/common/Icon';
import { MobileContainer } from '../../components/layout/MobileContainer';
import { ProductCard } from '../../components/product/ProductCard';
import { flashSaleProducts } from '../../data/mockData';
import { Header } from '../../components/layout/Header';
import { useState } from 'react';

export function RecentlyViewedPage() {
    const navigate = useNavigate();
    const [viewedItems, setViewedItems] = useState(flashSaleProducts);

    const handleClearAll = () => {
        if (window.confirm('Hapus semua riwayat dilihat?')) {
            setViewedItems([]);
        }
    };

    return (
        <MobileContainer className="bg-background-light dark:bg-background-dark min-h-screen">
            {/* Desktop Header */}
            <Header className="hidden md:block" showMobileElements={false} />

            <div className="md:max-w-7xl md:mx-auto md:px-6 md:py-8 w-full">
                {/* Desktop Title */}
                <div className="hidden md:flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Terakhir Dilihat</h1>
                    {viewedItems.length > 0 && (
                        <button
                            onClick={handleClearAll}
                            className="text-primary font-bold hover:underline transition-all"
                        >
                            Hapus Semua
                        </button>
                    )}
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
                        <h1 className="text-lg font-bold text-gray-900 dark:text-white flex-1">Terakhir Dilihat</h1>
                        {viewedItems.length > 0 && (
                            <button onClick={handleClearAll} className="text-sm text-primary font-medium">Hapus Semua</button>
                        )}
                    </div>
                </div>

                {/* Content */}
                <div className="p-4 md:p-0">
                    {viewedItems.length > 0 ? (
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {viewedItems.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    {...product}
                                    rating={4.8}
                                    reviews="150"
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-20 text-center bg-white dark:bg-[#221810] md:rounded-2xl md:shadow-sm md:border md:border-gray-100 md:dark:border-gray-800">
                            <div className="w-24 h-24 bg-gray-100 dark:bg-white/5 rounded-full flex items-center justify-center mb-4">
                                <Icon name="history" size={48} className="text-gray-300 dark:text-gray-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Riwayat Kosong</h3>
                            <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-md">
                                Kamu belum melihat produk apapun akhir-akhir ini.
                            </p>
                            <button
                                onClick={() => navigate('/')}
                                className="px-6 py-2.5 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-colors shadow-md shadow-primary/25"
                            >
                                Mulai Belanja
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </MobileContainer>
    );
}
