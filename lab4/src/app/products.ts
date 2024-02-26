export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: string;
  url: string;
}

export const products = [
  {
    id: 1,
    name: 'Смартфон Apple iPhone 15 Pro Max 256Gb серый',
    price: 1200,
    description: 'Высокопроизводительный смартфон с потрясающей камерой и инновационным дизайном.',
    image: "https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=gallery-medium",
    rating: "10 by 10",  
    url: "https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000"
  },
  {
    id: 2,
    name: 'Смартфон Apple iPhone 13 128Gb Midnight черный',
    price: 699,
    description: 'Apple iPhone 13 128Gb Midnight: стиль, инновации, производительность, качественная камера.',
    image: "https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium",
    rating: "8 by 10",
    url: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000"
  },
  {
    id: 3,
    name: 'Смартфон Xiaomi Redmi 12 4G 8 ГБ/256 ГБ черный',
    price: 130,
    description: 'Xiaomi Redmi 12 4G: доступность, мощность, объем памяти, дизайн.',
    image: "https://resources.cdn-kaspi.kz/img/m/p/h75/hbc/81335343775774.png?format=gallery-medium",
    rating: "4 by 10",
    url: "https://kaspi.kz/shop/p/xiaomi-redmi-12-4g-8-gb-256-gb-chernyi-110918152/?c=750000000"
  },
  {
    id: 4,
    name: 'Смартфон Samsung Galaxy A24 6 ГБ/128 ГБ черный',
    price: 180,
    description: 'Samsung Galaxy A24: стильный дизайн, производительность, достаточный объем памяти, качественные фотоснимки.',
    image: "https://resources.cdn-kaspi.kz/img/m/p/hdc/h12/80750151303198.jpg?format=gallery-medium",
    rating: "6 by 10",
    url: "https://kaspi.kz/shop/p/samsung-galaxy-a24-6-gb-128-gb-chernyi-110343531/?c=750000000"
  },
  {
    id: 5,
    name: 'Смартфон Apple iPhone 11 128Gb Slim Box черный',
    price: 450,
    description: 'Apple iPhone 11 Slim Box: инновации, камера, производительность, стильный дизайн, удобство использования.',
    image: "https://resources.cdn-kaspi.kz/img/m/p/hd8/hac/63897052413982.jpg?format=gallery-medium",
    rating: "7 by 10",
    url: "https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000"
  },
  {
    id: 6,
    name: 'Смартфон Samsung Galaxy A54 5G 8 ГБ/256 ГБ черный',
    price: 350,
    description: 'Samsung Galaxy A54 5G: мощность, объем памяти, быстрая сеть, впечатляющая камера, элегантность.',
    image: "https://resources.cdn-kaspi.kz/img/m/p/h81/h13/80435536887838.jpg?format=gallery-medium",
    rating: "6 by 10",
    url: "https://kaspi.kz/shop/p/samsung-galaxy-a54-5g-8-gb-256-gb-chernyi-110044379/?c=750000000"
  },
  {
    id: 7,
    name: 'Смартфон Samsung Galaxy A03 Core 2 ГБ/32 ГБ',
    price: 299,
    description: 'Больше дисплей, больше возможностей. Расширьте границы доступного с 6.5-дюймовым экраном с V-образным вырезом.',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h15/hf4/52423971995678/samsung-galaxy-a03-core-2-gb-32-gb-bronzovyj-105772530-1.jpg",
    rating: "2 by 10",
    url: "https://kaspi.kz/shop/p/samsung-galaxy-a03-core-2-gb-32-gb-chernyi-103153817/?c=750000000#!/item"
  },
  {
    id: 8,
    name: 'Смартфон Xiaomi Redmi 10C 4 ГБ/128 ГБ ',
    price: 599,
    description: 'Xiaomi Redmi 10C оснащен большим дисплеем с диагональю 6.71 дюйма с защитным стеклом Corning Gorilla Glass, которое защищает экран от царапин и повреждений при падениях. ',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h58/hff/51348549861406/xiaomi-redmi-10c-4-gb-128-gb-zelenyi-104443164-1.jpg",
    rating: "8 by 10",
    url: "https://kaspi.kz/shop/p/xiaomi-redmi-10c-4-gb-128-gb-seryi-104417231/?c=750000000#!/item"
  },
  {
    id: 9,
    name: 'Смартфон Apple iPhone 14 Pro 256Gb',
    price: 1299,
    description: 'голосовое управление, голосовой набор, поддержка nano SIM + eSIM',
    image: "https://resources.cdn-kaspi.kz/img/m/p/h19/h85/64508108931102.jpg?format=gallery-medium",
    rating: "9 by 10",
    url: "https://kaspi.kz/shop/p/apple-iphone-14-pro-256gb-fioletovyi-106363319/?c=750000000#!/item"
  },
  {
    id: 10,
    name: 'Смартфон Xiaomi Redmi 10C 4 ГБ/64 ГБ',
    price: 699,
    description: 'Xiaomi Redmi 10C оснащен большим дисплеем с диагональю 6.71 дюйма с защитным стеклом Corning Gorilla Glass, которое защищает экран от царапин и повреждений при падениях. ',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9f/h3e/49939919699998/xiaomi-redmi-10c-4-gb-64-gb-seryj-104417151-1.jpg",
    rating: "6 by 10",
    url: "https://kaspi.kz/shop/p/xiaomi-redmi-10c-4-gb-64-gb-seryi-104417151/?c=750000000#!/item"
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/