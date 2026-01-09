import { useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Icon } from '../../components/common/Icon';
import { MobileContainer } from '../../components/layout/MobileContainer';
import { ProductCard } from '../../components/product/ProductCard';
import { recommendedProducts } from '../../data/mockData';
import logoHorizontal from '../../assets/klikmart-horizontal.svg';

const productImages = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDuqPRJo2vZX275Ep93i2nMU6XEMgz3nJCSgwuAcsKr56v6bHkLFWdX9a6Tdl8SoVsaGAQRpWTc6AE83OoLLSv7KF203c0_6NRD3blN5BP1NcJJ4HnX8Z2Gx6lAQaaoqdtWynS7qQhnlILsUSH2ASF9u-bMrvEwXT40nrHgzhtKv-DZwIwlal2BeD3cCy3hPtfL7FX5w0PVsgrgE01pNpV4jTH4_buoc1brMD2tTjVLH8RBbXlin6BOopszhjWi8f-MfwbgIG5Jd7A-',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuA8N3jHHjYKg-AGE6Sm-ah1T1gTwLcBbRPFqH1c2YBi3fY9CKaimw1vZx9sLr3JTnTFjU24l23URSOgapeJFpJKbB8AhJo43iALLCwiFNP25qqEVgwqdrbv06Zzr2Tmaty8mmTUUAgMCumHOzUSTFKsMoRQ3knORhDGmKN6XBndjKdOsJP4tTECTcaZxn0W0X8ovdVzH6ZrcQQlH4jtqTshAf2AwZj-085kFfWKXyNsZ5gZhJ_6G6Db41KpUX2tloJlKoCSF16xPLpC',
];

const variantColors = ['Putih', 'Hitam', 'Navy'];
const variantSizes = ['39', '40', '41', '42', '43', '44'];

