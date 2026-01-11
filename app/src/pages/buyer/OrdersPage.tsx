import { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Icon } from '../../components/common/Icon';
import { MobileContainer } from '../../components/layout/MobileContainer';
import { OrderTabs } from '../../components/order/OrderTabs';
import { OrderCard } from '../../components/order/OrderCard';
import { orders } from '../../data/dataOrders';
import type { OrderStatus } from '../../data/types';

type TabId = 'all' | 'unpaid' | 'processing' | 'shipped' | 'completed' | 'cancelled';

interface Tab {
    id: TabId;
    label: string;
    status?: OrderStatus | OrderStatus[];
}

export function OrdersPage() {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState('');

    const tabs: Tab[] = [
        { id: 'all', label: 'Semua' },
        { id: 'unpaid', label: 'Belum Bayar', status: 'unpaid' },
        { id: 'processing', label: 'Dikemas', status: 'processing' },
        { id: 'shipped', label: 'Dikirim', status: 'shipped' },
        { id: 'completed', label: 'Selesai', status: 'completed' },
        { id: 'cancelled', label: 'Dibatalkan', status: 'cancelled' },
    ];

    const initialTab = (searchParams.get('tab') as TabId) || 'all';
    const [activeTab, setActiveTab] = useState<TabId>(initialTab);

    useEffect(() => {
        const tabParam = searchParams.get('tab') as TabId;
        if (tabParam && tabs.some(t => t.id === tabParam)) {
            setActiveTab(tabParam);
        }
    }, [searchParams]);

    const handleTabChange = (tabId: string) => {
        setActiveTab(tabId as TabId);
        if (tabId === 'all') {
            setSearchParams({});
        } else {
            setSearchParams({ tab: tabId });
        }
    };

    const getFilteredOrders = () => {
        let filtered = orders;

        // Filter by tab
        const currentTab = tabs.find(t => t.id === activeTab);
        if (currentTab?.status) {
            const statusFilter = currentTab.status;
            if (Array.isArray(statusFilter)) {
                filtered = filtered.filter(o => statusFilter.includes(o.status));
            } else {
                filtered = filtered.filter(o => o.status === statusFilter);
            }
        }

        // Filter by search query
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(o =>
                o.storeName.toLowerCase().includes(query) ||
                o.products.some(p => p.name.toLowerCase().includes(query)) ||
                o.id.toLowerCase().includes(query)
            );
        }

        return filtered;
    };

    const filteredOrders = getFilteredOrders();
    const unpaidOrders = orders.filter(o => o.status === 'unpaid');
    const totalUnpaidAmount = unpaidOrders.reduce((sum, o) => sum + o.totalPrice, 0);

    return (
        <MobileContainer>
            {/* Top App Bar Group */}
            <header className="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-gray-200 dark:border-white/10">
                <div className="w-full md:max-w-4xl md:mx-auto">
                    {/* Header Nav */}
                    <div className="flex items-center justify-between px-4 h-14 pt-8 md:pt-0">
                        <button
                            onClick={() => navigate(-1)}
                            className="text-gray-900 dark:text-white p-2 -ml-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                        >
                            <Icon name="arrow_back" />
                        </button>
                        <h1 className="text-lg font-bold text-gray-900 dark:text-white">Pesanan Saya</h1>
                        <div className="flex items-center gap-2">
                            <Link to="/chat" className="text-gray-900 dark:text-white p-2 -mr-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                                <Icon name="chat" />
                            </Link>
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className="px-4 pb-3 mt-5">
                        <div className="flex w-full items-center rounded-lg bg-white dark:bg-[#2c241d]/50 border border-gray-200 dark:border-white/10 overflow-hidden h-10">
                            <div className="flex items-center justify-center pl-3 text-gray-500 dark:text-gray-400">
                                <Icon name="search" size={20} />
                            </div>
                            <input
                                className="w-full bg-transparent border-none focus:ring-0 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 px-3 h-full"
                                placeholder="Cari pesanan..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Tabs */}
                    <OrderTabs
                        tabs={tabs.map(t => ({
                            id: t.id,
                            label: t.label,
                            count: t.status
                                ? orders.filter(o =>
                                    Array.isArray(t.status)
                                        ? t.status.includes(o.status)
                                        : o.status === t.status
                                ).length
                                : undefined,
                        }))}
                        activeTab={activeTab}
                        onTabChange={handleTabChange}
                    />
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 p-4 bg-background-light dark:bg-background-dark pb-24">
                <div className="w-full md:max-w-4xl md:mx-auto flex flex-col gap-4">
                    {/* Info Banner for Unpaid */}
                    {activeTab === 'unpaid' && unpaidOrders.length > 0 && (
                        <div className="flex items-start gap-3 p-3 rounded-lg bg-orange-100 dark:bg-primary/10 border border-orange-200 dark:border-primary/20">
                            <Icon name="info" className="text-primary text-xl mt-0.5" />
                            <p className="text-sm text-gray-800 dark:text-orange-100 leading-snug">
                                Mohon segera lakukan pembayaran. Pesanan akan dibatalkan otomatis jika melewati batas waktu.
                            </p>
                        </div>
                    )}

                    {/* Info Banner for Processing */}
                    {activeTab === 'processing' && filteredOrders.length > 0 && (
                        <div className="flex items-start gap-3 bg-primary/10 dark:bg-primary/20 p-3 rounded-lg border border-primary/20">
                            <Icon name="info" className="text-primary text-sm mt-0.5" />
                            <p className="text-xs text-gray-700 dark:text-gray-200 leading-relaxed">
                                Mohon bersabar, penjual sedang memproses pesanan Anda. Hubungi penjual jika pesanan belum dikirim dalam 2 hari.
                            </p>
                        </div>
                    )}

                    {/* Order Cards */}
                    {filteredOrders.length > 0 ? (
                        filteredOrders.map((order) => (
                            <OrderCard key={order.id} order={order} />
                        ))
                    ) : (
                        <div className="flex flex-col items-center justify-center py-16 text-center">
                            <Icon name="inbox" size={64} className="text-gray-300 dark:text-gray-600 mb-4" />
                            <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-2">
                                Tidak Ada Pesanan
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xs">
                                {searchQuery
                                    ? 'Tidak ditemukan pesanan yang sesuai dengan pencarian Anda.'
                                    : 'Belum ada pesanan di kategori ini.'}
                            </p>
                            <Link
                                to="/"
                                className="mt-6 px-6 py-2.5 bg-primary text-white font-bold rounded-lg hover:bg-orange-600 transition-colors"
                            >
                                Mulai Belanja
                            </Link>
                        </div>
                    )}

                    {/* End of List Indicator */}
                    {filteredOrders.length > 0 && (
                        <div className="flex flex-col items-center justify-center py-8 opacity-50">
                            <div className="size-2 rounded-full bg-gray-300 dark:bg-gray-700 mb-6" />
                            <p className="text-xs text-gray-400 dark:text-gray-600">Tidak ada pesanan lain</p>
                        </div>
                    )}
                </div>
            </main>

            {/* Bottom Sticky Summary (for unpaid orders) */}
            {activeTab === 'unpaid' && unpaidOrders.length > 1 && (
                <div className="fixed bottom-0 left-0 right-0 z-40">
                    <div className="w-full md:max-w-4xl mx-auto bg-white dark:bg-[#2c241d] border-t border-gray-200 dark:border-white/10 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-500 dark:text-gray-400">Total tagihan aktif</span>
                                <span className="text-lg font-bold text-primary">
                                    Rp {totalUnpaidAmount.toLocaleString('id-ID')}
                                </span>
                            </div>
                            <button className="px-6 py-3 text-sm font-bold text-white bg-primary rounded-lg shadow-lg shadow-primary/20 hover:bg-orange-600 transition-colors flex items-center gap-2">
                                Bayar Semua
                                <span className="bg-white/20 px-1.5 py-0.5 rounded text-xs">{unpaidOrders.length}</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </MobileContainer>
    );
}
