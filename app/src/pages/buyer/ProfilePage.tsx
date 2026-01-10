import { useNavigate, Link } from 'react-router-dom';
import { Icon } from '../../components/common/Icon';
import { MobileContainer } from '../../components/layout/MobileContainer';
import { BottomNavBuyer } from '../../components/layout/BottomNavBuyer';
import { userProfile } from '../../data/orderData';

export function ProfilePage() {
    const navigate = useNavigate();

    const handleLogout = () => {
        if (window.confirm('Apakah Anda yakin ingin keluar?')) {
            alert('Anda telah keluar.');
            navigate('/');
        }
    };

    return (
        <MobileContainer>
            {/* Header / Profile Card */}
            <div className="relative w-full bg-gradient-to-br from-primary to-orange-400 pb-16 pt-12 md:pt-6 rounded-b-[2rem] shadow-lg z-10">
                <div className="w-full md:max-w-3xl md:mx-auto px-5">
                    {/* Top Bar Actions */}
                    <div className="flex items-center justify-between gap-5 mb-6 text-white">
                        <Link to="/" className="p-1 hover:text-white/80 transition-colors">
                            <span className="material-symbols-outlined text-[26px]">arrow_back</span>
                        </Link>

                        <div className="flex items-center gap-5">
                            <Link to="/settings" className="relative p-1 hover:text-white/80 transition-colors">
                                <span className="material-symbols-outlined text-[26px]">settings</span>
                            </Link>
                            <Link to="/cart" className="relative p-1 hover:text-white/80 transition-colors">
                                <span className="material-symbols-outlined text-[26px]">shopping_cart</span>
                                <span className="absolute top-0 right-0 size-2.5 bg-red-500 rounded-full border-2 border-primary"></span>
                            </Link>
                            <Link to="/chat" className="relative p-1 hover:text-white/80 transition-colors">
                                <span className="material-symbols-outlined text-[26px]">chat</span>
                                <span className="absolute top-0 right-0 flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500 border-2 border-primary"></span>
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Profile Info */}
                    <div className="flex items-center gap-4">
                        <div className="relative shrink-0">
                            <div className="size-20 rounded-full bg-white/20 p-1 backdrop-blur-sm">
                                <img
                                    className="size-full rounded-full object-cover shadow-sm"
                                    src={userProfile.avatar}
                                    alt={userProfile.name}
                                />
                            </div>
                            <button className="absolute bottom-0 right-0 bg-white text-primary rounded-full p-1.5 size-7 flex items-center justify-center border-2 border-primary shadow-sm hover:scale-105 transition-transform">
                                <span className="material-symbols-outlined text-[14px] font-bold">edit</span>
                            </button>
                        </div>
                        <div className="flex flex-col text-white w-full">
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-bold leading-tight truncate max-w-[200px]">{userProfile.name}</h2>
                            </div>
                            <div className="flex items-center gap-1 mt-1.5 bg-black/10 backdrop-blur-md px-2.5 py-1 rounded-full w-fit hover:bg-black/20 cursor-pointer transition-colors">
                                <span className="material-symbols-outlined text-[16px] text-yellow-300 filled">workspace_premium</span>
                                <span className="text-xs font-semibold tracking-wide text-yellow-50">{userProfile.membershipLevel}</span>
                                <span className="material-symbols-outlined text-[14px] text-white/70">chevron_right</span>
                            </div>
                            <div className="flex gap-4 mt-3 text-sm text-white/90 font-medium">
                                <span className="flex items-center gap-1 hover:text-white cursor-pointer">
                                    <b>{userProfile.followers}</b> <span className="text-white/70 font-normal">Pengikut</span>
                                </span>
                                <span className="text-white/40">|</span>
                                <span className="flex items-center gap-1 hover:text-white cursor-pointer">
                                    <b>{userProfile.following}</b> <span className="text-white/70 font-normal">Mengikuti</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Body */}
            <div className="flex-1 w-full md:max-w-3xl md:mx-auto px-4 -mt-12 md:-mt-12 z-20 pb-24">
                {/* Wallet & Stats Card */}
                <div className="bg-white dark:bg-[#2c241d] rounded-xl shadow-md border border-gray-100 dark:border-white/5 p-4 flex justify-between items-center divide-x divide-gray-100 dark:divide-white/10 mb-2">
                    {/* Coins */}
                    <Link to="/coins" className="flex flex-col gap-1.5 flex-1 px-2 items-center text-center cursor-pointer group">
                        <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 text-xs font-medium group-hover:text-yellow-500 transition-colors">
                            <span className="material-symbols-outlined text-[18px] text-yellow-500 filled">monetization_on</span>
                            Koin
                        </div>
                        <p className="text-[15px] font-bold text-gray-900 dark:text-white truncate w-full">
                            {userProfile.wallet.coins.toLocaleString('id-ID')}
                        </p>
                    </Link>
                    {/* Vouchers */}
                    <Link to="/vouchers" className="flex flex-col gap-1.5 flex-1 pl-2 items-center text-center cursor-pointer group">
                        <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 text-xs font-medium group-hover:text-primary transition-colors">
                            <Icon name="local_activity" size={18} className="text-primary" />
                            Voucher
                        </div>
                        <p className="text-[15px] font-bold text-gray-900 dark:text-white truncate w-full">
                            {userProfile.wallet.vouchers} Voucher
                        </p>
                    </Link>
                </div>

                {/* Order Status Section */}
                <div className="mt-3">
                    <div className="bg-white dark:bg-[#2c241d] rounded-xl shadow-sm border border-gray-100 dark:border-white/5 p-4">
                        <div className="flex justify-between items-center mb-5 border-b border-gray-50 dark:border-white/5 pb-3">
                            <h3 className="font-bold text-base text-gray-900 dark:text-white">Pesanan Saya</h3>
                            <Link to="/orders" className="text-xs text-gray-500 dark:text-gray-400 hover:text-primary flex items-center gap-0.5 transition-colors">
                                Lihat Riwayat <Icon name="chevron_right" size={16} />
                            </Link>
                        </div>
                        <div className="grid grid-cols-5 gap-2">
                            {/* Item 1: Belum Bayar */}
                            <Link to="/orders?tab=unpaid" className="flex flex-col items-center gap-2 group cursor-pointer relative">
                                <div className="relative p-2 rounded-full group-hover:bg-orange-50 dark:group-hover:bg-white/5 transition-colors">
                                    <span className="material-symbols-outlined text-[26px] text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors">account_balance_wallet</span>
                                    <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white ring-2 ring-white dark:ring-[#2c241d]">1</span>
                                </div>
                                <p className="text-[11px] text-center font-medium text-gray-600 dark:text-gray-400 leading-tight group-hover:text-primary">Belum Bayar</p>
                            </Link>
                            {/* Item 2: Dikemas */}
                            <Link to="/orders?tab=processing" className="flex flex-col items-center gap-2 group cursor-pointer">
                                <div className="p-2 rounded-full group-hover:bg-orange-50 dark:group-hover:bg-white/5 transition-colors">
                                    <span className="material-symbols-outlined text-[26px] text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors">inventory_2</span>
                                </div>
                                <p className="text-[11px] text-center font-medium text-gray-600 dark:text-gray-400 leading-tight group-hover:text-primary">Dikemas</p>
                            </Link>
                            {/* Item 3: Dikirim */}
                            <Link to="/orders?tab=shipped" className="flex flex-col items-center gap-2 group cursor-pointer">
                                <div className="p-2 rounded-full group-hover:bg-orange-50 dark:group-hover:bg-white/5 transition-colors">
                                    <span className="material-symbols-outlined text-[26px] text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors">local_shipping</span>
                                </div>
                                <p className="text-[11px] text-center font-medium text-gray-600 dark:text-gray-400 leading-tight group-hover:text-primary">Dikirim</p>
                            </Link>
                            {/* Item 4: Beri Nilai */}
                            <Link to="/orders/rate" className="flex flex-col items-center gap-2 group cursor-pointer">
                                <div className="p-2 rounded-full group-hover:bg-orange-50 dark:group-hover:bg-white/5 transition-colors">
                                    <span className="material-symbols-outlined text-[26px] text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors">star</span>
                                </div>
                                <p className="text-[11px] text-center font-medium text-gray-600 dark:text-gray-400 leading-tight group-hover:text-primary">Beri Nilai</p>
                            </Link>
                            {/* Item 5: Pengembalian */}
                            <Link to="/orders/returns" className="flex flex-col items-center gap-2 group cursor-pointer">
                                <div className="p-2 rounded-full group-hover:bg-orange-50 dark:group-hover:bg-white/5 transition-colors">
                                    <span className="material-symbols-outlined text-[26px] text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors">assignment_return</span>
                                </div>
                                <p className="text-[11px] text-center font-medium text-gray-600 dark:text-gray-400 leading-tight group-hover:text-primary">Pengembalian</p>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Menu Groups */}
                <div className="mt-4 flex flex-col gap-4">
                    {/* Group 1: Favorites */}
                    <div className="bg-white dark:bg-[#2c241d] rounded-xl shadow-sm border border-gray-100 dark:border-white/5 overflow-hidden">
                        <Link to="/wishlist" className="flex items-center gap-3 p-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors border-b border-gray-50 dark:border-white/5 last:border-0">
                            <div className="flex items-center justify-center size-8 rounded-full bg-red-50 dark:bg-red-500/10 text-red-500">
                                <span className="material-symbols-outlined text-[20px] filled">favorite</span>
                            </div>
                            <span className="flex-1 text-sm font-medium text-gray-900 dark:text-white">Wishlist</span>
                            <Icon name="chevron_right" className="text-gray-400" size={20} />
                        </Link>
                        <Link to="/recently-viewed" className="flex items-center gap-3 p-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                            <div className="flex items-center justify-center size-8 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-500">
                                <span className="material-symbols-outlined text-[20px]">history</span>
                            </div>
                            <span className="flex-1 text-sm font-medium text-gray-900 dark:text-white">Terakhir Dilihat</span>
                            <Icon name="chevron_right" className="text-gray-400" size={20} />
                        </Link>
                    </div>

                    {/* Group 2: Account & Support */}
                    <div className="bg-white dark:bg-[#2c241d] rounded-xl shadow-sm border border-gray-100 dark:border-white/5 overflow-hidden">
                        <Link to="/seller-center" className="flex items-center gap-3 p-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors border-b border-gray-50 dark:border-white/5">
                            <div className="flex items-center justify-center size-8 rounded-full bg-teal-50 dark:bg-teal-500/10 text-teal-600">
                                <span className="material-symbols-outlined text-[20px]">store</span>
                            </div>
                            <span className="flex-1 text-sm font-medium text-gray-900 dark:text-white">Pusat Penjualan</span>
                            <Icon name="chevron_right" className="text-gray-400" size={20} />
                        </Link>
                        <Link to="/addresses" className="flex items-center gap-3 p-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors border-b border-gray-50 dark:border-white/5">
                            <div className="flex items-center justify-center size-8 rounded-full bg-orange-50 dark:bg-orange-500/10 text-orange-600">
                                <span className="material-symbols-outlined text-[20px]">location_on</span>
                            </div>
                            <span className="flex-1 text-sm font-medium text-gray-900 dark:text-white">Alamat Saya</span>
                            <Icon name="chevron_right" className="text-gray-400" size={20} />
                        </Link>
                        <Link to="/help" className="flex items-center gap-3 p-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                            <div className="flex items-center justify-center size-8 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                                <Icon name="help" size={20} />
                            </div>
                            <span className="flex-1 text-sm font-medium text-gray-900 dark:text-white">Pusat Bantuan</span>
                            <Icon name="chevron_right" className="text-gray-400" size={20} />
                        </Link>
                    </div>

                    {/* Logout Button */}
                    <button
                        onClick={handleLogout}
                        className="w-full py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 font-bold text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                        Keluar
                    </button>
                </div>
            </div>

            <BottomNavBuyer />
        </MobileContainer>
    );
}
