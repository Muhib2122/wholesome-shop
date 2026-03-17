function filterCategory(cat){

let filtered = products.filter(p => cat==="all" || p.category===cat);

renderProducts(filtered);

}

function sortPrice(){

let sorted = [...products].sort((a,b)=>a.price-b.price);

renderProducts(sorted);

}
