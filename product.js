async function loadProduct() {
  const url = new URL(window.location.href);
  const id = url.searchParams.get("id");

  const res = await fetch("products.json");
  const products = await res.json();

  const p = products.find(x => x.id == id);

  document.getElementById("product-title").innerText = p.title;
  document.getElementById("product-description").innerText = p.description;
  document.getElementById("product-price").innerText = "$" + p.price;
  document.getElementById("main-image").src = p.images[0];

  const thumbs = document.getElementById("thumbs");
  p.images.forEach(img => {
    thumbs.innerHTML += `<img class="thumb" onclick="document.getElementById('main-image').src='${img}'" src="${img}">`;
  });

  document.getElementById("add-to-cart-btn").onclick = () => addToCart(p);
}

loadProduct();
