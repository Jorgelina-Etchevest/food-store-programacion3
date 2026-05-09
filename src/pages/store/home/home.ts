import { productos, categorias } from "../../../data/data"; 

//Obtener carrito- Guardar en el carrito - Agregar items al carrito

const obtenerCarrito = () => {
const carrito = localStorage.getItem("carrito");
return carrito ? JSON.parse(carrito) : [];
};

const guardarCarrito = (carrito: any[]) => {
localStorage.setItem("carrito", JSON.stringify(carrito));
};

const agregarAlCarrito = (producto: any) => {
const carrito = obtenerCarrito();
const existe = carrito.find((item:any) => item.id === producto.id);
if (existe) {
    existe.cantidad += 1;
} else {
    carrito.push({ ...producto, cantidad: 1 });
}

guardarCarrito(carrito);

alert("Producto agregado al carrito");
};

// Mostrar productos

const contenedorProductos = document.getElementById("contenedor-productos");

const cargarProductos = (lista: typeof productos): void => {
contenedorProductos!.innerHTML = "";

lista.forEach((producto) => {
const article = document.createElement("article");

article.innerHTML = `
<img src="${producto.imagen}" alt="${producto.nombre}">
<h3>${producto.nombre}</h3>
<p>${producto.descripcion}</p>
<p>$${producto.precio}</p>
<button>Agregar</button>
`;

const boton = article.querySelector("button");

boton?.addEventListener("click", () => {
agregarAlCarrito(producto);
});

contenedorProductos?.appendChild(article);
});
};

//Categorías

const listaCategorias = document.getElementById("lista-categorias");

const cargarCategorias = (): void => {
categorias.forEach((categoria) => {
const li = document.createElement("li");
li.innerHTML = `<a href="#">${categoria}</a>`;

li.addEventListener("click", (e) => {
e.preventDefault();

  // 1. quitar clase a todos
document.querySelectorAll("#lista-categorias li").forEach((item) => {
    item.classList.remove("activa");
});

  // 2. agregar clase al seleccionado
li.classList.add("activa");

  // 3. filtrar productos
if (categoria === "Todos") {
    cargarProductos(productos);
} else {
    const filtrados = productos.filter(
    (p) => p.categoria === categoria
    );
    cargarProductos(filtrados);
}
});

listaCategorias?.appendChild(li);
});
};

cargarCategorias();
cargarProductos(productos);

//Buscador

const inputBusqueda = document.querySelector("input");
inputBusqueda?.addEventListener("input", () => {
const texto = inputBusqueda.value.toLowerCase();

const filtrados = productos.filter((p) =>
p.nombre.toLowerCase().includes(texto) ||
p.descripcion.toLowerCase().includes(texto) ||
p.categoria.toLowerCase().includes(texto)
);

cargarProductos(filtrados);
});

// Form

const formBusqueda = document.querySelector("form");
formBusqueda?.addEventListener("submit", (e) => {
e.preventDefault();
});