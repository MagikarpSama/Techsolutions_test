# Tech Solutions - Sistema de Gestión de Proyectos

## Descripción
Este proyecto moderniza el sistema de gestión de proyectos de la empresa Tech Solutions, utilizando React para el frontend y Express para el backend. Permite crear, listar, actualizar, eliminar y consultar proyectos, además de mostrar el valor de la UF del día desde un servicio externo.

## Estructura del Proyecto
```
techsolutions/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── components/
│       │   └── UFValue.js
│       ├── services/
│       │   └── proyectoService.js
│       ├── views/
│       │   ├── ActualizarProyecto.js
│       │   ├── CrearProyecto.js
│       │   ├── EliminarProyecto.js
│       │   ├── ListaProyectos.js
│       │   └── ObtenerProyecto.js
│       ├── App.js
│       ├── index.js
│       └── index.css
└── README.md
```

## Requerimientos Cubiertos
- Rutas API para listar, crear, eliminar, actualizar y obtener proyectos.
- Controladores conectados a modelos estáticos.
- Modelo de Proyecto con: Id, Nombre, Fecha de Inicio, Estado, Responsable, Monto.
- Vistas en React para cada operación CRUD.
- Componente reutilizable que muestra el valor de la UF del día.

## Instalación y Ejecución

### Backend
1. Ve a la carpeta `backend`:
   ```powershell
   cd backend
   ```
2. Instala dependencias:
   ```powershell
   npm install
   ```
3. Ejecuta el servidor:
   ```powershell
   node server.js
   ```
   El backend estará disponible en `http://localhost:4000/api/proyectos`.

### Frontend
1. Ve a la carpeta `frontend`:
   ```powershell
   cd frontend
   ```
2. Instala dependencias:
   ```powershell
   npm install
   ```
3. Ejecuta la aplicación React:
   ```powershell
   npm start
   ```
   La app estará disponible en `http://localhost:3000`.


## Uso
- Crea, lista, actualiza, elimina y consulta proyectos desde la interfaz web.
- Visualiza el valor de la UF del día en la parte superior de la app.

## Ejemplos de Uso de la API

### Obtener todos los proyectos
```http
GET http://localhost:4000/api/proyectos
```

### Crear un proyecto
```http
POST http://localhost:4000/api/proyectos
Content-Type: application/json
{
  "nombre": "Nuevo Proyecto",
  "fechaInicio": "2025-07-25",
  "estado": "En progreso",
  "responsable": "Juan Pérez",
  "monto": 1000000
}
```

### Actualizar un proyecto
```http
PUT http://localhost:4000/api/proyectos/:id
Content-Type: application/json
{
  "estado": "Finalizado"
}
```

### Eliminar un proyecto
```http
DELETE http://localhost:4000/api/proyectos/:id
```

## Dependencias Principales

### Backend
- express
- cors
- nodemon (desarrollo)

### Frontend
- react
- axios

## Notas sobre Despliegue
- Para producción, se recomienda configurar variables de entorno para puertos y URLs.
- Usar herramientas como PM2 para mantener el backend activo.
- Considerar el uso de HTTPS y configuración de CORS adecuada.

##