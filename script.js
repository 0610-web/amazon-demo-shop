// 加载 products.json
fetch('products.json')
  .then(res => res.json())
  .then(products => {
    let list = document.getElementById("product-list");

    products.forEach(p => {
      let item = document.createElement("div");
      item.className = "list-item";
      item.onclick = () => {
        window.location.href = `product.html?id=${p.id}`;
      };

      item.innerHTML = `
        <img src="${p.images[0]}" class="list-img">
        <div class="list-info">
          <h3>${p.title}</h3>
          <p class="price">$${p.price}</p>
          <p>${p.description.substring(0, 60)}...</p>
        </div>
      `;

      list.appendChild(item);
    });
  });
