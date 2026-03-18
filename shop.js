// 🔥 Firebase Import
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔥 Firebase Config (👉 নিজেরটা বসা)
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXX",
  authDomain: "wholesome-shop-f4d0f.firebaseapp.com",
  projectId: "wholesome-shop-f4d0f",
  storageBucket: "wholesome-shop-f4d0f.appspot.com",
  messagingSenderId: "301482399120",
  appId: "1:301482399120:web:XXXXXXXX"
};

// 🔥 Init
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let cart = [];

// 🔥 Load Products
async function loadProducts() {
  const querySnapshot = await getDocs(collection(db, "products"));
  const container = document.getElementById("productList");

  container.innerHTML = "";

  querySnapshot.forEach(doc => {
    const p = doc.data();

    container.innerHTML += `
      <div class="card">
        <img src="${p.img}" style="width:100%;height:150px;object-fit:cover;">
        <h3>${p.name}</h3>
        <p>${p.price} BDT</p>
        <button onclick='addToCart(${JSON.stringify(p)})'>Add to Cart</button>
      </div>
    `;
  });
}

// 🔥 Add to Cart
window.addToCart = function(product) {
  const exist = cart.find(p => p.name === product.name);

  if (exist) {
    exist.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  renderCart();
}

// 🔥 Render Cart
function renderCart() {
  const tbody = document.querySelector("#cartTable tbody");
  tbody.innerHTML = "";

  let subtotal = 0;

  cart.forEach(item => {
    const total = item.price * item.qty;
    subtotal += total;

    tbody.innerHTML += `
      <tr>
        <td>${item.name}</td>
        <td>${item.price} BDT</td>
        <td>${item.qty}</td>
        <td>${total} BDT</td>
      </tr>
    `;
  });

  const vat = subtotal * 0.04;
  const grand = subtotal + vat;

  document.getElementById("subtotal").innerText = "Subtotal: " + subtotal + " BDT";
  document.getElementById("vat").innerText = "VAT (4%): " + vat.toFixed(2) + " BDT";
  document.getElementById("grandTotal").innerText = "Total: " + grand.toFixed(2) + " BDT";
}

// 🔥 Confirm Order
window.confirmOrder = function() {
  const txid = document.getElementById("txid").value;

  if (!txid) {
    alert("Enter TX ID");
    return;
  }

  generatePDF(txid);
}

// 🔥 PDF Generator
async function generatePDF(txid) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  let y = 20;

  doc.setFontSize(20);
  doc.text("WHOLESOME SHOP", 60, y);
  y += 10;

  doc.setFontSize(12);
  doc.text("Invoice", 90, y);
  y += 10;

  let subtotal = 0;

  cart.forEach(item => {
    const total = item.price * item.qty;
    subtotal += total;

    doc.text(item.name, 10, y);
    doc.text(item.price.toString(), 80, y);
    doc.text(item.qty.toString(), 120, y);
    doc.text(total.toString(), 150, y);

    y += 10;
  });

  const vat = subtotal * 0.04;
  const grand = subtotal + vat;

  y += 10;
  doc.text("Subtotal: " + subtotal + " BDT", 10, y);
  y += 10;
  doc.text("VAT: " + vat.toFixed(2) + " BDT", 10, y);
  y += 10;
  doc.text("Total: " + grand.toFixed(2) + " BDT", 10, y);
  y += 10;
  doc.text("TX ID: " + txid, 10, y);

  doc.save("invoice.pdf");
}

// 🔥 Run
loadProducts();
