'use client';

import Link from 'next/link';

export default function Cart() {
  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          سبد خرید شما
        </h1>
        
        {/* فعلاً فقط یک متن ساده گذاشتیم تا ساختار صفحه رو ببینیم */}
        <p className="text-center text-gray-500">
          اینجا بعداً لیست محصولات و جمع کل نمایش داده می‌شود.
        </p>

        <div className="mt-8 text-center">
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