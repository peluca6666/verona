'use client';

import CategoryGrid from '@/components/home/CategoryGrid';
import Hero from '@/components/home/Hero';
import Header from '@/components/layout/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <CategoryGrid />
      <main>
        <p>Contenido de la homepage</p>
      </main>
    </div>
  );
}