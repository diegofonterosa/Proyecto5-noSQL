# 🎬 Proyecto 5 — API REST con Node.js + MongoDB (noSQL)

[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-5.x-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://mongoosejs.com/)
[![Estado](https://img.shields.io/badge/Estado-Completado-brightgreen?style=flat-square)]()
[![ASIR](https://img.shields.io/badge/Formación-ASIR-0078D4?style=flat-square)]()

API REST desarrollada con **Node.js**, **Express 5** y **MongoDB** mediante **Mongoose**, que gestiona dos recursos: **películas** y **cines**. Implementa operaciones CRUD completas sobre una base de datos NoSQL y sigue una arquitectura **MVC** (Modelos, Controladores, Rutas). Proyecto formativo de **ASIR** enfocado en el desarrollo de APIs con bases de datos no relacionales.

---

## 📂 Estructura del Proyecto

```
Proyecto5-noSQL/
│
├── 📁 src/
│   ├── 📁 controllers/
│   │   ├── movie.controller.js     # Lógica CRUD de películas
│   │   └── cinema.controller.js    # Lógica CRUD de cines
│   ├── 📁 models/
│   │   ├── movie.model.js          # Schema Mongoose de Movie
│   │   └── cinema.model.js         # Schema Mongoose de Cinema
│   └── 📁 routes/
│       ├── movie.routes.js         # Rutas /api/movies
│       └── cinema.routes.js        # Rutas /api/cinemas
├── 📁 images/                      # Capturas / documentación visual
├── 📄 index.js                     # Entry point — servidor Express + conexión MongoDB
├── 📄 package.json
├── 📄 .env                         # Variables de entorno (no subir a producción)
└── 📄 .gitignore
```

---

## 🗃️ Modelos de Datos

### 🎥 Movie
```js
{
  title:    String  (requerido),
  year:     Number,
  genre:    String,
  director: String
}
```

### 🏛️ Cinema
```js
{
  name:     String  (requerido),
  location: String,
  capacity: Number
}
```

---

## 🔌 Endpoints de la API

### 🎥 Películas — `/api/movies`

| Método | Endpoint | Descripción |
|---|---|---|
| `GET` | `/api/movies` | Obtener todas las películas |
| `GET` | `/api/movies/:id` | Obtener una película por ID |
| `POST` | `/api/movies` | Crear una nueva película |
| `PUT` | `/api/movies/:id` | Actualizar una película por ID |
| `DELETE` | `/api/movies/:id` | Eliminar una película por ID |

### 🏛️ Cines — `/api/cinemas`

| Método | Endpoint | Descripción |
|---|---|---|
| `GET` | `/api/cinemas` | Obtener todos los cines |
| `GET` | `/api/cinemas/:id` | Obtener un cine por ID |
| `POST` | `/api/cinemas` | Crear un nuevo cine |
| `PUT` | `/api/cinemas/:id` | Actualizar un cine por ID |
| `DELETE` | `/api/cinemas/:id` | Eliminar un cine por ID |

---

## 💡 Ejemplos de uso

### Crear una película
```http
POST /api/movies
Content-Type: application/json

{
  "title": "Inception",
  "year": 2010,
  "genre": "Sci-Fi",
  "director": "Christopher Nolan"
}
```

### Crear un cine
```http
POST /api/cinemas
Content-Type: application/json

{
  "name": "Cinesa Marineda",
  "location": "A Coruña",
  "capacity": 250
}
```

### Actualizar una película
```http
PUT /api/movies/64abc123def456
Content-Type: application/json

{
  "genre": "Thriller"
}
```

---

## 🚀 Tecnologías Utilizadas

| Tecnología | Versión | Uso |
|---|---|---|
| **Node.js** | 18+ | Entorno de ejecución |
| **Express** | 5.x | Framework HTTP y enrutado |
| **MongoDB** | - | Base de datos NoSQL |
| **Mongoose** | 9.x | ODM para modelado y conexión |
| **dotenv** | 17.x | Gestión de variables de entorno |

---

## ⚙️ Instalación y Uso

### 1. Clonar el repositorio
```bash
git clone https://github.com/diegofonterosa/Proyecto5-noSQL.git
cd Proyecto5-noSQL
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```env
MONGO_URI=mongodb://localhost:27017/proyecto5
PORT=8080
```

> También puedes usar una URI de **MongoDB Atlas** para conectarte en la nube.

### 4. Iniciar el servidor

```bash
# Modo producción
npm start

# Modo desarrollo (con hot-reload)
npm run dev
```

El servidor estará disponible en: `http://localhost:8080`

---

## 🏗️ Arquitectura MVC

El proyecto sigue el patrón **Modelo — Vista — Controlador** adaptado a una API REST:

```
Petición HTTP
     │
     ▼
  Router (routes/)
     │  define los endpoints y delega
     ▼
  Controller (controllers/)
     │  contiene la lógica de negocio
     ▼
  Model (models/)
     │  define el schema y accede a MongoDB
     ▼
  MongoDB (Mongoose)
```

---

## 🎯 Objetivos de Aprendizaje

- ✅ Diseñar e implementar una API REST con Express 5
- ✅ Conectar una aplicación Node.js a MongoDB mediante Mongoose
- ✅ Definir schemas y modelos con validaciones en Mongoose
- ✅ Implementar operaciones CRUD completas (`find`, `findById`, `save`, `findByIdAndUpdate`, `findByIdAndDelete`)
- ✅ Estructurar un proyecto Node.js con arquitectura MVC
- ✅ Gestionar variables de entorno con `dotenv`
- ✅ Manejar errores HTTP con códigos de estado adecuados (`200`, `201`, `400`, `404`, `500`)

---

## 📋 Requisitos

- [Node.js 18+](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community) en local o cuenta en [MongoDB Atlas](https://www.mongodb.com/atlas)
- Cliente REST recomendado para pruebas: [Postman](https://www.postman.com/) o [Thunder Client](https://www.thunderclient.com/)

---

## 👨‍💻 Autor

**Diego Pérez Fonterosa**

[![GitHub](https://img.shields.io/badge/GitHub-diegofonterosa-181717?style=flat-square&logo=github)](https://github.com/diegofonterosa)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Diego%20Pérez-0A66C2?style=flat-square&logo=linkedin)](https://linkedin.com/in/diegofonterosa)

> Técnico de Soporte CRA en Segursystem Europa · Cursando ASIR y Máster en Ciberseguridad

---

## 📄 Licencia

Este proyecto tiene fines educativos. Puedes usar, modificar y distribuir el código con libertad mencionando al autor original.
