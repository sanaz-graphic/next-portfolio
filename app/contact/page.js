 import Link from 'next/link';

export default function Contact() {
  return (
    <main className="min-h-[80vh] bg-gray-50 p-10 flex justify-center items-center">
      <div className="max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          تماس با من
        </h1>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <p className="text-gray-700 text-center mb-8">
            خوشحال می‌شم با من در ارتباط باشی. از راه‌های زیر می‌تونی پیام بدی:
          </p>

          <div className="space-y-4">
            <a
              href="mailto:atalebi894@gmail.com"
              className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition border border-gray-100"
            >
              <p className="text-sm text-gray-500">ایمیل</p>
              <p className="text-gray-800 font-medium">atalebi894@gmail.com</p>
            </a>

            <a
              href="https://github.com/sanaz-graphic"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition border border-gray-100"
            >
              <p className="text-sm text-gray-500">گیت‌هاب (نمونه کدها)</p>
              <p className="text-gray-800 font-medium">github.com/sanaz-graphic</p>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}