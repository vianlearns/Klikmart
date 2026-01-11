import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../../components/common/Icon';
import { MobileContainer } from '../../components/layout/MobileContainer';
import { ProductCard } from '../../components/product/ProductCard';
import { BottomNavBuyer } from '../../components/layout/BottomNavBuyer';
import { recommendedProducts } from '../../data/dataProducts';

export function StoreProfilePage() {
    const [activeTab, setActiveTab] = useState('produk');

    // Mock data untuk toko
    const storeData = {
        name: 'Gadget Murah Official',
        isVerified: true,
        location: 'Jakarta Pusat',
        isOnline: true,
        lastSeen: '5 menit lalu',
        banner: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCc5ti2VhWd92uNWdwsbNftaWvP3fv3jIwWpjAtmXxwKLMLAgcVbPRvfwB8kSHuIVIogvSARLoitpzdlH7kJapjQLj8-zpQDg9_E8CdNBy8XvLFn-m9kk5H4H6eYHhRmxnwpRrKLIIRZvC5wjtcbObmoKenKw2fGz80KAOV8c_q-Qg0a_X0qj2pcg0x5FfINyLLhBSGAbkX10yctAtR4vtPGkzHj3aVN1Inq7wEUo9XwgT-hinXsrKTAjdI5kbXUZzb8encSR9iF_EW',
        logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMkrNFc_kTfjJIJOwtxFexc2o5Scen3MW0AFdotYWGGO7W7HEtICFBGrjieTR3vHjvnOcP_53w6cdSMDVJ1NeHaAiXDNysageHJmMOd21aoarPJf3TLqvuNYHBJ38ZHBYP7acCU2WiPiB_X8qa9z15AAmkepK8WaNAOd9LKmALTdDA1IrSXWWo5j80EyaFkk91s5CDmlxstlMXH9UC-6PKAkp4CUiqmkqZXWE3LaP6l-veT_wQUH7JHTjxgzay60qUhO1dryBjneLt',
        followers: '12.5k',
        rating: 4.9,
        chatResponse: '98%',
        description: 'Toko gadget terpercaya sejak 2018. Menjual berbagai macam smartphone, aksesoris, dan laptop original bergaransi resmi. Pengiriman cepat dari Jakarta.'
    };

    const vouchers = [
        {
            id: 'v1',
            title: 'Diskon 10%',
            minPurchase: 'Rp50rb',
            expiry: 'Berakhir besok'
        },
        {
            id: 'v2',
            title: 'Potongan 5rb',
            minPurchase: 'Rp30rb',
            expiry: 'Berakhir 3 hari lagi'
        }
    ];

    // Gunakan produk dari mockData sebagai produk toko
    const storeProducts = recommendedProducts.slice(0, 8);

    return (
        <MobileContainer className="bg-background-light dark:bg-background-dark">
            {/* Top App Bar with Search */}
            <div className="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-stone-200 dark:border-stone-800">
                <div className="flex items-center p-4 gap-3 max-w-7xl mx-auto">
                    <Link to="/" className="flex items-center justify-center text-slate-900 dark:text-white hover:text-primary transition-colors">
                        <Icon name="arrow_back" />
                    </Link>
                    <div className="flex-1 relative max-w-2xl">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400">
                            <Icon name="search" size={20} />
                        </span>
                        <input
                            className="w-full h-10 pl-10 pr-4 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder-stone-400 dark:text-white"
                            placeholder={`Cari di ${storeData.name}...`}
                            type="text"
                        />
                    </div>
                    <div className="flex items-center gap-3">
                        <Link to="/cart" className="flex items-center justify-center text-slate-900 dark:text-white hover:text-primary relative">
                            <Icon name="shopping_cart" />
                            <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">2</span>
                        </Link>
                        <button className="flex items-center justify-center text-slate-900 dark:text-white hover:text-primary">
                            <Icon name="more_vert" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content Container */}
            <div className="max-w-7xl mx-auto w-full">
                {/* Store Header Section */}
                <div className="relative md:mt-6">
                    {/* Banner Background */}
                    <div
                        className="h-32 md:h-48 w-full bg-cover bg-center md:rounded-t-2xl"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url('${storeData.banner}')`
                        }}
                    />
                    <div className="px-4 md:px-6 -mt-10 md:-mt-12 relative z-10">
                        <div className="bg-white dark:bg-stone-900 rounded-xl shadow-sm p-4 md:p-6 border border-stone-100 dark:border-stone-800">
                            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                                <div className="flex gap-4 items-start md:flex-1">
                                    {/* Avatar */}
                                    <div className="relative">
                                        <div
                                            className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-white dark:border-stone-900 bg-cover bg-center shadow-sm"
                                            style={{ backgroundImage: `url('${storeData.logo}')` }}
                                        />
                                        {storeData.isOnline && (
                                            <div className="absolute bottom-0 right-0 w-5 h-5 md:w-6 md:h-6 bg-green-500 border-2 border-white dark:border-stone-900 rounded-full" />
                                        )}
                                    </div>
                                    {/* Info */}
                                    <div className="flex-1 pt-1">
                                        <h1 className="text-xl md:text-2xl font-bold leading-tight mb-1 text-slate-900 dark:text-white">
                                            {storeData.name}
                                        </h1>
                                        <div className="flex items-center gap-1 text-sm text-stone-500 dark:text-stone-400 mb-2">
                                            {storeData.isVerified && (
                                                <>
                                                    <Icon name="check_circle" size={16} className="text-green-500" />
                                                    <span>Official Store</span>
                                                    <span className="mx-1">•</span>
                                                </>
                                            )}
                                            <span>{storeData.location}</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-xs text-stone-400 dark:text-stone-500">
                                            <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                                            Online {storeData.lastSeen}
                                        </div>
                                    </div>
                                </div>
                                {/* Action Buttons */}
                                <div className="flex gap-3 w-full md:w-auto md:items-center">
                                    <button className="flex-1 md:flex-initial md:w-32 h-9 md:h-10 flex items-center justify-center gap-2 bg-primary hover:bg-orange-600 text-white text-sm font-bold rounded-lg transition-colors shadow-sm shadow-orange-200 dark:shadow-none">
                                        <Icon name="add" size={18} />
                                        Follow
                                    </button>
                                    <Link to="/chat" className="flex-1 md:flex-initial md:w-32 h-9 md:h-10 flex items-center justify-center gap-2 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-slate-900 dark:text-white text-sm font-bold rounded-lg transition-colors border border-stone-200 dark:border-stone-700">
                                        <Icon name="chat" size={18} className="text-stone-600 dark:text-stone-300" />
                                        Chat
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Profile Stats */}
                <div className="px-4 md:px-6 py-4">
                    <div className="flex justify-between divide-x divide-stone-200 dark:divide-stone-700 bg-white dark:bg-stone-900 rounded-lg p-3 md:p-4 border border-stone-100 dark:border-stone-800 shadow-sm">
                        <div className="flex flex-col items-center px-4 flex-1">
                            <span className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">{storeData.followers}</span>
                            <span className="text-xs md:text-sm text-stone-500 dark:text-stone-400">Pengikut</span>
                        </div>
                        <div className="flex flex-col items-center px-4 flex-1">
                            <span className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">{storeData.rating}</span>
                            <div className="flex items-center gap-1">
                                <Icon name="star" size={14} className="text-yellow-400" filled />
                                <span className="text-xs md:text-sm text-stone-500 dark:text-stone-400">Rating</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center px-4 flex-1">
                            <span className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">{storeData.chatResponse}</span>
                            <span className="text-xs md:text-sm text-stone-500 dark:text-stone-400">Chat Dibalas</span>
                        </div>
                    </div>
                </div>

                {/* Expandable Description */}
                <div className="px-4 md:px-6 pb-2">
                    <div className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                        <p>{storeData.description}</p>
                        <button className="flex items-center gap-1 text-primary text-xs font-bold mt-1 hover:text-orange-600 transition-colors">
                            Selengkapnya <Icon name="expand_more" size={14} />
                        </button>
                    </div>
                </div>

                {/* Voucher Carousel */}
                <div className="pl-4 md:px-6 py-4 overflow-hidden">
                    <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-3">Voucher Toko</h3>
                    <div className="flex overflow-x-auto gap-3 pb-2 pr-4 md:pr-0 no-scrollbar snap-x">
                        {vouchers.map((voucher) => (
                            <div key={voucher.id} className="snap-start flex-none min-w-[240px] md:min-w-[280px] bg-white dark:bg-stone-800 border border-primary/30 rounded-lg flex overflow-hidden shadow-sm relative hover:shadow-md transition-shadow">
                                <div className="w-2 bg-primary h-full absolute left-0 top-0" />
                                <div className="flex flex-col justify-center p-3 pl-5 flex-1 border-r border-dashed border-stone-200 dark:border-stone-700">
                                    <p className="text-primary font-bold text-lg">{voucher.title}</p>
                                    <p className="text-xs text-stone-500 dark:text-stone-400">Min. Blj {voucher.minPurchase}</p>
                                    <p className="text-[10px] text-stone-400 mt-1">{voucher.expiry}</p>
                                </div>
                                <div className="flex flex-col justify-center items-center p-2 bg-primary/5 w-20">
                                    <button className="px-3 py-1.5 bg-primary text-white text-xs font-bold rounded shadow-sm hover:bg-orange-600 transition-colors">
                                        Klaim
                                    </button>
                                </div>
                                {/* Cutout circles for coupon effect */}
                                <div className="absolute -top-1.5 right-[76px] w-3 h-3 bg-background-light dark:bg-background-dark rounded-full" />
                                <div className="absolute -bottom-1.5 right-[76px] w-3 h-3 bg-background-light dark:bg-background-dark rounded-full" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sticky Tab Bar */}
                <div className="sticky top-[73px] z-40 bg-background-light dark:bg-background-dark pt-2 shadow-sm">
                    <div className="flex border-b border-stone-200 dark:border-stone-800 px-4 md:px-6">
                        <button
                            onClick={() => setActiveTab('produk')}
                            className={`flex-1 md:flex-initial md:px-8 py-3 text-sm font-bold ${activeTab === 'produk' ? 'text-primary border-b-2 border-primary' : 'text-stone-500 dark:text-stone-400 hover:text-slate-900 dark:hover:text-white'} transition-colors`}
                        >
                            Produk
                        </button>
                        <button
                            onClick={() => setActiveTab('kategori')}
                            className={`flex-1 md:flex-initial md:px-8 py-3 text-sm font-bold ${activeTab === 'kategori' ? 'text-primary border-b-2 border-primary' : 'text-stone-500 dark:text-stone-400 hover:text-slate-900 dark:hover:text-white'} transition-colors`}
                        >
                            Kategori
                        </button>
                        <button
                            onClick={() => setActiveTab('terlaris')}
                            className={`flex-1 md:flex-initial md:px-8 py-3 text-sm font-bold ${activeTab === 'terlaris' ? 'text-primary border-b-2 border-primary' : 'text-stone-500 dark:text-stone-400 hover:text-slate-900 dark:hover:text-white'} transition-colors`}
                        >
                            Terlaris
                        </button>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="p-4 md:p-6 pb-20 md:pb-8">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                        {storeProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                image={product.image}
                                price={product.price}
                                originalPrice={product.originalPrice}
                                rating={product.rating || 4.5}
                                reviews={product.reviews || '100'}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Navigation Bar - uses BottomNavBuyer component */}
            <BottomNavBuyer />
        </MobileContainer>
    );
}
