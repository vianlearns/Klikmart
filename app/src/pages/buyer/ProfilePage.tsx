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
                    {/* Top Bar */}
                    <div className="flex justify-end mb-4 md:mb-6">
                        <div className="flex gap-3">
                            <Link to="/settings" className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors text-white">
                                <Icon name="settings" size={20} />
                            </Link>
                            <Link to="/cart" className="relative p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors text-white">
                                <Icon name="shopping_cart" size={20} />
                                <span className="absolute top-0 right-0 size-4 bg-red-500 rounded-full border-2 border-primary flex items-center justify-center text-[8px] font-bold">3</span>
                            </Link>
                            <Link to="/chat" className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors text-white">
                                <Icon name="chat" size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* User Info */}
                    <div className="flex items-center gap-4 text-white mb-6">
                        <div className="relative">
                            <div className="size-16 md:size-20 bg-white rounded-full p-0.5 shadow-md">
                                <img
                                    src={userProfile.avatar}
                                    alt={userProfile.name}
                                    className="w-full h-full rounded-full object-cover border-2 border-white"
                                />
                            </div>
                            <div className="absolute bottom-0 right-0 bg-yellow-400 text-[10px] md:text-xs font-bold px-2 py-0.5 rounded-full border border-white text-gray-900 shadow-sm">
                                {userProfile.membershipLevel}
                            </div>
                        </div>
                        <div className="flex-1 min-w-0">
                            <h2 className="text-xl md:text-2xl font-bold truncate leading-tight">{userProfile.name}</h2>
                            <div className="flex items-center gap-3 text-xs md:text-sm font-medium opacity-90 mt-1">
                                <span className="bg-white/20 px-2 py-0.5 rounded-md">Member Silver</span>
                                <span>|</span>
                                <span className="font-mono">0812-3456-7890</span>
                            </div>
                            <div className="flex gap-4 mt-2 md:mt-3">
                                <div className="flex flex-col">
                                    <span className="font-bold text-sm md:text-base">{userProfile.following}</span>
                                    <span className="text-[10px] md:text-xs opacity-80">Mengikuti</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-sm md:text-base">{userProfile.followers}</span>
                                    <span className="text-[10px] md:text-xs opacity-80">Pengikut</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Body */}
            <div className="flex-1 w-full md:max-w-3xl md:mx-auto px-4 -mt-12 md:-mt-12 z-20 pb-24">
                {/* Wallet Card */}
                <div className="bg-white dark:bg-[#2c241d] rounded-xl p-4 shadow-lg border border-gray-100 dark:border-white/5 mb-4 grid grid-cols-3 divide-x divide-gray-100 dark:divide-white/10">
                    <Link to="/wallet" className="flex flex-col gap-1 items-center justify-center p-2 hover:bg-gray-50 dark:hover:bg-white/5 rounded-lg transition-colors group">
                        <Icon name="account_balance_wallet" className="text-primary group-hover:scale-110 transition-transform" />
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Saldo</span>
                        <span className="text-sm font-bold text-gray-900 dark:text-white">Rp {userProfile.wallet.balance.toLocaleString('id-ID')}</span>
                    </Link>
                    <Link to="/coins" className="flex flex-col gap-1 items-center justify-center p-2 hover:bg-gray-50 dark:hover:bg-white/5 rounded-lg transition-colors group">
                        <Icon name="monetization_on" className="text-yellow-500 group-hover:scale-110 transition-transform" />
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Koin</span>
                        <span className="text-sm font-bold text-gray-900 dark:text-white">{userProfile.wallet.coins}</span>
                    </Link>
                    <Link to="/vouchers" className="flex flex-col gap-1 items-center justify-center p-2 hover:bg-gray-50 dark:hover:bg-white/5 rounded-lg transition-colors group">
                        <Icon name="local_activity" className="text-primary group-hover:scale-110 transition-transform" />
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Voucher</span>
                        <span className="text-sm font-bold text-gray-900 dark:text-white">{userProfile.wallet.vouchers}</span>
                    </Link>
                </div>

                {/* Order Status */}
                <div className="bg-white dark:bg-[#2c241d] rounded-xl p-4 shadow-sm border border-gray-100 dark:border-white/5 mb-4">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold text-gray-900 dark:text-white">Pesanan Saya</h3>
                        <Link to="/orders" className="text-xs text-gray-500 hover:text-primary flex items-center">
                            Riwayat Pesanan <Icon name="chevron_right" size={16} />
                        </Link>
                    </div>
                    <div className="grid grid-cols-4 gap-4 mb-2">
                        <Link to="/orders?tab=unpaid" className="flex flex-col items-center gap-2 group cursor-pointer">
                            <div className="relative p-2 rounded-full group-hover:bg-orange-50 dark:group-hover:bg-white/5 transition-colors">
                                <span className="material-symbols-outlined text-[26px] text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors">account_balance_wallet</span>
                            </div>
                            <p className="text-[11px] text-center font-medium text-gray-600 dark:text-gray-400 leading-tight group-hover:text-primary">Belum Bayar</p>
                        </Link>
                        <Link to="/orders?tab=processing" className="flex flex-col items-center gap-2 group cursor-pointer">
                            <div className="p-2 rounded-full group-hover:bg-orange-50 dark:group-hover:bg-white/5 transition-colors">
                                <span className="material-symbols-outlined text-[26px] text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors">inventory_2</span>
                            </div>
                            <p className="text-[11px] text-center font-medium text-gray-600 dark:text-gray-400 leading-tight group-hover:text-primary">Dikemas</p>
                        </Link>
                        <Link to="/orders?tab=shipped" className="flex flex-col items-center gap-2 group cursor-pointer">
                            <div className="p-2 rounded-full group-hover:bg-orange-50 dark:group-hover:bg-white/5 transition-colors">
                                <span className="material-symbols-outlined text-[26px] text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors">local_shipping</span>
                            </div>
                            <p className="text-[11px] text-center font-medium text-gray-600 dark:text-gray-400 leading-tight group-hover:text-primary">Dikirim</p>
                        </Link>
                        <Link to="/orders/rate" className="flex flex-col items-center gap-2 group cursor-pointer">
                            <div className="p-2 rounded-full group-hover:bg-orange-50 dark:group-hover:bg-white/5 transition-colors">
                                <span className="material-symbols-outlined text-[26px] text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors">rate_review</span>
                            </div>
                            <p className="text-[11px] text-center font-medium text-gray-600 dark:text-gray-400 leading-tight group-hover:text-primary">Beri Nilai</p>
                        </Link>
                    </div>
                </div>

                {/* Menu Groups */}
                <div className="bg-white dark:bg-[#2c241d] rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-white/5 mb-4">
                    <Link to="/favorites" className="flex items-center gap-3 p-4 hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer border-b border-gray-50 dark:border-white/5 transition-colors">
                        <Icon name="favorite" className="text-red-500" />
                        <span className="flex-1 text-sm font-medium text-gray-700 dark:text-gray-200">Favorit Saya</span>
                        <Icon name="chevron_right" className="text-gray-400" size={20} />
                    </Link>
                    <Link to="/recently-viewed" className="flex items-center gap-3 p-4 hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer border-b border-gray-50 dark:border-white/5 transition-colors">
                        <Icon name="history" className="text-blue-500" />
                        <span className="flex-1 text-sm font-medium text-gray-700 dark:text-gray-200">Terakhir Dilihat</span>
                        <Icon name="chevron_right" className="text-gray-400" size={20} />
                    </Link>
                    <Link to="/addresses" className="flex items-center gap-3 p-4 hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer border-b border-gray-50 dark:border-white/5 transition-colors">
                        <Icon name="location_on" className="text-green-500" />
                        <span className="flex-1 text-sm font-medium text-gray-700 dark:text-gray-200">Alamat Tersimpan</span>
                        <Icon name="chevron_right" className="text-gray-400" size={20} />
                    </Link>
                    <Link to="/account-settings" className="flex items-center gap-3 p-4 hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer transition-colors">
                        <Icon name="manage_accounts" className="text-primary" />
                        <span className="flex-1 text-sm font-medium text-gray-700 dark:text-gray-200">Pengaturan Akun</span>
                        <Icon name="chevron_right" className="text-gray-400" size={20} />
                    </Link>
                </div>

                <div className="bg-white dark:bg-[#2c241d] rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-white/5 mb-6">
                    <Link to="/help" className="flex items-center gap-3 p-4 hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer border-b border-gray-50 dark:border-white/5 transition-colors">
                        <Icon name="help" className="text-gray-600 dark:text-gray-400" />
                        <span className="flex-1 text-sm font-medium text-gray-700 dark:text-gray-200">Pusat Bantuan</span>
                        <Icon name="chevron_right" className="text-gray-400" size={20} />
                    </Link>
                    <div
                        onClick={handleLogout}
                        className="flex items-center gap-3 p-4 hover:bg-red-50 dark:hover:bg-red-900/10 cursor-pointer transition-colors"
                    >
                        <Icon name="logout" className="text-red-500" />
                        <span className="flex-1 text-sm font-medium text-red-500">Keluar</span>
                    </div>
                </div>
            </div>

            <BottomNavBuyer />
        </MobileContainer>
    );
}
