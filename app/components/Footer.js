export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 mt-auto">
      <div className="max-w-4xl mx-auto text-center text-gray-500 text-sm">
        <p>ساخته شده با ❤️ توسط ساناز</p>
        <p className="mt-2">© {new Date().getFullYear()} - تمامی حقوق محفوظ است.</p>
      </div>
    </footer>
  );
}