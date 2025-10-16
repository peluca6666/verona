'use client';

export const dynamic = 'force-dynamic';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Product} from '@/types';
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
  const [materialFilter, setMaterialFilter] = useState('');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
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

  // Get unique materials - filters null and undefined
  const materials = Array.from(
    new Set(
      products
        .map(p => p.material)
        .filter((material): material is string => Boolean(material))
    )
  );

  // Filter products
  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesMaterial = !materialFilter || p.material === materialFilter;
    const matchesPrice =
      (!priceRange.min || p.price >= parseFloat(priceRange.min)) &&
      (!priceRange.max || p.price <= parseFloat(priceRange.max));

    return matchesSearch && matchesMaterial && matchesPrice;
  });

  const clearFilters = () => {
    setSearchTerm('');
    setMaterialFilter('');
    setPriceRange({ min: '', max: '' });
  };

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
      <main className="py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-12">
          <div className="text-center mb-8 sm:mb-12">
            <h1
              className="text-3xl sm:text-5xl font-thin text-gray-900 tracking-[0.1em] mt-7 mb-4 sm:mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {categoryName ? categoryName.toUpperCase() : 'CATÁLOGO COMPLETO'}
            </h1>

            {/* Filters */}
            <div className="max-w-4xl mx-auto mb-8 space-y-4">
              {/* Search */}
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-amber-500 transition-colors text-gray-900 placeholder-gray-500"
              />

              {/* Material & Price Filters */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Material Filter */}
                <select
                  value={materialFilter}
                  onChange={(e) => setMaterialFilter(e.target.value)}
                  className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-amber-500 text-gray-900 bg-white"
                >
                  <option value="">Todos los materiales</option>
                  {materials.map((material) => (
                    <option key={material} value={material}>
                      {material}
                    </option>
                  ))}
                </select>

                {/* Price Min */}
                <input
                  type="number"
                  placeholder="Precio mínimo"
                  value={priceRange.min}
                  onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
                  className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-amber-500 text-gray-900 placeholder-gray-500"
                />

                {/* Price Max */}
                <input
                  type="number"
                  placeholder="Precio máximo"
                  value={priceRange.max}
                  onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
                  className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-amber-500 text-gray-900 placeholder-gray-500"
                />
              </div>

              {/* Clear Filters Button */}
              {(searchTerm || materialFilter || priceRange.min || priceRange.max) && (
                <button
                  onClick={clearFilters}
                  className="text-amber-600 hover:text-amber-700 font-medium text-sm transition-colors"
                >
                  Limpiar filtros
                </button>
              )}
            </div>

            {filteredProducts.length > 0 && (
              <p className="text-gray-600">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'producto' : 'productos'}
              </p>
            )}
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center text-gray-500 py-12">
              {searchTerm || materialFilter || priceRange.min || priceRange.max
                ? 'No se encontraron productos con estos filtros'
                : 'No hay productos disponibles en esta categoría'}
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-on-scroll"
                  style={{
                    animationDelay: `${index * 0.05}s`
                  }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}