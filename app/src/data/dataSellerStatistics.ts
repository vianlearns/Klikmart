// Seller statistics data for Klikmart

import type { TopProduct, PeriodOption } from './types';

export const topProducts: TopProduct[] = [
    {
        id: '1',
        rank: 1,
        name: 'Nike Air Jordan Red',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpIBdKBzdhdPyuZx6oNmLC9ypYQgfx2rqqaxQweVRX4p69jAa2CiJEnijoWbk33PAlExhT3qrqLp00IL-hNSjijYLq976Sfeqx9gJwCDUpd6RSfTTvGtRN-6gU5d-sEvGdueIU2B-q8ptEXyru382sKqm4kuYExjt3_H9tlotfO3xhNkplIsEMM-IFrvra_r9u1CfMk940hblLSEA2oSCMqtA5_LIPSe_Q1FlK319dszTRgtZYmPd_k5oLWasQrsXZmCqhdNuUbMvu',
        sold: 42,
        revenue: 12500000
    },
    {
        id: '2',
        rank: 2,
        name: 'Minimalist Watch Series 5',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3ws1fjv3d4oNyLmrMBaIQd6lcLC7mCTmTn-xkVjIuM6eb_mRpqa_ImVsVxilLWy2EVjHjQajCD1CmhDWG-XMGvINDiFD34jdCPSM86X2Ymov1ziNFhJ6dV8qIOmH_nrtZIHufnGYyREiHH_sWlCaZJ9mlKaywPHVv5CLUue-Ef82SllZUk1h16_PBq28mKEeJD6B6RognoRxGDnlriccaZDlWsGq8kohS8b3WrlbIL8JkN34N6Ihe21eKtvQBnx80ZGrMJJQiiJh8',
        sold: 28,
        revenue: 8200000
    },
    {
        id: '3',
        rank: 3,
        name: 'Sony WH-1000XM4 Noise Canceling',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsIcajcs10RwQEAh8zrEUAM4fFQBtZEDb8BGbCX3iHiaivTTURP3xMJMrgbCG43D8EX0JBoX06yxC6Xs_7VFw7YKg0y1DyFDqLNpcIiuqf39BQAWJg4qA1v5IhU_72KTxFID0-uyg7iZ0D2JR6FOqtmaoSN68fWtv1AnFnrgqPBIfULAtMi1_vVS2ow2ptC5v2JaO9sLK8zWJt-1RMU8AkGLKFLsw9kOGevkPtpcQ1b9qm3CNZ2teUoFnFUK-aD7vOf-hSbuPjjn7t',
        sold: 15,
        revenue: 4500000
    }
];

export const periodOptions: PeriodOption[] = [
    { id: 'today', label: 'Hari Ini' },
    { id: '7days', label: '7 Hari Terakhir' },
    { id: '30days', label: '30 Hari' }
];
