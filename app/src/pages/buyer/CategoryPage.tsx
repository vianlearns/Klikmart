import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { Icon } from '../../components/common/Icon';
import { MobileContainer } from '../../components/layout/MobileContainer';
import { ProductCard } from '../../components/product/ProductCard';
import { Header } from '../../components/layout/Header';
import { BottomNavBuyer } from '../../components/layout/BottomNavBuyer';
import { categoryConfig, getCategoryProducts } from '../../data/dataCategories';

export function CategoryPage() {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const [activeFilter, setActiveFilter] = useState('Semua');

    const category = slug ? categoryConfig[slug] : null;
    const products = slug ? getCategoryProducts(slug) : [];

    if (!category) {
        return (
            <MobileContainer className="bg-background-light dark:bg-background-dark min-h-screen">
                <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
                    <Icon name="error" size={64} className="text-gray-300 mb-4" />
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Kategori Tidak Ditemukan</h2>
                    <p className="text-gray-500 mb-6">Kategori yang Anda cari tidak tersedia.</p>
                    <button onClick={() => navigate('/')} className="px-6 py-2.5 bg-primary text-white font-bold rounded-xl">
                        Kembali ke Beranda
                    </button>
                </div>
            </MobileContainer>
        );
    }

    return (
        <MobileContainer className="bg-background-light dark:bg-background-dark min-h-screen">
            {/* Desktop Header */}
            <Header className="hidden md:block" showMobileElements={false} />

            <div className="md:max-w-7xl md:mx-auto md:px-6 md:py-8 w-full">
                {/* Mobile Header */}
                <div className="md:hidden sticky top-0 z-50 bg-white/95 dark:bg-[#1a120b]/95 backdrop-blur-md border-b border-gray-100 dark:border-white/5">
                    <div className="flex items-center gap-3 p-4">
                        <button onClick={() => navigate(-1)} className="flex items-center justify-center p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
                            <Icon name="arrow_back" size={24} className="text-gray-900 dark:text-white" />
                        </button>
                        <h1 className="text-lg font-bold text-gray-900 dark:text-white flex-1">{category.name}</h1>
                        <Link to="/search" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/5">
                            <Icon name="search" size={24} className="text-gray-600 dark:text-gray-300" />
                        </Link>
                        <Link to="/cart" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 relative">
                            <Icon name="shopping_cart" size={24} className="text-gray-600 dark:text-gray-300" />
                            <span className="absolute top-1 right-1 w-4 h-4 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center">3</span>
                        </Link>
                    </div>
                </div>

                {/* Hero Banner */}
                <div className="p-4 md:p-0 md:mb-6">
                    <div className={`relative w-full rounded-2xl overflow-hidden aspect-[2.5/1] md:aspect-[4/1] bg-gradient-to-r ${category.gradient}`}>
                        <div className="absolute inset-0 bg-black/20" />
                        <div className="absolute inset-0 p-6 flex flex-col justify-center">
                            <span className="inline-block w-max bg-white/20 backdrop-blur-md text-white text-xs font-bold px-2 py-1 rounded mb-2">
                                SPECIAL PROMO
                            </span>
                            <h2 className="text-white text-2xl md:text-3xl font-bold leading-tight mb-1">{category.bannerTitle}</h2>
                            <p className="text-white/80 text-sm md:text-base">{category.bannerSubtitle}</p>
                        </div>
                        <div className="absolute right-[-20px] bottom-[-20px] w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                    </div>
                </div>

                {/* Filter Chips */}
                <div className="px-4 md:px-0 mb-4 overflow-x-auto no-scrollbar">
                    <div className="flex gap-2 pb-2">
                        {category.subcategories.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === filter
                                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                                    : 'bg-white dark:bg-[#2c241d] text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-primary'
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Products Grid */}
                <div className="p-4 md:p-0">
                    <div className="flex items-center justify-between mb-4">
                        <p className="text-sm text-gray-500">{products.length} Produk ditemukan</p>
                        <button className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300">
                            <Icon name="sort" size={18} />
                            <span>Urutkan</span>
                        </button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
                        {products.map((product) => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>

                    {/* Load More Button */}
                    <div className="py-8 flex justify-center">
                        <button className="flex items-center gap-2 text-primary font-semibold text-sm border border-primary/20 px-6 py-2.5 rounded-full hover:bg-primary/5 transition-colors">
                            Muat Lebih Banyak <Icon name="expand_more" size={18} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Navigation */}
            <BottomNavBuyer />
        </MobileContainer>
    );
}
