import type { Producto } from "../types/product";

export const categorias: string[] = [
"Todos",
"Hamburguesas",
"Pizzas",
"Papas Fritas",
"Bebidas"
];

export const productos: Producto[] = [
{
    id: 1,
    nombre: "Hamburguesa",
    descripcion: "Hamburguesa Tradicional con Queso",
    precio: 18000,
    imagen: "/img/hamburguesa.jpg",
    categoria: "Hamburguesas"
},
{
    id: 2,
    nombre: "Hamburguesa Veggie",
    descripcion: "Hamburguesa de Remolacha con vegetales asados",
    precio: 14000,
    imagen: "/img/veggie.jpg",
    categoria: "Hamburguesas"
},
{
    id: 3,
    nombre: "Muzzarella",
    descripcion: "Muzzarella",
    precio: 25000,
    imagen: "/img/pizza.jpg",
    categoria: "Pizzas"
},
{
    id: 4,
    nombre: "Rúcula y Jamón Crudo",
    descripcion: "Pizza con Rúcula de la huerta y Jamón Crudo serrano",
    precio: 28500,
    imagen: "/img/jamon_rucula.jpg",
    categoria: "Pizzas"
},
{
    id: 5,
    nombre: "Papas Fritas",
    descripcion: "Papas Fritas",
    precio: 11500,
    imagen: "/img/papas_fritas.jpg",
    categoria: "Papas Fritas"
},
{
    id: 6,
    nombre: "Bastones de Pollo",
    descripcion: "Bastones de Pollo Frito",
    precio: 15500,
    imagen: "/img/bastones.jpg",
    categoria: "Papas Fritas"
},
{
    id: 7,
    nombre: "Gaseosas",
    descripcion: "Gaseosas 500ml",
    precio: 5500,
    imagen: "/img/gaseosas.jpg",
    categoria: "Bebidas"
},
{
    id: 8,
    nombre: "Gaseosas en Latas",
    descripcion: "Gaseosas en Latas",
    precio: 6500,
    imagen: "/img/latas.jpg",
    categoria: "Bebidas"
},
{
    id: 9,
    nombre: "Cerveza",
    descripcion: "Cerveza Artesanal",
    precio: 8500,
    imagen: "/img/cerveza.png",
    categoria: "Bebidas"
}
];