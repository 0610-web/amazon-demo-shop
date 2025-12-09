function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}

function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const box = document.getElementById("cart-items");

  let total = 0;

  cart.forEach(p => {
    box.innerHTML += `
      <div class="cart-item">
        <img src="${p.images[0]}" class="cart-img">
        <div>${p.title}</div>
        <div>$${p.price}</div>
      </div>
    `;
    total += p.price;
  });

  document.getElementById("total-price").innerText = total.toFixed(2);
}

if (location.pathname.includes("cart.html")) loadCart();
