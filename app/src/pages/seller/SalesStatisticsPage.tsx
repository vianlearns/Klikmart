import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../../components/common/Icon';
import { MobileContainer } from '../../components/layout/MobileContainer';

interface TopProduct {
    id: string;
    rank: number;
    name: string;
    image: string;
    sold: number;
    revenue: number;
}

const mockTopProducts: TopProduct[] = [
    {
        id: '1',
        rank: 1,
        name: 'Nike Air Jordan Red',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpIBdKBzdhdPyuZx6oNmLC9ypYQgfx2rqqaxQweVRX4p69jAa2CiJEnijoWbk33PAlExhT3qrqLp00IL-hNSjijYLq976Sfeqx9gJwCDUpd6RSfTTvGtRN-6gU5d-sEvGdueIU2B-q8ptEXyru382sKqm4kuYExjt3_H9tlotfO3xhNkplIsEMM-IFrvra_r9u1CfMk940hblLSEA2oSCMqtA5_LIPSe_Q1FlK319dszTRgtZYmPd_k5oLWasQrsXZmCqhdNuUbMvu',
        sold: 42,
        revenue: 12500000
    },
    {
        id: '2',
        rank: 2,
        name: 'Minimalist Watch Series 5',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3ws1fjv3d4oNyLmrMBaIQd6lcLC7mCTmTn-xkVjIuM6eb_mRpqa_ImVsVxilLWy2EVjHjQajCD1CmhDWG-XMGvINDiFD34jdCPSM86X2Ymov1ziNFhJ6dV8qIOmH_nrtZIHufnGYyREiHH_sWlCaZJ9mlKaywPHVv5CLUue-Ef82SllZUk1h16_PBq28mKEeJD6B6RognoRxGDnlriccaZDlWsGq8kohS8b3WrlbIL8JkN34N6Ihe21eKtvQBnx80ZGrMJJQiiJh8',
        sold: 28,
        revenue: 8200000
    },
    {
        id: '3',
        rank: 3,
        name: 'Sony WH-1000XM4 Noise Canceling',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsIcajcs10RwQEAh8zrEUAM4fFQBtZEDb8BGbCX3iHiaivTTURP3xMJMrgbCG43D8EX0JBoX06yxC6Xs_7VFw7YKg0y1DyFDqLNpcIiuqf39BQAWJg4qA1v5IhU_72KTxFID0-uyg7iZ0D2JR6FOqtmaoSN68fWtv1AnFnrgqPBIfULAtMi1_vVS2ow2ptC5v2JaO9sLK8zWJt-1RMU8AkGLKFLsw9kOGevkPtpcQ1b9qm3CNZ2teUoFnFUK-aD7vOf-hSbuPjjn7t',
        sold: 15,
        revenue: 4500000
    }
];

const periodOptions = [
    { id: 'today', label: 'Hari Ini' },
    { id: '7days', label: '7 Hari Terakhir' },
    { id: '30days', label: '30 Hari' }
];

