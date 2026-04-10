# 🐱 CatGallery - The Cat API (React + Vite)

## 📖 Descripción

CatGallery es una aplicación web desarrollada con **React + Vite** que consume la API pública de gatos **The Cat API** para mostrar una galería dinámica de imágenes.

El proyecto permite explorar gatos, aplicar filtros, gestionar favoritos y mejorar la experiencia del usuario mediante una interfaz moderna y reactiva.

🔗 API: https://thecatapi.com/

---

## 🎯 Objetivo del proyecto

- Practicar desarrollo frontend con **React**
- Consumir una **API REST real**
- Gestionar estado con hooks (`useState`, `useEffect`)
- Implementar persistencia con `localStorage`
- Crear una interfaz dinámica y modular
- Mejorar habilidades de arquitectura frontend

---

## 🧠 Funcionalidades principales

### 🏠 Galería
- Visualización de imágenes obtenidas desde la API
- Renderizado mediante componentes reutilizables
- Carga dinámica de contenido

### ⭐ Favoritos
- Guardado de imágenes en `localStorage`
- Añadir / eliminar favoritos
- Persistencia de datos entre sesiones

### 📄 Carga de imágenes
- Carga progresiva de imágenes
- Sistema de "Load more" o scroll infinito

### 🔍 Filtros
- Filtrado por raza, categoría y tipo de imagen
- Manejo de filtros con estado en React

### ℹ️ Modal de información
- Detalles de razas (temperamento, origen, descripción)
- Visualización en componente modal

---

## 🛠️ Tecnologías utilizadas

- ⚛️ React
- ⚡ Vite
- 🟨 JavaScript (ES6+)
- 🎨 CSS3
- 🌐 Fetch API
- 💾 LocalStorage

---

## 🔁 Arquitectura del proyecto

- Componentes reutilizables
- Separación de lógica y UI
- Gestión de estado con hooks
- Comunicación entre componentes mediante props

---

## 🚀 Instalación y ejecución

```bash
git clone https://github.com/TU_USUARIO/TU_REPO.git
cd TU_REPO
npm install
npm run dev
