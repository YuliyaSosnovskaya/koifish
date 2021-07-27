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

export const MENU_ITEMS_HOT = {
  '1hot': {
    title: 'Цунами',
    description:'Лосось, креветка, курица, творожный сыр, огурец, спайси соус, сыр пармезан, кунжут, рис, нори',
    img: '/hot-img/hot1.jpg',
    price: 14.00,
  },
  '2hot': {
    title: 'Камикадзе',
    description:'"Снежный краб", творожный сыр, огурец, спайси соус, кунжут, сыр пармезан, рис, нори',
    img: '/hot-img/hot2.jpg',
    price: 11.50,
  },
  '3hot': {
    title: 'Вулкан',
    description:'Угорь, творожный сыр, спайси соус, огурец, сыр пармезан, кунжут, рис, нори',
    img: '/hot-img/hot3.jpg',
    price: 15.10,
  },
  '4hot': {
    title: 'Фудзияма',
    description:'Тунец, икра летучей рыбы, авокадо, огурец, спайси соус, сыр пармезан, рис, нори',
    img: '/hot-img/hot4.jpg',
    price: 13.90,
  },
  '5hot': {
    title: 'Филадельфия хот',
    description:'Лосось, творожный сыр, огурец, спайси соус, сыр пармезан, рис, нори',
    img: '/hot-img/hot5.jpg',
    price: 14.00,
  },
};


const MENU_ITEMS_SMALL = {
  '1small': {
    title: 'Ролл лосось',
    description:'Лосось, рис, нори',
    img: '/small-img/small1.jpg',
    price: 4.90,
  },
  '2small': {
    title: 'Ролл креветка',
    description:'Креветка, рис, нори',
    img: '/small-img/small2.jpg',
    price: 7.50,
  },
  '3small': {
    title: 'Ролл огурец',
    description:'Огурец, рис, нори, кунжут',
    img: '/small-img/small3.jpg',
    price: 4.10,
  },
  '4small': {
    title: 'Ролл чука',
    description:'Чука салат, рис, нори',
    img: '/small-img/small4.jpg',
    price: 9.90,
  },
  '5small': {
    title: 'Острый ролл креветка',
    description:'Креветка, лист салата, спайси соус, рис, нори',
    img: '/small-img/small5.jpg',
    price: 7.50,
  },
  '6small': {
    title: 'Сливочный ролл креветка',
    description:'Креветка, творожный сыр, рис, нори',
    img: '/small-img/small6.jpg',
    price: 14.00,
  },
};

const MENU_ITEMS_BIG = {
  '1big': {
    title: 'Хьюстон',
    description:'Угорь, креветка, огурец, "Снежный краб", стружка тунца, рис, нори',
    img: '/big-img/big1.jpg',
    price: 15.00,
  },
  '2big': {
    title: 'Саванна',
    description:'Лосось, "снежный краб", авокадо, икра летучей рыбы, рис, нори',
    img: '/big-img/big2.jpg',
    price: 10.50,
  },
  '3big': {
    title: 'Инари',
    description:'Лосось, творожный сыр, чука, лист салата, кешью, рис, нори',
    img: '/big-img/big3.jpg',
    price: 11.10,
  },
  '4big': {
    title: 'Фудзияма',
    description:'Тунец, икра летучей рыбы, авокадо, огурец, спайси соус, сыр пармезан, рис, нори',
    img: '/big-img/big6.jpg',
    price: 13.90,
  },
  '5big': {
    title: 'Филадельфия хот',
    description:'Лосось, творожный сыр, огурец, спайси соус, сыр пармезан, рис, нори',
    img: '/big-img/big5.jpg',
    price: 12.00,
  },
};

const MENU_ITEMS_DRINKS = {
  '1d': {
    title: 'Coca-Cola',
    description:'Напиток безалкогольный газированный «КОКА-КОЛА»',
    img: '/drinks/cola.jpg',
    price: 2.50,
  },
  '2d': {
    title: 'Fanta Orange',
    description:'Напиток безалкогольный газированный «ФАНТА» Апельсин',
    img: '/drinks/fants.jpg',
    price: 2.50,
  },
  '3d': {
    title: 'Sprite',
    description:'Напиток безалкогольный газированный «СПРАЙТ» ',
    img: '/drinks/sprite.jpg',
    price: 2.50,
  },
  '4d': {
    title: 'Burn Intense Energy',
    description:'Энергетический напиток Берн',
    img: '/drinks/burn.jpg',
    price: 2.90,
  },
};

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