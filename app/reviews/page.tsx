export default function ReviewsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="min-h-[80vh] flex items-center justify-center text-center px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Отзывы учеников</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">Что говорят люди, которые уже начали свой путь в йоге вместе со мной. Каждый отзыв - это история трансформации.</p>
          <a href="#courses" className="btn-primary inline-block text-lg">Присоединиться к ученикам</a>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">О курсах йоги</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-xl p-6">
            <p className="text-gray-600 italic">"Алёна научила меня не просто делать асаны, а слышать свое тело. За полгода занятий прошли боли в спине, которые мучили годами. Теперь йога - неотъемлемая часть моей жизни! - Мария, 28 лет, дизайнер"</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6">
            <p className="text-gray-600 italic">"Курс для беременных стал настоящим спасением. Алёна помогла мне пройти весь период ожидания малыша в гармонии с собой. Дыхательные техники очень помогли во время родов. - Елена, 31 год, психолог"</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6">
            <p className="text-gray-600 italic">"После родов думала, что никогда не вернусь в форму. Курс восстановления с Алёной показал, что возможно все! Не только тело стало сильнее, но и появилась уверенность в себе. - Анна, 29 лет, мама двоих детей"</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6">
            <p className="text-gray-600 italic">"Начинала с курса для новичков, теперь занимаюсь на среднем уровне. Алёна умеет объяснить сложные вещи простыми словами. Каждое занятие приносит радость и энергию. - Ольга, 35 лет, менеджер"</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Об арт-асанах</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-xl p-6">
            <p className="text-gray-600 italic">"Арт-асаны - это магия! Никогда не думала, что умею рисовать, но после настройки через йогу краски сами ложатся на холст. Это невероятный опыт самопознания. - Виктория, 26 лет"</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6">
            <p className="text-gray-600 italic">"Привела на арт-асану подругу, которая скептически относилась к йоге. Теперь мы ходим вместе каждые выходные! Алёна создает такую атмосферу, что даже самые зажатые люди раскрываются. - Дарья, 32 года"</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6">
            <p className="text-gray-600 italic">"Пространство Red Tent и энергия Алёны делают арт-асаны особенными. Это не просто рисование, а настоящий процесс трансформации. Каждая картина - отражение внутреннего состояния. - Светлана, 40 лет"</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 bg-gray-50">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Стать частью йога-семьи</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Имя" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#d4af37] outline-none" />
            <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#d4af37] outline-none" />
            <textarea placeholder="Сообщение" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#d4af37] outline-none resize-none" />
            <button type="submit" className="btn-primary w-full">Начать заниматься йогой</button>
          </form>
        </div>
      </section>
    </div>
  );
}
