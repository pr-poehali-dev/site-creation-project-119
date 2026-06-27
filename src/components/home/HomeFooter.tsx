import Icon from '@/components/ui/icon';

const services = [
  { icon: 'Hotel', title: 'Гостиничные чеки' },
  { icon: 'Receipt', title: 'Кассовые чеки' },
  { icon: 'UtensilsCrossed', title: 'Ресторанные чеки' },
  { icon: 'Fuel', title: 'Чеки АЗС' },
  { icon: 'FileText', title: 'Счета-фактуры' },
  { icon: 'Hammer', title: 'Стройматериалы' },
];

const HomeFooter = () => {
  return (
    <>
      {/* Partners block */}
      <section className="border-t-2 border-ink bg-gray-50 py-12">
        <div className="container">
          <h2 className="font-display font-700 uppercase text-2xl mb-6">Партнёры — гостиничные чеки в других городах:</h2>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm mb-0">
            {[
              { city: 'Сочи', url: 'https://cheki-sochi.ru/' },
              { city: 'Анапа', url: 'https://chekgarant.online' },
              { city: 'Новороссийск', url: 'https://kassovie-cheki01.ru' },
              { city: 'Геленджик', url: 'https://cheki-gelendzhik.ru' },
              { city: 'Анапа', url: 'https://kassovie-cheki01.online/' },
              { city: 'Крымск', url: 'https://cheki-gelendzhik.ru/cheki-krimsk' },
              { city: 'Туапсе', url: 'https://cheki-sochi.ru/cheki-tuapse' },
            ].map((p) => (
              <li key={p.url}>
                <a href={p.url} target="_blank" rel="noopener" className="text-electric hover:underline">
                  Гостиничные чеки в {p.city}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SEO links block */}
      <section className="border-t-2 border-ink bg-gray-50 py-12">
        <div className="container">
          <h2 className="font-display font-700 uppercase text-2xl mb-8">У нас Вы сможете заказать:</h2>
          <ul className="space-y-3 text-sm text-ink/70 leading-relaxed">
            <li><strong className="text-ink">Гостиничный чек купить с подтверждением</strong> в Краснодаре, Анапе, Славянске-на-Кубани, Армавире, Ейске, Сочи, Адлере, Геленджике, Кропоткине, Новороссийске в короткие сроки с доставкой.</li>
            <li><strong className="text-ink">Товарные чеки купить</strong> в Краснодаре, Анапе, Славянске-на-Кубани, Армавире, Ейске, Сочи, Адлере, Геленджике, Кропоткине, Новороссийске в короткие сроки с доставкой.</li>
            <li><strong className="text-ink">Кассовые чеки купить</strong> в Краснодаре, Анапе, Славянске-на-Кубани, Армавире, Ейске, Сочи, Адлере, Геленджике, Кропоткине, Новороссийске вместе с товарными в сжатые сроки.</li>
            <li><strong className="text-ink">Договор об оказании гостиничных услуг</strong> в Краснодаре, Анапе, Славянске-на-Кубани, Армавире, Ейске, Сочи, Адлере, Геленджике, Кропоткине, Новороссийске за сутки, кассовый чек.</li>
            <li><strong className="text-ink">Акт выполненных работ</strong> в паре к гостиничному чеку — купить в Краснодаре задним числом.</li>
            <li><strong className="text-ink">Счёт-фактура купить</strong> в Краснодаре, Анапе, Славянске-на-Кубани, Армавире, Ейске, Сочи, Адлере, Геленджике, Кропоткине, Новороссийске вместе с актом выполненных работ.</li>
            <li><strong className="text-ink">Чеки на бензин купить АЗС ГСМ</strong> в Краснодаре, Анапе, Славянске-на-Кубани, Армавире, Ейске, Сочи, Адлере, Геленджике, Кропоткине, Новороссийске в короткие сроки с доставкой.</li>
            <li><strong className="text-ink">Чек на гостиницу купить</strong> в Краснодаре, Анапе, Славянске-на-Кубани, Армавире, Ейске, Сочи, Адлере, Геленджике, Кропоткине, Новороссийске в короткие сроки с доставкой по городу.</li>
            <li><strong className="text-ink">Ресторанные чеки купить</strong> в Краснодаре, Анапе, Славянске-на-Кубани, Армавире, Ейске, Сочи, Адлере, Геленджике, Кропоткине, Новороссийске в короткие сроки с доставкой и записью блюд.</li>
            <li><strong className="text-ink">Чеки на стройматериалы купить</strong> в Краснодаре, Анапе, Славянске-на-Кубани, Сочи, Адлере, Геленджике, Новороссийске в короткие сроки.</li>
          </ul>
        </div>
      </section>

      {/* Map */}
      <section className="border-t-2 border-ink">
        <div className="container py-12">
          <h2 className="font-display font-700 uppercase text-3xl mb-8">Мы на карте</h2>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="space-y-3">
              <div>
                <p className="font-display uppercase text-xs tracking-wide text-ink/50 mb-1">Адрес</p>
                <p className="font-semibold">г. Сочи, ул. Горького 56А</p>
              </div>
              <div>
                <p className="font-display uppercase text-xs tracking-wide text-ink/50 mb-1">Телефон</p>
                <a href="tel:+79184641800" className="font-semibold hover:text-electric">+7 (918) 464-18-00</a>
              </div>
              <div>
                <p className="font-display uppercase text-xs tracking-wide text-ink/50 mb-1">Email</p>
                <a href="mailto:6456609@list.ru" className="font-semibold hover:text-electric">6456609@list.ru</a>
              </div>
              <div>
                <p className="font-display uppercase text-xs tracking-wide text-ink/50 mb-1">Режим работы</p>
                <p className="font-semibold">Ежедневно 09:00 — 21:00</p>
              </div>
            </div>
            <div className="md:col-span-2 border-2 border-ink overflow-hidden" style={{height: '400px'}}>
              <iframe
                src="https://yandex.ru/map-widget/v1/?text=г.+Сочи,+ул.+Горького+56А&z=16&l=map"
                width="100%"
                height="100%"
                style={{border: 0}}
                allowFullScreen
                loading="lazy"
                title="Мы на карте"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacts" className="bg-ink text-white border-t-2 border-acid pt-16 pb-8 grain">
        <div className="container grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="font-display text-xl font-700 flex items-center gap-2 mb-4">
              <span className="bg-electric text-white px-2 py-1 leading-none">ЧЕКИ</span>
              <span className="text-white">С ПОДТВЕРЖДЕНИЕМ</span>
            </div>
            <p className="text-white/50 text-sm">Гостиничные и отчётные чеки в Сочи — официально, со всеми реквизитами.</p>
          </div>
          <div>
            <h4 className="font-display uppercase text-acid mb-4">Каталог</h4>
            <ul className="space-y-2 text-sm text-white/60">
              {services.map((s) => <li key={s.title}><a href="#services" className="hover:text-white">{s.title}</a></li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-display uppercase text-acid mb-4">Информация</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="#delivery" className="hover:text-white">Доставка и оплата</a></li>
              <li><a href="#about" className="hover:text-white">О нас</a></li>
              <li><a href="#blog" className="hover:text-white">Блог</a></li>
              <li><a href="#contacts" className="hover:text-white">Контакты</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display uppercase text-acid mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="tel:+79184641800" className="hover:text-white">+7 (918) 464-18-00</a></li>
              <li><a href="mailto:6456609@list.ru" className="hover:text-white">6456609@list.ru</a></li>
              <li className="flex items-center gap-2"><Icon name="MapPin" size={14} /> г.Сочи, ул.Горького 56А</li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="https://wa.me/79184641800" target="_blank" rel="noreferrer" className="border border-white/30 w-10 h-10 flex items-center justify-center hover:bg-acid hover:text-ink hover:border-acid transition-colors">
                <Icon name="MessageCircle" size={18} />
              </a>
              <a href="https://t.me/+79184641800" target="_blank" rel="noreferrer" className="border border-white/30 w-10 h-10 flex items-center justify-center hover:bg-acid hover:text-ink hover:border-acid transition-colors">
                <Icon name="Send" size={18} />
              </a>
              <a href="tel:+79184641800" className="border border-white/30 w-10 h-10 flex items-center justify-center hover:bg-acid hover:text-ink hover:border-acid transition-colors">
                <Icon name="Phone" size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="container border-t border-white/10 pt-6 text-xs text-white/40 flex flex-wrap justify-between gap-2">
          <span>© 2026 Чеки1 · Сочи</span>
          <span>Документы изготавливаются по форме Госстандарта</span>
        </div>
      </footer>

      {/* Floating buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a
          href="tel:+79184641800"
          className="group w-14 h-14 bg-electric text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 hover:shadow-electric/40 transition-all duration-300"
          title="Позвонить"
        >
          <Icon name="Phone" size={22} />
        </a>
        <a
          href="https://wa.me/79184641800"
          target="_blank"
          rel="noreferrer"
          className="group w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 hover:shadow-green-400/40 transition-all duration-300"
          title="WhatsApp"
        >
          <Icon name="MessageCircle" size={22} />
        </a>
        <a
          href="https://t.me/+79184641800"
          target="_blank"
          rel="noreferrer"
          className="group w-14 h-14 bg-sky-500 text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 hover:shadow-sky-400/40 transition-all duration-300"
          title="Telegram"
        >
          <Icon name="Send" size={22} />
        </a>
      </div>
    </>
  );
};

export default HomeFooter;
