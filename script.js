let cart = [];
let total = 0;

// ADD TO CART
function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  updateCart();
}

// UPDATE CART
function updateCart() {
  let items = document.getElementById("cart-items");
  let count = document.getElementById("cart-count");
  let totalEl = document.getElementById("cart-total");

  items.innerHTML = "";

  cart.forEach((item, i) => {
    items.innerHTML += `
      <div>
        ${item.name} - ₹${item.price}
        <button onclick="removeItem(${i})">x</button>
      </div>
    `;
  });

  count.innerText = cart.length;
  totalEl.innerText = total;
}

// REMOVE
function removeItem(i) {
  total -= cart[i].price;
  cart.splice(i,1);
  updateCart();
}

// TOGGLE CART
function toggleCart() {
  document.getElementById("cart").classList.toggle("show");
}

// FILTER
function filterProducts(category) {
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    if (category === "all" || card.dataset.category === category) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// SCROLL
function scrollToProducts() {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}
