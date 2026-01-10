import { useState, useRef, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { Icon } from '../../components/common/Icon';
import { MobileContainer } from '../../components/layout/MobileContainer';

interface Message {
    id: string;
    text: string;
    time: string;
    isFromSeller: boolean;
    type?: 'text' | 'image' | 'product' | 'order';
    productInfo?: {
        name: string;
        price: number;
        image: string;
    };
    orderInfo?: {
        orderId: string;
        status: string;
    };
}

interface BuyerInfo {
    buyerName: string;
    buyerAvatar: string;
    isOnline: boolean;
    orderInfo?: string;
}

const quickReplies = [
    'Baik kak, siap! 👍',
    'Stok tersedia kak',
    'Pesanan sudah dikirim',
    'Terima kasih sudah order 🙏',
    'Ada yang bisa dibantu lagi?'
];

export function SellerChatRoomPage() {
    const navigate = useNavigate();
    const { title } = useParams();
    const location = useLocation();
    const buyerInfo = location.state as BuyerInfo | null;

    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: 'Halo kak, saya mau tanya tentang produk ini',
            time: '14:25',
            isFromSeller: false
        },
        {
            id: '2',
            text: 'Kak, barangnya ready size L?',
            time: '14:30',
            isFromSeller: false
        }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const [showQuickReplies, setShowQuickReplies] = useState(false);
    const [showActions, setShowActions] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = () => {
        if (inputMessage.trim()) {
            const newMessage: Message = {
                id: Date.now().toString(),
                text: inputMessage,
                time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
                isFromSeller: true
            };
            setMessages(prev => [...prev, newMessage]);
            setInputMessage('');
            setShowQuickReplies(false);
        }
    };

    const handleQuickReply = (text: string) => {
        const newMessage: Message = {
            id: Date.now().toString(),
            text: text,
            time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
            isFromSeller: true
        };
        setMessages(prev => [...prev, newMessage]);
        setShowQuickReplies(false);
    };

    const handleSendOrderUpdate = () => {
        const newMessage: Message = {
            id: Date.now().toString(),
            text: '',
            time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
            isFromSeller: true,
            type: 'order',
            orderInfo: {
                orderId: buyerInfo?.orderInfo || 'ORD-001',
                status: 'Pesanan sudah dikirim via J&T Express'
            }
        };
        setMessages(prev => [...prev, newMessage]);
        setShowActions(false);
    };

    const handleSendProduct = () => {
        const newMessage: Message = {
            id: Date.now().toString(),
            text: '',
            time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
            isFromSeller: true,
            type: 'product',
            productInfo: {
                name: 'Kaos Polos Cotton Combed 30s - Size L',
                price: 45000,
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC62DAUQkNEd0PauAXAYH0XIxbmjnarOCuPxG8XhokMQXy6lijvyiGSbdWivcgJBiwvLrEf1XQQJIQytXU-gCsO8tRc0eDbHaoAOx1xwtRGE-uvRtRzxdhaJIPMB1sRa_VrDoahJI98alzuWZ-ymgJEcFZ2Jg7w24W8-mlRtIEB8vKbLvEmOW2YZShUGiq-P1KNp9Cjqgd7e6uQI3ukhzfVPKywegVA-V7LExqsx8K_ozJHg4YmTLJxTF4ueDIU9XNNg3evkrqiOm1C'
            }
        };
        setMessages(prev => [...prev, newMessage]);
        setShowActions(false);
    };

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(price);
    };

    return (
        <MobileContainer className="bg-background-light dark:bg-background-dark h-screen flex flex-col overflow-hidden">
            {/* Header */}
            <div className="sticky top-0 z-20 bg-surface-light dark:bg-surface-dark shadow-sm shrink-0">
                <div className="flex items-center gap-3 p-3 max-w-6xl mx-auto w-full">
                    <button
                        onClick={() => navigate('/seller/chat')}
                        className="flex size-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                    >
                        <Icon name="arrow_back" size={24} className="text-text-main dark:text-white" />
                    </button>

                    {/* Buyer Info */}
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                        <div className="relative shrink-0">
                            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                                {buyerInfo?.buyerAvatar ? (
                                    <img src={buyerInfo.buyerAvatar} alt={title} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                                        <Icon name="person" size={24} />
                                    </div>
                                )}
                            </div>
                            {buyerInfo?.isOnline && (
                                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white dark:border-surface-dark rounded-full" />
                            )}
                        </div>
                        <div className="min-w-0">
                            <h2 className="text-base font-bold text-text-main dark:text-white truncate">
                                {decodeURIComponent(title || 'Pembeli')}
                            </h2>
                            <p className="text-xs text-text-secondary dark:text-white/60">
                                {buyerInfo?.isOnline ? 'Online' : 'Terakhir aktif 2 jam lalu'}
                            </p>
                        </div>
                    </div>

                    {/* Header Actions */}
                    <div className="flex items-center gap-1">
                        {buyerInfo?.orderInfo && (
                            <button
                                onClick={() => navigate('/seller/orders')}
                                className="px-3 py-1.5 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold hover:bg-blue-500/20 transition-colors"
                            >
                                {buyerInfo.orderInfo}
                            </button>
                        )}
                        <button className="flex size-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-text-main dark:text-white">
                            <Icon name="more_vert" size={24} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto px-4 py-4">
                <div className="max-w-3xl mx-auto w-full space-y-4">
                    {messages.map(message => (
                        <div
                            key={message.id}
                            className={`flex ${message.isFromSeller ? 'justify-end' : 'justify-start'}`}
                        >
                            <div className={`max-w-[80%] ${message.isFromSeller ? 'order-2' : ''}`}>
                                {/* Regular Text Message */}
                                {(!message.type || message.type === 'text') && (
                                    <div className={`px-4 py-2.5 rounded-2xl ${message.isFromSeller
                                            ? 'bg-primary text-white rounded-br-md'
                                            : 'bg-white dark:bg-surface-dark text-text-main dark:text-white rounded-bl-md shadow-sm border border-gray-100 dark:border-white/5'
                                        }`}>
                                        <p className="text-sm leading-relaxed">{message.text}</p>
                                    </div>
                                )}

                                {/* Product Message */}
                                {message.type === 'product' && message.productInfo && (
                                    <div className="bg-white dark:bg-surface-dark rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-white/5 max-w-[250px]">
                                        <div className="w-full h-32 bg-gray-100">
                                            <img src={message.productInfo.image} alt={message.productInfo.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="p-3">
                                            <p className="text-sm font-medium text-text-main dark:text-white line-clamp-2 mb-1">
                                                {message.productInfo.name}
                                            </p>
                                            <p className="text-primary font-bold text-sm">
                                                {formatPrice(message.productInfo.price)}
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {/* Order Update Message */}
                                {message.type === 'order' && message.orderInfo && (
                                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/30 rounded-2xl p-3 max-w-[250px]">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Icon name="local_shipping" size={20} className="text-blue-600 dark:text-blue-400" />
                                            <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                                                {message.orderInfo.orderId}
                                            </span>
                                        </div>
                                        <p className="text-sm text-blue-700 dark:text-blue-300">
                                            {message.orderInfo.status}
                                        </p>
                                    </div>
                                )}

                                <p className={`text-[10px] text-text-secondary dark:text-white/40 mt-1 ${message.isFromSeller ? 'text-right' : ''}`}>
                                    {message.time}
                                    {message.isFromSeller && (
                                        <Icon name="done_all" size={14} className="inline ml-1 text-blue-500" />
                                    )}
                                </p>
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>
            </div>

            {/* Quick Replies */}
            {showQuickReplies && (
                <div className="shrink-0 bg-surface-light dark:bg-surface-dark border-t border-gray-100 dark:border-white/5 px-4 py-3">
                    <div className="flex gap-2 overflow-x-auto no-scrollbar max-w-3xl mx-auto">
                        {quickReplies.map((reply, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleQuickReply(reply)}
                                className="shrink-0 px-3 py-2 rounded-full bg-gray-100 dark:bg-white/5 text-sm text-text-main dark:text-white hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
                            >
                                {reply}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Action Panel */}
            {showActions && (
                <div className="shrink-0 bg-surface-light dark:bg-surface-dark border-t border-gray-100 dark:border-white/5 px-4 py-4">
                    <div className="grid grid-cols-4 gap-4 max-w-3xl mx-auto">
                        <button
                            onClick={handleSendProduct}
                            className="flex flex-col items-center gap-2"
                        >
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <Icon name="inventory_2" size={24} />
                            </div>
                            <span className="text-xs text-text-secondary dark:text-white/60">Produk</span>
                        </button>
                        <button
                            onClick={handleSendOrderUpdate}
                            className="flex flex-col items-center gap-2"
                        >
                            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                <Icon name="local_shipping" size={24} />
                            </div>
                            <span className="text-xs text-text-secondary dark:text-white/60">Pengiriman</span>
                        </button>
                        <button className="flex flex-col items-center gap-2">
                            <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 dark:text-green-400">
                                <Icon name="confirmation_number" size={24} />
                            </div>
                            <span className="text-xs text-text-secondary dark:text-white/60">Voucher</span>
                        </button>
                        <button className="flex flex-col items-center gap-2">
                            <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400">
                                <Icon name="image" size={24} />
                            </div>
                            <span className="text-xs text-text-secondary dark:text-white/60">Gambar</span>
                        </button>
                    </div>
                </div>
            )}

            {/* Input Area */}
            <div className="shrink-0 bg-surface-light dark:bg-surface-dark border-t border-gray-100 dark:border-white/5 px-4 py-3 pb-8">
                <div className="flex items-center gap-2 max-w-3xl mx-auto">
                    <button
                        onClick={() => {
                            setShowActions(!showActions);
                            setShowQuickReplies(false);
                        }}
                        className={`flex size-10 items-center justify-center rounded-full transition-colors ${showActions ? 'bg-primary text-white' : 'hover:bg-gray-100 dark:hover:bg-white/10 text-text-main dark:text-white'}`}
                    >
                        <Icon name="add" size={24} />
                    </button>
                    <button
                        onClick={() => {
                            setShowQuickReplies(!showQuickReplies);
                            setShowActions(false);
                        }}
                        className={`flex size-10 items-center justify-center rounded-full transition-colors ${showQuickReplies ? 'bg-primary text-white' : 'hover:bg-gray-100 dark:hover:bg-white/10 text-text-main dark:text-white'}`}
                    >
                        <Icon name="flash_on" size={24} />
                    </button>
                    <div className="flex-1 flex items-center bg-[#f5f2f0] dark:bg-[#3a322b] rounded-full px-4 h-11">
                        <input
                            type="text"
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                            placeholder="Ketik pesan..."
                            className="flex-1 bg-transparent border-none text-sm text-text-main dark:text-white placeholder:text-text-secondary dark:placeholder:text-white/50 focus:outline-none"
                        />
                    </div>
                    <button
                        onClick={handleSendMessage}
                        disabled={!inputMessage.trim()}
                        className="flex size-11 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <Icon name="send" size={22} />
                    </button>
                </div>
            </div>
        </MobileContainer>
    );
}
