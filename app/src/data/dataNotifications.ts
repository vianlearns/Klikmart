// Notification data for Klikmart

import type { Notification } from './types';

export const notificationsData: Notification[] = [
    {
        id: 1,
        type: 'order',
        title: 'Pesanan Tiba',
        time: '2 jam lalu',
        content: 'Paket [ID: 12345] telah tiba di hub transit Jakarta Utara. Kurir sedang mempersiapkan pengantaran ke lokasi Anda.',
        isRead: false,
        icon: 'package_2',
        color: 'green',
        group: 'pesanan'
    },
    {
        id: 2,
        type: 'order',
        title: 'Pesanan Dikirim',
        time: '5 jam lalu',
        content: "Penjual telah mengirimkan barang 'Sepatu Nike Air Jordan'. Cek posisi paketmu sekarang.",
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBVwi9pvbiROYSxj2DIWY6FkoXrdUdUW-q3UC2hqsFn7C2kNubZComQElyCX0NIb6FeQxGufQs0hq-5PMJU3g01XSVreDyIMQ7wK_pCLE43Ls0Eepg7oZ4wW9a_yEVEST41wR51YTcIik0t8aM9qgObThciQOTGU0Ene_aDjiMBoBeSD083EC-QsKm7vCUWLbQZwbndTAx-W9OLWVa-mIoOugCNCK1xeIPLuM7zR_z_RsjslrbgRoHJg925i8C5cFGZpfpeiHoMLP4',
        isRead: false,
        action: 'Lacak Pesanan',
        group: 'pesanan'
    },
    {
        id: 3,
        type: 'wallet',
        title: 'Menunggu Pembayaran',
        time: '6 jam lalu',
        content: 'Jangan lupa bayar tagihan Pesanan #XP-9920 sebelum pkl 23:59 WIB agar tidak dibatalkan otomatis.',
        isRead: true,
        icon: 'account_balance_wallet',
        color: 'orange',
        group: 'wallet'
    },
    {
        id: 4,
        type: 'system',
        title: 'Keamanan Akun',
        time: 'Kemarin',
        content: 'Login baru terdeteksi dari iPhone 13 Pro di Surabaya. Jika ini bukan Anda, segera ubah kata sandi.',
        isRead: true,
        icon: 'security',
        color: 'blue',
        group: 'sistem'
    },
    {
        id: 5,
        type: 'promo',
        title: 'Flash Sale 9.9!',
        time: 'Kemarin',
        content: 'Diskon hingga 90% untuk semua kategori elektronik. Serbu sekarang sebelum kehabisan!',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTkNHuI4DBny-V5eZvCdersDxlV5wWQ_iNAwboG8kslFWRDINDL8fmKwJ5oHpUPh3jI9w1EkysUGtrM3gByMt76pzOfDqKuGEjBbfJdL0ei_2MzEVyocHvugUImd4t8Xm_B48hjlFMLedBnR2PFkH6e0OeaWWnlPseYQMX2b_2_p22EkRurLhVgZLH19Vd2CPPxScm3B3iKeGixtyiWcm3u73vt0znzAPRbz8TPHmP7peyD_1HH9AVUJ7gs2cSbXgq0Lzm6NIX99Dl',
        isRead: true,
        icon: 'local_offer',
        color: 'purple',
        group: 'promo'
    },
    {
        id: 6,
        type: 'order',
        title: 'Pesanan Selesai',
        time: 'Kemarin',
        content: 'Paket [ID: 88219] telah diterima oleh Yudi (YBS). Jangan lupa berikan ulasan!',
        isRead: true,
        icon: 'check_circle',
        color: 'gray',
        action: 'Beri Ulasan',
        group: 'pesanan'
    }
];
