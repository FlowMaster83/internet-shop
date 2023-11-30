// импорт с библиотеки
import * as basicLightbox from 'basiclightbox';

function createModal(product) {
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

export { createModal }