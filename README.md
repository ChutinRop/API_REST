# 📦 Mi Primera API REST con NestJS

## 🎯 Objetivo

Proyecto realizado como parte de la **Tarea 6**, donde se implementa una API REST en **NestJS**, aplicando la **arquitectura por capas** (Controladores, Servicios, DTOs, Entidades) y un CRUD completo sobre el recurso `Productos`.

---

## 🛠️ Tecnologías

* [NestJS](https://nestjs.com/)
* TypeScript
* class-validator & class-transformer (para validaciones en DTOs)

---

## 📂 Estructura del Proyecto

```
src/
 ├── productos/
 │    ├── dto/
 │    │    ├── create-producto.dto.ts
 │    │    ├── update-producto.dto.ts
 │    ├── entities/
 │    │    └── producto.entity.ts
 │    ├── productos.controller.ts
 │    ├── productos.service.ts
 │    └── productos.module.ts
 └── app.module.ts
```

---

## ⚡ Endpoints

| Método | Ruta             | Descripción                      |
| ------ | ---------------- | -------------------------------- |
| GET    | `/productos`     | Obtener todos los productos      |
| GET    | `/productos/:id` | Obtener un producto por ID       |
| POST   | `/productos`     | Crear un nuevo producto          |
| PATCH  | `/productos/:id` | Actualizar un producto existente |
| DELETE | `/productos/:id` | Eliminar un producto             |

---

## 📝 Ejemplo de uso

### Crear un producto

```http
POST http://localhost:3000/productos
Content-Type: application/json

{
  "nombre": "Laptop Gamer",
  "precio": 1500,
  "stock": 10
}
```

### Respuesta

```json
{
  "id": 1,
  "nombre": "Laptop Gamer",
  "precio": 1500,
  "stock": 10
}
```

---

## 🚀 Instalación y ejecución

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/API_REST.git
   cd API_REST
   ```

2. Instalar dependencias:

   ```bash
   npm install
   ```

3. Ejecutar en modo desarrollo:

   ```bash
   npm run start:dev
   ```

4. Probar en:

   ```
   http://localhost:3000/productos
   ```

---

## 🧱 Notas

* No usa base de datos real, los datos se almacenan en un **array en memoria** dentro del servicio.
* Implementa validaciones con `class-validator`.
* Arquitectura por capas aplicada de forma estricta.

---
▶️VIDEO DE YOUTUBE: https://youtu.be/N1ChkxUFQcY