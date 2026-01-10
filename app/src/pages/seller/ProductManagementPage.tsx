import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../../components/common/Icon';
import { MobileContainer } from '../../components/layout/MobileContainer';

interface Product {
    id: string;
    name: string;
    sku: string;
    price: number;
    stock: number;
    sold: number;
    rating: number;
    image: string;
    isOutOfStock?: boolean;
}

const initialProducts: Product[] = [
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

const tabs = [
    { id: 'live', label: 'Live', count: 14 },
    { id: 'habis', label: 'Habis', count: 2 },
    { id: 'diperiksa', label: 'Diperiksa', count: 0 },
    { id: 'diarsip', label: 'Diarsip', count: 5 }
];

export function ProductManagementPage() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('live');
    const [searchQuery, setSearchQuery] = useState('');
    const [products, setProducts] = useState(initialProducts);
    const [editingProduct, setEditingProduct] = useState<string | null>(null);
    const [showStockModal, setShowStockModal] = useState<string | null>(null);
    const [stockValue, setStockValue] = useState(0);

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(price);
    };

    const filteredProducts = products.filter(p => {
        const matchesTab = activeTab === 'habis' ? p.isOutOfStock : activeTab === 'live' ? !p.isOutOfStock : true;
        const matchesSearch = searchQuery === '' ||
            p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.sku.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesTab && matchesSearch;
    });

    const handleDeleteProduct = (id: string) => {
        setProducts(prev => prev.filter(p => p.id !== id));
    };

    const handleUpdateStock = (id: string) => {
        setProducts(prev => prev.map(p =>
            p.id === id ? { ...p, stock: stockValue, isOutOfStock: stockValue === 0 } : p
        ));
        setShowStockModal(null);
        setStockValue(0);
    };

    const handleBoostProduct = (id: string) => {
        const product = products.find(p => p.id === id);
        if (product) {
            navigate(`/seller/ads?product=${id}`);
        }
    };

    const handleEditProduct = (id: string) => {
        setEditingProduct(editingProduct === id ? null : id);
    };

    const openStockModal = (product: Product) => {
        setShowStockModal(product.id);
        setStockValue(product.stock);
    };

    return (
        <MobileContainer className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col">
            {/* Header Section */}
            <header className="bg-surface-light dark:bg-surface-dark sticky top-0 z-50 shadow-sm transition-colors duration-200">
                {/* Top Bar */}
                <div className="flex items-center justify-between p-4 pb-2 max-w-6xl mx-auto w-full">
                    <button
                        onClick={() => navigate('/seller-center')}
                        className="flex size-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-text-main dark:text-white"
                    >
                        <Icon name="arrow_back" size={24} />
                    </button>
                    <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center text-text-main dark:text-white">
                        Produk Saya
                    </h2>
                    <div className="flex gap-2">
                        <button
                            onClick={() => navigate('/seller/orders')}
                            className="flex size-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-text-main dark:text-white"
                        >
                            <Icon name="tune" size={24} />
                        </button>
                        <button
                            onClick={() => navigate('/chat')}
                            className="flex size-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-text-main dark:text-white"
                        >
                            <Icon name="chat_bubble" size={24} />
                        </button>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="px-4 py-2 pb-4 max-w-6xl mx-auto w-full">
                    <div className="relative flex w-full items-center rounded-lg bg-[#f5f2f0] dark:bg-[#3A2C22] h-10 overflow-hidden group focus-within:ring-2 focus-within:ring-primary/50 transition-all md:max-w-md">
                        <div className="flex items-center justify-center pl-3 text-text-secondary dark:text-white/50">
                            <Icon name="search" size={20} />
                        </div>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="flex w-full min-w-0 flex-1 resize-none bg-transparent border-none px-3 text-sm font-medium text-text-main dark:text-white placeholder:text-text-secondary dark:placeholder:text-white/40 focus:outline-none focus:ring-0"
                            placeholder="Cari SKU atau nama produk..."
                        />
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex overflow-x-auto hide-scrollbar border-b border-[#e6e0db] dark:border-white/10 px-4 gap-6 max-w-6xl mx-auto w-full">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex flex-col items-center justify-center border-b-[3px] pb-3 pt-1 shrink-0 px-1 transition-colors ${activeTab === tab.id
                                ? 'border-primary text-primary'
                                : 'border-transparent text-text-secondary dark:text-white/60 hover:text-text-main dark:hover:text-white'
                                }`}
                        >
                            <p className="text-sm font-bold leading-normal tracking-[0.015em]">
                                {tab.label} ({tab.count})
                            </p>
                        </button>
                    ))}
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto pb-24">
                <div className="max-w-6xl mx-auto w-full">
                    {/* Quick Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4">
                        <div className="flex flex-col justify-between gap-1 rounded-xl p-4 bg-surface-light dark:bg-surface-dark border border-[#e6e0db] dark:border-white/5 shadow-sm">
                            <div className="flex items-center gap-2 text-primary">
                                <Icon name="inventory_2" size={20} />
                                <p className="text-xs font-bold uppercase tracking-wider">Total</p>
                            </div>
                            <p className="text-2xl font-bold leading-tight text-text-main dark:text-white">{products.length}</p>
                            <p className="text-xs text-text-secondary dark:text-white/50">Produk tersimpan</p>
                        </div>
                        <div className="flex flex-col justify-between gap-1 rounded-xl p-4 bg-surface-light dark:bg-surface-dark border border-[#e6e0db] dark:border-white/5 shadow-sm">
                            <div className="flex items-center gap-2 text-red-500">
                                <Icon name="production_quantity_limits" size={20} />
                                <p className="text-xs font-bold uppercase tracking-wider">Habis</p>
                            </div>
                            <p className="text-2xl font-bold leading-tight text-text-main dark:text-white">{products.filter(p => p.isOutOfStock).length}</p>
                            <p className="text-xs text-text-secondary dark:text-white/50">Perlu restock</p>
                        </div>
                        <div className="flex flex-col justify-between gap-1 rounded-xl p-4 bg-surface-light dark:bg-surface-dark border border-[#e6e0db] dark:border-white/5 shadow-sm">
                            <div className="flex items-center gap-2 text-green-600">
                                <Icon name="local_shipping" size={20} />
                                <p className="text-xs font-bold uppercase tracking-wider">Siap</p>
                            </div>
                            <p className="text-2xl font-bold leading-tight text-text-main dark:text-white">5</p>
                            <p className="text-xs text-text-secondary dark:text-white/50">Pesanan baru</p>
                        </div>
                    </div>

                    {/* Product List - Grid on desktop */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 pb-4">
                        {filteredProducts.map((product) => (
                            <div
                                key={product.id}
                                className={`flex flex-col rounded-xl bg-surface-light dark:bg-surface-dark shadow-[0_1px_3px_rgba(0,0,0,0.1)] border border-transparent dark:border-white/5 overflow-hidden ${product.isOutOfStock ? 'opacity-90' : ''}`}
                            >
                                {product.isOutOfStock && (
                                    <div className="absolute top-3 left-3 z-10 bg-gray-900/80 text-white text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur-sm">
                                        STOK HABIS
                                    </div>
                                )}
                                <div className="flex p-3 gap-3 relative">
                                    <div
                                        className={`w-24 h-24 shrink-0 rounded-lg bg-gray-100 dark:bg-white/5 bg-center bg-cover border border-gray-100 dark:border-white/5 ${product.isOutOfStock ? 'grayscale' : ''}`}
                                        style={{ backgroundImage: `url('${product.image}')` }}
                                    />
                                    <div className="flex flex-col flex-1 justify-between py-0.5">
                                        <div>
                                            <h3 className={`text-sm font-bold leading-snug line-clamp-2 ${product.isOutOfStock ? 'text-text-secondary dark:text-white/60' : 'text-text-main dark:text-white'}`}>
                                                {product.name}
                                            </h3>
                                            <p className="text-xs text-text-secondary dark:text-white/50 mt-1">
                                                SKU: {product.sku}
                                            </p>
                                        </div>
                                        <div className="flex items-end justify-between mt-2">
                                            <p className={`text-base font-bold ${product.isOutOfStock ? 'text-text-secondary dark:text-white/60' : 'text-primary'}`}>
                                                {formatPrice(product.price)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-3 pb-3 flex items-center justify-between text-xs text-text-secondary dark:text-white/60 border-b border-gray-100 dark:border-white/5 mb-2">
                                    <div className="flex gap-4">
                                        <span className={`flex items-center gap-1 ${product.isOutOfStock ? 'text-red-500 font-bold' : ''}`}>
                                            <Icon name={product.isOutOfStock ? 'inventory_2' : 'inventory'} size={14} />
                                            Stok: {product.stock}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Icon name="shopping_bag" size={14} />
                                            Terjual: {product.sold}
                                        </span>
                                    </div>
                                    <span className="flex items-center gap-1 text-text-main dark:text-white font-medium">
                                        <Icon name="star" size={14} className={product.isOutOfStock ? 'text-gray-400' : 'text-yellow-500'} filled />
                                        {product.rating}
                                    </span>
                                </div>
                                <div className="flex items-center justify-end px-3 pb-3 gap-2">
                                    {product.isOutOfStock ? (
                                        <>
                                            <button
                                                onClick={() => handleDeleteProduct(product.id)}
                                                className="flex items-center justify-center px-3 py-1.5 rounded-lg border border-gray-200 dark:border-white/10 text-xs font-bold text-text-main dark:text-white bg-transparent hover:bg-red-50 dark:hover:bg-red-900/20 hover:border-red-300 hover:text-red-600 transition-colors"
                                            >
                                                Hapus
                                            </button>
                                            <button
                                                onClick={() => openStockModal(product)}
                                                className="flex items-center justify-center px-4 py-1.5 rounded-lg bg-surface-light dark:bg-white/10 border border-primary text-primary hover:bg-primary/5 text-xs font-bold transition-colors gap-1 flex-1"
                                            >
                                                <Icon name="inventory" size={16} />
                                                Atur Stok
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <button
                                                onClick={() => handleEditProduct(product.id)}
                                                className="flex items-center justify-center px-3 py-1.5 rounded-lg border border-gray-200 dark:border-white/10 text-xs font-bold text-text-main dark:text-white bg-transparent hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                                            >
                                                Lainnya
                                            </button>
                                            <button
                                                onClick={() => handleBoostProduct(product.id)}
                                                className="flex items-center justify-center px-4 py-1.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-xs font-bold transition-colors gap-1"
                                            >
                                                <Icon name="trending_up" size={16} />
                                                Naikkan
                                            </button>
                                            <button
                                                onClick={() => openStockModal(product)}
                                                className="flex items-center justify-center px-4 py-1.5 rounded-lg bg-primary text-white hover:bg-primary/90 text-xs font-bold transition-colors gap-1 shadow-sm shadow-primary/30"
                                            >
                                                <Icon name="edit" size={16} />
                                                Ubah
                                            </button>
                                        </>
                                    )}
                                </div>

                                {/* Expanded edit section */}
                                {editingProduct === product.id && (
                                    <div className="px-3 pb-3 border-t border-gray-100 dark:border-white/5 pt-3 space-y-2">
                                        <button
                                            onClick={() => openStockModal(product)}
                                            className="w-full flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 text-sm text-text-main dark:text-white"
                                        >
                                            <Icon name="inventory" size={18} />
                                            Atur Stok
                                        </button>
                                        <button
                                            onClick={() => navigate(`/seller/statistics`)}
                                            className="w-full flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 text-sm text-text-main dark:text-white"
                                        >
                                            <Icon name="bar_chart" size={18} />
                                            Lihat Statistik
                                        </button>
                                        <button
                                            onClick={() => handleDeleteProduct(product.id)}
                                            className="w-full flex items-center gap-2 p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 text-sm text-red-600"
                                        >
                                            <Icon name="delete" size={18} />
                                            Hapus Produk
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            {/* Stock Modal */}
            {showStockModal && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 w-full max-w-sm shadow-2xl">
                        <h3 className="text-lg font-bold text-text-main dark:text-white mb-4">Atur Stok Produk</h3>
                        <div className="mb-4">
                            <label className="text-sm text-text-secondary dark:text-gray-400 mb-2 block">Jumlah Stok</label>
                            <input
                                type="number"
                                value={stockValue}
                                onChange={(e) => setStockValue(parseInt(e.target.value) || 0)}
                                className="w-full h-12 px-4 rounded-lg border border-gray-200 dark:border-white/10 bg-transparent text-text-main dark:text-white focus:ring-2 focus:ring-primary/50 focus:border-primary"
                                min="0"
                            />
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={() => setShowStockModal(null)}
                                className="flex-1 h-12 rounded-xl border border-gray-200 dark:border-white/10 text-text-main dark:text-white font-bold hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                            >
                                Batal
                            </button>
                            <button
                                onClick={() => handleUpdateStock(showStockModal)}
                                className="flex-1 h-12 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                            >
                                Simpan
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Floating Action Button */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background-light dark:from-background-dark via-background-light dark:via-background-dark to-transparent pt-8 flex justify-center pointer-events-none">
                <div className="w-full max-w-6xl">
                    <button
                        onClick={() => navigate('/seller/products')}
                        className="pointer-events-auto flex items-center justify-center w-full md:w-auto md:px-8 h-12 bg-primary text-white rounded-xl shadow-lg shadow-primary/40 active:scale-95 transition-all text-base font-bold gap-2 md:ml-auto"
                    >
                        <Icon name="add" size={24} />
                        Tambah Produk Baru
                    </button>
                </div>
            </div>
        </MobileContainer>
    );
}