export function SalesStatisticsPage() {
    const navigate = useNavigate();
    const [activePeriod, setActivePeriod] = useState('today');
    const [showDatePicker, setShowDatePicker] = useState(false);

    const formatPrice = (price: number) => {
        if (price >= 1000000) {
            return `Rp ${(price / 1000000).toFixed(1)}jt`;
        }
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(price);
    };

    const getRankBadgeColor = (rank: number) => {
        switch (rank) {
            case 1: return 'bg-[#FFD700]';
            case 2: return 'bg-[#C0C0C0]';
            case 3: return 'bg-[#CD7F32]';
            default: return 'bg-gray-400';
        }
    };

    const handleExport = () => {
        // Trigger print/export functionality
        window.print();
    };

    const handleViewProduct = (_productId: string) => {
        navigate(`/seller/products`);
    };

    return (
        <MobileContainer className="bg-background-light dark:bg-background-dark min-h-screen font-display text-slate-900 dark:text-white antialiased pb-24">
            {/* Top App Bar */}
            <div className="sticky top-0 z-50 flex items-center bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md px-4 py-3 justify-between border-b border-gray-200 dark:border-white/5">
                <div className="flex items-center max-w-6xl mx-auto w-full">
                    <button
                        onClick={() => navigate('/seller-center')}
                        className="flex items-center justify-center p-2 -ml-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                    >
                        <Icon name="arrow_back_ios_new" size={24} className="text-slate-800 dark:text-white" />
                    </button>
                    <h2 className="text-lg font-bold leading-tight flex-1 text-center">Statistik Penjualan</h2>
                    <button
                        onClick={handleExport}
                        className="flex items-center justify-center p-2 -mr-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-primary"
                    >
                        <Icon name="ios_share" size={24} />
                    </button>
                </div>
            </div>

            {/* Period Selector */}
            <div className="w-full overflow-x-auto hide-scrollbar pt-4 px-4 pb-2 max-w-6xl mx-auto">
                <div className="flex gap-3 min-w-max">
                    {periodOptions.map((period) => (
                        <button
                            key={period.id}
                            onClick={() => setActivePeriod(period.id)}
                            className={`flex h-9 items-center justify-center gap-x-2 rounded-full px-5 transition-transform active:scale-95 ${activePeriod === period.id
                                ? 'bg-primary shadow-lg shadow-primary/20'
                                : 'bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/5'
                                }`}
                        >
                            <span className={`text-sm ${activePeriod === period.id ? 'text-white font-semibold' : 'text-slate-600 dark:text-gray-300 font-medium'}`}>
                                {period.label}
                            </span>
                        </button>
                    ))}
                    <button
                        onClick={() => setShowDatePicker(!showDatePicker)}
                        className="flex h-9 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/5 px-4 transition-transform active:scale-95 hover:border-primary"
                    >
                        <Icon name="calendar_month" size={20} className="text-slate-600 dark:text-gray-300" />
                    </button>
                </div>
            </div>

            {/* Main Content Container */}
            <div className="flex flex-col gap-6 p-4 max-w-6xl mx-auto">
                {/* Desktop Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column - Stats */}
                    <div className="lg:col-span-1 space-y-4">
                        {/* Hero Stats */}
                        <div className="grid grid-cols-1 gap-3">
                            {/* Main Revenue Card */}
                            <div className="flex flex-col gap-1 rounded-2xl p-5 bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/5 shadow-sm">
                                <div className="flex justify-between items-start">
                                    <div className="flex items-center gap-2">
                                        <div className="p-1.5 bg-primary/10 rounded-lg">
                                            <Icon name="payments" size={20} className="text-primary" />
                                        </div>
                                        <p className="text-slate-500 dark:text-gray-400 text-sm font-medium">Total Pendapatan</p>
                                    </div>
                                    <span className="inline-flex items-center gap-1 rounded-full bg-green-500/10 px-2 py-0.5 text-xs font-bold text-green-600 dark:text-green-400">
                                        <Icon name="trending_up" size={14} />
                                        5.4%
                                    </span>
                                </div>
                                <div className="mt-2">
                                    <p className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">Rp 45.2 jt</p>
                                    <p className="text-xs text-slate-400 dark:text-gray-500 mt-1">vs Rp 42.8jt kemarin</p>
                                </div>
                            </div>

                            {/* Secondary Stats */}
                            <div className="grid grid-cols-2 gap-3">
                                <div className="flex flex-col gap-1 rounded-2xl p-4 bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/5 shadow-sm">
                                    <p className="text-slate-500 dark:text-gray-400 text-xs font-medium mb-1">Total Pesanan</p>
                                    <div className="flex items-baseline gap-2">
                                        <p className="text-xl font-bold text-slate-900 dark:text-white">142</p>
                                        <span className="text-xs font-bold text-green-600 dark:text-green-400">+12%</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1 rounded-2xl p-4 bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/5 shadow-sm">
                                    <p className="text-slate-500 dark:text-gray-400 text-xs font-medium mb-1">Konversi Toko</p>
                                    <div className="flex items-baseline gap-2">
                                        <p className="text-xl font-bold text-slate-900 dark:text-white">3.2%</p>
                                        <span className="text-xs font-bold text-green-600 dark:text-green-400">+0.8%</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Metric Grid */}
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white px-1">Statistik Lainnya</h3>
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                onClick={() => navigate('/seller/products')}
                                className="flex flex-col p-4 rounded-xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/5 hover:border-primary/50 transition-colors text-left"
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                                        <Icon name="visibility" size={18} />
                                    </div>
                                    <span className="text-xs font-semibold text-slate-500 dark:text-gray-400">Pengunjung</span>
                                </div>
                                <p className="text-lg font-bold text-slate-900 dark:text-white">3,500</p>
                                <p className="text-xs text-green-500 font-medium mt-1">+120 vs kmrn</p>
                            </button>
                            <button
                                onClick={() => navigate('/seller/orders')}
                                className="flex flex-col p-4 rounded-xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/5 hover:border-primary/50 transition-colors text-left"
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500">
                                        <Icon name="shopping_basket" size={18} />
                                    </div>
                                    <span className="text-xs font-semibold text-slate-500 dark:text-gray-400">Rata2 Keranjang</span>
                                </div>
                                <p className="text-lg font-bold text-slate-900 dark:text-white">Rp 150rb</p>
                                <p className="text-xs text-red-500 font-medium mt-1">-2% vs kmrn</p>
                            </button>
                            <button
                                onClick={() => navigate('/seller/shipping')}
                                className="flex flex-col p-4 rounded-xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/5 hover:border-primary/50 transition-colors text-left"
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
                                        <Icon name="local_shipping" size={18} />
                                    </div>
                                    <span className="text-xs font-semibold text-slate-500 dark:text-gray-400">Perlu Dikirim</span>
                                </div>
                                <p className="text-lg font-bold text-slate-900 dark:text-white">5</p>
                                <p className="text-xs text-orange-500 font-medium mt-1">Segera proses</p>
                            </button>
                            <div className="flex flex-col p-4 rounded-xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/5">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                                        <Icon name="cancel" size={18} />
                                    </div>
                                    <span className="text-xs font-semibold text-slate-500 dark:text-gray-400">Dibatalkan</span>
                                </div>
                                <p className="text-lg font-bold text-slate-900 dark:text-white">2</p>
                                <p className="text-xs text-slate-400 font-medium mt-1">Rate 1.4%</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Chart & Products */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Charts Section */}
                        <div className="flex flex-col rounded-2xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/5 p-5 shadow-sm">
                            <div className="flex justify-between items-center mb-4">
                                <div>
                                    <h3 className="text-base font-bold text-slate-900 dark:text-white">Tren Penjualan</h3>
                                    <p className="text-xs text-slate-500 dark:text-gray-400">7 hari terakhir</p>
                                </div>
                                <button
                                    onClick={handleExport}
                                    className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5"
                                >
                                    <Icon name="more_horiz" size={20} className="text-gray-400" />
                                </button>
                            </div>
                            <div className="relative w-full h-[180px]">
                                <svg className="w-full h-full overflow-visible" viewBox="0 0 300 100" preserveAspectRatio="none">
                                    <defs>
                                        <linearGradient id="chartGradientStats" x1="0" x2="0" y1="0" y2="1">
                                            <stop offset="0%" stopColor="#f48525" stopOpacity="0.3" />
                                            <stop offset="100%" stopColor="#f48525" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                    <path d="M0 70 C 30 70, 40 40, 70 40 C 100 40, 110 80, 140 60 C 170 40, 180 20, 210 30 C 240 40, 250 10, 300 15 V 100 H 0 Z" fill="url(#chartGradientStats)" />
                                    <path d="M0 70 C 30 70, 40 40, 70 40 C 100 40, 110 80, 140 60 C 170 40, 180 20, 210 30 C 240 40, 250 10, 300 15" fill="none" stroke="#f48525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                                    <circle cx="210" cy="30" r="4" fill="#181411" stroke="#f48525" strokeWidth="3" className="shadow-lg" />
                                </svg>
                                {/* Tooltip */}
                                <div className="absolute top-[10px] left-[60%] -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded shadow-lg pointer-events-none">
                                    Rp 8.2jt
                                </div>
                            </div>
                            <div className="flex justify-between mt-4 px-2">
                                <span className="text-xs text-gray-400 font-medium">Sn</span>
                                <span className="text-xs text-gray-400 font-medium">Sl</span>
                                <span className="text-xs text-gray-400 font-medium">Rb</span>
                                <span className="text-xs text-gray-400 font-medium">Km</span>
                                <span className="text-xs text-gray-400 font-medium">Jm</span>
                                <span className="text-xs text-primary font-bold">Sb</span>
                                <span className="text-xs text-gray-400 font-medium">Mn</span>
                            </div>
                        </div>

                        {/* Top Products List */}
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between items-center px-1">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Produk Terlaris</h3>
                                <button
                                    onClick={() => navigate('/seller/products')}
                                    className="text-sm text-primary font-semibold hover:underline"
                                >
                                    Lihat Semua
                                </button>
                            </div>
                            <div className="flex flex-col gap-3">
                                {mockTopProducts.map((product) => (
                                    <button
                                        key={product.id}
                                        onClick={() => handleViewProduct(product.id)}
                                        className="flex items-center gap-4 rounded-xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/5 p-3 hover:border-primary/50 transition-colors text-left w-full"
                                    >
                                        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                                            <div className={`absolute left-0 top-0 flex h-5 w-5 items-center justify-center rounded-br-lg ${getRankBadgeColor(product.rank)} text-[10px] font-bold text-black`}>
                                                {product.rank}
                                            </div>
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                        <div className="flex flex-1 flex-col justify-center">
                                            <h4 className="text-sm font-semibold text-slate-900 dark:text-white line-clamp-1">{product.name}</h4>
                                            <div className="mt-1 flex items-center gap-3">
                                                <span className="text-xs text-slate-500 dark:text-gray-400">{product.sold} Terjual</span>
                                                <span className="h-1 w-1 rounded-full bg-gray-600" />
                                                <span className="text-xs font-bold text-primary">{formatPrice(product.revenue)}</span>
                                            </div>
                                        </div>
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 dark:bg-white/5 text-gray-400">
                                            <Icon name="chevron_right" size={18} />
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom padding for nav bar */}
                <div className="h-12" />
            </div>

            {/* Bottom Navigation Bar */}
            <div className="fixed bottom-0 left-0 right-0 z-50 flex h-[80px] items-start justify-around border-t border-gray-200 bg-white pt-3 dark:border-white/5 dark:bg-[#1e1711]">
                <button onClick={() => navigate('/seller-center')} className="group flex flex-col items-center gap-1 min-w-[64px]">
                    <Icon name="dashboard" size={26} className="text-primary" filled />
                    <span className="text-[10px] font-semibold text-primary">Beranda</span>
                </button>
                <button onClick={() => navigate('/seller/orders')} className="group flex flex-col items-center gap-1 min-w-[64px]">
                    <Icon name="receipt_long" size={26} className="text-gray-400 group-hover:text-primary transition-colors" />
                    <span className="text-[10px] font-medium text-gray-400 group-hover:text-primary transition-colors">Pesanan</span>
                </button>
                <button onClick={() => navigate('/seller/products')} className="group flex flex-col items-center gap-1 min-w-[64px]">
                    <Icon name="inventory_2" size={26} className="text-gray-400 group-hover:text-primary transition-colors" />
                    <span className="text-[10px] font-medium text-gray-400 group-hover:text-primary transition-colors">Produk</span>
                </button>
                <button onClick={() => navigate('/settings')} className="group flex flex-col items-center gap-1 min-w-[64px]">
                    <Icon name="settings" size={26} className="text-gray-400 group-hover:text-primary transition-colors" />
                    <span className="text-[10px] font-medium text-gray-400 group-hover:text-primary transition-colors">Pengaturan</span>
                </button>
            </div>
        </MobileContainer>
    );
}
