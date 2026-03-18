let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  document.getElementById("cart-count").innerText = cart.length;
}

function toggleCart() {
  document.getElementById("cartPanel").classList.toggle("active");
  renderCart();
}

function renderCart() {
  let container = document.getElementById("cart-items");
  let total = 0;

  container.innerHTML = "";

  cart.forEach((item, index) => {
    total += item.price;

    container.innerHTML += `
      <p>
        ${item.name} - ${item.price} BDT 
        <button onclick="removeItem(${index})">Remove</button>
      </p>
    `;
  });

  document.getElementById("total").innerText = "Total: " + total + " BDT";
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
  updateCartCount();
}

function goCheckout() {
  alert("Checkout system next step e add korbo 🔥");
}

updateCartCount();
