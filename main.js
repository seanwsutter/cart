//! ids from html 
let shop = document.getElementById('shop');
// variable,  selects shop div id

//! shop items
let shopItemsData = [   // variable = array[] with objects{}, ex [{},{},{},{}] 
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

//! basket basket babababa basket
/* basket above push function 
example,
let basket = [{
  id: "dhjaek",
  item: 1
}]; 
*/
let basket = [];

//! shop 
let generateShop = () => { 
  return (shop.innerHTML = shopItemsData.map((x) => { // .map will run every object(4) ONE time(x)
      let { id, name, price, desc, img } = x; 
      // deconstruct method, ${x} to avoid manually changing (x.id),(x.name)
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
              <div id=${id} class="quantity">0</div> 
              <i onclick="increment(${id})" class="bi bi-plus-lg"></i> 
            </div>
          </div>
        </div> 
      </div>
    `;
  })
  .join("")); // .join("") removes comma text from array wat?
}; 
/* wiki .join, "-Adds all the elements of an array into a string, separated by the specified separator string. */

generateShop(); // call/invoke/summon/run/diaper function

//! increment function & search functon, if else 
// increment goal - onClick the (add icon will select unique id of selected item */
let increment = (id) => { 
  let selectedItem = id;
  // searching the specific item you selected to see if it actually exists
  let search = basket.find((x) => x.id === selectedItem.id); 
    // searching the specific item you selected to see if it actually exists

  // .find to see if object actually exists or not. using (x) for argument 
  // if else statement goal - if search is undefined (item not found in basket) then it will push to basket
  if (search === undefined) { 
    basket.push({ // push into basket
      id: selectedItem.id,
      item: 1,  
    }); 
  } else {   // if we do find item in basket
    search.item += 1; // adds more of same item/
  } 
  // type log after search/push
  console.log(basket); 
};



//! decrement function
let decrement = (id) => { 
  let selectedItem = id;
  console.log(selectedItem.id); 
  // console.log("Removed");
};


//! update quantity function
let update = () => {

};



/* comments

double quotes "", are for strings, {} are for objects

template literal, `` backtext

let ()=>{}; ES6 arrow function
  let abcd(){};

make array to automate content
  let shopItemsData = [{},{},{},{}]

map function
  ${x.object} 

instead of writing ${x.object} use 'deconstruct' method, 
let {objects} = x;, let {id, name, price, desc, img} = x;  

shopItemsData.price

return shop.innerHTML= ` 
  <div class="item">    
    <img width="220" src="images/img-1.jpg" alt=""> 
    <div class="details"> 
      <h3>Casual Shirt</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      <div class="price-quantity"> 
        <h2>$45</h2>
        <div class="buttons"> 
          <i class="bi bi-dash-lg"></i> 
          <div class="quantity">0</div> 
          <i class="bi bi-plus-lg"></i> 
        </div>
      </div>
    </div> 
  </div>
  `
*/



