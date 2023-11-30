import { createModal } from './helpers/createModal';
import { common } from './common';
import { createMarkup } from './helpers/createMarkup';
import { instruments } from './helpers/instruments';

import 'basiclightbox/dist/basicLightbox.min.css';

// выносим ключи в отдельные переменные (константы)
const KEY_FAVORITE = 'favorite';
const KEY_CART = 'cart';

const search = document.querySelector('.js-search');
const list = document.querySelector('.js-list');

const favoriteArr = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];
const cartArr = JSON.parse(localStorage.getItem(common.KEY_CART)) ?? [];

list.addEventListener('click', onClick);
createMarkup(instruments, list);

function onClick(event) {
  // скинуть нативное поведение тега <a>
  event.preventDefault();
  if (event.target.classList.contains('js-info')) {
    // находим первого родителя с классом js-card
    const product = findProduct(event.target);
    createModal(product);
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
