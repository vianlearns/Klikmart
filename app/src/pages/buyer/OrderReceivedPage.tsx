import { Link, useNavigate, useParams } from 'react-router-dom';
import { Icon } from '../../components/common/Icon';
import { MobileContainer } from '../../components/layout/MobileContainer';
import { orders } from '../../data/orderData';

export function OrderReceivedPage() {
    const navigate = useNavigate();
    const { title } = useParams<{ title: string }>();

    // Find order by title slug
    const order = orders.find(o => {
        const orderSlug = `${o.storeName.toLowerCase().replace(/\s+/g, '-')}-${o.id.toLowerCase()}`;
        return orderSlug === title;
    });

    // Default order for demo
    const displayOrder = order || orders.find(o => o.status === 'completed') || orders[0];

    return (
        <MobileContainer>
            <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark">
                {/* Success Header */}
                <div className="relative w-full bg-gradient-to-br from-green-500 to-green-600 pt-12 md:pt-6 pb-24 px-5">
                    <div className="w-full md:max-w-4xl md:mx-auto relative">
                        {/* Back Button */}
                        <button
                            onClick={() => navigate('/')}
                            className="absolute top-0 left-0 text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-white/10 transition-colors"
                        >
                            <Icon name="close" size={24} />
                        </button>

                        {/* Success Icon & Message */}
                        <div className="flex flex-col items-center justify-center pt-8">
                            <div className="size-20 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                                <Icon name="check_circle" size={48} className="text-green-500" filled />
                            </div>
                            <h1 className="text-white text-2xl font-bold mb-2">Pesanan Diterima!</h1>
                            <p className="text-white/80 text-sm text-center max-w-xs">
                                Terima kasih telah mengonfirmasi penerimaan pesanan Anda
                            </p>
                        </div>
                    </div>
                </div>

                {/* Content Container */}
                <div className="w-full md:max-w-4xl md:mx-auto px-4 -mt-16 relative z-10 pb-8">
                    {/* Order Summary Card */}
                    <div className="bg-white dark:bg-[#2c241d] rounded-xl shadow-lg border border-gray-100 dark:border-white/5 overflow-hidden">
                        {/* Store Header */}
                        <div className="p-4 border-b border-gray-100 dark:border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Icon name="storefront" size={20} className="text-gray-500 dark:text-gray-400" filled />
                                <span className="font-bold text-sm text-gray-900 dark:text-white">
                                    {displayOrder.storeName}
                                </span>
                                {displayOrder.storeVerified && (
                                    <Icon name="verified" size={16} className="text-primary" />
                                )}
                            </div>
                            <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                                <Icon name="check_circle" size={16} filled />
                                <span className="text-xs font-bold">Selesai</span>
                            </div>
                        </div>

                        {/* Products */}
                        {displayOrder.products.map((product) => (
                            <div key={product.id} className="p-4 flex gap-3">
                                <div
                                    className="w-16 h-16 shrink-0 bg-gray-100 dark:bg-gray-800 rounded-lg bg-cover bg-center"
                                    style={{ backgroundImage: `url('${product.image}')` }}
                                />
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-sm font-medium text-gray-900 dark:text-white leading-tight line-clamp-2">
                                        {product.name}
                                    </h3>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                        {product.variant} • x{product.quantity}
                                    </p>
                                </div>
                            </div>
                        ))}

                        {/* Order Info */}
                        <div className="px-4 pb-4">
                            <div className="bg-gray-50 dark:bg-white/5 rounded-lg p-3 space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500 dark:text-gray-400">No. Pesanan</span>
                                    <span className="text-gray-900 dark:text-white font-medium">{displayOrder.id}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500 dark:text-gray-400">Total Pembayaran</span>
                                    <span className="text-primary font-bold">
                                        Rp {displayOrder.totalPrice.toLocaleString('id-ID')}
                                    </span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500 dark:text-gray-400">Waktu Diterima</span>
                                    <span className="text-gray-900 dark:text-white font-medium">
                                        {new Date().toLocaleDateString('id-ID', {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit',
                                        })}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Coin Reward Card */}
                    <div className="mt-4">
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl p-4 flex items-center gap-4 shadow-sm">
                            <div className="size-12 bg-white/20 rounded-full flex items-center justify-center">
                                <Icon name="monetization_on" size={28} className="text-white" filled />
                            </div>
                            <div className="flex-1">
                                <p className="text-white font-bold text-sm">Selamat! Anda mendapat koin</p>
                                <p className="text-white/80 text-xs">Beri nilai untuk mendapatkan 50 Koin lagi</p>
                            </div>
                            <div className="text-white font-bold text-xl">+25</div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-6 space-y-3">
                        <Link
                            to="/orders/rate"
                            className="w-full flex items-center justify-center gap-2 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-orange-600 transition-colors"
                        >
                            <Icon name="star" size={20} />
                            Beri Nilai Sekarang
                        </Link>
                        <button
                            onClick={() => navigate(`/product/${displayOrder.products[0]?.name.toLowerCase().replace(/\s+/g, '-')}`)}
                            className="w-full flex items-center justify-center gap-2 py-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                        >
                            <Icon name="refresh" size={20} />
                            Beli Lagi
                        </button>
                    </div>

                    {/* Quick Actions */}
                    <div className="mt-6">
                        <h3 className="text-gray-900 dark:text-white font-bold text-sm mb-3">Butuh Bantuan?</h3>
                        <div className="grid grid-cols-3 gap-3">
                            <button className="flex flex-col items-center gap-2 p-3 bg-white dark:bg-[#2c241d] rounded-xl border border-gray-100 dark:border-white/5 hover:border-primary/30 transition-colors">
                                <Icon name="chat" size={24} className="text-gray-500 dark:text-gray-400" />
                                <span className="text-xs text-gray-600 dark:text-gray-400">Chat Penjual</span>
                            </button>
                            <Link
                                to="/orders/returns"
                                className="flex flex-col items-center gap-2 p-3 bg-white dark:bg-[#2c241d] rounded-xl border border-gray-100 dark:border-white/5 hover:border-primary/30 transition-colors"
                            >
                                <Icon name="assignment_return" size={24} className="text-gray-500 dark:text-gray-400" />
                                <span className="text-xs text-gray-600 dark:text-gray-400">Pengembalian</span>
                            </Link>
                            <Link
                                to="/help"
                                className="flex flex-col items-center gap-2 p-3 bg-white dark:bg-[#2c241d] rounded-xl border border-gray-100 dark:border-white/5 hover:border-primary/30 transition-colors"
                            >
                                <Icon name="help" size={24} className="text-gray-500 dark:text-gray-400" />
                                <span className="text-xs text-gray-600 dark:text-gray-400">Bantuan</span>
                            </Link>
                        </div>
                    </div>

                    {/* Bottom Action */}
                    <div className="mt-8">
                        <Link
                            to="/"
                            className="w-full flex items-center justify-center gap-2 py-3 text-primary font-semibold hover:underline"
                        >
                            <Icon name="home" size={20} />
                            Kembali ke Beranda
                        </Link>
                    </div>
                </div>
            </div>
        </MobileContainer>
    );
}
