let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart(){
localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(name,price){

cart.push({name,price});

saveCart();

document.getElementById("cart-count").innerText = cart.length;

alert(name + " added");

}

function goCheckout(){
window.location.href = "checkout.html";
}
