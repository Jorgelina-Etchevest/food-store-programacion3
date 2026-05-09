export interface Producto {
id: number; 
nombre: string;
descripcion: string;
precio: number;
imagen: string;
categoria: string;
}

export interface CartItem extends Producto {
cantidad: number;
}