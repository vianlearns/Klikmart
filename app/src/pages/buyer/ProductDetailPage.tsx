import { Link, useParams } from 'react-router-dom';
import { Icon } from '../../components/common/Icon';
import { MobileContainer } from '../../components/layout/MobileContainer';
import { ProductCard } from '../../components/product/ProductCard';
import { recommendedProducts } from '../../data/mockData';
import logoHorizontal from '../../assets/klikmart-horizontal.svg';

const productImages = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDuqPRJo2vZX275Ep93i2nMU6XEMgz3nJCSgwuAcsKr56v6bHkLFWdX9a6Tdl8SoVsaGAQRpWTc6AE83OoLLSv7KF203c0_6NRD3blN5BP1NcJJ4HnX8Z2Gx6lAQaaoqdtWynS7qQhnlILsUSH2ASF9u-bMrvEwXT40nrHgzhtKv-DZwIwlal2BeD3cCy3hPtfL7FX5w0PVsgrgE01pNpV4jTH4_buoc1brMD2tTjVLH8RBbXlin6BOopszhjWi8f-MfwbgIG5Jd7A-',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuA8N3jHHjYKg-AGE6Sm-ah1T1gTwLcBbRPFqH1c2YBi3fY9CKaimw1vZx9sLr3JTnTFjU24l23URSOgapeJFpJKbB8AhJo43iALLCwiFNP25qqEVgwqdrbv06Zzr2Tmaty8mmTUUAgMCumHOzUSTFKsMoRQ3knORhDGmKN6XBndjKdOsJP4tTECTcaZxn0W0X8ovdVzH6ZrcQQlH4jtqTshAf2AwZj-085kFfWKXyNsZ5gZhJ_6G6Db41KpUX2tloJlKoCSF16xPLpC',
];

