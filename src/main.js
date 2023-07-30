//! ids from html !
let shop = document.getElementById("shop");

//! basket basket babababa basket
let basket = JSON.parse(localStorage.getItem("data")) || [];

// basket above push function // getItem, retrieving the KEY, "data"
// || 'R' statement, if we have local data it will get it it, if we dont the basket will be an empty array */

//! shop 
let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => { 
      let { id, name, price, desc, img } = x;
      let search = basket.find((x) => x.id === id) || []; 
      return `
    <div id=product-id-${id} class="item">
        <img width="220" src=${img} alt="">
        <div class="details">
          <h3>${name}</h3>
          <p>${desc}</p>
          <div class="price-quantity">
            <h2>$ ${price} </h2>
            <div class="buttons">
              <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
              <div id=${id} class="quantity">
              ${search.item === undefined ? 0 : search.item}
              </div>
              <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
      </div>
    `;
    })
  .join("")); 
};

generateShop(); 

// .map() will run every object(4) ONE time(x)
// deconstruct method, ${x} to avoid manually changing (x.id),(x.name)
// problem - refreshing page keeps data but will reset HTML display 
// search basket for specefic id and item quantity, if id already exists, display item quantity in HTML
// if we dont find anything - return an empty array
// .join("") removes comma text from array wat?

//! increment function 
let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);
  
  if (search === undefined) {
    basket.push({ 
      id: selectedItem.id,
      item: 1,
    });
  } else {  
    search.item += 1; 
  }
  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
};

// increment goal - onClick the (add icon will select unique id of selected item 
// searching the specific item you selected to see if it actually exists
// .find to see if object actually exists or not. using (x) for argument 
// if else statement goal - if search is undefined (item not found in basket) then it will push to basket
// .push selectedItem into basket // if we do find item in basket // adds more of same item
// 'data' is a 'key', JSON.stringify for ALL the data/objects in basket
// run update function with unique selectedItem id attatched from generateShop

//! decrement function
let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) return; 
  else if (search.item === 0) return; 
  else {
    search.item -= 1; 
  }

  update(selectedItem.id); 
  basket = basket.filter((x) => x.item !== 0); 
  localStorage.setItem("data", JSON.stringify(basket));
};

// if (search === undefined) return;, prevents console error on decrement if basket is empty
// changed search.item, and undefined to 0, prevents item quantity going negative // changed + to -
// problem - item quantity is 0 but item data in basket
// run update function with unique selectedItem id from generateShop
// basket.filter(x) targets all objects in basket array
// x.item Selecting ones with item quanity 0 and removing them from basket and returning the rest x.item !== (not equal)

//! update quantity function
let update = (id) => { 
  let search = basket.find((x) => x.id === id);

  document.getElementById(id).innerHTML = search.item;
  
  calculation();
};

// goal - run update function every time we click on plus/minus to update basket quantity, display in HTML
// search function - if and then the unique id exists it will run the update function
// goal - display item quanity in HTML 

//! calculation cart function
let calculation = () => {
  let cartIcon = document.getElementById("cartAmount"); 
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation(); 

// goal - run function when update(); function is triggered
// selecting icon id "cartAmount"  
// .reduce to add all the numbers in array. Using argument x,y (next,previous) number in array [3,4,3,6] (total 16)
// 0 is default number where we want to start the calcqqulation
// run calculation(); for local storage cart icon item quanity


//! comments



