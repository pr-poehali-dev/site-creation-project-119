import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { cities } from '@/data/cities';
import CityHero from '@/components/city/CityHero';
import CityContent from '@/components/city/CityContent';
import CityFooter from '@/components/city/CityFooter';

const CityPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const city = cities.find((c) => c.slug === slug);

  useEffect(() => {
    if (!city) return;
    const title = `Гостиничные чеки ${city.nameIn} — отчётные документы о проживании`;
    const desc = `Гостиничные чеки ${city.nameIn} официально — со всеми печатями, подписями и реквизитами отеля. Отчётные документы о проживании по форме Госстандарта Минфина РФ. Тел: +7 (918) 464-18-00`;

    document.title = title;

    const setMeta = (name: string, content: string, prop = false) => {
      const attr = prop ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) { el = document.createElement('meta'); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute('content', content);
    };

    setMeta('description', desc);
    setMeta('keywords', `гостиничные чеки ${city.name}, чеки ${city.name}, отчётные документы о проживании ${city.name}, чеки за гостиницу ${city.name}, командировка ${city.name}`);
    setMeta('og:title', title, true);
    setMeta('og:description', desc, true);
    setMeta('og:url', `https://cheki-sochi.ru/city/${city.slug}`, true);
    setMeta('og:image', city.img, true);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) { canonical = document.createElement('link'); canonical.setAttribute('rel', 'canonical'); document.head.appendChild(canonical); }
    canonical.href = `https://cheki-sochi.ru/city/${city.slug}`;

    const schema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'LocalBusiness',
          name: `Гостиничные чеки ${city.nameIn}`,
          description: desc,
          telephone: '+79184641800',
          email: '6456609@list.ru',
          address: { '@type': 'PostalAddress', streetAddress: city.address, addressLocality: city.name, addressRegion: 'Краснодарский край', addressCountry: 'RU' },
          url: `https://cheki-sochi.ru/city/${city.slug}`,
        },
        {
          '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: `Как получить гостиничные чеки ${city.nameIn}?`, acceptedAnswer: { '@type': 'Answer', text: `Позвоните нам по телефону +7 (918) 464-18-00 или заполните форму на сайте. Мы изготовим официальные гостиничные чеки ${city.nameIn} со всеми печатями и реквизитами по форме Госстандарта Минфина РФ.` } },
            { '@type': 'Question', name: 'Законно ли это?', acceptedAnswer: { '@type': 'Answer', text: 'Да. Документы оформляются от реальных гостиниц по утверждённой форме Минфина РФ. Бухгалтерия может сделать запрос в гостиницу и получить подтверждение проживания.' } },
            { '@type': 'Question', name: 'Сколько времени занимает изготовление?', acceptedAnswer: { '@type': 'Answer', text: 'От нескольких часов до 1 рабочего дня. После проверки документы отправляем экспресс-доставкой по всей России.' } },
            { '@type': 'Question', name: `Для каких гостиниц ${city.nameIn} можно оформить чеки?`, acceptedAnswer: { '@type': 'Answer', text: `Для любой гостиницы ${city.nameIn}, России и стран СНГ. Подберём оптимальный вариант под вашу ценовую категорию и пожелания.` } },
            { '@type': 'Question', name: 'Что входит в отчётные документы о проживании?', acceptedAnswer: { '@type': 'Answer', text: 'Гостиничный чек по форме 3-Г, кассовый чек или квитанция, все печати, подписи и реквизиты отеля.' } },
          ],
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://cheki-sochi.ru/' },
            { '@type': 'ListItem', position: 2, name: `Гостиничные чеки ${city.nameIn}`, item: `https://cheki-sochi.ru/city/${city.slug}` },
          ],
        },
      ],
    };
    let schemaEl = document.getElementById('city-schema');
    if (!schemaEl) { schemaEl = document.createElement('script'); schemaEl.id = 'city-schema'; schemaEl.setAttribute('type', 'application/ld+json'); document.head.appendChild(schemaEl); }
    schemaEl.textContent = JSON.stringify(schema);

    return () => {
      document.title = 'Гостиничные чеки в Сочи — отчётные документы о проживании | Чеки с подтверждением';
      document.getElementById('city-schema')?.remove();
    };
  }, [city]);

  if (!city) {
    return (
      <div className="min-h-screen flex items-center justify-center font-body">
        <div className="text-center">
          <h1 className="font-display text-4xl mb-4">Город не найден</h1>
          <Link to="/" className="text-electric underline">На главную</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF9F2] text-ink font-body overflow-x-hidden">
      <CityHero city={city} />
      <CityContent city={city} />
      <CityFooter city={city} />
    </div>
  );
};

export default CityPage;
