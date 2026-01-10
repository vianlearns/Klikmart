import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../../components/common/Icon';
import { MobileContainer } from '../../components/layout/MobileContainer';

interface Campaign {
    id: string;
    name: string;
    image: string;
    status: 'active' | 'scheduled' | 'ended';
    statusLabel: string;
    cost?: number;
    revenue?: number;
    budget?: number;
    startTime?: string;
    isActive: boolean;
}

const mockCampaigns: Campaign[] = [
    {
        id: '1',
        name: 'Promo Sepatu Running',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDy4PyNllma4tR2O1JBiDg5YXN2Qk9TZo8Cy-i08WahiluaAIhMFkKD0t1S0FVg8L8sDFspfi9eiZgeVdkXcr_flhjLe4t6KpwEJq2vuRDdubvIIzmFUI2zYQ3UxzKrJ6hY75e44JbfVtTvAnhpIx-M8SdWLI_vD9fZu1G7thwdPp-ShZVMl1Bae0Pca7yyRfDLHEIfyBr_cHlg6gH1M4tYZ9K5qsDq8GzivEw788HqgfneqeXxa6ww6L6xmhMR_4nB1nQePMziE-oS',
        status: 'active',
        statusLabel: 'Aktif',
        cost: 20000,
        revenue: 150000,
        isActive: true
    },
    {
        id: '2',
        name: 'Flash Sale Kaos Polos',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUO33B_Dw8_sFpLU6KIqDuVnO8Ywm3ZtTO6RYha7bBF-dY9hO-qRaIRUz-HhoNE2LV5V7K4_QNsFPMesdmKuDfeXbGMBGfb-NCoAhNyHW1d7zR0q_k5LO0fEdzkarisN0woRPxtwvHuGZlNgSQVdO-Drr4fz8xtv9O5fvGiRBGsjnRCwWQWC5RJh26BtBTdHrXDzaT1c4vSJwElLB4hr39A4fdcPJfQhL_L4e6-KpQ6jPO6oYJMMbiHYVJppdnId8glOnRe2SsNPiG',
        status: 'scheduled',
        statusLabel: 'Besok',
        budget: 50000,
        startTime: '09:00 WIB',
        isActive: true
    },
    {
        id: '3',
        name: 'Jam Tangan Smart',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlZ0ADFiLFWCCwTfOzmw1oWpCNtn0JECSbxYzK0rZJGdQqIwW4etqp0b2ylQ8gNh6IIn-P0EcsbfjTdhM8gpH7Yz1jWVJAT_NdBaetAD8CdmPufZjmNMjfF2ACzDkLIQJ9MGrpkz1Vh8MrofLDvip5nxp0O8DNMRIFBl22XaxXqnxSXeuQNum5CY8VEisUc7eZD7CYu3LMfPCSPYDM5HqLzi0JnEqDKePgb05xfPxtagstqausqYn80OndgQzYeH0JoiSICBMlxnot',
        status: 'active',
        statusLabel: 'Aktif',
        cost: 75000,
        revenue: 420000,
        isActive: true
    }
];

const tabs = ['Berjalan', 'Dijadwalkan', 'Selesai'];

