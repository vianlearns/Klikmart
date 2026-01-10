import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../../components/common/Icon';
import { MobileContainer } from '../../components/layout/MobileContainer';

interface ShipmentItem {
    name: string;
    variant: string;
    quantity: number;
    price: number;
    image: string;
}

interface Shipment {
    id: string;
    buyerUsername: string;
    isCOD?: boolean;
    status: string;
    items: ShipmentItem[];
    moreItemsCount?: number;
    totalAmount: number;
    courier: string;
    courierType: string;
    deadline: string;
    isUrgent?: boolean;
}

const mockShipments: Shipment[] = [
    {
        id: 'SHP-001',
        buyerUsername: 'user_budi99',
        isCOD: true,
        status: 'Perlu Dikirim',
        items: [
            {
                name: 'Kaos Polos Cotton Combed 30s - Hitam, XL',
                variant: 'Hitam, XL',
                quantity: 1,
                price: 45000,
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcCAHUspE3Fvd1yg84CUSZWozjqq8flb5oq9mgEkbv6V_g2TYshJq2re8lfjzsjIpR24S1W8ZTmykMxxGY_DMowaqBXKLV74eqooZ7dylgj8GUk33Wxe7mXCILDuvqquxPP4lidklC7Nwp6is_Jrm_WMuC6pEnyUi3lP0EAz5O6CijYN7eJrHsoWFUwwXcU2G8RlyKLt-BHPRk470a-fP8wsJctmwg70waldLxUxf-P4gqP7Qd9_PjUoFvDC25ufTZrjazep-Q5zc9'
            }
        ],
        totalAmount: 57000,
        courier: 'J&T Express',
        courierType: 'Reguler',
        deadline: 'Hari ini 14:00',
        isUrgent: true
    },
    {
        id: 'SHP-002',
        buyerUsername: 'sari_rahayu_88',
        status: 'Perlu Dikirim',
        items: [
            {
                name: 'Serum Wajah Glowing Brightening 30ml',
                variant: '30ml',
                quantity: 2,
                price: 180000,
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDXAQnBOMCrmX56bCqCGuvCz_c158NMWtr9WhgO6iyQq8nnSdAyUe2yIJZAk87Bilsh2I-sVMAZC37KUtxKoj-ss8vzNGaQjLn2UP42zjQo0PYu2MMy7KJ9o-BCspXsSbDcF7kfUi9kP_dOQjq1CtUOwQnpYd3M5_jWNuKjai9lOSyhXkRAhnkLem_rOWRQrTP5D_UlBKmEflZtoK-cPctb3ra9aqoANOIu2pYM3N7ztodW7xCprDENOt3hfkeFZs8PAYYQsW94BO0'
            }
        ],
        totalAmount: 365000,
        courier: 'SiCepat',
        courierType: 'HALU',
        deadline: '16 Des 2023'
    },
    {
        id: 'SHP-003',
        buyerUsername: 'mega_shop_client',
        status: 'Perlu Dikirim',
        items: [
            {
                name: 'Tote Bag Kanvas Premium - Ivory',
                variant: 'Ivory',
                quantity: 1,
                price: 85000,
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVUrUuG5Ve5eEDvJvP0GJmhXX6ZOTnChTg4Uri_k38b7ARp49HoVO9V53RzfS_HfWx5vON4PHyVF26qplFfPN97mEo4MCMQqI-ltqRnZpAecVCoc7PEhvU5FHRV4dm8eu9Whm1_ccaWrPFvo-KeIqgLtfGA9HSBgW6Eqb-pMZggub0i30HADIlXEPtHu-q-Wnfu4NotyYrebM4RCzoL6fbxJnNCXsgyE4w5IQF4o0l1GcimCmmmXywRqRJRK6en3ch59TtpwxzKx8G'
            }
        ],
        moreItemsCount: 2,
        totalAmount: 125500,
        courier: 'Shopee Xpress',
        courierType: 'Hemat',
        deadline: '16 Des 2023'
    }
];

const tabs = [
    { id: 'perlu-dikirim', label: 'Perlu Dikirim', count: 3 },
    { id: 'dikirim', label: 'Dikirim' },
    { id: 'selesai', label: 'Selesai' },
    { id: 'dibatalkan', label: 'Dibatalkan' }
];

const courierFilters = ['Semua', 'J&T Express', 'SiCepat', 'Shopee Xpress'];

