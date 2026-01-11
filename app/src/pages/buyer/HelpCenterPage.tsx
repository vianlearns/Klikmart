import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '../../components/common/Icon';
import { MobileContainer } from '../../components/layout/MobileContainer';
import { helpTopics, helpCategories, helpQuickActions } from '../../data/dataHelp';
import { Header } from '../../components/layout/Header';

export function HelpCenterPage() {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery)}&type=help`);
        }
    };

    return (
        <MobileContainer className="bg-background-light dark:bg-background-dark min-h-screen">
            {/* Desktop Header */}
            <Header className="hidden md:block" showMobileElements={false} />

            {/* Mobile Header */}
            <div className="md:hidden sticky top-0 z-50 bg-background-light dark:bg-background-dark/95 backdrop-blur-sm border-b border-gray-200 dark:border-white/5 px-4 pt-4 pb-3">
                <div className="flex items-center justify-between">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center justify-center p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                    >
                        <Icon name="arrow_back" size={24} className="text-gray-900 dark:text-white" />
                    </button>
                    <h1 className="text-lg font-bold leading-tight flex-1 text-center pr-10 text-gray-900 dark:text-white">Pusat Bantuan</h1>
                </div>
            </div>

            <div className="md:max-w-7xl md:mx-auto md:px-6 md:py-8 w-full">
                {/* Hero Section */}
                <div className="px-5 pt-6 pb-2 md:px-0 md:pt-0 md:text-center md:mb-10">
                    <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-4 text-gray-900 dark:text-white">Halo, ada yang bisa <br className="md:hidden" />kami bantu?</h2>

                    {/* Search Bar */}
                    <form onSubmit={handleSearch} className="relative w-full md:max-w-2xl md:mx-auto">
                        <div className="absolute inset-y-0 left-0 pl-3 md:pl-4 flex items-center pointer-events-none">
                            <Icon name="search" className="text-primary" size={24} />
                        </div>
                        <input
                            className="block w-full pl-10 md:pl-12 pr-3 py-3.5 border-none rounded-xl bg-white dark:bg-[#322820] text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm text-sm md:text-base md:shadow-md transition-shadow"
                            placeholder="Cari masalah atau pertanyaan..."
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </form>
                </div>

                <div className="md:grid md:grid-cols-12 md:gap-8">
                    <div className="md:col-span-8">
                        {/* Order Context */}
                        <div className="px-5 py-4 md:px-0 md:py-0 md:mb-8">
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="text-base md:text-xl font-bold text-gray-900 dark:text-white">Pesanan Terakhir</h3>
                                <Link to="/orders" className="text-xs md:text-sm text-primary font-medium hover:underline">Lihat Semua</Link>
                            </div>
                            <div className="bg-white dark:bg-[#322820] rounded-xl p-3 shadow-sm md:shadow-md flex gap-3 items-center hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer border border-transparent hover:border-primary/20" onClick={() => navigate('/orders/track/inv-12345')}>
                                <div className="w-16 h-16 shrink-0 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                                    <img
                                        alt="Red Nike running shoe"
                                        className="w-full h-full object-cover"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqLVNQqbo_zgEREoDjVSt2-qw3BpvAfUZkLCX2wapmxIOM5IP5dErxvJm2WmfYssRpoGiHt659r-QO4Y7JfGLIP1eE8vPVFz2iZmtZaLs0afV_IBBxhMDhDOQREQSzqBtXHmZid4gXT4gK5OGWIPgg27WXi9Dbx1JJKFqfF6QMhu_AqrtdbmzWuCoNhO_TGcA1i1R_GhszIFMDchFfhZlZqVunSQcVgVci-Ugmc12PdFM4_7cE1t94CY-kVgg4SGUSx6VfuQwypHX_"
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm md:text-base font-semibold truncate mb-1 text-gray-900 dark:text-white">Nike Air Max 270 - Merah</p>
                                    <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-2">INV/20231025/MPL/3541</p>
                                    <div className="flex items-center gap-1.5">
                                        <Icon name="local_shipping" className="text-primary" size={16} />
                                        <span className="text-xs font-medium text-primary">Sedang dikirim</span>
                                    </div>
                                </div>
                                <button className="shrink-0 p-2 text-gray-400 hover:text-primary transition-colors">
                                    <Icon name="arrow_forward_ios" size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Popular Topics */}
                        <div className="px-5 py-6 md:px-0 md:py-0 md:mb-8">
                            <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900 dark:text-white">Topik Populer</h3>
                            <div className="bg-white dark:bg-[#322820] rounded-xl overflow-hidden shadow-sm md:shadow-md divide-y divide-gray-100 dark:divide-white/5 border border-gray-100 dark:border-gray-800">
                                {helpTopics.map((topic, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => navigate(`/help/${topic.slug}`)}
                                        className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors text-left group"
                                    >
                                        <span className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-200">{topic.title}</span>
                                        <Icon name="chevron_right" className="text-gray-400 group-hover:text-primary transition-colors" size={20} />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Categories Grid */}
                        <div className="px-5 pb-8 md:px-0 md:pb-0">
                            <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900 dark:text-white">Kategori Masalah</h3>
                            <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-4">
                                {helpCategories.map((cat, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => navigate(`/help/category/${cat.title.toLowerCase()}`)}
                                        className="flex flex-col p-4 bg-white dark:bg-[#322820] rounded-xl shadow-sm md:shadow-md hover:ring-2 hover:ring-primary hover:shadow-lg transition-all text-left group"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                            <Icon name={cat.icon} size={24} />
                                        </div>
                                        <span className="text-sm md:text-base font-bold text-gray-800 dark:text-white">{cat.title}</span>
                                        <span className="text-xs md:text-sm text-gray-500 mt-1">{cat.desc}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-4 flex flex-col gap-6">
                        {/* Quick Actions */}
                        <div className="pl-5 pr-0 py-2 md:p-6 md:bg-white md:dark:bg-[#221810] md:rounded-2xl md:shadow-md md:border md:border-gray-100 md:dark:border-gray-800">
                            <h3 className="hidden md:block text-lg font-bold mb-4 text-gray-900 dark:text-white">Aksi Cepat</h3>
                            <div className="flex gap-3 overflow-x-auto no-scrollbar pr-5 pb-2 md:grid md:grid-cols-2 md:gap-4 md:pr-0 md:pb-0">
                                {helpQuickActions.map((action, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => navigate(action.route)}
                                        className="flex flex-col items-center gap-2 min-w-[84px] group md:bg-gray-50 md:dark:bg-[#2c241d] md:p-4 md:rounded-xl md:w-full md:items-start md:hover:bg-primary/5 md:transition-colors"
                                    >
                                        <div className="w-14 h-14 md:w-10 md:h-10 rounded-full bg-white dark:bg-[#322820] border border-gray-100 dark:border-gray-800 flex items-center justify-center shadow-sm group-active:scale-95 transition-transform md:bg-primary/10 md:border-transparent">
                                            <Icon name={action.icon} className="text-primary" size={28} />
                                        </div>
                                        <span className="text-[11px] md:text-sm font-medium text-center md:text-left leading-tight text-gray-600 dark:text-gray-300 pre-line group-hover:text-primary transition-colors">
                                            {action.label.replace('\n', ' ')}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Contact Support Footer */}
                        <div className="px-5 pb-10 md:px-0 md:pb-0">
                            <div className="bg-gradient-to-br from-primary/20 to-primary/5 dark:from-primary/10 dark:to-transparent border border-primary/20 rounded-2xl p-5 flex flex-col items-center text-center shadow-lg">
                                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-3 shadow-lg shadow-primary/30">
                                    <Icon name="support_agent" className="text-white" size={24} />
                                </div>
                                <h3 className="text-lg font-bold mb-1 text-gray-900 dark:text-white">Masih butuh bantuan?</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-5 max-w-[240px]">Tim CS kami siap membantu menyelesaikan masalahmu 24/7.</p>
                                <button
                                    onClick={() => navigate('/chat/cs-klikmart')}
                                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-[0.98] shadow-md shadow-primary/25"
                                >
                                    <Icon name="chat" size={20} />
                                    <span>Chat dengan CS Klikmart</span>
                                </button>
                                <div className="mt-4 flex gap-6">
                                    <a href="mailto:support@klikmart.com" className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-primary transition-colors">
                                        <Icon name="mail" size={18} />
                                        Email Kami
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-6 w-full md:hidden"></div>
        </MobileContainer>
    );
}
