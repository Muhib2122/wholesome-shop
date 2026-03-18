import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyXXXX",
  authDomain: "wholesome-shop-f4d0f.firebaseapp.com",
  projectId: "wholesome-shop-f4d0f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Load products
async function loadProducts(){
  const data = await getDocs(collection(db,"products"));
  let container=document.getElementById("productList");

  container.innerHTML="";

  data.forEach(doc=>{
    let p=doc.data();

    container.innerHTML+=`
    <div class="card">
      <img src="${p.img}" style="width:100%;height:120px">
      <h4>${p.name}</h4>
      <p>${p.price} BDT</p>
      <button onclick='addToCart(${JSON.stringify(p)})'>Add</button>
    </div>`;
  });
}

// Add
window.addToCart=(p)=>{
  let exist=cart.find(x=>x.name===p.name);
  if(exist) exist.qty++;
  else cart.push({...p, qty:1});

  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// Quantity
window.increase=(i)=>{
  cart[i].qty++;
  save();
}

window.decrease=(i)=>{
  if(cart[i].qty>1) cart[i].qty--;
  save();
}

function save(){
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// Render
function renderCart(){
  let box=document.getElementById("cartItems");
  box.innerHTML="";
  let total=0;

  cart.forEach((i,index)=>{
    let t=i.price*i.qty;
    total+=t;

    box.innerHTML+=`
    <div>
      <b>${i.name}</b><br>
      ${i.price} × ${i.qty} = ${t}
      <br>
      <button onclick="increase(${index})">+</button>
      <button onclick="decrease(${index})">-</button>
      <button onclick="removeItem(${index})">❌</button>
    </div>`;
  });

  document.getElementById("cartTotal").innerText="Total: "+total+" BDT";
}

// Remove
window.removeItem=(i)=>{
  cart.splice(i,1);
  save();
}

// Sidebar
window.toggleCart=()=>{
  document.getElementById("cartSidebar").style.right="0";
}
window.closeCart=()=>{
  document.getElementById("cartSidebar").style.right="-100%";
}

// Checkout
window.goCheckout=()=>{
  window.location.href="checkout.html";
}

loadProducts();
renderCart();
