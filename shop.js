const container = document.getElementById("products");

// get data
let allProducts = JSON.parse(localStorage.getItem("products")) || [];

// ⭐ rating function
function stars(n){
let s="";
for(let i=0;i<n;i++) s+="⭐";
return s;
}

// render products
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

// 🔍 search
document.getElementById("search").addEventListener("input", function(){

let v = this.value.toLowerCase();

let filtered = allProducts.filter(p =>
p.name.toLowerCase().includes(v)
);

renderProducts(filtered);

});

// 📂 category filter
function filterCategory(cat){

if(cat === "all"){
renderProducts(allProducts);
return;
}

let filtered = allProducts.filter(p => p.category === cat);

renderProducts(filtered);

}

// initial load
renderProducts(allProducts);
