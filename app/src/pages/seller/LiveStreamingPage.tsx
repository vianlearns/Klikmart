import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../../components/common/Icon';
import { MobileContainer } from '../../components/layout/MobileContainer';

interface ChatMessage {
    id: string;
    username: string;
    avatar?: string;
    message: string;
    isSystem?: boolean;
    isPrimary?: boolean;
}

const mockMessages: ChatMessage[] = [
    {
        id: '1',
        username: 'Agus S.',
        message: 'Is the material cotton?'
    },
    {
        id: '2',
        username: 'System',
        message: 'Sarah just bought 2 items! 🔥',
        isSystem: true
    },
    {
        id: '3',
        username: 'Siti Aminah',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGokA9kgglWd1_bbQzio_ZObdnejApKF8o8oskhrW92Xl9RLx0PG0h-wSz2rl7UFmqtl-x3yayGxFo-v-_Q4PD8jRo6RENw_gIHym1EjFDz7ExeuNGoNczMZgE4U_m71tGGt-U_nuArprt6Hw0d3x0Qe70NQXlXBiPpBM1mh40ya2x-T0w-hgy6BPa3jCmDPJ1uLG2iLeg_9TASFTFU3KVM8-WR6mAT8MFpis_rXWPV3X0YwJRChpyOK0muoPPyWchwNj0fYtlwhkl',
        message: 'Is the XL size available?'
    },
    {
        id: '4',
        username: 'Budi Santoso',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBezxR18Hj3ywUqLwqts9cXMljzrWqVrGe3D6ehAmGHqA1bd_YzoydOLEd9M3M_QCDUdLWbGTlHwRCD3EfXlgJso9ZBVoix9jwb4lSFhidOz6mqCZDJYHdY-KTFI3o5n7g51vuAxQ7GRwGeG_Hq2TcydOn0HB797PO-vZuLqIdl1MQM7i0StvC8eqZRAZdZ0IsTQWp_-gl37usLXHW1e0vz7bv0PZ6vnMFi0ZZ5kEVQb6_auY21vfhiLsAGOdRT2C4jCDVRFDquBEuj',
        message: 'Can you show the back detail?',
        isPrimary: true
    }
];

