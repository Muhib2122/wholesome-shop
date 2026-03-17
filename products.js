const defaultProducts = [

{
id:1,
name:"Rice",
price:120,
img:"rice.jpg",
category:"groceries"
},

{
id:2,
name:"Milk",
price:80,
img:"milk.jpg",
category:"groceries"
},

{
id:3,
name:"Lipstick",
price:500,
img:"lipstick.jpg",
category:"makeup"
},

{
id:4,
name:"Shari",
price:2500,
img:"shari.jpg",
category:"clothing"
},

{
id:5,
name:"Shirt",
price:1200,
img:"shirt.jpg",
category:"clothing"
}

];

// 🔥 FIRST TIME LOAD ONLY
if(!localStorage.getItem("products")){
localStorage.setItem("products", JSON.stringify(defaultProducts));
}
