 import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'پورتفولیوی ساناز',
  description: 'سایت شخصی و نمونه کارهای ساناز',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}