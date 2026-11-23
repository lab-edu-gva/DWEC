---
tipo: material-alumnado
asignatura: DWEC
curso: 2º DAW
unidad: UD1 - Selección de arquitecturas y herramientas de programación cliente
sesion: S07
resultado_aprendizaje: RA1
criterios_evaluacion: [RA1.e]
estado: preparado
impartido: false
---

# S07 – Integración de HTML, CSS y JavaScript

## 1. Introducción y objetivos

HTML define la estructura, CSS la presentación y JavaScript el comportamiento. Para que el navegador ejecute una aplicación cliente, estas tecnologías deben integrarse correctamente.

Al finalizar podrás enlazar archivos externos, diferenciar las formas de incluir CSS y JavaScript, explicar el orden de carga y solucionar errores habituales de rutas y acceso al DOM.

## 2. Separación de responsabilidades

| Tecnología | Responsabilidad | Ejemplo |
|---|---|---|
| HTML | Estructura y contenido | Formularios, títulos y botones |
| CSS | Presentación | Colores, tamaños y distribución |
| JavaScript | Comportamiento | Eventos, cálculos y validaciones |

Separar responsabilidades mejora la legibilidad, el mantenimiento y la reutilización.

## 3. Integrar CSS

**CSS interno:** se escribe en `style` dentro del HTML.

```html
<head>
    <style>
        body { font-family: Arial, sans-serif; }
    </style>
</head>
```

**CSS externo:** se guarda en un archivo independiente y se enlaza con `link`.

```html
<link rel="stylesheet" href="css/estilos.css">
```

Estructura:

```text
proyecto/
├── index.html
└── css/
    └── estilos.css
```

**CSS en línea:** se aplica mediante el atributo `style`.

```html
<p style="color: red;">Aviso</p>
```

Aunque es válido, no suele ser la mejor opción para organizar una aplicación porque mezcla contenido y presentación.

## 4. Integrar JavaScript

**Script interno:**

```html
<body>
    <button id="boton">Pulsar</button>
    <script>
        console.log("Página cargada");
    </script>
</body>
```

**Script externo:**

```html
<script src="js/app.js"></script>
```

Estructura:

```text
proyecto/
├── index.html
└── js/
    └── app.js
```

Contenido de `app.js`:

```javascript
console.log("JavaScript externo cargado");
```

También se puede escribir código en atributos HTML:

```html
<button onclick="alert('Hola')">Pulsar</button>
```

Pero suele preferirse separar comportamiento y estructura:

```html
<button id="boton">Pulsar</button>
```

```javascript
document.querySelector("#boton").addEventListener("click", () => {
    alert("Hola");
});
```

## 5. Orden de carga y acceso al DOM

El navegador analiza el HTML. Si un script intenta seleccionar un elemento antes de que exista, puede obtener `null`.

Código potencialmente problemático:

```html
<head>
    <script src="js/app.js"></script>
</head>
<body>
    <button id="boton">Pulsar</button>
</body>
```

Si `app.js` ejecuta inmediatamente `document.querySelector("#boton")`, el botón puede no haberse analizado todavía.

### Solución A: colocar el script al final del body

```html
<body>
    <button id="boton">Pulsar</button>
    <script src="js/app.js"></script>
</body>
```

### Solución B: utilizar defer

```html
<head>
    <script src="js/app.js" defer></script>
</head>
```

Con `defer`, el archivo externo se descarga sin bloquear el análisis del HTML y se ejecuta después de que el documento haya sido analizado. Los scripts diferidos mantienen el orden en el que aparecen.

### Solución C: DOMContentLoaded

```javascript
document.addEventListener("DOMContentLoaded", () => {
    const boton = document.querySelector("#boton");
    boton.addEventListener("click", () => console.log("Clic"));
});
```

`DOMContentLoaded` se dispara cuando el HTML ha sido completamente analizado y el DOM está construido. No significa que todos los recursos, como imágenes, hayan terminado de cargarse.

