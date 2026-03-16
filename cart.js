let cart = []

function addToCart(name,price){

cart.push({name,price})

document.getElementById("cart-count").innerText = cart.length

alert(name + " added to cart")

}

function goCheckout(){

localStorage.setItem("cart",JSON.stringify(cart))

window.location="checkout.html"

}
