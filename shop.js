const productContainer = document.getElementById("products");

function renderProducts(data){

productContainer.innerHTML = "";

data.forEach((product,index) => {

let rating = localStorage.getItem(product.name+"_rating") || 0;

let div = document.createElement("div");
div.className = "product";

div.innerHTML = `

<img src="${product.img}" class="product-img"
onerror="this.src='https://via.placeholder.com/150'">

<h3>${product.name}</h3>

<p>${product.price} BDT</p>

<p>⭐ ${rating}/5</p>

<select onchange="rateProduct('${product.name}',this.value)">
<option>Rate</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
</select>

<button onclick="addToCart('${product.name}',${product.price})">
Add to Cart
</button>

`;

productContainer.appendChild(div);

});

}

function rateProduct(name,value){
localStorage.setItem(name+"_rating", value);
location.reload();
}

renderProducts(products);
