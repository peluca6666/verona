import React, { useEffect, useState } from 'react';
import { Category } from '@/types';
import CategoryCard from '../ui/CategoryCard';


interface CategoryGridProps {
  className?: string;
}

export default function CategoryGrid({ className = '' }: CategoryGridProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        const response = await fetch(`${apiUrl}/categories`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        const categoriesArray = data.success ? data.data : data;
        setCategories(categoriesArray);
      } catch (error) {
        console.error('Error fetching categories:', error);
        setError(error instanceof Error ? error.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <section className={`bg-white py-20 ${className}`}>
        <div className="container mx-auto px-12 text-center">
          <div className="text-gray-600 text-lg">Loading categories...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className={`bg-white py-20 ${className}`}>
        <div className="container mx-auto px-12 text-center">
          <div className="text-red-600 text-lg">Error: {error}</div>
        </div>
      </section>
    );
  }

  if (categories.length === 0) {
    return (
      <section className={`bg-white py-20 ${className}`}>
        <div className="container mx-auto px-12 text-center">
          <div className="text-gray-600 text-lg">No categories available</div>
        </div>
      </section>
    );
  }

  return (
    <section className={`bg-white py-20 ${className}`}>
      <div className="container mx-auto px-12">
        <div className="text-center mb-16">
          <h2 
            className="text-5xl font-thin text-gray-900 tracking-[0.1em] mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            NUESTRAS COLECCIONES
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-6"></div>
          <p 
            className="text-gray-600 text-lg font-light tracking-[0.05em] max-w-2xl mx-auto"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Descubre la elegancia atemporal en cada una de nuestras cuidadosamente curadas colecciones
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}