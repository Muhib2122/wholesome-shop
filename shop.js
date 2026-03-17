const container = document.getElementById("products");

// Load products (default + admin added)
let defaultProducts = products;
let adminProducts = JSON.parse(localStorage.getItem("adminProducts")) || [];

let allProducts = [...defaultProducts, ...adminProducts];

// Render function
function renderProducts(list){

container.innerHTML = "";

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

// Search
document.getElementById("search").addEventListener("input", function(){

let value = this.value.toLowerCase();

let filtered = allProducts.filter(p =>
p.name.toLowerCase().includes(value)
);

renderProducts(filtered);

});

// Category filter
function filterCategory(cat){

if(cat === "all"){
renderProducts(allProducts);
return;
}

let filtered = allProducts.filter(p =>
p.category && p.category.toLowerCase() === cat
);

renderProducts(filtered);

}

// Initial render
renderProducts(allProducts);
