// импорт с библиотеки
import * as basicLightbox from 'basiclightbox';
// ссылка на стили библиотеки
import 'basiclightbox/dist/basicLightbox.min.css';

import { common } from './common';
import { createMarkup } from './helpers/createMarkup';

const instruments = [
  {
    id: 1,
    img: 'https://content2.rozetka.com.ua/goods/images/big/34285641.jpg',
    name: 'Drill RZTK',
    description: 'Fine Drill',
    price: 5000,
  },
  {
    id: 2,
    img: 'https://content.rozetka.com.ua/goods/images/big/4841990.jpg',
    name: 'Drill MAKITA',
    description: 'Good Drill',
    price: 7000,
  },
  {
    id: 3,
    img: 'https://content.rozetka.com.ua/goods/images/big/4870786.jpg',
    name: 'Drill HYUNDAI',
    description: 'Better Drill',
    price: 8000,
  },
  {
    id: 4,
    img: 'https://content.rozetka.com.ua/goods/images/big/59350912.jpg',
    name: 'Drill BOSCH',
    description: 'Best Drill',
    price: 10000,
  },
];

// выносим ключи в отдельные переменные (константы)
const KEY_FAVORITE = 'favorite';
const KEY_CART = 'cart';

const search = document.querySelector('.js-search');
const list = document.querySelector('.js-list');

const favoriteArr = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];
const cartArr = JSON.parse(localStorage.getItem(common.KEY_CART)) ?? [];

list.addEventListener('click', onClick);
createMarkup(instruments, list);

// скинуть нативное поведение тега <a>
function onClick(event) {
  event.preventDefault();
  if (event.target.classList.contains('js-info')) {
    // находим первого отца с классом js-card
    const { id } = event.target.closest('.js-card').dataset;
    const product = findProduct(Number(id));

    const instance = basicLightbox.create(`<div class="modal">
    <img src="${product.img}" alt="${product.name}" width="200">
    <h2>${product.name}</h2>
    <h3>${product.price} грн</h3>
    <p>${product.description}</p>
    <div>
      <button class="js-favorite">Add to favorite</button>
      <button class="js-cart">Add to cart</button>
    </div>
  </div>
`);

    instance.show();
  }

  if (event.target.classList.contains('js-cart')) {
    const product = findProduct(event.target);
    cartArr.push(product);
    // добавляем константы в локальное хранилище
    localStorage.setItem(common.KEY_CART, JSON.stringify(cartArr));
    const inStorage = cartArr.some(({ id }) => id === product.id);

    if (inStorage) {
      return;
    }
  }

  if (event.target.classList.contains('js-favorite')) {
    const product = findProduct(event.target);
    const inStorage = favoriteArr.some(({ id }) => id === product.id);

    if (inStorage) {
      return;
    }

    favoriteArr.push(product);

    // добавляем константы в локальное хранилище
    localStorage.setItem(common.KEY_FAVORITE, JSON.stringify(favoriteArr));
  }
}

function findProduct(element) {
  const productId = Number(element.closest('.js-card').dataset.id);
  // поиск элемента по совпадению
  return instruments.find(({ id }) => id === productId);
}
