'use client';

import { Suspense } from 'react';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CatalogContent from './catalogContent';

export default function CatalogPage() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <Suspense fallback={
        <main className="py-20">
          <div className="container mx-auto px-4 sm:px-12 text-center">
            <div className="text-gray-600 text-lg">Cargando catálogo...</div>
          </div>
        </main>
      }>
        <CatalogContent />
      </Suspense>
      <Footer />
    </div>
  );
}