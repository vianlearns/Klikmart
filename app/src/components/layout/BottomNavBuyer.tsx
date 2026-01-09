import { NavLink } from 'react-router-dom';
import { Icon } from '../common/Icon';

interface NavItem {
    path: string;
    icon: string;
    label: string;
}

const navItems: NavItem[] = [
    { path: '/', icon: 'home', label: 'Beranda' },
    { path: '/feed', icon: 'feed', label: 'Feed' },
    { path: '/mall', icon: 'storefront', label: 'Mall' },
    { path: '/notifications', icon: 'notifications', label: 'Notifikasi' },
    { path: '/profile', icon: 'person', label: 'Profil' },
];

export function BottomNavBuyer() {
    return (
        <nav className="fixed bottom-0 w-full bg-white dark:bg-[#1a120b] border-t border-gray-100 dark:border-gray-800 pb-safe pt-2 px-6 z-50 md:hidden">
            <div className="flex justify-between items-center pb-4">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex flex-col items-center gap-1 w-12 transition-colors ${isActive
                                ? 'text-primary'
                                : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-200'
                            }`
                        }
                    >
                        {({ isActive }) => (
                            <>
                                <Icon name={item.icon} filled={isActive} />
                                <span className="text-[10px] font-medium">{item.label}</span>
                            </>
                        )}
                    </NavLink>
                ))}
            </div>
        </nav>
    );
}
