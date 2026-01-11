// Seller order management data for Klikmart

import type { SellerOrder, SellerOrderTab } from './types';

export const sellerOrders: SellerOrder[] = [
    {
        id: 'ORD-001',
        buyerName: 'Budi Santoso',
        buyerAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBlmB04kjPMd_04sL9vgQVMLGZczf07vAwzfhmLIcjGJ5DdiTNM2VRH6gKWZy987IZ2fBuqjqZnJbLggqwPwSR7_FDP9Xtlrn4OU2xVs-yWA1m051j9iI5OlB0pMG3J-4FptKDenBXNS2bzh4cIVteWxkPT9jeIUGogZTF5mUGiDJ-9lYO9hUjgX2XjV-vXzbDQxqu-VgJuK3Jv0z8T2U1QrJm_aTmEJO4WFoM52DuHG6AYFFfyDCZVsPNxX48Varc1hs4DVX6xS6U',
        status: 'pending',
        statusLabel: 'Pesanan Baru',
        items: [
            {
                name: 'Kaos Polos Cotton Combed 30s Premium Quality - Hitam',
                variant: 'Hitam, Size L',
                quantity: 1,
                price: 45000,
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC62DAUQkNEd0PauAXAYH0XIxbmjnarOCuPxG8XhokMQXy6lijvyiGSbdWivcgJBiwvLrEf1XQQJIQytXU-gCsO8tRc0eDbHaoAOx1xwtRGE-uvRtRzxdhaJIPMB1sRa_VrDoahJI98alzuWZ-ymgJEcFZ2Jg7w24W8-mlRtIEB8vKbLvEmOW2YZShUGiq-P1KNp9Cjqgd7e6uQI3ukhzfVPKywegVA-V7LExqsx8K_ozJHg4YmTLJxTF4ueDIU9XNNg3evkrqiOm1C'
            }
        ],
        totalAmount: 57000,
        courier: 'J&T Express',
        courierType: 'Hemat',
        deadline: '24 Okt 2023',
        isUrgent: true,
        isCOD: true
    },
    {
        id: 'ORD-002',
        buyerName: 'Siti Aminah',
        buyerAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9aQWbKSKlqZ5yedn2aF4CGD2MsUmyhN4lT1lryx-9tPk8k6Ej_C6mxKV9nfz_lo5ziVdKlCwJjVW1cxFvb6h0HrZ1YPWjfc0EMFzj-FmiHfwkanwkdVfjsr9MNFRGSmBxyzSUr-966QbQSBQPSFUXhesdwT6hX8NJOCFd6xSJCNJYpVqPvh5wMs_xqBqvAWRO7yxlGsaPmSgrkSTireSCDS8hzdvjkE6TX_34Gm6djfVeVSpoOFqJbIzhD9Y6x28Tx_NzlfaBQBUl',
        status: 'ready',
        statusLabel: 'Siap Kirim',
        items: [
            {
                name: 'Sepatu Sneakers Wanita Casual Putih',
                variant: 'Putih, 38',
                quantity: 1,
                price: 125000,
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBW3o3RDXPtNgHxUGXgryvfQy636MDkSNA1x6gTWmnOjgVYl07IbIaUzmA3ipUnYaTgEZGgFPN6fI_WnYAOM_tMsLvsP0mP20ECXx_Kzgx85ey-S7G881xUrxR8eq-8g3MlFAOgpRGifLhkrmBrlgM7gl4-_qT9mkzZ_x39gC2FnZm5kDvDFSWchC9lLG-Dc5JtMFRjBbkQNPrCkkxQI7cbcj06kW6kDrBP_e4d7XACV2R2kY2xCE9aP3K3hnMOoYxgaDAJwBTg6Y4O'
            },
            {
                name: 'Kaos Kaki Polos Mata Kaki (3 Pasang)',
                variant: 'Mix Warna',
                quantity: 1,
                price: 25000,
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_fOWjXopchBGgcpcUhJdexH5Aiufh7Xgg2fXW4G4z7sQ4LyEv8kDmg-6OreuhWSjzkjf7jDkOSuZjvVFbwk9FIYo2R4R6SNmbXlcn13GGcN3C25b9Iy0vtHaeIvMUmI_y3Hv3wGSiUs87zQRECJd700r5CH-ayFnOvqycAGwmHO9aINqM9PF50ZNKhpSrGRX98L02D275DCyH3qOZ0TyPUAevE7S1KDbvvWTI111w2SvJapxDwf74ec1cqqmqrSnCZcT0R4VtW8nR'
            }
        ],
        totalAmount: 162000,
        courier: 'SiCepat',
        courierType: 'Reguler',
        deadline: '25 Okt 2023',
        isUrgent: true
    },
    {
        id: 'ORD-003',
        buyerName: 'Agus Setiawan',
        buyerAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUjzPG9Vw2U0TNxb4GWg5u3Ghd-8oPQ2aeX2cXXvKPSnT9GrYAJNrnyr4D_v58dEM6oru6fxK8pnzZihgjWiJo2CM9qtLJeL65ovLDTG13TJqUuKQ3RX3dpeTpYKsbt6f8WrxnZHPv0LnYSlxUe_EcrVbH2McwCLx9NdA0WTjLyqznyIbUlCG-n-x04Lem1aowmGApvm4404YUo1mfOGhoIomq8N1MQaiv7jIrEY12b7R2qWrl9RRYVOyE1_w1ebpnslYiMdmq_t4M',
        status: 'shipped',
        statusLabel: 'Dalam Pengiriman',
        items: [
            {
                name: 'Powerbank 10000mAh Fast Charging - Hitam',
                variant: 'Hitam',
                quantity: 1,
                price: 150000,
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmr-DjUKJjlFVC_mNQpVthmRUjXp1UbtvvwLe2JH5DzzBqIy8MnIHBf_AbIxscOu4jpP_7-ZfWd9qcGLvA48H7ozPUBLXt8N9W0q_qCll7b9bLB9kE8pMPU8FIcRrWStY0QoKnnACirYzQxFJOOcnR0X9P6uIM7NuE8eBEUrAFWGHZjkDjXLZR3KTH2gKmJQhry_XNj3vZq3BJek6_FE_doB-bsLbOWdLrc-BvpFfWMqvLP21gnshet5KNCto-fdOQUObQTadaouZ1'
            }
        ],
        totalAmount: 158000,
        courier: 'SPX Standard',
        courierType: 'Standard',
        deadline: '26 Okt 2023',
        trackingNumber: 'SPX123456789'
    },
    {
        id: 'ORD-004',
        buyerName: 'Dewi Lestari',
        buyerAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgrm18X7w-qe6tsws2pps1svph6sYsu07KljxmmLiqU5_u_Dqax51df3OBAWeJSEDIZoGBDSWGpSC6E4dXQmy1HxUhFXDPYALbqOoktewgKXOIITtFS9M-OvlG_G0i1rdOhGscpmaip0a-AbybjfaCs2XLl2XbXLpTBKDqw_uevKYys1xuVbMuzFvCNR_-iuvsijdovWGhaKfdeein-46zlzPXyfDV7PeQLCPvA_gtQOPaPfD6doVw7VKV6SejyxU1e3crgF8EEb0J',
        status: 'completed',
        statusLabel: 'Selesai',
        items: [
            {
                name: 'Serum Wajah Glowing Brightening 30ml',
                variant: '30ml',
                quantity: 2,
                price: 180000,
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDXAQnBOMCrmX56bCqCGuvCz_c158NMWtr9WhgO6iyQq8nnSdAyUe2yIJZAk87Bilsh2I-sVMAZC37KUtxKoj-ss8vzNGaQjLn2UP42zjQo0PYu2MMy7KJ9o-BCspXsSbDcF7kfUi9kP_dOQjq1CtUOwQnpYd3M5_jWNuKjai9lOSyhXkRAhnkLem_rOWRQrTP5D_UlBKmEflZtoK-cPctb3ra9aqoANOIu2pYM3N7ztodW7xCprDENOt3hfkeFZs8PAYYQsW94BO0'
            }
        ],
        totalAmount: 365000,
        courier: 'SiCepat',
        courierType: 'HALU',
        deadline: '16 Des 2023',
        trackingNumber: 'SC987654321'
    }
];

export const sellerOrderTabs: SellerOrderTab[] = [
    { id: 'all', label: 'Semua', count: 4 },
    { id: 'pending', label: 'Pesanan Baru', count: 1 },
    { id: 'ready', label: 'Siap Kirim', count: 1 },
    { id: 'shipped', label: 'Dikirim', count: 1 },
    { id: 'completed', label: 'Selesai', count: 1 },
    { id: 'cancelled', label: 'Dibatalkan', count: 0 },
    { id: 'returned', label: 'Retur', count: 0 }
];

export const courierFilters = ['Semua', 'J&T Express', 'SiCepat', 'SPX Standard'];
