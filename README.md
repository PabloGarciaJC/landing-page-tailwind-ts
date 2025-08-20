# Landing Page – Tailwind + TypeScript

Landing page desarrollada con **Tailwind CSS** y **TypeScript**, pensada como base escalable para integrar futuras funcionalidades, tecnologías o frameworks. Animaciones implementadas con Intersection Observer sin dependencias externas.

## Demo del Proyecto

[https://landing-page-tailwind-ts.com/](https://landing-page-tailwind-ts.pablogarciajc.com/)

| ![Imagen 1](https://pablogarciajc.com/wp-content/uploads/2025/06/landing-page-tailwind-ts.png) | ![Imagen 2](https://pablogarciajc.com/wp-content/uploads/2025/06/landing-page-tailwind-ts-2.png) |
|-----------|-----------|

---

## Funcionalidades principales

- Menú de navegación adaptable para dispositivos móviles y escritorio.
- Secciones integradas: Inicio, Nosotros, Servicios, Portafolio y Contacto.
- Formulario de contacto estilizado.
- Estilos personalizados usando configuración extendida de Tailwind (via CDN).

---

## Tecnologías utilizadas

- **Tailwind CSS** (vía CDN con configuración extendida en el `<head>`).
- **HTML5 semántico**.
- **TypeScript** (configurado como dependencia de desarrollo).
- Entorno preparado para escalar hacia herramientas como Vite o React.

---

## Animaciones

- Las animaciones se aplican dinámicamente a los elementos al entrar en el viewport.​
- Uso de IntersectionObserver para detectar la visibilidad y activar las animaciones.​
- Animaciones definidas con @keyframes y transiciones CSS para efectos suaves y fluidos.​
  
---

## Instalación

### Requisitos Previos

- Tener **Docker** y **Docker Compose** instalados.
- **Make**: Utilizado para automatizar procesos y gestionar contenedores de manera más eficiente.

### Pasos de Instalación

1. Clona el repositorio desde GitHub.
2. Dentro del repositorio, encontrarás un archivo **Makefile** que contiene los comandos necesarios para iniciar y gestionar tu aplicación.
3. Usa los siguientes comandos de **Make** para interactuar con la aplicación:

   - **`make init-app`**: Inicializa los contenedores y configura la aplicación.
   - **`make up`**: Levanta la aplicación y sus contenedores asociados.
   - **`make down`**: Detiene los contenedores y apaga la aplicación.
   - **`make shell`**: Ingresa al contenedor para interactuar directamente con el sistema en su entorno de ejecución.
   - **`make compile-ts`**: Compila Typescript

4. Además de estos comandos, dentro del archivo **Makefile** puedes encontrar otros comandos que te permitirán interactuar de manera más específica con los contenedores y los diferentes servicios que conforman la aplicación.

5. Accede a los siguientes URL:
   - **Aplicación Web**: [http://localhost:8081/](http://localhost:8081/)
   - **PhpMyAdmin**: [http://localhost:8082/](http://localhost:8082/)

---

## Contáctame / Sígueme en mis redes sociales

| Red Social   | Descripción                                              | Enlace                   |
|--------------|----------------------------------------------------------|--------------------------|
| **Facebook** | Conéctate y mantente al tanto de mis actualizaciones.    | [Presiona aquí](https://www.facebook.com/PabloGarciaJC) |
| **YouTube**  | Fundamentos de la programación, tutoriales y noticias.   | [Presiona aquí](https://www.youtube.com/@pablogarciajc)     |
| **Página Web** | Más información sobre mis proyectos y servicios.        | [Presiona aquí](https://pablogarciajc.com/)              |
| **LinkedIn** | Sigue mi carrera profesional y establece conexiones.     | [Presiona aquí](https://www.linkedin.com/in/pablogarciajc) |
| **Instagram**| Fotos, proyectos y contenido relacionado.                 | [Presiona aquí](https://www.instagram.com/pablogarciajc) |
| **Twitter**  | Proyectos, pensamientos y actualizaciones.                | [Presiona aquí](https://x.com/PabloGarciaJC?t=lct1gxvE8DkqAr8dgxrHIw&s=09)   |

---
> _"El buen manejo de tus finanzas hoy construye la seguridad del mañana."_
