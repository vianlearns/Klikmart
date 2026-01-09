import { Link } from 'react-router-dom';
import { Icon } from '../../components/common/Icon';
import { MobileContainer } from '../../components/layout/MobileContainer';
import { BottomNavBuyer } from '../../components/layout/BottomNavBuyer';
import { ProductCard } from '../../components/product/ProductCard';
import { categories, flashSaleProducts, recommendedProducts, heroBanners } from '../../data/mockData';
import logoHorizontal from '../../assets/klikmart-horizontal.svg';

export function HomePage() {
    return (
        <MobileContainer>
            {/* Header & Search */}
            <header className="sticky top-0 z-50 bg-white dark:bg-[#1a120b] shadow-sm">
                <div className="px-4 pt-12 pb-3 md:py-4 w-full md:max-w-7xl md:mx-auto md:px-6">
                    <div className="flex items-center gap-4 md:gap-8">
                        {/* Logo for Desktop */}
                        <Link to="/" className="hidden md:flex items-center">
                            <img src={logoHorizontal} alt="Klikmart" className="h-8 w-auto" />
                        </Link>

                        <div className="flex-1 relative max-w-2xl">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Icon name="search" className="text-primary" size={20} />
                            </div>
                            <input
                                className="block w-full pl-10 pr-3 py-2.5 border-none rounded-xl bg-background-light dark:bg-[#2c241d] text-sm placeholder-gray-400 dark:text-white focus:ring-1 focus:ring-primary"
                                placeholder="Cari produk, merek..."
                                type="text"
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <Icon name="mic" className="text-gray-400" size={20} />
                            </div>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-6">
                            <Link to="/cart" className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group">
                                <Icon name="shopping_cart" className="text-gray-700 dark:text-gray-200 group-hover:text-primary transition-colors" />
                                <span className="absolute top-1 right-1 h-2.5 w-2.5 rounded-full bg-red-500 border-2 border-white dark:border-[#1a120b]" />
                            </Link>
                            <div className="h-6 w-px bg-gray-200 dark:bg-gray-700" />
                            <Link to="/wishlist" className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-primary transition-colors font-medium text-sm">
                                <Icon name="favorite" size={20} />
                                Wishlist
                            </Link>
                            <Link to="/orders" className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-primary transition-colors font-medium text-sm">
                                <Icon name="receipt_long" size={20} />
                                Transaksi
                            </Link>
                            <Link to="/profile" className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-primary transition-colors font-medium text-sm">
                                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                                    <Icon name="person" size={20} />
                                </div>
                                <span className="hidden lg:inline">Akun Saya</span>
                            </Link>
                        </div>

                        {/* Mobile Actions */}
                        <div className="flex md:hidden items-center gap-3">
                            <Link to="/cart" className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <Icon name="shopping_cart" className="text-gray-700 dark:text-gray-200" />
                                <span className="absolute top-1 right-1 h-2.5 w-2.5 rounded-full bg-red-500 border-2 border-white dark:border-[#1a120b]" />
                            </Link>
                            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <Icon name="notifications" className="text-gray-700 dark:text-gray-200" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto pb-24 hide-scrollbar w-full md:max-w-7xl md:mx-auto md:px-6 md:pb-12">
                {/* Hero Carousel */}
                <div className="mt-4 px-4 md:px-0">
                    <div className="flex overflow-x-auto snap-x snap-mandatory gap-3 hide-scrollbar pb-2 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:overflow-visible">
                        {heroBanners.map((banner, idx) => (
                            <div key={banner.id} className={`snap-center shrink-0 w-[85%] sm:w-80 md:w-full relative rounded-2xl overflow-hidden aspect-[2/1] bg-gray-200 group cursor-pointer ${idx === 0 ? 'md:col-span-2 md:aspect-[2/1] lg:col-span-2' : 'hidden md:block'}`}>
                                <div
                                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                                    style={{ backgroundImage: `url('${banner.image}')` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-center p-6">
                                    <span className="text-primary font-bold text-xs uppercase tracking-wider mb-1">{banner.label}</span>
                                    <h2 className="text-white text-2xl md:text-4xl font-bold leading-tight mb-4">
                                        {banner.title}<br />{banner.subtitle}
                                    </h2>
                                    <button className="w-max bg-primary text-white text-xs md:text-sm font-semibold py-2 px-4 md:px-6 rounded-full hover:bg-orange-600 transition-colors">
                                        {banner.buttonText}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Categories Grid */}
                <div className="mt-6 px-4 md:px-0 md:bg-white md:dark:bg-[#1a120b] md:p-6 md:rounded-2xl md:shadow-sm">
                    <h3 className="hidden md:block text-lg font-bold text-gray-900 dark:text-white mb-4">Kategori Pilihan</h3>
                    <div className="grid grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-y-4 gap-x-2 md:gap-6">
                        {categories.map((category) => (
                            <Link key={category.id} to={`/category/${category.id}`} className="flex flex-col items-center gap-2 group">
                                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-${category.color}/10 flex items-center justify-center text-${category.color} group-hover:bg-${category.color}/20 transition-colors`}>
                                    <Icon name={category.icon} className="md:scale-125" />
                                </div>
                                <span className="text-[10px] md:text-xs font-medium text-gray-600 dark:text-gray-300 text-center group-hover:text-primary transition-colors">{category.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Flash Sale Section */}
                <div className="mt-8 px-4 md:px-0">
                    <div className="flex items-center justify-between mb-4 bg-white dark:bg-[#1a120b] md:p-4 md:rounded-t-2xl md:mb-0">
                        <div className="flex items-center gap-3">
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">Flash Sale</h2>
                            <div className="flex items-center gap-1 bg-black text-white px-2 py-1 rounded text-xs md:text-sm font-bold font-mono">
                                <span>02</span>:<span>14</span>:<span>50</span>
                            </div>
                        </div>
                        <Link to="/flash-sale" className="text-sm font-semibold text-primary flex items-center hover:underline">
                            Lihat Semua <Icon name="chevron_right" size={16} />
                        </Link>
                    </div>
                    <div className="flex md:grid md:grid-cols-4 lg:grid-cols-6 overflow-x-auto gap-4 hide-scrollbar pb-4 md:bg-white md:dark:bg-[#1a120b] md:p-4 md:pt-0 md:rounded-b-2xl">
                        {flashSaleProducts.map((product) => (
                            <div key={product.id} className="shrink-0 w-36 md:w-auto flex flex-col gap-2 group cursor-pointer">
                                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 border border-gray-100 dark:border-gray-800">
                                    <div className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm z-10">
                                        -{product.discount}%
                                    </div>
                                    <div
                                        className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                                        style={{ backgroundImage: `url('${product.image}')` }}
                                    />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <div className="flex flex-col">
                                        <span className="text-primary font-bold text-sm md:text-base">Rp {product.price.toLocaleString('id-ID')}</span>
                                        <div className="flex items-center gap-2">
                                            <span className="text-gray-400 text-xs line-through">Rp {product.originalPrice?.toLocaleString('id-ID')}</span>
                                        </div>
                                    </div>
                                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-1">
                                        <div className="bg-primary h-1.5 rounded-full" style={{ width: `${product.soldPercent}%` }} />
                                    </div>
                                    <span className="text-[10px] text-gray-500 mt-0.5">
                                        {product.soldPercent >= 90 ? 'Hampir Habis' : `${product.soldPercent}% Terjual`}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="h-2 bg-background-light dark:bg-[#15100c] w-full my-4 md:hidden" />

                {/* Recommended Grid */}
                <div className="px-4 md:px-0 md:mt-8">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 sticky top-0 md:static bg-white dark:bg-[#1a120b] md:bg-transparent py-2 z-10">
                        Rekomendasi Untukmu
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {recommendedProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                image={product.image}
                                price={product.price}
                                originalPrice={product.originalPrice}
                                rating={product.rating}
                                reviews={product.reviews}
                            />
                        ))}
                    </div>
                    <div className="py-8 flex justify-center">
                        <button className="flex items-center gap-2 text-primary font-semibold text-sm hover:underline border border-primary/20 px-6 py-2.5 rounded-full hover:bg-primary/5 transition-colors">
                            Muat Produk Lainnya <Icon name="expand_more" size={18} />
                        </button>
                    </div>
                </div>
            </main>

            {/* Bottom Navigation */}
            <BottomNavBuyer />
        </MobileContainer>
    );
}
