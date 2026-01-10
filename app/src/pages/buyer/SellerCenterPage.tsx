import { useNavigate } from 'react-router-dom';
import { Icon } from '../../components/common/Icon';
import { MobileContainer } from '../../components/layout/MobileContainer';

interface FeatureItem {
    id: string;
    name: string;
    icon: string;
    path: string;
    color: string;
    bgColor: string;
    count?: number;
}

const features: FeatureItem[] = [
    {
        id: 'products',
        name: 'Produk Saya',
        icon: 'inventory_2',
        path: '/seller/products',
        color: 'text-blue-600 dark:text-blue-400',
        bgColor: 'bg-blue-50 dark:bg-blue-900/20',
        count: 16
    },
    {
        id: 'orders',
        name: 'Pesanan Masuk',
        icon: 'receipt_long',
        path: '/seller/orders',
        color: 'text-orange-600 dark:text-orange-400',
        bgColor: 'bg-orange-50 dark:bg-orange-900/20',
        count: 3
    },
    {
        id: 'shipping',
        name: 'Pengiriman',
        icon: 'local_shipping',
        path: '/seller/shipping',
        color: 'text-green-600 dark:text-green-400',
        bgColor: 'bg-green-50 dark:bg-green-900/20',
        count: 3
    },
    {
        id: 'finance',
        name: 'Keuangan',
        icon: 'account_balance_wallet',
        path: '/seller/finance',
        color: 'text-purple-600 dark:text-purple-400',
        bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
        id: 'ads',
        name: 'Iklan',
        icon: 'campaign',
        path: '/seller/ads',
        color: 'text-pink-600 dark:text-pink-400',
        bgColor: 'bg-pink-50 dark:bg-pink-900/20'
    },
    {
        id: 'statistics',
        name: 'Statistik',
        icon: 'bar_chart',
        path: '/seller/statistics',
        color: 'text-teal-600 dark:text-teal-400',
        bgColor: 'bg-teal-50 dark:bg-teal-900/20'
    },
    {
        id: 'live',
        name: 'Live Streaming',
        icon: 'videocam',
        path: '/seller/live',
        color: 'text-red-600 dark:text-red-400',
        bgColor: 'bg-red-50 dark:bg-red-900/20'
    }
];

