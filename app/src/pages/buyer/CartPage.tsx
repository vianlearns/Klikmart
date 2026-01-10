import { Link } from 'react-router-dom';
import { Icon } from '../../components/common/Icon';
import { MobileContainer } from '../../components/layout/MobileContainer';
import { Header } from '../../components/layout/Header';

const cartStores = [
    {
        id: 'store1',
        name: 'Adidas Official Store',
        checked: true,
        items: [
            {
                id: 'item1',
                name: 'Sepatu Lari Pria Ultraboost Light - Vivid Orange',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0bDZqXRpoXgMNvRid8sBLwofGiPrfu24_O-DSSSF8xXqfkMajitLu6pEluvtx1ZnzTatfhlXVbl-PISg-M5pKD5bVpqCf5Phc63dvIslQFI9BddYooXcq0OleiH7Bvxkx1TfV6JY_pIYnBXPh5qfKUeoFME6PXSpfv3ImDaly_8QRFZTtN2Otg4wcXgBMOD8aZqrLaSt2KeUDQS6l5xPma7zDFtQxcdJYCOetp7KjBJr5TVcAi8bgaRQYHAHVe2yD0PywdcnjBjk6',
                variant: 'Orange, 42',
                price: 1999000,
                originalPrice: 2500000,
                quantity: 1,
                checked: true,
            },
            {
                id: 'item2',
                name: 'Kaos Kaki Olahraga Ankle - Putih (Isi 3 Pasang)',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHJ03Z-zkVImQzbkYh-8hRodW-zfB3phyXiwI9PnzCHwiJs2fMXtjjWFtfvRrArOvBB-sC4CK3547gu_AuuGGwXfYVSHhI-k7ZCWgU_Q8G7JGPWGZ5dPKN6vDuiHa5tLFDhb2cfQRMt3eBd1PogpkufKFAV3oZvjmd2Yz-008MJ3pUg_qZ4yzidHwu2r6vtvW-KC0VAYsO9bZ6mVNiVPkMIhfwnkTgxlAOS_7ALIISMklROyO0lwF_zZh_S4zXZE8Mfn05PwOJNwMa',
                variant: 'Putih, All Size',
                price: 149000,
                originalPrice: undefined,
                quantity: 2,
                checked: true,
            }
        ]
    },
    {
        id: 'store2',
        name: 'Uniqlo Indonesia',
        checked: false,
        items: [
            {
                id: 'item3',
                name: 'Jaket Hoodie Resleting Pria - Navy Blue',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5tGcQcvdYsGvT32Ae50RIFV6SN6WqJleauHrb61PagJD_UnJkf8Zzf0T6ZzaEC-8ftI5TITepcnpgE6PrBXrFCseyTf80I-neA613KILEa4KjoLCzQ3ERF5-dYKzMtGJ2Zh6jeBZ9rGZo6RUGSjDhp6bz2psCmLbZbj8gfZgePiFhgkoll9MB6NRb3Hq0aoRC88tCg_icPHLPBvjqv5So1zQLVRvtK82JVj-QIEH_G26DJXy6973KHmA9RBkJGfdHlFo9-nEdgUxg',
                variant: 'Navy, L',
                price: 499000,
                originalPrice: undefined,
                quantity: 1,
                checked: false,
            }
        ]
    }
];

