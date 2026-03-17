const container = document.getElementById("products");

// ✅ Load products safely
let defaultProducts = typeof products !== "undefined" ? products : [];
let adminProducts = JSON.parse(localStorage.getItem("adminProducts")) || [];

// ✅ Merge both
let allProducts = [...defaultProducts, ...adminProducts];

// ✅ Render products
function renderProducts(list){

container.innerHTML = "";

if(list.length === 0){
container.innerHTML = "<h3 style='text-align:center;'>No products found</h3>";
return;
}

list.forEach(product => {

let div = document.createElement("div");

div.className = "product";

div.innerHTML = `
<img src="${product.img}" class="product-img">

<h3>${product.name}</h3>

<p>${product.price} BDT</p>

<button onclick="addToCart('${product.name}', ${product.price})">
Add to Cart
</button>
`;

container.appendChild(div);

});

}

// ✅ Search system
let searchInput = document.getElementById("search");

if(searchInput){
searchInput.addEventListener("input", function(){

let value = this.value.toLowerCase();

let filtered = allProducts.filter(p =>
p.name.toLowerCase().includes(value)
);

renderProducts(filtered);

});
}

// ✅ Category filter
function filterCategory(cat){

if(cat === "all"){
renderProducts(allProducts
