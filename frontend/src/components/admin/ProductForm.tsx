'use client';

import { useState, useEffect } from 'react';
import { Product, Category } from '@/types';
import { getCategories } from '@/lib/api';
import toast from 'react-hot-toast';
import { FileUploaderRegular } from '@uploadcare/react-uploader';
import '@uploadcare/react-uploader/core.css';

interface ProductFormProps {
  product?: Product | null;
  onSave: (data: any) => Promise<void>;
  onCancel: () => void;
}

export default function ProductForm({ product, onSave, onCancel }: ProductFormProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: product?.name || '',
    price: product?.price || 0,
    category_id: product?.category_id || 0,
    material: product?.material || '',
    description: product?.description || '',
    primary_image: product?.primary_image || '',
    images: product?.images?.join(', ') || '',
    is_active: product?.is_active ?? true,
    stock: product?.stock || 0,
  });

  useEffect(() => {
    async function fetchCategories() {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (err) {
        toast.error('Error cargando categorias');
      }
    }
    fetchCategories();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const dataToSend = {
        ...formData,
        price: Number(formData.price),
        category_id: Number(formData.category_id),
        stock: Number(formData.stock),
        images: formData.images ? formData.images.split(',').map(url => url.trim()).filter(Boolean) : [],
      };

      await onSave(dataToSend);
      toast.success(product ? 'Actualizado' : 'Creado');
    } catch (err) {
      toast.error('Error guardando el producto');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl">

        <div className="px-8 py-6 border-b bg-gradient-to-r from-amber-50 to-white">
          <h2 className="text-3xl font-light text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
            {product ? 'Editar producto' : 'Nuevo producto'}
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6 overflow-y-auto max-h-[calc(90vh-180px)]">

          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">
              Nombre del producto
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 text-base text-gray-900 font-medium"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">
                Precio
              </label>
              <input
                type="number"
                required
                min="0"
                step="0.01"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 text-base text-gray-900 font-medium"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">
                Categoria
              </label>
              <select
                required
                value={formData.category_id}
                onChange={(e) => setFormData({ ...formData, category_id: Number(e.target.value) })}
                className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 text-base bg-white text-gray-900 font-medium"
              >
                <option value="">Seleccionar...</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">
              Material
            </label>
            <input
              type="text"
              value={formData.material}
              onChange={(e) => setFormData({ ...formData, material: e.target.value })}
              className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 text-base text-gray-900"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">
              Stock disponible
            </label>
            <input
              type="number"
              required
              min="0"
              value={formData.stock}
              onChange={(e) => setFormData({ ...formData, stock: Number(e.target.value) })}
              className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 text-base text-gray-900 font-medium"
              placeholder="0"
            />
            <p className="text-xs text-gray-500 mt-2">Numero de unidades disponibles en stock</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">
              Descripción
            </label>
            <textarea
              rows={4}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 text-base resize-none text-gray-900"
            />
          </div>

          {/* Primary Image Upload */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">
              Imagen principal
            </label>
            <FileUploaderRegular
              pubkey="ad23bee013f24377c6c9"
              maxLocalFileSizeBytes={10000000}
              imgOnly={true}
              sourceList="local, url, camera"
              classNameUploader="uc-light"
              onFileUploadSuccess={(file: any) => {
                if (file?.cdnUrl) {
                  setFormData({ ...formData, primary_image: file.cdnUrl });
                  toast.success('Image uploaded!');
                }
              }}
            />
            {formData.primary_image && (
              <div className="mt-2">
                <img src={formData.primary_image} alt="Preview" className="w-32 h-32 object-cover rounded-lg" />
              </div>
            )}
          </div>

          {/* Additional Images */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">
              Imagenes adicionales
            </label>
            <FileUploaderRegular
              pubkey="ad23bee013f24377c6c9"
              maxLocalFileSizeBytes={10000000}
              imgOnly={true}
              multiple={true}
              sourceList="local, url, camera"
              classNameUploader="uc-light"
              onFileUploadSuccess={(file: any) => {
                if (file?.cdnUrl) {
                  const currentImages = formData.images ? formData.images.split(',').map(url => url.trim()) : [];
                  currentImages.push(file.cdnUrl);
                  setFormData({ ...formData, images: currentImages.join(', ') });
                  toast.success('Imagen añadida!');
                }
              }}
            />
            <p className="text-xs text-gray-500 mt-2">Subir multiples imagenes</p>
            {formData.images && (
              <div className="mt-2 flex gap-2 flex-wrap">
                {formData.images.split(',').map((url, i) => (
                  <img key={i} src={url.trim()} alt={`Preview ${i + 1}`} className="w-20 h-20 object-cover rounded-lg" />
                ))}
              </div>
            )}
          </div>

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

        <div className="px-8 py-5 border-t bg-gray-50 flex gap-4">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 px-6 py-3.5 text-gray-700 hover:bg-gray-200 rounded-xl transition font-medium text-base"
          >
            Cancelar
          </button>
          <button
            type="submit"
            disabled={loading}
            onClick={handleSubmit}
            className="flex-1 px-6 py-3.5 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white rounded-xl transition font-medium text-base shadow-lg disabled:opacity-50"
          >
            {loading ? 'Guardando...' : 'Guardar producto'}
          </button>
        </div>
      </div>
    </div>
  );
}