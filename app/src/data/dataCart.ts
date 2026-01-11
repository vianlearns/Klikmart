// Cart data for Klikmart

import type { CartStore } from './types';

export const cartStores: CartStore[] = [
    {
        id: 'store1',
        name: 'Adidas Official Store',
        checked: true,
        items: [
            {
                id: 'item1',
                name: 'Sepatu Lari Pria Ultraboost Light - Vivid Orange',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0bDZqXRpoXgMNvRid8sBLwofGiPrfu24_O-DSSSF8xXqfkMajitLu6pEluvtx1ZnzTatfhlXVbl-PISg-M5pKD5bVpqCf5Phc63dvIslQFI9BddYooXcq0OleiH7Bvxkx1TfV6JY_pIYnBXPh5qfKUeoFME6PXSpfv3ImDaly_8QRFZTtN2Otg4wcXgBMOD8aZqrLaSt2KeUDQS6l5xPma7zDFtQxcdJYCOetp7KjBJr5TVcAi8bgaRQYHAHVe2yD0PywdcnjBjk6',
                variant: 'Orange, 42',
                price: 1999000,
                originalPrice: 2500000,
                quantity: 1,
                checked: true,
            },
            {
                id: 'item2',
                name: 'Kaos Kaki Olahraga Ankle - Putih (Isi 3 Pasang)',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHJ03Z-zkVImQzbkYh-8hRodW-zfB3phyXiwI9PnzCHwiJs2fMXtjjWFtfvRrArOvBB-sC4CK3547gu_AuuGGwXfYVSHhI-k7ZCWgU_Q8G7JGPWGZ5dPKN6vDuiHa5tLFDhb2cfQRMt3eBd1PogpkufKFAV3oZvjmd2Yz-008MJ3pUg_qZ4yzidHwu2r6vtvW-KC0VAYsO9bZ6mVNiVPkMIhfwnkTgxlAOS_7ALIISMklROyO0lwF_zZh_S4zXZE8Mfn05PwOJNwMa',
                variant: 'Putih, All Size',
                price: 149000,
                originalPrice: undefined,
                quantity: 2,
                checked: true,
            }
        ]
    },
    {
        id: 'store2',
        name: 'Uniqlo Indonesia',
        checked: false,
        items: [
            {
                id: 'item3',
                name: 'Jaket Hoodie Resleting Pria - Navy Blue',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5tGcQcvdYsGvT32Ae50RIFV6SN6WqJleauHrb61PagJD_UnJkf8Zzf0T6ZzaEC-8ftI5TITepcnpgE6PrBXrFCseyTf80I-neA613KILEa4KjoLCzQ3ERF5-dYKzMtGJ2Zh6jeBZ9rGZo6RUGSjDhp6bz2psCmLbZbj8gfZgePiFhgkoll9MB6NRb3Hq0aoRC88tCg_icPHLPBvjqv5So1zQLVRvtK82JVj-QIEH_G26DJXy6973KHmA9RBkJGfdHlFo9-nEdgUxg',
                variant: 'Navy, L',
                price: 499000,
                originalPrice: undefined,
                quantity: 1,
                checked: false,
            }
        ]
    }
];
