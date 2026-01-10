import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../../components/common/Icon';
import { MobileContainer } from '../../components/layout/MobileContainer';

interface BuyerChat {
    id: string;
    buyerName: string;
    buyerAvatar: string;
    lastMessage: string;
    time: string;
    unread: number;
    isOnline: boolean;
    orderInfo?: string;
    hasProduct?: boolean;
    productImage?: string;
}

const mockChats: BuyerChat[] = [
    {
        id: '1',
        buyerName: 'Budi Santoso',
        buyerAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBlmB04kjPMd_04sL9vgQVMLGZczf07vAwzfhmLIcjGJ5DdiTNM2VRH6gKWZy987IZ2fBuqjqZnJbLggqwPwSR7_FDP9Xtlrn4OU2xVs-yWA1m051j9iI5OlB0pMG3J-4FptKDenBXNS2bzh4cIVteWxkPT9jeIUGogZTF5mUGiDJ-9lYO9hUjgX2XjV-vXzbDQxqu-VgJuK3Jv0z8T2U1QrJm_aTmEJO4WFoM52DuHG6AYFFfyDCZVsPNxX48Varc1hs4DVX6xS6U',
        lastMessage: 'Kak, barangnya ready size L?',
        time: '14:30',
        unread: 2,
        isOnline: true,
        hasProduct: true,
        productImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC62DAUQkNEd0PauAXAYH0XIxbmjnarOCuPxG8XhokMQXy6lijvyiGSbdWivcgJBiwvLrEf1XQQJIQytXU-gCsO8tRc0eDbHaoAOx1xwtRGE-uvRtRzxdhaJIPMB1sRa_VrDoahJI98alzuWZ-ymgJEcFZ2Jg7w24W8-mlRtIEB8vKbLvEmOW2YZShUGiq-P1KNp9Cjqgd7e6uQI3ukhzfVPKywegVA-V7LExqsx8K_ozJHg4YmTLJxTF4ueDIU9XNNg3evkrqiOm1C'
    },
    {
        id: '2',
        buyerName: 'Siti Aminah',
        buyerAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9aQWbKSKlqZ5yedn2aF4CGD2MsUmyhN4lT1lryx-9tPk8k6Ej_C6mxKV9nfz_lo5ziVdKlCwJjVW1cxFvb6h0HrZ1YPWjfc0EMFzj-FmiHfwkanwkdVfjsr9MNFRGSmBxyzSUr-966QbQSBQPSFUXhesdwT6hX8NJOCFd6xSJCNJYpVqPvh5wMs_xqBqvAWRO7yxlGsaPmSgrkSTireSCDS8hzdvjkE6TX_34Gm6djfVeVSpoOFqJbIzhD9Y6x28Tx_NzlfaBQBUl',
        lastMessage: 'Pesanan saya sudah dikirim belum ya kak?',
        time: '12:15',
        unread: 1,
        isOnline: false,
        orderInfo: 'ORD-002'
    },
    {
        id: '3',
        buyerName: 'Agus Setiawan',
        buyerAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUjzPG9Vw2U0TNxb4GWg5u3Ghd-8oPQ2aeX2cXXvKPSnT9GrYAJNrnyr4D_v58dEM6oru6fxK8pnzZihgjWiJo2CM9qtLJeL65ovLDTG13TJqUuKQ3RX3dpeTpYKsbt6f8WrxnZHPv0LnYSlxUe_EcrVbH2McwCLx9NdA0WTjLyqznyIbUlCG-n-x04Lem1aowmGApvm4404YUo1mfOGhoIomq8N1MQaiv7jIrEY12b7R2qWrl9RRYVOyE1_w1ebpnslYiMdmq_t4M',
        lastMessage: 'Terima kasih kak, barangnya sudah sampai 👍',
        time: 'Kemarin',
        unread: 0,
        isOnline: false,
        orderInfo: 'ORD-003'
    },
    {
        id: '4',
        buyerName: 'Dewi Lestari',
        buyerAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgrm18X7w-qe6tsws2pps1svph6sYsu07KljxmmLiqU5_u_Dqax51df3OBAWeJSEDIZoGBDSWGpSC6E4dXQmy1HxUhFXDPYALbqOoktewgKXOIITtFS9M-OvlG_G0i1rdOhGscpmaip0a-AbybjfaCs2XLl2XbXLpTBKDqw_uevKYys1xuVbMuzFvCNR_-iuvsijdovWGhaKfdeein-46zlzPXyfDV7PeQLCPvA_gtQOPaPfD6doVw7VKV6SejyxU1e3crgF8EEb0J',
        lastMessage: 'Bisa COD tidak kak untuk area Jakarta?',
        time: 'Kemarin',
        unread: 0,
        isOnline: true,
        hasProduct: true,
        productImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDXAQnBOMCrmX56bCqCGuvCz_c158NMWtr9WhgO6iyQq8nnSdAyUe2yIJZAk87Bilsh2I-sVMAZC37KUtxKoj-ss8vzNGaQjLn2UP42zjQo0PYu2MMy7KJ9o-BCspXsSbDcF7kfUi9kP_dOQjq1CtUOwQnpYd3M5_jWNuKjai9lOSyhXkRAhnkLem_rOWRQrTP5D_UlBKmEflZtoK-cPctb3ra9aqoANOIu2pYM3N7ztodW7xCprDENOt3hfkeFZs8PAYYQsW94BO0'
    }
];

