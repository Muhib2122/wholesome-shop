let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price){

    cart.push({name, price});

    // save cart in browser
    localStorage.setItem("cart", JSON.stringify(cart));

    // update cart count
    document.getElementById("cart-count").innerText = cart.length;

    alert(name + " added to cart");

}

function goCheckout(){

    // go to checkout page
    window.location.href = "checkout.html";

}
