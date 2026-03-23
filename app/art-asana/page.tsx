export default function ArtasanaPage() {
  return (
    <div>
      {/* Hero */}
      <section className="min-h-[80vh] flex items-center justify-center text-center px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Арт-асана: йога + творчество</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">Уникальное мероприятие в пространстве Red Tent на Бали. Сочетание йоги с рисованием для полного раскрытия творческого потенциала.</p>
          <a href="#booking" className="btn-primary inline-block text-lg">Записаться на мероприятие</a>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Что такое арт-асана?</h2>
          <p className="text-lg text-gray-600 leading-relaxed">Это инновационный подход к йоге, где мы сочетаем древние практики с современным искусством. Сначала мы настраиваемся через йогу, а затем переносим энергию и эмоции на холст.</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Программа мероприятия</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2">30 минут йоги для настройки и открытия сердца</h3>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2">Медитация с цветовыми визуализациями</h3>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2">1.5 часа творчества за мольбертами</h3>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2">Работа с акварелью и масляными красками</h3>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2">Чаепитие и обмен впечатлениями</h3>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2">Унесете домой свою картину</h3>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Пространство Red Tent</h2>
          <p className="text-lg text-gray-600 leading-relaxed">Уютное творческое пространство в Нуану Креатив Сити на Бали. Здесь есть все необходимое для практики йоги и рисования: мольберты, качественные краски, коврики для йоги.</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 bg-gray-50">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Записаться на арт-асану</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Имя" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#d4af37] outline-none" />
            <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#d4af37] outline-none" />
            <textarea placeholder="Сообщение" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#d4af37] outline-none resize-none" />
            <button type="submit" className="btn-primary w-full">Забронировать место</button>
          </form>
        </div>
      </section>
    </div>
  );
}
