let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price){
cart.push({name,price});
localStorage.setItem("cart",JSON.stringify(cart));
renderCart();
updateCartCount();
}

function toggleCart(){
let cartBox=document.getElementById("sideCart");
cartBox.classList.toggle("active");
renderCart();
}

function renderCart(){

let box=document.getElementById("cart-items");

if(!box) return;

box.innerHTML="";

cart.forEach((item,index)=>{

box.innerHTML+=`
<div>
<span>${item.name} - ${item.price}</span>
<button onclick="removeItem(${index})">Remove</button>
</div>
`;

});
}

function removeItem(i){
cart.splice(i,1);
localStorage.setItem("cart",JSON.stringify(cart));
renderCart();
updateCartCount();
}

function updateCartCount(){
let el=document.getElementById("cart-count");
if(el) el.innerText=cart.length;
}

updateCartCount();
