// Load cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Save cart
function saveCart(){
localStorage.setItem("cart", JSON.stringify(cart));
updateCartCount();
}

// Update cart count (top bar)
function updateCartCount(){
let count = document.getElementById("cart-count");
if(count){
count.innerText = cart.length;
}
}

// Add to cart
function addToCart(name, price){

cart.push({
name: name,
price: price
});

saveCart();

alert("Added to Cart");

}

// Remove from cart
function removeFromCart(index){

cart.splice(index,1);

saveCart();

location.reload();

}

// Go pages
function goCart(){
window.location.href = "cart.html";
}

function goCheckout(){
window.location.href = "checkout.html";
}

// Initial update
updateCartCount();
