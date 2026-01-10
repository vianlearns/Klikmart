import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../../components/common/Icon';
import { MobileContainer } from '../../components/layout/MobileContainer';

interface Transaction {
    id: string;
    type: 'income' | 'withdrawal' | 'fee';
    title: string;
    subtitle: string;
    amount: number;
    isPositive?: boolean;
    time: string;
    date?: string;
}

const initialTransactions: Transaction[] = [
    {
        id: '1',
        type: 'income',
        title: 'Penjualan',
        subtitle: 'Order #2938491223',
        amount: 150000,
        isPositive: true,
        time: '14:30'
    },
    {
        id: '2',
        type: 'withdrawal',
        title: 'Penarikan Dana',
        subtitle: 'ke BCA •••• 8829',
        amount: 5000000,
        isPositive: false,
        time: '09:15'
    },
    {
        id: '3',
        type: 'fee',
        title: 'Biaya Admin',
        subtitle: 'Layanan Platform',
        amount: 2500,
        isPositive: false,
        time: '10 Okt',
        date: 'Kemarin'
    },
    {
        id: '4',
        type: 'income',
        title: 'Penjualan',
        subtitle: 'Order #2938491100',
        amount: 2450000,
        isPositive: true,
        time: '10 Okt'
    }
];

const filterTabs = ['Semua', 'Pemasukan', 'Penarikan', 'Diproses'];

