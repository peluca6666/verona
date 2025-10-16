import { Product } from '@/types';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const defaultImage = 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop';

  return (
    <Link href={`/product/${product.id}`} className="group block">
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-amber-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
        
        {/* primary image */}
        <div className="aspect-[4/5] relative overflow-hidden bg-gray-50">
          {product.primary_image ? (
            <img 
              src={product.primary_image} 
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              onError={(e) => {
                e.currentTarget.src = defaultImage;
              }}
            />
          ) : (
            <img 
              src={defaultImage} 
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          )}
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>     
        </div>

          {/* Info */}
        <div className="p-6">
          <div className="text-center space-y-3">
            <h3 
              className="text-lg font-light text-gray-900 tracking-[0.02em] group-hover:text-amber-700 transition-colors duration-300 line-clamp-2"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {product.name}
            </h3>
            
            {product.material && (
              <p 
                className="text-xs text-gray-500 uppercase tracking-[0.15em] font-medium"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {product.material}
              </p>
            )}

            {/* Price */}
            <div 
              className="text-xl text-gray-900 font-light tracking-wide"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              ${product.price.toLocaleString()}
            </div>
          </div>

          {/* View Details Button */}
          <div className="mt-5 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <div 
              className="w-full py-3 bg-gray-900 hover:bg-amber-600 text-white text-center text-sm font-medium tracking-[0.1em] uppercase rounded-lg transition-colors duration-300 cursor-pointer"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Ver Detalles
            </div>
          </div>

          {/* underline on hover */}
          <div className="mt-3 flex justify-center">
            <div className="w-0 group-hover:w-16 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent transition-all duration-700"></div>
          </div>
        </div>
      </div>
    </Link>
  );
}