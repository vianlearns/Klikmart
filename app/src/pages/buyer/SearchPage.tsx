import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '../../components/common/Icon';
import { MobileContainer } from '../../components/layout/MobileContainer';
import { BottomNavBuyer } from '../../components/layout/BottomNavBuyer';
import { ProductCard } from '../../components/product/ProductCard';
import { searchProducts } from '../../data/orderData';

type SortOption = 'terkait' | 'terbaru' | 'terlaris' | 'harga';

export function SearchPage() {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('Kemeja Pria');
    const [activeSort, setActiveSort] = useState<SortOption>('terkait');

    const sortOptions: { id: SortOption; label: string }[] = [
        { id: 'terkait', label: 'Terkait' },
        { id: 'terbaru', label: 'Terbaru' },
        { id: 'terlaris', label: 'Terlaris' },
        { id: 'harga', label: 'Harga' },
    ];

    const handleClickFilter = () => {
        alert('Fitur filter akan segera hadir!');
    };

    return (
        <MobileContainer>
            {/* Sticky Header Group */}
            <div className="sticky top-0 z-50 bg-white dark:bg-[#1a120b] shadow-sm">
                <div className="w-full md:max-w-7xl md:mx-auto">
                    {/* Top App Bar with Search */}
                    <div className="flex items-center gap-2 px-3 py-2 pt-12 md:pt-4">
                        <button
                            onClick={() => navigate(-1)}
                            className="flex items-center justify-center p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                        >
                            <Icon name="arrow_back" className="text-gray-900 dark:text-white" />
                        </button>
                        <div className="flex-1">
                            <div className="relative flex w-full items-center h-10 rounded-lg bg-background-light dark:bg-[#2c241b]">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <Icon name="search" className="text-text-secondary" size={20} />
                                </div>
                                <input
                                    className="block w-full p-2 pl-10 text-sm text-gray-900 dark:text-white bg-transparent border-none focus:ring-0 placeholder-text-secondary"
                                    placeholder="Cari produk, merek..."
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <button
                                onClick={handleClickFilter}
                                className="relative flex items-center justify-center p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                            >
                                <Icon name="filter_alt" className="text-gray-900 dark:text-white" />
                            </button>
                            <Link to="/cart" className="relative flex items-center justify-center p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                                <Icon name="shopping_cart" className="text-gray-900 dark:text-white" />
                                <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white ring-2 ring-white dark:ring-[#1a120b]">
                                    3
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Chips / Filter Sort Row */}
                    <div className="flex gap-2 px-4 py-3 overflow-x-auto hide-scrollbar border-b border-gray-100 dark:border-white/10">
                        {sortOptions.map((option) => (
                            <button
                                key={option.id}
                                onClick={() => setActiveSort(option.id)}
                                className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${activeSort === option.id
                                        ? 'bg-primary/10 text-primary ring-1 ring-primary/20 font-semibold'
                                        : 'bg-transparent text-text-secondary hover:bg-gray-100 dark:hover:bg-[#2c241b]'
                                    }`}
                            >
                                {option.label}
                                {option.id === 'harga' && (
                                    <Icon name="unfold_more" size={16} className="inline ml-1" />
                                )}
                            </button>
                        ))}
                        <button
                            onClick={handleClickFilter}
                            className="whitespace-nowrap flex items-center gap-1 rounded-full bg-transparent px-4 py-1.5 text-sm font-medium text-text-secondary hover:bg-gray-100 dark:hover:bg-[#2c241b] transition-colors"
                        >
                            Filter
                            <Icon name="tune" size={16} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark pb-24">
                <div className="w-full md:max-w-7xl md:mx-auto">
                    {/* Promo Banner */}
                    <div className="px-3 pt-3 md:px-6 md:pt-6">
                        <div className="w-full h-24 md:h-32 rounded-lg bg-gradient-to-r from-primary to-orange-400 flex items-center px-4 md:px-8 shadow-sm relative overflow-hidden">
                            <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                            <div className="z-10 text-white">
                                <p className="text-xs md:text-sm font-bold opacity-90 mb-1">SUPER SALE 9.9</p>
                                <h3 className="text-xl md:text-3xl font-bold leading-tight">Diskon s/d 70%</h3>
                                <p className="text-xs md:text-sm font-medium mt-1">Khusus Fashion Pria</p>
                            </div>
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4 p-3 md:p-6">
                        {searchProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                image={product.image}
                                price={product.price}
                                originalPrice={product.originalPrice}
                                rating={product.rating}
                                reviews={product.reviews}
                                location={product.location}
                                badge={product.badge}
                                discount={product.discount}
                            />
                        ))}
                    </div>

                    {/* Loading Indicator */}
                    <div className="w-full py-4 flex justify-center">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary" />
                    </div>
                </div>
            </div>

            {/* Bottom Navigation */}
            <BottomNavBuyer />
        </MobileContainer>
    );
}
