const t=document.querySelector(".js-list");var n;!function(t,n){const a=t.map((({id:t,img:n,name:a})=>`<li data-id="${t}" class="js-card">\n      <img src="${n}" alt="${a}" width="300">\n      <h2>${a}</h2>\n      <p ><a class="js-info" href="#">More...</a></p>\n      <div>\n      <button class="js-favorite">Add to favorite</button>\n      <button class="js-cart">Add to cart</button>\n      </div>\n    </li>`)).join("");n.innerHTML=a}(null!==(n=JSON.parse(localStorage.getItem("favorite")))&&void 0!==n?n:[],t);
//# sourceMappingURL=favorite.a234f4b2.js.map
