import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../../components/common/Icon';
import { MobileContainer } from '../../components/layout/MobileContainer';
import { orders } from '../../data/dataOrders';

export function RateOrderPage() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('pending');

    // Filter orders needing rating
    const pendingRates = orders.filter(o => o.status === 'completed' && o.needsRating);

    return (
        <MobileContainer>
            {/* Sticky Header */}
            <div className="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-200 dark:border-white/5">
                <div className="w-full md:max-w-4xl md:mx-auto">
                    <div className="flex items-center p-4 pb-0 pt-12 md:pt-4">
                        <button
                            onClick={() => navigate(-1)}
                            className="text-gray-900 dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors mr-2"
                        >
                            <Icon name="arrow_back" size={24} />
                        </button>
                        <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-tight flex-1">
                            Beri Nilai
                        </h2>
                    </div>

                    {/* Tabs */}
                    <div className="flex w-full mt-2">
                        <button
                            onClick={() => setActiveTab('pending')}
                            className={`flex flex-1 items-center justify-center border-b-[3px] py-3 text-sm font-bold transition-colors ${activeTab === 'pending'
                                ? 'border-b-primary text-primary'
                                : 'border-b-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white'
                                }`}
                        >
                            Belum Dinilai
                            {pendingRates.length > 0 && (
                                <span className="ml-1.5 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">
                                    {pendingRates.length}
                                </span>
                            )}
                        </button>
                        <button
                            onClick={() => setActiveTab('history')}
                            className={`flex flex-1 items-center justify-center border-b-[3px] py-3 text-sm font-bold transition-colors ${activeTab === 'history'
                                ? 'border-b-primary text-primary'
                                : 'border-b-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white'
                                }`}
                        >
                            Riwayat Nilai
                        </button>
                    </div>
                </div>
            </div>

            {/* Content Tab */}
            <div className="flex-1 overflow-y-auto pb-24">
                <div className="w-full md:max-w-4xl md:mx-auto p-4 flex flex-col gap-4">
                    {activeTab === 'pending' ? (
                        pendingRates.length > 0 ? (
                            pendingRates.map((order) => (
                                <div key={order.id} className="bg-white dark:bg-[#2c241d] rounded-xl shadow-sm border border-gray-100 dark:border-white/5 overflow-hidden">
                                    {/* Order Header */}
                                    <div className="flex items-center justify-between p-3 border-b border-gray-50 dark:border-white/5">
                                        <div className="flex items-center gap-2">
                                            <Icon name="storefront" size={16} className="text-gray-500" />
                                            <span className="text-xs font-bold text-gray-900 dark:text-white">{order.storeName}</span>
                                        </div>
                                        <span className="text-xs text-gray-500 dark:text-gray-400">{order.latestUpdate || order.createdAt}</span>
                                    </div>

                                    {/* Products */}
                                    {order.products.map((product) => (
                                        <div key={product.id} className="p-4 flex gap-4 border-b border-gray-50 dark:border-white/5 last:border-0">
                                            <div
                                                className="w-16 h-16 shrink-0 bg-gray-100 dark:bg-gray-800 rounded-lg bg-cover bg-center"
                                                style={{ backgroundImage: `url('${product.image}')` }}
                                            />
                                            <div className="flex-1 min-w-0">
                                                <h3 className="text-sm font-medium text-gray-900 dark:text-white leading-tight line-clamp-2 mb-1">
                                                    {product.name}
                                                </h3>
                                                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                                                    Variasi: {product.variant}
                                                </p>

                                                {/* Coin Reward Banner */}
                                                <div className="flex items-center gap-1.5 bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-100 dark:border-yellow-900/20 rounded px-2 py-1 w-fit mb-3">
                                                    <Icon name="monetization_on" size={14} className="text-yellow-500" />
                                                    <span className="text-[10px] font-bold text-yellow-700 dark:text-yellow-400">
                                                        Dapatkan 50 Koin
                                                    </span>
                                                </div>

                                                <div className="flex justify-end">
                                                    <button
                                                        onClick={() => alert(`Beri nilai untuk produk: ${product.name}`)}
                                                        className="px-6 py-1.5 rounded-lg bg-primary text-white text-sm font-bold shadow-sm hover:bg-orange-600 transition-colors"
                                                    >
                                                        Beri Nilai
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))
                        ) : (
                            <div className="flex flex-col items-center justify-center py-16 opacity-50">
                                <Icon name="star_border" size={48} className="mb-2" />
                                <p className="font-medium text-sm">Tidak ada pesanan yang perlu dinilai</p>
                            </div>
                        )
                    ) : (
                        <div className="flex flex-col items-center justify-center py-16 opacity-50">
                            <Icon name="history" size={48} className="mb-2" />
                            <p className="font-medium text-sm">Belum ada riwayat penilaian</p>
                            <p className="text-xs mt-1">Penilaian yang sudah Anda berikan akan muncul di sini</p>
                        </div>
                    )}
                </div>
            </div>
        </MobileContainer>
    );
}
