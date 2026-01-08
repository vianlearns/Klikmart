import { Link } from 'react-router-dom';
import { Icon } from '../../components/common/Icon';
import { MobileContainer } from '../../components/layout/MobileContainer';
import { BottomNavBuyer } from '../../components/layout/BottomNavBuyer';
import { ProductCard } from '../../components/product/ProductCard';
import { categories, flashSaleProducts, recommendedProducts, heroBanners } from '../../data/mockData';

export function HomePage() {
    return (
        <MobileContainer>
            {/* Header & Search */}
            <header className="sticky top-0 z-50 bg-white dark:bg-[#1a120b] px-4 pt-12 pb-3 shadow-sm">
                <div className="flex items-center gap-3">
                    <div className="flex-1 relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Icon name="search" className="text-primary" size={20} />
                        </div>
                        <input
                            className="block w-full pl-10 pr-3 py-2.5 border-none rounded-xl bg-background-light dark:bg-[#2c241d] text-sm placeholder-gray-400 dark:text-white focus:ring-1 focus:ring-primary"
                            placeholder="Search for products, brands..."
                            type="text"
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <Icon name="mic" className="text-gray-400" size={20} />
                        </div>
                    </div>
                    <Link to="/cart" className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                        <Icon name="shopping_cart" className="text-gray-700 dark:text-gray-200" />
                        <span className="absolute top-1 right-1 h-2.5 w-2.5 rounded-full bg-red-500 border-2 border-white dark:border-[#1a120b]" />
                    </Link>
                    <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                        <Icon name="notifications" className="text-gray-700 dark:text-gray-200" />
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto pb-24 hide-scrollbar">
                {/* Hero Carousel */}
                <div className="mt-4 px-4">
                    <div className="flex overflow-x-auto snap-x snap-mandatory gap-3 hide-scrollbar pb-2">
                        {heroBanners.map((banner) => (
                            <div key={banner.id} className="snap-center shrink-0 w-[85%] sm:w-80 relative rounded-2xl overflow-hidden aspect-[2/1] bg-gray-200">
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: `url('${banner.image}')` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-center p-6">
                                    <span className="text-primary font-bold text-xs uppercase tracking-wider mb-1">{banner.label}</span>
                                    <h2 className="text-white text-2xl font-bold leading-tight mb-2">
                                        {banner.title}<br />{banner.subtitle}
                                    </h2>
                                    <button className="w-max bg-primary text-white text-xs font-semibold py-2 px-4 rounded-full">
                                        {banner.buttonText}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Categories Grid */}
                <div className="mt-6 px-4">
                    <div className="grid grid-cols-5 gap-y-4 gap-x-2">
                        {categories.map((category) => (
                            <Link key={category.id} to={`/category/${category.id}`} className="flex flex-col items-center gap-2">
                                <div className={`w-12 h-12 rounded-2xl bg-${category.color}/10 flex items-center justify-center text-${category.color}`}>
                                    <Icon name={category.icon} />
                                </div>
                                <span className="text-[10px] font-medium text-gray-600 dark:text-gray-300">{category.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Flash Sale Section */}
                <div className="mt-8 px-4">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Flash Sale</h2>
                            <div className="flex items-center gap-1 bg-black text-white px-2 py-1 rounded text-xs font-bold font-mono">
                                <span>02</span>:<span>14</span>:<span>50</span>
                            </div>
                        </div>
                        <Link to="/flash-sale" className="text-sm font-semibold text-primary flex items-center">
                            See All <Icon name="chevron_right" size={16} />
                        </Link>
                    </div>
                    <div className="flex overflow-x-auto gap-4 hide-scrollbar pb-4">
                        {flashSaleProducts.map((product) => (
                            <div key={product.id} className="shrink-0 w-36 flex flex-col gap-2">
                                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 border border-gray-100 dark:border-gray-800">
                                    <div className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm">
                                        -{product.discount}%
                                    </div>
                                    <div
                                        className="w-full h-full bg-cover bg-center"
                                        style={{ backgroundImage: `url('${product.image}')` }}
                                    />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-primary font-bold text-sm">${product.price}</span>
                                        <span className="text-gray-400 text-xs line-through">${product.originalPrice}</span>
                                    </div>
                                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-1">
                                        <div className="bg-primary h-1.5 rounded-full" style={{ width: `${product.soldPercent}%` }} />
                                    </div>
                                    <span className="text-[10px] text-gray-500 mt-0.5">
                                        {product.soldPercent >= 90 ? 'Almost Gone' : `${product.soldPercent}% Sold`}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="h-2 bg-background-light dark:bg-[#15100c] w-full my-4" />

                {/* Recommended Grid */}
                <div className="px-4">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 sticky top-0 bg-white dark:bg-[#1a120b] py-2 z-10">
                        Recommended For You
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
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
                        <button className="flex items-center gap-2 text-primary font-semibold text-sm hover:underline">
                            Load More Products <Icon name="expand_more" size={18} />
                        </button>
                    </div>
                </div>
            </main>

            {/* Bottom Navigation */}
            <BottomNavBuyer />
        </MobileContainer>
    );
}
