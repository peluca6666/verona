'use client';

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
      <section className={`bg-white py-12 sm:py-20 ${className}`}>
        <div className="container mx-auto px-4 sm:px-12 text-center">
          <div className="text-gray-600 text-base sm:text-lg">Cargando colecciones...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className={`bg-white py-12 sm:py-20 ${className}`}>
        <div className="container mx-auto px-4 sm:px-12 text-center">
          <div className="text-red-600 text-base sm:text-lg">Error: {error}</div>
        </div>
      </section>
    );
  }

  if (categories.length === 0) {
    return (
      <section className={`bg-white py-12 sm:py-20 ${className}`}>
        <div className="container mx-auto px-4 sm:px-12 text-center">
          <div className="text-gray-600 text-base sm:text-lg">No hay categorías disponibles</div>
        </div>
      </section>
    );
  }

  return (
    <section className={`bg-white py-12 sm:py-20 ${className}`} data-scroll>
      <div className="container mx-auto px-4 sm:px-12">
        <div className="text-center mb-12 sm:mb-16">
          <h2 
            className="text-3xl sm:text-5xl font-thin text-gray-900 tracking-[0.1em] mb-4 sm:mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            NUESTRAS COLECCIONES
          </h2>
          <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-4 sm:mb-6"></div>
          <p 
            className="text-gray-600 text-base sm:text-lg font-light tracking-[0.05em] max-w-2xl mx-auto px-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Descubre la elegancia atemporal en cada una de nuestras cuidadosamente curadas colecciones
          </p>
        </div>

        {/* responsive grid */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
  {categories.map((category, index) => (
    <div 
      key={category.id}
      style={{
        animationDelay: `${index * 0.15}s`
      }}
    >
      <CategoryCard category={category} />
    </div>
  ))}
</div>
      </div>
    </section>
  );
}