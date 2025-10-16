'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { getToken } from '@/lib/api';
import { Toaster } from 'react-hot-toast';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      router.replace('/login');
    } else {
      setIsChecking(false);
    }
  }, [router]);

  if (isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600">Checking access...</div>
      </div>
    );
  }

  const handleLogout = () => {
    localStorage.removeItem('verona_token');
    router.replace('/login');
  };

  const navItems = [
    { name: 'Products', href: '/admin' },
    { name: 'Categories', href: '/admin/categories' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      
      <nav className="bg-gray-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-light tracking-wider" style={{ fontFamily: 'Playfair Display, serif' }}>
            ⚙️ Admin Panel
          </h2>
          
          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                href={item.href}
                className={`text-base font-medium py-1 border-b-2 transition duration-150 ${
                  pathname === item.href 
                  ? 'border-amber-500 text-amber-400' 
                  : 'border-transparent text-gray-300 hover:text-white hover:border-gray-500'
                }`}
              >
                {item.name}
              </Link>
            ))}

            <button
              onClick={handleLogout}
              className="ml-4 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded transition duration-200"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {children}
      </main>
    </div>
  );
}