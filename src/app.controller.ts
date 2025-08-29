import { Controller, Get, Post, Param, Body, Patch, Delete } from "@nestjs/common";
import { AppService } from './app.service';
import { UpdateProductoDto } from "./productos/dto/update-producto.dto";

@Controller('productos')
export class AppController {
    // Constructor para inyectar dependencias en una clase
    constructor(private readonly productosService: AppService) {}

    // Obtener todos los productos
    @Get()
    obtenerProductos() {
        return this.productosService.obtenerProductos();
    }

    // Obtener producto por ID
    @Get(':id')
    buscarProducto(@Param('id') id: string) {
        return this.productosService.buscarProducto(Number(id));
    }

    // Crear un nuevo producto
    @Post()
    crearProducto(@Body() producto: { nombre: string, precio: number, descripcion?: string }) {
        return this.productosService.crearProducto(producto);
    }

    // Actualizar producto por ID
    @Patch(':id')
    actualizarProducto(@Param('id') id: string, @Body() producto: UpdateProductoDto) {
        const productoActualizado = this.productosService.actualizarProducto(+id, producto);
        if (!productoActualizado) {
            return { mensaje: 'Producto no encontrado' };
        }
        return productoActualizado;
    }

    // Eliminar producto por ID
    @Delete(':id')
    eliminarProducto(@Param('id') id: string) {
        return this.productosService.eliminarProducto(+id);
    }
}
