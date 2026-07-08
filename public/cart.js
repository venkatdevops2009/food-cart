let cart = [];
let prices = { Burger: 5, Pizza: 8, Soda: 2 };

function addToCart(item) {
  cart.push(item);
  renderCart();
}

function renderCart() {
  const cartList = document.getElementById('cart');
  cartList.innerHTML = '';
  let total = 0;

  cart.forEach(i => {
    const li = document.createElement('li');
    li.textContent = i + " - $" + prices[i];
    cartList.appendChild(li);
    total += prices[i];
  });

  document.getElementById('total').textContent = "Total: $" + total;
}

document.getElementById('checkout').addEventListener('click', () => {
  alert("Proceeding to checkout with " + cart.length + " items!");
});
