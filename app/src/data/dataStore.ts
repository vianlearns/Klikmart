// Store profile data for Klikmart

import type { StoreProfile, StoreVoucher } from './types';

export const storeProfileData: StoreProfile = {
    name: 'Gadget Murah Official',
    isVerified: true,
    location: 'Jakarta Pusat',
    isOnline: true,
    lastSeen: '5 menit lalu',
    banner: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCc5ti2VhWd92uNWdwsbNftaWvP3fv3jIwWpjAtmXxwKLMLAgcVbPRvfwB8kSHuIVIogvSARLoitpzdlH7kJapjQLj8-zpQDg9_E8CdNBy8XvLFn-m9kk5H4H6eYHhRmxnwpRrKLIIRZvC5wjtcbObmoKenKw2fGz80KAOV8c_q-Qg0a_X0qj2pcg0x5FfINyLLhBSGAbkX10yctAtR4vtPGkzHj3aVN1Inq7wEUo9XwgT-hinXsrKTAjdI5kbXUZzb8encSR9iF_EW',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMkrNFc_kTfjJIJOwtxFexc2o5Scen3MW0AFdotYWGGO7W7HEtICFBGrjieTR3vHjvnOcP_53w6cdSMDVJ1NeHaAiXDNysageHJmMOd21aoarPJf3TLqvuNYHBJ38ZHBYP7acCU2WiPiB_X8qa9z15AAmkepK8WaNAOd9LKmALTdDA1IrSXWWo5j80EyaFkk91s5CDmlxstlMXH9UC-6PKAkp4CUiqmkqZXWE3LaP6l-veT_wQUH7JHTjxgzay60qUhO1dryBjneLt',
    followers: '12.5k',
    rating: 4.9,
    chatResponse: '98%',
    description: 'Toko gadget terpercaya sejak 2018. Menjual berbagai macam smartphone, aksesoris, dan laptop original bergaransi resmi. Pengiriman cepat dari Jakarta.'
};

export const storeVouchers: StoreVoucher[] = [
    {
        id: 'v1',
        title: 'Diskon 10%',
        minPurchase: 'Rp50rb',
        expiry: 'Berakhir besok'
    },
    {
        id: 'v2',
        title: 'Potongan 5rb',
        minPurchase: 'Rp30rb',
        expiry: 'Berakhir 3 hari lagi'
    }
];
