import { Injectable } from "@nestjs/common";
import { UpdateProductoDto } from "./productos/dto/update-producto.dto";

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  descripcion?: string;
}

@Injectable()
export class AppService {
  // Array de productos iniciales
  private productos: Producto[] = [
    { id: 1, nombre: 'Laptop', precio: 1200, descripcion: 'Laptop para oficina' },
    { id: 2, nombre: 'Mouse', precio: 25, descripcion: 'Mouse inalámbrico' },
    { id: 3, nombre: 'Teclado', precio: 45, descripcion: 'Teclado mecánico' },
  ];

  private idCounter = this.productos.length + 1;

  // Ejemplo de método para devolver todos los productos
  obtenerProductos(): Producto[] {
    return this.productos;
  }

  // Ejemplo de método para buscar un producto por ID
  buscarProducto(id: number): Producto | null {
    const producto = this.productos.find(p => p.id === id);
    return producto || null;
  }

  // Crear un nuevo producto
  crearProducto(producto: { nombre: string; precio: number; descripcion?: string }): Producto {
    const nuevoProducto: Producto = { id: this.idCounter++, ...producto };
    this.productos.push(nuevoProducto);
    return nuevoProducto;
  }

  // Actualizar un producto
  actualizarProducto(id: number, producto: UpdateProductoDto): Producto | null {
    const productoExistente = this.buscarProducto(id);
    if (!productoExistente) return null;

    Object.assign(productoExistente, producto);
    return productoExistente;
  }

  // Eliminar un producto
  eliminarProducto(id: number): Producto | null {
    const index = this.productos.findIndex(p => p.id === id);
    if (index === -1) return null;

    return this.productos.splice(index, 1)[0];
  }
}
  