function getQuery(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

const id = getQuery("id");

fetch("products.json")
  .then(res => res.json())
  .then(products => {
    const product = products.find(p => p.id == id);

    document.getElementById("product-container").innerHTML = `
      <div class="product-container">
        
        <div class="product-images">
          <img src="${product.images[0]}" class="main-image">
        </div>

        <div class="product-info">
          <h2>${product.title}</h2>
          <p class="price">$${product.price}</p>
          <p>${product.description}</p>
        </div>

        <div class="product-buybox">
          <button class="addcart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
          <button class="buy-btn" onclick="window.location='thankyou.html'">Buy Now</button>
        </div>
      </div>
    `;
  });

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  cart.push(id);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}
