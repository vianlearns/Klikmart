// Order Status Types
export type OrderStatus = 'unpaid' | 'processing' | 'shipped' | 'completed' | 'cancelled' | 'return';

export interface OrderProduct {
    id: string;
    name: string;
    image: string;
    variant: string;
    quantity: number;
    price: number;
    originalPrice?: number;
}

export interface Order {
    id: string;
    storeName: string;
    storeVerified?: boolean;
    status: OrderStatus;
    statusLabel: string;
    products: OrderProduct[];
    totalPrice: number;
    shippingCost: number;
    createdAt: string;
    paymentDeadline?: string;
    trackingNumber?: string;
    courier?: string;
    estimatedArrival?: string;
    latestUpdate?: string;
    needsRating?: boolean;
    returnDeadline?: string;
    refundAmount?: number;
}

// Mock Orders Data
export const orders: Order[] = [
    // Unpaid Orders
    {
        id: 'ORD001',
        storeName: 'Gadget Store Official',
        storeVerified: true,
        status: 'unpaid',
        statusLabel: 'Menunggu Pembayaran',
        products: [
            {
                id: 'p1',
                name: 'iPhone 13 Pro Max - 256GB, Sierra Blue Garansi Resmi iBox',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoh-ULgtwsCOSJjFDnkcmFFD6Ox8A22-2dAxVjaRNzxdC1zZAlrODsNMSkUvG-cTe0xYLTvgyK8-U2_zDeGQCS_QISWD1cq4-aHeLmdgaciBlIcRwwG-gSOeN301tfKnNttKDbBxd7TigAWHgL93pacGz8Z6DVsQiECeI1WRUa8hd0L0VzZlhVnB1axvqXmkNaMxJcsV6rkOayIj8MTJNw6H00ItmVHGAYnKjA_kdq20fb6gY8XPY56WHccgrxm-QdP_TQDB3L0wCe',
                variant: '256GB, Blue',
                quantity: 1,
                price: 18500000,
                originalPrice: 21000000,
            }
        ],
        totalPrice: 18520000,
        shippingCost: 20000,
        createdAt: '2026-01-09T10:00:00',
        paymentDeadline: '23:59:00',
    },
    {
        id: 'ORD002',
        storeName: 'Nike Official Store',
        storeVerified: true,
        status: 'unpaid',
        statusLabel: 'Menunggu Pembayaran',
        products: [
            {
                id: 'p2',
                name: 'Nike Air Jordan 1 Low - Gym Red/Black/White',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVDVD4iWpWLjSgUASlLWiOWgln0OW-1jT2MCfw4yxbitFPk8HUFWxKTsXCRvCcdM09r7j5TG4rPR6Ehudb86Zpn2SCRKg-BTD8d8bOotWb1p7KdlVNF-OvnEVCxG1sI7I5aD7bOt9O0qhgTa72_SswXh7wGzd8mfpodQrjjfPYP_gGgW0EkjAc99VJAPHznLTJ4qJ6WQ0X9_vpkCyEke3DvelWgQq0sBzorR0j6veZTUmIW8Vmv4haFKx3HR9felKH8B9VAGKVrvwb',
                variant: 'Size 42',
                quantity: 1,
                price: 2499000,
            },
            {
                id: 'p3',
                name: 'Nike Everyday Cushioned Socks (3 Pairs)',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDt-eDgUxDR-BsDTqhBhsMAtBooUYSW_xpYF8DLpE5N0n1wc3FzRPko18WXPR5uLvCrp06WoprLQRMOjqxW19H2WembqhaMMtmDUkfHYbILFxW_fKGeJfqaH5VbpazEitqP53KQFpumV2FZIkMpiw3ulp-B0L1Lj6Z-qjIqu1YTug_UNP8yGwOe5dfmyffjMRRnjMR15yvoX1CcwhN-etje4RLneGf3Y5aPL9fJu2KFVJAEK7HMM0zCyz_KA0yGurIiVOfLa7tkW5-e',
                variant: 'White, L',
                quantity: 1,
                price: 249000,
            }
        ],
        totalPrice: 2768000,
        shippingCost: 20000,
        createdAt: '2026-01-09T09:00:00',
    },
    // Processing Orders
    {
        id: 'ORD003',
        storeName: 'Toko Sepatu Official',
        status: 'processing',
        statusLabel: 'Sedang Dikemas',
        products: [
            {
                id: 'p4',
                name: 'Sneakers Canvas High Top Classic - Edisi Terbatas',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDy3HzpPujqW19vo2-zThhMwTFjGtPzp4gJXI7RsWwXRoKSEmKKN4FERzm3Swkwu32MBCYaSE21FV0-ulkLQqm6SrwDu27IzQZWR_V33x9k--725UTnhY_1nSsUQkUQ7I6JfuWdHAqIBvW6B1lAb9aW8RObMaIAuXLHOTUM2w-ZUXLYsb5VldBSiKUBlEBMdChwb_cnZ_pJbCNEkchKtyuZcLiV9c9srMRiUHdR7kEAdXJpMKe8ExuYx8rgJyGABXR_NuvpA58KNSn7',
                variant: 'Hitam, 42',
                quantity: 1,
                price: 150000,
            }
        ],
        totalPrice: 162000,
        shippingCost: 12000,
        createdAt: '2026-01-08T14:00:00',
        estimatedArrival: '24 Jan',
    },
    {
        id: 'ORD004',
        storeName: 'Gadget Store ID',
        status: 'processing',
        statusLabel: 'Sedang Dikemas',
        products: [
            {
                id: 'p5',
                name: 'Kabel Data USB Type-C Fast Charging 60W',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQXrHc18YTldw5pa55ylP7ePoPp8-_slkxw1kglWti0B6ookj9I2svwW7cmK9-mDTIsh5cHsT9aPlrMDQAIfbESfIgZGp3SBBi-42UJqS-CGJeJWkNlVFJUnGmZf_fmgoUQDn-lW7KvFaiH1kbgJp8YHCm2uqMt0v0WQm469R5VhfSsOJF_VkA7poxnpheBfu4dr3xOiw1CcoN-nnlqCNRcMdkG8ZJ0fkxv0tD2cl2Sas5h2mZTSwLpDsWXCrLExK2n0KB3nQYtzzo',
                variant: 'Putih, 1m',
                quantity: 2,
                price: 45000,
            },
            {
                id: 'p6',
                name: 'Casing HP Anti Crack Transparent',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdqES4uk4XOvRkgiVh3Hb7ahpzjiZCTAZFDBhoOyaiktMiWVyLsbj9BtfmjOCK3lciH-ftUBBQS17-heiD25M2Y_myAoiUhk7fmch1PFxWT71gS_t0hbGBE9bgAaUpEJ6stw5nCXRPR7CecsDVzI1i2GyF6arE2RUWDvfCdCsj-uP0S3I6A7xuI7TcKZZRxYogMy_NFEs_Zj7zYDrxLvFpofUm3B-dfSX_Eit5Tk9XUeUpixnd8Dl6oJjlpC8NmKQgjfMbWFThS3RP',
                variant: 'iPhone 13',
                quantity: 1,
                price: 15000,
            }
        ],
        totalPrice: 115000,
        shippingCost: 10000,
        createdAt: '2026-01-08T10:00:00',
        estimatedArrival: '25 - 27 Jan',
    },
    // Shipped Orders
    {
        id: 'ORD005',
        storeName: 'Tokopedia Official',
        storeVerified: true,
        status: 'shipped',
        statusLabel: 'Sedang Dikirim',
        products: [
            {
                id: 'p7',
                name: 'Nike Air Max 97 - Black',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJTthX6YN3qLn5EuT6TZiGbBTLGE1W3c7GHymz644qVuS3VtGCAEEJc9Mejd78VbhCw87u9MsWCpXH-HAStepwux47UtH1Ns33xr80jLMTxOlqS_O1wWtQMyX_Q61aXRNHVS1SViKOtdBGlV8k3HRoW-zAxsOSPLZmS87K1HYDhFconcFT6nbeksGO8KgzdtqzO9uLeGR7SkLnxG4oWeCAGeD4faSBGcSOZmLWhSx-4Ih2oNMlNnFq3C0OGTAAYQDSBg245zDgR54-',
                variant: 'Ukuran 42',
                quantity: 1,
                price: 2500000,
            }
        ],
        totalPrice: 2520000,
        shippingCost: 20000,
        createdAt: '2026-01-07T10:00:00',
        trackingNumber: 'JPX1829304',
        courier: 'JNE Regular',
        estimatedArrival: '24 Jan',
        latestUpdate: 'Paket telah sampai di Gudang Sortir Jakarta Timur (Cakung DC).',
    },
    {
        id: 'ORD006',
        storeName: 'Gadget Store ID',
        status: 'shipped',
        statusLabel: 'Kurir Membawa Paket',
        products: [
            {
                id: 'p8',
                name: 'Anker USB-C to USB-C Cable 2M',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcHHC8rZMPcbsdRX92NqK7IsN0qusvwdReetRFU4y5HGEG6aii2bDOZcuHlfZZBM1SIMmRNj_E-HoDV6ams11EdPYlWy8Cc7FknUdJseDBk6ArcunBzRzC7LsvKzxB0b6Kc7fgXC8tn_TA3zdZuy26XH2s_JnLZu1v7N-Z38FP2a8TJxf_479Uxksz8FN8gPdoujukoRbG7YDNKgUJe2VhIZyqxqKwD3jLNYeddfA1lGYWDRCCQIHdxiA87IHJUbu1_qs58jtP1zKY',
                variant: 'Braided Red',
                quantity: 2,
                price: 150000,
            }
        ],
        totalPrice: 310000,
        shippingCost: 10000,
        createdAt: '2026-01-06T10:00:00',
        trackingNumber: 'ID-99887766',
        courier: 'SiCepat',
        estimatedArrival: 'Hari ini',
        latestUpdate: 'Kurir sedang menuju lokasi pengiriman. Mohon pastikan ada penerima.',
    },
    // Completed Orders (needs rating)
    {
        id: 'ORD007',
        storeName: 'Nike Official Store',
        storeVerified: true,
        status: 'completed',
        statusLabel: 'Selesai',
        products: [
            {
                id: 'p9',
                name: 'Nike Air Zoom Pegasus 39 - Sepatu Lari Pria - Merah',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpqXmkIeR-sOIwMI8FvQsKb84HFyLNbQ491vdmvlE3wF8r50oXnbKhTk90nG0I5w5JE1KQtJBPdT3jkI5f7o9FzZYBihL5dbIhr9pZc5f6ADqgBtNtJ26vCEKFqYN9Ho7_oOusI0Fy1DVKTtpom3D2tUPX6q5PUtyUIWuBJO-enA-TRogywaJHuZOt8pN1-RnOvFJS4UzP-A-aGmSoTQ2SNJkNO-mTVhtOl8hmL_5Qj-DDx4RI49LENw7aT3chgmdT-oYrvrlX73-M',
                variant: '42, Merah',
                quantity: 1,
                price: 1850000,
            }
        ],
        totalPrice: 1870000,
        shippingCost: 20000,
        createdAt: '2026-01-05T10:00:00',
        needsRating: true,
    },
    {
        id: 'ORD008',
        storeName: 'Gadget ID Official',
        storeVerified: true,
        status: 'completed',
        statusLabel: 'Selesai',
        products: [
            {
                id: 'p10',
                name: 'Apple Watch Series 8 GPS 41mm Midnight Aluminium Case',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBus0kw2TTIQ0OmBtDd9HiYb1ZTttgG5u5hTDgDy1QfZ8cXuJkdQ_pXFB-hTDbnEJg6W66aIDPv4TnCM8ndk4q2iDtU0oZAm7wO5wr1n6S_mzkDY_qPaCZluXPHaCnKYW8aFBRUR6YIxQGyZRMjZf9V2jP8GXQEWQe81m6nR1qMq5QEvgawJdiLDDcsaCAaRbVEhsHK7sMs4RMmBqHdB0lS6iWNbE5DryrFd4GbnxwROIQ9f1uvlN60_RrWJtygnSCshFCczHzWEmfj',
                variant: 'Midnight, S/M',
                quantity: 1,
                price: 6499000,
            },
            {
                id: 'p11',
                name: 'AirPods Pro (2nd Generation) with MagSafe Case',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLzL4iorOgLfvBbXHvWMTUG1KQa-0pTBOkrGXbkvx6n3MK6KdMcaAp9se7wUQhRKN3WqH21awIgMR0QOL_EKYCshIrbTWkrVIcl_9Mprq9zUwBDJA1ocK6Q3a8FDJpX2LtBK5DTozlDRe2caVbZBpciWKwgNX1dMjz89BO46vkZZAebxiVIr7hVlROG1uV33LUt1pAA3GsZi7IZH5zKuepLkRDljgh9LnW8WDuDfQUeMpJUpJuEE6700lg2YBjKuwFdWzt1cF8HHCf',
                variant: 'White',
                quantity: 1,
                price: 3200000,
            }
        ],
        totalPrice: 9719000,
        shippingCost: 20000,
        createdAt: '2026-01-04T10:00:00',
        needsRating: true,
    },
    {
        id: 'ORD009',
        storeName: 'Skincare Daily',
        status: 'completed',
        statusLabel: 'Selesai',
        products: [
            {
                id: 'p12',
                name: 'Serum Vitamin C 20ml - Pencerah Wajah Glowing',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0jsQmdq7Hhj7O3NkVEaMX4mXBWja_62ZhpGt1DhaxZxVldWEDeIqfTQF0SMlwn2-SsOikm_dKBbFMq201_2IUAVB7bRBG1hxppZWzk29mKQJ2b1DQR7sCuBce4u4jGYDHkh4O7wgbwru90OIBhChrlEUfWFf2ojRdZvgIBBz1NQa5bCFscYuqR0XPhI1kxdwM1DzEELUbUMzLw2WLYUJyjTK50LmZU55tS_OJKvpN3MBNHqvxvinzcvrt2kRpQV8wR0MHqxTEkIJ0',
                variant: '20ml',
                quantity: 1,
                price: 89000,
            }
        ],
        totalPrice: 99000,
        shippingCost: 10000,
        createdAt: '2026-01-03T10:00:00',
        needsRating: true,
    },
    // Return Orders
    {
        id: 'ORD010',
        storeName: 'Nike Official Store',
        storeVerified: true,
        status: 'return',
        statusLabel: 'Kirim Produk',
        products: [
            {
                id: 'p13',
                name: 'Sepatu Nike Air Jordan Low - Merah',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBID3IJNtzvwv4fJq5t5vydpG8AWdzQ9AkiYo4_cQhTq_AtA62bJICf7NtXZkPb1d3ZbBHNCPU4mQZp4rZ91cpm5JPewyayA-zZnmaibHZTk0mF82iLZvlE8cX1BvxTrksHEJEKBDdBapHOMFJWa6-pnLCrACw6FKsMsdzVFcB_aWTHYGbuf4yyIifTgUZD9b3dT7zjnqVBH6r_t0HwcXXGZMw2Ce9Gz0i2tOVfzFOR3C6fQ7j7tNycAnjCnaIVceIaoPg4yPD2wj2D',
                variant: 'Merah, Size 42',
                quantity: 1,
                price: 2500000,
            }
        ],
        totalPrice: 2520000,
        shippingCost: 20000,
        createdAt: '2026-01-02T10:00:00',
        returnDeadline: '25 Jan 2026',
        refundAmount: 2500000,
    },
    {
        id: 'ORD011',
        storeName: 'Uniqlo Indonesia',
        status: 'return',
        statusLabel: 'Menunggu Respon',
        products: [
            {
                id: 'p14',
                name: 'Kemeja Flannel Kotak-kotak Premium',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDukqJCpCm_cHVaGBB-N0ExAihBVVVGUOUMtjLZp9T9JyncAB4BFnda5rnWEXg6iMQ-H1bD1A4BrhudSccsvxoayNCzxM8Gfx7nf1qX6YWKGl5qj8_eJ6U1pDUaMNllSuDTvNHIcJfoARyyvPpEjHsc2h994se2uExg1ZONa4QoWSyfn9FeEbzTqunmkcwmYAOyMyoVFGK3XPodaOTcCI5_9ii5mOOUIQHoBFYyTBOJ7I4FZ9504JXS5Cqis_pWeVF9qT3yFWTrz9Eh',
                variant: 'Navy Blue, L',
                quantity: 1,
                price: 399000,
            }
        ],
        totalPrice: 409000,
        shippingCost: 10000,
        createdAt: '2026-01-01T10:00:00',
        refundAmount: 399000,
    },
];

