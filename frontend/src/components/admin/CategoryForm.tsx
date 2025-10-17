'use client';

import { useState, useEffect } from 'react';
import { Category } from '@/types';
import toast from 'react-hot-toast';
import { FileUploaderRegular } from '@uploadcare/react-uploader';
import '@uploadcare/react-uploader/core.css';

interface CategoryFormProps {
  category: Category | null;
  onSave: (data: any) => Promise<void>;
  onCancel: () => void;
}

export default function CategoryForm({ category, onSave, onCancel }: CategoryFormProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: category?.name || '',
    image: category?.image || '',
    is_active: category?.is_active ?? true,
  });

  useEffect(() => {
    if (category) {
      setFormData({
        name: category.name,
        image: category.image || '',
        is_active: category.is_active,
      });
    }
  }, [category]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      toast.error('Category name is required');
      return;
    }

    if (!formData.image.trim()) {
      toast.error('Category image is required');
      return;
    }

    setLoading(true);
    try {
      await onSave({
        name: formData.name.trim(),
        image: formData.image.trim(),
        is_active: formData.is_active,
      });
      toast.success(category ? 'Category updated!' : 'Category created!');
    } catch (error) {
      toast.error(category ? 'Error updating category' : 'Error creating category');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        
        {/* Header */}
        <div className="px-8 py-6 border-b bg-gradient-to-r from-amber-50 to-white">
          <h2 className="text-3xl font-light text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
            {category ? 'Edit Category' : 'New Category'}
          </h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6 overflow-y-auto max-h-[calc(90vh-180px)]">
          
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">
              Category Name
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 text-base text-gray-900 font-medium"
              placeholder="e.g., Anillos, Collares, Pulseras"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">
              Category Image
            </label>
            <FileUploaderRegular
              pubkey="ad23bee013f24377c6c9"
              maxLocalFileSizeBytes={10000000}
              imgOnly={true}
              sourceList="local, url, camera"
              classNameUploader="uc-light"
              onFileUploadSuccess={(file: any) => {
                if (file?.cdnUrl) {
                  setFormData({ ...formData, image: file.cdnUrl });
                  toast.success('Image uploaded!');
                }
              }}
            />
            {formData.image && (
              <div className="mt-4">
                <p className="text-xs text-gray-500 mb-2">Preview:</p>
                <img 
                  src={formData.image} 
                  alt="Category preview" 
                  className="w-full h-48 object-cover rounded-lg border-2 border-gray-200" 
                />
              </div>
            )}
          </div>

          {/* Active Status */}
          <label className="flex items-center gap-3 cursor-pointer p-4 bg-amber-50 rounded-xl hover:bg-amber-100 transition">
            <input
              type="checkbox"
              checked={formData.is_active}
              onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
              className="w-5 h-5 text-amber-600 rounded"
            />
            <span className="text-base font-medium text-gray-900">Active and visible to customers</span>
          </label>
        </form>

        {/* Footer Actions */}
        <div className="px-8 py-5 border-t bg-gray-50 flex gap-4">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 px-6 py-3.5 text-gray-700 hover:bg-gray-200 rounded-xl transition font-medium text-base"
            disabled={loading}
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            onClick={handleSubmit}
            className="flex-1 px-6 py-3.5 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white rounded-xl transition font-medium text-base shadow-lg disabled:opacity-50"
          >
            {loading ? 'Saving...' : (category ? 'Update Category' : 'Create Category')}
          </button>
        </div>
      </div>
    </div>
  );
}