import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { CityData } from '@/data/cities';

const nav = [
  { label: 'О нас', href: '#about' },
  { label: 'Услуги', href: '#services' },
  { label: 'Как работаем', href: '#steps' },
  { label: 'Доставка и оплата', href: '#delivery' },
  { label: 'Контакты', href: '#contacts' },
];

interface Props {
  city: CityData;
}

const CityHero = ({ city }: Props) => {
  return (
    <>
      {/* Top bar */}
      <div className="bg-ink text-acid text-sm">
        <div className="container flex items-center justify-between py-2 font-display tracking-wide">
          <span className="flex items-center gap-2"><Icon name="MapPin" size={14} /> {city.address}</span>
          <a href="tel:+79184641800" className="hover:text-white transition-colors flex items-center gap-2">
            <Icon name="Phone" size={14} /> +7 (918) 464-18-00
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#FAF9F2]/90 backdrop-blur border-b-2 border-ink">
        <div className="container flex items-center justify-between py-4">
          <Link to="/" className="font-display text-xl font-700 flex items-center gap-2">
            <span className="bg-electric text-white px-2 py-1 leading-none">ЧЕКИ</span>
            <span className="text-ink">С ПОДТВЕРЖДЕНИЕМ</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-7 font-display text-sm uppercase tracking-wide">
            {nav.map((n) => (
              <a key={n.label} href={n.href} className="hover:text-electric transition-colors relative group">
                {n.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-acid group-hover:w-full transition-all" />
              </a>
            ))}
          </nav>
          <Button className="bg-electric hover:bg-ink text-white rounded-none font-display uppercase tracking-wide">
            Заказать звонок
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative grain border-b-2 border-ink">
        <div className="absolute top-10 -right-20 w-72 h-72 rounded-full bg-acid blur-[120px] opacity-40" />
        <div className="container grid lg:grid-cols-2 gap-10 items-center py-16 lg:py-24 relative">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-acid text-ink px-4 py-1.5 font-display uppercase text-xs tracking-widest mb-6">
              <Icon name="Sparkles" size={14} /> ЧЕКИ {city.name.toUpperCase()} · ОФИЦИАЛЬНО
            </div>
            <h1 className="font-display font-700 uppercase leading-[0.9] text-6xl md:text-8xl mb-6">
              Гостиничные<br />
              <span className="text-electric">чеки</span><br />
              <span className="text-red-600">{city.nameIn}</span>
            </h1>
            <p className="text-lg max-w-md mb-8 text-ink/70">
              Чеки гостиницы {city.nameIn} — со всеми печатями, подписями и реквизитами отеля. Законно, по форме Госстандарта.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-ink hover:bg-electric text-white rounded-none h-12 px-8 font-display uppercase tracking-wide">
                <a href="#order">Оформить заказ</a>
              </Button>
              <Button asChild variant="outline" className="border-2 border-ink rounded-none h-12 px-8 font-display uppercase tracking-wide hover:bg-acid">
                <a href="#services">Наш каталог</a>
              </Button>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <div className="absolute -inset-4 border-2 border-electric rotate-3" />
            <img src={city.img} alt={`Гостиничные чеки ${city.nameIn}`} className="relative w-full object-cover border-2 border-ink animate-float" />
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-electric text-white py-3 overflow-hidden border-b-2 border-ink">
        <div className="flex whitespace-nowrap animate-marquee font-display uppercase text-lg tracking-widest">
          {Array(2).fill(0).map((_, i) => (
            <span key={i} className="flex">
              {['Печати', 'Подписи', 'Реквизиты', 'Госстандарт', 'Минфин РФ', 'Экспресс-доставка'].map((t) => (
                <span key={t} className="mx-6 flex items-center gap-6">{t} <Icon name="Asterisk" size={18} className="text-acid" /></span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* SEO text */}
      <section className="container py-16">
        <div className="max-w-4xl">
          <h2 className="font-display font-700 uppercase text-3xl mb-6">Гостиничные чеки {city.nameIn} — отчётные документы о проживании</h2>
          <div className="prose prose-sm text-ink/70 space-y-4 leading-relaxed">
            <p>Если вы находитесь в командировке {city.nameIn} и вам нужны <strong>гостиничные чеки</strong> для авансового отчёта — мы поможем. Наша компания изготавливает <strong>официальные отчётные документы о проживании</strong> от любой гостиницы России и СНГ.</p>
            <p>Все документы оформляются строго по форме Госстандарта, утверждённой приказом Министерства финансов РФ. На чеках проставляются все необходимые печати, подписи и реквизиты отеля. Бухгалтерия вашей компании сможет в любой момент сделать запрос в гостиницу и получить подтверждение.</p>
            <p><strong>Чеки за проживание {city.nameIn}</strong> необходимы командированным сотрудникам для возмещения расходов. Нередко документы теряются, не выдаются гостиницей или требуются постфактум — именно для таких случаев мы и работаем. Звоните: <a href="tel:+79184641800" className="text-electric font-semibold">+7 (918) 464-18-00</a>.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CityHero;
