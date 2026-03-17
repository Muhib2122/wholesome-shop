let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price){

cart.push({name, price});

localStorage.setItem("cart", JSON.stringify(cart));

updateCart();

}

function updateCart(){

document.getElementById("cart-count").innerText = cart.length;

let cartItems = document.getElementById("cartItems");

cartItems.innerHTML = "";

let total = 0;

cart.forEach(item => {

let div = document.createElement("div");

div.innerText = item.name + " - " + item.price;

cartItems.appendChild(div);

total += item.price;

});

document.getElementById("total").innerText = "Total: " + total + " BDT";

}

function openCart(){

document.getElementById("cartPanel").classList.add("open");

updateCart();

}

function closeCart(){

document.getElementById("cartPanel").classList.remove("open");

}
