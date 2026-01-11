// User data for Klikmart

import type { UserProfile, UserAddress } from './types';

// User Profile Data
export const userProfile: UserProfile = {
    name: 'Vivian Prabaswara',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5atNOjAdxSfK-nr_TMIsvJCB6aFOr5plhe0Gg_u2IFrN3baKgl7WPM-J4kq_eLD7s8rINFj1ZXdFxBOJXsHd3F9wUkxMjl_HFWSzdztiH6uj2Db0wTr5PBeRIG2m-QdJmWIWdw179-bQ_4h91ikDOY6kG8ycrQC80tFaYIqbDuTeCf4k9J7lbfK07HyurKS-Kw7bhJF210oj2eXUJsBoTTeZ6gOfn_8f8r2jvok4LGouIwQ8v6oznuFlpWj-etWll_4y3fUrcLp9m',
    membershipLevel: 'Platinum Member',
    followers: 12,
    following: 10,
    wallet: {
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

// User Addresses
export const userAddresses: UserAddress[] = [
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
