document.addEventListener("DOMContentLoaded", function(){

const container = document.getElementById("products");

// LOAD PRODUCTS
function loadProducts(){
return JSON.parse(localStorage.getItem("products")) || [];
}

// ⭐ RATING
function stars(n){
let s="";
for(let i=0;i<n;i++) s+="⭐";
return s;
}

// RENDER
function renderProducts(list){

container.innerHTML = "";

if(list.length === 0){
container.innerHTML = "<h2 style='padding:20px'>No Products Found</h2>";
return;
}

list.forEach(p => {

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

// INITIAL LOAD
renderProducts(loadProducts());

// 🔍 SEARCH
let search = document.getElementById("search");

if(search){
search.addEventListener("input", function(){

let v = this.value.toLowerCase();

let allProducts = loadProducts();

let filtered = allProducts.filter(p =>
p.name.toLowerCase().includes(v)
);

renderProducts(filtered);

});
}

// 📂 CATEGORY FILTER (GLOBAL)
window.filterCategory = function(cat){

let allProducts = loadProducts();

if(cat === "all"){
renderProducts(allProducts);
return;
}

let filtered = allProducts.filter(p => p.category === cat);

renderProducts(filtered);

};

});
