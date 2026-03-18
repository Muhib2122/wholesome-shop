import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔥 Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyBqFh9-695gFPpzCxieKf5fVoZ_JedJRL8",
  authDomain: "wholesome-shop-f4d0f.firebaseapp.com",
  projectId: "wholesome-shop-f4d0f",
  storageBucket: "wholesome-shop-f4d0f.appspot.com",
  messagingSenderId: "301482399120",
  appId: "1:301482399120:web:ce87c2f88edb2018fd4f15"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 🔥 Add Product
async function addProduct() {
  const name = document.getElementById("name").value;
  const price = parseInt(document.getElementById("price").value);
  const img = document.getElementById("img").value;

  if (!name || !price || !img) {
    alert("Fill all fields");
    return;
  }

  await addDoc(collection(db, "products"), {
    name,
    price,
    img
  });

  alert("Product Added ✅");
  loadProducts();
}

window.addProduct = addProduct;

// 🔥 Load Products
async function loadProducts() {
  const snapshot = await getDocs(collection(db, "products"));
  const list = document.getElementById("list");

  list.innerHTML = "";

  snapshot.forEach((docItem) => {
    const p = docItem.data();

    list.innerHTML += `
      <div class="card">
        <h3>${p.name}</h3>
        <p>${p.price} BDT</p>
        <button onclick="deleteProduct('${docItem.id}')">Delete</button>
      </div>
    `;
  });
}

// 🔥 Delete
async function deleteProduct(id) {
  await deleteDoc(doc(db, "products", id));
  alert("Deleted ❌");
  loadProducts();
}

window.deleteProduct = deleteProduct;

// Run
loadProducts();
