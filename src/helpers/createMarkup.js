// создан для того, чтобы не дублировать функцию createMarkup (не дублировать рендер разметки)

function createMarkup(arr, list) {
  let markup;
  if (arr.length) {
    markup = arr
      .map(
        ({ id, img, name }) => `<li data-id="${id}" class="js-card">
      <img src="${img}" alt="${name}" width="300">
      <h2>${name}</h2>
      <p ><a class="js-info" href="#">More...</a></p>
      <div>
      <button class="js-favorite">Add to favorite</button>
      <button class="js-cart">Add to cart</button>
      </div>
    </li>`
      )
      .join('');
  } else {
    markup = `<li>
      <img src="https://scontent-iev1-1.xx.fbcdn.net/v/t39.30808-6/326419175_880270689760334_964576055019721526_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=R3glM-pUbiEAX_Ex3wQ&_nc_ht=scontent-iev1-1.xx&oh=00_AfDV0FbEvkKNzD0PlIrOhUm5rfOyO0UeQ5JFcIz5E_yQ_A&oe=656E2D9E" alt="404" width="200">
    </li>`;
  }
  list.innerHTML = markup;
}

export { createMarkup };
