import { useNavigate } from 'react-router-dom';
import { Icon } from '../../components/common/Icon';
import { MobileContainer } from '../../components/layout/MobileContainer';
import { Header } from '../../components/layout/Header';
import { userAddresses } from '../../data/buyerData';
import { useState } from 'react';

export function AddressPage() {
    const navigate = useNavigate();
    const [addresses, setAddresses] = useState(userAddresses);

    const handleSetPrimary = (id: string) => {
        setAddresses(prev => prev.map(addr => ({
            ...addr,
            isPrimary: addr.id === id
        })));
        window.alert("Alamat utama berhasil diubah");
    };

    const handleDelete = (id: string) => {
        if (window.confirm("Yakin ingin menghapus alamat ini?")) {
            setAddresses(prev => prev.filter(addr => addr.id !== id));
        }
    };

    return (
        <MobileContainer className="bg-background-light dark:bg-background-dark min-h-screen">
            {/* Desktop Header */}
            <Header className="hidden md:block" showMobileElements={false} />

            <div className="md:max-w-4xl md:mx-auto md:px-6 md:py-8 w-full">
                {/* Desktop Title & Add Button */}
                <div className="hidden md:flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Daftar Alamat</h1>
                    <button
                        onClick={() => window.alert("Fitur tambah alamat belum tersedia")}
                        className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-md active:scale-95"
                    >
                        <Icon name="add" size={20} />
                        Tambah Alamat Baru
                    </button>
                </div>

                {/* Mobile Header */}
                <div className="md:hidden sticky top-0 z-50 bg-white dark:bg-[#1a120b] border-b border-gray-100 dark:border-white/5 px-4 py-3 shadow-sm">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => navigate(-1)}
                            className="flex items-center justify-center p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
                        >
                            <Icon name="arrow_back" size={24} className="text-gray-900 dark:text-white" />
                        </button>
                        <h1 className="text-lg font-bold text-gray-900 dark:text-white flex-1">Alamat Saya</h1>
                    </div>
                </div>

                {/* Search Bar (Optional for desktop, good for long lists) */}
                <div className="p-4 md:p-0 mb-4">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Icon name="search" className="text-gray-400" size={20} />
                        </div>
                        <input
                            className="block w-full pl-10 pr-3 py-2.5 border-none md:border md:border-gray-200 md:dark:border-gray-700 rounded-xl bg-white dark:bg-[#2c241d] text-sm placeholder-gray-400 focus:ring-1 focus:ring-primary shadow-sm"
                            placeholder="Cari alamat..."
                            type="text"
                        />
                    </div>
                </div>

                {/* Address List */}
                <div className="flex flex-col gap-4 px-4 md:px-0 pb-20 md:pb-0">
                    {addresses.map((addr) => (
                        <div
                            key={addr.id}
                            className={`flex flex-col p-4 bg-white dark:bg-[#221810] rounded-xl shadow-sm border ${addr.isPrimary ? 'border-primary bg-primary/5 dark:bg-primary/5' : 'border-gray-100 dark:border-gray-800'}`}
                        >
                            <div className="flex justify-between items-start mb-3">
                                <div className="flex items-center gap-2">
                                    <span className="text-sm font-bold text-gray-900 dark:text-white">{addr.label}</span>
                                    {addr.isPrimary && (
                                        <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wide rounded">Utama</span>
                                    )}
                                </div>
                                {!addr.isPrimary && (
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => handleDelete(addr.id)}
                                            className="p-1.5 text-gray-400 hover:text-red-500 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                                        >
                                            <Icon name="delete" size={20} />
                                        </button>
                                    </div>
                                )}
                            </div>

                            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">{addr.recipient}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">{addr.phone}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                {addr.address}, {addr.city}, {addr.postalCode}
                            </p>

                            <div className="flex items-center gap-3 mt-auto pt-3 border-t border-gray-100 dark:border-gray-800">
                                <button
                                    onClick={() => window.alert("Fitur ubah alamat belum tersedia")}
                                    className="flex-1 py-2 text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-gray-50 dark:hover:bg-white/5 rounded-lg transition-colors border border-gray-200 dark:border-gray-700 md:border-none"
                                >
                                    Ubah Alamat
                                </button>
                                {!addr.isPrimary && (
                                    <button
                                        onClick={() => handleSetPrimary(addr.id)}
                                        className="flex-1 py-2 text-sm font-semibold text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors shadow-sm"
                                    >
                                        Atur Utama
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile FAB */}
                <button
                    onClick={() => window.alert("Fitur tambah alamat belum tersedia")}
                    className="md:hidden fixed bottom-6 right-4 w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary/90 transition-transform active:scale-95 z-40"
                >
                    <Icon name="add" size={28} />
                </button>
            </div>
        </MobileContainer>
    );
}
