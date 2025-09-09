import { Category } from '@/types';
import Link from 'next/link';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const defaultImage = 'https://imgs.search.brave.com/51-1XG__jPeNRMb7YMT0hBrLoFqbrBSv1UBAWkJCGis/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2VkL2Y5/LzYzL2VkZjk2MzZm/ZGUzMDA0YzM2MGIx/ZjM4MGNiYmZkYmU2/LmpwZw';

  return (
    <Link href={`/categoria/${category.id}`} className="group block">
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
        <div className="aspect-[4/5] relative overflow-hidden">
          <img 
            src={category.image || defaultImage} 
            alt={category.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
          
          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 
              className="text-lg font-light text-white tracking-[0.15em] mb-2 group-hover:text-amber-200 transition-colors duration-300"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {category.name.toUpperCase()}
            </h3>
            
            <div className="flex items-center">
              <span className="text-amber-200/90 text-xs font-medium tracking-[0.1em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Explorar
              </span>
              
              {/* Improved expanding line */}
              <div className="ml-2 w-0 group-hover:w-12 h-px bg-gradient-to-r from-amber-300/80 via-amber-200 to-transparent transition-all duration-700 ease-out"></div>
            </div>
          </div>

          {/* Subtle shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </div>
      </div>
    </Link>
  );
}