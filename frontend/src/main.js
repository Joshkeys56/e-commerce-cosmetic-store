// toggle cart section 
let shpp = document.querySelectorAll(".js-cart-open");
let cart = document.querySelector(".cart");
let backArrow = document.querySelector('.backArrow')
let main = document.getElementById('main')

// function for nav hamburger
let hamburger = document.getElementById('hamburger')
let dropppppo = document.querySelector('.dropppppo')
let isAllowed = false;
hamburger.addEventListener('click', (e) => {
  e.stopPropagation()
  dropppppo.classList.toggle('nv-dropp')
  if (isAllowed) {
    isAllowed = false
    hamburger.className = 'fa-solid fa-bars'
  } else {
    isAllowed = true
    hamburger.className = 'fa-solid fa-xmark'
  }

  // this handles removes of nav drop-dwn when you click anywhere else on the body
  document.body.addEventListener('click', () => {
    dropppppo.classList.remove("nv-dropp");
  })
})


shpp.forEach(bco => {
  bco.addEventListener("click", (e) => {
    e.stopPropagation() // this tells the function to stop at this point, without it the whole function will run and close the cart section once it opens because of the click event listener function in the body below
    cart.classList.toggle("active");  // adds/removes the class active which i've styled to make the cart display block

    if (cart.classList.contains("active")) { // this checks if the "active" class is added to the cart div 
      document.body.classList.add("body-active"); // if yes it add the class "body-active which i've styled to make the body overflow:hidden"
    } else {
      document.body.classList.remove("body-active"); // if no it removes the class "body-active which i've styled to make the body overflow:hidden"
    }
  })
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




// Array objects for products
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
const originalOrder = [...cartItems]; // here i created a copy of the original array of objects(cartItems) and saved it to a variable called originalOrder, this is because when i sort the cartItems array, it will change the order of the original array and i want to be able to go back to the original order when i click on the default sorting option in the shop page, so i will use this originalOrder variable to render the products in the default order when i click on the default sorting option in the shop page

// here i created a function that will render the product details in the shop page when you click on the product, it takes in the product object as a parameter and creates a div with the product information and appends it to the renderProduct div in the html. so when you click on the product in the shop page, it will call this function and pass the product object as a parameter to it and it will render the product details in the renderProduct div in the html
let renderProduct = document.getElementById('renderProduct');
function renderProductsDetails(con) {
  if (renderProduct) {
    let r1 = document.createElement('div');
    r1.classList.add('renderProduct-1');
    let r2 = document.createElement('div');
    r2.classList.add('renderProduct-2');
    r1.innerHTML = `
    <h1>${con.description}</h1>`;
    r2.innerHTML = `
      <img src="${con.image}" alt="${con.data} image"/>
      <p>${con.data}</p>
      <p>£${con.price}</p>`;
    r1.appendChild(r2);
    renderProduct.innerHTML = '';
    renderProduct.appendChild(r1);
  }
}


// this block handles the filter by category section in the shop page, it loops through the array of objects and creates a div for each category and appends it to the filterByCat div in the html
let filterByCat = document.querySelector('.filterByCat');
if (filterByCat) {
  cartItems.forEach(el => {
    let fbc = document.createElement('div');
    fbc.classList.add('fbc');
    fbc.innerHTML = `
    <ul>
      <li class="fbc-item">${el.description}</li>
    </ul>`;
    filterByCat.appendChild(fbc);

    // here, i'm adding an event listener to the product div(d2) so that when you click on it, it will call the renderProductDetails function and pass the product object as a parameter to it and it will rend the product details in the renderProduct div in the html
    fbc.addEventListener('click', () => {
      renderProductsDetails(el);
      renderProduct.style.display = 'block'; // here i set the display of the renderProduct div to block so that it will be visible when you click on the product
      document.getElementById('shopProducts').style.display = 'none'; // here i set the display of the shopProducts div to none so that it will be hidden when you click on the product
      document.querySelector('.gs2').style.display = 'none'; // here i set the display of the gs3 div to none so that it will be hidden when you click on the product
      document.querySelector('.result').textContent = `Showing all results`;
    })
  })
}

const renderProducts = (container, item) => { // this function takes in 2 parameters, container which is the div where the products will be rendered and item which is the array of objects that contains the products information
  //Rendering objects(products) from array into html
  if (container) {
    container.classList.add('section2-grid')
    item.forEach(el => {
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
    <a href="shop.html"> <img src="${el.image}" alt="${el.data} image"/> </a>
    <p>${el.data}</p>
    <p>${el.description}</p>
    <p><small>£${el.price}</small></p>`;

      container.appendChild(d2);
      d2.insertBefore(d3, d2.children[1]);
      d3.appendChild(d4);
      d4.appendChild(d5);
      d4.appendChild(d6);
    })
  }
}

renderProducts(document.getElementById('products'), cartItems) // Displays the products in the homepage section with id of products
renderProducts(document.getElementById('latestProducts'), cartItems.slice(-4).reverse()) // displays the last 4 products in the homepage section with id of latestProducts using negative indexing and reverse to display the latest products first, i used negative indexing to get the last 4 instead of just saying cartItems.slice(4,8) because if i add more products to the array, it will automatically display the last 4 products without me having to change the code
renderProducts(document.getElementById('shopProducts'), cartItems) // displays the products in the shop page section with id of shopProducts

const cartEl = JSON.parse(localStorage.getItem('cart')) || []; // here i created an empty array which will hold our products objects and saved it to a variable called cartEl, also i used JSON.parse(localStorage.getItem('cart')) to check if there is any data in the local storage with the key of 'cart' and if there is then it will parse it and set it as the value of cartEl, if there isn't then it will set cartEl to be an empty array, this is because when you refresh the page, the data in the cart will be lost if we don't save it in the local storage, so by using local storage we can save the data in the cart even when we refresh the page, also i will update the local storage every time we add or remove items from the cart so that it will always have the latest data of the cart

function renderCart() {
  localStorage.setItem('cart', JSON.stringify(cartEl)) // here i'm using localStorage.setItem() method to save the cartEl array in the local storage with the key of 'cart', also i'm using JSON.stringify() method to convert the cartEl array into a string before saving it in the local storage because local storage can only store strings, so by using JSON.stringify() method we can convert the array into a string and save it in the local storage, also i will update the local storage every time we add or remove items from the cart so that it will always have the latest data of the cart
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
    minus.addEventListener('click', () => {
      let min = cartEl.find(item => item.id === dis.id)
      min.quantity--;
      let diff = cartEl.findIndex(item => item.id === dis.id)
      if (min.quantity === 0) {
        cartEl.splice(diff, 1)
      }
      renderCart()
    })

    // adding each quantity of item in the cart
    plus.addEventListener('click', () => {
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

renderCart(); // here ive called my funtion

if (addCartButtons.length > 0) {
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
}


//coupon section toggle and icon toggle
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





// ABOUT PAGE LOGIC-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


const images = [
  "https://res.cloudinary.com/duoy2tsyc/image/upload/v1776351531/bg-10-free-img_t6kocz.jpg",
  "https://res.cloudinary.com/duoy2tsyc/image/upload/v1776351530/bg-09-free-img_asrpcx.jpg"
];
let slider = document.getElementById('slider');

if (slider) {
  let index = 0;
  let interval;

  const startSlider = () => {
    interval = setInterval(() => {
      index = (index + 1) % images.length
      slider.src = images[index]
    }, 5000);
  }

  // function to stop slider
  const stopSlider = () => {
    clearInterval(interval)
  }
  startSlider()

  // function to stop slider on mouseHover
  slider.addEventListener('mouseenter', stopSlider);
  // function to start slider on mouseleave
  slider.addEventListener('mouseleave', startSlider);
}





// carousel
const items = document.querySelectorAll(".item");
let startIndex = 0;
const carImages = [
  "https://res.cloudinary.com/duoy2tsyc/image/upload/q_auto/f_auto/v1776355251/logo-1_vcoehp.svg",
  "https://res.cloudinary.com/duoy2tsyc/image/upload/q_auto/f_auto/v1776355251/logo-2_suc5co.svg",
  "https://res.cloudinary.com/duoy2tsyc/image/upload/q_auto/f_auto/v1776355251/logo-3_pfxwua.svg",
  "https://res.cloudinary.com/duoy2tsyc/image/upload/q_auto/f_auto/v1776355251/logo-4_foqabd.svg",
  "https://res.cloudinary.com/duoy2tsyc/image/upload/q_auto/f_auto/v1776355251/logo-5_tpftpb.svg"
]

// function to render 5 images
const renImages = () => {
  items.forEach((img, i) => {
    const index = (startIndex + i) % carImages.length;
    img.src = carImages[index];
  });
};

// slide function
const slide = () => {
  startIndex = (startIndex + 1) % carImages.length;
  renImages();
};

// initial render
renImages();
// repeat every 5 seconds
setInterval(slide, 7000);


// Contact Page Map
let mapDiv = document.getElementById('map')
if (mapDiv) {
  const map = L.map('map').setView([51.505, -0.09], 13);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('Cosmetic Store Location <br> Be Elegant.')
    .openPopup();
}

// Testimonial section

const testimo = [

  {
    txt: "I absolutely love the variety of brands and products available here. It’s so convenient to find everything I need in one place, from skincare to      makeup, without having to browse multiple websites.",
    img: "https://res.cloudinary.com/duoy2tsyc/image/upload/v1776903350/customer1_sqrv2o.jpg",
    info: "Marilyn Keller"
  },

  {
    txt: "The shopping experience is fantastic — fast delivery, responsive customer service, and all products are authentic and high quality. I always feel confident ordering from this store.",
    img: "https://res.cloudinary.com/duoy2tsyc/image/upload/v1776903351/customer2_wcsotf.jpg",
    info: "Denise Carr"
  },

  {
    txt: "The selection of products is incredible, and I’m constantly discovering new favorites. It’s exciting to explore multiple brands under one roof, and I always find something that suits my style.",
    img: "https://res.cloudinary.com/duoy2tsyc/image/upload/v1776903351/customer3_tflrol.jpg",
    info: "Carol Hughes"
  },

  {
    txt: "Finally, a cosmetics store that has everything I love! I no longer have to search different shops or websites. The convenience and variety make it my go-to destination.",
    img: "https://res.cloudinary.com/duoy2tsyc/image/upload/v1776903351/customer5_xnqzv1.jpg",
    info: "Kathleen Turner"
  },

  {
    txt: "Shopping here is a pleasure. Great deals, genuine products, and a smooth checkout process make this my preferred store for all cosmetics. I keep coming back because I know I can trust them.",
    img: "https://res.cloudinary.com/duoy2tsyc/image/upload/v1776903351/customer4_popbyk.jpg",
    info: "Joan Willis"
  }

]

let t1 = document.querySelector('.testimo-div');
if (t1) {
  testimo.forEach(el => {
    let t2 = document.createElement('div');
    t2.classList.add('testimo-2');
    let t3 = document.createElement('div');
    t3.classList.add('testimo-3');
    t2.innerHTML = `
    <hr />
    <p>"${el.txt}"</p>`
    t3.innerHTML = `
    <img src="${el.img}" alt="${el.info} image"/>
    <h5>${el.info}</h5>
    `
    t2.appendChild(t3);
    t1.appendChild(t2);

  })
}

// sorting section in the shop page
let sortClick = document.querySelector('.sortClick');
let sort = document.querySelector('.sort');
if (sortClick) {
  sortClick.addEventListener('click', (e) => {
    e.stopPropagation()
    sort.classList.toggle('active')
  })
  document.body.addEventListener('click', () => {
    sort.classList.remove('active')
  })
};

// now logic to render my products in the shop page based on the sorting option i click on, so first i will add event listeners to all the sorting options and then based on the option i click on, it will sort the products and then call the renderProducts function to render the sorted products in the shop page.
let defSort = document.querySelectorAll('.defSort');
let sortClickText = document.querySelector('.sortClickText');
let tikTik = document.querySelectorAll('.tik-tik');
defSort.forEach(el => {
  el.addEventListener('click', (e) => {
    switch (e.currentTarget.dataset.sort) {
      case "popularity":
        document.getElementById('shopProducts').innerHTML = ''; 
        renderProducts(document.getElementById('shopProducts'), cartItems.slice(-4).reverse()) // displays the products in the shop page section with id of shopProducts
        sortClickText.textContent = "Sort by popularity";
        break;
      case "rating":
        document.getElementById('shopProducts').innerHTML = ''; 
        renderProducts(document.getElementById('shopProducts'), cartItems.reverse()) // displays the products in the shop page section with id of shopProducts
        sortClickText.textContent = "Sort by average rating"
        break;
      case "latest":
        document.getElementById('shopProducts').innerHTML = ''; 
        renderProducts(document.getElementById('shopProducts'), cartItems.slice(-5).reverse()) // displays the products in the shop page section with id of shopProducts
        sortClickText.textContent = "Sort by latest"
        break;
      case "price-low-high":
        document.getElementById('shopProducts').innerHTML = ''; 
        renderProducts(document.getElementById('shopProducts'), cartItems.sort((a, b) => a.price - b.price)) // displays the products in the shop page section with id of shopProducts
        sortClickText.textContent = "Sort by price: low to high"
        break;
      case "price-high-low":
        document.getElementById('shopProducts').innerHTML = ''; 
        renderProducts(document.getElementById('shopProducts'), cartItems.sort((a, b) => b.price - a.price)) // displays the products in the shop page section with id of shopProducts
        sortClickText.textContent = "Sort by price: high to low"
        break;

      default:
        document.getElementById('shopProducts').innerHTML = '';
        renderProducts(document.getElementById('shopProducts'), originalOrder) // displays the products in the shop page section with id of shopProducts
        break;
    }
  })
})


let searchInput = document.getElementById('searchInput');
if (searchInput) {
  searchInput.addEventListener('input', (e) => {
  let searchValue = e.target.value; 
  let filteredcartItems = cartItems.filter(el => el.description.toLowerCase().includes(searchValue.toLowerCase()))// here i'm filtering the cartItems array of objects to check if the description of each object includes the search value that the user is typing in the search input, if it does then it will return true and include that object in the filteredcartItems array, if it doesn't then it will return false and exclude that object from the filteredcartItems array, also i used toLowerCase() method to make the search case insensitive so that it will match the search value with the description regardless of the case
  document.getElementById('shopProducts').innerHTML = '';
  renderProducts(document.getElementById('shopProducts'), filteredcartItems)
  if (searchValue == "") {
    document.querySelector('.result').textContent = `Showing all 8 results`;
  } else {
    document.querySelector('.result').textContent = `Showing all results`;
  }
})
}
