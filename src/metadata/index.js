export const MENU_LINKS = [
  {
    title: 'Маленькие роллы',
    to: '/catalog/small-rolly',
    img: '/menu-images/mainsusi2.jpg'
  },
  {
    title: 'Большие роллы',
    to: '/catalog/big-rolly',
    img: '/menu-images/mainsusi2.jpg'
  },
  {
    title: 'Запеченные роллы',
    to: '/catalog/hot-rolly',
    img: '/menu-images/mainsusi2.jpg'
  },
  {
    title: 'Напитки',
    to: '/catalog/drinks',
    img: '/menu-images/mainsusi2.jpg'
  },
 
];

const MENU_ITEMS_HOT = [
  {
    title: 'Цунами',
    description:'Лосось, креветка, курица, творожный сыр, огурец, спайси соус, сыр пармезан, кунжут, рис, нори',
    img: '/hot-img/hot1.jpg',
    prices: [{price: 10.00, amount: 6}, {price: 12.00, amount: 8}],
    price: 14.00,

  },
  {
    title: 'Камикадзе',
    description:'"Снежный краб", творожный сыр, огурец, спайси соус, кунжут, сыр пармезан, рис, нори',
    img: '/hot-img/hot2.jpg',
    prices: [{price: 10.00, amount: 6}, {price: 12.00, amount: 8}],
    price: 11.50,

  },
  {
    title: 'Вулкан',
    description:'Угорь, творожный сыр, спайси соус, огурец, сыр пармезан, кунжут, рис, нори',
    img: '/hot-img/hot3.jpg',
    prices: [{price: 10.00, amount: 6}, {price: 12.00, amount: 8}],
    price: 15.10,

  },
  {
    title: 'Фудзияма',
    description:'Тунец, икра летучей рыбы, авокадо, огурец, спайси соус, сыр пармезан, рис, нори',
    img: '/hot-img/hot4.jpg',
    prices: [{price: 10.00, amount: 6}, {price: 12.00, amount: 8}],
    price: 13.90,

  },
  {
    title: 'Филадельфия хот',
    description:'Лосось, творожный сыр, огурец, спайси соус, сыр пармезан, рис, нори',
    img: '/hot-img/hot5.jpg',
    prices: [{price: 10.00, amount: 6}, {price: 12.00, amount: 8}],
    price: 14.00,

  },
]


const MENU_ITEMS_SMALL = [
  {
    title: 'Ролл лосось',
    description:'Лосось, рис, нори',
    img: '/small-img/small1.jpg',
    prices: [{price: 10.00, amount: 6}, {price: 12.00, amount: 8}],
    price: 4.90,

  },
  {
    title: 'Ролл креветка',
    description:'Креветка, рис, нори',
    img: '/small-img/small2.jpg',
    prices: [{price: 10.00, amount: 6}, {price: 12.00, amount: 8}],
    price: 7.50,

  },
  {
    title: 'Ролл огурец',
    description:'Огурец, рис, нори, кунжут',
    img: '/small-img/small3.jpg',
    prices: [{price: 10.00, amount: 6}, {price: 12.00, amount: 8}],
    price: 4.10,

  },
  {
    title: 'Ролл чука',
    description:'Чука салат, рис, нори',
    img: '/small-img/small4.jpg',
    prices: [{price: 10.00, amount: 6}, {price: 12.00, amount: 8}],
    price: 9.90,

  },
  {
    title: 'Острый ролл креветка',
    description:'Креветка, лист салата, спайси соус, рис, нори',
    img: '/small-img/small5.jpg',
    prices: [{price: 10.00, amount: 6}, {price: 12.00, amount: 8}],
    price: 7.50,

  },
  {
    title: 'Сливочный ролл креветка',
    description:'Креветка, творожный сыр, рис, нори',
    img: '/small-img/small6.jpg',
    prices: [{price: 10.00, amount: 6}, {price: 12.00, amount: 8}],
    price: 14.00,

  },
];

const MENU_ITEMS_BIG = [
  {
    title: 'Хьюстон',
    description:'Угорь, креветка, огурец, "Снежный краб", стружка тунца, рис, нори',
    img: '/big-img/big1.jpg',
    prices: [{price: 10.00, amount: 6}, {price: 12.00, amount: 8}],
    price: 15.00,

  },
  {
    title: 'Саванна',
    description:'Лосось, "снежный краб", авокадо, икра летучей рыбы, рис, нори',
    img: '/big-img/big2.jpg',
    prices: [{price: 10.00, amount: 6}, {price: 12.00, amount: 8}],
    price: 10.50,

  },
  {
    title: 'Инари',
    description:'Лосось, творожный сыр, чука, лист салата, кешью, рис, нори',
    img: '/big-img/big3.jpg',
    prices: [{price: 10.00, amount: 6}, {price: 12.00, amount: 8}],
    price: 11.10,

  },
  {
    title: 'Фудзияма',
    description:'Тунец, икра летучей рыбы, авокадо, огурец, спайси соус, сыр пармезан, рис, нори',
    img: '/big-img/big6.jpg',
    prices: [{price: 10.00, amount: 6}, {price: 12.00, amount: 8}],
    price: 13.90,

  },
  {
    title: 'Филадельфия хот',
    description:'Лосось, творожный сыр, огурец, спайси соус, сыр пармезан, рис, нори',
    img: '/big-img/big5.jpg',
    prices: [{price: 10.00, amount: 6}, {price: 12.00, amount: 8}],
    price: 12.00,

  },
];

const MENU_ITEMS_DRINKS = [
  {
    title: 'Coca-Cola',
    description:'Напиток безалкогольный газированный «КОКА-КОЛА»',
    img: '/drinks/cola.jpg',
    prices: [{price: 10.00, amount: 6}, {price: 12.00, amount: 8}],
    price: 2.50,

  },
  {
    title: 'Fanta Orange',
    description:'Напиток безалкогольный газированный «ФАНТА» Апельсин',
    img: '/drinks/fants.jpg',
    prices: [{price: 10.00, amount: 6}, {price: 12.00, amount: 8}],
    price: 2.50,

  },
  {
    title: 'Sprite',
    description:'Напиток безалкогольный газированный «СПРАЙТ» ',
    img: '/drinks/sprite.jpg',
    prices: [{price: 10.00, amount: 6}, {price: 12.00, amount: 8}],
    price: 2.50,

  },
  {
    title: 'Burn Intense Energy',
    description:'Энергетический напиток Берн',
    img: '/drinks/burn.jpg',
    prices: [{price: 10.00, amount: 6}, {price: 12.00, amount: 8}],
    price: 2.90,

  },
];

export const MENU_ITEMS = {
  'small-rolly': {
    items: MENU_ITEMS_SMALL,
    pageTitle: 'Маленькие Ролы' 
  },
  'big-rolly': {
    items: MENU_ITEMS_BIG,
    pageTitle: 'Большие Ролы' 
  },
  'hot-rolly': {
    items: MENU_ITEMS_HOT,
    pageTitle: 'Запеченные Ролы' 
  },
  'drinks': {
    items: MENU_ITEMS_DRINKS,
    pageTitle: 'Напитки' 
  }
};