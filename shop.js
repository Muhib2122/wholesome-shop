import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔥 Firebase Config (already set)
const firebaseConfig = {
  apiKey: "AIzaSyBqFh9-695gFPpzCxieKf5fVoZ_JedJRL8",
  authDomain: "wholesome-shop-f4d0f.firebaseapp.com",
  projectId: "wholesome-shop-f4d0f",
  storageBucket: "wholesome-shop-f4d0f.appspot.com",
  messagingSenderId: "301482399120",
  appId: "1:301482399120:web:ce87c2f88edb2018fd4f15"
};

// 🔥 Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 🔥 Load Products from Firebase
async function loadProducts() {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    const container = document.getElementById("product-list");

    container.innerHTML = "";

    querySnapshot.forEach((doc) => {
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

  } catch (error) {
    console.error("Firebase Error:", error);
  }
}

// 🔥 Run function
loadProducts();
