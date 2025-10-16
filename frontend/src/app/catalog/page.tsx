'use client';

import { Suspense } from 'react';
import CatalogPageContent from './CatalogPageContent';

export default function CatalogPage() {
  return (
    <Suspense fallback={
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-gray-600 text-lg">Cargando catálogo...</div>
      </div>
    }>
      <CatalogPageContent />
    </Suspense>
  );
}