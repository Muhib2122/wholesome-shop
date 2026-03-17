let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart(){
localStorage.setItem("cart", JSON.stringify(cart));
updateCartCount();
}

function updateCartCount(){
let el = document.getElementById("cart-count");
if(el) el.innerText = cart.length;
}

function addToCart(name,price){
cart.push({name,price});
saveCart();
alert(name + " added");
}

function removeFromCart(index){
cart.splice(index,1);
saveCart();
location.reload();
}

function goCheckout(){
window.location.href = "checkout.html";
}

function goCart(){
window.location.href = "cart.html";
}

updateCartCount();
