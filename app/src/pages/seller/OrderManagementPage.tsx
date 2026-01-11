import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../../components/common/Icon';
import { MobileContainer } from '../../components/layout/MobileContainer';
import { sellerOrders, sellerOrderTabs, courierFilters } from '../../data/dataSellerOrders';
import type { SellerOrder as Order } from '../../data/types';

export function OrderManagementPage() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('all');
    const [activeCourier, setActiveCourier] = useState('Semua');
    const [searchQuery, setSearchQuery] = useState('');
    const [orders, setOrders] = useState(sellerOrders);
    const [processingOrder, setProcessingOrder] = useState<string | null>(null);
    const [showBulkActions, setShowBulkActions] = useState(false);

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(price);
    };

    const selectedCount = orders.filter(o => o.selected).length;

    const toggleSelect = (id: string) => {
        setOrders(prev => prev.map(o =>
            o.id === id ? { ...o, selected: !o.selected } : o
        ));
    };

    const toggleSelectAll = () => {
        const allSelected = filteredOrders.every(o => o.selected);
        const filteredIds = filteredOrders.map(o => o.id);
        setOrders(prev => prev.map(o =>
            filteredIds.includes(o.id) ? { ...o, selected: !allSelected } : o
        ));
    };

    const handleProcessOrder = (orderId: string) => {
        setProcessingOrder(orderId);
        setTimeout(() => {
            setOrders(prev => prev.map(o => {
                if (o.id === orderId) {
                    if (o.status === 'pending') {
                        return { ...o, status: 'ready' as const, statusLabel: 'Siap Kirim' };
                    } else if (o.status === 'ready') {
                        return { ...o, status: 'shipped' as const, statusLabel: 'Dalam Pengiriman', trackingNumber: `TRK${Date.now()}` };
                    }
                }
                return o;
            }));
            setProcessingOrder(null);
        }, 1000);
    };

    const handleContactBuyer = (buyerName: string) => {
        navigate(`/seller/chat/${encodeURIComponent(buyerName)}`);
    };

    const handleBulkPrint = () => {
        const selectedOrders = orders.filter(o => o.selected);
        if (selectedOrders.length > 0) {
            window.print();
        }
    };

    const handleBulkProcess = () => {
        const selectedOrders = orders.filter(o => o.selected && (o.status === 'pending' || o.status === 'ready'));
        selectedOrders.forEach(order => {
            handleProcessOrder(order.id);
        });
    };

    const filteredOrders = orders.filter(o => {
        const matchesTab = activeTab === 'all' || o.status === activeTab;
        const matchesCourier = activeCourier === 'Semua' || o.courier === activeCourier;
        const matchesSearch = searchQuery === '' ||
            o.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
            o.buyerName.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesTab && matchesCourier && matchesSearch;
    });

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'pending': return 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20';
            case 'ready': return 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20';
            case 'shipped': return 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20';
            case 'completed': return 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20';
            case 'cancelled': return 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20';
            case 'returned': return 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20';
            default: return 'bg-gray-500/10 text-gray-600 dark:text-gray-400 border-gray-500/20';
        }
    };

    const getActionButton = (order: Order) => {
        switch (order.status) {
            case 'pending':
                return (
                    <button
                        onClick={() => handleProcessOrder(order.id)}
                        disabled={processingOrder === order.id}
                        className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-bold shadow-sm flex items-center gap-1 hover:bg-primary/90 transition-colors disabled:opacity-70"
                    >
                        {processingOrder === order.id ? (
                            <>
                                <Icon name="sync" size={18} className="animate-spin" />
                                Memproses...
                            </>
                        ) : (
                            <>
                                <Icon name="check" size={18} />
                                Terima Pesanan
                            </>
                        )}
                    </button>
                );
            case 'ready':
                return (
                    <button
                        onClick={() => handleProcessOrder(order.id)}
                        disabled={processingOrder === order.id}
                        className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-bold shadow-sm flex items-center gap-1 hover:bg-primary/90 transition-colors disabled:opacity-70"
                    >
                        {processingOrder === order.id ? (
                            <>
                                <Icon name="sync" size={18} className="animate-spin" />
                                Memproses...
                            </>
                        ) : (
                            <>
                                <Icon name="local_shipping" size={18} />
                                Kirim Sekarang
                            </>
                        )}
                    </button>
                );
            case 'shipped':
                return (
                    <button
                        onClick={() => navigate(`/orders/track/${order.id}`)}
                        className="px-4 py-2 rounded-lg bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 text-sm font-bold flex items-center gap-1 hover:bg-purple-200 dark:hover:bg-purple-900/30 transition-colors"
                    >
                        <Icon name="location_on" size={18} />
                        Lacak
                    </button>
                );
            case 'completed':
                return (
                    <button
                        onClick={() => navigate('/seller/statistics')}
                        className="px-4 py-2 rounded-lg bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-sm font-bold flex items-center gap-1 hover:bg-green-200 dark:hover:bg-green-900/30 transition-colors"
                    >
                        <Icon name="visibility" size={18} />
                        Detail
                    </button>
                );
            default:
                return null;
        }
    };

    return (
        <MobileContainer className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col">
            {/* Sticky Header */}
            <div className="sticky top-0 z-20 bg-surface-light dark:bg-surface-dark shadow-sm">
                {/* Top App Bar */}
                <div className="flex items-center justify-between p-4 pb-2 max-w-6xl mx-auto w-full">
                    <button
                        onClick={() => navigate('/seller-center')}
                        className="flex size-10 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                    >
                        <Icon name="arrow_back" size={24} className="text-text-main dark:text-white" />
                    </button>
                    <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center text-text-main dark:text-white">
                        Kelola Pesanan
                    </h2>
                    <div className="flex items-center justify-end gap-2">
                        <button
                            onClick={() => setShowBulkActions(!showBulkActions)}
                            className={`flex size-10 items-center justify-center rounded-full transition-colors ${showBulkActions ? 'bg-primary text-white' : 'hover:bg-black/5 dark:hover:bg-white/10 text-text-main dark:text-white'}`}
                        >
                            <Icon name="checklist" size={24} />
                        </button>
                        <button
                            onClick={() => navigate('/seller/chat')}
                            className="flex size-10 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-text-main dark:text-white"
                        >
                            <Icon name="chat" size={24} />
                        </button>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="px-4 py-2 max-w-6xl mx-auto w-full">
                    <div className="flex w-full items-center gap-2">
                        <div className="flex flex-1 items-center rounded-lg h-11 bg-[#f5f2f0] dark:bg-[#3a322b] overflow-hidden">
                            <div className="flex items-center justify-center pl-3 pr-2">
                                <Icon name="search" size={22} className="text-text-secondary dark:text-white/50" />
                            </div>
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="flex w-full min-w-0 flex-1 resize-none bg-transparent border-none focus:outline-0 focus:ring-0 text-text-main dark:text-white placeholder:text-text-secondary dark:placeholder:text-white/50 text-sm font-normal leading-normal h-full"
                                placeholder="Cari No. Pesanan atau Nama Pembeli"
                            />
                        </div>
                    </div>
                </div>

                {/* Tab Navigation */}
                <div className="flex gap-2 px-4 py-2 overflow-x-auto no-scrollbar max-w-6xl mx-auto w-full">
                    {sellerOrderTabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 transition-all active:scale-95 ${activeTab === tab.id
                                ? 'bg-primary shadow-sm'
                                : 'bg-[#f5f2f0] dark:bg-[#3a322b] hover:bg-gray-200 dark:hover:bg-white/10'
                                }`}
                        >
                            <p className={`text-sm font-semibold leading-normal whitespace-nowrap ${activeTab === tab.id
                                ? 'text-white'
                                : 'text-text-secondary dark:text-white/60'
                                }`}>
                                {tab.label}
                                {tab.count > 0 && <span className="ml-1">({tab.count})</span>}
                            </p>
                        </button>
                    ))}
                </div>

                {/* Courier Filter */}
                <div className="flex gap-2 px-4 py-2 overflow-x-auto no-scrollbar border-b border-gray-100 dark:border-white/5 max-w-6xl mx-auto w-full">
                    {courierFilters.map((courier) => (
                        <button
                            key={courier}
                            onClick={() => setActiveCourier(courier)}
                            className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 transition-colors border ${activeCourier === courier
                                ? 'border-primary bg-primary/10 text-primary font-bold'
                                : 'border-gray-200 dark:border-white/10 text-text-secondary dark:text-white/60 hover:border-primary/50'
                                }`}
                        >
                            <p className="text-xs font-medium leading-normal whitespace-nowrap">
                                {courier}
                            </p>
                        </button>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto pb-32">
                {/* Stats Bar */}
                <div className="px-4 py-3 flex items-center justify-between max-w-6xl mx-auto w-full">
                    <p className="text-text-secondary dark:text-white/60 text-xs font-normal">
                        Menampilkan {filteredOrders.length} pesanan
                    </p>
                    {showBulkActions && selectedCount > 0 && (
                        <p className="text-primary text-xs font-bold">
                            {selectedCount} dipilih
                        </p>
                    )}
                </div>

                {/* Order Cards - Grid on desktop */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 max-w-6xl mx-auto w-full">
                    {filteredOrders.map((order) => (
                        <div
                            key={order.id}
                            className={`flex flex-col gap-0 rounded-xl bg-surface-light dark:bg-surface-dark shadow-[0_2px_8px_rgba(0,0,0,0.05)] overflow-hidden border transition-colors ${order.selected ? 'border-primary' : 'border-transparent dark:border-white/5'
                                }`}
                        >
                            {/* Card Header */}
                            <div className="flex items-center justify-between p-3 border-b border-gray-50 dark:border-white/5">
                                <div className="flex items-center gap-2">
                                    {showBulkActions && (
                                        <input
                                            type="checkbox"
                                            checked={order.selected || false}
                                            onChange={() => toggleSelect(order.id)}
                                            className="size-4 rounded border-gray-300 text-primary focus:ring-primary"
                                        />
                                    )}
                                    <div
                                        className="w-6 h-6 rounded-full bg-gray-200 bg-cover bg-center"
                                        style={{ backgroundImage: `url('${order.buyerAvatar}')` }}
                                    />
                                    <span className="text-sm font-bold text-text-main dark:text-white">
                                        {order.buyerName}
                                    </span>
                                    <span className="text-xs text-text-secondary dark:text-white/50">
                                        #{order.id}
                                    </span>
                                    {order.isCOD && (
                                        <span className="px-1.5 py-0.5 rounded bg-orange-500/10 text-[10px] font-bold text-orange-600 dark:text-orange-400 uppercase">
                                            COD
                                        </span>
                                    )}
                                </div>
                                <span className={`text-xs font-semibold px-2 py-1 rounded border ${getStatusColor(order.status)}`}>
                                    {order.statusLabel}
                                </span>
                            </div>

                            {/* Product Section */}
                            {order.items.map((item, idx) => (
                                <div
                                    key={idx}
                                    className={`flex gap-3 p-3 bg-gray-50/50 dark:bg-white/5 ${idx < order.items.length - 1 ? 'border-b border-dashed border-gray-200 dark:border-gray-700' : ''
                                        }`}
                                >
                                    <div
                                        className="w-16 h-16 shrink-0 bg-gray-200 rounded-lg bg-cover bg-center"
                                        style={{ backgroundImage: `url('${item.image}')` }}
                                    />
                                    <div className="flex flex-col flex-1 justify-between py-0.5">
                                        <div>
                                            <p className="text-text-main dark:text-white text-sm font-medium leading-tight line-clamp-2">
                                                {item.name}
                                            </p>
                                            <p className="text-text-secondary dark:text-white/60 text-xs mt-1">
                                                Variasi: {item.variant}
                                            </p>
                                        </div>
                                        <div className="flex items-end justify-between mt-1">
                                            <span className="text-xs text-text-secondary dark:text-white/60">
                                                x {item.quantity}
                                            </span>
                                            <span className="text-sm font-medium text-text-main dark:text-white">
                                                {formatPrice(item.price)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Summary & Logistics */}
                            <div className="p-3 border-b border-gray-50 dark:border-white/5">
                                <div className="flex justify-between items-center mb-2">
                                    <div className="flex items-center gap-1 text-xs text-text-secondary dark:text-white/60">
                                        <Icon name="local_shipping" size={16} />
                                        <span>{order.courier} - {order.courierType}</span>
                                        {order.trackingNumber && (
                                            <span className="ml-2 text-primary font-medium">
                                                {order.trackingNumber}
                                            </span>
                                        )}
                                    </div>
                                    <div className="text-right">
                                        <span className="text-xs text-text-secondary dark:text-white/60">Total: </span>
                                        <span className="text-base font-bold text-primary">{formatPrice(order.totalAmount)}</span>
                                    </div>
                                </div>
                                {order.isUrgent && (order.status === 'pending' || order.status === 'ready') && (
                                    <div className="flex items-center gap-1 bg-orange-50 dark:bg-orange-900/10 p-2 rounded border border-orange-100 dark:border-orange-900/20">
                                        <Icon name="alarm" size={16} className="text-primary" />
                                        <span className="text-xs text-primary font-medium">Kirim sebelum {order.deadline}</span>
                                    </div>
                                )}
                            </div>

                            {/* Action Footer */}
                            <div className="p-3 flex items-center justify-end gap-3">
                                <button
                                    onClick={() => handleContactBuyer(order.buyerName)}
                                    className="px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 text-text-main dark:text-white text-sm font-medium bg-transparent hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                                >
                                    Hubungi
                                </button>
                                {getActionButton(order)}
                            </div>
                        </div>
                    ))}
                </div>

                {filteredOrders.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-16 px-4 max-w-6xl mx-auto">
                        <Icon name="inbox" size={64} className="text-gray-300 dark:text-gray-600 mb-4" />
                        <p className="text-text-secondary dark:text-gray-400 text-center">
                            Tidak ada pesanan untuk ditampilkan
                        </p>
                    </div>
                )}
            </div>

            {/* Bulk Action Bottom Bar */}
            {showBulkActions && (
                <div className="fixed bottom-16 left-0 right-0 bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-white/10 p-4 z-20 shadow-lg">
                    <div className="flex items-center justify-between gap-4 max-w-6xl mx-auto">
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={filteredOrders.length > 0 && filteredOrders.every(o => o.selected)}
                                onChange={toggleSelectAll}
                                className="size-5 rounded border-gray-300 text-primary focus:ring-primary"
                            />
                            <span className="text-sm font-bold text-text-main dark:text-white">
                                Pilih Semua
                            </span>
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={handleBulkPrint}
                                disabled={selectedCount === 0}
                                className="px-4 py-2 rounded-lg border border-gray-200 dark:border-white/10 text-text-main dark:text-white text-sm font-bold flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors disabled:opacity-50"
                            >
                                <Icon name="print" size={18} />
                                Cetak
                            </button>
                            <button
                                onClick={handleBulkProcess}
                                disabled={selectedCount === 0}
                                className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-bold flex items-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-50"
                            >
                                <Icon name="send" size={18} />
                                Proses
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Bottom Navigation Bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-white/10 pb-5 pt-3 px-6 z-30">
                <div className="flex items-center justify-between max-w-6xl mx-auto">
                    <button onClick={() => navigate('/seller-center')} className="flex flex-col items-center gap-1 text-text-secondary dark:text-white/60 hover:text-primary cursor-pointer transition-colors">
                        <Icon name="home" size={26} />
                        <span className="text-[10px] font-medium">Beranda</span>
                    </button>
                    <button onClick={() => navigate('/seller/products')} className="flex flex-col items-center gap-1 text-text-secondary dark:text-white/60 hover:text-primary cursor-pointer transition-colors">
                        <Icon name="inventory_2" size={26} />
                        <span className="text-[10px] font-medium">Produk</span>
                    </button>
                    <div className="flex flex-col items-center gap-1 text-primary cursor-pointer relative">
                        <Icon name="receipt_long" size={26} filled />
                        <span className="text-[10px] font-bold">Pesanan</span>
                        <div className="absolute -top-1 right-0 w-4 h-4 bg-primary rounded-full flex items-center justify-center text-[8px] text-white font-bold">2</div>
                    </div>
                    <button onClick={() => navigate('/seller/finance')} className="flex flex-col items-center gap-1 text-text-secondary dark:text-white/60 hover:text-primary cursor-pointer transition-colors">
                        <Icon name="account_balance_wallet" size={26} />
                        <span className="text-[10px] font-medium">Keuangan</span>
                    </button>
                    <button onClick={() => navigate('/profile')} className="flex flex-col items-center gap-1 text-text-secondary dark:text-white/60 hover:text-primary cursor-pointer transition-colors">
                        <Icon name="person" size={26} />
                        <span className="text-[10px] font-medium">Saya</span>
                    </button>
                </div>
            </div>
        </MobileContainer>
    );
}
