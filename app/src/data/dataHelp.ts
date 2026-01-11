// Help center data for Klikmart

import type { HelpTopic, HelpCategory, HelpQuickAction } from './types';

export const helpTopics: HelpTopic[] = [
    { title: 'Bagaimana cara membatalkan pesanan?', slug: 'cara-batalkan-pesanan' },
    { title: 'Kapan dana pengembalian masuk?', slug: 'kapan-dana-masuk' },
    { title: 'Saya tidak menerima kode OTP', slug: 'masalah-otp' },
    { title: 'Cara mengubah alamat pengiriman', slug: 'ubah-alamat' }
];

export const helpCategories: HelpCategory[] = [
    { icon: 'shopping_bag', title: 'Pembelian', desc: 'Order, Status, Batal' },
    { icon: 'local_shipping', title: 'Pengiriman', desc: 'Lacak, Kurir, Ongkir' },
    { icon: 'account_balance_wallet', title: 'Pembayaran', desc: 'Metode, Kendala' },
    { icon: 'security', title: 'Keamanan', desc: 'Login, OTP, Privasi' }
];

export const helpQuickActions: HelpQuickAction[] = [
    { icon: 'inventory_2', label: 'Status\nPesanan', route: '/orders' },
    { icon: 'currency_exchange', label: 'Pengem-\nbalian', route: '/orders/returns' },
    { icon: 'local_activity', label: 'Voucher\nSaya', route: '/vouchers' },
    { icon: 'lock_reset', label: 'Ganti\nPassword', route: '/settings/password' },
    { icon: 'account_circle', label: 'Akun\nSaya', route: '/profile' },
];
