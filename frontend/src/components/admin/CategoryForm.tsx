'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';

interface CategoryFormProps {
  onSave: (data: { name: string, image?: string }) => Promise<void>;
  onCancel: () => void;
}

export default function CategoryForm({ onSave, onCancel }: CategoryFormProps) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error('El nombre de la categoría es obligatorio.');
      return;
    }

    setLoading(true);
    try {
      await onSave({ name: name.trim(), image });
      toast.success('Categoría creada con éxito');
      onCancel();
    } catch (error: any) {
      // El error viene del lib/api.ts
      toast.error(error.message || 'No se pudo crear la categoría.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl p-8 w-full max-w-lg shadow-2xl">
        <h2 className="text-2xl font-light text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
          Crear Nueva Categoría
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 transition"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">URL de Imagen (Opcional)</label>
            <input
              type="url"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500 transition"
            />
          </div>
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onCancel}
              className="px-5 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
              disabled={loading}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition disabled:opacity-50"
              disabled={loading}
            >
              {loading ? 'Creando...' : 'Guardar Categoría'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}