export function CartPage() {
    const checkedItemsCount = cartStores.reduce((acc, store) =>
        acc + store.items.filter(item => item.checked).length, 0
    );
    const totalPrice = cartStores.reduce((acc, store) =>
        acc + store.items.filter(item => item.checked).reduce((sum, item) => sum + (item.price * item.quantity), 0), 0
    );
    const totalDiscount = cartStores.reduce((acc, store) =>
        acc + store.items.filter(item => item.checked).reduce((sum, item) => sum + ((item.originalPrice || item.price) - item.price) * item.quantity, 0), 0
    );

    return (
        <MobileContainer className="bg-background-light dark:bg-background-dark">
            {/* Desktop Header */}
            <Header
                searchPlaceholder="Cari produk di keranjang..."
                className="hidden md:block"
                showMobileElements={false}
            />

            {/* Mobile Header */}
            <header className="md:hidden sticky top-0 z-30 flex items-center bg-white dark:bg-gray-800 p-4 shadow-sm">
                <Link to="/" className="mr-3 flex items-center justify-center text-[#181411] dark:text-white">
                    <Icon name="arrow_back" />
                </Link>
                <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-[#181411] dark:text-white">Keranjang Saya</h2>
                <button className="text-[#181411] dark:text-white text-base font-bold leading-normal tracking-[0.015em] shrink-0">Ubah</button>
            </header>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto pb-32 md:pb-10 flex flex-col gap-4 p-0 md:max-w-7xl md:mx-auto md:grid md:grid-cols-12 md:gap-8 md:px-6 md:py-8 w-full">
                {/* Left Column: Cart Items */}
                <div className="md:col-span-8 flex flex-col gap-4">
                    <h1 className="hidden md:block text-2xl font-bold mb-2 text-[#181411] dark:text-white">Keranjang Belanja</h1>

                    {cartStores.map((store) => (
                        <div key={store.id} className="bg-white dark:bg-gray-800 flex flex-col md:rounded-xl md:border md:border-gray-100 dark:md:border-gray-700 md:shadow-sm overflow-hidden">
                            {/* Store Header */}
                            <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 dark:border-gray-700">
                                <div className="flex size-6 items-center justify-center shrink-0">
                                    <input type="checkbox" defaultChecked={store.checked} className="custom-checkbox h-5 w-5 rounded border-gray-300 dark:border-gray-600 border-2 bg-transparent text-primary checked:bg-primary checked:border-primary focus:ring-0 focus:ring-offset-0 focus:outline-none transition-colors cursor-pointer" />
                                </div>
                                <Icon name="storefront" className="text-[#181411] dark:text-white" size={20} />
                                <p className="text-[#181411] dark:text-white text-base font-bold leading-normal flex-1 truncate">{store.name}</p>
                                <Icon name="chevron_right" className="text-gray-400" />
                            </div>

                            {/* Products */}
                            {store.items.map((item, idx) => (
                                <div key={item.id} className={`flex gap-4 px-4 py-4 ${idx < store.items.length - 1 ? 'border-b border-gray-50 dark:border-gray-700/50' : ''}`}>
                                    <div className="flex items-center justify-center shrink-0 self-center">
                                        <input type="checkbox" defaultChecked={item.checked} className="custom-checkbox h-5 w-5 rounded border-gray-300 dark:border-gray-600 border-2 bg-transparent text-primary checked:bg-primary checked:border-primary focus:ring-0 focus:ring-offset-0 focus:outline-none transition-colors cursor-pointer" />
                                    </div>
                                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-24 shrink-0 bg-gray-100 dark:bg-gray-700" style={{ backgroundImage: `url("${item.image}")` }} />
                                    <div className="flex flex-1 flex-col justify-between py-0.5">
                                        <div>
                                            <p className="text-[#181411] dark:text-white text-sm font-medium leading-snug line-clamp-2">{item.name}</p>
                                            <div className="mt-1 flex items-center gap-1.5 flex-wrap">
                                                <div className="px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-700 text-xs text-gray-500 dark:text-gray-300 flex items-center gap-1 cursor-pointer">
                                                    <span>Variasi: {item.variant}</span>
                                                    <Icon name="expand_more" size={14} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-end justify-between mt-2">
                                            <div className="flex flex-col">
                                                {item.originalPrice && <p className="text-xs text-gray-400 line-through">Rp {item.originalPrice.toLocaleString('id-ID')}</p>}
                                                <p className="text-primary text-base font-bold leading-normal">Rp {item.price.toLocaleString('id-ID')}</p>
                                            </div>
                                            <div className="flex items-center border border-gray-200 dark:border-gray-600 rounded-md overflow-hidden">
                                                <button className="w-7 h-7 flex items-center justify-center bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 active:bg-gray-100 transition-colors">
                                                    <Icon name="remove" size={16} />
                                                </button>
                                                <input type="number" defaultValue={item.quantity} className="w-8 h-7 p-0 text-center text-sm font-medium bg-white dark:bg-gray-800 border-x border-gray-200 dark:border-gray-600 text-[#181411] dark:text-white focus:outline-none focus:ring-0" />
                                                <button className="w-7 h-7 flex items-center justify-center bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 active:bg-gray-100 transition-colors">
                                                    <Icon name="add" size={16} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}

                    {/* Notice */}
                    <div className="px-4 py-4 text-center md:text-left md:px-0">
                        <p className="text-xs text-gray-400 dark:text-gray-500">Semua produk 100% Original</p>
                    </div>
                </div>

                {/* Right Column: Summary (Desktop) */}
                <div className="hidden md:block md:col-span-4">
                    <div className="sticky top-28 flex flex-col gap-4">
                        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm p-6">
                            <h3 className="text-lg font-bold mb-4 text-[#181411] dark:text-white">Ringkasan Belanja</h3>

                            {/* Voucher Desktop */}
                            <div className="flex items-center gap-3 mb-6 p-3 rounded-lg border border-dashed border-gray-300 dark:border-gray-600 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                <Icon name="confirmation_number" className="text-primary" />
                                <p className="text-[#181411] dark:text-white text-sm font-medium flex-1">Makin hemat pakai promo</p>
                                <Icon name="chevron_right" className="text-gray-400" size={20} />
                            </div>

                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500 dark:text-gray-400">Total Harga ({checkedItemsCount} barang)</span>
                                    <span className="text-[#181411] dark:text-white font-medium">Rp {totalPrice.toLocaleString('id-ID')}</span>
                                </div>
                                {totalDiscount > 0 && (
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500 dark:text-gray-400">Total Diskon</span>
                                        <span className="text-green-600 font-medium">-Rp {totalDiscount.toLocaleString('id-ID')}</span>
                                    </div>
                                )}
                            </div>

                            <div className="border-t border-gray-100 dark:border-gray-700 pt-4 mb-6">
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-lg text-[#181411] dark:text-white">Total Belanja</span>
                                    <span className="font-bold text-lg text-primary">Rp {totalPrice.toLocaleString('id-ID')}</span>
                                </div>
                            </div>

                            <Link to="/checkout" className="flex items-center justify-center w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-xl shadow-lg shadow-primary/30 transition-all active:scale-95">
                                Beli ({checkedItemsCount})
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Mobile Voucher Section (Only visible on mobile) */}
                <div className="md:hidden mt-2 flex items-center gap-4 bg-white dark:bg-gray-800 px-4 min-h-14 justify-between cursor-pointer active:bg-gray-50 dark:active:bg-gray-700">
                    <div className="flex items-center gap-3">
                        <Icon name="confirmation_number" className="text-primary" />
                        <p className="text-[#181411] dark:text-white text-base font-medium leading-normal flex-1 truncate">Voucher Klikmart</p>
                    </div>
                    <div className="shrink-0 flex items-center gap-2">
                        <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">Gunakan / masukkan kode</p>
                        <Icon name="chevron_right" className="text-gray-400" size={20} />
                    </div>
                </div>
            </main>

            {/* Sticky Bottom Checkout Bar (Mobile Only) */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-40 w-full">
                <div className="flex items-center justify-between px-4 py-3 pb-8">
                    {/* Select All */}
                    <div className="flex items-center gap-3">
                        <input type="checkbox" className="custom-checkbox h-5 w-5 rounded border-gray-300 dark:border-gray-600 border-2 bg-transparent text-primary checked:bg-primary checked:border-primary focus:ring-0 focus:ring-offset-0 focus:outline-none transition-colors cursor-pointer" />
                        <label className="text-sm font-medium text-gray-500 dark:text-gray-300 cursor-pointer">Semua</label>
                    </div>
                    {/* Total & Action */}
                    <div className="flex items-center gap-4">
                        <div className="flex flex-col items-end">
                            <p className="text-xs text-gray-500 dark:text-gray-400">Total</p>
                            <p className="text-primary text-lg font-bold leading-tight">Rp {totalPrice.toLocaleString('id-ID')}</p>
                            {totalDiscount > 0 && <p className="text-[10px] text-gray-400 dark:text-gray-500">Hemat Rp {totalDiscount.toLocaleString('id-ID')}</p>}
                        </div>
                        <Link to="/checkout" className="bg-primary hover:bg-primary/90 text-white font-bold py-2.5 px-6 rounded-md shadow-sm active:scale-95 transition-all text-sm">
                            Checkout ({checkedItemsCount})
                        </Link>
                    </div>
                </div>
            </div>
        </MobileContainer>
    );
}
