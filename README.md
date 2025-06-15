# Cómo levantar el proyecto

Sigue estos pasos para instalar y ejecutar el proyecto localmente:

1. **Clona el repositorio**

        git clone https://github.com/VzAnthony/filmix_total_renting.git
        cd filmix_total_renting

2. **Instala las dependencias**

      Asegúrate de tener instalado Node.js (v16 o superior). Luego ejecuta:

        npm install

3. **Inicia el servidor de desarrollo**

    El proyecto utiliza Vite para el entorno de desarrollo. Para levantar la aplicación, ejecuta:

        npm run dev

4. **Accede a la aplicación**

      Abre tu navegador y entra en la URL que aparece en la terminal, normalmente:

        http://localhost:5173

--- 


## Breve descripción de la arquitectura y decisiones tomadas

**filmix_total_renting** está construido con React, TypeScript y Vite como entorno de desarrollo. La arquitectura se diseñó para ser modular, escalable y fácil de mantener, siguiendo buenas prácticas de organización de carpetas y separación de responsabilidades.

- **React + TypeScript + Vite:** Se eligió este stack por su rapidez en el desarrollo, soporte moderno para módulos ES, recarga en caliente y tipado estático, lo que mejora la calidad y mantenibilidad del código.
- **Organización por componentes:** Los componentes de UI se agrupan en una carpeta dedicada, permitiendo su reutilización y facilitando la escalabilidad del proyecto.
- **Gestión de rutas:** Se utiliza React Router para la navegación entre páginas principales y páginas de detalle dinámicas, siguiendo el patrón `/movies/:id` para acceder a los detalles de cada película.
- **Consumo de API:** La información de las películas se obtiene de una API externa, centralizando las llamadas en servicios para desacoplar la lógica de negocio de la presentación.
- **Estado y favoritos:** El almacenamiento local (`localStorage`) se utiliza para gestionar la funcionalidad de favoritos, asegurando persistencia entre sesiones.
- **Estilos y responsive:** Los estilos se implementan en CSS, garantizando una experiencia responsive en dispositivos móviles y de escritorio.
- **Buenas prácticas de versionado:** El repositorio se encuentra en GitHub con commits descriptivos y diferenciados, facilitando el seguimiento de cambios y la colaboración.

Esta estructura permite mantener el código organizado, facilita el trabajo en equipo y la incorporación de nuevas funcionalidades en el futuro.

---

## Diseño de las rutas de carpetas (estructura de directorios)
```
filmix_total_renting/
├── public/
│   └── ... (archivos estáticos, favicon, etc.)
├── src/
│   ├── assets/           # Imágenes y recursos estáticos
│   ├── components/       # Componentes reutilizables de UI
│   ├── pages/            # Páginas principales
│   ├── services/         # Lógica para consumo de APIs
│   ├── hooks/            # Custom hooks
│   ├── main.tsx          # Punto de entrada de la app
│   ├── routes/           # Configuracion y rutas de la app
│   ├── styles/           # Estilos globales y variables de la app
│   ├── types/            # Tipados globales de la app
│   └── vite-env.d.ts     
├── .editorconfig         
├── .gitignore
├── .prettierrc
├── .eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.eslint.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
