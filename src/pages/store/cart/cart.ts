

const actualizarCarrito = (carrito: any[]) => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
  renderCarrito();
};

const obtenerCarrito = () => {
  const carrito = localStorage.getItem("carrito");
  return carrito ? JSON.parse(carrito) : [];
};

const contenedorCarrito = document.getElementById("contenedor-carrito");
const totalCarrito = document.getElementById("total-carrito");

const renderCarrito = () => {
  const carrito = obtenerCarrito();
  contenedorCarrito!.innerHTML = "";
  let total = 0;
  if (carrito.length === 0) {
    contenedorCarrito!.innerHTML = "<p>El carrito está vacío</p>";
    totalCarrito!.textContent = "";
    return;
  }
  carrito.forEach((producto: any) => {
    total += producto.precio * producto.cantidad;

    const div = document.createElement("div");

    div.innerHTML = `
      <div class="item-carrito">
        <img src="${producto.imagen}" class="img-carrito">
        <div class="info-carrito">
          <h4>${producto.nombre}</h4>
          <p>$${producto.precio}</p>
          <div class="controles">
            <button class="menos">-</button>
            <span>${producto.cantidad}</span>
            <button class="mas">+</button>
            <button class="eliminar">Eliminar</button>
          </div>
        </div>
      </div>
    `;

    const btnMas = div.querySelector(".mas");
    const btnMenos = div.querySelector(".menos");
    const btnEliminar = div.querySelector(".eliminar");

    btnMas?.addEventListener("click", () => {
      producto.cantidad += 1;
      actualizarCarrito(carrito);
    });

    btnMenos?.addEventListener("click", () => {
      if (producto.cantidad > 1) {
        producto.cantidad -= 1;
      } else {
        const index = carrito.findIndex((p:any) => p.id === producto.id);
        carrito.splice(index, 1);
      }

      actualizarCarrito(carrito);
    });

    btnEliminar?.addEventListener("click", () => {
      const nuevoCarrito = carrito.filter((p:any) => p.id !== producto.id);
      actualizarCarrito(nuevoCarrito);
    });

    contenedorCarrito?.appendChild(div);
  });

  totalCarrito!.textContent = `Total: $${total}`;
};

const btnComprar = document.querySelector(".btn-comprar");

btnComprar?.addEventListener("click", () => {
  alert("Simulación de compra OK");
  localStorage.removeItem("carrito");
  renderCarrito();
});

renderCarrito();
