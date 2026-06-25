export interface CityData {
  slug: string;
  name: string;
  nameIn: string; // в Сочи, в Краснодаре
  address: string;
  busStationAddress: string;
  img: string;
}

export const cities: CityData[] = [
  {
    slug: 'sochi',
    name: 'Сочи',
    nameIn: 'в Сочи',
    address: 'г.Сочи, ул.Горького 56А',
    busStationAddress: 'г. Сочи, ул. Горького, 56А',
    img: 'https://cdn.poehali.dev/projects/28c1b702-4327-4451-acb6-c0c2c2ba917e/files/37c20a5e-e637-4fa0-9efc-df2d23b4019f.jpg',
  },
  {
    slug: 'abakan',
    name: 'Абакан',
    nameIn: 'в Абакане',
    address: 'г.Абакан, ул.Щетинкина 20',
    busStationAddress: 'г. Абакан, ул. Щетинкина, 20',
    img: 'https://cdn.poehali.dev/projects/28c1b702-4327-4451-acb6-c0c2c2ba917e/files/c3ac118f-4ad1-46f3-8f50-349450bfd0f9.jpg',
  },
  {
    slug: 'adler',
    name: 'Адлер',
    nameIn: 'в Адлере',
    address: 'г.Адлер, ул.Ленина 290А',
    busStationAddress: 'г. Сочи, Адлерский район, ул. Ленина, 290А',
    img: 'https://cdn.poehali.dev/projects/28c1b702-4327-4451-acb6-c0c2c2ba917e/files/7d417fd2-064f-4cc1-8a8f-49fe9cf6fbe2.jpg',
  },
  {
    slug: 'anapa',
    name: 'Анапа',
    nameIn: 'в Анапе',
    address: 'г.Анапа, ул.Астраханская 1',
    busStationAddress: 'г. Анапа, ул. Астраханская, 1',
    img: 'https://cdn.poehali.dev/projects/28c1b702-4327-4451-acb6-c0c2c2ba917e/files/3ef48eaa-50c0-4c2f-aed3-5f09f0631030.jpg',
  },
  {
    slug: 'krasnodar',
    name: 'Краснодар',
    nameIn: 'в Краснодаре',
    address: 'г.Краснодар, ул.Привокзальная площадь 1',
    busStationAddress: 'г. Краснодар, Привокзальная площадь, 1',
    img: 'https://cdn.poehali.dev/projects/28c1b702-4327-4451-acb6-c0c2c2ba917e/files/0a9753e8-6218-4601-add0-4fa1003cb1c3.jpg',
  },
  {
    slug: 'tuapse',
    name: 'Туапсе',
    nameIn: 'в Туапсе',
    address: 'г.Туапсе, ул.Сочинская 1',
    busStationAddress: 'г. Туапсе, ул. Сочинская, 1',
    img: 'https://cdn.poehali.dev/projects/28c1b702-4327-4451-acb6-c0c2c2ba917e/files/7d3f66b2-9e5e-4a99-9661-a47a97058bf1.jpg',
  },
  {
    slug: 'gelendzhik',
    name: 'Геленджик',
    nameIn: 'в Геленджике',
    address: 'г.Геленджик, ул.Островского 1',
    busStationAddress: 'г. Геленджик, ул. Островского, 1',
    img: 'https://cdn.poehali.dev/projects/28c1b702-4327-4451-acb6-c0c2c2ba917e/files/71f637b5-f933-4b81-85e6-31b85b895ea1.jpg',
  },
  {
    slug: 'novorossiysk',
    name: 'Новороссийск',
    nameIn: 'в Новороссийске',
    address: 'г.Новороссийск, ул.Железнодорожная 2',
    busStationAddress: 'г. Новороссийск, ул. Железнодорожная, 2',
    img: 'https://cdn.poehali.dev/projects/28c1b702-4327-4451-acb6-c0c2c2ba917e/files/84ce8593-e3d3-4640-9e41-98f0c77db595.jpg',
  },
  {
    slug: 'maykop',
    name: 'Майкоп',
    nameIn: 'в Майкопе',
    address: 'г.Майкоп, ул.Привокзальная 2',
    busStationAddress: 'г. Майкоп, ул. Привокзальная, 2',
    img: 'https://cdn.poehali.dev/projects/28c1b702-4327-4451-acb6-c0c2c2ba917e/files/41bdff1e-f110-4d2d-8944-536baf47a9b9.jpg',
  },
  {
    slug: 'armavir',
    name: 'Армавир',
    nameIn: 'в Армавире',
    address: 'г.Армавир, ул.Кирова 130',
    busStationAddress: 'г. Армавир, ул. Кирова, 130',
    img: 'https://cdn.poehali.dev/projects/28c1b702-4327-4451-acb6-c0c2c2ba917e/files/3eb4c31f-5cd4-441c-a3f8-eeb83dc54ba6.jpg',
  },
  {
    slug: 'rostov',
    name: 'Ростов-на-Дону',
    nameIn: 'в Ростове-на-Дону',
    address: 'г.Ростов-на-Дону, ул.Привокзальная площадь 1',
    busStationAddress: 'г. Ростов-на-Дону, Привокзальная площадь, 1',
    img: 'https://cdn.poehali.dev/projects/28c1b702-4327-4451-acb6-c0c2c2ba917e/files/0bba6365-3480-45da-8e55-cb50369ebebd.jpg',
  },
  {
    slug: 'stavropol',
    name: 'Ставрополь',
    nameIn: 'в Ставрополе',
    address: 'г.Ставрополь, ул.Привокзальная 1',
    busStationAddress: 'г. Ставрополь, ул. Привокзальная, 1',
    img: 'https://cdn.poehali.dev/projects/28c1b702-4327-4451-acb6-c0c2c2ba917e/files/d1658bad-ec0a-4e8e-8292-043bb6988f1f.jpg',
  },
];
