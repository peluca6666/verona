'use client';

import { useEffect, useState } from 'react';
import { Product } from '@/types';
import ProductCard from '../ui/ProductCard';
import { getProducts } from '@/lib/api';
import CatalogButton from '../ui/CatalogButton';

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const allProducts = await getProducts();
        const latestProducts = allProducts
          .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
          .slice(0, 6);
        setProducts(latestProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section className="bg-gray-50 py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-12 text-center">
          <div className="text-gray-600 text-base sm:text-lg">Cargando productos...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-50 py-12 sm:py-20">
      
      <div className="container mx-auto px-4 sm:px-12">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className="text-3xl sm:text-5xl font-thin text-gray-900 tracking-[0.1em] mb-4 mt-5 sm:mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            PRODUCTOS DESTACADOS
          </h2>
          <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-4 sm:mb-6"></div>
          <p
            className="text-gray-600 text-base sm:text-lg font-light tracking-[0.05em] max-w-2xl mx-auto px-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Descubre las últimas creaciones de nuestra colección más exclusiva
          </p>
        </div>

        {/* grid with products */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="animate-on-scroll"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <CatalogButton className="mt-12 sm:mt-16" />
      </div>
    </section>
  );
}