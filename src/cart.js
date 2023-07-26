let label = document.getElementById('label');
let ShoppingCart = document.getElementById('shopping-cart');
let basket = JSON.parse(localStorage.getItem("data")) || [];

//! calculation cart function
// goal - run function when update(); function is triggered
let calculation = () => {
  let cartIcon = document.getElementById("cartAmmount"); // selecting icon id 
   cartIcon.innerHTML = basket.map((x) => x.item).reduce((x,y) => x + y, 0) 
  // .reduce to add all the numbers in array. Using argument x,y (next,previous) number in array [3,4,3,6] (total 16)
  // 0 is default number where we want to start the calcqqulation
  };

calculation(); // run for local storage cart icon item quanity

let generateCartItems = () => {
  if (basket.length !== 0) {
  } else {
    ShoppingCart.innerHTML = ` `;
    label.innerHTML = `
    <h2>Cart is Empty</h2>
      <a href="index.html">
      <button class="HomeBtn"> Back to home</button>
      </a>
    `;
  }
};

generateCartItems();
