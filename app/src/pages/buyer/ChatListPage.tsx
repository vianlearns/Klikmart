import { useNavigate } from 'react-router-dom';
import { Icon } from '../../components/common/Icon';
import { MobileContainer } from '../../components/layout/MobileContainer';
import { Header } from '../../components/layout/Header';
import { chatList } from '../../data/buyerData';
import { useState } from 'react';

export function ChatListPage() {
    const navigate = useNavigate();
    const [activeChat, setActiveChat] = useState<string | null>(null);

    return (
        <MobileContainer className="bg-background-light dark:bg-background-dark min-h-screen">
            {/* Desktop Header */}
            <Header className="hidden md:block" showMobileElements={false} />

            <div className="md:max-w-4xl md:mx-auto md:px-6 md:py-8 w-full">
                {/* Desktop Title */}
                <h1 className="hidden md:block text-2xl font-bold text-gray-900 dark:text-white mb-6">Chat</h1>

                {/* Mobile Header */}
                <div className="md:hidden sticky top-0 z-50 bg-white dark:bg-[#221810] border-b border-gray-100 dark:border-white/5 px-4 py-3">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => navigate(-1)}
                            className="flex items-center justify-center p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
                        >
                            <Icon name="arrow_back" size={24} className="text-gray-900 dark:text-white" />
                        </button>
                        <h1 className="text-lg font-bold text-gray-900 dark:text-white flex-1">Chat</h1>
                        <button className="p-2 -mr-2 text-gray-600 dark:text-gray-300">
                            <Icon name="search" size={24} />
                        </button>
                    </div>
                </div>

                {/* Chat List Container */}
                <div className="flex flex-col md:bg-white md:dark:bg-[#221810] md:rounded-2xl md:shadow-sm md:border md:border-gray-100 md:dark:border-gray-800 md:min-h-[600px] overflow-hidden">
                    {/* Desktop Search Inside List */}
                    <div className="hidden md:block p-4 border-b border-gray-100 dark:border-gray-800">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Icon name="search" className="text-gray-400" size={20} />
                            </div>
                            <input
                                className="block w-full pl-10 pr-3 py-2 border rounded-lg bg-gray-50 dark:bg-[#2c241d] border-gray-200 dark:border-gray-700 text-sm focus:ring-1 focus:ring-primary focus:border-primary transition-shadow"
                                placeholder="Cari chat..."
                                type="text"
                            />
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto">
                        {chatList.map((chat) => (
                            <div
                                key={chat.id}
                                onClick={() => {
                                    setActiveChat(chat.id);
                                    navigate(`/chat/${encodeURIComponent(chat.title)}`, { state: chat });
                                }}
                                className={`flex items-center gap-4 p-4 hover:bg-gray-50 dark:hover:bg-[#2c241d]/50 transition-colors cursor-pointer border-b border-gray-50 dark:border-white/5 last:border-0 ${activeChat === chat.id ? 'bg-primary/5' : ''}`}
                            >
                                {/* Avatar */}
                                <div className="relative shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden border border-gray-100 dark:border-gray-700">
                                        <img src={chat.avatar} alt={chat.title} className="w-full h-full object-cover" />
                                    </div>
                                    {chat.isOnline && (
                                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-[#221810] rounded-full"></div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className="text-base font-bold text-gray-900 dark:text-white truncate pr-2 flex items-center gap-1">
                                            {chat.title}
                                            {chat.type === 'seller' && (
                                                <span className="text-[10px] px-1.5 py-0.5 rounded bg-primary/10 text-primary font-bold uppercase tracking-wide">
                                                    Star
                                                </span>
                                            )}
                                        </h3>
                                        <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">{chat.time}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className={`text-sm truncate pr-4 ${chat.unread > 0 ? 'text-gray-900 dark:text-white font-semibold' : 'text-gray-500 dark:text-gray-400'}`}>
                                            {chat.lastMessage}
                                        </p>
                                        {chat.unread > 0 && (
                                            <span className="shrink-0 flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full bg-primary text-white text-[10px] font-bold shadow-sm">
                                                {chat.unread}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Floating Action Button */}
                <button
                    onClick={() => window.alert("Fitur chat baru belum tersedia")}
                    className="fixed bottom-24 right-4 md:bottom-10 md:right-10 w-12 h-12 md:w-14 md:h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary/90 transition-transform active:scale-95 z-20 hover:shadow-xl hover:shadow-primary/30"
                >
                    <Icon name="chat_bubble" size={24} />
                </button>
            </div>
        </MobileContainer>
    );
}
