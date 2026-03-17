const container = document.getElementById("products");
const search = document.querySelector(".search");

function display(list){

container.innerHTML = "";

list.forEach(p => {

let div = document.createElement("div");
div.className = "product";

div.innerHTML = `
<img src="${p.img}" class="product-img">
<h3>${p.name}</h3>
<p>${p.price} BDT</p>
`;

div.onclick = () => openPopup(p);

container.appendChild(div);

});

}

display(products);


/* SEARCH */
search.addEventListener("input", () => {

let text = search.value.toLowerCase();

let filtered = products.filter(p =>
p.name.toLowerCase().includes(text)
);

display(filtered);

});


/* CATEGORY */
function filterCategory(cat){

if(cat==="all"){
display(products);
return;
}

let filtered = products.filter(p=>p.category===cat);
display(filtered);

}


/* POPUP */
function openPopup(p){

document.getElementById("popup").style.display="block";

document.getElementById("pop-img").src = p.img;
document.getElementById("pop-name").innerText = p.name;
document.getElementById("pop-price").innerText = p.price + " BDT";

document.getElementById("addBtn").onclick = ()=>{
addToCart(p.name,p.price);
};

/* RATING */
let ratingDiv = document.getElementById("rating");
ratingDiv.innerHTML="";

for(let i=1;i<=5;i++){

let star = document.createElement("span");
star.innerHTML="★";
star.className="star";

star.onclick = ()=>{

document.querySelectorAll(".star").forEach(s=>s.classList.remove("active"));

for(let j=0;j<i;j++){
ratingDiv.children[j].classList.add("active");
}

};

ratingDiv.appendChild(star);

}

}

function closePopup(){
document.getElementById("popup").style.display="none";
}