export function AdsManagementPage() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('Berjalan');
    const [campaigns, setCampaigns] = useState(mockCampaigns);

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(price);
    };

    const toggleCampaign = (id: string) => {
        setCampaigns(prev => prev.map(c =>
            c.id === id ? { ...c, isActive: !c.isActive } : c
        ));
    };

    return (
        <MobileContainer className="bg-background-light dark:bg-background-dark min-h-screen font-display text-slate-900 dark:text-white antialiased pb-24">
            {/* Top App Bar */}
            <div className="sticky top-0 z-50 bg-background-light dark:bg-background-dark/95 backdrop-blur-md border-b border-white/5 dark:border-[#54473b]/30 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => navigate('/seller-center')}
                        className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/5 active:scale-95 transition-all text-text-secondary dark:text-[#baaa9c] hover:text-white"
                    >
                        <Icon name="arrow_back" size={24} />
                    </button>
                    <h1 className="text-xl font-bold leading-tight tracking-tight">Iklan Penjual</h1>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/5 active:scale-95 transition-all text-text-secondary dark:text-[#baaa9c] hover:text-white">
                        <Icon name="help_outline" size={24} />
                    </button>
                    <button className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white shadow-lg shadow-primary/20 active:scale-95 transition-all">
                        <Icon name="add" size={24} />
                    </button>
                </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex flex-col w-full max-w-md mx-auto">
                {/* Wallet / Action Panel */}
                <div className="p-4 w-full">
                    <div className="relative overflow-hidden rounded-xl border border-[#54473b] dark:border-[#54473b] bg-surface-light dark:bg-[#2f251e] p-5 shadow-sm">
                        {/* Decorative background gradient */}
                        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 rounded-full bg-primary/10 blur-xl" />
                        <div className="relative z-10 flex flex-row items-center justify-between gap-4">
                            <div className="flex flex-col gap-1">
                                <p className="text-text-secondary dark:text-[#baaa9c] text-xs font-medium uppercase tracking-wider">Saldo Iklan</p>
                                <p className="text-text-main dark:text-white text-xl font-bold leading-tight">Rp 500.000</p>
                            </div>
                            <button className="flex items-center justify-center rounded-lg h-9 px-5 bg-primary hover:bg-primary/90 text-white text-sm font-bold shadow-lg shadow-primary/20 transition-all active:scale-95">
                                <Icon name="account_balance_wallet" size={18} className="mr-1" />
                                Top Up
                            </button>
                        </div>
                        <div className="mt-3 flex items-center gap-2">
                            <Icon name="trending_up" size={14} className="text-green-500" />
                            <p className="text-text-secondary dark:text-[#baaa9c] text-xs">Kredit cukup untuk 7 hari ke depan</p>
                        </div>
                    </div>
                </div>

                {/* Charts Section */}
                <div className="px-4 pb-2">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-end justify-between">
                            <div>
                                <p className="text-text-secondary dark:text-[#baaa9c] text-sm font-medium">Penjualan vs Biaya (7 Hari)</p>
                                <h3 className="text-3xl font-bold text-text-main dark:text-white mt-1">Rp 1.500.000</h3>
                            </div>
                            <div className="flex items-center gap-1 bg-green-500/10 px-2 py-1 rounded text-green-400 text-xs font-bold mb-1">
                                <Icon name="arrow_upward" size={14} />
                                15%
                            </div>
                        </div>

                        {/* Chart Area */}
                        <div className="relative h-[160px] w-full mt-4">
                            <svg className="w-full h-full overflow-visible" viewBox="0 0 300 100" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                                        <stop offset="0%" stopColor="#f48525" stopOpacity="0.2" />
                                        <stop offset="100%" stopColor="#f48525" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                                <path d="M0,80 Q30,75 60,50 T120,40 T180,60 T240,30 T300,10 V100 H0 Z" fill="url(#chartGradient)" />
                                <path d="M0,80 Q30,75 60,50 T120,40 T180,60 T240,30 T300,10" fill="none" stroke="#f48525" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                                <path d="M0,90 Q40,85 80,70 T160,75 T220,85 T300,60" fill="none" stroke="#baaa9c" strokeDasharray="4 4" strokeOpacity="0.5" strokeWidth="2" />
                            </svg>
                            <div className="flex justify-between text-xs text-text-secondary dark:text-[#baaa9c] mt-2 font-medium">
                                <span>Sen</span>
                                <span>Sel</span>
                                <span>Rab</span>
                                <span>Kam</span>
                                <span>Jum</span>
                                <span>Sab</span>
                                <span>Min</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="p-4 grid grid-cols-2 gap-3">
                    <div className="bg-surface-light dark:bg-[#2f251e] border border-gray-200 dark:border-[#54473b] p-4 rounded-xl flex flex-col gap-1">
                        <div className="flex justify-between items-start">
                            <Icon name="visibility" size={24} className="text-text-secondary dark:text-[#baaa9c]" />
                            <span className="text-xs font-bold text-green-400 bg-green-400/10 px-1.5 py-0.5 rounded">+12%</span>
                        </div>
                        <p className="text-2xl font-bold text-text-main dark:text-white mt-2">12.5K</p>
                        <p className="text-xs text-text-secondary dark:text-[#baaa9c] font-medium">Dilihat</p>
                    </div>
                    <div className="bg-surface-light dark:bg-[#2f251e] border border-gray-200 dark:border-[#54473b] p-4 rounded-xl flex flex-col gap-1">
                        <div className="flex justify-between items-start">
                            <Icon name="ads_click" size={24} className="text-text-secondary dark:text-[#baaa9c]" />
                            <span className="text-xs font-bold text-green-400 bg-green-400/10 px-1.5 py-0.5 rounded">+5%</span>
                        </div>
                        <p className="text-2xl font-bold text-text-main dark:text-white mt-2">850</p>
                        <p className="text-xs text-text-secondary dark:text-[#baaa9c] font-medium">Diklik</p>
                    </div>
                    <div className="bg-surface-light dark:bg-[#2f251e] border border-gray-200 dark:border-[#54473b] p-4 rounded-xl flex flex-col gap-1">
                        <div className="flex justify-between items-start">
                            <Icon name="percent" size={24} className="text-text-secondary dark:text-[#baaa9c]" />
                            <span className="text-xs font-bold text-green-400 bg-green-400/10 px-1.5 py-0.5 rounded">+1.2%</span>
                        </div>
                        <p className="text-2xl font-bold text-text-main dark:text-white mt-2">6.8%</p>
                        <p className="text-xs text-text-secondary dark:text-[#baaa9c] font-medium">CTR</p>
                    </div>
                    <div className="bg-surface-light dark:bg-[#2f251e] border border-gray-200 dark:border-[#54473b] p-4 rounded-xl flex flex-col gap-1">
                        <div className="flex justify-between items-start">
                            <Icon name="shopping_bag" size={24} className="text-text-secondary dark:text-[#baaa9c]" />
                            <span className="text-xs font-bold text-red-400 bg-red-400/10 px-1.5 py-0.5 rounded">-2%</span>
                        </div>
                        <p className="text-2xl font-bold text-text-main dark:text-white mt-2">120</p>
                        <p className="text-xs text-text-secondary dark:text-[#baaa9c] font-medium">Pesanan</p>
                    </div>
                </div>

                {/* Campaign Tabs */}
                <div className="sticky top-[64px] z-40 bg-background-light dark:bg-background-dark pt-2">
                    <div className="flex border-b border-gray-200 dark:border-[#54473b] px-4 gap-6">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className="relative pb-3 flex flex-col items-center"
                            >
                                <span className={`text-sm font-medium ${activeTab === tab ? 'text-primary font-bold' : 'text-text-secondary dark:text-[#baaa9c] hover:text-white'} transition-colors`}>
                                    {tab}
                                </span>
                                <div className={`absolute bottom-0 w-full h-0.5 rounded-t-full ${activeTab === tab ? 'bg-primary' : 'bg-transparent'}`} />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Campaign List */}
                <div className="p-4 flex flex-col gap-4">
                    {campaigns.map((campaign) => (
                        <div
                            key={campaign.id}
                            className={`bg-surface-light dark:bg-[#2f251e] border border-gray-200 dark:border-[#54473b] rounded-xl p-3 flex gap-3 items-center ${campaign.status === 'scheduled' ? 'opacity-80' : ''}`}
                        >
                            {/* Product Image */}
                            <div className="w-16 h-16 shrink-0 rounded-lg overflow-hidden bg-white/5 relative">
                                <img
                                    src={campaign.image}
                                    alt={campaign.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-start mb-1">
                                    <h4 className="text-text-main dark:text-white font-bold text-sm truncate pr-2">{campaign.name}</h4>
                                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${campaign.status === 'active'
                                            ? 'bg-green-500/10 text-green-400 border-green-500/20'
                                            : 'bg-primary/10 text-primary border-primary/20'
                                        }`}>
                                        {campaign.statusLabel}
                                    </span>
                                </div>
                                <div className="flex gap-4 text-xs mt-2">
                                    <div>
                                        <p className="text-text-secondary dark:text-[#baaa9c] text-[10px]">
                                            {campaign.cost ? 'Biaya' : 'Budget'}
                                        </p>
                                        <p className="text-text-main dark:text-white font-medium">
                                            {formatPrice(campaign.cost || campaign.budget || 0)}
                                        </p>
                                    </div>
                                    <div className="w-px h-8 bg-gray-200 dark:bg-[#54473b]" />
                                    <div>
                                        <p className="text-text-secondary dark:text-[#baaa9c] text-[10px]">
                                            {campaign.revenue ? 'Omset' : 'Mulai'}
                                        </p>
                                        <p className="text-text-main dark:text-white font-medium">
                                            {campaign.revenue ? formatPrice(campaign.revenue) : campaign.startTime}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Toggle Switch */}
                            <div className="flex flex-col items-end justify-center pl-2">
                                <label className="flex items-center cursor-pointer relative">
                                    <input
                                        type="checkbox"
                                        checked={campaign.isActive}
                                        onChange={() => toggleCampaign(campaign.id)}
                                        className="sr-only peer"
                                    />
                                    <div className="w-9 h-5 bg-gray-300 dark:bg-[#54473b] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                                </label>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Navigation */}
            <div className="fixed bottom-0 left-0 right-0 bg-background-light dark:bg-background-dark/95 backdrop-blur-lg border-t border-gray-200 dark:border-[#54473b]">
                <div className="flex justify-around items-center h-16 max-w-md mx-auto">
                    <button onClick={() => navigate('/seller-center')} className="flex flex-col items-center justify-center gap-1 w-full h-full text-text-secondary dark:text-[#baaa9c] hover:text-white transition-colors">
                        <Icon name="home" size={24} />
                        <span className="text-[10px] font-medium">Home</span>
                    </button>
                    <button onClick={() => navigate('/seller/products')} className="flex flex-col items-center justify-center gap-1 w-full h-full text-text-secondary dark:text-[#baaa9c] hover:text-white transition-colors">
                        <Icon name="inventory_2" size={24} />
                        <span className="text-[10px] font-medium">Produk</span>
                    </button>
                    <div className="flex flex-col items-center justify-center gap-1 w-full h-full text-primary relative">
                        <Icon name="campaign" size={24} filled />
                        <span className="text-[10px] font-bold">Iklan</span>
                        <div className="absolute top-2 right-1/4 w-2 h-2 bg-red-500 rounded-full border border-background-dark" />
                    </div>
                    <button onClick={() => navigate('/seller/orders')} className="flex flex-col items-center justify-center gap-1 w-full h-full text-text-secondary dark:text-[#baaa9c] hover:text-white transition-colors">
                        <Icon name="receipt_long" size={24} />
                        <span className="text-[10px] font-medium">Pesanan</span>
                    </button>
                    <button onClick={() => navigate('/profile')} className="flex flex-col items-center justify-center gap-1 w-full h-full text-text-secondary dark:text-[#baaa9c] hover:text-white transition-colors">
                        <Icon name="person" size={24} />
                        <span className="text-[10px] font-medium">Saya</span>
                    </button>
                </div>
                <div className="h-4 w-full bg-background-light dark:bg-background-dark/95" />
            </div>
        </MobileContainer>
    );
}
