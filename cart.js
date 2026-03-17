let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price){
cart.push({name,price});
localStorage.setItem("cart",JSON.stringify(cart));
renderCart();
updateCartCount();
}

// SIDE CART
function toggleCart(){

let cartBox=document.getElementById("sideCart");

cartBox.classList.toggle("active");

renderCart();

}

// RENDER CART
function renderCart(){

let box=document.getElementById("cart-items");

if(!box) return;

box.innerHTML="";

cart.forEach((i,index)=>{

box.innerHTML+=`
<div>
${i.name} - ${i.price}
<button onclick="removeItem(${index})">Remove</button>
</div>
`;

});

}

// REMOVE
function removeItem(i){
cart.splice(i,1);
localStorage.setItem("cart",JSON.stringify(cart));
renderCart();
updateCartCount();
}

// COUNT
function updateCartCount(){
let el=document.getElementById("cart-count");
if(el) el.innerText=cart.length;
}

updateCartCount();
