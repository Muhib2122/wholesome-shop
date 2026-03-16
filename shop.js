const productContainer = document.getElementById("products");

products.forEach(product => {

let div = document.createElement("div");

div.className = "product";

div.innerHTML = `
<img src="${product.img}" style="width:150px;height:150px;object-fit:cover">

<h3>${product.name}</h3>

<p>${product.price} BDT</p>

<button onclick="addToCart('${product.name}',${product.price})">
Add to Cart
</button>
`;

productContainer.appendChild(div);

});
