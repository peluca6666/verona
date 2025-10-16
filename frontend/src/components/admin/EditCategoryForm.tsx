'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';
import { Category } from '@/types';
import { FileUploaderRegular } from '@uploadcare/react-uploader';
import '@uploadcare/react-uploader/core.css';

interface EditCategoryFormProps {
  category: Category;
  onSave: (id: number, data: Partial<Category>) => Promise<void>;
  onCancel: () => void;
}

export default function EditCategoryForm({ category, onSave, onCancel }: EditCategoryFormProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: category.name || '',
    image: category.image || '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name) {
      toast.error('Category name is required.');
      return;
    }

    setLoading(true);

    try {
      const dataToSend = {
        name: formData.name.trim(),
        image: formData.image,
      };

      await onSave(category.id, dataToSend);
      toast.success('Category updated successfully!');
      onCancel();
    } catch (err) {
      toast.error('Error updating category. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl">

        <div className="px-8 py-6 border-b bg-gradient-to-r from-amber-50 to-white">
          <h2 className="text-3xl font-light text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
            Edit Category: {category.name}
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6 overflow-y-auto max-h-[calc(90vh-180px)]">

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
            />
          </div>

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
              <div className="mt-4 flex items-center gap-4">
                <img src={formData.image} alt="Preview" className="w-24 h-24 object-cover rounded-lg" />
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, image: '' })}
                  className="text-sm text-red-600 hover:text-red-800 transition font-medium"
                >
                  Remove Image
                </button>
              </div>
            )}
          </div>

        </form>

        <div className="px-8 py-5 border-t bg-gray-50 flex gap-4">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 px-6 py-3.5 text-gray-700 hover:bg-gray-200 rounded-xl transition font-medium text-base"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            onClick={handleSubmit}
            className="flex-1 px-6 py-3.5 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white rounded-xl transition font-medium text-base shadow-lg disabled:opacity-50"
          >
            {loading ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </div>
    </div>
  );
}