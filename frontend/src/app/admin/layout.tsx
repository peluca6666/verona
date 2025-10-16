'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getToken } from '@/lib/api';
import { Toaster } from 'react-hot-toast';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      
      <nav className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-light" style={{ fontFamily: 'Playfair Display, serif' }}>
            Admin Panel
          </h2>
          
          <div className="flex gap-4">
           
            <button
    onClick={handleLogout}
    className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded transition-colors duration-200"
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