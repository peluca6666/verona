'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Product, Category } from '@/types';
import { getProducts, getCategories } from '@/lib/api';
import ProductCard from '@/components/ui/ProductCard';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function CatalogPage() {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get('category');
  
  const [products, setProducts] = useState<Product[]>([]);
  const [categoryName, setCategoryName] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const allProducts = await getProducts();
        
        const filtered = categoryId 
          ? allProducts.filter(p => p.category_id === parseInt(categoryId))
          : allProducts;
          
        setProducts(filtered);

        if (categoryId) {
          const categories = await getCategories();
          const category = categories.find(c => c.id === parseInt(categoryId));
          setCategoryName(category?.name || '');
        }
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Error loading products');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [categoryId]);

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="bg-white min-h-screen">
        <Header />
        <main className="py-20">
          <div className="container mx-auto px-4 sm:px-12 text-center">
            <div className="text-gray-600 text-lg">Cargando catálogo...</div>
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
          <div className="text-center mb-8 sm:mb-12">
            <h1 
              className="text-3xl sm:text-5xl font-thin text-gray-900 tracking-[0.1em] mt-7 mb-4 sm:mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {categoryName ? categoryName.toUpperCase() : 'CATÁLOGO COMPLETO'}
            </h1>
            
           {/* Barra de búsqueda */}
<div className="max-w-md mx-auto mb-8">
  <input
    type="text"
    placeholder="Buscar productos..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500 transition-colors text-gray-900 placeholder-gray-500"
  />
</div>

            {filteredProducts.length > 0 && (
              <p className="text-gray-600">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'producto' : 'productos'}
              </p>
            )}
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center text-gray-500 py-12">
              {searchTerm ? 'No se encontraron productos' : 'No hay productos disponibles en esta categoría'}
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}