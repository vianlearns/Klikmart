// Chat data for Klikmart

import type { ChatRoom, ChatMessage } from './types';

// Chat List
export const chatList: ChatRoom[] = [
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

// Initial Chat Messages (for chat room)
export const initialMessages: ChatMessage[] = [
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
