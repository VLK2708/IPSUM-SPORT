document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".add-to-cart");
  const cartList = document.getElementById("cart-list");
  const totalElement = document.getElementById("total");
  let total = 0;

  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      const card = btn.closest(".product-card");
      const name = card.querySelector(".card-title").textContent;
      const priceText = card.querySelector(".card-text").textContent.replace("$", "").replace(".", "").trim();
      const price = parseFloat(priceText);

      // Crear el ítem en el carrito
      const item = document.createElement("li");
      item.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
      item.innerHTML = `
        ${name}
        <span>$${price.toLocaleString("es-CO")}</span>
      `;

      cartList.appendChild(item);

      // Actualizar total
      total += price;
      totalElement.textContent = `Total: $${total.toLocaleString("es-CO")}`;
    });
  });
});
