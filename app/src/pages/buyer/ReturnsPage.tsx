import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../../components/common/Icon';
import { MobileContainer } from '../../components/layout/MobileContainer';
import { orders } from '../../data/orderData';

export function ReturnsPage() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const tabs = [
        { id: 'all', label: 'Semua' },
        { id: 'processing', label: 'Diproses' },
        { id: 'completed', label: 'Selesai' },
        { id: 'cancelled', label: 'Dibatalkan' },
    ];

    // Filter return orders
    const returnOrders = orders.filter(o => o.status === 'return');

    const getStatusBadge = (statusLabel: string) => {
        switch (statusLabel) {
            case 'Kirim Produk':
                return <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">Kirim Produk</span>;
            case 'Menunggu Respon':
                return <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">Menunggu Respon</span>;
            case 'Selesai':
                return (
                    <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                        <Icon name="check_circle" size={14} />
                        <span className="text-xs font-semibold">Selesai</span>
                    </div>
                );
            default:
                return <span className="text-xs font-semibold text-gray-500">{statusLabel}</span>;
        }
    };

    return (
        <MobileContainer>
            {/* Top App Bar */}
            <div className="sticky top-0 z-50 flex flex-col bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-200 dark:border-white/5">
                <div className="w-full md:max-w-4xl md:mx-auto">
                    <div className="flex items-center p-4 pb-2 pt-12 md:pt-4 justify-between">
                        <button
                            onClick={() => navigate(-1)}
                            className="text-gray-900 dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                        >
                            <Icon name="arrow_back" size={24} />
                        </button>
                        <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">
                            Pesanan Pengembalian
                        </h2>
                    </div>

                    {/* Search Bar */}
                    <div className="px-4 py-3 bg-background-light dark:bg-background-dark">
                        <div className="flex w-full flex-1 items-stretch rounded-lg h-11 overflow-hidden bg-white dark:bg-[#2c241d] border border-gray-200 dark:border-transparent shadow-sm focus-within:ring-2 focus-within:ring-primary focus-within:border-transparent transition-all">
                            <div className="text-gray-500 dark:text-gray-400 flex items-center justify-center pl-4 pr-2">
                                <Icon name="search" size={20} />
                            </div>
                            <input
                                className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-none bg-transparent text-gray-900 dark:text-white focus:outline-0 focus:ring-0 border-none h-full placeholder:text-gray-400 px-0 text-sm font-medium leading-normal"
                                placeholder="Cari berdasarkan No. Pesanan atau Produk"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="pt-1">
                        <div className="flex border-b border-gray-200 dark:border-white/10 px-2 justify-between overflow-x-auto hide-scrollbar">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex min-w-[80px] flex-col items-center justify-center border-b-[3px] pb-3 pt-2 px-2 flex-1 transition-colors ${activeTab === tab.id
                                            ? 'border-b-primary text-primary font-bold'
                                            : 'border-b-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white'
                                        }`}
                                >
                                    <span className="text-sm leading-normal tracking-wide whitespace-nowrap">{tab.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Feed */}
            <div className="flex-1 overflow-y-auto pb-24">
                <div className="w-full md:max-w-4xl md:mx-auto p-4 flex flex-col gap-4">
                    {/* Information Banner */}
                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg p-3 flex items-start gap-3">
                        <Icon name="info" className="text-blue-600 dark:text-blue-400 text-xl mt-0.5" />
                        <p className="text-xs text-blue-800 dark:text-blue-200 leading-relaxed">
                            Pastikan Anda mengirimkan produk sebelum batas waktu yang ditentukan untuk menghindari pembatalan otomatis.
                        </p>
                    </div>

                    {/* Return Cards */}
                    {returnOrders.length > 0 ? (
                        returnOrders.map((order) => (
                            <div
                                key={order.id}
                                className="flex flex-col rounded-xl bg-white dark:bg-[#2c241d] shadow-sm border border-gray-100 dark:border-white/5 overflow-hidden"
                            >
                                {/* Header */}
                                <div className="flex items-center justify-between p-4 pb-2 border-b border-gray-50 dark:border-white/5">
                                    <div className="flex items-center gap-2">
                                        <div className="bg-gray-100 dark:bg-white/5 p-1 rounded-full">
                                            <Icon name="storefront" size={14} />
                                        </div>
                                        <span className="text-sm font-bold text-gray-900 dark:text-white">
                                            {order.storeName}
                                        </span>
                                        {order.storeVerified && (
                                            <Icon name="verified" size={14} className="text-primary" />
                                        )}
                                    </div>
                                    {getStatusBadge(order.statusLabel)}
                                </div>

                                {/* Product */}
                                {order.products.map((product) => (
                                    <div key={product.id} className="p-4 flex gap-4">
                                        <div className="relative w-20 h-20 shrink-0">
                                            <div
                                                className="w-full h-full bg-center bg-no-repeat bg-cover rounded-lg border border-gray-100 dark:border-white/5"
                                                style={{ backgroundImage: `url('${product.image}')` }}
                                            />
                                        </div>
                                        <div className="flex flex-col flex-1 min-w-0">
                                            <p className="text-gray-900 dark:text-white text-sm font-bold leading-tight line-clamp-2 mb-1">
                                                {product.name}
                                            </p>
                                            <p className="text-gray-500 dark:text-gray-400 text-xs font-medium mb-2">
                                                Variasi: {product.variant} • {product.quantity}x
                                            </p>
                                            <div className="mt-auto">
                                                <p className="text-xs text-gray-500 dark:text-gray-400">Pengembalian Dana:</p>
                                                <p className="text-primary text-base font-bold">
                                                    Rp {(order.refundAmount || product.price).toLocaleString('id-ID')}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {/* Footer Actions */}
                                <div className="p-4 pt-0 flex flex-col gap-3">
                                    {/* Deadline Warning */}
                                    {order.returnDeadline && (
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
                                    )}

                                    {/* Action Buttons */}
                                    {order.statusLabel === 'Kirim Produk' && (
                                        <div className="flex gap-3 justify-end mt-1">
                                            <button
                                                onClick={() => alert('Fitur batalkan pengembalian akan segera hadir')}
                                                className="flex-1 py-2 px-4 rounded-lg border border-gray-200 dark:border-white/10 text-gray-700 dark:text-white text-sm font-semibold hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                                            >
                                                Batalkan
                                            </button>
                                            <button
                                                onClick={() => alert('Silakan input nomor resi pengiriman Anda')}
                                                className="flex-[2] py-2 px-4 rounded-lg bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                                            >
                                                <Icon name="local_shipping" size={18} />
                                                Input Resi
                                            </button>
                                        </div>
                                    )}

                                    {order.statusLabel === 'Menunggu Respon' && (
                                        <div className="flex gap-3 justify-end">
                                            <button
                                                onClick={() => alert('Detail pengajuan pengembalian')}
                                                className="flex-1 py-2 px-4 rounded-lg border border-gray-200 dark:border-white/10 text-gray-700 dark:text-white text-sm font-semibold hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                                            >
                                                Lihat Detail
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="flex flex-col items-center justify-center py-16 text-center">
                            <Icon name="assignment_return" size={64} className="text-gray-300 dark:text-gray-600 mb-4" />
                            <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-2">
                                Tidak Ada Pengembalian
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xs">
                                Belum ada pengajuan pengembalian barang.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </MobileContainer>
    );
}
