---
tipo: material-alumnado
asignatura: DWEC
curso: 2º DAW
unidad: UD1 - Selección de arquitecturas y herramientas de programación cliente
sesion: S10
resultado_aprendizaje: RA1
criterios_evaluacion: [RA1.b, RA1.c]
estado: preparado
impartido: false
---

# S10 – Node.js y JavaScript fuera del navegador

## 1. Introducción y objetivos

JavaScript no se ejecuta únicamente en navegadores. **Node.js** es un entorno de ejecución que permite utilizar JavaScript fuera de ellos. Incorpora el motor V8 y proporciona APIs para trabajar con archivos, procesos, red y otras capacidades del sistema.

Al finalizar podrás definir Node.js, diferenciar lenguaje, motor y entorno, ejecutar un archivo JavaScript desde la terminal y reconocer las diferencias entre navegador y Node.js.

## 2. Lenguaje, motor y entorno

- **JavaScript:** lenguaje de programación.
- **V8:** motor que analiza y ejecuta JavaScript.
- **Node.js:** entorno de ejecución que incorpora V8 y APIs adicionales.
- **Navegador:** entorno que ejecuta JavaScript y proporciona APIs web.

En el navegador existen objetos como `document` y `window`. En Node.js están disponibles APIs propias como `process` y módulos como `fs`.

## 3. ¿Qué es Node.js?

Node.js es un entorno de ejecución de JavaScript de código abierto y multiplataforma. Se utiliza para:

- Crear servidores y servicios web.
- Desarrollar herramientas de línea de comandos.
- Automatizar tareas.
- Ejecutar herramientas de construcción de proyectos.
- Gestionar dependencias mediante npm.

Node.js no es un navegador y no incorpora automáticamente el DOM de una página.

## 4. Comprobar la instalación

En una terminal:

```bash
node --version
npm --version
```

Crea `hola.js`:

```javascript
console.log("Hola desde Node.js");
```

Ejecuta:

```bash
node hola.js
```

Salida:

```text
Hola desde Node.js
```

## 5. El lenguaje se mantiene, las APIs cambian

El código JavaScript básico conserva su sintaxis:

```javascript
const nombre = "Ana";

function saludar(persona) {
    return `Hola, ${persona}`;
}

console.log(saludar(nombre));
```

Sin embargo, las funcionalidades disponibles dependen del entorno. `document.querySelector()` tiene sentido en una página web; no está disponible de forma nativa en un proceso Node.js normal.

## 6. Acceso a archivos

Node.js permite trabajar con archivos mediante módulos como `fs`.

```javascript
const fs = require("node:fs");

const contenido = "Documento creado con Node.js";
fs.writeFileSync("salida.txt", contenido, "utf8");

console.log("Archivo creado");
```

El programa crea `salida.txt` en el directorio de trabajo. El usuario debe tener permisos. En aplicaciones reales conviene considerar operaciones asíncronas para no bloquear innecesariamente la ejecución.

## 7. Módulos

Los módulos permiten organizar código y reutilizar funcionalidades. En CommonJS se utiliza `require`:

```javascript
const path = require("node:path");
console.log(path.basename("/proyecto/index.html"));
```

También existen módulos ECMAScript, que utilizan `import` y `export`. El modo de módulos depende de la configuración del proyecto y de la extensión o metadatos del archivo.

## 8. Node.js en el desarrollo frontend

Aunque el código de una página se ejecute finalmente en el navegador, muchas herramientas de desarrollo funcionan mediante Node.js: gestores de paquetes, servidores locales, herramientas de construcción, automatización y pruebas.

Esto no significa que el navegador necesite Node.js para ejecutar cualquier página web. Son entornos diferentes.

## 9. Comparación

| Característica | Navegador | Node.js |
|---|---|---|
| Entorno | Página web | Sistema operativo |
| Motor | Depende del navegador | V8 en Node.js |
| DOM | Disponible en documentos web | No disponible por defecto |
| `window` | Global habitual de página | No es el global estándar |
| `process` | No es API estándar web | Objeto de Node.js |
| Archivos locales | Acceso limitado y controlado | APIs de sistema según permisos |
| `console` | Sí | Sí |

## 10. Ejercicios

**E01 – Conceptos:** explica las diferencias entre JavaScript, V8, Node.js y navegador. Añade un ejemplo de uso para cada uno.

**E02 – Primera ejecución:** crea `hola.js`, comprueba las versiones y ejecútalo. Documenta comandos y salida.

**E03 – Entornos:** clasifica `document`, `console`, `process`, `localStorage`, `fs` y `setTimeout`. Justifica si pertenecen al navegador, a Node.js o si existen en ambos con diferencias.

**E04 – Archivo:** crea un programa que escriba tu nombre y el módulo en `alumno.txt`. Comprueba que se ha generado.

**E05 – Diagnóstico:** explica por qué `console.log(document.title)` puede producir un error en Node.js y en qué entorno tendría sentido.

## 11. Reto: utilidad de consola

Crea `saludo.js` que defina una constante con tu nombre, una función que genere un saludo, muestre el resultado por consola y lo guarde en `saludo.txt`. Explica qué aporta JavaScript y qué aporta Node.js.

## 12. Errores habituales, resumen y autoevaluación

No confundas Node.js con un lenguaje ni con V8. No supongas que `document` existe en Node.js o que Node.js es necesario para ejecutar cualquier página. Las APIs dependen del entorno.

- [ ] Defino Node.js.
- [ ] Diferencio lenguaje, motor y entorno.
- [ ] Explico la relación entre Node.js y V8.
- [ ] Distingo APIs de navegador y Node.js.
- [ ] Ejecuto JavaScript desde la terminal.

**Evaluación – RA1.b y RA1.c:** identificación de entornos y mecanismos de ejecución y caracterización del lenguaje JavaScript.
