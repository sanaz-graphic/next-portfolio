 'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Shop() {
  const [products] = useState([
    { id: 1, name: 'تیشرت کد نویسی', price: 250000 },
    { id: 2, name: 'ماگ برنامه‌نویس', price: 150000 },
    { id: 3, name: 'هودی ری‌اکت', price: 450000 },
    { id: 4, name: 'ماوس‌پد طراحی', price: 120000 },
  ]);

  const [cart, setCart] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('myShopCart');
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('myShopCart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8 bg-white p-4 rounded-lg shadow-sm">
          <h1 className="text-2xl font-bold text-gray-800">فروشگاه من</h1>
          <div className="flex items-center gap-4">
            <Link href="/cart" className="bg-blue-100 hover:bg-blue-200 text-blue-800 px-3 py-1 rounded-full font-bold transition">
              سبد خرید: {cart.length} مورد
            </Link>
            <Link href="/" className="text-blue-500 hover:text-blue-700 text-sm">
              بازگشت
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-6 rounded-xl shadow-md text-center flex flex-col justify-between">
              <h2 className="text-lg font-bold text-gray-800 mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.price.toLocaleString()} تومان</p>
              <button
                onClick={() => addToCart(product)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition w-full"
              >
                افزودن به سبد
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}