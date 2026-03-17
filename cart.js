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
function renderCart(){
let container = document.getElementById("cart-items");

if(!container) return;

container.innerHTML = "";

let total = 0;

cart.forEach((item, index) => {

total += item.price;

container.innerHTML += `
<div style="border:1px solid #ccc; margin:10px; padding:10px;">
${item.name} - ${item.price} BDT
<button onclick="removeItem(${index})">Remove</button>
</div>
`;

});

document.getElementById("total").innerText = "Total: " + total + " BDT";

}

function goCheckout(){
window.location.href = "checkout.html";
}

// load
renderCart();
updateCartCount();
