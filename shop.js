// Firebase config বসা
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "PASTE_YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID"
};

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
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>${p.price} BDT</p>
        <button onclick='addToCart(${JSON.stringify(p)})'>Add to Cart</button>
      </div>
    `;
  });
}

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
        <td>${item.price}</td>
        <td>${item.qty}</td>
        <td>${total}</td>
      </tr>
    `;
  });

  const vat = subtotal * 0.04;
  const grand = subtotal + vat;

  document.getElementById("subtotal").innerText = "Subtotal: " + subtotal;
  document.getElementById("vat").innerText = "VAT (4%): " + vat.toFixed(2);
  document.getElementById("grandTotal").innerText = "Total: " + grand.toFixed(2);
}

window.confirmOrder = function() {
  const txid = document.getElementById("txid").value;

  if (!txid) {
    alert("Enter TX ID");
    return;
  }

  generatePDF(txid);
}

// 🔥 PDF
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
  doc.text("Subtotal: " + subtotal, 10, y);
  y += 10;
  doc.text("VAT: " + vat.toFixed(2), 10, y);
  y += 10;
  doc.text("Total: " + grand.toFixed(2), 10, y);
  y += 10;
  doc.text("TX ID: " + txid, 10, y);

  doc.save("invoice.pdf");
}

loadProducts();
