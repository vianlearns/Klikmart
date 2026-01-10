import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../../components/common/Icon';
import { MobileContainer } from '../../components/layout/MobileContainer';
import { Header } from '../../components/layout/Header';
import { notificationsData } from '../../data/buyerData';

type TabType = 'pesanan' | 'promo' | 'wallet' | 'sistem';

export function NotificationPage() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<TabType>('pesanan');
    const [notifications, setNotifications] = useState(notificationsData);

    const filteredNotifications = notifications.filter(n => n.group === activeTab);

    // Group notifications by date (simplified for now: Hari Ini vs Kemarin)
    // Ideally this would be dynamic based on actual dates
    const todayNotifications = filteredNotifications.filter(n => n.time.includes('jam') || n.time.includes('menit'));
    const yesterdayNotifications = filteredNotifications.filter(n => !n.time.includes('jam') && !n.time.includes('menit'));

    const handleMarkAllRead = () => {
        setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
    };

    const handleNotificationClick = (id: number) => {
        setNotifications(prev => prev.map(n => n.id === id ? { ...n, isRead: true } : n));
        // Navigation logic based on type could go here
    };

    const renderTab = (value: TabType, label: string) => (
        <button
            onClick={() => setActiveTab(value)}
            className={`flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-all whitespace-nowrap ${activeTab === value
                    ? 'bg-primary text-white shadow-md shadow-primary/25'
                    : 'bg-gray-100 hover:bg-gray-200 dark:bg-[#393028] dark:hover:bg-[#4a3e36] text-gray-600 dark:text-[#baaa9c]'
                }`}
        >
            {label}
            {value === 'sistem' && activeTab !== 'sistem' && (
                <span className="ml-2 flex size-1.5 rounded-full bg-red-500 block"></span>
            )}
        </button>
    );

    return (
        <MobileContainer className="bg-background-light dark:bg-background-dark min-h-screen">
            {/* Desktop Header */}
            <Header className="hidden md:block" showMobileElements={false} />

            <div className="md:max-w-4xl md:mx-auto md:px-6 md:py-8 w-full">
                {/* Header Section */}
                <div className="hidden md:flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Notifikasi</h1>
                    <button
                        onClick={handleMarkAllRead}
                        className="text-primary text-sm font-bold hover:underline transition-all"
                    >
                        Tandai sudah dibaca
                    </button>
                </div>

                {/* Mobile Header */}
                <div className="md:hidden sticky top-0 z-50 bg-background-light dark:bg-background-dark/95 backdrop-blur-sm border-b dark:border-[#393028] border-gray-200">
                    <div className="flex items-center p-4 justify-between">
                        <button
                            onClick={() => navigate(-1)}
                            className="flex size-10 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                        >
                            <Icon name="arrow_back" size={24} className="text-slate-900 dark:text-white" />
                        </button>
                        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-2 text-slate-900 dark:text-white">Notifikasi</h2>
                        <button onClick={handleMarkAllRead} className="flex items-center justify-end">
                            <span className="text-primary text-sm font-bold leading-normal tracking-[0.015em] shrink-0 hover:opacity-80 transition-opacity">Baca semua</span>
                        </button>
                    </div>

                    {/* Tabs Mobile */}
                    <div className="px-4 pb-3 pt-1 w-full overflow-x-auto no-scrollbar">
                        <div className="flex space-x-2 min-w-max">
                            {renderTab('pesanan', 'Pesanan')}
                            {renderTab('promo', 'Promo')}
                            {renderTab('wallet', 'Info Wallet')}
                            {renderTab('sistem', 'Sistem')}
                        </div>
                    </div>
                </div>

                {/* Desktop Tabs */}
                <div className="hidden md:flex gap-4 border-b border-gray-200 dark:border-gray-800 mb-6">
                    {['pesanan', 'promo', 'wallet', 'sistem'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab as TabType)}
                            className={`pb-3 px-2 text-sm font-bold capitalize transition-colors relative ${activeTab === tab
                                    ? 'text-primary'
                                    : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                                }`}
                        >
                            {tab === 'wallet' ? 'Info Wallet' : tab}
                            {activeTab === tab && (
                                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-full" />
                            )}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="flex-1 flex flex-col md:bg-white md:dark:bg-[#221810] md:rounded-2xl md:shadow-sm md:border md:border-gray-100 md:dark:border-gray-800 md:min-h-[500px]">
                    {filteredNotifications.length === 0 ? (
                        <div className="flex flex-col items-center justify-center flex-1 py-12 md:py-20">
                            <div className="w-20 h-20 bg-gray-100 dark:bg-white/5 rounded-full flex items-center justify-center mb-4">
                                <Icon name="notifications_off" size={40} className="text-gray-300 dark:text-gray-600" />
                            </div>
                            <p className="text-gray-500 dark:text-gray-400 font-medium">Belum ada notifikasi di sini</p>
                        </div>
                    ) : (
                        <>
                            {todayNotifications.length > 0 && (
                                <div className="mt-2 md:mt-0">
                                    <h4 className="bg-gray-100 dark:bg-[#2f2219] md:bg-gray-50 md:dark:bg-[#2c241d] md:rounded-t-2xl text-gray-500 dark:text-[#baaa9c] text-xs font-bold uppercase tracking-wider px-4 py-2 sticky top-[106px] md:static z-10">
                                        Hari Ini
                                    </h4>
                                    {todayNotifications.map(notification => (
                                        <NotificationItem key={notification.id} item={notification} onClick={handleNotificationClick} />
                                    ))}
                                </div>
                            )}

                            {yesterdayNotifications.length > 0 && (
                                <div>
                                    <h4 className="bg-gray-100 dark:bg-[#2f2219] md:bg-gray-50 md:dark:bg-[#2c241d] text-gray-500 dark:text-[#baaa9c] text-xs font-bold uppercase tracking-wider px-4 py-2 sticky top-[106px] md:static z-10 border-t border-gray-100 md:border-none dark:border-[#393028]">
                                        Kemarin
                                    </h4>
                                    {yesterdayNotifications.map(notification => (
                                        <NotificationItem key={notification.id} item={notification} onClick={handleNotificationClick} />
                                    ))}
                                </div>
                            )}
                        </>
                    )}
                </div>

                <div className="h-10 bg-transparent md:hidden"></div>
            </div>
        </MobileContainer>
    );
}