## 6. Ejemplo completo con archivos separados

Estructura:

```text
web-ejemplo/
├── index.html
├── css/
│   └── estilos.css
└── js/
    └── app.js
```

`index.html`:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aplicación de ejemplo</title>
    <link rel="stylesheet" href="css/estilos.css">
    <script src="js/app.js" defer></script>
</head>
<body>
    <main class="contenedor">
        <h1 id="titulo">Mi aplicación</h1>
        <p id="mensaje">Pulsa para cambiar el mensaje.</p>
        <button id="boton">Cambiar mensaje</button>
    </main>
</body>
</html>
```

`css/estilos.css`:

```css
* { box-sizing: border-box; }

body {
    margin: 0;
    padding: 30px;
    font-family: Arial, sans-serif;
    background: #f2f2f2;
}

.contenedor {
    max-width: 600px;
    margin: auto;
    padding: 24px;
    background: white;
    border-radius: 10px;
}

h1 { color: #1e3a8a; }

button {
    padding: 10px 16px;
    border: 0;
    background: #2563eb;
    color: white;
    cursor: pointer;
}
```

`js/app.js`:

```javascript
const boton = document.querySelector("#boton");
const mensaje = document.querySelector("#mensaje");

boton.addEventListener("click", () => {
    mensaje.textContent = "JavaScript está funcionando.";
});
```

## 7. Rutas relativas

Si `index.html` está en la raíz y el CSS dentro de `css`, la ruta es `css/estilos.css`. Si el JavaScript está en `js`, la ruta es `js/app.js`.

Errores frecuentes: escribir un nombre de carpeta incorrecto, olvidar la extensión, cambiar mayúsculas/minúsculas o calcular la ruta desde una carpeta equivocada. En general, las rutas relativas de `href` y `src` se resuelven respecto a la URL base del documento.

## 8. Seguridad básica

Los archivos JavaScript descargados por el navegador pueden inspeccionarse. No incluyas contraseñas, claves privadas o secretos en ellos. Carga recursos desde fuentes confiables y valida en el servidor cualquier dato que tenga consecuencias importantes.

## 9. Ejercicios

**E01 – Responsabilidades:** identifica en el ejemplo completo qué corresponde a HTML, CSS y JavaScript. Explica qué se pierde si eliminas cada archivo.

**E02 – Rutas:** dada esta estructura, escribe los enlaces correctos:

```text
proyecto/
├── index.html
├── estilos/principal.css
└── scripts/principal.js
```

Incluye `defer`.

**E03 – Error de carga:** explica por qué puede fallar un script cargado en `head` sin `defer`. Propón dos soluciones y compara sus ventajas.

**E04 – Separación:** transforma una página con CSS y JavaScript internos en tres archivos separados. Debe contener un título, un párrafo y un botón que cambie el texto.

## 10. Reto: miniaplicación integrada

Crea una lista de tareas con tres archivos separados. Debe incluir campo de texto, botón, lista, estilos externos y JavaScript externo cargado con `defer`. No se añadirán tareas vacías y no se utilizarán eventos en línea. Entrega el árbol de carpetas y los tres archivos completos.

## 11. Errores habituales, resumen y autoevaluación

Evita rutas incorrectas, ejecutar código antes de que exista el elemento, mezclar innecesariamente responsabilidades y publicar secretos. `link` integra CSS; `script` integra JavaScript; `defer` facilita ejecutar scripts clásicos externos después del análisis del documento.

- [ ] Diferencio estructura, presentación y comportamiento.
- [ ] Enlazo CSS y JavaScript externos.
- [ ] Explico el problema del orden de carga.
- [ ] Utilizo `defer`.
- [ ] Organizo carpetas y rutas.

**Evaluación – RA1.e:** integración funcional de HTML, CSS y JavaScript y explicación de los mecanismos de enlace y carga.
