 'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('myShopCart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
    localStorage.setItem('myShopCart', JSON.stringify(newCart));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          سبد خرید شما
        </h1>
        
        {cart.length === 0 ? (
          <p className="text-center text-gray-500 mb-8">سبد خرید شما خالی است.</p>
        ) : (
          <div>
            <ul className="list-none p-0 mb-6">
              {cart.map((item, index) => (
                <li key={index} className="flex justify-between items-center bg-gray-50 p-4 mb-2 rounded-lg border border-gray-100">
                  <div>
                    <span className="font-bold text-gray-800">{item.name}</span>
                    <span className="text-gray-500 text-sm mr-2">({item.price.toLocaleString()} تومان)</span>
                  </div>
                  <button 
                    onClick={() => removeFromCart(index)}
                    className="text-red-500 hover:text-red-700 text-sm font-bold"
                  >
                    حذف
                  </button>
                </li>
              ))}
            </ul>
            
            <div className="border-t border-gray-200 pt-4 mb-6 text-left">
              <p className="text-lg font-bold text-gray-800">
                جمع کل: {totalPrice.toLocaleString()} تومان
              </p>
            </div>
          </div>
        )}

        <div className="text-center">
          <Link 
            href="/shop" 
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition"
          >
            &rarr; بازگشت به فروشگاه
          </Link>
        </div>
      </div>
    </main>
  );
}