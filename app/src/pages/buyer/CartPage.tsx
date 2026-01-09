import { Link } from 'react-router-dom';
import { Icon } from '../../components/common/Icon';
import { MobileContainer } from '../../components/layout/MobileContainer';

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
            {/* Header */}
            <header className="sticky top-0 z-30 flex items-center bg-white dark:bg-gray-800 p-4 shadow-sm md:px-6">
                <Link to="/" className="mr-3 flex items-center justify-center text-[#181411] dark:text-white">
                    <Icon name="arrow_back" />
                </Link>
                <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-[#181411] dark:text-white">Keranjang Saya</h2>
                <button className="text-[#181411] dark:text-white text-base font-bold leading-normal tracking-[0.015em] shrink-0">Ubah</button>
            </header>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto pb-32 flex flex-col gap-2 p-0 md:max-w-2xl md:mx-auto">
                {cartStores.map((store) => (
                    <div key={store.id} className="bg-white dark:bg-gray-800 flex flex-col">
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

                {/* Voucher Section */}
                <div className="mt-2 flex items-center gap-4 bg-white dark:bg-gray-800 px-4 min-h-14 justify-between cursor-pointer active:bg-gray-50 dark:active:bg-gray-700">
                    <div className="flex items-center gap-3">
                        <Icon name="confirmation_number" className="text-primary" />
                        <p className="text-[#181411] dark:text-white text-base font-medium leading-normal flex-1 truncate">Voucher Klikmart</p>
                    </div>
                    <div className="shrink-0 flex items-center gap-2">
                        <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">Gunakan / masukkan kode</p>
                        <Icon name="chevron_right" className="text-gray-400" size={20} />
                    </div>
                </div>

                {/* Notice */}
                <div className="px-4 py-4 text-center">
                    <p className="text-xs text-gray-400 dark:text-gray-500">Semua produk 100% Original</p>
                </div>
            </main>

            {/* Sticky Bottom Checkout Bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-40 w-full">
                <div className="flex items-center justify-between px-4 py-3 pb-8 md:pb-3 md:max-w-2xl md:mx-auto">
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
