import { Link } from 'react-router-dom';
import { Icon } from '../../components/common/Icon';
import { MobileContainer } from '../../components/layout/MobileContainer';

export function CheckoutPage() {
    return (
        <MobileContainer className="bg-background-light dark:bg-background-dark pb-28">
            {/* Header */}
            <div className="sticky top-0 z-20 flex items-center bg-white dark:bg-surface-dark px-4 py-3 shadow-sm border-b border-gray-100 dark:border-gray-800">
                <Link to="/cart" className="text-text-main dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <Icon name="arrow_back" />
                </Link>
                <h2 className="text-text-main dark:text-white text-lg font-bold leading-tight flex-1 text-center pr-10">Checkout</h2>
            </div>

            {/* Address Section */}
            <div className="mt-3 bg-white dark:bg-surface-dark px-4 py-4">
                <div className="flex gap-3 justify-between items-center cursor-pointer group">
                    <div className="flex items-start gap-3 flex-1">
                        <Icon name="location_on" className="text-primary mt-1" />
                        <div className="flex flex-col">
                            <div className="flex items-center gap-2 mb-1">
                                <p className="text-text-main dark:text-white text-sm font-bold">Rumah - John Doe</p>
                                <span className="text-xs bg-primary/10 text-primary px-1.5 py-0.5 rounded font-medium">Utama</span>
                            </div>
                            <p className="text-text-main dark:text-white text-sm font-medium mb-1">(+62) 812-3456-7890</p>
                            <p className="text-text-secondary dark:text-gray-400 text-sm font-normal leading-snug line-clamp-2">
                                Jalan Jendral Sudirman No. 10, Jakarta Pusat, DKI Jakarta, 10220
                            </p>
                        </div>
                    </div>
                    <Icon name="chevron_right" className="text-gray-400 shrink-0 group-hover:text-primary transition-colors" />
                </div>
                {/* Decorative border */}
                <div className="mt-4 h-1 w-full" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #f48525 0, #f48525 10px, transparent 10px, transparent 20px, #221810 20px, #221810 30px, transparent 30px, transparent 40px)' }} />
            </div>

            {/* Product/Store Section */}
            <div className="mt-3 flex flex-col gap-4 bg-white dark:bg-surface-dark p-4">
                {/* Store Header */}
                <div className="flex items-center gap-2 border-b border-gray-100 dark:border-gray-800 pb-3">
                    <Icon name="storefront" className="text-text-main dark:text-white" size={20} />
                    <p className="text-text-main dark:text-white text-sm font-bold">Official Store Nike</p>
                    <Icon name="verified" className="text-primary" size={16} />
                </div>

                {/* Item */}
                <div className="flex items-start gap-4">
                    <div className="w-20 h-20 shrink-0 bg-gray-100 rounded-lg overflow-hidden border border-gray-100 dark:border-gray-700">
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9FBWua4BAKy1jxGwsTfNbhACwGCw2E0mFTrfWJdT7YyaapM4uYNuF4ZOsf455ZPg4EF1CxYheHL48sRJa4RzZ-DW8VbPYmp4NPfLtIdRJRqPs_36DG2u0Xic43nQH_03RMWekBoSsyHf50VTzXa2BwAX9TiK_U4nbdGgwbIGPAX8FRIqQUrlKAww9a5BcDUzIf3GGIfcg9Tv7aNEerA1XnOo2c9F3WuQHf0PGBALDrxJpsWpITntMZeBftw7M6KpxcQfBZ5C8fI72" alt="Product" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-1 flex-col gap-1">
                        <p className="text-text-main dark:text-white text-sm font-medium leading-tight line-clamp-2">Nike Air Zoom Pegasus 39 - Sepatu Lari Pria</p>
                        <div className="flex justify-between items-start mt-1">
                            <p className="text-text-secondary dark:text-gray-400 text-xs font-normal bg-gray-50 dark:bg-gray-800 px-2 py-1 rounded w-fit">Var: Hitam, 42</p>
                            <span className="text-text-main dark:text-white text-sm font-medium">x1</span>
                        </div>
                        <div className="flex justify-between items-end mt-1">
                            <p className="text-primary text-base font-bold">Rp 1.850.000</p>
                        </div>
                    </div>
                </div>

                {/* Shipping Option */}
                <div className="border-t border-gray-100 dark:border-gray-800 pt-3 mt-1">
                    <div className="flex items-center justify-between py-2 cursor-pointer group">
                        <div className="flex flex-col">
                            <p className="text-text-main dark:text-white text-sm font-medium">Opsi Pengiriman</p>
                            <p className="text-text-secondary dark:text-gray-400 text-xs mt-0.5">Reguler - Estimasi 15-18 Okt</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="text-text-main dark:text-white text-sm font-bold">Rp 15.000</p>
                            <Icon name="chevron_right" className="text-gray-400" size={20} />
                        </div>
                    </div>
                </div>

                {/* Message to Seller */}
                <div className="flex items-center gap-3 py-2 border-t border-gray-100 dark:border-gray-800 pt-3">
                    <p className="text-text-main dark:text-white text-sm shrink-0">Pesan:</p>
                    <input type="text" placeholder="Silakan tinggalkan pesan..." className="bg-transparent border-none p-0 text-sm text-text-main dark:text-white placeholder:text-gray-400 focus:ring-0 w-full text-right" />
                </div>
            </div>

            {/* Voucher Section */}
            <div className="mt-3 bg-white dark:bg-surface-dark px-4 py-3 flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                    <Icon name="confirmation_number" className="text-primary" />
                    <p className="text-text-main dark:text-white text-sm font-medium">Voucher Klikmart</p>
                </div>
                <div className="flex items-center gap-2">
                    <p className="text-text-secondary dark:text-gray-400 text-sm">Gunakan / masukkan kode</p>
                    <Icon name="chevron_right" className="text-gray-400" size={20} />
                </div>
            </div>

            {/* Payment Method */}
            <div className="mt-3 bg-white dark:bg-surface-dark px-4 py-4">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <Icon name="payments" className="text-primary" />
                        <h3 className="text-text-main dark:text-white text-base font-bold">Metode Pembayaran</h3>
                    </div>
                    <button className="text-primary text-sm font-bold">Lihat Semua</button>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg border border-primary/30 bg-primary/5 dark:bg-primary/10">
                    <div className="flex items-center gap-3">
                        <div className="bg-white p-1 rounded w-10 h-6 flex items-center justify-center border border-gray-200">
                            <div className="font-bold text-[8px] text-blue-800">BCA</div>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-text-main dark:text-white text-sm font-medium">Transfer Bank - BCA</p>
                            <p className="text-text-secondary dark:text-gray-400 text-xs">Dicek otomatis</p>
                        </div>
                    </div>
                    <Icon name="check_circle" className="text-primary" />
                </div>
            </div>

            {/* Cost Breakdown */}
            <div className="mt-3 bg-white dark:bg-surface-dark px-4 py-4 mb-4">
                <h3 className="text-text-main dark:text-white text-sm font-bold mb-3 flex gap-2 items-center">
                    <Icon name="receipt_long" size={16} />
                    Rincian Pembayaran
                </h3>
                <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                        <p className="text-text-secondary dark:text-gray-400">Subtotal untuk Produk</p>
                        <p className="text-text-main dark:text-white">Rp 1.850.000</p>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                        <p className="text-text-secondary dark:text-gray-400">Subtotal Pengiriman</p>
                        <p className="text-text-main dark:text-white">Rp 15.000</p>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                        <p className="text-text-secondary dark:text-gray-400">Biaya Layanan</p>
                        <p className="text-text-main dark:text-white">Rp 1.000</p>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                        <p className="text-text-secondary dark:text-gray-400">Total Diskon Pengiriman</p>
                        <p className="text-primary">-Rp 10.000</p>
                    </div>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center">
                    <p className="text-text-main dark:text-white text-base font-bold">Total Pembayaran</p>
                    <p className="text-primary text-lg font-bold">Rp 1.856.000</p>
                </div>
            </div>

            {/* Safe Transaction Guarantee */}
            <div className="px-6 mb-6">
                <div className="flex items-center justify-center gap-2 text-text-secondary dark:text-gray-500 text-xs">
                    <Icon name="verified_user" size={16} />
                    <p>Transaksi aman dan terpercaya</p>
                </div>
            </div>

            {/* Sticky Footer */}
            <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] max-w-md mx-auto">
                <div className="w-full px-4 py-3 flex items-center justify-end gap-4">
                    <div className="flex flex-col items-end">
                        <p className="text-text-secondary dark:text-gray-400 text-xs">Total Pembayaran</p>
                        <p className="text-primary text-lg font-bold leading-tight">Rp 1.856.000</p>
                    </div>
                    <button className="bg-primary hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-colors active:scale-95 transform duration-100 w-40">
                        Buat Pesanan
                    </button>
                </div>
            </div>
        </MobileContainer>
    );
}
