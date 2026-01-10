import { useNavigate } from 'react-router-dom';
import { Icon } from '../../components/common/Icon';
import { MobileContainer } from '../../components/layout/MobileContainer';
import { Header } from '../../components/layout/Header';
import { useState } from 'react';

export function SettingsPage() {
    const navigate = useNavigate();
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [darkMode, setDarkMode] = useState(false);

    const handleLogout = () => {
        if (window.confirm('Apakah Anda yakin ingin keluar?')) {
            navigate('/');
        }
    };

    const SettingSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
        <div className="mb-6">
            <h3 className="px-4 md:px-0 text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">{title}</h3>
            <div className="bg-white dark:bg-[#2c241d] md:rounded-xl md:shadow-sm md:border md:border-gray-100 md:dark:border-gray-800 divide-y divide-gray-50 dark:divide-white/5">
                {children}
            </div>
        </div>
    );

    const SettingItem = ({ icon, label, value, onClick, isToggle, toggleValue, onToggle }: any) => (
        <div
            onClick={!isToggle ? onClick : undefined}
            className={`flex items-center gap-3 p-4 ${!isToggle ? 'cursor-pointer hover:bg-gray-50 dark:hover:bg-white/5' : ''} transition-colors`}
        >
            <div className={`flex items-center justify-center size-9 rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300`}>
                <Icon name={icon} size={20} />
            </div>
            <span className="flex-1 text-base font-medium text-gray-900 dark:text-white">{label}</span>

            {isToggle ? (
                <button
                    onClick={onToggle}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${toggleValue ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'}`}
                >
                    <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${toggleValue ? 'translate-x-6' : 'translate-x-1'}`}
                    />
                </button>
            ) : (
                <div className="flex items-center gap-2">
                    {value && <span className="text-sm text-gray-400">{value}</span>}
                    <Icon name="chevron_right" className="text-gray-400" size={20} />
                </div>
            )}
        </div>
    );

    return (
        <MobileContainer className="bg-background-light dark:bg-background-dark min-h-screen">
            {/* Desktop Header */}
            <Header className="hidden md:block" showMobileElements={false} />

            <div className="md:max-w-3xl md:mx-auto md:px-6 md:py-8 w-full">
                {/* Mobile Header */}
                <div className="md:hidden sticky top-0 z-50 bg-white dark:bg-[#1a120b] border-b border-gray-100 dark:border-white/5 px-4 py-3 flex items-center gap-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center justify-center p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
                    >
                        <Icon name="arrow_back" size={24} className="text-gray-900 dark:text-white" />
                    </button>
                    <h1 className="text-lg font-bold text-gray-900 dark:text-white">Pengaturan</h1>
                </div>

                {/* Desktop Title */}
                <h1 className="hidden md:block text-2xl font-bold text-gray-900 dark:text-white mb-6">Pengaturan</h1>

                <div className="pb-20 md:pb-0">
                    <SettingSection title="Akun Saya">
                        <SettingItem
                            icon="person"
                            label="Profil Saya"
                            onClick={() => navigate('/profile')}
                        />
                        <SettingItem
                            icon="location_on"
                            label="Alamat Saya"
                            onClick={() => navigate('/addresses')}
                        />
                        <SettingItem
                            icon="lock"
                            label="Keamanan Akun"
                            onClick={() => window.alert('Fitur keamanan belum tersedia')}
                        />
                    </SettingSection>

                    <SettingSection title="Pengaturan Aplikasi">
                        <SettingItem
                            icon="notifications"
                            label="Notifikasi"
                            isToggle
                            toggleValue={notificationsEnabled}
                            onToggle={() => setNotificationsEnabled(!notificationsEnabled)}
                        />
                        <SettingItem
                            icon="dark_mode"
                            label="Mode Gelap"
                            isToggle
                            toggleValue={darkMode}
                            onToggle={() => setDarkMode(!darkMode)}
                        />
                        <SettingItem
                            icon="language"
                            label="Bahasa"
                            value="Bahasa Indonesia"
                            onClick={() => window.alert('Pilihan bahasa belum tersedia')}
                        />
                    </SettingSection>

                    <SettingSection title="Info Lainnya">
                        <SettingItem
                            icon="description"
                            label="Syarat & Ketentuan"
                            onClick={() => window.alert('Halaman S&K')}
                        />
                        <SettingItem
                            icon="verified_user"
                            label="Kebijakan Privasi"
                            onClick={() => window.alert('Halaman Privasi')}
                        />
                        <SettingItem
                            icon="help"
                            label="Pusat Bantuan"
                            onClick={() => navigate('/help')}
                        />
                    </SettingSection>

                    <div className="px-4 md:px-0 mt-6">
                        <button
                            onClick={handleLogout}
                            className="w-full bg-white dark:bg-[#2c241d] text-red-500 font-bold py-3.5 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors"
                        >
                            Keluar dari Akun
                        </button>
                        <p className="text-center text-xs text-gray-400 mt-4">Versi Aplikasi 2.4.0</p>
                    </div>
                </div>
            </div>
        </MobileContainer>
    );
}
