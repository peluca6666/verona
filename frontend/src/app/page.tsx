'use client';

import CategoryGrid from '@/components/home/CategoryGrid';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import Hero from '@/components/home/Hero';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

export default function Home() {
  return (
    <div>
      <main>
           <Header />
      <Hero />
      <CategoryGrid />
      <FeaturedProducts />
      <Footer />
      </main>
    </div>
  );
}