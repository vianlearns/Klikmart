// Seller product management data for Klikmart

import type { SellerProduct, SellerProductTab } from './types';

export const sellerProducts: SellerProduct[] = [
    {
        id: '1',
        name: 'Sepatu Sneakers Nike Air Jordan High Top Red/White Edition',
        sku: 'NK-RD-001',
        price: 2450000,
        stock: 45,
        sold: 128,
        rating: 4.8,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5cteZmgj9K5nvDfwPpN2Jx4r6z7dB54jZVT3qBP1mnYlmqQ1yD82GelqXu5OQlIGmjYP9gg3g1E3vdjT9eXi2fuD-oLPKJhtWFQ5jedCI8YE8z_gwkLg4WDL7IEtilSR3H62L_u4GYl8Cj_cClyBz0NMih0wI4LmHe4k35doXAF6v4RmEk2YUWdf2cWiydbQ19x1LLAyVUFJS2jOzQ5djiMroinF8YD2vBq1BkgxSMzTyZoJxKyypXAw70fUew8J9HKSfW-2pHMn0'
    },
    {
        id: '2',
        name: 'Jam Tangan Minimalis Putih - Strap Kulit Asli Anti Air',
        sku: 'WTC-WT-055',
        price: 899000,
        stock: 12,
        sold: 42,
        rating: 5.0,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB67AJI3LxSVpBFxlCDFuZQGuiGjo3AC_wT-OVaSGfItmOXMdr9EpAgl7yfgHhKWiemeo52-NQkh1z31jn9plIivtZVBuNFycHI31izegZvw_1aE2SNBNx277uY9YvgNS4w1wvU9Lu4HNtVCfcyIT5y-BveHAeLH5MsI3YmH_uSkjpLpXqVJJEs8Al1xj3Z5ENvAvZnZw1jNaH7Mw0PyWm50sY-zchYZq1U02MqHwWgh-_5PSfza-LPBIyOzdTSQdD1jhkx6HY-68Dl'
    },
    {
        id: '3',
        name: 'Headphone Wireless Noise Cancelling - Black Matte',
        sku: 'AU-HD-992',
        price: 3200000,
        stock: 0,
        sold: 880,
        rating: 4.7,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAt12PYz0zHnFXiKoDAwrsmWk1pLbslK7lqMTN3e2HyRoL7XXBkr_GQW3o5xHprUA9RRjhqCrKjjShHiDb9fhlKK14t9TdZdOPtJ85gquSqAT3BHaoRQzSvEXiOAxtddn2o9LqJcLjFk2TJdP12nsKANku65hfc7A9AnuVSmSkIgFJSp7B_Y69cNG14N5dtIKOQOOfzT6JiAAuE_QorUXfCH6eqJ1pYfeSj3PIA7RSyUBFGdSZf8IaJcQGKMRiNIeSqUfC1LnWiFYx',
        isOutOfStock: true
    }
];

export const sellerProductTabs: SellerProductTab[] = [
    { id: 'live', label: 'Live', count: 14 },
    { id: 'habis', label: 'Habis', count: 2 },
    { id: 'diperiksa', label: 'Diperiksa', count: 0 },
    { id: 'diarsip', label: 'Diarsip', count: 5 }
];
