import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Icon } from '../common/Icon';

interface ProductCardProps {
    id: string;
    name: string;
    image: string;
    price: number;
    originalPrice?: number;
    rating: number;
    reviews: string;
    location?: string;
    badge?: string;
    discount?: number;
}

// Fungsi untuk mengubah nama produk menjadi slug URL
function createProductSlug(name: string): string {
    return name
        .toLowerCase()
        .replace(/[^a-zA-Z0-9\s-]/g, '') // Hapus karakter spesial
        .replace(/\s+/g, '-') // Ganti spasi dengan dash
        .replace(/-+/g, '-') // Hapus dash ganda
        .trim();
}

export function ProductCard({
    name,
    image,
    price,
    originalPrice,
    rating,
    reviews,
    location,
    badge,
    discount
}: ProductCardProps) {
    const productSlug = createProductSlug(name);
    const [isWishlisted, setIsWishlisted] = useState(false);

    return (
        <Link to={`/product/${productSlug}`} className="group bg-white dark:bg-[#2c241d] rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-200">
            <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden">
                {badge && (
                    <div className={`absolute top-2 left-2 z-10 text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm ${badge === 'Mall' ? 'bg-primary' :
                            badge === 'Star+' ? 'bg-[#d0011b]' :
                                'bg-[#d0011b]'
                        }`}>
                        {badge}
                    </div>
                )}
                <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                    style={{ backgroundImage: `url('${image}')` }}
                />
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        setIsWishlisted(!isWishlisted);
                    }}
                    className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-gray-500 hover:text-red-500 transition-colors z-10"
                >
                    <Icon
                        name="favorite"
                        size={18}
                        filled={isWishlisted}
                        className={isWishlisted ? 'text-red-500' : ''}
                    />
                </button>
            </div>
            <div className="p-3 flex flex-col flex-1">
                <h3 className="text-sm font-medium text-gray-800 dark:text-gray-100 line-clamp-2 leading-snug mb-1">
                    {name}
                </h3>
                <div className="flex items-center gap-1 mb-2">
                    <Icon name="star" className="text-yellow-400" size={14} filled />
                    <span className="text-xs text-gray-500">{rating} ({reviews})</span>
                </div>
                <div className="mt-auto flex items-end justify-between">
                    <div className="flex flex-col">
                        {discount && originalPrice ? (
                            <div className="flex items-center gap-1">
                                <span className="bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 text-[10px] font-bold px-1 rounded">
                                    {discount}%
                                </span>
                                <span className="text-xs text-gray-400 line-through">
                                    Rp {originalPrice.toLocaleString('id-ID')}
                                </span>
                            </div>
                        ) : originalPrice ? (
                            <p className="text-xs text-gray-400 line-through">
                                Rp {originalPrice.toLocaleString('id-ID')}
                            </p>
                        ) : null}
                        <p className="text-lg font-bold text-primary">
                            Rp {price.toLocaleString('id-ID')}
                        </p>
                    </div>
                    <button className="bg-primary text-white p-1.5 rounded-lg hover:bg-orange-600 transition-colors">
                        <Icon name="add_shopping_cart" size={18} />
                    </button>
                </div>
                {location && (
                    <div className="mt-1 flex items-center gap-1 text-gray-500">
                        <p className="text-[10px]">{location}</p>
                    </div>
                )}
            </div>
        </Link>
    );
}
