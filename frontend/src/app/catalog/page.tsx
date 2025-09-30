'use client';

import { useEffect, useState } from 'react';
import { Product } from '@/types';
import { getProducts } from '@/lib/api';
import ProductCard from '@/components/ui/ProductCard';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function CatalogPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Error loading products');
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="bg-white min-h-screen">
        <Header />
        <main className="py-20">
          <div className="container mx-auto px-4 sm:px-12 text-center">
            <div className="text-gray-600 text-lg">Loading catalog...</div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white min-h-screen">
        <Header />
        <main className="py-20">
          <div className="container mx-auto px-4 sm:px-12 text-center">
            <div className="text-red-600 text-lg">{error}</div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="py-12 sm:py-20" data-scroll>
        <div className="container mx-auto px-4 sm:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <h1 
              className="text-3xl sm:text-5xl font-thin text-gray-900 tracking-[0.1em] mt-7 mb-4 sm:mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              CATALOGO COMPLETO
            </h1>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}