export function FinancePage() {
    const navigate = useNavigate();
    const [activeFilter, setActiveFilter] = useState('Semua');
    const [showWithdrawModal, setShowWithdrawModal] = useState(false);
    const [withdrawAmount, setWithdrawAmount] = useState('');
    const [balance, setBalance] = useState(12500000);
    const [transactions, setTransactions] = useState(initialTransactions);

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(price);
    };

    const getIconForType = (type: string) => {
        switch (type) {
            case 'income':
                return { name: 'shopping_bag', bgClass: 'bg-green-50 dark:bg-green-900/20', iconClass: 'text-green-600 dark:text-green-400' };
            case 'withdrawal':
                return { name: 'arrow_outward', bgClass: 'bg-orange-50 dark:bg-orange-900/20', iconClass: 'text-primary' };
            case 'fee':
                return { name: 'receipt', bgClass: 'bg-gray-50 dark:bg-white/5', iconClass: 'text-gray-500' };
            default:
                return { name: 'payments', bgClass: 'bg-gray-50 dark:bg-white/5', iconClass: 'text-gray-500' };
        }
    };

    const handleWithdraw = () => {
        const amount = parseInt(withdrawAmount.replace(/\D/g, '')) || 0;
        if (amount > 0 && amount <= balance) {
            setBalance(prev => prev - amount);
            setTransactions(prev => [{
                id: Date.now().toString(),
                type: 'withdrawal',
                title: 'Penarikan Dana',
                subtitle: 'ke BCA •••• 8829',
                amount: amount,
                isPositive: false,
                time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
            }, ...prev]);
            setShowWithdrawModal(false);
            setWithdrawAmount('');
        }
    };

    const filteredTransactions = transactions.filter(t => {
        if (activeFilter === 'Pemasukan') return t.type === 'income';
        if (activeFilter === 'Penarikan') return t.type === 'withdrawal';
        return true;
    });

    // Group transactions by date
    const todayTransactions = filteredTransactions.filter(t => !t.date);
    const yesterdayTransactions = filteredTransactions.filter(t => t.date === 'Kemarin');

    return (
        <MobileContainer className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col overflow-x-hidden antialiased transition-colors duration-200">
            {/* Top App Bar */}
            <div className="sticky top-0 z-50 bg-surface-light dark:bg-surface-dark shadow-sm">
                <div className="flex items-center p-4 pb-3 justify-between max-w-6xl mx-auto">
                    <button
                        onClick={() => navigate('/seller-center')}
                        className="text-text-main dark:text-white flex size-10 shrink-0 items-center justify-center cursor-pointer rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                    >
                        <Icon name="arrow_back_ios_new" size={24} />
                    </button>
                    <h2 className="text-text-main dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
                        Keuangan
                    </h2>
                    <div className="flex w-10 items-center justify-end">
                        <button
                            onClick={() => navigate('/settings')}
                            className="flex size-10 cursor-pointer items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-text-main dark:text-white"
                        >
                            <Icon name="settings" size={24} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 w-full max-w-6xl mx-auto px-4 py-4 space-y-5 pb-24">
                {/* Desktop Layout: Side by side */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    {/* Left Column - Balance & Actions */}
                    <div className="lg:col-span-1 space-y-5">
                        {/* Balance Card */}
                        <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-5 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] border border-gray-100 dark:border-white/5 relative overflow-hidden group">
                            {/* Decorative circle pattern */}
                            <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/5 rounded-full pointer-events-none group-hover:scale-110 transition-transform duration-700 ease-out" />
                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        <Icon name="account_balance_wallet" size={20} className="text-primary" />
                                        <p className="text-text-secondary dark:text-gray-400 text-sm font-medium">Saldo Penjual</p>
                                    </div>
                                    <button
                                        onClick={() => navigate('/help')}
                                        className="hover:text-primary transition-colors"
                                    >
                                        <Icon name="help" size={18} className="text-gray-400 cursor-help" />
                                    </button>
                                </div>
                                <h1 className="text-text-main dark:text-white text-[32px] font-bold leading-tight tracking-tight mb-1">
                                    {formatPrice(balance)}
                                </h1>
                                <div className="flex items-center gap-2 mb-6">
                                    <Icon name="pending" size={16} className="text-orange-400" />
                                    <p className="text-text-secondary dark:text-gray-400 text-sm">Rp 2.450.000 sedang diproses</p>
                                </div>
                                <button
                                    onClick={() => setShowWithdrawModal(true)}
                                    className="w-full flex cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 bg-primary hover:bg-primary/90 transition-colors text-white gap-2 text-base font-bold leading-normal shadow-lg shadow-primary/20"
                                >
                                    <Icon name="logout" size={24} />
                                    <span>Tarik Dana</span>
                                </button>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="grid grid-cols-3 gap-3">
                            <button
                                onClick={() => navigate('/settings')}
                                className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-white dark:bg-surface-dark hover:bg-gray-50 dark:hover:bg-white/5 border border-transparent hover:border-gray-100 dark:border-white/5 transition-all shadow-sm"
                            >
                                <div className="size-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                    <Icon name="credit_card" size={24} />
                                </div>
                                <span className="text-xs font-semibold text-text-main dark:text-gray-200">Rekening</span>
                            </button>
                            <button
                                onClick={() => navigate('/seller/statistics')}
                                className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-white dark:bg-surface-dark hover:bg-gray-50 dark:hover:bg-white/5 border border-transparent hover:border-gray-100 dark:border-white/5 transition-all shadow-sm"
                            >
                                <div className="size-10 rounded-full bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
                                    <Icon name="monitoring" size={24} />
                                </div>
                                <span className="text-xs font-semibold text-text-main dark:text-gray-200">Analisis</span>
                            </button>
                            <button
                                onClick={() => window.print()}
                                className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-white dark:bg-surface-dark hover:bg-gray-50 dark:hover:bg-white/5 border border-transparent hover:border-gray-100 dark:border-white/5 transition-all shadow-sm"
                            >
                                <div className="size-10 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-600 dark:text-green-400">
                                    <Icon name="receipt_long" size={24} />
                                </div>
                                <span className="text-xs font-semibold text-text-main dark:text-gray-200">Laporan</span>
                            </button>
                        </div>
                    </div>

                    {/* Right Column - Transaction History */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-bold text-text-main dark:text-white">Riwayat Transaksi</h3>
                            <button
                                onClick={() => navigate('/seller/statistics')}
                                className="text-primary text-sm font-semibold hover:underline"
                            >
                                Lihat Semua
                            </button>
                        </div>

                        {/* Filter Tabs */}
                        <div className="flex gap-2 overflow-x-auto no-scrollbar mb-4 pb-1">
                            {filterTabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveFilter(tab)}
                                    className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${activeFilter === tab
                                            ? 'bg-text-main dark:bg-white text-white dark:text-background-dark shadow-sm font-bold'
                                            : 'bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 text-text-secondary dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5'
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* Transaction List */}
                        <div className="flex flex-col gap-3">
                            {/* Date Header - Hari Ini */}
                            {todayTransactions.length > 0 && (
                                <>
                                    <p className="text-xs font-bold text-text-secondary dark:text-gray-500 uppercase tracking-wider mt-2 mb-1">
                                        Hari Ini
                                    </p>
                                    {todayTransactions.map((transaction) => {
                                        const icon = getIconForType(transaction.type);
                                        return (
                                            <button
                                                key={transaction.id}
                                                onClick={() => navigate(`/seller/statistics`)}
                                                className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl flex items-center justify-between shadow-sm border border-transparent dark:border-white/5 hover:border-primary/20 dark:hover:border-primary/20 transition-all cursor-pointer text-left w-full"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className={`size-10 rounded-full ${icon.bgClass} flex items-center justify-center shrink-0`}>
                                                        <Icon name={icon.name} size={20} className={icon.iconClass} />
                                                    </div>
                                                    <div className="flex flex-col min-w-0">
                                                        <p className="text-sm font-bold text-text-main dark:text-white truncate">
                                                            {transaction.title}
                                                        </p>
                                                        <p className="text-xs text-text-secondary dark:text-gray-400 truncate">
                                                            {transaction.subtitle}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col items-end shrink-0">
                                                    <p className={`text-sm font-bold ${transaction.isPositive ? 'text-green-600 dark:text-green-400' : 'text-text-main dark:text-white'}`}>
                                                        {transaction.isPositive ? '+ ' : '- '}{formatPrice(transaction.amount)}
                                                    </p>
                                                    <p className="text-[10px] text-text-secondary dark:text-gray-500">
                                                        {transaction.time}
                                                    </p>
                                                </div>
                                            </button>
                                        );
                                    })}
                                </>
                            )}

                            {/* Date Header - Kemarin */}
                            {yesterdayTransactions.length > 0 && (
                                <>
                                    <p className="text-xs font-bold text-text-secondary dark:text-gray-500 uppercase tracking-wider mt-4 mb-1">
                                        Kemarin
                                    </p>
                                    {yesterdayTransactions.map((transaction) => {
                                        const icon = getIconForType(transaction.type);
                                        return (
                                            <button
                                                key={transaction.id}
                                                onClick={() => navigate(`/seller/statistics`)}
                                                className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl flex items-center justify-between shadow-sm border border-transparent dark:border-white/5 hover:border-primary/20 dark:hover:border-primary/20 transition-all cursor-pointer text-left w-full"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className={`size-10 rounded-full ${icon.bgClass} flex items-center justify-center shrink-0`}>
                                                        <Icon name={icon.name} size={20} className={icon.iconClass} />
                                                    </div>
                                                    <div className="flex flex-col min-w-0">
                                                        <p className="text-sm font-bold text-text-main dark:text-white truncate">
                                                            {transaction.title}
                                                        </p>
                                                        <p className="text-xs text-text-secondary dark:text-gray-400 truncate">
                                                            {transaction.subtitle}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col items-end shrink-0">
                                                    <p className={`text-sm font-bold ${transaction.isPositive ? 'text-green-600 dark:text-green-400' : 'text-text-main dark:text-white'}`}>
                                                        {transaction.isPositive ? '+ ' : '- '}{formatPrice(transaction.amount)}
                                                    </p>
                                                    <p className="text-[10px] text-text-secondary dark:text-gray-500">
                                                        {transaction.time}
                                                    </p>
                                                </div>
                                            </button>
                                        );
                                    })}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Withdraw Modal */}
            {showWithdrawModal && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 w-full max-w-sm shadow-2xl">
                        <h3 className="text-lg font-bold text-text-main dark:text-white mb-4">Tarik Dana</h3>
                        <div className="mb-4">
                            <label className="text-sm text-text-secondary dark:text-gray-400 mb-2 block">Jumlah Penarikan</label>
                            <input
                                type="text"
                                value={withdrawAmount}
                                onChange={(e) => {
                                    const value = e.target.value.replace(/\D/g, '');
                                    setWithdrawAmount(value ? formatPrice(parseInt(value)) : '');
                                }}
                                className="w-full h-12 px-4 rounded-lg border border-gray-200 dark:border-white/10 bg-transparent text-text-main dark:text-white focus:ring-2 focus:ring-primary/50 focus:border-primary text-lg font-bold"
                                placeholder="Rp 0"
                            />
                            <p className="text-xs text-text-secondary dark:text-gray-400 mt-2">
                                Saldo tersedia: {formatPrice(balance)}
                            </p>
                        </div>
                        <div className="mb-4 p-3 bg-gray-50 dark:bg-white/5 rounded-lg">
                            <p className="text-xs text-text-secondary dark:text-gray-400 mb-1">Rekening Tujuan</p>
                            <p className="text-sm font-bold text-text-main dark:text-white">BCA •••• 8829</p>
                            <p className="text-xs text-text-secondary dark:text-gray-400">a.n. Toko Fashion Official</p>
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={() => {
                                    setShowWithdrawModal(false);
                                    setWithdrawAmount('');
                                }}
                                className="flex-1 h-12 rounded-xl border border-gray-200 dark:border-white/10 text-text-main dark:text-white font-bold hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                            >
                                Batal
                            </button>
                            <button
                                onClick={handleWithdraw}
                                className="flex-1 h-12 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                            >
                                Tarik Sekarang
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </MobileContainer>
    );
}
