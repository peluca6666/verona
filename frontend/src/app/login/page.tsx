'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '@/lib/api';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, password);
      router.push('/admin');
    } catch (err) {
      setError('Credenciales incorrectas');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-50 px-4">
      <div className="bg-white p-10 rounded-2xl shadow-xl max-w-md w-full border border-gray-100">
        {/* Logo/Icon */}
        <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-500 rounded-xl flex items-center justify-center mx-auto mb-6">
          <span className="text-white font-bold text-2xl">V</span>
        </div>

        {/* Title */}
        <h1 
          className="text-4xl font-light text-gray-900 mb-2 text-center"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Admin Panel
        </h1>
        <p className="text-center text-gray-600 mb-8">Sign in to manage your store</p>
        
        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border-2 border-red-200 text-red-700 p-4 rounded-xl mb-6 text-base font-medium">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-base font-medium text-gray-900 mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 transition-all text-base"
              placeholder="admin@example.com"
            />
          </div>

          <div>
            <label className="block text-base font-medium text-gray-900 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500 transition-all text-base"
              placeholder="••••••••"
            />
          </div>

         <button
    type="submit"
    disabled={loading}
    className="w-full px-5 py-3 
               bg-amber-500 hover:bg-amber-600 
               text-white font-semibold rounded-lg shadow-md 
               transition-all duration-200 ease-in-out 
               disabled:bg-amber-300 disabled:cursor-not-allowed 
               focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50"
>
    {loading ? 'Loading...' : 'Log in'}
</button>
        </form>
      </div>
    </div>
  );
}