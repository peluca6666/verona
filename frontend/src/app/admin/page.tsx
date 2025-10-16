'use client';

import { useEffect, useState } from 'react';
import { Product } from '@/types';
import { getProductsForAdmin, createProduct, updateProduct } from '@/lib/api';
import toast from 'react-hot-toast';
import ProductForm from '@/components/admin/ProductForm';

export default function AdminPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await getProductsForAdmin();
      setProducts(response.data);
    } catch (err) {
      toast.error('Error loading products');
    } finally {
      setLoading(false);
    }
  }

  async function handleToggleActive(product: Product) {
    try {
      await updateProduct(product.id, { is_active: !product.is_active });
      toast.success(product.is_active ? 'Deactivated' : 'Activated');
      fetchProducts();
    } catch (err) {
      toast.error('Error updating product');
    }
  }

  async function handleSaveProduct(data: any) {
    try {
      if (editingProduct) {
        await updateProduct(editingProduct.id, data);
      } else {
        await createProduct(data);
      }
      setShowForm(false);
      setEditingProduct(null);
      fetchProducts();
    } catch (err) {
      throw err;
    }
  }

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    (p.material && p.material.toLowerCase().includes(search.toLowerCase()))
  );

  if (loading) {
    return <div className="text-center py-20 text-lg text-gray-600">Loading...</div>;
  }

  return (
    <div className="max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-4xl font-light text-gray-900 mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
            Products
          </h1>
          <p className="text-lg text-gray-600">{filtered.length} products</p>
        </div>
        <button
          onClick={() => { setEditingProduct(null); setShowForm(true); }}
          className="group relative inline-block px-16 py-5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white font-medium tracking-[0.15em] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden"
        >
          + New Product
        </button>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by name or material..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-5 py-3.5 mb-8 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 text-base transition"
      />

      {/* Products Grid */}
      {filtered.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <div key={product.id} className="bg-white rounded-xl p-5 border-2 border-gray-200 hover:border-amber-400 hover:shadow-xl transition-all">
              {/* Image */}
              {product.primary_image ? (
                <img
                  src={product.primary_image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              ) : (
                <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">No image</span>
                </div>
              )}

              {/* Info */}
              <div className="mb-4">
                <div className="flex justify-between items-start gap-3 mb-2">
                  <h3 className="font-semibold text-lg text-gray-900 leading-tight">{product.name}</h3>
                  <span className={`text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap ${product.is_active
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'bg-gray-100 text-gray-600'
                    }`}>
                    {product.is_active ? 'Active' : 'Inactive'}
                  </span>
                </div>

                <p className="text-2xl font-bold text-amber-600 mb-2">
                  ${product.price.toLocaleString()}
                </p>

                {product.material && (
                  <p className="text-sm text-gray-600 bg-gray-50 px-3 py-1.5 rounded-md inline-block">
                    {product.material}
                  </p>
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-3 border-t border-gray-100">
                <button
                  onClick={() => { setEditingProduct(product); setShowForm(true); }}
                  className="flex-1 px-4 py-2.5 bg-amber-50 text-amber-700 rounded-lg hover:bg-amber-100 font-medium text-sm transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleToggleActive(product)}
                  className={`flex-1 px-4 py-2.5 rounded-lg font-medium text-sm transition ${product.is_active
                      ? 'bg-red-50 text-red-700 hover:bg-red-100'
                      : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                    }`}
                >
                  {product.is_active ? 'Disable' : 'Enable'}
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-24 bg-white rounded-xl border-2 border-dashed border-gray-300">
          <div className="text-gray-400 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
          </div>
          <p className="text-xl text-gray-600 mb-2">
            {search ? 'No products found' : 'No products yet'}
          </p>
          <p className="text-base text-gray-500">
            {search ? 'Try a different search term' : 'Create your first product to get started'}
          </p>
        </div>
      )}

      {showForm && (
        <ProductForm
          product={editingProduct}
          onSave={handleSaveProduct}
          onCancel={() => { setShowForm(false); setEditingProduct(null); }}
        />
      )}
    </div>
  );
}