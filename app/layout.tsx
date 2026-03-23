import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Йога с Алёной — Йога с душой и творчеством на Бали',
  description: 'Онлайн курсы йоги с опытным преподавателем Алёной на Бали. 10 лет опыта, арт-асаны, курсы для новичков и беременных. Записаться сейчас!',
  openGraph: {
    title: 'Йога с Алёной',
    description: 'Онлайн курсы йоги с опытным преподавателем Алёной на Бали. 10 лет опыта, арт-асаны, курсы для новичков и беременных. Записаться сейчас!',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <a href="/" className="text-xl font-bold" style={{ color: '#d4af37' }}>Йога с Алёной</a>
            <div className="hidden md:flex gap-6">
              <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors">Главная</a>
              <a href="/courses" className="text-gray-600 hover:text-gray-900 transition-colors">Курсы</a>
              <a href="/art-asana" className="text-gray-600 hover:text-gray-900 transition-colors">Арт-асана</a>
              <a href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">Обо мне</a>
              <a href="/reviews" className="text-gray-600 hover:text-gray-900 transition-colors">Отзывы</a>
            </div>
          </div>
        </nav>
        <main className="pt-16">{children}</main>
        <footer className="border-t border-gray-100 py-8 text-center text-gray-400 text-sm">
          <p>&copy; 2026 Йога с Алёной. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}