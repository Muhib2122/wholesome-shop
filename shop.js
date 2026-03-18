import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "wholesome-shop-f4d0f.firebaseapp.com",
  projectId: "wholesome-shop-f4d0f",
  storageBucket: "wholesome-shop-f4d0f.appspot.com",
  messagingSenderId: "301482399120",
  appId: "1:301482399120:web:xxxx"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function loadProducts() {
  const querySnapshot = await getDocs(collection(db, "products"));
  const container = document.getElementById("product-list");

  container.innerHTML = "";

  querySnapshot.forEach((doc) => {
    const p = doc.data();

    container.innerHTML += `
      <div class="card">
        <img src="${p.img}" width="100%">
        <h3>${p.name}</h3>
        <p>${p.price} BDT</p>
        <button onclick="addToCart('${p.name}', ${p.price})">Add to Cart</button>
      </div>
    `;
  });
}

loadProducts();
