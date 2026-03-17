// WAIT UNTIL PAGE LOAD
document.addEventListener("DOMContentLoaded", function(){

const container = document.getElementById("products");

// SAFE LOAD (always fresh)
function loadProducts(){
return JSON.parse(localStorage.getItem("products")) || [];
}

// ⭐ rating
function stars(n){
let s="";
for(let i=0;i<n;i++) s+="⭐";
return s;
}

// RENDER
function renderProducts(){

let allProducts = loadProducts();

container.innerHTML = "";

if(allProducts.length === 0){
container.innerHTML = "<h2 style='padding:20px'>No Products Found</h2>";
return;
}

allProducts.forEach(p => {

let div = document.createElement("div");

div.className = "product";

div.innerHTML = `
<img src="${p.img}" class="product-img"
onerror="this.src='https://via.placeholder.com/150'">

<h3>${p.name}</h3>

<p>${p.price} BDT</p>

<div class="rating">${stars(p.rating || 4)}</div>

<button onclick="addToCart('${p.name}', ${p.price})">
Add to Cart
</button>
`;

container.appendChild(div);

});

}

// 🔍 SEARCH
let search = document.getElementById("search");

if(search){
search.addEventListener("input", function(){

let v = this.value.toLowerCase();

let allProducts = loadProducts();

let filtered = allProducts.filter(p =>
p.name.toLowerCase().includes(v)
);

container.innerHTML = "";

filtered.forEach(p => {

container.innerHTML += `
<div class="product">
<img src="${p.img}" class="product-img"
onerror="this.src='https://via.placeholder.com/150'">

<h3>${p.name}</h3>
<p>${p.price} BDT</p>

<div class="rating">${stars(p.rating || 4)}</div>

<button onclick="addToCart('${p.name}', ${p.price})">
Add to Cart
</button>
</div>
`;

});

});
}

// 📂 CATEGORY
window.filterCategory = function(cat){

let allProducts = loadProducts();

if(cat === "all"){
renderProducts();
return;
}

let filtered = allProducts.filter(p => p.category === cat);

container.innerHTML = "";

filtered.forEach(p => {

container.innerHTML += `
<div class="product">
<img src="${p.img}" class="product-img"
onerror="this.src='https://via.placeholder.com/150'">

<h3>${p.name}</h3>
<p>${p.price} BDT</p>

<div class="rating">${stars(p.rating || 4)}</div>

<button onclick="addToCart('${p.name}', ${p.price})">
Add to Cart
</button>
</div>
`;

});

}

// INITIAL LOAD
renderProducts();

});
