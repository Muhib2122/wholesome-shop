let defaultProducts = [
{
name:"milk",
price:80,
img:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
category:"groceries",
rating:4
},
{
name:"shirt",
price:2880,
img:"https://images.unsplash.com/photo-1520975916090-3105956dac38",
category:"clothing",
rating:5
},
{
name:"casual shirt",
price:1880,
img:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
category:"clothing",
rating:4
},
{
name:"premium jacket",
price:2890,
img:"https://images.unsplash.com/photo-1593030761757-71fae45fa0e7",
category:"clothing",
rating:5
}
];

// LOAD
let stored = JSON.parse(localStorage.getItem("products"));

// FIRST TIME LOAD হলে default বসবে
if(!stored || stored.length===0){
localStorage.setItem("products",JSON.stringify(defaultProducts));
}