const filterTabs = ['Semua', 'Belum Dibaca', 'Pesanan Aktif'];

export function SellerChatListPage() {
    const navigate = useNavigate();
    const [activeFilter, setActiveFilter] = useState('Semua');
    const [searchQuery, setSearchQuery] = useState('');
    const [chats, setChats] = useState(mockChats);

    const filteredChats = chats.filter(chat => {
        const matchesFilter = activeFilter === 'Semua' ||
            (activeFilter === 'Belum Dibaca' && chat.unread > 0) ||
            (activeFilter === 'Pesanan Aktif' && chat.orderInfo);
        const matchesSearch = searchQuery === '' ||
            chat.buyerName.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    const totalUnread = chats.reduce((acc, chat) => acc + chat.unread, 0);

    const handleOpenChat = (chat: BuyerChat) => {
        // Mark as read
        setChats(prev => prev.map(c =>
            c.id === chat.id ? { ...c, unread: 0 } : c
        ));
        navigate(`/seller/chat/${encodeURIComponent(chat.buyerName)}`, { state: chat });
    };

    return (
        <MobileContainer className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col">
            {/* Header */}
            <div className="sticky top-0 z-20 bg-surface-light dark:bg-surface-dark shadow-sm">
                <div className="flex items-center justify-between p-4 max-w-6xl mx-auto w-full">
                    <button
                        onClick={() => navigate('/seller-center')}
                        className="flex size-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                    >
                        <Icon name="arrow_back" size={24} className="text-text-main dark:text-white" />
                    </button>
                    <div className="flex-1 text-center">
                        <h2 className="text-lg font-bold text-text-main dark:text-white">Chat Pembeli</h2>
                        {totalUnread > 0 && (
                            <p className="text-xs text-primary font-medium">{totalUnread} pesan belum dibaca</p>
                        )}
                    </div>
                    <button
                        onClick={() => navigate('/settings')}
                        className="flex size-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-text-main dark:text-white"
                    >
                        <Icon name="settings" size={24} />
                    </button>
                </div>

                {/* Search */}
                <div className="px-4 pb-3 max-w-6xl mx-auto w-full">
                    <div className="flex items-center gap-2 h-11 bg-[#f5f2f0] dark:bg-[#3a322b] rounded-lg px-3">
                        <Icon name="search" size={20} className="text-text-secondary dark:text-white/50" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Cari pembeli..."
                            className="flex-1 bg-transparent border-none text-sm text-text-main dark:text-white placeholder:text-text-secondary dark:placeholder:text-white/50 focus:outline-none"
                        />
                    </div>
                </div>

                {/* Filter Tabs */}
                <div className="flex gap-2 px-4 pb-3 overflow-x-auto no-scrollbar max-w-6xl mx-auto w-full border-b border-gray-100 dark:border-white/5">
                    {filterTabs.map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveFilter(tab)}
                            className={`flex h-8 shrink-0 items-center justify-center rounded-full px-4 text-sm font-medium transition-colors ${activeFilter === tab
                                    ? 'bg-primary text-white'
                                    : 'bg-gray-100 dark:bg-white/5 text-text-secondary dark:text-white/60 hover:bg-gray-200 dark:hover:bg-white/10'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Chat List */}
            <div className="flex-1 overflow-y-auto pb-24">
                <div className="max-w-6xl mx-auto">
                    {filteredChats.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-16 px-4">
                            <Icon name="chat_bubble_outline" size={64} className="text-gray-300 dark:text-gray-600 mb-4" />
                            <p className="text-text-secondary dark:text-gray-400">Tidak ada chat</p>
                        </div>
                    ) : (
                        filteredChats.map(chat => (
                            <button
                                key={chat.id}
                                onClick={() => handleOpenChat(chat)}
                                className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors border-b border-gray-50 dark:border-white/5 text-left"
                            >
                                {/* Avatar */}
                                <div className="relative shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                                        <img src={chat.buyerAvatar} alt={chat.buyerName} className="w-full h-full object-cover" />
                                    </div>
                                    {chat.isOnline && (
                                        <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 border-2 border-white dark:border-surface-dark rounded-full" />
                                    )}
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between gap-2 mb-0.5">
                                        <div className="flex items-center gap-2 min-w-0">
                                            <h3 className="text-sm font-bold text-text-main dark:text-white truncate">
                                                {chat.buyerName}
                                            </h3>
                                            {chat.orderInfo && (
                                                <span className="shrink-0 text-[10px] px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 font-medium">
                                                    {chat.orderInfo}
                                                </span>
                                            )}
                                        </div>
                                        <span className="shrink-0 text-xs text-text-secondary dark:text-white/50">
                                            {chat.time}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between gap-2">
                                        <p className={`text-sm truncate ${chat.unread > 0 ? 'text-text-main dark:text-white font-medium' : 'text-text-secondary dark:text-white/60'}`}>
                                            {chat.lastMessage}
                                        </p>
                                        {chat.unread > 0 && (
                                            <span className="shrink-0 flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full bg-primary text-white text-[10px] font-bold">
                                                {chat.unread}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Product Preview */}
                                {chat.hasProduct && chat.productImage && (
                                    <div className="shrink-0 w-10 h-10 rounded-lg bg-gray-100 overflow-hidden border border-gray-200 dark:border-white/10">
                                        <img src={chat.productImage} alt="Product" className="w-full h-full object-cover" />
                                    </div>
                                )}
                            </button>
                        ))
                    )}
                </div>
            </div>

            {/* Bottom Navigation */}
            <div className="fixed bottom-0 left-0 right-0 bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-white/10 pb-5 pt-3 px-6 z-30">
                <div className="flex items-center justify-between max-w-6xl mx-auto">
                    <button onClick={() => navigate('/seller-center')} className="flex flex-col items-center gap-1 text-text-secondary dark:text-white/60 hover:text-primary transition-colors">
                        <Icon name="home" size={26} />
                        <span className="text-[10px] font-medium">Beranda</span>
                    </button>
                    <button onClick={() => navigate('/seller/products')} className="flex flex-col items-center gap-1 text-text-secondary dark:text-white/60 hover:text-primary transition-colors">
                        <Icon name="inventory_2" size={26} />
                        <span className="text-[10px] font-medium">Produk</span>
                    </button>
                    <button onClick={() => navigate('/seller/orders')} className="flex flex-col items-center gap-1 text-text-secondary dark:text-white/60 hover:text-primary transition-colors">
                        <Icon name="receipt_long" size={26} />
                        <span className="text-[10px] font-medium">Pesanan</span>
                    </button>
                    <div className="flex flex-col items-center gap-1 text-primary relative">
                        <Icon name="chat" size={26} filled />
                        <span className="text-[10px] font-bold">Chat</span>
                        {totalUnread > 0 && (
                            <div className="absolute -top-1 right-0 w-4 h-4 bg-primary rounded-full flex items-center justify-center text-[8px] text-white font-bold">{totalUnread}</div>
                        )}
                    </div>
                    <button onClick={() => navigate('/profile')} className="flex flex-col items-center gap-1 text-text-secondary dark:text-white/60 hover:text-primary transition-colors">
                        <Icon name="person" size={26} />
                        <span className="text-[10px] font-medium">Saya</span>
                    </button>
                </div>
            </div>
        </MobileContainer>
    );
}
