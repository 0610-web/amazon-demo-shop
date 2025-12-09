fetch("products.json")
    .then(res => res.json())
    .then(data => {
        let html = "";
        data.forEach(item => {
            html += `
            <div class="product-card">
                <img src="${item.image}">
                <div class="product-name">${item.name}</div>
                <div class="price">$${item.price}</div>
                <div class="add-cart">Add to Cart</div>
            </div>`;
        });

        document.getElementById("product-list").innerHTML = html;
    });
