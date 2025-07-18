Entrega TP NodeJS 
Autora: Camila Salini

API RESTful para la gestión de productos, autenticación de usuarios y protección de rutas con JWT.  
Desarrollada en Node.js, Express y Firebase Firestore.


## Características

- CRUD de productos con identificador personalizado
- Autenticación de usuarios con JWT
- Protección de rutas sensibles
- CORS habilitado para frontend externo


## Requisitos

- Node.js >= 16.x
- npm >= 8.x
- Cuenta de Firebase con Firestore


## Rutas principales

### Productos ('/api/products')
- 'GET /api/products' — Lista todos los productos
- 'GET /api/products/:codigo' — Obtiene un producto por su código
- 'POST /api/products/create' — Crea un nuevo producto (requiere autenticación)
- 'DELETE /api/products/:codigo' — Elimina un producto por su código (requiere autenticación)

#### Ejemplo de request para crear producto:
POST /api/products/create
Headers: { "Authorization": "Bearer <token>" }
Body:
{
  "codigo": "A123",
  "nombre": "Producto X",
  "precio": 100,
  "stock": 10
}


### Autenticación ('/auth')
- POST /auth — Login de usuario. Recibe json { "email": "...", "password": "..." } y devuelve un Bearer Token.

#### Ejemplo de login:
POST /auth/login
Body:
{
  "email": "admin@admin.com",
  "password": "password"
}
