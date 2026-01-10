import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { Icon } from '../../components/common/Icon';
import { MobileContainer } from '../../components/layout/MobileContainer';
import { initialMessages } from '../../data/buyerData';
import { useState, useRef, useEffect } from 'react';

export function ChatRoomPage() {
    const navigate = useNavigate();
    const { title } = useParams();
    const location = useLocation();

    // Fallback data if state is missing
    const defaultChatData = {
        title: decodeURIComponent(title || 'Chat'),
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_XS2PsovIeUQjPfXz2ULl6wcUjHxtS_-94s7OtDpGeohXHnohenWNvN8kyhnK8J_AyGH7ZVpbdbOMVlNO3VPmJqVZXKrwwFHdE1JRqmaHfZEcwvwylva4fuFAttYLOzBp4at6Bxoj7o9xHUgZhHQ8jMroeCOotW1Wc-z_-Gp4X4ZnA6mvnetZ3V3UiKi7qSU3EcuYgL4tP4_7cCiu28WayEtHfKdPJxWjSncKejiCF6k9vRub7TxBlplp8MapmVdipnn2Y-F3b-Gn',
        isOnline: true
    };

    const chatData = location.state || defaultChatData;
    const [messages, setMessages] = useState(initialMessages);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = () => {
        if (!inputValue.trim()) return;

        const newMessage = {
            id: `m${Date.now()}`,
            sender: 'user',
            text: inputValue,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            type: 'text',
            isProductContext: false
        };

        setMessages([...messages, newMessage]);
        setInputValue('');
    };

    const handleQuickReply = (text: string) => {
        const newMessage = {
            id: `m${Date.now()}`,
            sender: 'user',
            text: text,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            type: 'text',
            isProductContext: false
        };
        setMessages([...messages, newMessage]);
    };

    return (
        <MobileContainer className="h-screen flex flex-col overflow-hidden bg-background-light dark:bg-background-dark">
            <div className="md:max-w-4xl md:mx-auto md:w-full md:h-[calc(100vh-40px)] md:my-5 md:bg-white md:dark:bg-[#221810] md:rounded-2xl md:shadow-xl md:border md:border-gray-200 md:dark:border-gray-800 md:flex md:flex-col md:overflow-hidden">

                {/* Top Navigation Bar */}
                <header className="bg-white dark:bg-[#2a1e16] md:bg-white md:dark:bg-transparent border-b border-gray-100 dark:border-gray-800 shrink-0 z-30 shadow-sm md:shadow-none">
                    <div className="flex items-center p-3 pb-3 justify-between gap-2 md:px-6 md:py-4">
                        <button
                            onClick={() => navigate(-1)}
                            className="flex items-center text-[#181411] dark:text-white p-1 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors"
                        >
                            <Icon name="arrow_back" size={24} />
                        </button>

                        <div className="flex flex-1 items-center gap-3 overflow-hidden">
                            <div className="relative shrink-0">
                                <div
                                    className="w-10 h-10 rounded-full bg-gray-200 bg-center bg-cover border border-gray-100 dark:border-gray-700"
                                    style={{ backgroundImage: `url("${chatData.avatar}")` }}
                                />
                                {chatData.isOnline && (
                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-[#2a1e16] rounded-full" />
                                )}
                            </div>
                            <div className="flex flex-col justify-center overflow-hidden">
                                <div className="flex items-center gap-1">
                                    <h2 className="text-base font-bold leading-tight truncate text-gray-900 dark:text-white">{chatData.title}</h2>
                                    <span className="bg-primary/10 text-primary text-[10px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wide">Star</span>
                                </div>
                                <p className="text-green-600 dark:text-green-400 text-xs font-medium truncate">Online 5 minutes ago</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-1">
                            <button className="p-2 text-[#181411] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-full transition-colors">
                                <Icon name="search" size={24} />
                            </button>
                            <button className="p-2 text-[#181411] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-full transition-colors">
                                <Icon name="more_vert" size={24} />
                            </button>
                        </div>
                    </div>
                </header>

                {/* Sticky Product Context Header */}
                <div className="bg-white dark:bg-[#2a1e16]/90 md:bg-gray-50 md:dark:bg-[#2c241d] backdrop-blur-sm border-b border-gray-100 dark:border-gray-800 p-3 shrink-0 z-20 md:px-6 text-left">
                    <div className="flex items-center gap-3">
                        <div
                            className="w-12 h-12 rounded bg-gray-100 bg-center bg-cover shrink-0 border border-gray-200 dark:border-gray-700"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAEbEoE2R7B3Y3k8puYvmHULgztgds0JJLOklgI32q9_x4qIVbMbMfXQ4JkKX6VLdA7UZe5bbg0wOGhHjiFXZ31-4js5rr-9eEagC4p-JJy6bcA_QO1tRdvS1olrTdhITfm69IKxFWQMq_vGA1T0a43zGBNIRg5H49I3dR0KUbe6yiQD3iv8fhU_gHQBOK91yTQlmEVTUWddhkJqauoi9giUaKDxf2rsaRtjhBD-x-TGdAWo-Dfc-_WYf1s77nNZgAoTatnELzkw4by")' }}
                        />
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-bold text-[#181411] dark:text-white truncate">Kemeja Flannel Pria Premium</p>
                            <p className="text-primary text-sm font-semibold">Rp 120.000</p>
                        </div>
                        <button className="bg-primary hover:bg-primary/90 text-white text-xs font-bold px-4 py-2 rounded-lg transition-transform active:scale-95 shadow-sm">
                            Kirim
                        </button>
                    </div>
                </div>

                {/* Message List Area */}
                <main className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-background-light dark:bg-background-dark md:bg-white md:dark:bg-[#221810] scroll-smooth md:px-6">
                    {/* Date Separator */}
                    <div className="flex justify-center">
                        <span className="bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-[10px] font-medium px-3 py-1 rounded-full">
                            Today
                        </span>
                    </div>

                    {/* System Message */}
                    <div className="bg-[#fff4e5] dark:bg-orange-900/20 border border-orange-100 dark:border-orange-900/30 rounded-lg p-3 mx-4 md:mx-auto md:max-w-md text-center">
                        <div className="flex flex-col gap-1 items-center">
                            <Icon name="security" size={20} className="text-primary" />
                            <p className="text-[#8a7460] dark:text-orange-200 text-xs font-normal leading-normal">
                                Tips Keamanan: Jangan pernah mentransfer pembayaran secara langsung ke penjual di luar aplikasi.
                            </p>
                        </div>
                    </div>

                    {messages.map((msg) => (
                        <div key={msg.id} className={`flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} group`}>
                            {msg.sender === 'seller' && (
                                <div
                                    className="w-8 h-8 rounded-full bg-gray-200 bg-center bg-cover shrink-0 border border-gray-100 dark:border-gray-700"
                                    style={{ backgroundImage: `url("${chatData.avatar}")` }}
                                />
                            )}

                            <div className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'} gap-1 max-w-[80%] md:max-w-[70%]`}>
                                {msg.isProductContext && (
                                    <div className="bg-white dark:bg-[#2a1e16] p-2 rounded-xl rounded-tr-none shadow-sm border border-gray-100 dark:border-gray-800 mb-1">
                                        <div className="flex gap-3">
                                            <div
                                                className="w-16 h-16 rounded bg-gray-100 bg-center bg-cover shrink-0"
                                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCSl1szJIvU-wqklzAdcAgU2_qBkZ_gr5GgSxO8fmidCp9kBgiXdAQ8RRdMzN2SEhX8r0aFPVrxJU_Kw_P-r6lk9Pe-Kn5Vw1BVdJCTWCtgKpjpmVvy9gM6cxJVPIHGAkpZlSoaDQ7PZY83ogW3W8qZ1TJkRJItpXehrekekGCg8Vsw1Dr-ZV6wngq-yPSNF3WprsU7-imy-9mOCJCyXakO6ZNHZPEBl2IF8GQQxE8GHXXrNuKl2sZWaCgSzXM9MyMB_VSe1HDRrSBa")' }}
                                            />
                                            <div className="flex flex-col justify-center min-w-0 pr-2">
                                                <p className="text-xs font-bold text-[#181411] dark:text-white line-clamp-1">Kemeja Flannel Pria</p>
                                                <p className="text-primary text-xs font-bold mt-0.5">Rp 120.000</p>
                                            </div>
                                        </div>
                                        <div className="mt-2 pt-2 border-t border-gray-100 dark:border-gray-700 text-right">
                                            <span className="text-[10px] text-gray-400 dark:text-gray-500 uppercase font-bold tracking-wider">Terkirim</span>
                                        </div>
                                    </div>
                                )}

                                <div className={`px-4 py-3 rounded-2xl shadow-sm border ${msg.sender === 'user'
                                        ? 'bg-primary text-white rounded-tr-sm border-transparent'
                                        : 'bg-white dark:bg-[#2a1e16] text-[#181411] dark:text-gray-100 rounded-tl-sm border-gray-100 dark:border-gray-800'
                                    }`}>
                                    <p className="text-sm font-normal leading-relaxed">{msg.text}</p>
                                </div>
                                <div className={`flex items-center gap-1 ${msg.sender === 'user' ? 'mr-1' : 'ml-1'}`}>
                                    <span className="text-[10px] text-gray-400">{msg.time}</span>
                                    {msg.sender === 'user' && (
                                        <Icon name="done_all" size={14} className="text-primary" />
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}

                    <div ref={messagesEndRef} />
                </main>

                {/* Bottom Input Area */}
                <footer className="bg-white dark:bg-[#2a1e16] md:bg-white md:dark:bg-transparent border-t border-gray-100 dark:border-gray-800 shrink-0 pb-[max(1rem,env(safe-area-inset-bottom))] md:pb-4 md:pt-2">
                    {/* Quick Action Chips */}
                    <div className="flex gap-2 overflow-x-auto px-4 py-3 no-scrollbar w-full border-b border-gray-50 dark:border-gray-800/50 md:border-none md:max-w-4xl md:mx-auto">
                        {['Apakah ini tersedia?', 'Kapan dikirim?', 'Bisa lihat foto asli?', 'Terima kasih'].map((text, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleQuickReply(text)}
                                className="shrink-0 bg-white dark:bg-[#362921] md:bg-gray-50 md:dark:bg-[#2c241d] border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap hover:bg-gray-100 dark:hover:bg-white/10 active:scale-95 transition-transform"
                            >
                                {text}
                            </button>
                        ))}
                    </div>

                    {/* Input Field Row */}
                    <div className="flex items-end gap-2 p-3 md:px-6 md:py-2">
                        <button className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                            <Icon name="add_circle" size={24} />
                        </button>
                        <div className="flex-1 bg-gray-100 dark:bg-[#1a120d] md:bg-gray-50 md:dark:bg-[#2c241d] rounded-2xl flex items-center min-h-[44px] px-4 py-2 border border-transparent focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
                            <input
                                className="w-full bg-transparent border-none focus:ring-0 p-0 text-sm text-[#181411] dark:text-white placeholder-gray-400 dark:placeholder-gray-500 font-normal outline-none"
                                placeholder="Tulis pesan..."
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                            />
                            <button className="ml-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
                                <Icon name="sentiment_satisfied" size={20} />
                            </button>
                        </div>
                        <button
                            onClick={handleSendMessage}
                            disabled={!inputValue.trim()}
                            className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-primary hover:bg-primary/90 shadow-md text-white transition-all active:scale-95 disabled:opacity-50 disabled:active:scale-100"
                        >
                            <Icon name="send" size={20} className="ml-0.5" />
                        </button>
                    </div>
                </footer>
            </div>
        </MobileContainer>
    );
}
