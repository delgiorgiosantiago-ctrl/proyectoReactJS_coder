# Proyecto React E-commerce – Entrega Final

## 🛒 Descripción del Proyecto

Esta es una **Single Page Application (SPA) de e-commerce** desarrollada con **React** y conectada a **Firebase Firestore**.  

Permite navegar por un catálogo de productos, filtrar por categorías, ver detalles de cada producto, agregar productos al carrito, modificar cantidades, eliminar productos, y finalizar compras generando órdenes en la base de datos.  

El proyecto implementa conceptos clave de React como **componentes funcionales**, **hooks (`useState`, `useEffect`, `useContext`)**, **React Router**, **estado global con Context**, y buenas prácticas de estructura y organización de código.

---

## 🧩 Funcionalidades

### Navegación
- SPA funcional, sin recargas de página.  
- Rutas dinámicas para categorías y detalle de producto.  
- Indicación de ruta activa mediante `NavLink`.  
- Componente `NotFound` para rutas inexistentes.  

### Catálogo y Detalle de Productos
- Lectura de productos desde **Firebase / Firestore**.  
- Renderizado condicional con **loaders** mientras se cargan los datos.  
- Componente **ItemCount** para seleccionar cantidad de productos.  
- Oculta ItemCount al agregar producto al carrito.  

### Carrito de Compras
- Estado global con **CartContext / CartProvider**.  
- Funciones para **agregar, aumentar, disminuir, eliminar y vaciar productos**.  
- Botón `-` deshabilitado cuando la cantidad es 1.  
- Confirmación con **SweetAlert2** al eliminar productos.  
- Carrito muestra **subtotal, total y cantidad total de productos**.  
- Persistencia de estado durante la sesión.  

### Checkout / Formulario de Compra
- Validación de campos (nombre, email, teléfono, dirección).  
- Feedback visual tras confirmar la compra (SweetAlert con **ID de orden**).  
- Limpieza del carrito tras generar la orden.  

---

## ⚛️ Estructura de Componentes

App
├─ NavBar
│ └─ CartWidget
├─ ItemListContainer
│ └─ ItemList
│ └─ Item
├─ ItemDetailContainer
│ └─ ItemDetail
│ └─ ItemCount
├─ Cart
│ └─ CartItem
└─ CheckoutForm


- Contenedores (`ItemListContainer`, `ItemDetailContainer`) manejan la **lógica y estado**.  
- Componentes de presentación (`ItemList`, `Item`, `ItemDetail`) **solo renderizan UI**.  

---

## ⚡ Tecnologías y Librerías
- **React** – SPA y componentes funcionales  
- **React Router DOM** – Navegación SPA  
- **Firebase Firestore** – Base de datos en la nube  
- **SweetAlert2** – Feedback visual  
- **Bootstrap** – Estilos y layout  
- **JavaScript ES6+** – Funcionalidades y lógica  

---

## 🚀 Instalación y Ejecución

```bash
# Clonar el repositorio
git clone https://github.com/delgiorgiosantiago-ctrl/proyectoReactJS_coder.git

# Entrar a la carpeta del proyecto
cd proyectoReactJS_coder

# Instalar dependencias
npm install

# Crear un archivo .env con las credenciales de Firebase (o usar .env.example)
VITE_API_KEY=xxxx
VITE_AUTH_DOMAIN=xxxx
VITE_PROJECT_ID=xxxx
VITE_STORAGE_BUCKET=xxxx
VITE_MESSAGING_SENDER_ID=xxxx
VITE_APP_ID=xxxx

# Ejecutar la aplicación
npm run dev
