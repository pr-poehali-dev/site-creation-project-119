import Icon from '@/components/ui/icon';
import { CityData } from '@/data/cities';

const services = [
  { title: 'Гостиничные чеки' },
  { title: 'Кассовые чеки' },
  { title: 'Ресторанные чеки' },
  { title: 'Чеки АЗС' },
  { title: 'Счета-фактуры' },
  { title: 'Стройматериалы' },
];

interface Props {
  city: CityData;
}

const CityFooter = ({ city }: Props) => {
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

      <footer id="contacts" className="bg-ink text-white border-t-2 border-acid pt-16 pb-8 grain">
        <div className="container grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="font-display text-xl font-700 flex items-center gap-2 mb-4">
              <span className="bg-electric text-white px-2 py-1 leading-none">ЧЕКИ</span>
              <span className="text-white">С ПОДТВЕРЖДЕНИЕМ</span>
            </div>
            <p className="text-white/50 text-sm">Гостиничные и отчётные чеки {city.nameIn} — официально, со всеми реквизитами.</p>
          </div>
          <div>
            <h4 className="font-display uppercase text-acid mb-4">Каталог</h4>
            <ul className="space-y-2 text-sm text-white/60">
              {services.map((s) => <li key={s.title}><a href="#services" className="hover:text-white">{s.title}</a></li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-display uppercase text-acid mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="tel:+79184641800" className="hover:text-white">+7 (918) 464-18-00</a></li>
              <li><a href="mailto:6456609@list.ru" className="hover:text-white">6456609@list.ru</a></li>
              <li className="flex items-center gap-2"><Icon name="MapPin" size={14} /> {city.address}</li>
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
          <span>© 2026 Чеки с подтверждением · {city.name}</span>
          <span>Документы изготавливаются по форме Госстандарта</span>
        </div>
      </footer>

      {/* Floating buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a href="tel:+79184641800" className="w-14 h-14 bg-electric text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300" title="Позвонить">
          <Icon name="Phone" size={22} />
        </a>
        <a href="https://wa.me/79184641800" target="_blank" rel="noreferrer" className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300" title="WhatsApp">
          <Icon name="MessageCircle" size={22} />
        </a>
        <a href="https://t.me/+79184641800" target="_blank" rel="noreferrer" className="w-14 h-14 bg-sky-500 text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300" title="Telegram">
          <Icon name="Send" size={22} />
        </a>
      </div>
    </>
  );
};

export default CityFooter;
