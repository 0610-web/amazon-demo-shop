async function loadProducts() {
  const res = await fetch('products.json');
  const products = await res.json();

  const list = document.getElementById('product-list');

  products.forEach(p => {
    const html = `
      <div class="list-item" onclick="window.location='product.html?id=${p.id}'">
        <img src="${p.images[0]}" class="list-img">
        <div class="list-info">
          <h3>${p.title}</h3>
          <p class="price">$${p.price}</p>
          <p>${p.description.substring(0,80)}...</p>
        </div>
      </div>
    `;
    list.insertAdjacentHTML('beforeend', html);
  });
}

loadProducts();