// Fungsi untuk mengubah slug menjadi title
function slugToTitle(slug: string): string {
    return slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

export function ProductDetailPage() {
    const { title } = useParams<{ title: string }>();
    
    // Cari produk berdasarkan title (slug)
    const productTitle = title ? slugToTitle(title) : '';
    const product = recommendedProducts.find(p => p.name.toLowerCase() === productTitle.toLowerCase());
    
    // Jika produk tidak ditemukan, gunakan data default
    const currentProduct = product || {
        id: 'default',
        name: 'Sepatu Sneakers Pria Casual Import - High Quality Canvas - Putih/Hitam',
        image: productImages[0],
        price: 150000,
        originalPrice: 200000,
        rating: 4.8,
        reviews: '2.1rb'
    };

    // Filter produk serupa (kecuali produk saat ini)
    const similarProducts = recommendedProducts.filter(p => p.id !== currentProduct.id).slice(0, 4);

    return (
        <MobileContainer className="bg-background-light dark:bg-background-dark">
            {/* Desktop Header (Simplified) */}
            <header className="hidden md:block sticky top-0 z-50 bg-white dark:bg-[#1a120b] shadow-sm mb-6">
                <div className="w-full max-w-7xl mx-auto px-6 py-4 flex items-center gap-8">
                    <Link to="/" className="flex items-center">
                        <img src={logoHorizontal} alt="Klikmart" className="h-8 w-auto" />
                    </Link>
                    <div className="flex-1 relative max-w-2xl">
                        <input
                            className="block w-full pl-4 pr-10 py-2 border border-gray-200 rounded-lg bg-gray-50 dark:bg-[#2c241d] dark:border-gray-700 text-sm focus:ring-1 focus:ring-primary focus:border-primary"
                            placeholder="Cari produk lain..."
                            type="text"
                        />
                        <button className="absolute right-0 top-0 h-full px-3 text-gray-500">
                            <Icon name="search" size={20} />
                        </button>
                    </div>
                    <div className="flex items-center gap-6">
                        <Link to="/cart" className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <Icon name="shopping_cart" size={24} className="text-gray-700 dark:text-gray-200" />
                            <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center border-2 border-white">3</span>
                        </Link>
                        <div className="w-px h-6 bg-gray-200" />
                        <Link to="/profile" className="flex items-center gap-2 font-medium text-sm text-gray-700 dark:text-gray-200">
                            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                                <Icon name="person" size={20} />
                            </div>
                            Akun Saya
                        </Link>
                    </div>
                </div>
            </header>

            {/* Mobile Top Navigation (Floating) */}
            <div className="md:hidden absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-4 pt-4 pb-2 bg-gradient-to-b from-black/40 to-transparent pointer-events-none h-24">
                <Link to="/" className="pointer-events-auto flex items-center justify-center size-10 rounded-full bg-black/40 backdrop-blur-sm text-white hover:bg-black/60 transition-colors">
                    <Icon name="arrow_back_ios_new" />
                </Link>
                <div className="pointer-events-auto flex items-center gap-3">
                    <button className="flex items-center justify-center size-10 rounded-full bg-black/40 backdrop-blur-sm text-white hover:bg-black/60 transition-colors">
                        <Icon name="share" />
                    </button>
                    <div className="relative">
                        <Link to="/cart" className="flex items-center justify-center size-10 rounded-full bg-black/40 backdrop-blur-sm text-white hover:bg-black/60 transition-colors">
                            <Icon name="shopping_cart" />
                        </Link>
                        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white border-2 border-transparent">3</span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto no-scrollbar scroll-smooth pb-[80px] md:pb-12 md:w-full md:max-w-7xl md:mx-auto md:px-6">
                
                <div className="md:grid md:grid-cols-12 md:gap-8 md:items-start">
                    {/* Left Column: Images */}
                    <div className="md:col-span-5 lg:col-span-5 md:sticky md:top-24">
                        {/* Hero Image Carousel */}
                        <div className="relative w-full aspect-square bg-gray-200 dark:bg-gray-800 md:rounded-2xl md:overflow-hidden md:border md:border-gray-100 md:dark:border-gray-800">
                            <div className="flex w-full h-full overflow-x-auto snap-x snap-mandatory no-scrollbar">
                                {productImages.map((img, idx) => (
                                    <div
                                        key={idx}
                                        className="w-full h-full flex-shrink-0 snap-center bg-cover bg-center"
                                        style={{ backgroundImage: `url('${img}')` }}
                                    />
                                ))}
                            </div>
                            <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white tracking-wider">
                                1/5
                            </div>
                        </div>
                        
                        {/* Thumbnail Images (Desktop Only) */}
                        <div className="hidden md:grid grid-cols-5 gap-2 mt-4">
                            {productImages.map((img, idx) => (
                                <div key={idx} className={`aspect-square rounded-lg bg-cover bg-center cursor-pointer border-2 ${idx === 0 ? 'border-primary' : 'border-transparent hover:border-gray-300'}`} style={{ backgroundImage: `url('${img}')` }} />
                            ))}
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="aspect-square rounded-lg bg-gray-100 flex items-center justify-center text-gray-400 text-xs">+{i+1}</div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Info & Actions */}
                    <div className="md:col-span-7 lg:col-span-7 flex flex-col gap-2 md:gap-4">
                        
                        {/* Product Info Card */}
                        <div className="bg-white dark:bg-[#221810] px-4 pt-4 pb-3 md:rounded-2xl md:p-6 md:border md:border-gray-100 md:dark:border-gray-800 md:shadow-sm">
                            <h2 className="text-[#181411] dark:text-gray-100 text-lg md:text-2xl font-bold leading-snug mb-3 line-clamp-2">
                                {currentProduct.name}
                            </h2>
                            
                            <div className="flex items-center gap-4 text-sm mb-4">
                                <div className="flex items-center gap-1 text-[#181411] dark:text-white font-semibold">
                                    <span className="text-yellow-400">★</span>
                                    4.8 <span className="text-gray-400 font-normal border-b border-gray-300 mx-1">Rating</span>
                                </div>
                                <div className="text-[#181411] dark:text-white">
                                    2.1rb <span className="text-gray-400 font-normal border-b border-gray-300 mx-1">Penilaian</span>
                                </div>
                                <div className="text-[#181411] dark:text-white">
                                    5rb+ <span className="text-gray-400 font-normal mx-1">Terjual</span>
                                </div>
                            </div>

                            <div className="flex items-end gap-3 mb-2">
                                <h1 className="text-primary text-3xl font-bold tracking-tight">Rp {currentProduct.price.toLocaleString('id-ID')}</h1>
                                {currentProduct && 'discount' in currentProduct && (currentProduct as any).discount ? (
                                    <span className="px-2 py-1 rounded-lg text-xs font-bold bg-red-100 text-red-600 mb-1">{(currentProduct as any).discount}% OFF</span>
                                ) : null}
                            </div>
                            {'originalPrice' in currentProduct && currentProduct.originalPrice && (
                                <div className="flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500 mb-4">
                                    <span className="line-through">Rp {currentProduct.originalPrice.toLocaleString('id-ID')}</span>
                                    <span className="text-xs text-primary font-medium">Harga terbaik hari ini</span>
                                </div>
                            )}

                            {/* Desktop Actions */}
                            <div className="hidden md:flex items-center gap-4 mt-6 pt-6 border-t border-gray-100">
                                <div className="flex flex-col gap-1">
                                    <span className="text-xs font-medium text-gray-500">Atur Jumlah:</span>
                                    <div className="flex items-center border border-gray-200 rounded-lg">
                                        <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-50">-</button>
                                        <input type="text" value="1" className="w-12 h-8 text-center border-x border-gray-200 text-sm" readOnly />
                                        <button className="w-8 h-8 flex items-center justify-center text-primary hover:bg-gray-50">+</button>
                                    </div>
                                </div>
                                <button className="flex-1 h-12 rounded-xl bg-primary/10 text-primary font-bold hover:bg-primary/20 transition-colors flex items-center justify-center gap-2">
                                    <Icon name="add_shopping_cart" size={20} />
                                    Masukkan Keranjang
                                </button>
                                <button className="flex-1 h-12 rounded-xl bg-primary text-white font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-primary/30">
                                    Beli Sekarang
                                </button>
                            </div>
                        </div>

                        {/* Spacer Mobile Only */}
                        <div className="h-2 w-full bg-gray-100 dark:bg-[#1a120b] md:hidden" />

                        {/* Variants & Shipping Group for Desktop */}
                        <div className="flex flex-col gap-2 md:gap-4">
                            {/* Shipping Info */}
                            <div className="bg-white dark:bg-[#221810] px-4 py-3 flex items-center justify-between active:bg-gray-50 dark:active:bg-white/5 cursor-pointer md:rounded-xl md:border md:border-gray-100 md:cursor-default">
                                <div className="flex items-center gap-3 overflow-hidden">
                                    <Icon name="local_shipping" className="text-green-600 dark:text-green-500" />
                                    <div className="flex flex-col">
                                        <span className="text-sm font-bold text-[#181411] dark:text-white">Gratis Ongkir</span>
                                        <span className="text-xs text-gray-500 dark:text-gray-400 truncate">Ongkir Rp0 dengan minimal belanja Rp30rb</span>
                                    </div>
                                </div>
                                <Icon name="chevron_right" className="text-gray-400 text-xl md:hidden" />
                            </div>

                            <div className="h-px w-full bg-gray-100 dark:bg-[#2c241b] md:hidden" />

                            {/* Variations */}
                            <div className="bg-white dark:bg-[#221810] px-4 py-3 flex items-center justify-between active:bg-gray-50 dark:active:bg-white/5 cursor-pointer md:rounded-xl md:border md:border-gray-100">
                                <div className="flex items-center gap-3">
                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400 w-16">Variasi</span>
                                    <span className="text-sm text-[#181411] dark:text-white font-medium">Putih, Ukuran 42</span>
                                </div>
                                <Icon name="chevron_right" className="text-gray-400 text-xl" />
                            </div>
                        </div>

                        <div className="h-2 w-full bg-gray-100 dark:bg-[#1a120b] md:hidden" />

                        {/* Seller Info */}
                        <div className="bg-white dark:bg-[#221810] px-4 py-4 md:rounded-xl md:border md:border-gray-100">
                            <div className="flex items-center gap-3">
                                <div className="size-12 rounded-full bg-gray-200 bg-cover bg-center border border-gray-100 dark:border-gray-700" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAXv9G0h5fKAAQ5cOuikuUtGkEryqlixvzsm6g6Dkb4LuOMODWlWeBl8RtyVuxcml4IsK6oH_6RqIvmKoPIaqhYN8EYuQw7GUB-MoJP7deTEYX9jdxvv_MSr2TGm-r3tKt4s2gUP6qfHjl25aYH7-K3qS4LsD9Z1emr4TeW-xAs3Q-JA9AFXG5wuYXahlBhUrMq_2NNTCgXQWCC5xkdpsII5A-XujiFcrNqV18wmi5wFyL2mzs6xen1aSDKHauVEV4mAFkndVDIhXqF')` }} />
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-1">
                                        <h3 className="font-bold text-[#181411] dark:text-white truncate">Sneakers Official Store</h3>
                                        <Icon name="verified" className="text-primary" size={14} filled />
                                    </div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                                        <span className="text-green-600 dark:text-green-500 font-medium">Online</span>
                                        <span className="w-1 h-1 rounded-full bg-gray-300" />
                                        Jakarta Pusat
                                    </p>
                                </div>
                                <button className="border border-primary text-primary px-3 py-1.5 rounded text-xs font-bold hover:bg-primary/5 transition-colors">
                                    Kunjungi
                                </button>
                            </div>
                        </div>

                        <div className="h-2 w-full bg-gray-100 dark:bg-[#1a120b] md:hidden" />

                        {/* Description */}
                        <div className="bg-white dark:bg-[#221810] px-4 py-4 md:rounded-xl md:border md:border-gray-100">
                            <h3 className="text-base font-bold text-[#181411] dark:text-white mb-4">Rincian Produk</h3>
                            <div className="grid grid-cols-[100px_1fr] gap-y-3 text-sm mb-6">
                                <span className="text-gray-500 dark:text-gray-400">Bahan</span>
                                <span className="text-[#181411] dark:text-white font-medium">Canvas Premium</span>
                                <span className="text-gray-500 dark:text-gray-400">Negara Asal</span>
                                <span className="text-[#181411] dark:text-white font-medium">Indonesia</span>
                                <span className="text-gray-500 dark:text-gray-400">Stok</span>
                                <span className="text-[#181411] dark:text-white font-medium">142</span>
                            </div>
                            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                Sepatu sneakers pria dengan desain casual yang cocok untuk kegiatan sehari-hari. Dibuat dengan bahan canvas premium yang sirkulasi udaranya baik sehingga nyaman dipakai seharian.
                                <br /><br />
                                Fitur Utama:<br />
                                - Sol karet anti-slip<br />
                                - Insole empuk memory foam<br />
                                - Jahitan rapi dan kuat<br />
                                - Tersedia ukuran 39-44
                            </p>
                        </div>
                    </div>
                </div>

                <div className="h-2 w-full bg-gray-100 dark:bg-[#1a120b] md:hidden" />

                {/* Similar Products */}
                <div className="p-4 md:px-0 md:mt-8">
                    <h3 className="text-base font-bold text-[#181411] dark:text-white mb-3 md:text-xl md:mb-6">Produk Serupa</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
                        {similarProducts.map((product) => (
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

            {/* Sticky Action Bar (Mobile Only) */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-[#221810] border-t border-gray-100 dark:border-gray-800 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] w-full">
                <div className="flex items-center px-4 py-3 gap-3 safe-area-bottom">
                    <button className="flex flex-col items-center justify-center gap-0.5 text-gray-500 dark:text-gray-400 hover:text-primary transition-colors min-w-[48px]">
                        <Icon name="chat_bubble_outline" size={24} />
                        <span className="text-[10px] font-medium">Chat</span>
                    </button>
                    <div className="w-px h-8 bg-gray-200 dark:bg-gray-700" />
                    <button className="flex-1 flex items-center justify-center gap-2 h-10 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                        <Icon name="add_shopping_cart" size={20} />
                        <span className="text-sm font-bold whitespace-nowrap">+ Keranjang</span>
                    </button>
                    <button className="flex-1 flex items-center justify-center h-10 rounded-lg bg-primary text-white hover:bg-primary/90 shadow-md shadow-primary/30 transition-colors">
                        <span className="text-sm font-bold">Beli Sekarang</span>
                    </button>
                </div>
                <div className="h-[env(safe-area-inset-bottom)] w-full bg-white dark:bg-[#221810]" />
            </div>
        </MobileContainer>
    );
}
