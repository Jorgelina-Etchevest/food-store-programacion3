# 🍔 Food Store - Programación III

## Descripción del proyecto

**Food Store** es una aplicación web de ecommerce desarrollada como trabajo práctico para la materia **Programación III** de la carrera **Técnico Superior en Programación** de la **Universidad Tecnológica Nacional (UTN)**.

El proyecto consiste en una tienda online simple orientada a la gestión de productos alimenticios, permitiendo a los usuarios visualizar productos, filtrarlos por categoría, realizar búsquedas, agregarlos al carrito de compras y gestionar cantidades de productos seleccionados.

Además, el sistema implementa persistencia de datos mediante **Local Storage**, permitiendo conservar el contenido del carrito incluso si el usuario recarga o cierra la página.

## Funcionalidades principales

* Visualización dinámica de productos.
* Filtrado por categorías.
* Búsqueda de productos por nombre, descripción o categoría.
* Agregado de productos al carrito.
* Incremento y disminución de cantidades dentro del carrito.
* Eliminación de productos.
* Cálculo automático del total de compra.
* Persistencia de datos utilizando **Local Storage**.
* Navegación entre catálogo y carrito.

## Tecnologías utilizadas

* **HTML5** para la estructura de la aplicación.
* **CSS3** para el diseño y estilos visuales.
* **TypeScript** para la lógica del sistema y tipado.
* **Local Storage** en la persistencia de datos del carrito.
* **Vite** para el entorno de desarrollo y ejecución.

## Estructura del proyecto

```plaintext
src/
│── data/
│   └── data.ts
│
│── types/
│   ├── product.ts
│   └── categoria.ts
│
│── pages/
│   └── store/
│       ├── home/
│       │   ├── home.html
│       │   ├── home.css
│       │   └── home.ts
│       │
│       └── cart/
│           ├── cart.html
│           ├── cart.css
│           └── cart.ts
```

## Instrucciones para ejecutar el proyecto

### 1. Clonar el repositorio

Abrir una terminal y ejecutar:

git clone URL_DEL_REPOSITORIO

### 2. Ingresar a la carpeta del proyecto

cd nombre-del-proyecto

### 3. Instalar dependencias

Ejecutar:

npm install

### 4. Iniciar el servidor de desarrollo

Ejecutar:

npm run dev

### 5. Abrir el proyecto en el navegador

Una vez iniciado el servidor, abrir la URL generada por Vite, generalmente:

http://localhost:5173

## Autor

**Jorgelina Etchevest**
Trabajo práctico desarrollado para **Programación III – Técnicatura Universitaria en Programación – UTN**.
