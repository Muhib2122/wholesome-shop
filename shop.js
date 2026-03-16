const productContainer = document.getElementById("products")

products.forEach(product => {

let div = document.createElement("div")

div.className="product"

div.innerHTML = `
<h3>${product.name}</h3>
<p>Price: ${product.price} BDT</p>
<button onclick="addToCart('${product.name}',${product.price})">
Add to Cart
</button>
`

productContainer.appendChild(div)

})
