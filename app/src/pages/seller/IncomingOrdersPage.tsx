import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../../components/common/Icon';
import { MobileContainer } from '../../components/layout/MobileContainer';

interface OrderItem {
    name: string;
    variant: string;
    quantity: number;
    price: number;
    image: string;
}

interface Order {
    id: string;
    buyerName: string;
    buyerAvatar: string;
    status: string;
    items: OrderItem[];
    totalAmount: number;
    courier: string;
    courierType: string;
    deadline: string;
    isUrgent?: boolean;
}

const mockOrders: Order[] = [
    {
        id: 'ORD-001',
        buyerName: 'Budi Santoso',
        buyerAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBlmB04kjPMd_04sL9vgQVMLGZczf07vAwzfhmLIcjGJ5DdiTNM2VRH6gKWZy987IZ2fBuqjqZnJbLggqwPwSR7_FDP9Xtlrn4OU2xVs-yWA1m051j9iI5OlB0pMG3J-4FptKDenBXNS2bzh4cIVteWxkPT9jeIUGogZTF5mUGiDJ-9lYO9hUjgX2XjV-vXzbDQxqu-VgJuK3Jv0z8T2U1QrJm_aTmEJO4WFoM52DuHG6AYFFfyDCZVsPNxX48Varc1hs4DVX6xS6U',
        status: 'Perlu Dikirim',
        items: [
            {
                name: 'Kaos Polos Cotton Combed 30s Premium Quality - Hitam',
                variant: 'Hitam, Size L',
                quantity: 1,
                price: 45000,
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC62DAUQkNEd0PauAXAYH0XIxbmjnarOCuPxG8XhokMQXy6lijvyiGSbdWivcgJBiwvLrEf1XQQJIQytXU-gCsO8tRc0eDbHaoAOx1xwtRGE-uvRtRzxdhaJIPMB1sRa_VrDoahJI98alzuWZ-ymgJEcFZ2Jg7w24W8-mlRtIEB8vKbLvEmOW2YZShUGiq-P1KNp9Cjqgd7e6uQI3ukhzfVPKywegVA-V7LExqsx8K_ozJHg4YmTLJxTF4ueDIU9XNNg3evkrqiOm1C'
            }
        ],
        totalAmount: 57000,
        courier: 'J&T Express',
        courierType: 'Hemat',
        deadline: '24 Okt 2023',
        isUrgent: true
    },
    {
        id: 'ORD-002',
        buyerName: 'Siti Aminah',
        buyerAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9aQWbKSKlqZ5yedn2aF4CGD2MsUmyhN4lT1lryx-9tPk8k6Ej_C6mxKV9nfz_lo5ziVdKlCwJjVW1cxFvb6h0HrZ1YPWjfc0EMFzj-FmiHfwkanwkdVfjsr9MNFRGSmBxyzSUr-966QbQSBQPSFUXhesdwT6hX8NJOCFd6xSJCNJYpVqPvh5wMs_xqBqvAWRO7yxlGsaPmSgrkSTireSCDS8hzdvjkE6TX_34Gm6djfVeVSpoOFqJbIzhD9Y6x28Tx_NzlfaBQBUl',
        status: 'Perlu Dikirim',
        items: [
            {
                name: 'Sepatu Sneakers Wanita Casual Putih',
                variant: 'Putih, 38',
                quantity: 1,
                price: 125000,
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBW3o3RDXPtNgHxUGXgryvfQy636MDkSNA1x6gTWmnOjgVYl07IbIaUzmA3ipUnYaTgEZGgFPN6fI_WnYAOM_tMsLvsP0mP20ECXx_Kzgx85ey-S7G881xUrxR8eq-8g3MlFAOgpRGifLhkrmBrlgM7gl4-_qT9mkzZ_x39gC2FnZm5kDvDFSWchC9lLG-Dc5JtMFRjBbkQNPrCkkxQI7cbcj06kW6kDrBP_e4d7XACV2R2kY2xCE9aP3K3hnMOoYxgaDAJwBTg6Y4O'
            },
            {
                name: 'Kaos Kaki Polos Mata Kaki (3 Pasang)',
                variant: 'Mix Warna',
                quantity: 1,
                price: 25000,
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_fOWjXopchBGgcpcUhJdexH5Aiufh7Xgg2fXW4G4z7sQ4LyEv8kDmg-6OreuhWSjzkjf7jDkOSuZjvVFbwk9FIYo2R4R6SNmbXlcn13GGcN3C25b9Iy0vtHaeIvMUmI_y3Hv3wGSiUs87zQRECJd700r5CH-ayFnOvqycAGwmHO9aINqM9PF50ZNKhpSrGRX98L02D275DCyH3qOZ0TyPUAevE7S1KDbvvWTI111w2SvJapxDwf74ec1cqqmqrSnCZcT0R4VtW8nR'
            }
        ],
        totalAmount: 162000,
        courier: 'SiCepat',
        courierType: 'Reguler',
        deadline: '25 Okt 2023',
        isUrgent: true
    },
    {
        id: 'ORD-003',
        buyerName: 'Agus Setiawan',
        buyerAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUjzPG9Vw2U0TNxb4GWg5u3Ghd-8oPQ2aeX2cXXvKPSnT9GrYAJNrnyr4D_v58dEM6oru6fxK8pnzZihgjWiJo2CM9qtLJeL65ovLDTG13TJqUuKQ3RX3dpeTpYKsbt6f8WrxnZHPv0LnYSlxUe_EcrVbH2McwCLx9NdA0WTjLyqznyIbUlCG-n-x04Lem1aowmGApvm4404YUo1mfOGhoIomq8N1MQaiv7jIrEY12b7R2qWrl9RRYVOyE1_w1ebpnslYiMdmq_t4M',
        status: 'Perlu Dikirim',
        items: [
            {
                name: 'Powerbank 10000mAh Fast Charging - Hitam',
                variant: 'Hitam',
                quantity: 1,
                price: 150000,
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmr-DjUKJjlFVC_mNQpVthmRUjXp1UbtvvwLe2JH5DzzBqIy8MnIHBf_AbIxscOu4jpP_7-ZfWd9qcGLvA48H7ozPUBLXt8N9W0q_qCll7b9bLB9kE8pMPU8FIcRrWStY0QoKnnACirYzQxFJOOcnR0X9P6uIM7NuE8eBEUrAFWGHZjkDjXLZR3KTH2gKmJQhry_XNj3vZq3BJek6_FE_doB-bsLbOWdLrc-BvpFfWMqvLP21gnshet5KNCto-fdOQUObQTadaouZ1'
            }
        ],
        totalAmount: 158000,
        courier: 'SPX Standard',
        courierType: 'Standard',
        deadline: '26 Okt 2023'
    }
];

