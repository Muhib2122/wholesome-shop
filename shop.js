const container = document.getElementById("products");

// load from storage only
let allProducts = JSON.parse(localStorage.getItem("products")) || [];

function renderProducts(list){

container.innerHTML = "";

if(list.length === 0){
container.innerHTML = "<h2>No Products Found</h2>";
return;
}

list.forEach(product => {

let div = document.createElement("div");

div.className = "product";

div.innerHTML = `
<img src="${product.img}" class="product-img"
onerror="this.src='https://via.placeholder.com/150'">

<h3>${product.name}</h3>

<p>${product.price} BDT</p>

<button onclick="addToCart('${product.name}', ${product.price})">
Add to Cart
</button>
`;

container.appendChild(div);

});

}

// search
let search = document.getElementById("search");

if(search){
search.addEventListener("input", function(){

let value = this.value.toLowerCase();

let filtered = allProducts.filter(p =>
p.name.toLowerCase().includes(value)
);

renderProducts(filtered);

});
}

// category
function filterCategory(cat){

if(cat === "all"){
renderProducts(allProducts);
return;
}

let filtered = allProducts.filter(p => p.category === cat);

renderProducts(filtered);

}

// first load
renderProducts(allProducts);
