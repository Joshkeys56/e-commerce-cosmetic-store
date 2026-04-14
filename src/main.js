// toggle cart section 
let shpp = document.querySelectorAll(".js-cart-open");
let cart = document.querySelector(".cart");
let backArrow = document.querySelector('.backArrow')
let main = document.getElementById('main')

// function for nav hamburger
let hamburger = document.getElementById('hamburger')
let dropppppo = document.querySelector('.dropppppo')
let isAllowed = false;
hamburger.addEventListener('click', ()=> {
    dropppppo.classList.toggle('nv-dropp')
  if (isAllowed) {
    isAllowed = false
    hamburger.className = 'fa-solid fa-bars'
  } else {
    isAllowed = true
     hamburger.className = 'fa-solid fa-xmark'
  }
})

shpp.forEach(bco => {
  bco.addEventListener("click", (e) => {
    e.stopPropagation() // this tells the function to stop at this point, without it the whole function will run and close the cart section once it opens because of the click event listener function in the body below
    cart.classList.add("active");  // adds/removes the class active which i've styled to make the cart display block

    if (cart.classList.contains("active")) { // this checks if the "active" class is added to the cart div 
      document.body.classList.add("body-active"); // if yes it add the class "body-active which i've styled to make the body overflow:hidden"
    } else {
      document.body.classList.remove("body-active"); // if no it removes the class "body-active which i've styled to make the body overflow:hidden"
    }
  })
  // this handles removes of cart when you click anywhere else on the body
  document.body.addEventListener('click', () => {
    cart.classList.remove("active");
    document.body.classList.remove("body-active");
  })

  cart.addEventListener('click', (e) => {
    e.stopPropagation() // this tells the browser not to run the click event inside the cart
  })

  backArrow.addEventListener('click', () => {
    cart.classList.remove("active"); // closes the cart when you click on the arrow
    document.body.classList.remove("body-active");
  })
})



// Array objects for products
let d1 = document.getElementById('products')
d1.classList.add('section2-grid')
const cartItems = [
  {
    id: '1',
    image: "https://res.cloudinary.com/duoy2tsyc/image/upload/v1775790526/given-skin-toner-600x600_pbruno.jpg",
    data: "Paste Masks",
    description: "ANTI-AGING SKIN TONER",
    price: 40.00
  },
  {
    id: '2',
    image: "https://res.cloudinary.com/duoy2tsyc/image/upload/q_auto/f_auto/v1775790634/coco-body-oil-600x600_p2lchb.jpg",
    data: "Feminine Deodorants",
    description: "COCO BODY OIL",
    price: 60.00
  },
  {
    id: '3',
    image: "https://res.cloudinary.com/duoy2tsyc/image/upload/q_auto/f_auto/v1775790526/daily-moisturizer-600x600_ezwrna.jpg",
    data: "Skin Fresheners",
    description: "DAILY MOISTURISER",
    price: 45.00
  },
  {
    id: '4',
    image: "https://res.cloudinary.com/duoy2tsyc/image/upload/q_auto/f_auto/v1775790526/deep-cleanser-600x600_ylo9ud.jpg",
    data: "Skin Milk",
    description: "DEEP CLEANSER",
    price: 45.00
  },
  {
    id: '5',
    image: "https://res.cloudinary.com/duoy2tsyc/image/upload/q_auto/f_auto/v1775790526/night-care-cream-600x600_pulakw.jpg",
    data: "Balms",
    description: "NIGHT CARE CREAM",
    price: 25.00
  },
  {
    id: '6',
    image: "https://res.cloudinary.com/duoy2tsyc/image/upload/q_auto/f_auto/v1775790526/rose-essential-oil-600x600_xlwrvk.jpg",
    data: "Face Cream",
    description: "ROSE ESSENTIAL OIL",
    price: 30.00
  },
  {
    id: '7',
    image: "https://res.cloudinary.com/duoy2tsyc/image/upload/q_auto/f_auto/v1775790526/deep-cleanser-600x600_ylo9ud.jpg",
    data: "Anti-aging Cream",
    description: "SHAVING KIT",
    price: 55.00
  },
  {
    id: '8',
    image: "https://res.cloudinary.com/duoy2tsyc/image/upload/q_auto/f_auto/v1775790526/beauty-cream-600x600_wvo1lq.jpg",
    data: "Skin Toner",
    description: "SKIN WHITENING TONER",
    price: 45.00
  },
]

cartItems.forEach(el => {
  let d2 = document.createElement('div');
  d2.classList.add('grid-items');
  let d3 = document.createElement('div');
  d3.classList.add('icon-div');
  let d4 = document.createElement('div');
  d4.classList.add('icon-div-2');
  let d5 = document.createElement('div');
  d5.classList.add('tooltip');
  d5.innerHTML = `Add to Cart`;
  let d6 = document.createElement('div');
  d6.classList.add('icon-div-circle');
  d6.innerHTML = `<i class="fa-solid fa-basket-shopping"></i>`;

  d2.innerHTML = `
    <img src="${el.image}" alt="${el.data} image"/>
    <p>${el.data}</p>
    <p>${el.description}</p>
    <p><small>£${el.price}</small></p>`;

  d1.appendChild(d2);
  d2.insertBefore(d3, d2.children[1]);
  d3.appendChild(d4);
  d4.appendChild(d5);
  d4.appendChild(d6);
})



