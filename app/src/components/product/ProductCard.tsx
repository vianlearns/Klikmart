import { Link } from 'react-router-dom';
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
    reviews
}: ProductCardProps) {
    const productSlug = createProductSlug(name);
    
    return (
        <Link to={`/product/${productSlug}`} className="group bg-white dark:bg-[#2c241d] rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-200">
            <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden">
                <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                    style={{ backgroundImage: `url('${image}')` }}
                />
                <button className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 backdrop-blur-sm text-gray-500 hover:text-red-500 transition-colors">
                    <Icon name="favorite" size={18} />
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
                    <div>
                        {originalPrice && (
                            <p className="text-xs text-gray-400 line-through">
                                Rp {originalPrice.toLocaleString('id-ID')}
                            </p>
                        )}
                        <p className="text-lg font-bold text-primary">
                            Rp {price.toLocaleString('id-ID')}
                        </p>
                    </div>
                    <button className="bg-primary text-white p-1.5 rounded-lg hover:bg-orange-600 transition-colors">
                        <Icon name="add_shopping_cart" size={18} />
                    </button>
                </div>
            </div>
        </Link>
    );
}