const tabs = [
    { id: 'perlu-dikirim', label: 'Perlu Dikirim', count: 3, isActive: true },
    { id: 'dikirim', label: 'Dikirim', count: 0 },
    { id: 'selesai', label: 'Selesai', count: 0 },
    { id: 'pembatalan', label: 'Pembatalan', count: 0 },
    { id: 'pengembalian', label: 'Pengembalian', count: 0 }
];

export function IncomingOrdersPage() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('perlu-dikirim');
    const [searchQuery, setSearchQuery] = useState('');

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(price);
    };

    return (
        <MobileContainer className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col">
            {/* Sticky Header Container */}
            <div className="sticky top-0 z-20 bg-surface-light dark:bg-surface-dark shadow-sm">
                {/* Top App Bar */}
                <div className="flex items-center justify-between p-4 pb-2">
                    <button
                        onClick={() => navigate('/seller-center')}
                        className="flex size-10 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                    >
                        <Icon name="arrow_back" size={24} className="text-text-main dark:text-white" />
                    </button>
                    <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10 text-text-main dark:text-white">
                        Pesanan Saya
                    </h2>
                    <div className="flex items-center justify-end absolute right-4 gap-3">
                        <button className="text-text-main dark:text-white">
                            <Icon name="chat" size={24} />
                        </button>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="px-4 py-2">
                    <label className="flex flex-col w-full h-11">
                        <div className="flex w-full flex-1 items-center rounded-lg h-full bg-[#f5f2f0] dark:bg-[#3a322b] overflow-hidden">
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
                            <div className="flex items-center justify-center pr-3 border-l border-gray-300 dark:border-gray-600 pl-3 h-6 my-auto">
                                <Icon name="filter_list" size={22} className="text-text-secondary dark:text-white/50" />
                            </div>
                        </div>
                    </label>
                </div>

                {/* Tabs / Chips */}
                <div className="flex gap-3 px-4 py-3 overflow-x-auto no-scrollbar border-b border-gray-100 dark:border-white/5">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 transition-transform active:scale-95 ${activeTab === tab.id
                                    ? 'bg-primary shadow-sm'
                                    : 'bg-[#f5f2f0] dark:bg-[#3a322b]'
                                }`}
                        >
                            <p className={`text-sm font-semibold leading-normal ${activeTab === tab.id
                                    ? 'text-white'
                                    : 'text-text-secondary dark:text-white/60'
                                }`}>
                                {tab.label}{tab.count > 0 ? ` (${tab.count})` : ''}
                            </p>
                        </button>
                    ))}
                </div>
            </div>

            {/* Main Content List */}
            <div className="flex flex-col pb-24 flex-1">
                {/* Meta Text */}
                <div className="px-4 py-3 flex items-center justify-between">
                    <p className="text-text-secondary dark:text-white/60 text-xs font-normal">
                        Menampilkan {mockOrders.length} pesanan yang perlu diproses
                    </p>
                    <span className="text-primary text-xs font-medium cursor-pointer">Atur Sekaligus</span>
                </div>

                {/* Order Cards */}
                {mockOrders.map((order) => (
                    <div key={order.id} className="px-4 mb-4">
                        <div className="flex flex-col gap-0 rounded-xl bg-surface-light dark:bg-surface-dark shadow-[0_2px_8px_rgba(0,0,0,0.05)] overflow-hidden">
                            {/* Card Header */}
                            <div className="flex items-center justify-between p-3 border-b border-gray-50 dark:border-white/5">
                                <div className="flex items-center gap-2">
                                    <div
                                        className="w-6 h-6 rounded-full bg-gray-200 bg-cover bg-center"
                                        style={{ backgroundImage: `url('${order.buyerAvatar}')` }}
                                    />
                                    <span className="text-sm font-bold text-text-main dark:text-white">
                                        {order.buyerName}
                                    </span>
                                </div>
                                <span className="text-primary text-xs font-semibold bg-primary/10 px-2 py-1 rounded">
                                    {order.status}
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
                                        className="w-20 h-20 shrink-0 bg-gray-200 rounded-lg bg-cover bg-center"
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
                                        <div className="flex items-end justify-between mt-2">
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
                                    </div>
                                    <div className="text-right">
                                        <span className="text-xs text-text-secondary dark:text-white/60">Total Pesanan: </span>
                                        <span className="text-base font-bold text-primary">{formatPrice(order.totalAmount)}</span>
                                    </div>
                                </div>
                                {order.isUrgent ? (
                                    <div className="flex items-center gap-1 bg-orange-50 dark:bg-orange-900/10 p-2 rounded border border-orange-100 dark:border-orange-900/20">
                                        <Icon name="alarm" size={16} className="text-primary" />
                                        <span className="text-xs text-primary font-medium">Kirim sebelum {order.deadline}</span>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-1 text-xs text-text-secondary dark:text-white/60 mt-1">
                                        <Icon name="calendar_today" size={16} className="text-text-secondary" />
                                        <span>Batas kirim: {order.deadline}</span>
                                    </div>
                                )}
                            </div>

                            {/* Action Footer */}
                            <div className="p-3 flex items-center justify-end gap-3">
                                <button className="px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 text-text-main dark:text-white text-sm font-medium bg-transparent">
                                    Hubungi Pembeli
                                </button>
                                <button className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-bold shadow-sm flex items-center gap-1">
                                    Atur Pengiriman
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Navigation Bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-white/10 pb-5 pt-3 px-6 z-30">
                <div className="flex items-center justify-between max-w-md mx-auto">
                    <button onClick={() => navigate('/seller-center')} className="flex flex-col items-center gap-1 text-text-secondary dark:text-white/60 hover:text-primary cursor-pointer">
                        <Icon name="home" size={26} />
                        <span className="text-[10px] font-medium">Beranda</span>
                    </button>
                    <button onClick={() => navigate('/seller/products')} className="flex flex-col items-center gap-1 text-text-secondary dark:text-white/60 hover:text-primary cursor-pointer">
                        <Icon name="inventory_2" size={26} />
                        <span className="text-[10px] font-medium">Produk</span>
                    </button>
                    <div className="flex flex-col items-center gap-1 text-primary cursor-pointer">
                        <Icon name="receipt_long" size={26} filled />
                        <span className="text-[10px] font-bold">Pesanan</span>
                    </div>
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
