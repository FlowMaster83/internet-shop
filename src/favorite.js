import { common } from "./common";
import { createMarkup } from './helpers/createMarkup';
import { createModal } from "./helpers/createModal";
import { instruments } from './helpers/instruments';

import 'basiclightbox/dist/basicLightbox.min.css';

const list = document.querySelector('.js-list');
const favorite = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];

createMarkup(favorite, list)

list.addEventListener('click', onClick)

function onClick(event) {
  event.preventDefault();
  if (event.target.classList.contains('js-info')) {
    // находим первого родителя с классом js-card
    const product = findProduct(event.target);
    createModal(product);
  }
}

function findProduct(element) {
  const productId = Number(element.closest('.js-card').dataset.id);
  // поиск элемента по совпадению
  return instruments.find(({ id }) => id === productId);
}