function renderCart() {
  // this block handles cart description telling if its empty or not
  let cartTeller = document.getElementById('cartTeller');
  let checkOutText = document.querySelector('.checkOutText');

  let cartLenght = cartEl.length;
  if (cartLenght === 0) {
    cartTeller.innerHTML = "Your Cart Is Empty"
    checkOutText.innerHTML = "Your Cart Is Empty. Shop Now"
  } else {
    cartTeller.innerHTML = "Review Your Cart"
     checkOutText.innerHTML = "Proceed to Checkout"
  }

  // setting the cart count
  cartDisplay.innerHTML = " "; // here i set my cartDisplay div saved in a variable of cartDisplay to be an empty at first
  counter.forEach(xx => {
    xx.innerHTML = cartEl.length;
  })

  //
  cartEl.forEach(dis => { // here i'm looping through our array to do something to all the elements that will be added on click to the array and "dis is representing the elements"
    let d7 = document.createElement('div')
    d7.classList.add('cartGrid')
    let d8 = document.createElement('div')
    d8.classList.add('cartFlex')
    let d9 = document.createElement('div')
    d9.classList.add('cartFunctions')
    d8.innerHTML =
      `<div> <img src="${dis.image}" alt="${dis.data} image"/> </div>
        <div class ="cartDescription">
          <p>${dis.description}</p>
          <p>£${dis.price}</p>
          <p class="remove"> REMOVE </p>
        </div>`;
    d9.innerHTML = `
        <div class="plus">+</div>
        <div class="pieces">${dis.quantity}</div>
        <div class="minus">-</div>`;
    cartDisplay.appendChild(d7);
    d7.appendChild(d8);
    d7.appendChild(d9);

    // Deleting and adding to/from cart.
    let minus = d9.querySelector('.minus');
    let plus = d9.querySelector('.plus');
    let remove = d8.querySelector('.remove');

    // removing the total piece of each item in the cart
    remove.addEventListener('click', () => {
      let diff = cartEl.findIndex(item => item.id === dis.id)
      cartEl.splice(diff, 1)
      renderCart()
    })

    // removing each piece of item in the cart
    minus.addEventListener('click',() =>  {
      let min = cartEl.find(item => item.id === dis.id)
      min.quantity--;
      let diff = cartEl.findIndex(item => item.id === dis.id)
      if (min.quantity === 0) {
        cartEl.splice(diff, 1)
      }
      renderCart()
    })

    // adding each quantity of item in the cart
    plus.addEventListener('click',() =>  {
      let add = cartEl.find(item => item.id === dis.id)
      add.quantity++;
      renderCart()
    })
  })

  // displaying the cart total
  let totalId = document.querySelector('.totalId')
  let totg = 0;
  cartEl.forEach(bnx => {
  let tot = bnx.price * bnx.quantity;
  totg += tot;
})
  totalId.innerHTML = `£${totg}`;

}



// Adding objects to seperate array and then cart on click
let counter = document.querySelectorAll('.counter');
counter.forEach(xx => xx.innerHTML = 0); // here i set the initial display for all the elements with .counter innerHTML to be 0 at first
let cartDisplay = document.getElementById('cartDisplay') // firsty i saved the div with id=cardDisplay to a variable names cardDisplay also
let addCartButtons = document.querySelectorAll('.icon-div-circle') // here i saved all my "add to cart" buttons
const cartEl = []; // here i created an empty array which will hold our products objects
renderCart(); // here ive called my funtion


addCartButtons.forEach((icon, index) => { //icon= all "ADD TO CARD BUTTONS" index= the index of all my add to cart buttons  and also here i'm lopping through   my all "add to cart button" to do something to them

  icon.addEventListener('click', (e) => { // here i've added a click event listener to all my "add to carts" buttons
    e.stopPropagation()
    cart.classList.add("active");
    let ext = cartEl.find(item => item.id === cartItems[index].id)
    if (!ext) {
      icon.innerHTML = `<i class="fa-solid fa-circle"></i>`
      cartEl.push(cartItems[index]); // here after click, it records which add to cart button was clicked and also reference it with the index of the array of objects(cartItems), so it displays the object at the index of what ever add to cart button was clicked. i.e if the add to cart at the index of 3 was clicked, it will also push the array object at the index of 3 to the cartEl(empty array)
      cartItems[index].quantity = 1
    } else {
      ext.quantity++;
    }
    renderCart()
  })
})

let totalDropDown = document.querySelector('.totalDropDown')
totalDropDown.innerHTML = `<i class="fa-solid fa-chevron-down"></i>`
let isOpen = false;
let couponSec = document.querySelector('.couponSec')
    totalDropDown.addEventListener('click', () => {
      couponSec.classList.toggle('show')
      if (isOpen) {
        isOpen = false
        totalDropDown.innerHTML = `<i class="fa-solid fa-chevron-down"></i>`
      } else {
        isOpen = true
        totalDropDown.innerHTML = `<i class="fa-solid fa-angle-up"></i>`
      }
      
    });




