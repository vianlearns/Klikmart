import { Link } from 'react-router-dom';
import { Icon } from '../common/Icon';
import type { Order } from '../../data/types';

interface OrderCardProps {
    order: Order;
    showActions?: boolean;
    variant?: 'default' | 'rate' | 'return' | 'tracking';
}

function createOrderSlug(storeName: string, orderId: string): string {
    return `${storeName.toLowerCase().replace(/\s+/g, '-')}-${orderId.toLowerCase()}`;
}

export function OrderCard({ order, showActions = true, variant = 'default' }: OrderCardProps) {
    const getStatusColor = () => {
        switch (order.status) {
            case 'unpaid':
                return 'text-primary';
            case 'processing':
                return 'text-primary';
            case 'shipped':
                return 'text-primary';
            case 'completed':
                return 'text-green-600 dark:text-green-400';
            case 'cancelled':
                return 'text-gray-500';
            case 'return':
                return 'text-primary';
            default:
                return 'text-gray-500';
        }
    };

    const orderSlug = createOrderSlug(order.storeName, order.id);

    return (
        <div className={`bg-white dark:bg-[#2c241d] rounded-xl shadow-sm border border-gray-100 dark:border-white/5 overflow-hidden ${order.status === 'cancelled' ? 'opacity-75' : ''}`}>
            {/* Store Header */}
            <div className="p-4 border-b border-gray-100 dark:border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Icon name="storefront" size={20} className="text-gray-500 dark:text-gray-400" filled />
                    <span className="font-bold text-sm text-gray-900 dark:text-white">{order.storeName}</span>
                    {order.storeVerified && (
                        <Icon name="verified" size={16} className="text-primary" />
                    )}
                    <Icon name="chevron_right" size={16} className="text-gray-400" />
                </div>
                <span className={`text-xs font-bold uppercase tracking-wide ${getStatusColor()}`}>
                    {order.statusLabel}
                </span>
            </div>

            {/* Products */}
            {order.products.map((product, index) => (
                <div key={product.id} className={`p-4 flex gap-3 ${index > 0 ? 'border-t border-dashed border-gray-100 dark:border-white/5' : ''}`}>
                    <div
                        className="w-20 h-20 shrink-0 bg-gray-100 dark:bg-gray-800 rounded-lg bg-cover bg-center"
                        style={{ backgroundImage: `url('${product.image}')` }}
                    />
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                            <h3 className="text-sm font-medium text-gray-900 dark:text-white leading-tight line-clamp-2 mb-1">
                                {product.name}
                            </h3>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/5 px-1.5 py-0.5 rounded">
                                    {product.variant}
                                </span>
                                <span className="text-xs text-gray-500 dark:text-gray-400">x{product.quantity}</span>
                            </div>
                        </div>
                        <div className="flex items-end justify-between mt-2">
                            <div>
                                {product.originalPrice && (
                                    <p className="text-xs text-gray-400 line-through">
                                        Rp {product.originalPrice.toLocaleString('id-ID')}
                                    </p>
                                )}
                            </div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                                Rp {product.price.toLocaleString('id-ID')}
                            </p>
                        </div>
                    </div>
                </div>
            ))}

            {/* Shipping Info (for shipped orders) */}
            {order.status === 'shipped' && order.latestUpdate && (
                <div className="px-4 pb-4">
                    <div className="flex flex-col gap-2 p-3 bg-gray-50 dark:bg-[#181411] rounded-lg border border-gray-100 dark:border-gray-700">
                        <div className="flex items-center gap-2 text-primary">
                            <Icon name="local_shipping" size={16} />
                            <span className="text-xs font-bold uppercase">Update Terkini</span>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                            {order.latestUpdate}
                        </p>
                    </div>
                </div>
            )}

            {/* Estimated Arrival (for processing orders) */}
            {order.status === 'processing' && order.estimatedArrival && (
                <div className="px-4 pb-2 flex items-center gap-2">
                    <Icon name="local_shipping" size={18} className="text-primary" />
                    <p className="text-xs text-green-600 dark:text-green-400 font-medium">
                        Akan dikirim sebelum {order.estimatedArrival}
                    </p>
                </div>
            )}

            {/* Payment Deadline (for unpaid orders) */}
            {order.status === 'unpaid' && order.paymentDeadline && (
                <div className="px-4 pb-2 flex items-center gap-1 text-primary text-xs font-semibold">
                    <Icon name="schedule" size={16} />
                    <span>{order.paymentDeadline}</span>
                </div>
            )}

            {/* Return Deadline */}
            {variant === 'return' && order.returnDeadline && (
                <div className="px-4 pb-4">
                    <div className="flex items-start gap-2 bg-orange-50 dark:bg-orange-900/20 p-2.5 rounded-lg">
                        <Icon name="schedule" size={18} className="text-orange-600 dark:text-orange-400 mt-0.5" />
                        <div className="flex flex-col">
                            <span className="text-xs font-bold text-orange-700 dark:text-orange-300">
                                Batas Waktu: {order.returnDeadline}
                            </span>
                            <span className="text-[10px] text-orange-600/80 dark:text-orange-400/80">
                                Input resi sebelum tanggal ini agar tidak batal.
                            </span>
                        </div>
                    </div>
                </div>
            )}

            {/* Coin Incentive (for rate variant) */}
            {variant === 'rate' && (
                <div className="px-4 pb-4 flex justify-between items-center">
                    <div className="flex items-center gap-1 text-xs text-primary bg-primary/10 px-2 py-1 rounded-md">
                        <Icon name="monetization_on" size={14} filled />
                        <span className="font-medium">Dapatkan 50 Koin</span>
                    </div>
                    <button className="bg-primary hover:bg-primary/90 text-white text-sm font-semibold px-6 py-2 rounded-lg transition-colors shadow-sm">
                        Beri Nilai
                    </button>
                </div>
            )}

            {/* Footer */}
            {showActions && variant === 'default' && (
                <div className="p-4 border-t border-gray-100 dark:border-white/5">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            Total Pesanan ({order.products.length} Produk):
                        </span>
                        <span className="text-base font-bold text-primary">
                            Rp {order.totalPrice.toLocaleString('id-ID')}
                        </span>
                    </div>
                    <div className="flex items-center justify-end gap-3">
                        {order.status === 'unpaid' && (
                            <>
                                <button
                                    onClick={() => alert('Pesanan akan dibatalkan')}
                                    className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                                >
                                    Batalkan
                                </button>
                                <button
                                    onClick={() => alert('Navigasi ke halaman pembayaran...')}
                                    className="px-6 py-2 text-sm font-bold text-white bg-primary rounded-lg shadow-sm hover:bg-orange-600 transition-colors"
                                >
                                    Bayar Sekarang
                                </button>
                            </>
                        )}
                        {order.status === 'processing' && (
                            <>
                                <button
                                    onClick={() => alert('Membuka chat dengan penjual...')}
                                    className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                                >
                                    Hubungi Penjual
                                </button>
                                <button
                                    onClick={() => alert('Detail pesanan belum tersedia')}
                                    className="px-4 py-2 text-sm font-bold text-white bg-primary rounded-lg shadow-sm hover:bg-orange-600 transition-colors"
                                >
                                    Rincian Pesanan
                                </button>
                            </>
                        )}
                        {order.status === 'shipped' && (
                            <div className="flex items-center justify-between w-full gap-3">
                                <div className="flex flex-col gap-1 min-w-0 flex-1">
                                    <span className="text-gray-400 text-xs">No. Resi ({order.courier})</span>
                                    <div
                                        className="flex items-center gap-2 group cursor-pointer"
                                        onClick={() => alert('No. Resi disalin!')}
                                    >
                                        <span className="text-gray-900 dark:text-white font-mono font-medium truncate">
                                            {order.trackingNumber}
                                        </span>
                                        <Icon name="content_copy" size={14} className="text-gray-400 group-hover:text-primary transition-colors" />
                                    </div>
                                </div>
                                <Link
                                    to={`/orders/track/${orderSlug}`}
                                    className="shrink-0 bg-primary hover:bg-primary/90 text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-colors flex items-center gap-2"
                                >
                                    Lacak
                                </Link>
                                <Link
                                    to={`/orders/received/${orderSlug}`}
                                    className="shrink-0 bg-green-600 hover:bg-green-700 text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-colors flex items-center gap-2"
                                >
                                    Diterima
                                </Link>
                            </div>
                        )}
                        {order.status === 'completed' && order.needsRating && (
                            <>
                                <button
                                    onClick={() => alert('Produk ditambahkan ke keranjang')}
                                    className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                                >
                                    Beli Lagi
                                </button>
                                <Link
                                    to="/orders/rate"
                                    className="px-6 py-2 text-sm font-bold text-white bg-primary rounded-lg shadow-sm hover:bg-orange-600 transition-colors"
                                >
                                    Beri Nilai
                                </Link>
                            </>
                        )}
                        {order.status === 'return' && (
                            <>
                                <button
                                    onClick={() => alert('Pengajuan pembatalan retur dikirim')}
                                    className="flex-1 py-2 px-4 rounded-lg border border-gray-200 dark:border-white/10 text-gray-700 dark:text-white text-sm font-semibold hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                                >
                                    Batalkan
                                </button>
                                <button
                                    onClick={() => alert('Form input resi akan muncul')}
                                    className="flex-[2] py-2 px-4 rounded-lg bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                                >
                                    <Icon name="local_shipping" size={18} />
                                    Input Resi
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
