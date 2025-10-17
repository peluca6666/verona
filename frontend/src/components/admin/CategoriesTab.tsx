'use client';

import { useEffect, useState } from 'react';
import { Category } from '@/types';
import { getCategoriesForAdmin, createCategory, updateCategory } from '@/lib/api';
import toast from 'react-hot-toast';
import CategoryForm from './CategoryForm';

export default function CategoriesTab() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchCategories();
  }, []);

  async function fetchCategories() {
    try {
      setLoading(true);
      const response = await getCategoriesForAdmin();
      setCategories(response.data);
    } catch (err) {
      toast.error('Error loading categories');
    } finally {
      setLoading(false);
    }
  }

  async function handleToggleActive(category: Category) {
    try {
      await updateCategory(category.id, { is_active: !category.is_active });
      toast.success(category.is_active ? 'Category deactivated' : 'Category activated');
      fetchCategories();
    } catch (err) {
      toast.error('Error updating category');
    }
  }

  async function handleSaveCategory(data: any) {
    try {
      if (editingCategory) {
        await updateCategory(editingCategory.id, data);
      } else {
        await createCategory(data);
      }
      setShowForm(false);
      setEditingCategory(null);
      fetchCategories();
    } catch (err) {
      throw err;
    }
  }

  const filtered = categories.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <div className="text-center py-20 text-lg text-gray-600">Loading categories...</div>;
  }

  return (
    <>
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-4xl font-light text-gray-900 mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
            Categories
          </h1>
          <p className="text-lg text-gray-600">{filtered.length} categories</p>
        </div>
        <button
          onClick={() => { setEditingCategory(null); setShowForm(true); }}
          className="px-8 py-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white font-medium rounded-lg transition-all"
        >
          + New Category
        </button>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search categories..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-5 py-3.5 mb-8 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 text-base transition"
      />

      {/* Categories Grid */}
      {filtered.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((category) => (
            <div key={category.id} className="bg-white rounded-xl p-5 border-2 border-gray-200 hover:border-amber-400 hover:shadow-xl transition-all">
              {category.image ? (
                <img src={category.image} alt={category.name} className="w-full h-48 object-cover rounded-lg mb-4" />
              ) : (
                <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">No image</span>
                </div>
              )}

              <div className="mb-4">
                <div className="flex justify-between items-start gap-3 mb-2">
                  <h3 className="font-semibold text-lg text-gray-900 leading-tight">{category.name}</h3>
                  <span className={`text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap ${
                    category.is_active ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {category.is_active ? 'Active' : 'Inactive'}
                  </span>
                </div>
              </div>

              {/* Botones de acción */}
              <div className="flex gap-3 pt-3 border-t border-gray-100">
                <button
                  onClick={() => { setEditingCategory(category); setShowForm(true); }}
                  className="flex-1 px-4 py-2.5 bg-amber-50 text-amber-700 rounded-lg hover:bg-amber-100 font-medium text-sm transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleToggleActive(category)}
                  className={`flex-1 px-4 py-2.5 rounded-lg font-medium text-sm transition ${
                    category.is_active ? 'bg-red-50 text-red-700 hover:bg-red-100' : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                  }`}
                >
                  {category.is_active ? 'Disable' : 'Enable'}
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-24 bg-white rounded-xl border-2 border-dashed border-gray-300">
          <p className="text-xl text-gray-600 mb-2">{search ? 'No categories found' : 'No categories yet'}</p>
          <p className="text-base text-gray-500">{search ? 'Try a different search term' : 'Create your first category to get started'}</p>
        </div>
      )}

      {showForm && (
        <CategoryForm
          category={editingCategory}
          onSave={handleSaveCategory}
          onCancel={() => { setShowForm(false); setEditingCategory(null); }}
        />
      )}
    </>
  );
}