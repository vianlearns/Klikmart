import { useNavigate, useParams } from 'react-router-dom';
import { Icon } from '../../components/common/Icon';
import { MobileContainer } from '../../components/layout/MobileContainer';
import { trackingTimeline, orders } from '../../data/orderData';

export function OrderTrackingPage() {
    const navigate = useNavigate();
    const { title } = useParams<{ title: string }>();

    // Find order by title slug (in real app, this would be an API call)
    const order = orders.find(o => {
        const orderSlug = `${o.storeName.toLowerCase().replace(/\s+/g, '-')}-${o.id.toLowerCase()}`;
        return orderSlug === title;
    });

    // Default tracking info
    const trackingInfo = {
        courier: order?.courier || 'J&T Express',
        courierType: 'Reguler (Cashless)',
        trackingNumber: order?.trackingNumber || 'JP7823462819',
        status: 'On Process',
        estimatedArrival: order?.estimatedArrival || 'Besok, 24 Jan',
        distance: '4.2 km',
    };

    return (
        <MobileContainer>
            <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark">
                {/* Top App Bar */}
                <div className="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-200 dark:border-white/5">
                    <div className="w-full md:max-w-4xl md:mx-auto p-4 pb-3 pt-12 md:pt-4 flex items-center justify-between">
                        <button
                            onClick={() => navigate(-1)}
                            className="text-gray-900 dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-white/10 cursor-pointer transition-colors"
                        >
                            <Icon name="arrow_back" />
                        </button>
                        <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">
                            Rincian Pelacakan
                        </h2>
                    </div>
                </div>

                <div className="w-full md:max-w-4xl md:mx-auto flex-1 flex flex-col">
                    {/* Map Section */}
                    <div className="relative w-full h-64 bg-gray-200 dark:bg-gray-800">
                        <div
                            className="w-full h-full bg-center bg-no-repeat bg-cover"
                            style={{
                                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDeqWqDVNXtEwzKrVGIfBOqrsDLmwV0bgTkSIEkzkz-CrbgYz7_BmKN-RNobJ0f3K0hDwznysTfosZyvGhzzaulQA97lW2LZ29s94blXb8LiyYx-5f8gxA7kaJrBgvJBFD0dvZ2XE0J2V94-2e4UfKQ7gN0MYg6faf0vOUfyQpQJyi4f_18bkg23PGiyHOTxt5IPyhrG1hfyzZNiC6m2Q-EEmKxKU1unlfEJok6kduB6unNKxGV7hRLQ-e0vrMlOoj4cOtxhTq_qE03')`,
                                filter: 'grayscale(100%) contrast(120%) brightness(70%)',
                            }}
                        />
                        {/* Overlay Content on Map */}
                        <div className="absolute bottom-4 left-4 right-4 max-w-md mx-auto">
                            <div className="bg-white/90 dark:bg-[#2c241b]/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100 dark:border-white/5">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="size-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                            <Icon name="local_shipping" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">
                                                Estimasi Tiba
                                            </p>
                                            <p className="text-gray-900 dark:text-white font-bold text-sm">
                                                {trackingInfo.estimatedArrival}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Jarak</p>
                                        <p className="text-gray-900 dark:text-white font-bold text-sm">
                                            {trackingInfo.distance}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Shipment Details Card */}
                    <div className="px-4 pt-6 pb-2">
                        <div className="bg-white dark:bg-[#2c241b] rounded-xl p-5 shadow-sm border border-gray-100 dark:border-white/5">
                            <div className="flex justify-between items-start mb-4 pb-4 border-b border-gray-100 dark:border-white/5">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-sm">
                                        J&T
                                    </div>
                                    <div>
                                        <p className="text-gray-900 dark:text-white text-sm font-bold">
                                            {trackingInfo.courier}
                                        </p>
                                        <p className="text-gray-500 dark:text-gray-400 text-xs font-medium">
                                            {trackingInfo.courierType}
                                        </p>
                                    </div>
                                </div>
                                <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-bold uppercase rounded-md tracking-wider">
                                    {trackingInfo.status}
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-gray-500 dark:text-gray-400 text-xs font-medium mb-1">No. Resi</p>
                                    <p className="text-gray-900 dark:text-white text-base font-bold font-mono tracking-wide">
                                        {trackingInfo.trackingNumber}
                                    </p>
                                </div>
                                <button
                                    onClick={() => alert('Nomor resi telah disalin ke clipboard')}
                                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-gray-700 dark:text-gray-300"
                                >
                                    <Icon name="content_copy" size={16} />
                                    <span className="text-xs font-bold">Salin</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Call Driver Action */}
                    <div className="px-4 py-2">
                        <button
                            onClick={() => alert('Menghubungi kurir...')}
                            className="w-full flex cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-4 bg-primary hover:bg-primary/90 text-white gap-2 transition-all shadow-md hover:shadow-lg shadow-primary/20"
                        >
                            <Icon name="phone_in_talk" size={20} />
                            <span className="text-sm font-bold tracking-wide">Hubungi Kurir</span>
                        </button>
                    </div>

                    {/* Timeline Section */}
                    <div className="px-4 py-6">
                        <h3 className="text-gray-900 dark:text-white text-lg font-bold mb-5 pl-2">
                            Riwayat Pengiriman
                        </h3>
                        <div className="grid grid-cols-[48px_1fr] gap-x-0">
                            {trackingTimeline.map((item, index) => (
                                <div key={item.id} className="contents">
                                    {/* Timeline Dot */}
                                    <div className="flex flex-col items-center">
                                        {item.isActive ? (
                                            <div className="size-8 rounded-full bg-primary flex items-center justify-center text-white shadow-[0_0_0_4px_rgba(244,133,37,0.2)] z-10">
                                                <Icon name={item.icon || 'local_shipping'} size={16} />
                                            </div>
                                        ) : item.isStart ? (
                                            <div className="size-8 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center text-gray-400 dark:text-gray-500 z-10">
                                                <Icon name={item.icon || 'inventory_2'} size={16} />
                                            </div>
                                        ) : (
                                            <div className="size-3 rounded-full bg-gray-300 dark:bg-gray-600 z-10 ring-4 ring-background-light dark:ring-background-dark" />
                                        )}
                                        {index < trackingTimeline.length - 1 && (
                                            <div className="w-[2px] bg-gray-200 dark:bg-gray-700 h-full min-h-[40px]" />
                                        )}
                                    </div>

                                    {/* Timeline Content */}
                                    <div className={`flex flex-col pb-8 pl-4 ${!item.isActive && !item.isStart ? 'pt-1' : ''}`}>
                                        <p className={`text-sm font-${item.isActive ? 'bold' : 'semibold'} leading-snug mb-1 ${item.isActive ? 'text-primary' : 'text-gray-900 dark:text-white'
                                            }`}>
                                            {item.title}
                                        </p>
                                        <p className="text-gray-500 dark:text-gray-400 text-xs font-medium">
                                            {item.time} {item.location && `• ${item.location}`}
                                        </p>
                                        {/* Driver Info Pill */}
                                        {item.driverName && (
                                            <div className="mt-3 flex items-center gap-2 bg-gray-50 dark:bg-white/5 p-2 rounded-lg w-fit border border-gray-100 dark:border-white/5">
                                                <div className="size-6 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                                                    <Icon name="person" size={12} className="text-gray-500 dark:text-gray-400" />
                                                </div>
                                                <span className="text-xs text-gray-700 dark:text-gray-300 font-medium">
                                                    Kurir: {item.driverName}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Spacer */}
                    <div className="h-10" />
                </div>
            </div>
        </MobileContainer>
    );
}
