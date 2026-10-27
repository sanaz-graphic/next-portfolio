 import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          ساناز
        </Link>
        
        <ul className="flex gap-6 list-none m-0 p-0">
          <li>
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
              خانه
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
              درباره من
            </Link>
          </li>
          <li>
            <Link href="/projects" className="text-gray-700 hover:text-blue-600 transition">
              پروژه‌ها
            </Link>
          </li>
          <li>
            <Link href="/weather" className="text-gray-700 hover:text-blue-600 transition">
              آب‌وهوا
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}