function NotificationItem({ item, onClick }: { item: any, onClick: (id: number) => void }) {
    return (
        <div
            onClick={() => onClick(item.id)}
            className={`relative flex gap-4 px-4 py-4 hover:bg-gray-50 dark:hover:bg-[#2a2018] transition-colors cursor-pointer border-b border-gray-100 dark:border-[#393028] last:border-0 ${!item.isRead ? 'bg-primary/5 dark:bg-primary/5' : ''}`}
        >
            {!item.isRead && (
                <div className="absolute right-4 top-4">
                    <div className="size-2 rounded-full bg-primary"></div>
                </div>
            )}
            <div className="flex items-start gap-3 w-full">
                {item.image ? (
                    <div
                        className="bg-center bg-no-repeat bg-cover rounded-lg size-12 shrink-0 border border-gray-200 dark:border-transparent"
                        style={{ backgroundImage: `url("${item.image}")` }}
                    />
                ) : (
                    <div className={`flex items-center justify-center rounded-lg shrink-0 size-12 bg-${item.color}-100 text-${item.color}-600 dark:bg-[#393028] dark:text-${item.color === 'orange' ? 'primary' : item.color === 'purple' ? 'purple-400' : 'green-500'}`}>
                        <Icon name={item.icon} size={24} />
                    </div>
                )}

                <div className="flex flex-1 flex-col pr-6">
                    <div className="flex justify-between items-start mb-1">
                        <p className={`text-slate-900 dark:text-white text-base leading-tight ${!item.isRead ? 'font-bold' : 'font-semibold'}`}>{item.title}</p>
                        <p className="text-gray-500 dark:text-[#baaa9c] text-xs font-medium shrink-0 ml-2">{item.time}</p>
                    </div>
                    <p className={`text-gray-600 dark:text-[#baaa9c] text-sm leading-normal line-clamp-2 ${item.action ? 'mb-3' : ''}`}>
                        {item.content}
                    </p>
                    {item.action && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                // Navigate logic here
                            }}
                            className="flex items-center justify-center rounded-lg h-9 px-4 bg-primary hover:bg-orange-600 text-white text-sm font-semibold w-fit transition-colors shadow-sm"
                        >
                            {item.action}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
