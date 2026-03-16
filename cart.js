let cart = []

function addToCart(name,price){

cart.push({name,price})

document.getElementById("cart-count").innerText = cart.length

alert(name + " added to cart")

}

function goCheckout(){

window.location.href = "checkout.html"

}
