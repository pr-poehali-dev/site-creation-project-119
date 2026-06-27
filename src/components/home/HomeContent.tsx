import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { cities } from '@/data/cities';

const services = [
  { icon: 'Hotel', title: 'Гостиничные чеки', desc: 'Со всеми печатями, подписями и реквизитами отеля', img: 'https://cdn.poehali.dev/projects/28c1b702-4327-4451-acb6-c0c2c2ba917e/files/899d90d0-40bf-4fa5-92fe-479f5e0dd529.jpg' },
  { icon: 'Receipt', title: 'Кассовые чеки', desc: 'Отчётные документы по форме Госстандарта', img: 'https://cdn.poehali.dev/projects/28c1b702-4327-4451-acb6-c0c2c2ba917e/files/7be50e11-801c-4bc1-b643-05355193cc59.jpg' },
  { icon: 'UtensilsCrossed', title: 'Ресторанные чеки', desc: 'Подтверждение расходов на питание в командировке', img: 'https://cdn.poehali.dev/projects/28c1b702-4327-4451-acb6-c0c2c2ba917e/files/a4b34cfd-6d49-45b8-8596-4b2e6252f601.jpg' },
  { icon: 'Fuel', title: 'Чеки АЗС', desc: 'Документы на топливо для авансового отчёта', img: 'https://cdn.poehali.dev/projects/28c1b702-4327-4451-acb6-c0c2c2ba917e/files/bbcc149a-573d-40eb-843e-d79fda601d9b.jpg' },
  { icon: 'FileText', title: 'Счета-фактуры', desc: 'Закрывающие документы для бухгалтерии', img: 'https://cdn.poehali.dev/projects/28c1b702-4327-4451-acb6-c0c2c2ba917e/files/703727ce-9c72-432d-b7d3-f6839a0e49a5.jpg' },
  { icon: 'Hammer', title: 'Стройматериалы', desc: 'Чеки и акты выполненных работ', img: 'https://cdn.poehali.dev/projects/28c1b702-4327-4451-acb6-c0c2c2ba917e/files/76b33621-1bb6-4d65-bcc9-7a34cfcea8ee.jpg' },
];

const steps = [
  { n: '01', title: 'Связываетесь с нами', desc: 'По телефону, почте или через форму на сайте.' },
  { n: '02', title: 'Бесплатная консультация', desc: 'Оператор подробно ответит на все вопросы.' },
  { n: '03', title: 'Оформляете заказ', desc: 'Помогаем оформить и сопровождаем до сдачи работ.' },
  { n: '04', title: 'Изготовление', desc: 'Вносите предоплату — делаем документ в кратчайшие сроки.' },
  { n: '05', title: 'Проверка и оплата', desc: 'Получаете документы на email и оплачиваете заказ.' },
  { n: '06', title: 'Отправка', desc: 'Доставляем заказ экспресс-доставкой по всей России.' },
];

const advantages = [
  { icon: 'ShieldCheck', title: 'Официально и законно', desc: 'Документы по форме Госстандарта, утверждённой приказом Минфина РФ.' },
  { icon: 'Stamp', title: 'Все печати и реквизиты', desc: 'Бухгалтерия сможет сделать запрос в гостиницу и получить подтверждение.' },
  { icon: 'Map', title: 'Любая гостиница России и СНГ', desc: 'Подберём оптимальный отель под ваши пожелания и бюджет.' },
  { icon: 'Zap', title: 'Быстрое изготовление', desc: 'Делаем документ в кратчайшие сроки и отправляем экспресс-доставкой.' },
];

const blog = [
  { tag: 'Командировки', title: 'Зачем нужны гостиничные чеки', desc: 'Компания обязана возмещать затраты сотрудника в командировке. Чеки — это отчётный документ.' },
  { tag: 'Форс-мажор', title: 'Что делать, если потеряли чек', desc: 'Восстановить документ в отеле получается не всегда — рассказываем про оптимальный вариант.' },
  { tag: 'Цены', title: 'От чего зависит стоимость', desc: 'Индивидуальный расчёт по цели, выбранной гостинице и срокам с момента утери.' },
];

const EMAIL_URL = 'https://functions.poehali.dev/c20e61cd-6d1d-488b-8ae0-5ff678e6ac49';