// Fungsi untuk mengubah slug menjadi title
function slugToTitle(slug: string): string {
    return slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

export function ProductDetailPage() {
    const { title } = useParams<{ title: string }>();
    const navigate = useNavigate();
    
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

    const carouselRef = useRef<HTMLDivElement | null>(null);
    const storeSectionRef = useRef<HTMLDivElement | null>(null);
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [isFavorite, setIsFavorite] = useState(false);
    const [selectedColor, setSelectedColor] = useState('Putih');
    const [selectedSize, setSelectedSize] = useState('42');
    const [quantity, setQuantity] = useState(1);

    const ratingValue = Number(currentProduct.rating ?? 0);
    const filledStars = Math.max(0, Math.min(5, Math.round(ratingValue)));

    const handleCarouselScroll = () => {
        const el = carouselRef.current;
        if (!el) return;
        const nextIdx = Math.round(el.scrollLeft / Math.max(1, el.clientWidth));
        if (nextIdx !== activeImageIndex) setActiveImageIndex(nextIdx);
    };

    const goToImage = (idx: number) => {
        setActiveImageIndex(idx);
        const el = carouselRef.current;
        if (!el) return;
        el.scrollTo({ left: idx * el.clientWidth, behavior: 'smooth' });
    };

    const decQuantity = () => setQuantity(q => Math.max(1, q - 1));
    const incQuantity = () => setQuantity(q => q + 1);

    const copyText = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch {
            return false;
        }
    };

    const handleShare = async () => {
        const url = window.location.href;
        const shareData = { title: currentProduct.name, text: currentProduct.name, url };

        if ('share' in navigator && typeof navigator.share === 'function') {
            try {
                await navigator.share(shareData);
                return;
            } catch {
            }
        }

        const ok = await copyText(url);
        window.alert(ok ? 'Link produk disalin.' : 'Gagal menyalin link produk.');
    };

    const handleReport = () => {
        window.alert('Terima kasih, laporan kamu sudah terkirim.');
    };

    const handleNotifications = () => {
        window.alert('Fitur notifikasi belum tersedia.');
    };

    const handleViewAllReviews = () => {
        window.alert('Fitur lihat semua ulasan belum tersedia.');
    };

    const handleChatToStore = async () => {
        storeSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        const chatText = `Halo, saya ingin tanya produk ${currentProduct.name} (Variasi: ${selectedColor}, ${selectedSize}).`;
        const ok = await copyText(chatText);
        window.alert(ok ? 'Teks chat disalin. Tempel di chat toko.' : chatText);
    };

    const handleVisitStore = () => {
        navigate(`/?toko=${encodeURIComponent('Sneakers Official Store')}`);
    };

    return (
        <MobileContainer className="bg-background-light dark:bg-background-dark">
            <header className="sticky top-0 z-50 bg-white dark:bg-[#1a120b] shadow-sm">
                <div className="px-4 pt-12 pb-3 md:py-4 w-full md:max-w-7xl md:mx-auto md:px-6">
                    <div className="flex items-center gap-4 md:gap-8">
                        <Link to="/" className="hidden md:flex items-center">
                            <img src={logoHorizontal} alt="Klikmart" className="h-14 w-auto" />
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

                        <div className="flex md:hidden items-center gap-3">
                            <Link to="/cart" className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <Icon name="shopping_cart" className="text-gray-700 dark:text-gray-200" />
                                <span className="absolute top-1 right-1 h-2.5 w-2.5 rounded-full bg-red-500 border-2 border-white dark:border-[#1a120b]" />
                            </Link>
                            <button type="button" onClick={handleNotifications} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <Icon name="notifications" className="text-gray-700 dark:text-gray-200" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto no-scrollbar scroll-smooth pb-[80px] md:pb-12 md:w-full md:max-w-7xl md:mx-auto md:px-6">
                <div className="hidden md:flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-4 mt-4">
                    <Link to="/" className="hover:text-primary transition-colors">Beranda</Link>
                    <Icon name="chevron_right" size={16} className="text-gray-400" />
                    <Link to="/" className="hover:text-primary transition-colors">Fashion</Link>
                    <Icon name="chevron_right" size={16} className="text-gray-400" />
                    <span className="text-gray-700 dark:text-gray-200 line-clamp-1">{currentProduct.name}</span>
                </div>

                <div className="md:grid md:grid-cols-12 md:gap-8 md:items-start">
                    {/* Left Column: Images */}
                    <div className="md:col-span-5 lg:col-span-5 md:sticky md:top-24">
                        {/* Hero Image Carousel */}
                        <div className="relative w-full aspect-square bg-gray-200 dark:bg-gray-800 md:rounded-2xl md:overflow-hidden md:border md:border-gray-100 md:dark:border-gray-800">
                            <div ref={carouselRef} onScroll={handleCarouselScroll} className="flex w-full h-full overflow-x-auto snap-x snap-mandatory no-scrollbar">
                                {productImages.map((img, idx) => (
                                    <div
                                        key={idx}
                                        className="w-full h-full flex-shrink-0 snap-center bg-cover bg-center"
                                        style={{ backgroundImage: `url('${img}')` }}
                                    />
                                ))}
                            </div>
                            <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white tracking-wider">
                                {Math.min(productImages.length, activeImageIndex + 1)}/{productImages.length}
                            </div>
                        </div>
                        
                        {/* Thumbnail Images (Desktop Only) */}
                        <div className="hidden md:grid grid-cols-5 gap-2 mt-4">
                            {productImages.map((img, idx) => (
                                <button
                                    key={idx}
                                    type="button"
                                    onClick={() => goToImage(idx)}
                                    className={`aspect-square rounded-lg bg-cover bg-center cursor-pointer border-2 transition-colors ${idx === activeImageIndex ? 'border-primary' : 'border-transparent hover:border-gray-300 dark:hover:border-gray-700'}`}
                                    style={{ backgroundImage: `url('${img}')` }}
                                />
                            ))}
                        </div>
                        <div className="hidden md:flex items-center justify-between mt-3">
                            <div className="flex items-center gap-6">
                                <button type="button" onClick={handleShare} className="inline-flex items-center gap-2 py-4 text-sm text-gray-700 dark:text-gray-200 hover:text-primary transition-colors">
                                    <Icon name="share" size={18} className="text-gray-600 dark:text-gray-300" />
                                    Bagikan
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setIsFavorite(v => !v)}
                                    className="inline-flex items-center gap-2 py-1 text-sm text-gray-700 dark:text-gray-200 hover:text-primary transition-colors"
                                >
                                    <Icon name="favorite" size={18} className={isFavorite ? 'text-primary' : 'text-gray-600 dark:text-gray-300'} filled={isFavorite} />
                                    Favorit (947)
                                </button>
                            </div>
                            <button type="button" onClick={handleReport} className="inline-flex items-center py-1 text-sm text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">
                                Laporkan
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Info & Actions */}
                    <div className="md:col-span-7 lg:col-span-7 flex flex-col gap-2 md:gap-4">
                        
                        {/* Product Info Card */}
                        <div className="bg-white dark:bg-[#221810] px-4 pt-4 pb-3 md:rounded-2xl md:p-6 md:border md:border-gray-100 md:dark:border-gray-800 md:shadow-sm">
                            <div className="hidden md:flex items-center justify-between mb-3">
                                <div className="flex items-center gap-2">
                                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-bold">
                                        <Icon name="verified" size={14} filled />
                                        Klikmart Mall
                                    </span>
                                    <span className="text-xs text-gray-500 dark:text-gray-400">Produk Original</span>
                                </div>
                                <button type="button" onClick={handleReport} className="px-2 py-1 rounded-md text-xs text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/10 hover:text-primary transition-colors">
                                    Laporkan
                                </button>
                            </div>
                            <h2 className="text-[#181411] dark:text-gray-100 text-lg md:text-2xl font-bold leading-snug mb-3 line-clamp-2">
                                {currentProduct.name}
                            </h2>
                            
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm mb-4">
                                <div className="flex items-center gap-2 text-[#181411] dark:text-white">
                                    <div className="flex items-center gap-0.5">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <Icon
                                                key={i}
                                                name="star"
                                                className={i < filledStars ? 'text-primary text-[16px]' : 'text-gray-300 dark:text-gray-600 text-[16px]'}
                                                filled
                                            />
                                        ))}
                                    </div>
                                    <span className="font-bold">{ratingValue.toFixed(1)}</span>
                                </div>
                                <div className="h-4 w-px bg-gray-200 dark:bg-gray-700" />
                                <button type="button" onClick={handleViewAllReviews} className="text-[#181411] dark:text-white">
                                    <span className="font-bold border-b border-gray-300 dark:border-gray-600">{currentProduct.reviews}</span>
                                    <span className="text-gray-400 font-normal ml-2">Penilaian</span>
                                </button>
                                <div className="h-4 w-px bg-gray-200 dark:bg-gray-700" />
                                <div className="text-[#181411] dark:text-white">
                                    <span className="font-bold">5rb+</span>
                                    <span className="text-gray-400 font-normal ml-2">Terjual</span>
                                </div>
                            </div>

                            <div className="bg-primary/5 dark:bg-white/5 rounded-xl px-4 py-3 mb-2">
                                <div className="flex items-end gap-3">
                                    <h1 className="text-primary text-3xl font-bold tracking-tight">Rp {currentProduct.price.toLocaleString('id-ID')}</h1>
                                    {'originalPrice' in currentProduct && currentProduct.originalPrice ? (
                                        <span className="text-sm text-gray-400 line-through mb-1">Rp {currentProduct.originalPrice.toLocaleString('id-ID')}</span>
                                    ) : null}
                                </div>
                                {'originalPrice' in currentProduct && currentProduct.originalPrice ? (
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="px-2 py-0.5 rounded-md text-xs font-bold bg-red-100 text-red-600">Hemat</span>
                                        <span className="text-xs text-gray-500 dark:text-gray-400">Harga terbaik hari ini</span>
                                    </div>
                                ) : null}
                            </div>

                            <div className="hidden md:flex items-center justify-between rounded-xl border border-gray-100 dark:border-gray-800 px-4 py-3 mt-4">
                                <div className="flex items-center gap-3 overflow-hidden">
                                    <Icon name="local_shipping" className="text-green-600 dark:text-green-500" />
                                    <div className="flex flex-col overflow-hidden">
                                        <span className="text-sm font-bold text-[#181411] dark:text-white">Gratis Ongkir</span>
                                        <span className="text-xs text-gray-500 dark:text-gray-400 truncate">Ongkir Rp0 dengan minimal belanja Rp30rb</span>
                                    </div>
                                </div>
                            </div>

                            <div className="hidden md:block mt-4">
                                <div className="flex items-start gap-6">
                                    <div className="w-20 text-sm font-medium text-gray-500 dark:text-gray-400 pt-2">Warna</div>
                                    <div className="flex flex-wrap gap-2">
                                        {variantColors.map(color => (
                                            <button
                                                key={color}
                                                type="button"
                                                onClick={() => setSelectedColor(color)}
                                                className={`px-3 py-2 rounded-md text-sm border transition-colors ${selectedColor === color ? 'border-primary text-primary bg-primary/5' : 'border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:border-primary/40'}`}
                                            >
                                                {color}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div className="h-px w-full bg-gray-100 dark:bg-gray-800 my-4" />
                                <div className="flex items-start gap-6">
                                    <div className="w-20 text-sm font-medium text-gray-500 dark:text-gray-400 pt-2">Ukuran</div>
                                    <div className="flex flex-wrap gap-2">
                                        {variantSizes.map(size => (
                                            <button
                                                key={size}
                                                type="button"
                                                onClick={() => setSelectedSize(size)}
                                                className={`px-3 py-2 rounded-md text-sm border transition-colors ${selectedSize === size ? 'border-primary text-primary bg-primary/5' : 'border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:border-primary/40'}`}
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Desktop Actions */}
                            <div className="hidden md:flex items-center gap-4 mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
                                <div className="flex flex-col gap-1">
                                    <span className="text-xs font-medium text-gray-500">Atur Jumlah:</span>
                                    <div className="flex items-center border border-gray-200 rounded-lg">
                                        <button type="button" onClick={decQuantity} className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-50 dark:hover:bg-white/5">-</button>
                                        <input type="text" value={quantity} className="w-12 h-8 text-center border-x border-gray-200 dark:border-gray-700 text-sm bg-transparent" readOnly />
                                        <button type="button" onClick={incQuantity} className="w-8 h-8 flex items-center justify-center text-primary hover:bg-gray-50 dark:hover:bg-white/5">+</button>
                                    </div>
                                </div>
                                <Link to="/cart" className="flex-1 h-12 rounded-xl bg-primary/10 text-primary font-bold hover:bg-primary/20 transition-colors flex items-center justify-center gap-2">
                                    <Icon name="add_shopping_cart" size={20} />
                                    Masukkan Keranjang
                                </Link>
                                <Link to="/checkout" className="flex-1 h-12 rounded-xl bg-primary text-white font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-primary/30 flex items-center justify-center">
                                    Beli Sekarang
                                </Link>
                            </div>
                        </div>

                        {/* Spacer Mobile Only */}
                        <div className="h-2 w-full bg-gray-100 dark:bg-[#1a120b] md:hidden" />

                        
                        <div className="flex flex-col gap-2 md:hidden">
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
                            <div className="md:hidden bg-white dark:bg-[#221810] px-4 py-3 flex items-center justify-between active:bg-gray-50 dark:active:bg-white/5 cursor-pointer md:rounded-xl md:border md:border-gray-100">
                                <div className="flex items-center gap-3">
                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400 w-16">Variasi</span>
                                    <span className="text-sm text-[#181411] dark:text-white font-medium">{selectedColor}, Ukuran {selectedSize}</span>
                                </div>
                                <Icon name="chevron_right" className="text-gray-400 text-xl" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-2 w-full bg-gray-100 dark:bg-[#1a120b] md:hidden" />

                <div ref={storeSectionRef} className="bg-white dark:bg-[#221810] px-4 py-4 md:rounded-xl md:border md:border-gray-100 md:dark:border-gray-800 md:px-6 md:mb-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="size-12 rounded-full bg-gray-200 bg-cover bg-center border border-gray-100 dark:border-gray-700" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAXv9G0h5fKAAQ5cOuikuUtGkEryqlixvzsm6g6Dkb4LuOMODWlWeBl8RtyVuxcml4IsK6oH_6RqIvmKoPIaqhYN8EYuQw7GUB-MoJP7deTEYX9jdxvv_MSr2TGm-r3tKt4s2gUP6qfHjl25aYH7-K3qS4LsD9Z1emr4TeW-xAs3Q-JA9AFXG5wuYXahlBhUrMq_2NNTCgXQWCC5xkdpsII5A-XujiFcrNqV18wmi5wFyL2mzs6xen1aSDKHauVEV4mAFkndVDIhXqF')` }} />
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-1">
                                    <h3 className="font-bold text-[#181411] dark:text-white truncate">Sneakers Official Store</h3>
                                            <Icon name="verified" className="text-primary" size={14} filled />
                                </div>
                                <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                                    <span className="text-green-600 dark:text-green-500 font-medium">Online</span>
                                    <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />
                                    Jakarta Pusat
                                </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button type="button" onClick={handleChatToStore} className="hidden md:inline-flex border border-primary text-primary px-3 py-2 rounded-lg text-xs font-bold hover:bg-primary/5 transition-colors">
                                        Chat
                                    </button>
                                    <button type="button" onClick={handleVisitStore} className="border border-primary text-primary px-3 py-2 rounded-lg text-xs font-bold hover:bg-primary/5 transition-colors">
                                        Kunjungi
                                    </button>
                                </div>
                            </div>
                        </div>

                <div className="h-2 w-full bg-gray-100 dark:bg-[#1a120b] md:hidden" />

                <div className="bg-white dark:bg-[#221810] px-4 py-4 md:rounded-xl md:border md:border-gray-100 md:dark:border-gray-800 md:px-6 md:mb-6">
                    <h3 className="text-base font-bold text-[#181411] dark:text-white mb-4">Rincian Produk</h3>
                    <div className="grid grid-cols-[100px_1fr] gap-y-3 text-sm mb-6">
                        <span className="text-gray-500 dark:text-gray-400">Bahan</span>
                        <span className="text-[#181411] dark:text-white font-medium">Canvas Premium</span>
                        <span className="text-gray-500 dark:text-gray-400">Negara Asal</span>
                        <span className="text-[#181411] dark:text-white font-medium">Indonesia</span>
                        <span className="text-gray-500 dark:text-gray-400">Stok</span>
                        <span className="text-[#181411] dark:text-white font-medium">142</span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        Sepatu sneakers pria dengan desain casual yang cocok untuk kegiatan sehari-hari. Dibuat dengan bahan canvas premium yang sirkulasi udaranya baik sehingga nyaman dipakai seharian.
                        <br /><br />
                        Fitur Utama:<br />
                        - Sol karet anti-slip<br />
                        - Insole empuk memory foam<br />
                        - Jahitan rapi dan kuat<br />
                        - Tersedia ukuran 39-44
                    </p>
                </div>

                <div className="h-2 w-full bg-gray-100 dark:bg-[#1a120b] md:hidden" />

                <div className="bg-white dark:bg-[#221810] px-4 py-4 md:rounded-xl md:border md:border-gray-100 md:dark:border-gray-800 md:mb-6 md:px-6">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex flex-col">
                                <h3 className="text-base font-bold text-[#181411] dark:text-white">Penilaian Produk</h3>
                                <div className="flex items-center gap-1 mt-1">
                                    <Icon name="star" className="text-primary text-[16px]" filled />
                                    <span className="text-sm font-bold text-[#181411] dark:text-white">{ratingValue.toFixed(1)}</span>
                                    <span className="text-xs text-gray-400">/5.0</span>
                                    <span className="text-xs text-gray-400 ml-1">({currentProduct.reviews} ulasan)</span>
                                </div>
                            </div>
                            <button type="button" onClick={handleViewAllReviews} className="text-primary text-sm font-medium">Lihat Semua</button>
                        </div>
                    <div className="border-b border-gray-100 dark:border-gray-800 pb-4 mb-4">
                        <div className="flex items-start gap-2 mb-2">
                            <div className="size-8 rounded-full bg-gray-200 bg-cover bg-center" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJjXiA3g-cw0-A6LDuKrriH-Y69RuGHX5JGXBynLrWKtY-dGosiodfxl0znk4a64ltnYCapnChyHZmbPnk3YQXsMCWSSMRE4A-wHCNYcjODUvM1pqR1h--nn1qni6sR7fWmaleNeIDq5nmf0RF7fef09fe1S_Rl_XFjI4oJ66caft9ZCao2iYwThhco1BV12ln0bUIizZwAb6Lkh-zgT3csQq9y8A__bI5gjBb30PwyONqa6r5a9a79nw-mvx9ko2Zk2ftLViRlLBe')` }} />
                            <div className="flex-1">
                                <div className="text-xs font-medium text-[#181411] dark:text-white">Sarah W.</div>
                                <div className="flex items-center gap-0.5 mt-0.5 mb-1">
                                    <Icon name="star" className="text-primary text-[12px]" filled />
                                    <Icon name="star" className="text-primary text-[12px]" filled />
                                    <Icon name="star" className="text-primary text-[12px]" filled />
                                    <Icon name="star" className="text-primary text-[12px]" filled />
                                    <Icon name="star" className="text-primary text-[12px]" filled />
                                </div>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Variasi: Putih, 42</p>
                                <p className="text-sm text-gray-700 dark:text-gray-300 leading-snug">Barang bagus banget, sesuai ekspektasi. Pengiriman cepat cuma 2 hari sampe. Recommended seller!</p>
                                <div className="flex gap-2 mt-3 overflow-x-auto no-scrollbar">
                                    <div className="size-16 flex-shrink-0 rounded-md bg-gray-100 bg-cover bg-center" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAznLLAaqzEjBGAGuzi4ec4M16DBRvnBGFsBlzoRsjRr_5GonYey8kDq54yREcpEG6zUMqQ6htLURRY4RETCF0J4kN_SL1nFQFOvGN6WG4Rgred0hDw_KGZj0NCFc04LRY4zdxQ8JBK3cIbiejsF1I4oHMnAtqf4BGhdRUSe6YibrdUUjYDphq6bloXSaZ3nXkgtG_mV5Kvqf5Mt6yJn4Xyckh7GQCilhT40Kovum3_ijQ61fyg3udXVgyh9bssMid9Aa3rnamtwRhe')` }} />
                                    <div className="size-16 flex-shrink-0 rounded-md bg-gray-100 bg-cover bg-center" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCFY1zyX38YanvesUpPnoLwK-1Nqf1Hiv9WtidE2fJb4PjNrEZWl7xhNJ6eAsXOjZujyzm7RAbuyl_xhnIBa8LHqhbqWzEUNrOQ2GNe_0TlbpjMGre5ZRZWSAgAi3rnZQX12fcXTqQzi7KOYHSOV0zXRq1lfEygJzHfAv5FT3vXv1VlhqgEixuXpH8r9LseljUhE5RilN04LIFoR51eOVW5UUqF0aKK4uoi6dDTD-6mfCSuMEbUL0vWHIlBamXbs4JvI5YN8mBR7jB4')` }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-start gap-2">
                        <div className="size-8 rounded-full bg-gray-200 bg-cover bg-center" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDI91F4SWOQ478uQgwLzfxRkrgZ4rrR_QWRpnvJdEFAO0MhvtB3R-r2OHsDbgeZyZoP_mF6Mm5QJlA19PV2nyLNnuG9aLPLBnzv8-b0TkGCN-30JOzp9qUDqcin-kD-wvPAX7vYVynbnERvd20qzgY9j67QGYtrE56jlNPvMrN6SZnCc6xFIyRlVS1J_13AxD_VdaBrxpAFRkjhv0BC3gCRdSK9wVSW5lWNLiEM7Ev7o90YQUoAIRW5zvXSJ4xnBd7JcC89Zq42QRK2')` }} />
                        <div className="flex-1">
                            <div className="text-xs font-medium text-[#181411] dark:text-white">Budi Santoso</div>
                            <div className="flex items-center gap-0.5 mt-0.5 mb-1">
                                <Icon name="star" className="text-primary text-[12px]" filled />
                                <Icon name="star" className="text-primary text-[12px]" filled />
                                <Icon name="star" className="text-primary text-[12px]" filled />
                                <Icon name="star" className="text-primary text-[12px]" filled />
                                <Icon name="star" className="text-gray-300 dark:text-gray-600 text-[12px]" filled />
                            </div>
                            <p className="text-sm text-gray-700 dark:text-gray-300 leading-snug">Kualitas oke untuk harga segini. Sol agak sedikit keras tapi masih nyaman.</p>
                        </div>
                    </div>
                </div>

                <div className="h-2 w-full bg-gray-100 dark:bg-[#1a120b] md:hidden" />

                {/* Similar Products */}
                <div className="bg-white dark:bg-[#221810] p-4 md:p-6 md:rounded-xl md:border md:border-gray-100 md:dark:border-gray-800 md:mt-8">
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
                    <button type="button" onClick={handleChatToStore} className="flex flex-col items-center justify-center gap-0.5 text-gray-500 dark:text-gray-400 hover:text-primary transition-colors min-w-[48px]">
                        <Icon name="chat_bubble_outline" size={24} />
                        <span className="text-[10px] font-medium">Chat</span>
                    </button>
                    <div className="w-px h-8 bg-gray-200 dark:bg-gray-700" />
                    <Link to="/cart" className="flex-1 flex items-center justify-center gap-2 h-10 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                        <Icon name="add_shopping_cart" size={20} />
                        <span className="text-sm font-bold whitespace-nowrap">+ Keranjang</span>
                    </Link>
                    <Link to="/checkout" className="flex-1 flex items-center justify-center h-10 rounded-lg bg-primary text-white hover:bg-primary/90 shadow-md shadow-primary/30 transition-colors">
                        <span className="text-sm font-bold">Beli Sekarang</span>
                    </Link>
                </div>
                <div className="h-[env(safe-area-inset-bottom)] w-full bg-white dark:bg-[#221810]" />
            </div>
        </MobileContainer>
    );
}