export function LiveStreamingPage() {
    const navigate = useNavigate();
    const [chatMessage, setChatMessage] = useState('');
    const [likeCount] = useState(24500);

    const formatCount = (count: number) => {
        if (count >= 1000) {
            return `${(count / 1000).toFixed(1)}k`;
        }
        return count.toString();
    };

    return (
        <MobileContainer className="bg-background-dark font-display antialiased overflow-hidden">
            <div className="relative h-screen w-full flex flex-col bg-background-dark text-white overflow-hidden">
                {/* Background Video Feed Simulation */}
                <div className="absolute inset-0 z-0">
                    <div
                        className="h-full w-full bg-cover bg-center"
                        style={{
                            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuD_ffEhfk-8WsMRlpMmcGGoWrlIZRL88yAbgClH5H8DHWMWEAIvwgkDfK6TkRxAfFRXIT3bojWWlb7vDNGPzWV5qTYuf9QD3Tn8BSvRxQvfUq7sbhqUOaI1XJDpbTdLgXuXePNGHo0ijuijZtV-7pFOqLyZ598VFTgHv8FNUF3TEo0db3_qEfcnoW9dlBEWaNTD1kKDECY7eHBC9zN3YZNtEE0MyJHXzQylrr05EncgsDUKnSgCzRTJCKUZf6BLbFri_eLs2OiNBcOA')`
                        }}
                    />
                    {/* Gradient Overlays for Readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent via-60% to-black/80" />
                </div>

                {/* Safe Area Top Spacer */}
                <div className="h-12 w-full shrink-0 z-10 pointer-events-none" />

                {/* Top Header Overlay */}
                <header className="relative z-10 flex items-center justify-between px-4 pb-2">
                    {/* Left: Seller Profile */}
                    <div className="flex items-center gap-2 bg-black/30 backdrop-blur-md rounded-full p-1 pr-4 border border-white/10">
                        <div
                            className="h-9 w-9 rounded-full bg-cover bg-center border border-white/20"
                            style={{
                                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCgrm18X7w-qe6tsws2pps1svph6sYsu07KljxmmLiqU5_u_Dqax51df3OBAWeJSEDIZoGBDSWGpSC6E4dXQmy1HxUhFXDPYALbqOoktewgKXOIITtFS9M-OvlG_G0i1rdOhGscpmaip0a-AbybjfaCs2XLl2XbXLpTBKDqw_uevKYys1xuVbMuzFvCNR_-iuvsijdovWGhaKfdeein-46zlzPXyfDV7PeQLCPvA_gtQOPaPfD6doVw7VKV6SejyxU1e3crgF8EEb0J')`
                            }}
                        />
                        <div className="flex flex-col justify-center">
                            <h2 className="text-xs font-bold leading-tight">Fashion Store Official</h2>
                            <span className="text-[10px] text-white/80">Premium Local Brand</span>
                        </div>
                        <button className="bg-primary hover:bg-primary/90 text-white text-xs font-bold px-3 py-1.5 rounded-full ml-1 transition-colors">
                            Follow
                        </button>
                    </div>

                    {/* Right: Viewer Stats & Close */}
                    <div className="flex items-center gap-2">
                        <div className="flex flex-col items-end gap-1">
                            <div className="flex items-center gap-2">
                                <div className="h-6 w-14 shrink-0 flex items-center justify-center rounded bg-primary shadow-lg shadow-primary/20">
                                    <p className="text-white text-[10px] font-bold tracking-wide">LIVE</p>
                                </div>
                                <div className="h-6 shrink-0 flex items-center justify-center gap-x-1 rounded bg-black/40 backdrop-blur-md px-2 border border-white/10">
                                    <Icon name="visibility" size={14} className="text-white" />
                                    <p className="text-white text-[10px] font-medium">1.2k</p>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => navigate('/seller-center')}
                            className="flex size-9 shrink-0 items-center justify-center rounded-full bg-black/20 backdrop-blur-md text-white hover:bg-black/40 transition"
                        >
                            <Icon name="close" size={20} />
                        </button>
                    </div>
                </header>

                {/* Main Content Area */}
                <div className="flex-1 relative z-10 pointer-events-none">
                    {/* Right Floating Actions */}
                    <div className="absolute right-4 bottom-4 flex flex-col gap-4 pointer-events-auto items-center">
                        {/* Share Button */}
                        <div className="flex flex-col items-center gap-1">
                            <button className="size-10 flex items-center justify-center rounded-full bg-black/20 backdrop-blur-md border border-white/10 active:scale-95 transition">
                                <Icon name="share" size={24} className="text-white" />
                            </button>
                            <span className="text-[10px] font-bold drop-shadow-md">Share</span>
                        </div>
                        {/* Filters/Magic Button */}
                        <div className="flex flex-col items-center gap-1">
                            <button className="size-10 flex items-center justify-center rounded-full bg-black/20 backdrop-blur-md border border-white/10 active:scale-95 transition">
                                <Icon name="face" size={24} className="text-white" />
                            </button>
                            <span className="text-[10px] font-bold drop-shadow-md">Effect</span>
                        </div>
                        {/* Like Button */}
                        <div className="flex flex-col items-center gap-1">
                            <button className="size-12 flex items-center justify-center rounded-full bg-primary/20 backdrop-blur-sm border border-primary/50 text-primary active:scale-90 transition animate-pulse">
                                <Icon name="favorite" size={28} filled />
                            </button>
                            <span className="text-[10px] font-bold drop-shadow-md">{formatCount(likeCount)}</span>
                        </div>
                    </div>

                    {/* Voucher Floating Toast */}
                    <div className="absolute top-4 left-4 pointer-events-auto">
                        <div className="flex items-center gap-3 bg-gradient-to-r from-orange-600 to-primary p-2 pr-4 rounded-lg shadow-lg border border-white/20 animate-bounce cursor-pointer">
                            <div className="bg-white/20 rounded p-1">
                                <Icon name="confirmation_number" size={18} className="text-white" />
                            </div>
                            <div>
                                <p className="text-[10px] font-medium text-white/90 uppercase tracking-wider">Flash Voucher</p>
                                <p className="text-xs font-bold text-white">50% OFF Ends in 04:59</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Area Overlay */}
                <div className="relative z-20 flex flex-col justify-end px-4 pb-8 gap-4">
                    {/* Chat Area & Pinned Product Row */}
                    <div className="flex items-end justify-between gap-2">
                        {/* Live Chat Stream */}
                        <div className="w-2/3 h-48 flex flex-col justify-end gap-2 overflow-hidden" style={{ maskImage: 'linear-gradient(to bottom, transparent, black 10%)' }}>
                            {mockMessages.map((msg) => (
                                <div key={msg.id} className="flex items-start gap-2 animate-[fadeIn_0.5s_ease-out]">
                                    {msg.avatar && (
                                        <div
                                            className="h-6 w-6 rounded-full bg-cover bg-center shrink-0 border border-white/20"
                                            style={{ backgroundImage: `url('${msg.avatar}')` }}
                                        />
                                    )}
                                    <div className={`backdrop-blur-sm rounded-2xl rounded-tl-none p-2 px-3 border ${msg.isSystem
                                            ? 'bg-primary/20 border-primary/30'
                                            : 'bg-black/30 border-white/5'
                                        }`}>
                                        <p className="text-sm text-white/90">
                                            <span className={`font-bold mr-1 text-xs ${msg.isSystem
                                                    ? 'text-primary'
                                                    : msg.isPrimary
                                                        ? 'text-primary'
                                                        : 'text-white/60'
                                                }`}>
                                                {msg.username}
                                            </span>
                                            {msg.message}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pinned Product Card */}
                    <div className="relative w-full">
                        <div className="absolute bottom-0 left-0 bg-white dark:bg-[#221810] p-2 rounded-xl flex items-center gap-3 w-[70%] shadow-2xl border border-white/10">
                            <div
                                className="h-12 w-12 rounded-lg bg-cover bg-center shrink-0 bg-gray-200"
                                style={{
                                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCCJMt-KX2XCczsYvJgFKVyq1yQc1USC4yclBpwEop9jvkbekZM-XnQUGkWIPurRxMKWMY3zSaPcVN7UYi0JRRdVlIwMIkqGIyuxRxFObsomEKMaF3bPxuwb69KjcgeK2r51D_m-J_wwx8sKHzVS0auHQLG5LQsIMpNcGS2_TdYhM1udJKs55rIMWr7l6LYCmh_Ln1OjClAI6KZGYqF5QS6hM5cllNq4MVT7dGVA12NVasAJHUE9HJLFRyFKsiE7z2uShTtttLyIawQ')`
                                }}
                            />
                            <div className="flex-1 min-w-0">
                                <div className="flex items-baseline gap-2">
                                    <p className="text-primary font-bold text-sm">Rp 150.000</p>
                                    <span className="text-[10px] text-gray-400 line-through">Rp 300rb</span>
                                </div>
                                <p className="text-xs text-black dark:text-gray-300 truncate font-medium">Floral Summer Dress</p>
                            </div>
                            <button className="bg-primary hover:bg-primary/90 text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-lg shadow-primary/30 shrink-0">
                                Buy Now
                            </button>
                            {/* Close Product Pin */}
                            <button className="absolute -top-2 -right-2 bg-gray-600 rounded-full p-0.5 text-white shadow-sm">
                                <Icon name="close" size={12} />
                            </button>
                        </div>
                    </div>

                    {/* Bottom Action Bar */}
                    <div className="flex items-center gap-3 pt-2">
                        {/* Shopping Bag */}
                        <button className="relative shrink-0 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-md size-11 border border-white/10 text-white hover:bg-black/50 transition">
                            <Icon name="shopping_bag" size={24} />
                            <div className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white shadow-sm">
                                12
                            </div>
                        </button>

                        {/* Input Field */}
                        <div className="flex-1">
                            <div className="flex h-11 w-full items-center rounded-full bg-black/40 backdrop-blur-md px-4 border border-white/10 text-white focus-within:bg-black/60 focus-within:border-primary/50 transition-colors">
                                <Icon name="chat_bubble_outline" size={20} className="text-white/50 mr-2" />
                                <input
                                    type="text"
                                    value={chatMessage}
                                    onChange={(e) => setChatMessage(e.target.value)}
                                    className="w-full bg-transparent border-none p-0 text-sm placeholder-white/50 focus:ring-0 text-white"
                                    placeholder="Ask about this product..."
                                />
                                <button className="ml-2 text-primary font-bold text-sm">Send</button>
                            </div>
                        </div>

                        {/* More/Menu */}
                        <button className="shrink-0 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-md size-11 border border-white/10 text-white hover:bg-black/50 transition">
                            <Icon name="more_horiz" size={24} />
                        </button>
                    </div>

                    {/* Home Indicator Spacer */}
                    <div className="h-2 w-full" />
                </div>
            </div>

            {/* Animation Keyframes - added via CSS */}
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </MobileContainer>
    );
}
