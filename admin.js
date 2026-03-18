import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

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

let editId = null;

// 🔥 ADD
async function addProduct() {
  const name = document.getElementById("name").value;
  const price = parseInt(document.getElementById("price").value);
  const img = document.getElementById("img").value;

  if (!name || !price || !img) return alert("Fill all");

  await addDoc(collection(db, "products"), { name, price, img });

  alert("Added ✅");
  loadProducts();
}
window.addProduct = addProduct;

// 🔥 LOAD + SHOW
async function loadProducts() {
  const snapshot = await getDocs(collection(db, "products"));
  const list = document.getElementById("list");

  list.innerHTML = "";

  snapshot.forEach((d) => {
    const p = d.data();

    list.innerHTML += `
      <div class="card">
        <h3>${p.name}</h3>
        <p>${p.price} BDT</p>

        <button onclick="editProduct('${d.id}','${p.name}','${p.price}','${p.img}')">Edit</button>
        <button onclick="deleteProduct('${d.id}')">Delete</button>
      </div>
    `;
  });
}

// 🔥 EDIT BUTTON CLICK
function editProduct(id, name, price, img) {
  document.getElementById("name").value = name;
  document.getElementById("price").value = price;
  document.getElementById("img").value = img;

  editId = id;

  alert("Now click UPDATE button 🔄");
}
window.editProduct = editProduct;

// 🔥 UPDATE
async function updateProduct() {
  if (!editId) return alert("Click Edit first!");

  const name = document.getElementById("name").value;
  const price = parseInt(document.getElementById("price").value);
  const img = document.getElementById("img").value;

  await updateDoc(doc(db, "products", editId), {
    name,
    price,
    img
  });

  alert("Updated ✅");

  editId = null;
  loadProducts();
}
window.updateProduct = updateProduct;

// 🔥 DELETE
async function deleteProduct(id) {
  await deleteDoc(doc(db, "products", id));
  loadProducts();
}
window.deleteProduct = deleteProduct;

// RUN
loadProducts();
