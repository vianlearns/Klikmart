export const helpTopics = [
    { title: 'Bagaimana cara membatalkan pesanan?', slug: 'cara-batalkan-pesanan' },
    { title: 'Kapan dana pengembalian masuk?', slug: 'kapan-dana-masuk' },
    { title: 'Saya tidak menerima kode OTP', slug: 'masalah-otp' },
    { title: 'Cara mengubah alamat pengiriman', slug: 'ubah-alamat' }
];

export const helpCategories = [
    { icon: 'shopping_bag', title: 'Pembelian', desc: 'Order, Status, Batal' },
    { icon: 'local_shipping', title: 'Pengiriman', desc: 'Lacak, Kurir, Ongkir' },
    { icon: 'account_balance_wallet', title: 'Pembayaran', desc: 'Metode, Kendala' },
    { icon: 'security', title: 'Keamanan', desc: 'Login, OTP, Privasi' }
];

export const helpQuickActions = [
    { icon: 'inventory_2', label: 'Status\nPesanan', route: '/orders' },
    { icon: 'currency_exchange', label: 'Pengem-\nbalian', route: '/orders/returns' },
    { icon: 'local_activity', label: 'Voucher\nSaya', route: '/vouchers' }, // Assuming route
    { icon: 'lock_reset', label: 'Ganti\nPassword', route: '/settings/password' }, // Assuming route
    { icon: 'account_circle', label: 'Akun\nSaya', route: '/profile' },
];

export const notificationsData = [
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

export const chatList = [
    {
        id: 'c1',
        title: 'Toko Sejahtera',
        lastMessage: 'Halo kak! 👋 Ready siap kirim kok. Silahkan diorder ya',
        time: '10:45 AM',
        unread: 2,
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_XS2PsovIeUQjPfXz2ULl6wcUjHxtS_-94s7OtDpGeohXHnohenWNvN8kyhnK8J_AyGH7ZVpbdbOMVlNO3VPmJqVZXKrwwFHdE1JRqmaHfZEcwvwylva4fuFAttYLOzBp4at6Bxoj7o9xHUgZhHQ8jMroeCOotW1Wc-z_-Gp4X4ZnA6mvnetZ3V3UiKi7qSU3EcuYgL4tP4_7cCiu28WayEtHfKdPJxWjSncKejiCF6k9vRub7TxBlplp8MapmVdipnn2Y-F3b-Gn',
        isOnline: true,
        type: 'seller'
    },
    {
        id: 'c2',
        title: 'Toko Official Store',
        lastMessage: 'Halo Kak! 👋 Iya, barang untuk varian Hitam size 42 ready',
        time: '09:45 AM',
        unread: 0,
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuRnwb2kEqNTlOZzTVBMAkumngyKINclrTGKJj8lx5NzfoLyJKBAl36VuCWDmAn_MWpXnlDWxdmTNtaVaBE76fJ-Qh7ndIjk3pGOL_G5B4goreDGYmekUaWKJz3jZ6ShxetpixDS1KplJYANTLwQ8B7rdQPdndA8IK8QaxClTzollqvDDfl-besA3ACMhikCqr6yP3H0y8pscreB5tHNLgBw2f9aja3e8SNIR1eeFldO53Vp0ZfVwNqxpuJRC5L870m7QHMEMR55zUqEKL7RRCGdjBuW6SzRdZXDxi9mnQua6Pe25JCKEaQW_hfNo9qjhDZ',
        isOnline: true,
        type: 'seller'
    },
    {
        id: 'c3',
        title: 'Yudi (Kurir)',
        lastMessage: 'Paket sudah saya taruh di pos satpam ya kak',
        time: 'Kemarin',
        unread: 1,
        avatar: 'https://i.pravatar.cc/150?u=yudi',
        isOnline: false,
        type: 'courier'
    }
];

export const initialMessages = [
    {
        id: 'm1',
        sender: 'user',
        text: 'Halo gan, barang ini ready stok warna merah ukuran L?',
        time: '10:42 AM',
        isProductContext: true,
        type: 'text'
    },
    {
        id: 'm2',
        sender: 'seller',
        text: 'Halo kak! 👋 Ready siap kirim kok. Silahkan diorder ya sebelum jam 3 sore biar ikut pengiriman hari ini.',
        time: '10:45 AM',
        type: 'text'
    },
    {
        id: 'm3',
        sender: 'user',
        text: 'Oke, saya checkout sekarang ya.',
        time: '10:46 AM',
        type: 'text'
    }
];

export const userAddresses = [
    {
        id: 'a1',
        label: 'Rumah',
        recipient: 'Vivian Prabaswara',
        phone: '(+62) 812-3456-7890',
        address: 'Jl. Mawar No. 123, RT 01/RW 02, Kel. Menteng, Kec. Menteng',
        city: 'Jakarta Pusat, DKI Jakarta',
        postalCode: '10310',
        isPrimary: true
    },
    {
        id: 'a2',
        label: 'Kantor',
        recipient: 'Vivian (Kantor)',
        phone: '(+62) 812-3456-7890',
        address: 'Gedung Cyber 2, Lt. 15, Jl. H.R. Rasuna Said Blok X-5',
        city: 'Jakarta Selatan, DKI Jakarta',
        postalCode: '12950',
        isPrimary: false
    }
];
