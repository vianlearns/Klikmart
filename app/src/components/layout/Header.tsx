import { useNavigate, Link } from 'react-router-dom';
import { Icon } from '../common/Icon';
import logoHorizontal from '../../assets/klikmart-horizontal.svg';
import { useState } from 'react';

interface HeaderProps {
    searchPlaceholder?: string;
    showMobileElements?: boolean; // Controls visibility of mobile-specific elements like cart icon in top bar
    className?: string; // Allow passing external classes like 'hidden md:block'
}

export function Header({
    searchPlaceholder = "Cari produk, merek...",
    showMobileElements = true,
    className = ""
}: HeaderProps) {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        if (query.trim()) {
            navigate(`/search?q=${encodeURIComponent(query)}`);
        }
    };

    return (
        <header className={`sticky top-0 z-50 bg-white dark:bg-[#1a120b] shadow-sm ${className}`}>
            <div className="px-4 pt-4 pb-3 md:py-4 w-full md:max-w-7xl md:mx-auto md:px-6">
                <div className="flex items-center gap-4 md:gap-8">
                    {/* Logo for Desktop */}
                    <Link to="/" className="hidden md:flex items-center">
                        <img src={logoHorizontal} alt="Klikmart" className="h-14 w-auto" />
                    </Link>

                    {/* Search Bar */}
                    <div className="flex-1 relative max-w-2xl">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Icon name="search" className="text-primary" size={20} />
                        </div>
                        <input
                            className="block w-full pl-10 pr-3 py-2.5 border-none rounded-xl bg-background-light dark:bg-[#2c241d] text-sm placeholder-gray-400 dark:text-white focus:ring-1 focus:ring-primary"
                            placeholder={searchPlaceholder}
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <Icon name="mic" className="text-gray-400" size={20} />
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        <Link to="/cart" className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group">
                            <Icon name="shopping_cart" className="text-gray-700 dark:text-gray-200 group-hover:text-primary transition-colors" />
                            <span className="absolute top-1 right-1 h-2.5 w-2.5 rounded-full bg-red-500 border-2 border-white dark:border-[#1a120b]" />
                        </Link>
                        <div className="h-6 w-px bg-gray-200 dark:bg-gray-700" />
                        <Link to="/wishlist" className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-primary transition-colors font-medium text-sm">
                            <Icon name="favorite" size={20} />
                            Wishlist
                        </Link>
                        <Link to="/notification" className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-primary transition-colors font-medium text-sm">
                            <Icon name="notifications" size={20} />
                            Notifikasi
                        </Link>
                        <Link to="/profile" className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-primary transition-colors font-medium text-sm">
                            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                                <Icon name="person" size={20} />
                            </div>
                            <span className="hidden lg:inline">Akun Saya</span>
                        </Link>
                    </div>

                    {/* Mobile Actions - Controlled by prop */}
                    {showMobileElements && (
                        <div className="flex md:hidden items-center gap-3">
                            <Link to="/cart" className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <Icon name="shopping_cart" className="text-gray-700 dark:text-gray-200" />
                                <span className="absolute top-1 right-1 h-2.5 w-2.5 rounded-full bg-red-500 border-2 border-white dark:border-[#1a120b]" />
                            </Link>
                            <Link to="/chat" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <Icon name="chat" className="text-gray-700 dark:text-gray-200" />
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
