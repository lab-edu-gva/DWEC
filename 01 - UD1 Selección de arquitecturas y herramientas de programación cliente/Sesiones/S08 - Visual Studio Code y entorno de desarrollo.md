---
tipo: material-alumnado
asignatura: DWEC
curso: 2º DAW
unidad: UD1 - Selección de arquitecturas y herramientas de programación cliente
sesion: S08
resultado_aprendizaje: RA1
criterios_evaluacion: [RA1.b]
estado: preparado
impartido: false
---

# S08 – Visual Studio Code y entorno de desarrollo

## 1. Introducción y objetivos

Para desarrollar aplicaciones cliente necesitamos un editor de código, una estructura de proyecto y un navegador para comprobar el resultado. **Visual Studio Code (VS Code)** es un editor de código fuente; no es un navegador ni un motor JavaScript.

Al terminar podrás identificar sus áreas principales, crear un proyecto web organizado y distinguir las funciones de editor, navegador, motor y herramientas de desarrollo.

## 2. Editor, navegador y motor

| Herramienta | Función |
|---|---|
| Editor | Escribir y organizar archivos |
| Navegador | Cargar y mostrar páginas |
| Motor JavaScript | Analizar y ejecutar JavaScript |
| DevTools | Inspeccionar y depurar la página |
| Node.js | Ejecutar JavaScript fuera del navegador |

VS Code permite editar HTML, CSS y JavaScript. El navegador interpreta la página y proporciona las APIs web.

## 3. Áreas principales de VS Code

- **Barra de actividades:** cambia entre explorador, búsqueda, control de código fuente, ejecución y extensiones.
- **Explorador:** muestra carpetas y archivos.
- **Editor:** zona donde se escribe el código.
- **Panel inferior:** terminal, problemas, salida y consola de depuración, según configuración.
- **Barra de estado:** muestra información del archivo, lenguaje, codificación y otras opciones.

## 4. Crear un proyecto

Crea `mi-primera-web` con esta estructura:

```text
mi-primera-web/
├── index.html
├── css/
│   └── estilos.css
└── js/
    └── app.js
```

Abre la carpeta completa desde VS Code, no solo un archivo aislado.

`index.html`:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi primera web</title>
    <link rel="stylesheet" href="css/estilos.css">
    <script src="js/app.js" defer></script>
</head>
<body>
    <h1 id="titulo">Mi primera web</h1>
    <p>Proyecto creado con Visual Studio Code.</p>
    <button id="boton">Cambiar título</button>
</body>
</html>
```

`css/estilos.css`:

```css
body {
    font-family: Arial, sans-serif;
    margin: 30px;
    background: #f1f5f9;
}

h1 { color: #1e40af; }
```

`js/app.js`:

```javascript
const boton = document.querySelector("#boton");
const titulo = document.querySelector("#titulo");

boton.addEventListener("click", () => {
    titulo.textContent = "¡JavaScript funciona!";
});
```

## 5. Funciones útiles del editor

- **Resaltado de sintaxis:** colorea partes del código; no garantiza que sea correcto.
- **Autocompletado:** sugiere propiedades, métodos y etiquetas; hay que revisar las sugerencias.
- **Formato:** organiza sangrías y espacios.
- **Búsqueda:** localiza texto en un archivo o proyecto.
- **Terminal integrada:** permite ejecutar comandos desde el directorio del proyecto.

## 6. Extensiones

Las extensiones amplían las funciones del editor: soporte de lenguajes, formato, análisis, control de versiones o pruebas.

Antes de instalar una, comprueba que resuelve una necesidad real, que procede de una fuente confiable y que se mantiene. No es necesario instalar muchas extensiones para crear una página web sencilla.

## 7. Abrir y comprobar

Puedes abrir un HTML directamente en el navegador o utilizar un servidor local. Para una página estática sencilla puede bastar con abrir el archivo; algunas APIs requieren un contexto HTTP/HTTPS.

Comprueba que el título aparece, se aplica el CSS, el botón cambia el texto y las rutas son correctas.

## 8. Buenas prácticas

- Utilizar nombres descriptivos.
- Separar HTML, CSS y JavaScript.
- Mantener una estructura sencilla.
- Evitar archivos duplicados.
- Guardar cambios con frecuencia.
- Comprobar el resultado en el navegador.
- Utilizar control de versiones cuando el proyecto lo requiera.

## 9. Ejercicios

**E01 – Herramientas:** explica la función de VS Code, navegador, motor JavaScript y DevTools. Indica cuál usarías para escribir código y cuál para analizar errores.

**E02 – Estructura:** crea el proyecto del apartado 4. Comprueba que se enlazan los tres archivos.

**E03 – Modificación:** añade un segundo botón que cambie el color del título. Mantén el JavaScript en el archivo externo.

**E04 – Organización:** explica tres inconvenientes de guardar todo en un único HTML con estilos y scripts en línea. Propón una estructura mejor.

## 10. Reto: plantilla reutilizable

Prepara una plantilla para futuros ejercicios de DWEC con estructura de carpetas, HTML con metadatos básicos, CSS externo y JavaScript externo con `defer`. Incluye una interacción sencilla y explica la función de cada archivo.

## 11. Errores habituales, resumen y autoevaluación

VS Code es un editor, no el entorno que muestra la página. El resaltado no detecta todos los errores. Trabaja con la carpeta completa, revisa rutas y comprueba el resultado en el navegador.

- [ ] Diferencio editor, navegador y motor.
- [ ] Identifico las áreas de VS Code.
- [ ] Creo y abro un proyecto completo.
- [ ] Organizo archivos.
- [ ] Compruebo el resultado en el navegador.

**Evaluación – RA1.b:** identificación y utilización razonada de herramientas del entorno de desarrollo y del navegador.
