// Ensure products storage exists (NO default products)

if (!localStorage.getItem("products")) {
    localStorage.setItem("products", JSON.stringify([]));
}

// Helper: get all products (single source of truth)
function getProducts() {
    return JSON.parse(localStorage.getItem("products")) || [];
}

// Helper: save products
function saveProducts(data) {
    localStorage.setItem("products", JSON.stringify(data));
}