const HomeContent = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'error'>('idle');
  const [activeService, setActiveService] = useState<typeof services[0] | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(EMAIL_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('ok');
        setForm({ name: '', phone: '', email: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      {/* Advantages */}
      <section id="about" className="container py-20">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <h2 className="font-display font-700 uppercase text-4xl md:text-6xl leading-none">
            Почему<br /><span className="text-stroke">мы</span>
          </h2>
          <p className="max-w-sm text-ink/60">Подходим к каждому клиенту индивидуально и гарантируем достоверность каждого документа.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-ink">
          {advantages.map((a, i) => (
            <div key={a.title} className={`p-8 border-ink ${i < 3 ? 'lg:border-r-2' : ''} ${i < 2 ? 'md:border-r-2' : ''} border-b-2 lg:border-b-0 hover:bg-acid transition-colors group`}>
              <Icon name={a.icon} size={36} className="text-electric group-hover:text-ink mb-5" />
              <h3 className="font-display uppercase text-lg mb-2">{a.title}</h3>
              <p className="text-sm text-ink/60 group-hover:text-ink/80">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-gray-100 text-ink py-20 grain">
        <div className="container">
          <div className="inline-flex items-center gap-2 bg-acid text-ink px-4 py-1.5 font-display uppercase text-xs tracking-widest mb-6">
            <Icon name="LayoutGrid" size={14} /> Каталог услуг
          </div>
          <h2 className="font-display font-700 uppercase text-4xl md:text-6xl mb-12">Что мы делаем</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <Card key={s.title} onClick={() => setActiveService(s)} className="bg-white border-2 border-ink/10 rounded-none overflow-hidden hover:border-electric hover:-translate-y-1 transition-all group cursor-pointer">
                <div className="p-7">
                  <div className="flex items-center justify-between mb-3">
                    <Icon name={s.icon} size={26} className="text-electric" />
                    <Icon name="Expand" size={20} className="text-ink/20 group-hover:text-electric transition-colors" />
                  </div>
                  <h3 className="font-display uppercase text-xl mb-2 text-ink">{s.title}</h3>
                  <p className="text-sm text-ink/50">{s.desc}</p>
                </div>
              </Card>
            ))}
          </div>

          <Dialog open={!!activeService} onOpenChange={() => setActiveService(null)}>
            <DialogContent className="max-w-lg p-0 rounded-none border-2 border-ink overflow-hidden">
              {activeService && (
                <>
                  <img src={activeService.img} alt={activeService.title} className="w-full object-cover max-h-80" />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon name={activeService.icon} size={24} className="text-electric" />
                      <h3 className="font-display uppercase text-xl">{activeService.title}</h3>
                    </div>
                    <p className="text-ink/60">{activeService.desc}</p>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Steps */}
      <section id="steps" className="container py-20">
        <h2 className="font-display font-700 uppercase text-4xl md:text-6xl mb-12">Как мы работаем</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink border-2 border-ink">
          {steps.map((s) => (
            <div key={s.n} className="bg-[#FAF9F2] p-8 hover:bg-acid transition-colors">
              <div className="font-display text-5xl font-700 text-electric mb-4">{s.n}</div>
              <h3 className="font-display uppercase text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-ink/60">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Order form */}
      <section id="order" className="bg-electric text-white py-20 grain border-y-2 border-ink">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display font-700 uppercase text-4xl md:text-6xl leading-none mb-6">
              Оформить<br /><span className="text-acid">заказ</span>
            </h2>
            <p className="text-white/80 max-w-md mb-8">
              Заполните контактные данные — и мы свяжемся с вами в течение 15 минут для бесплатной консультации.
            </p>
            <div className="space-y-3 font-display uppercase text-sm tracking-wide">
              <a href="tel:+79184641800" className="flex items-center gap-3"><Icon name="Phone" size={18} className="text-acid" /> +7 (918) 464-18-00</a>
              <a href="mailto:6456609@list.ru" className="flex items-center gap-3"><Icon name="Mail" size={18} className="text-acid" /> 6456609@list.ru</a>
              <span className="flex items-center gap-3"><Icon name="MapPin" size={18} className="text-acid" /> г.Сочи, ул.Горького 56А</span>
            </div>
          </div>
          <form onSubmit={submit} className="bg-[#FAF9F2] text-ink p-8 border-2 border-ink">
            <div className="space-y-4">
              <div>
                <label className="font-display uppercase text-xs tracking-wide">Ваше имя *</label>
                <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="rounded-none border-2 border-ink mt-1 h-12" placeholder="Иван" />
              </div>
              <div>
                <label className="font-display uppercase text-xs tracking-wide">Ваш телефон *</label>
                <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="rounded-none border-2 border-ink mt-1 h-12" placeholder="+7 ___ ___ __ __" />
              </div>
              <div>
                <label className="font-display uppercase text-xs tracking-wide">Ваш email</label>
                <Input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="rounded-none border-2 border-ink mt-1 h-12" placeholder="mail@example.com" />
              </div>
              <Button type="submit" disabled={status === 'loading' || status === 'ok'} className="w-full bg-ink hover:bg-electric text-white rounded-none h-12 font-display uppercase tracking-wide disabled:opacity-60">
                {status === 'loading' ? 'Отправляем...' : status === 'ok' ? 'Заявка отправлена ✓' : 'Отправить'}
              </Button>
              {status === 'ok' && <p className="text-sm text-green-700 font-display">Мы свяжемся с вами в течение 15 минут!</p>}
              {status === 'error' && <p className="text-sm text-red-600 font-display">Ошибка отправки. Позвоните нам напрямую.</p>}
              <p className="text-xs text-ink/50">Нажимая кнопку, вы соглашаетесь на обработку персональных данных.</p>
            </div>
          </form>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="container py-20">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <h2 className="font-display font-700 uppercase text-4xl md:text-6xl">Блог</h2>
          <a href="#" className="font-display uppercase text-sm tracking-wide flex items-center gap-2 hover:text-electric">Все статьи <Icon name="ArrowRight" size={16} /></a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {blog.map((b) => (
            <article key={b.title} className="border-2 border-ink p-7 hover:bg-acid transition-colors group cursor-pointer">
              <span className="inline-block bg-electric text-white px-3 py-1 font-display uppercase text-xs tracking-wide mb-5">{b.tag}</span>
              <h3 className="font-display uppercase text-xl mb-3">{b.title}</h3>
              <p className="text-sm text-ink/60 mb-5">{b.desc}</p>
              <span className="font-display uppercase text-sm flex items-center gap-2 group-hover:gap-3 transition-all">Читать <Icon name="ArrowUpRight" size={16} /></span>
            </article>
          ))}
        </div>
      </section>

      {/* Delivery */}
      <section id="delivery" className="bg-ink text-white py-20 grain">
        <div className="container grid md:grid-cols-3 gap-8">
          {[
            { icon: 'Truck', title: 'Доставка', desc: 'Экспресс-доставка готовых документов по всей России.' },
            { icon: 'Mail', title: 'Проверка по email', desc: 'Сначала присылаем документы на проверку, оплата — после.' },
            { icon: 'CreditCard', title: 'Удобная оплата', desc: 'Предоплата за изготовление, остаток после проверки заказа.' },
          ].map((d) => (
            <div key={d.title}>
              <Icon name={d.icon} size={40} className="text-acid mb-5" />
              <h3 className="font-display uppercase text-2xl mb-3">{d.title}</h3>
              <p className="text-white/50">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cities */}
      <section className="container py-20">
        <h2 className="font-display font-700 uppercase text-3xl md:text-5xl mb-8">Работаем по Краснодарскому краю и регионам РФ</h2>
        <div className="flex flex-wrap gap-3">
          {cities.map((c) => (
            <a
              key={c.slug}
              href={`/city/${c.slug}`}
              target="_blank"
              rel="noreferrer"
              className="border-2 border-ink px-4 py-2 font-display uppercase text-sm hover:bg-electric hover:text-white hover:border-electric transition-colors"
            >
              {c.name}
            </a>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 border-y-2 border-ink py-20">
        <div className="container">
          <h2 className="font-display font-700 uppercase text-4xl md:text-5xl mb-12">Частые вопросы</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { q: 'Как получить гостиничные чеки в Сочи?', a: 'Позвоните нам или заполните форму на сайте. Мы изготовим официальные гостиничные чеки со всеми печатями и реквизитами по форме Госстандарта Минфина РФ и вышлем на email для проверки.' },
              { q: 'Законно ли это?', a: 'Да. Документы оформляются от реальных гостиниц по утверждённой форме. Бухгалтерия вашей компании может в любой момент сделать запрос в гостиницу и получить подтверждение проживания.' },
              { q: 'Сколько времени занимает изготовление?', a: 'От нескольких часов до 1 рабочего дня. После проверки документы отправляем экспресс-доставкой по всей России.' },
              { q: 'Для каких гостиниц можно оформить чеки?', a: 'Для любой гостиницы России и стран СНГ. Подберём оптимальный вариант под вашу ценовую категорию и пожелания.' },
              { q: 'Что входит в отчётные документы о проживании?', a: 'Гостиничный чек по форме 3-Г, кассовый чек или квитанция, все печати, подписи и реквизиты отеля. Бухгалтерия примет без вопросов.' },
              { q: 'Как происходит оплата?', a: 'Предоплата за изготовление, остаток — после проверки готовых документов на email. Никаких скрытых платежей.' },
            ].map((f) => (
              <div key={f.q} className="border-2 border-ink p-7 hover:bg-acid transition-colors group">
                <h3 className="font-display uppercase text-lg mb-3 flex items-start gap-3">
                  <span className="text-electric group-hover:text-ink">Q</span> {f.q}
                </h3>
                <p className="text-ink/60 group-hover:text-ink/80 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeContent;
