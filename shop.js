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

// 🔥 Load Products
async function loadProducts() {
  const data = await getDocs(collection(db, "products"));
  let container = document.getElementById("productList");

  container.innerHTML = "";

  data.forEach(doc=>{
    let p = doc.data();

    container.innerHTML += `
    <div class="card">
      <img src="${p.img}" style="width:100%;height:150px">
      <h3>${p.name}</h3>
      <p>${p.price} BDT</p>
      <button onclick='addToCart(${JSON.stringify(p)})'>Add</button>
    </div>`;
  });
}

// 🔥 Add Cart
window.addToCart = (p)=>{
  let exist = cart.find(x=>x.name===p.name);

  if(exist) exist.qty++;
  else cart.push({...p, qty:1});

  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// 🔥 Render Sidebar
function renderCart(){
  let box = document.getElementById("cartItems");
  box.innerHTML = "";

  let total = 0;

  cart.forEach((i,index)=>{
    let t = i.price*i.qty;
    total+=t;

    box.innerHTML += `
    <div>
      ${i.name} (${i.qty})
      <button onclick="removeItem(${index})">❌</button>
    </div>`;
  });

  document.getElementById("cartTotal").innerText = "Total: "+total;
}

window.removeItem = (i)=>{
  cart.splice(i,1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// 🔥 Navigation
window.goCheckout = ()=>{
  window.location.href = "checkout.html";
}

window.toggleCart = ()=> document.getElementById("cartSidebar").style.right="0";
window.closeCart = ()=> document.getElementById("cartSidebar").style.right="-350px";

loadProducts();
renderCart();
