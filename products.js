const defaultProducts = [

{
name:"Rice",
price:120,
img:"rice.jpg",
category:"groceries"
},

{
name:"Milk",
price:80,
img:"milk.jpg",
category:"groceries"
},

{
name:"Lipstick",
price:500,
img:"lipstick.jpg",
category:"makeup"
},

{
name:"Shari",
price:2500,
img:"shari.jpg",
category:"clothing"
},

{
name:"Shirt",
price:1200,
img:"shirt.jpg",
category:"clothing"
}

];

// ADMIN PRODUCTS
let stored = JSON.parse(localStorage.getItem("products")) || [];

// MERGE
const products = [...defaultProducts];

stored.forEach(newP => {

let exists = products.find(p => p.name === newP.name);

if(!exists){
products.push(newP);
}

});
