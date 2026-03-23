export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="min-h-[80vh] flex items-center justify-center text-center px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Алёна - преподаватель йоги</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">10 лет практики и преподавания. Сертифицированный инструктор с авторскими методиками. Создаю пространство для гармонии тела и души.</p>
          <a href="#courses" className="btn-primary inline-block text-lg">Начать заниматься</a>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Мой путь в йоге</h2>
          <p className="text-lg text-gray-600 leading-relaxed">Йога пришла в мою жизнь 12 лет назад как способ справиться со стрессом. Постепенно практика стала образом жизни, а желание делиться этим даром привело меня к преподаванию. Уже 10 лет я помогаю людям находить гармонию и внутренний покой.</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Мой подход к преподаванию</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2">Внимательное отношение к каждому ученику</h3>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2">Безопасность превыше всего - никакого принуждения</h3>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2">Сочетание традиционных техник с современными подходами</h3>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2">Работа не только с телом, но и с эмоциями</h3>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2">Создание поддерживающей атмосферы</h3>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2">Постоянное развитие и изучение новых методик</h3>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Жизнь на Бали</h2>
          <p className="text-lg text-gray-600 leading-relaxed">Уже 5 лет я живу на Бали - острове, который стал для меня источником вдохновения и духовного роста. Здесь, среди тропической природы и древних храмов, моя практика обрела новую глубину.</p>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Образование и сертификаты</h2>
          <p className="text-lg text-gray-600 leading-relaxed">RYT-500 сертификация от Yoga Alliance • Специализация по пренатальной йоге • Обучение у мастеров в Ришикеше • Постоянное повышение квалификации</p>
        </div>
      </section>
    </div>
  );
}
