// импорт с библиотеки
import * as basicLightbox from 'basiclightbox'
// ссылка на стили библиотеки
import 'basiclightbox/dist/basicLightbox.min.css';

const instruments = [
    {
        id: 1,
        img: 'https://content2.rozetka.com.ua/goods/images/big/34285641.jpg',
        name: 'Drill',
        description: 'Fine Drill',
        price: 5000,
    },
    {
        id: 2,
        img: 'https://content.rozetka.com.ua/goods/images/big/4841990.jpg',
        name: 'Drill',
        description: 'Good Drill',
        price: 7000,
    },    
    {
        id: 3,
        img: 'https://content.rozetka.com.ua/goods/images/big/4870786.jpg',
        name: 'Drill',
        description: 'Better Drill',
        price: 8000,
    },    
    {
        id: 4,
        img: 'https://content.rozetka.com.ua/goods/images/big/59350912.jpg',
        name: 'Drill',
        description: 'Best Drill',
        price: 10000,
    },
]

const search = document.querySelector('.js-search')
const list = document.querySelector('.js-list')

function createMarkup(arr) {
    const markup = arr.map(
        ({ id, img, name }) => `<li data-id="${id}" class="js-card">
    <img src="${img}" alt="${name}" width="300">
    <h2>${name}</h2>
    <p ><a class="js-info" href="#">More...</a></p>
    <div>
      <button>Add to favorite</button>
      <button>Add to cart</button>
    </div>
  </li>`).join('')

  list.innerHTML = markup;
}



list.addEventListener('click', onClick)

// скинуть нативное поведение тега <a>
function onClick(event) {
    event.preventDefault()
    if(event.target.classList.contains('js-info')) {
        // находим первого отца с классом js-card
    const { id } = event.target.closest('.js-card').dataset;
    const product = findProduct(Number(id))

    const instance = basicLightbox.create(`<div class="modal">
    <img src="${product.img}" alt="${product.name}" width="200">
    <h2>${product.name}</h2>
    <h3>${product.price} грн</h3>
    <p>${product.description}</p>
    <div>
      <button>Add to favorite</button>
      <button>Add to cart</button>
    </div>
  </div>
`);

    instance.show();
    }
}

createMarkup(instruments)

function findProduct(productId) {
    // поиск элемента по совпадению
    return instruments.find(({id}) => id === productId)
}

// делаем модалку