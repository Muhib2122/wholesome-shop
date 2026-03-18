import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const container = document.getElementById("products");

async function loadProducts() {
  const querySnapshot = await getDocs(collection(db, "products"));

  container.innerHTML = "";

  querySnapshot.forEach((doc) => {
    const p = doc.data();

    container.innerHTML += `
      <div class="product">
        <img src="${p.img}" class="product-img">
        <h3>${p.name}</h3>
        <p>${p.price} BDT</p>
        <button onclick="addToCart('${p.name}', ${p.price})">
          Add to Cart
        </button>
      </div>
    `;
  });
}

loadProducts();
