const initialProducts = [

{
id:1,
name:"car",
price:220,
img:"https://images.unsplash.com/photo-1502877338535-766e1452684a",
category:"toys",
rating:4
},

{
id:2,
name:"large Toy Car",
price:2320,
img:"https://images.unsplash.com/photo-1583267746897-2cf415887172",
category:"toys",
rating:5
},

{
id:3,
name:"premium Toy Car",
price:2320,
img:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
category:"toys",
rating:5
},

{
id:4,
name:"milk 1 ltr",
price:80,
img:"https://images.unsplash.com/photo-1563636619-e9143da7973b",
category:"groceries",
rating:4
},

{
id:5,
name:"shirt",
price:1380,
img:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
category:"clothing",
rating:4
},

{
id:6,
name:"lipstick shades",
price:4580,
img:"https://images.unsplash.com/photo-1586495777744-4413f21062fa",
category:"makeup",
rating:5
},

{
id:7,
name:"makeup shades",
price:3580,
img:"https://images.unsplash.com/photo-1596464716127-f2a82984de30",
category:"makeup",
rating:5
},

{
id:8,
name:"wooden makeup box",
price:3880,
img:"https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb",
category:"makeup",
rating:4
},

{
id:9,
name:"iphone 17 pro max",
price:160000,
img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
category:"electronics",
rating:5
},

{
id:10,
name:"baggy pant",
price:1600,
img:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
category:"clothing",
rating:4
},

{
id:11,
name:"reading table",
price:41600,
img:"https://images.unsplash.com/photo-1505691723518-36a5ac3be353",
category:"home",
rating:4
},

{
id:12,
name:"dining table",
price:167600,
img:"https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
category:"home",
rating:5
},

{
id:13,
name:"ceramic salad bowl",
price:600,
img:"https://images.unsplash.com/photo-1587300003388-59208cc962cb",
category:"home",
rating:4
},

{
id:14,
name:"ceramic BIG salad bowl",
price:800,
img:"https://images.unsplash.com/photo-1563805042-7684c019e1cb",
category:"home",
rating:4
},

{
id:15,
name:"SHARI",
price:4500,
img:"https://images.unsplash.com/photo-1610185365483-26c3c7f1c7bb",
category:"clothing",
rating:5
},

{
id:16,
name:"goggles",
price:600,
img:"https://images.unsplash.com/photo-1511499767150-a48a237f0083",
category:"fashion",
rating:4
}

];

// ONLY FIRST TIME
if(!localStorage.getItem("products")){
localStorage.setItem("products", JSON.stringify(initialProducts));
}
