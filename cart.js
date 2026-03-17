let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ADD TO CART
function addToCart(name, price){

cart.push({name, price});

localStorage.setItem("cart", JSON.stringify(cart));

updateCartCount();

alert("Added to cart");

}

// CART COUNT (navbar)
function updateCartCount(){

let count = cart.length;

document.getElementById("cart-count").innerText = count;

}

// REMOVE ITEM
function removeItem(index){

cart.splice(index,1);

localStorage.setItem("cart", JSON.stringify(cart));

renderCart();

updateCartCount();

}

// RENDER CART PAGE
function renderCart(){

let container = document.getElementById("cart-items");

if(!container) return;

container.innerHTML =
