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
        ({ id, img, name }) => `<li data-id=${id}>
    <img src="${img}" alt="${name}" width="300">
    <h2>${name}</h2>
    <p class="js-info"><a href="#">More...</a></p>
    <div>
      <button>Add to favorite</button>
      <button>Add to cart</button>
    </div>
  </li>`).join('')

  list.innerHTML = markup;
}

createMarkup(instruments)

list.addEventListener('click', onClick)

function onClick(event) {
    event.preventDefault()
}