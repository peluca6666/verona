'use client';

import { useState } from 'react';
import ProductsTab from '@/components/admin/ProductsTab';
import CategoriesTab from '@/components/admin/CategoriesTab';

type Tab = 'products' | 'categories';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<Tab>('products');

  return (
    <div className="max-w-[1400px] mx-auto">
      {/* Tabs Navigation */}
      <div className="mb-8 border-b border-gray-200">
        <nav className="flex gap-8">
          <button
            onClick={() => setActiveTab('products')}
            className={`pb-4 px-2 font-medium text-lg transition-colors relative ${
              activeTab === 'products' ? 'text-amber-600' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Productos
            {activeTab === 'products' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-600" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('categories')}
            className={`pb-4 px-2 font-medium text-lg transition-colors relative ${
              activeTab === 'categories' ? 'text-amber-600' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Categorias
            {activeTab === 'categories' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-600" />
            )}
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === 'products' ? <ProductsTab /> : <CategoriesTab />}
    </div>
  );
}