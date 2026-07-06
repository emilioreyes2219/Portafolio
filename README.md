# Portafolio — Emilio

Portafolio personal de una sola página construido con **Bootstrap 5**, hecho
como ejercicio del curso de Desarrollo Web. Muestra quién soy, mis
habilidades (incluyendo las que estoy aprendiendo) y algunos proyectos que
tengo planeados.

---

## Demo en vivo (GitHub Pages)

[PEGAR AQUÍ EL LINK DE GITHUB PAGES]

Repositorio: [PEGAR AQUÍ EL LINK DEL REPOSITORIO]

---

## Descripción del proyecto

- **Framework CSS usado:** Bootstrap 5 (vía CDN), más un archivo
  `portafolio.css` con estilos personalizados adicionales.
- **Plantilla base:** [PEGAR AQUÍ EL LINK DE LA PLANTILLA QUE ELEGISTE]
- **Iconos:** Bootstrap Icons (vía CDN).

### Secciones del portafolio

- **Inicio:** foto de perfil, nombre y un botón para ir a proyectos o a
  contacto.
- **Sobre mí:** breve descripción de quién soy y qué estoy aprendiendo.
- **Habilidades:** tarjetas con las tecnologías que ya conozco (HTML, CSS,
  JavaScript, Bootstrap, Git y GitHub) y las que estoy aprendiendo (Python,
  SQL, diseño responsivo).
- **Proyectos:** tarjetas con 3 proyectos planeados: un sistema para
  gimnasio, una tienda en línea básica y una calculadora de propinas.
- **Contacto:** formulario con validación básica en JavaScript y enlaces a
  GitHub, LinkedIn y correo.

---

## Proceso de creación

1. Elegí Bootstrap 5 como base de estilos y lo agregué por CDN en el
   `<head>` del `index.html`, junto con Bootstrap Icons para los íconos de
   habilidades y redes sociales.
2. Partí de la estructura típica de un portafolio de una sola página:
   barra de navegación fija, encabezado grande de bienvenida, y secciones
   apiladas (Sobre mí, Habilidades, Proyectos, Contacto).
3. Adapté el contenido de cada sección a mi información: agregué mi nombre,
   una descripción corta sobre mí, y separé mis habilidades en "las que ya
   tengo" y "las que estoy aprendiendo" usando un badge de Bootstrap.
4. En Proyectos usé tarjetas (`card`) de Bootstrap para mostrar 3 ideas de
   proyectos que quiero desarrollar más adelante, ya que todavía no tengo
   proyectos reales terminados.
5. Agregué un archivo `portafolio.css` para personalizar el encabezado con
   un degradado de color y ajustar el tamaño de la foto de perfil.
6. Agregué un archivo `portafolio.js` con dos cosas: validación simple del
   formulario de contacto (que no se envíe vacío) y un botón para subir al
   inicio de la página cuando se hace scroll hacia abajo.
7. Reemplacé la imagen de perfil de la plantilla por mi foto real,
   guardándola en la carpeta `/img`.

---

## Capturas de pantalla

> Reemplazar por las imágenes reales guardadas en la carpeta `/img`.

![Inicio del portafolio](img/captura-inicio.png)
![Sección de habilidades](img/captura-habilidades.png)
![Sección de proyectos](img/captura-proyectos.png)
![Formulario de contacto](img/captura-contacto.png)

---

## Estructura del repositorio

```
/portafolio
 ├── README.md
 ├── index.html
 ├── /css
 │    └── portafolio.css
 ├── /js
 │    └── portafolio.js
 └── /img
      ├── foto-perfil.jpg
      └── (capturas usadas en este README)
```

> **Nota:** el archivo `img/foto-perfil.svg` es solo un marcador temporal.
> Debe reemplazarse por una foto real, formal y profesional del estudiante
> antes de entregar el proyecto.

---

## Autoría

Proyecto individual — curso de Desarrollo Web.
