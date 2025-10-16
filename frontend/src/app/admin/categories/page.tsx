'use client';

import { useEffect, useState } from 'react';
import { Category } from '@/types';
import { getCategoriesForAdmin, updateCategory, toggleCategoryActive, createCategory } from '@/lib/api';
import toast from 'react-hot-toast';
import CategoryForm from '@/components/admin/CategoryForm'; 
import EditCategoryForm from '@/components/admin/EditCategoryForm'; 

type CategoryCreateData = {
  name: string;
  image?: string;
};

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [showNewCategoryForm, setShowNewCategoryForm] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  async function fetchCategories() {
    try {
      setLoading(true);
      const data = await getCategoriesForAdmin();
      setCategories(data);
    } catch (err) {
      toast.error('Error loading categories');
    } finally {
      setLoading(false);
    }
  }

  async function handleToggleActive(category: Category) {
    try {
      await toggleCategoryActive(category.id, !category.is_active);
      toast.success(category.is_active ? 'Category Deactivated' : 'Category Activated');
      fetchCategories();
    } catch (err) {
      toast.error('Error updating category status');
    }
  }

  async function handleSaveCategoryUpdate(id: number, data: Partial<Category>) {
    await updateCategory(id, data);
    fetchCategories();
  }

  async function handleSaveNewCategory(data: CategoryCreateData) {
    await createCategory(data); 
    fetchCategories();
  }


  if (loading) {
    return <div className="text-center py-20 text-lg text-gray-600">Loading Categories...</div>;
  }

  return (
    <div className="max-w-[1400px] mx-auto">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-4xl font-light text-gray-900 mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
            Category Administration 🏷️
          </h1>
          <p className="text-lg text-gray-600">{categories.length} categories found</p>
        </div>
        <button
          onClick={() => setShowNewCategoryForm(true)}
          className="px-8 py-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white font-medium tracking-[0.1em] transition duration-300 rounded-lg shadow-md"
        >
          + New Category
        </button>
      </div>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.length > 0 ? (
          categories.map((category) => (
            <div key={category.id} className="bg-white rounded-xl overflow-hidden border-2 border-gray-200 hover:shadow-lg transition-all">
              {category.image ? (
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-40 object-cover"
                />
              ) : (
                <div className="w-full h-40 bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">No image</span>
                </div>
              )}

              <div className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-lg text-gray-900 leading-tight">{category.name}</h3>
                  <span className={`text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap ${category.is_active
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'bg-red-100 text-red-700'
                    }`}>
                    {category.is_active ? 'Active' : 'Disabled'}
                  </span>
                </div>

                <div className="flex gap-3 pt-3 border-t border-gray-100">
                  <button
                    onClick={() => setEditingCategory(category)}
                    className="flex-1 px-4 py-2.5 bg-amber-50 text-amber-700 rounded-lg hover:bg-amber-100 font-medium text-sm transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleToggleActive(category)}
                    className={`flex-1 px-4 py-2.5 rounded-lg font-medium text-sm transition ${category.is_active
                        ? 'bg-red-50 text-red-700 hover:bg-red-100'
                        : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                      }`}
                  >
                    {category.is_active ? 'Disable' : 'Enable'}
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-24 bg-white rounded-xl border-2 border-dashed border-gray-300">
            <p className="text-xl text-gray-600 mb-2">No categories found.</p>
            <p className="text-base text-gray-500">Create your first category to get started.</p>
          </div>
        )}
      </div>

      {showNewCategoryForm && (
        <CategoryForm
          onSave={handleSaveNewCategory}
          onCancel={() => setShowNewCategoryForm(false)}
        />
      )}

      {editingCategory && (
        <EditCategoryForm
          category={editingCategory}
          onSave={handleSaveCategoryUpdate}
          onCancel={() => setEditingCategory(null)}
        />
      )}
    </div>
  );
}