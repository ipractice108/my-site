export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="min-h-[80vh] flex items-center justify-center text-center px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Йога с душой и творчеством на Бали</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">10 лет опыта • Онлайн курсы • Творческие мероприятия. Откройте гармонию тела и души вместе с опытным преподавателем</p>
          <a href="#courses" className="btn-primary inline-block text-lg">Выбрать курс</a>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Онлайн курсы йоги $10</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2">Для новичков - Основы асан и дыхательных практик</h3>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2">Средний уровень - Сложные позы и углубленная практика</h3>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2">Для беременных - Мягкая практика для будущих мам</h3>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2">После родов - Восстановление тела и энергии</h3>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Арт-асана: йога + творчество</h2>
          <p className="text-lg text-gray-600 leading-relaxed">Уникальный микс йоги с рисованием на мольбертах в пространстве Red Tent. Сочетание древних практик с современным искусством для полного раскрытия творческого потенциала.</p>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">О преподавателе Алёне</h2>
          <p className="text-lg text-gray-600 leading-relaxed">10 лет практики и преподавания йоги. Сертифицированный инструктор с авторскими методиками. Живу и преподаю на Бали, создавая атмосферу гармонии и вдохновения для каждого ученика.</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Отзывы учеников</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-xl p-6">
            <p className="text-gray-600 italic">"Алёна - невероятный преподаватель! За 3 месяца занятий я полностью изменила отношение к своему телу - Мария, 28 лет"</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6">
            <p className="text-gray-600 italic">"Арт-асаны - это что-то особенное. Никогда не думала, что йога и рисование так гармонично сочетаются - Анна, 35 лет"</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6">
            <p className="text-gray-600 italic">"Курс для беременных помог мне пройти весь период ожидания в гармонии и спокойствии - Елена, 31 год"</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 bg-gray-50">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Связаться со мной</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Имя" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#d4af37] outline-none" />
            <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#d4af37] outline-none" />
            <textarea placeholder="Сообщение" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#d4af37] outline-none resize-none" />
            <button type="submit" className="btn-primary w-full">Написать в WhatsApp</button>
          </form>
        </div>
      </section>
    </div>
  );
}