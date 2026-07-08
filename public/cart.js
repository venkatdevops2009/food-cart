// cart.js — Food Cart Logic

// Cart array to store items
let cart = [];

// Prices for each item
const prices = {
  "Cheese Burger": 5,
  "Margherita Pizza": 8,
  "Spicy Noodles": 6,
  "Fresh Sushi": 12
};

// Add item to cart
function addToCart(item) {
  cart.push(item);
  renderCart();
}

// Render cart items and total
function renderCart() {
  const cartList = document.getElementById('cart');
  cartList.innerHTML = '';
  let total = 0;

  cart.forEach(i => {
    const li = document.createElement('li');
    li.textContent = `${i} - $${prices[i]}`;
    cartList.appendChild(li);
    total += prices[i];
  });

  document.getElementById('total').textContent = `Total: $${total}`;
}

// Checkout button logic
document.getElementById('checkout').addEventListener('click', () => {
  if (cart.length === 0) {
    alert("Your cart is empty. Add some items first!");
  } else {
    alert(`Proceeding to checkout with ${cart.length} items. Total: $${cart.reduce((sum, i) => sum + prices[i], 0)}`);
  }
});
