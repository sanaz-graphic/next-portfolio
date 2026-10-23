import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      title: 'لیست کارها (Todo)',
      description: 'یک اپلیکیشن برای مدیریت کارهای روزانه با قابلیت ذخیره‌سازی خودکار.',
      tech: ['React', 'Tailwind', 'localStorage'],
      link: 'https://sanaz-graphic.github.io/react-app/#/todo',
    },
    {
      title: 'اپلیکیشن آب‌وهوا',
      description: 'جستجوی آب‌وهوای هر شهر جهان با استفاده از API رایگان Open-Meteo.',
      tech: ['React', 'API', 'async/await'],
      link: 'https://sanaz-graphic.github.io/react-app/#/weather',
    },
  ];

  return (
    <main className="min-h-[80vh] bg-gray-50 p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          پروژه‌های من
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition flex flex-col"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                {project.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg transition"
              >
                مشاهده دمو (در سایت React)
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}