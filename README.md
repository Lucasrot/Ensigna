# E-commerce React Project
Este proyecto es un e-commerce desarrollado en el marco del curso de React en Coderhouse. Se trata de una Single Page Application (SPA) que permite a los usuarios explorar una variedad de productos, agregar productos al carrito de compras, y realizar una compra que se almacena en una base de datos de Firebase.

# Tecnologías Utilizadas
React: Biblioteca de JavaScript para construir la interfaz de usuario.
Vite: Un build tool rápido y minimalista para proyectos modernos de front-end.
React-Bootstrap: Una biblioteca de componentes Bootstrap reconstruidos completamente con React.
Firebase: Plataforma de Google para el desarrollo de aplicaciones móviles y web, utilizada para la autenticación y el almacenamiento de datos.
CSS: Estilos personalizados.
Funcionalidades
Exploración de Productos: Los usuarios pueden navegar por una variedad de productos presentados en la tienda.
Carrito de Compras: Los usuarios pueden agregar y eliminar productos del carrito, y ver el total acumulado.
Formulario de Compra: Los usuarios pueden ingresar sus datos personales (nombre, teléfono y correo electrónico) para completar la compra.
Persistencia de Datos: Las órdenes de compra se almacenan en Firebase, permitiendo la persistencia de la información.
Instalación y Configuración
Prerrequisitos
Node.js: Asegúrate de tener instalado Node.js en tu máquina. Descargar Node.js
Firebase: Necesitas una cuenta de Firebase y un proyecto configurado para utilizar la base de datos Firestore.
Instalación del Proyecto
Clona este repositorio:

bash
Copiar código
git clone https://github.com/tu-usuario/nombre-del-repositorio.git
cd nombre-del-repositorio
Instala las dependencias:

bash
Copiar código
npm install
Configura Firebase:

Crea un archivo .env en la raíz del proyecto con las siguientes variables de entorno, utilizando tus credenciales de Firebase:

makefile
Copiar código
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
Inicia el proyecto:

bash
Copiar código
npm run dev
Esto abrirá el proyecto en tu navegador en http://localhost:3000.

# Estructura del Proyecto
El proyecto sigue una estructura de carpetas organizada:

bash
Copiar código
├── src
│   ├── components   # Componentes reutilizables
│   ├── context      # Contextos de React (e.g., CartContext)
│   ├── pages        # Páginas principales de la aplicación
│   ├── firebase     # Conexión y configuración de Firebase
│   ├── assets       # Archivos estáticos como imágenes y estilos
│   └── App.jsx      # Componente principal de la aplicación
├── public           # Archivos públicos (index.html, etc.)
├── .env             # Variables de entorno
├── .gitignore       # Archivos y carpetas ignorados por git
├── package.json     # Dependencias y scripts del proyecto
└── README.md        # Documentación del proyecto