export function ShippingManagementPage() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('perlu-dikirim');
    const [activeCourier, setActiveCourier] = useState('Semua');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectAll, setSelectAll] = useState(false);

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(price);
    };

    return (
        <MobileContainer className="bg-background-light dark:bg-background-dark h-screen flex flex-col overflow-hidden">
            {/* Top App Bar */}
            <div className="flex items-center bg-surface-light dark:bg-surface-dark px-4 py-3 justify-between border-b border-[#e6e0db] dark:border-[#3a2e26] shrink-0 z-20">
                <div className="flex size-10 shrink-0 items-center justify-start cursor-pointer hover:opacity-70">
                    <button onClick={() => navigate('/seller-center')}>
                        <Icon name="arrow_back" size={24} className="text-text-main dark:text-white" />
                    </button>
                </div>
                <h2 className="text-text-main dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
                    Pengiriman Saya
                </h2>
                <div className="flex size-10 items-center justify-end gap-3">
                    <button className="flex items-center justify-center text-text-main dark:text-white">
                        <Icon name="help" size={24} />
                    </button>
                </div>
            </div>

            {/* Sticky Tabs */}
            <div className="bg-surface-light dark:bg-surface-dark z-10 shrink-0">
                <div className="flex border-b border-[#e6e0db] dark:border-[#3a2e26] w-full overflow-x-auto no-scrollbar">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex min-w-[100px] flex-col items-center justify-center border-b-[3px] px-4 py-3 flex-1 transition-colors ${activeTab === tab.id
                                    ? 'border-primary text-primary'
                                    : 'border-transparent text-text-secondary dark:text-white/60 hover:text-primary'
                                }`}
                        >
                            <p className="text-sm font-bold leading-normal whitespace-nowrap">
                                {tab.label}
                                {tab.count && (
                                    <span className="ml-1 text-xs bg-primary/10 px-1.5 py-0.5 rounded-full text-primary">
                                        {tab.count}
                                    </span>
                                )}
                            </p>
                        </button>
                    ))}
                </div>
            </div>

            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden">
                {/* Search Bar */}
                <div className="px-4 py-3 bg-surface-light dark:bg-surface-dark sticky top-0 z-10 shadow-sm">
                    <label className="flex flex-col h-11 w-full">
                        <div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-[#f5f2f0] dark:bg-[#3a2e26]">
                            <div className="text-text-secondary dark:text-white/60 flex items-center justify-center pl-3 pr-2">
                                <Icon name="search" size={20} />
                            </div>
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="flex w-full min-w-0 flex-1 bg-transparent border-none text-text-main dark:text-white focus:outline-0 focus:ring-0 placeholder:text-text-secondary dark:placeholder:text-white/60 px-0 text-sm font-normal leading-normal"
                                placeholder="Cari pesanan, ID, atau nama pembeli"
                            />
                        </div>
                    </label>

                    {/* Filter Chips */}
                    <div className="flex gap-2 mt-3 overflow-x-auto no-scrollbar pb-1">
                        {courierFilters.map((courier) => (
                            <button
                                key={courier}
                                onClick={() => setActiveCourier(courier)}
                                className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 ${activeCourier === courier
                                        ? 'border border-primary bg-primary/10'
                                        : 'border border-[#e6e0db] dark:border-[#4a3b30] bg-surface-light dark:bg-surface-dark'
                                    }`}
                            >
                                <p className={`text-xs font-medium leading-normal ${activeCourier === courier
                                        ? 'text-primary font-bold'
                                        : 'text-text-secondary dark:text-white/60'
                                    }`}>
                                    {courier}
                                </p>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Orders List */}
                <div className="flex flex-col gap-3 p-4 pb-24">
                    {mockShipments.map((shipment) => (
                        <div
                            key={shipment.id}
                            className="flex flex-col rounded-xl bg-surface-light dark:bg-surface-dark shadow-[0_1px_3px_rgba(0,0,0,0.1)] overflow-hidden border border-transparent dark:border-[#3a2e26]"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between px-4 py-3 border-b border-[#f0ece9] dark:border-[#3a2e26]">
                                <div className="flex items-center gap-2">
                                    <span className="font-bold text-sm text-text-main dark:text-white">
                                        {shipment.buyerUsername}
                                    </span>
                                    {shipment.isCOD && (
                                        <span className="px-1.5 py-0.5 rounded bg-primary/10 text-[10px] font-bold text-primary uppercase">
                                            COD
                                        </span>
                                    )}
                                </div>
                                <span className="text-xs text-primary font-bold uppercase tracking-wide">
                                    {shipment.status}
                                </span>
                            </div>

                            {/* Body */}
                            <div className="p-4 flex gap-3 hover:bg-[#fcfbfb] dark:hover:bg-[#2f241c] transition-colors cursor-pointer">
                                <div className="size-20 shrink-0 bg-gray-100 dark:bg-gray-800 rounded-md overflow-hidden relative">
                                    <div
                                        className="w-full h-full bg-cover bg-center"
                                        style={{ backgroundImage: `url('${shipment.items[0].image}')` }}
                                    />
                                </div>
                                <div className="flex flex-col flex-1 justify-between py-0.5">
                                    <div>
                                        <p className="text-text-main dark:text-white text-sm font-medium leading-snug line-clamp-2">
                                            {shipment.items[0].name}
                                        </p>
                                        <p className="text-text-secondary dark:text-white/60 text-xs mt-1">
                                            Variasi: {shipment.items[0].variant}
                                        </p>
                                    </div>
                                    <div className="flex justify-between items-end mt-2">
                                        <span className="text-text-secondary dark:text-white/60 text-xs">
                                            x {shipment.items[0].quantity}
                                        </span>
                                        <span className="text-text-main dark:text-white font-medium text-sm">
                                            {formatPrice(shipment.items[0].price)}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* More items hint */}
                            {shipment.moreItemsCount && (
                                <div className="px-4 pb-4">
                                    <p className="text-xs text-text-secondary dark:text-white/60">
                                        + {shipment.moreItemsCount} produk lainnya
                                    </p>
                                </div>
                            )}

                            {/* Alert Section */}
                            {shipment.isUrgent ? (
                                <div className="px-4 py-2 bg-red-50 dark:bg-red-900/20 flex items-center gap-2">
                                    <Icon name="schedule" size={16} className="text-red-600 dark:text-red-400" />
                                    <p className="text-xs text-red-600 dark:text-red-400 font-medium">
                                        Kirim sebelum: {shipment.deadline}
                                    </p>
                                </div>
                            ) : (
                                <div className="px-4 py-2 bg-orange-50 dark:bg-orange-900/20 flex items-center gap-2">
                                    <Icon name="calendar_month" size={16} className="text-orange-600 dark:text-orange-400" />
                                    <p className="text-xs text-orange-600 dark:text-orange-400 font-medium">
                                        Kirim sebelum: {shipment.deadline}
                                    </p>
                                </div>
                            )}

                            {/* Footer / Actions */}
                            <div className="p-4 border-t border-[#f0ece9] dark:border-[#3a2e26]">
                                <div className="flex justify-between items-center mb-4">
                                    <div className="flex items-center gap-1.5">
                                        <span className="text-xs text-text-secondary dark:text-white/60 font-medium">
                                            {shipment.courier}
                                        </span>
                                        <span className="text-xs text-text-secondary dark:text-white/60 border-l border-gray-300 pl-2 ml-1">
                                            {shipment.courierType}
                                        </span>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-xs text-text-secondary dark:text-white/60">Total Pesanan:</span>
                                        <span className="text-primary font-bold text-base ml-1">
                                            {formatPrice(shipment.totalAmount)}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <button className="flex-1 h-10 border border-[#e6e0db] dark:border-[#4a3b30] rounded-lg text-text-main dark:text-white text-sm font-bold flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-[#3a2e26] transition-colors">
                                        <Icon name="chat" size={18} />
                                        Hubungi
                                    </button>
                                    <button className="flex-[2] h-10 bg-primary hover:bg-primary/90 rounded-lg text-white text-sm font-bold shadow-md shadow-primary/20 flex items-center justify-center gap-2 transition-colors">
                                        Atur Pengiriman
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bulk Action Bottom Bar */}
            <div className="w-full bg-surface-light dark:bg-surface-dark border-t border-[#e6e0db] dark:border-[#3a2e26] p-4 shrink-0 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-30">
                <div className="flex items-center justify-between gap-4 max-w-md mx-auto">
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={selectAll}
                            onChange={(e) => setSelectAll(e.target.checked)}
                            className="size-5 rounded border-gray-300 text-primary focus:ring-primary dark:bg-[#3a2e26] dark:border-[#4a3b30]"
                        />
                        <span className="text-sm font-bold text-text-main dark:text-white">Pilih Semua</span>
                    </div>
                    <button className="bg-text-main dark:bg-white text-white dark:text-black px-6 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2">
                        <Icon name="print" size={20} />
                        Cetak Massal
                    </button>
                </div>
            </div>
        </MobileContainer>
    );
}