export function SellerCenterPage() {
    const navigate = useNavigate();

    return (
        <MobileContainer className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col">
            {/* Header */}
            <div className="sticky top-0 z-50 bg-surface-light dark:bg-surface-dark shadow-sm">
                <div className="flex items-center p-4 justify-between">
                    <button
                        onClick={() => navigate('/profile')}
                        className="flex size-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-text-main dark:text-white"
                    >
                        <Icon name="arrow_back" size={24} />
                    </button>
                    <h2 className="text-lg font-bold text-text-main dark:text-white">Pusat Penjualan</h2>
                    <button className="flex size-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-text-main dark:text-white">
                        <Icon name="settings" size={24} />
                    </button>
                </div>
            </div>

            {/* Shop Info Card */}
            <div className="p-4">
                <div className="bg-gradient-to-r from-primary to-orange-500 rounded-2xl p-5 text-white relative overflow-hidden">
                    <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full" />
                    <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-white/5 rounded-full" />
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                                <Icon name="store" size={28} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">Toko Fashion Official</h3>
                                <p className="text-sm text-white/80">Premium Seller</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="text-center">
                                <p className="text-2xl font-bold">128</p>
                                <p className="text-xs text-white/80">Produk</p>
                            </div>
                            <div className="text-center border-x border-white/20">
                                <p className="text-2xl font-bold">4.9</p>
                                <p className="text-xs text-white/80">Rating</p>
                            </div>
                            <div className="text-center">
                                <p className="text-2xl font-bold">2.5k</p>
                                <p className="text-xs text-white/80">Pengikut</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="px-4 pb-4">
                <div className="grid grid-cols-2 gap-3">
                    <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-4 border border-gray-100 dark:border-white/5">
                        <div className="flex items-center gap-2 mb-2">
                            <Icon name="payments" size={20} className="text-green-600" />
                            <span className="text-xs text-text-secondary dark:text-gray-400 font-medium">Pendapatan Hari Ini</span>
                        </div>
                        <p className="text-xl font-bold text-text-main dark:text-white">Rp 2.5jt</p>
                        <p className="text-xs text-green-600 font-medium mt-1">+12% dari kemarin</p>
                    </div>
                    <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-4 border border-gray-100 dark:border-white/5">
                        <div className="flex items-center gap-2 mb-2">
                            <Icon name="shopping_cart" size={20} className="text-primary" />
                            <span className="text-xs text-text-secondary dark:text-gray-400 font-medium">Pesanan Baru</span>
                        </div>
                        <p className="text-xl font-bold text-text-main dark:text-white">12</p>
                        <p className="text-xs text-primary font-medium mt-1">3 perlu dikirim</p>
                    </div>
                </div>
            </div>

            {/* Feature Grid */}
            <div className="flex-1 px-4 pb-24">
                <h3 className="text-base font-bold text-text-main dark:text-white mb-3">Menu Penjual</h3>
                <div className="grid grid-cols-3 gap-3">
                    {features.map((feature) => (
                        <button
                            key={feature.id}
                            onClick={() => navigate(feature.path)}
                            className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-surface-light dark:bg-surface-dark border border-gray-100 dark:border-white/5 hover:border-primary/20 dark:hover:border-primary/20 transition-all active:scale-95 relative"
                        >
                            {feature.count && feature.count > 0 && (
                                <div className="absolute -top-1 -right-1 min-w-[20px] h-5 flex items-center justify-center rounded-full bg-primary text-white text-[10px] font-bold px-1">
                                    {feature.count}
                                </div>
                            )}
                            <div className={`size-12 rounded-full ${feature.bgColor} flex items-center justify-center ${feature.color}`}>
                                <Icon name={feature.icon} size={24} />
                            </div>
                            <span className="text-xs font-semibold text-text-main dark:text-white text-center leading-tight">
                                {feature.name}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Additional Actions */}
                <div className="mt-6 space-y-3">
                    <h3 className="text-base font-bold text-text-main dark:text-white mb-3">Bantuan & Lainnya</h3>
                    <button className="w-full flex items-center gap-3 p-4 rounded-xl bg-surface-light dark:bg-surface-dark border border-gray-100 dark:border-white/5 hover:border-primary/20 transition-all">
                        <div className="size-10 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center text-text-secondary dark:text-gray-400">
                            <Icon name="help" size={20} />
                        </div>
                        <div className="flex-1 text-left">
                            <p className="text-sm font-semibold text-text-main dark:text-white">Pusat Bantuan Penjual</p>
                            <p className="text-xs text-text-secondary dark:text-gray-400">FAQ dan panduan jualan</p>
                        </div>
                        <Icon name="chevron_right" size={20} className="text-text-secondary dark:text-gray-400" />
                    </button>
                    <button className="w-full flex items-center gap-3 p-4 rounded-xl bg-surface-light dark:bg-surface-dark border border-gray-100 dark:border-white/5 hover:border-primary/20 transition-all">
                        <div className="size-10 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center text-text-secondary dark:text-gray-400">
                            <Icon name="school" size={20} />
                        </div>
                        <div className="flex-1 text-left">
                            <p className="text-sm font-semibold text-text-main dark:text-white">Kelas Penjual</p>
                            <p className="text-xs text-text-secondary dark:text-gray-400">Pelajari tips & trik berjualan</p>
                        </div>
                        <Icon name="chevron_right" size={20} className="text-text-secondary dark:text-gray-400" />
                    </button>
                </div>
            </div>

            {/* Bottom Navigation */}
            <div className="fixed bottom-0 left-0 right-0 bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-white/10 pb-5 pt-3 px-6 z-30">
                <div className="flex items-center justify-between max-w-md mx-auto">
                    <div className="flex flex-col items-center gap-1 text-primary cursor-pointer">
                        <Icon name="home" size={26} filled />
                        <span className="text-[10px] font-bold">Beranda</span>
                    </div>
                    <button onClick={() => navigate('/seller/products')} className="flex flex-col items-center gap-1 text-text-secondary dark:text-white/60 hover:text-primary cursor-pointer">
                        <Icon name="inventory_2" size={26} />
                        <span className="text-[10px] font-medium">Produk</span>
                    </button>
                    <button onClick={() => navigate('/seller/orders')} className="flex flex-col items-center gap-1 text-text-secondary dark:text-white/60 hover:text-primary cursor-pointer relative">
                        <Icon name="receipt_long" size={26} />
                        <span className="text-[10px] font-medium">Pesanan</span>
                        <div className="absolute -top-1 right-0 w-4 h-4 bg-primary rounded-full flex items-center justify-center text-[8px] text-white font-bold">3</div>
                    </button>
                    <button onClick={() => navigate('/seller/finance')} className="flex flex-col items-center gap-1 text-text-secondary dark:text-white/60 hover:text-primary cursor-pointer">
                        <Icon name="account_balance_wallet" size={26} />
                        <span className="text-[10px] font-medium">Keuangan</span>
                    </button>
                    <button onClick={() => navigate('/profile')} className="flex flex-col items-center gap-1 text-text-secondary dark:text-white/60 hover:text-primary cursor-pointer">
                        <Icon name="person" size={26} />
                        <span className="text-[10px] font-medium">Saya</span>
                    </button>
                </div>
            </div>
        </MobileContainer>
    );
}
