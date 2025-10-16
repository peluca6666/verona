import { Category } from '@/types';
import Link from 'next/link';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const defaultImage = 'https://imgs.search.brave.com/51-1XG__jPeNRMb7YMT0hBrLoFqbrBSv1UBAWkJCGis/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2VkL2Y5/LzYzL2VkZjk2MzZm/ZGUzMDA0YzM2MGIx/ZjM4MGNiYmZkYmU2/LmpwZw';

  return (
    <Link href={`/catalog?category=${category.id}`} className="group block animate-on-scroll">
      <div className="relative h-[240px] sm:h-[400px] overflow-hidden rounded-lg sm:rounded-none transition-all duration-300 group-hover:shadow-2xl shadow-lg sm:[transform:skewX(-10deg)] group-hover:sm:-translate-y-4">
        {/* Image */}
        <img 
          src={category.image || defaultImage} 
          alt={category.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 sm:[transform:skewX(10deg)_scale(1.2)]"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 sm:[transform:skewX(10deg)]">
          <h3 
            className="text-lg sm:text-2xl font-light text-white tracking-[0.15em] mb-2 group-hover:text-amber-300 transition-colors"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {category.name.toUpperCase()}
          </h3>
          
          <div className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-amber-300 text-xs sm:text-sm font-medium tracking-wider">
              VER COLECCIÓN
            </span>
            <svg 
              className="w-4 h-4 ml-2 text-amber-300"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Shine effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 sm:[transform:skewX(10deg)_translateX(-100%)]"></div>
      </div>
    </Link>
  );
}