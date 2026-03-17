let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart(){
localStorage.setItem("cart", JSON.stringify(cart));
updateCount();
}

function updateCount(){
let el = document.getElementById("cart-count");
if(el) el.innerText = cart.length;
}

function addToCart(name, price){
cart.push({name,price});
saveCart();
alert("Added");
}

function removeFromCart(i){
cart.splice(i,1);
saveCart();
location.reload();
}

function goCart(){
window.location.href="cart.html";
}

function goCheckout(){
window.location.href="checkout.html";
}

updateCount();
