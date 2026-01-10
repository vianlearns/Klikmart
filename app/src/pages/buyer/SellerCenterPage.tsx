import { useNavigate } from 'react-router-dom';
import { Icon } from '../../components/common/Icon';
import { MobileContainer } from '../../components/layout/MobileContainer';

export function SellerCenterPage() {
    const navigate = useNavigate();

    return (
        <MobileContainer className="bg-background-light dark:bg-background-dark min-h-screen flex items-center justify-center p-6">
            <div className="text-center max-w-sm">
                <div className="w-20 h-20 bg-teal-100 dark:bg-teal-900/30 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon name="store" size={40} />
                </div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Pusat Penjualan</h1>
                <p className="text-gray-500 dark:text-gray-400 mb-8">
                    Fitur Pusat Penjualan sedang dalam pengembangan. Segera hadir untuk membantu bisnis Anda semakin berkembang!
                </p>
                <button
                    onClick={() => navigate('/profile')}
                    className="w-full bg-teal-600 text-white font-bold py-3 rounded-xl hover:bg-teal-700 transition-colors shadow-lg shadow-teal-600/20"
                >
                    Kembali ke Profil
                </button>
            </div>
        </MobileContainer>
    );
}
