// LOAD PRODUCTS
const productContainer = document.getElementById("products");

// FUNCTION: SHOW PRODUCTS
function renderProducts(data){

productContainer.innerHTML = "";

data.forEach(product => {

let div = document.createElement("div");

div.className = "product";

div.innerHTML = `

<img src="${product.img}" 
class="product-img"
onerror="this.src='https://via.placeholder.com/150'">

<h3>${product.name}</h3>

<p>${product.price} BDT</p>

<button onclick="addToCart('${product.name}',${product.price})">
Add to Cart
</button>

`;

productContainer.appendChild(div);

});

}

// FIRST LOAD
renderProducts(products);


// 🔥 CATEGORY FILTER
function filterCategory(cat){

if(cat === "all"){
renderProducts(products);
return;
}

let filtered = products.filter(p => p.category === cat);

renderProducts(filtered);

}


// 🔥 SEARCH
function searchProduct(){

let input = document.getElementById("search").value.toLowerCase();

let filtered = products.filter(p =>
p.name.toLowerCase().includes(input)
);

renderProducts(filtered);

}


// 🔥 SORT BY PRICE
function sortPrice(){

let sorted = [...products].sort((a,b)=>a.price - b.price);

renderProducts(sorted);

}
