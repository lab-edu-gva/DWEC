---
tipo: material-alumnado
asignatura: DWEC
curso: 2º DAW
unidad: UD1 - Selección de arquitecturas y herramientas de programación cliente
sesion: S12
resultado_aprendizaje: RA1
criterios_evaluacion: [RA1.c, RA1.d, RA1.e]
estado: preparado
impartido: false
---

# S12 – ECMAScript ES6+, estándares y compatibilidad

## 1. Introducción y objetivos

JavaScript es el lenguaje que utilizamos habitualmente para programar en el navegador. Para coordinar su evolución existe una especificación estandarizada denominada **ECMAScript**.

Al finalizar podrás explicar la relación entre JavaScript y ECMAScript, reconocer las aportaciones de ES6/ES2015, distinguir lenguaje y APIs web y valorar la compatibilidad de las características utilizadas.

## 2. JavaScript y ECMAScript

JavaScript es el nombre del lenguaje. ECMAScript es la especificación que define sus características principales: sintaxis, tipos, operadores, instrucciones, funciones y objetos.

El navegador proporciona además APIs web como `document`, `window`, `fetch` o `localStorage`. Estas APIs pertenecen al entorno web y no deben confundirse con el núcleo del lenguaje.

Por ejemplo, `Promise` forma parte de ECMAScript; `document` es una interfaz del entorno del navegador.

## 3. Evolución del estándar

ES6, también conocido como ECMAScript 2015, fue una actualización importante que incorporó características modernas. El estándar ha seguido evolucionando mediante ediciones posteriores. Por eso es más preciso hablar de JavaScript moderno o ES2015+ que pensar que ES6 es la última versión.

## 4. Características modernas

### let y const

```javascript
let contador = 0;
contador++;

const nombre = "Ana";
```

`let` permite reasignar; `const` impide reasignar el identificador. Ambos tienen ámbito de bloque, a diferencia del comportamiento tradicional de `var`. `const` no vuelve inmutables los objetos: se pueden modificar sus propiedades aunque no se pueda reasignar la variable.

### Funciones flecha

```javascript
const sumar = (a, b) => a + b;
```

Las funciones flecha no crean su propio `this`; capturan el `this` del contexto léxico exterior.

### Plantillas literales

```javascript
const nombre = "Ana";
const mensaje = `Hola, ${nombre}`;
```

Permiten interpolar expresiones y escribir cadenas multilínea.

### Parámetros predeterminados

```javascript
function saludar(nombre = "alumno") {
    return `Hola, ${nombre}`;
}
```

### Desestructuración

```javascript
const alumno = { nombre: "Ana", curso: "DAW" };
const { nombre, curso } = alumno;
```

Permite extraer valores de arrays u objetos.

### Spread

```javascript
const numeros = [1, 2, 3];
const copia = [...numeros];

const datos = { nombre: "Ana" };
const ampliados = { ...datos, curso: "DAW" };
```

Expande elementos de iterables o propiedades de objetos, según el contexto.

### Clases

```javascript
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }

    saludar() {
        return `Hola, soy ${this.nombre}`;
    }
}

const persona = new Persona("Ana");
console.log(persona.saludar());
```

La sintaxis `class` se apoya en el sistema de prototipos de JavaScript.

### Módulos

`operaciones.js`:

```javascript
export function sumar(a, b) {
    return a + b;
}
```

`app.js`:

```javascript
import { sumar } from "./operaciones.js";
console.log(sumar(4, 5));
```

En el navegador se puede cargar el archivo principal como módulo:

```html
<script type="module" src="js/app.js"></script>
```

Los módulos tienen su propio ámbito y reglas de carga.

### Promesas

```javascript
fetch("/datos.json")
    .then(respuesta => respuesta.json())
    .then(datos => console.log(datos))
    .catch(error => console.error(error));
```

`Promise` pertenece a ECMAScript; `fetch` es una API web.

## 5. Compatibilidad entre navegadores

No todos los navegadores ni sus versiones implementan simultáneamente todas las características. Antes de utilizar una funcionalidad conviene comprobar:

- Si está disponible en los navegadores objetivo.
- Si existen diferencias de comportamiento.
- Si hay una alternativa.
- Si el proyecto necesita transformar el código.
- Si la API utilizada requiere permisos o condiciones adicionales.

La compatibilidad afecta tanto al lenguaje como a las APIs web.

## 6. Detección de funcionalidades

Puede comprobarse si una API está disponible:

```javascript
if ("geolocation" in navigator) {
    console.log("El navegador expone geolocalización");
} else {
    console.log("No está disponible");
}
```

Esto comprueba la existencia de la API, pero no garantiza que el usuario conceda permiso ni que la operación termine correctamente.

## 7. Transpilación y polyfills

- **Transpilación:** transforma código fuente de una sintaxis o versión a otra.
- **Polyfill:** proporciona una implementación de una funcionalidad que no está disponible de forma nativa, cuando es posible.

No son equivalentes. Transformar sintaxis no crea automáticamente cualquier API del navegador que falte.

## 8. Ejemplo: var y let

```javascript
var nombre = "Ana";
if (true) {
    var nombre = "Luis";
}
console.log(nombre); // Luis
```

Con `let`:

```javascript
let nombre = "Ana";
if (true) {
    let nombre = "Luis";
}
console.log(nombre); // Ana
```

La diferencia se debe al ámbito de bloque de `let`.

## 9. Ejercicios

**E01 – Conceptos:** explica JavaScript, ECMAScript y APIs web. Clasifica `Promise`, `document` y `fetch` y justifica.

**E02 – Modernización:** reescribe utilizando `const`, función flecha y plantilla literal:

```javascript
var nombre = "Ana";
function presentar(persona) {
    return "Hola, " + persona;
}
console.log(presentar(nombre));
```

**E03 – Ámbito:** predice la salida de los dos ejemplos del apartado 8 y explica por qué difieren.

**E04 – Módulos:** crea `calculos.js` con una función exportada para multiplicar y `app.js` que la importe. Incluye el HTML que carga `app.js` como módulo.

**E05 – Compatibilidad:** explica qué comprobarías antes de utilizar una API moderna en una aplicación para distintos navegadores. Diferencia compatibilidad del lenguaje y de las APIs web.

## 10. Reto: modernizar un programa

Reescribe este código usando `const` o `let`, función flecha, plantilla literal y un método de array:

```javascript
var productos = ["Teclado", "Ratón", "Monitor"];

function mostrarProductos(lista) {
    for (var i = 0; i < lista.length; i++) {
        console.log("Producto: " + lista[i]);
    }
}
mostrarProductos(productos);
```

Explica qué características pertenecen a ECMAScript y qué APIs necesitarías para mostrar los productos en una página.

## 11. Errores habituales, resumen y autoevaluación

No confundas JavaScript con ECMAScript ni el lenguaje con las APIs del navegador. ES6 no es la última versión. `const` no hace inmutables los objetos y las funciones flecha no se comportan igual que las tradicionales respecto a `this`. Un polyfill no resuelve cualquier incompatibilidad.

- [ ] Explico qué es ECMAScript.
- [ ] Diferencio lenguaje y APIs web.
- [ ] Identifico características de ES2015.
- [ ] Utilizo `let` y `const`.
- [ ] Comprendo funciones flecha, plantillas y módulos.
- [ ] Diferencio transpilación y polyfill.
- [ ] Explico la importancia de la compatibilidad.

**Evaluación – RA1.c, RA1.d y RA1.e:** caracterización de JavaScript y sus estándares, análisis de sus particularidades e integración con documentos web.
