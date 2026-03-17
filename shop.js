document.addEventListener("DOMContentLoaded", function(){

const container = document.getElementById("products");

function loadProducts(){
return JSON.parse(localStorage.getItem("products")) || [];
}

function stars(n){
let s="";
for(let i=0;i<n;i++) s+="⭐";
return s;
}

// RENDER
function renderProducts(list){

container.innerHTML="";

list.forEach(p=>{

container.innerHTML += `
<div class="product">

<img src="${p.img}" class="product-img"
onclick='openPopup(${JSON.stringify(p)})'
onerror="this.src='https://via.placeholder.com/150'">

<h3>${p.name}</h3>
<p>${p.price} BDT</p>

<div class="rating">${stars(p.rating||4)}</div>

<button onclick="addToCart('${p.name}',${p.price})">
Add to Cart
</button>

</div>
`;

});

}

renderProducts(loadProducts());

// POPUP
window.openPopup=function(p){

let popup=document.getElementById("popup");

popup.style.display="flex";

popup.innerHTML=`
<div class="popup-box">

<img src="${p.img}">

<h2>${p.name}</h2>
<p>${p.price} BDT</p>

<button onclick="addToCart('${p.name}',${p.price})">
Add to Cart
</button>

<button onclick="closePopup()">Close</button>

</div>
`;

}

window.closePopup=function(){
document.getElementById("popup").style.display="none";
}

// SEARCH
document.getElementById("search").addEventListener("input",function(){

let v=this.value.toLowerCase();

let f=loadProducts().filter(p=>p.name.toLowerCase().includes(v));

renderProducts(f);

});

// CATEGORY
window.filterCategory=function(cat){

let all=loadProducts();

if(cat==="all"){
renderProducts(all);
return;
}

let f=all.filter(p=>p.category===cat);

renderProducts(f);

}

});