// User Profile Data
export const userProfile = {
    name: 'Rizky Pratama',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5atNOjAdxSfK-nr_TMIsvJCB6aFOr5plhe0Gg_u2IFrN3baKgl7WPM-J4kq_eLD7s8rINFj1ZXdFxBOJXsHd3F9wUkxMjl_HFWSzdztiH6uj2Db0wTr5PBeRIG2m-QdJmWIWdw179-bQ_4h91ikDOY6kG8ycrQC80tFaYIqbDuTeCf4k9J7lbfK07HyurKS-Kw7bhJF210oj2eXUJsBoTTeZ6gOfn_8f8r2jvok4LGouIwQ8v6oznuFlpWj-etWll_4y3fUrcLp9m',
    membershipLevel: 'Platinum Member',
    followers: 12,
    following: 10,
    wallet: {
        balance: 1500000,
        coins: 2400,
        vouchers: 5,
    },
    orderCounts: {
        unpaid: 1,
        processing: 2,
        shipped: 2,
        needsRating: 3,
        returns: 2,
    },
};

// Search Products Data
export const searchProducts = [
    {
        id: 'sp1',
        name: 'Kemeja Flannel Pria Kotak-kotak Premium',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAV5cc9x7KQVWfdhxcbZg7zbi1iDRWfTjgAqpiEEizTSsVX1b35K8QVt1inkpuVXDuI6cIRtQzEjLLW82TNAysMsbKbCxURy1qWsOw-uvrQT9tE6-6V1-Lz4j0XhgY45OhNJR09md4gu7UNCH12JzEDh_JoIh8afi5t0eQdjl9xheAlTCG3KD0AZMR9W-ZRrKksbqLi1YhVwE-G80FJNd1W2d25dV0VuwJT6y8TNlwz-3Ex4efKY3zBTFfuWXJcREor0R9SqGp-aYvA',
        price: 85000,
        originalPrice: 170000,
        discount: 50,
        rating: 4.8,
        reviews: '10RB',
        location: 'Jakarta Barat',
        badge: 'Mall',
    },
    {
        id: 'sp2',
        name: 'Kaos Polos Cotton Combed 30s Hitam Jetblack',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGsSBKy5mg8ZSaS44yKOlKPKhPVXq7hzNTioi8_fq5I3nQxSyyqGjImPMLT4fZvR-giGtetk9g93MWwGAgbGSCtQ5fi55nvladu1TGyXvTdlZxib3i1WbdmKDCMftB2uYNqs19zZ2kZwdXfSmBetDFl5s6pdYVSuyk4b8JqTMk4q6lx0BqkHMHPuj0H7x0zUxrZV4EzgKa6XqSqIS5NCiU6N9Li6pzATg_wRIrwtT8X6I5dFOSau7-wVgkgeRoC_y66ZcvzJg6DgUW',
        price: 35000,
        originalPrice: 39000,
        discount: 10,
        rating: 4.9,
        reviews: '50RB',
        location: 'Bandung',
        badge: 'Star+',
    },
    {
        id: 'sp3',
        name: 'Jaket Denim Pria Style Korea Oversize Washed Blue',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-pAEFs4ZzM8CGmenH8RALY2k9ZyjdwCBIJ1zAeRqtthO45wmhL63mOppQyAM3F24A8GesExljFWrsaxPrzsEoq1QTI5OXcxO1mBDaTiSHBN5QWT2gMTCLBOWledA9mH3lOjF3RD0sBWIDS1rkL0_DhpqQyklgSxPKqMRK5B6uTAARNePCCvWQKSeE9jusbxCfOeZQV_9zYjCiiMxYml_W_6YYf0L4YoyRwG1i0EbigyrmPTH5bCczT1NqqKMfHQHArCVjhFv_WUVL',
        price: 125000,
        rating: 4.7,
        reviews: '2,5RB',
        location: 'Surabaya',
    },
    {
        id: 'sp4',
        name: 'Celana Chino Panjang Slimfit Krem Original Brand',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiONEP-rgmI9Ho1nWDfA-U9AZyFvpj9wUh09ljTCrtoDowdL_u4w-r0qmAGfNHg6wdaNSR27x6Q2c6xB8BacqV-BZongy0v_jar6Kyhrn7O7tV3dHQ_CkjI9o5JkZirT_vVJypMKNN6HGRH4tQRykYwLaOqSAra-cBZ1vKFpX1Srr9AOkyFjHc5VaxqAKvGHNsHB9GhIZKX3F_g5CP6pnjviX0jMn_V5zzI3Be4I0JwVL0InC0j92ri3Xh3DySRUrZXb4v7TXN5hyz',
        price: 99000,
        originalPrice: 132000,
        discount: 25,
        rating: 4.6,
        reviews: '8RB',
        location: 'Jakarta Selatan',
        badge: 'Mall',
    },
    {
        id: 'sp5',
        name: 'Batik Pria Lengan Pendek Modern Motif Parang',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHmxeDsfpHzPj7f90S0qWVknYxi20AYbhGNspOE_qwbd5-E85E5jfBidSKVLnmumq8ObAvcESSQdmT_UcaF7Sg7xOSYFQCz5rybjc7NsAIGXoXQvlZ5rnGtnBfKcMiXA3-eu8GUR3W55xHtgvziwfBQKX_N5LFZ9OMDRs37uMnprVOCHoGVk8hiKIeHujr4m-KbJNYjMxcAuA50xf1IflJpRg4K2_UugcOL7fCMWJ58p4XpFRTCIXHp-XUqpm6jIAvIBTbmgsA56vh',
        price: 65000,
        originalPrice: 165000,
        discount: 60,
        rating: 4.8,
        reviews: '12RB',
        location: 'Pekalongan',
    },
    {
        id: 'sp6',
        name: 'Hoodie Polos Jumper Fleece Abu-abu Misty Tebal',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrvNGznGex-j9cxHw5ecQE8xdGADF4UVbZdxQn9IPVhxUYjZ8cuaGNb2yBWlSX0ExgCc3Nr0C94Nhwq6tFEV0XD3xIBYgsW7M639qFcdi_NjlF2qSyBZZ1HAVwZjbihD6rjPyYkhVFhkUTS46u4JUoAjNePFsSk2nHqQyYiB9kXOK_i3aabnYEyx7KgDq-4rLj5pkF7gtDNrB9Q7kixzf_kc7m1T_XwFFwfEIYfKG_SDO82HdXunXkXOnlm_CUcukOBZ0ZymyAIMxo',
        price: 75000,
        rating: 4.5,
        reviews: '5RB',
        location: 'Bandung',
        badge: 'Star',
    },
];

// Tracking Timeline Data
export const trackingTimeline = [
    {
        id: 't1',
        icon: 'local_shipping',
        isActive: true,
        title: 'Paket sedang dibawa kurir menuju lokasimu',
        time: 'Hari ini, 14:30',
        location: 'Jakarta Selatan',
        driverName: 'Budi Santoso',
    },
    {
        id: 't2',
        title: 'Paket telah sampai di Gudang Transit Jakarta',
        time: 'Hari ini, 08:15',
        location: 'Jakarta Utara',
    },
    {
        id: 't3',
        title: 'Paket telah dikirim dari Gudang Surabaya',
        time: 'Kemarin, 20:00',
        location: 'Surabaya',
    },
    {
        id: 't4',
        title: 'Penjual telah menyerahkan paket ke kurir',
        time: 'Kemarin, 16:30',
        location: 'Surabaya',
    },
    {
        id: 't5',
        icon: 'inventory_2',
        isStart: true,
        title: 'Pesanan Dibuat',
        time: '22 Okt, 09:12',
    },
];
