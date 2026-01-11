// Seller finance data for Klikmart

import type { Transaction } from './types';

export const initialTransactions: Transaction[] = [
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

export const filterTabs = ['Semua', 'Pemasukan', 'Penarikan', 'Diproses'];
