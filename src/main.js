//! ids from html 
let shop = document.getElementById('shop');

/* cut and moved to data.js
//! shop items
let shopItemsData = [   // variable = array[] storing objects{}, ex [{},{},{},{}] 
  {   // objects {id, name, price, desc, img}
    id: "yeet",   // unique id
    name: "Casual Shirt",
    price: 45,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    img: "images/img-1.jpg",
  },
  {
    id: "yboiii",
    name: "Office Shirt",
    price: 50,
    desc: "Lorem ipsum dolor  ",
    img: "images/img-2.jpg",
  },
  {
    id: "dawdaw",
    name: "T-Shirt",
    price: 25,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    img: "images/img-3.jpg",
  },
  {
    id: "jaja",
    name: "Mens Suit",
    price: 200,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    img: "images/img-4.jpg",
  }
]; 
*/

//! basket basket babababa basket
// basket above push function 
let basket = JSON.parse(localStorage.getItem("data")) || [];
// getItem, retrieving the KEY, "data"
// || 'R' statement, if we have local data it will get it it, if we dont the basket will be an empty array

//! shop 
  let generateShop = () => { 
  return (shop.innerHTML = shopItemsData.map((x) => { // .map() will run every object(4) ONE time(x)
    // deconstruct method, ${x} to avoid manually changing (x.id),(x.name)
    let { id, name, price, desc, img } = x; 
    // problem - refreshing page keeps data but will reset HTML display 
    // search basket for specefic id and item quantity, if id already exists, display item quantity in HTML
    let search = basket.find((x) => x.id === id) || [] // if we dont find anything - return an empty array
      return `
      <div id=product-id-${id} class="item">    
        <img width="220" src=${img} alt=""> 
        <div class="details">  
          <h3>${name}</h3>  
          <p>${desc}</p>
          <div class="price-quantity"> 
            <h2> $${price} </h2>
            <div class="buttons"> 
              <i onclick="decrement(${id})" class="bi bi-dash-lg"></i> 
              <div id=${id} class="quantity"> ${search.item === undefined ? 0 : search.item}</div> 
              <i onclick="increment(${id})" class="bi bi-plus-lg"></i> 
            </div>
          </div>
        </div> 
      </div>
    `; // TEMPLATE LITERAL 
  })
  .join("")); // .join("") removes comma text from array wat?
}; 
generateShop(); // call/invoke/summon/run/diaper function

//! increment function
// increment goal - onClick the (add icon will select unique id of selected item */
let increment = (id) => { 
  let selectedItem = id;
  // searching the specific item you selected to see if it actually exists
  let search = basket.find((x) => x.id === selectedItem.id); 
  // .find to see if object actually exists or not. using (x) for argument 
  // if else statement goal - if search is undefined (item not found in basket) then it will push to basket
  if (search === undefined) {  
    basket.push({ // .push selectedItem into basket
      id: selectedItem.id,
      item: 1,  
    }); 
    } else {   // if we do find item in basket
      search.item += 1; // adds more of same item
  } 
  // console.log(basket); // log after search/push
  // localStorage.setItem will place data in storange 
  localStorage.setItem("data", JSON.stringify(basket)); // 'data' is a 'key', JSON.stringify for ALL the data/objects in basket
  // run update function with unique selectedItem id attatched from generateShop
    update(selectedItem.id);
};

//! decrement function
let decrement = (id) => { 
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id); 
  
  if (search === undefined) return; // prevents console error on decrement if basket is empty
  else if (search.item === 0) return; // changed search.item, and undefined to 0, prevents i tem quantity going negative
  else {   
    search.item -= 1; // changed + to -
  } 
  // console.log(basket); // log after search/push
  // cut/moved localStorage.setItem("data", JSON.stringify(basket)); // will place data in storange
  // problem - item quantity is 0 but item data in basket
  update(selectedItem.id); // run update function with unique selectedItem id from generateShop 
  basket = basket.filter((x) => x.item !== 0); // basket.filter(x) targets all objects in basket array. 
  // x.item Selecting ones with item quanity 0 and removing them from basket and returning the rest x.item !== (not equal)
  localStorage.setItem("data", JSON.stringify(basket)); // moved below to update data in basket
};

//! update quantity function
// goal - run update function every time we click on plus/minus to update basket quantity, display in HTML
/* example,
  let update = () => {
    console.log("update function is running")
  }; */
let update = (id) => {
  // search function - if and then the unique id exists it will run the update function
  let search = basket.find((x) => x.id === id);
  // console.log(search.item); // will only log item quantity 
  // goal - display item quanity in HTML 
  document.getElementById(id).innerHTML = search.item; 
  calculation();
  // console.log(id);
};

//! calculation cart function
// goal - run function when update(); function is triggered
let calculation = () => {
  let cartIcon = document.getElementById("cartAmmount"); // selecting icon id 
   cartIcon.innerHTML = basket.map((x) => x.item).reduce((x,y) => x + y, 0) 
  // .reduce to add all the numbers in array. Using argument x,y (next,previous) number in array [3,4,3,6] (total 16)
  // 0 is default number where we want to start the calcqqulation
  };

calculation(); // run for local storage cart icon item quanity




/* //! comments
 
wiki 

an 'identifier' is a sequence of characters that identifies a variable, function, or property. 
It is different from a string in that a string is data, while an identifier is part of the code. 

variable is a container for a value
  also, variables declared with let or const can belong to an additional scope:
  double quotes "" are for strings, {} are for objects
  variables declared with let or const can belong to an additional scope:

'Deconstruct' method - instead of writing every ${x.objectOne} ${x.objectTwo}
  let {objectOne, objectTwo} = x;

template literals are strings that allow embedded expressions, ${expression}. 
template literals use backticks (``), regular strings use single ('') or double ("") quotes

  let name = "Codecademy";
    console.log(`Hello, ${name}`); 
  /// Prints: Hello, Codecademy

  console.log(`Billy is ${6+8} years old.`); 
  /// Prints: Billy is 14 years old.

diaper





  
  
  
  
  
  
  
  
  */ //! comments



