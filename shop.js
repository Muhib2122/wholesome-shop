import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import {
  getFirestore,
  collection,
  onSnapshot
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

// 🔥 Init
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 🔥 LIVE PRODUCT LOAD (REAL-TIME)
function loadProducts() {
  const container = document.getElementById("product-list");

  onSnapshot(collection(db, "products"), (snapshot) => {
    container.innerHTML = "";

    snapshot.forEach((doc) => {
      const p = doc.data();

      container.innerHTML += `
        <div class="card">
          <img src="${p.img}" alt="${p.name}">
          <h3>${p.name}</h3>
          <p>${p.price} BDT</p>
          <button onclick="addToCart('${p.name}', ${p.price})">
            Add to Cart
          </button>
        </div>
      `;
    });
  });
}

// 🔥 RUN
loadProducts();
