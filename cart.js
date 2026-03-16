let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price){

cart.push({name, price});

localStorage.setItem("cart", JSON.stringify(cart));

document.getElementById("cart-count").innerText = cart.length;

alert(name + " added to cart");

}

function goCheckout(){

window.location.href = "cart.html";

}
