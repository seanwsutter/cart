/* notes 

return statement
double quote "" is used to write strings 
template literal, `` backtext
define where template literal is printed - inside shop
()=>{} ES6 arrow function, abcd(){}

make array to automate content
define content using map function
  ${.object}


*/ 


let shop = document.getElementById('shop');
// targets id="shop" and saved inside variable 'let shop'
let shopItemsData = [
  { // array [], store in 4 objects {} with id,name,price,desc
    id: "yeet", // unique
    name: "Casual Shirt",
    price: 45,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    img: "mages/img-1.jpg",
  },
  {
    id: "yeet",
    name: "Office Shirt",
    price: 100,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    img: "mages/img-2.jpg",},
  {
    id: "yeet",
    name: "T-Shirt",
    price: 25,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    img: "mages/img-3.jpg",
  },
  {
    id: "yeet",
    name: "Mens Suit",
    price: 200,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    img: "mages/img-4.jpg",
  }
]; 

//! shop 
let generateShop = () => { 
  return (shop.innerHTML = shopItemsData
    .map((x) => { 
      return ` 
    <div class="item">    
        <img width="220" src="images/img-1.jpg" alt=""> 
        <div class="details"> 
          <h3>${x.name}</h3>
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
    `;
  }).join("")); 
};


generateShop(); // invoke function


/* template literal 
  
  return shop.innerHTML=` 
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



