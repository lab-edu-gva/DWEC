---

tipo: sesion  
asignatura: DWEC  
unidad: UD2 - Fundamentos de JavaScript  
numero_sesion: 2  
fecha:  
duracion: 55  
estado: pendiente  
resultado_aprendizaje: RA02  
criterios_evaluacion: []  
tags:

- DWEC
    
- JavaScript
    
- UD2
    
- modulos
    

---
---

tipo: sesion  
asignatura: DWEC  
unidad: UD2 - Fundamentos de JavaScript  
numero_sesion: 2  
fecha:  
duracion: 55  
estado: pendiente  
resultado_aprendizaje: RA02  
criterios_evaluacion: []  
tags:

- DWEC
    
- JavaScript
    
- UD2
    
- modulos
    

---

# S02 - Archivos y módulos JavaScript

## 1. Objetivos de la sesión

Al finalizar esta sesión deberás ser capaz de:

- Organizar el código JavaScript en diferentes archivos.
    
- Comprender las ventajas de dividir un programa en módulos.
    
- Diferenciar un archivo JavaScript tradicional de un módulo.
    
- Utilizar `export` para compartir funciones y variables.
    
- Utilizar `import` para incorporar código de otros archivos.
    
- Comprender la diferencia entre exportaciones nombradas y exportación por defecto.
    
- Crear una pequeña aplicación utilizando varios archivos JavaScript.
    

## 2. Relación curricular

Esta sesión trabaja la organización y modularización del código JavaScript en aplicaciones web.

La relación definitiva con los resultados de aprendizaje y criterios de evaluación debe comprobarse con la programación didáctica oficial.

## 3. Contenidos

### 3.1. ¿Por qué organizar el código?

En aplicaciones pequeñas podemos escribir todo el código JavaScript en un único archivo.

Sin embargo, cuando una aplicación crece, mantener todo el código junto puede resultar complicado.

Imagina una aplicación de gestión de alumnos que necesita:

- Registrar alumnos.
    
- Calcular notas.
    
- Validar formularios.
    
- Mostrar resultados.
    
- Gestionar usuarios.
    

Si escribimos todo en un único archivo, acabaremos teniendo un documento demasiado grande y difícil de mantener.

Una solución consiste en dividir el programa en diferentes archivos.

Por ejemplo:

```
mi-aplicacion/
│
├── index.html
│
└── js/
    ├── app.js
    ├── alumnos.js
    ├── notas.js
    └── validaciones.js
```

Cada archivo puede encargarse de una responsabilidad concreta.

**Ventajas de organizar el código:**

- Facilita la lectura.
    
- Mejora el mantenimiento.
    
- Permite reutilizar funciones.
    
- Reduce la duplicación de código.
    
- Facilita el trabajo en equipo.
    
- Permite separar responsabilidades.
    

### 3.2. ¿Qué es un módulo JavaScript?

Un módulo es un archivo JavaScript que permite organizar código y compartir elementos con otros archivos.

Para trabajar con módulos en HTML utilizamos:

```
<script type="module" src="js/app.js"></script>
```

El atributo `type="module"` indica al navegador que el archivo debe interpretarse como un módulo JavaScript.

Los módulos permiten utilizar dos instrucciones fundamentales:

- `export`: permite hacer disponible una variable, función o clase desde un módulo.
    
- `import`: permite utilizar elementos exportados desde otro módulo.
    

### 3.3. Exportaciones nombradas

Una exportación nombrada permite compartir uno o varios elementos utilizando su nombre.

Archivo `operaciones.js`:

```
export function sumar(a, b) {
    return a + b;
}

export function restar(a, b) {
    return a - b;
}

export const IVA = 0.21;
```

En este archivo hemos exportado:

- La función `sumar`.
    
- La función `restar`.
    
- La constante `IVA`.
    

Para utilizar estos elementos desde otro archivo escribimos:

```
import { sumar, restar, IVA } from "./operaciones.js";

console.log(sumar(10, 5));
console.log(restar(10, 5));
console.log(IVA);
```

Las llaves `{ }` indican que estamos importando elementos concretos mediante sus nombres.

**Importante:** los nombres utilizados en `import` deben coincidir con los nombres exportados, salvo que utilicemos un alias.

### 3.4. Importar utilizando alias

Podemos cambiar el nombre con el que importamos un elemento utilizando `as`.

```
import { sumar as calcularSuma } from "./operaciones.js";

console.log(calcularSuma(8, 4));
```

En este ejemplo:

- El módulo exporta una función llamada `sumar`.
    
- Nosotros la importamos utilizando el nombre `calcularSuma`.
    

Esto puede resultar útil cuando queremos evitar conflictos entre nombres.

### 3.5. Exportación por defecto

Un módulo puede tener una exportación por defecto utilizando `export default`.

Ejemplo:

Archivo `saludos.js`:

```
export default function saludar(nombre) {
    return `Hola, ${nombre}`;
}
```

Para importar esta función:

```
import saludar from "./saludos.js";

console.log(saludar("Ana"));
```

Observa las diferencias:

**Exportación nombrada:**

```
export function sumar(a, b) {
    return a + b;
}
```

Importación:

```
import { sumar } from "./operaciones.js";
```

**Exportación por defecto:**

```
export default function saludar(nombre) {
    return `Hola, ${nombre}`;
}
```

Importación:

```
import saludar from "./saludos.js";
```

La exportación por defecto no necesita llaves al importarse y podemos elegir el nombre local que queramos.

Un módulo puede tener varias exportaciones nombradas, pero solamente una exportación por defecto.

### 3.6. Importar varios elementos

Podemos importar varios elementos de un mismo módulo.

Archivo `calculadora.js`:

```
export function sumar(a, b) {
    return a + b;
}

export function multiplicar(a, b) {
    return a * b;
}

export function dividir(a, b) {
    return a / b;
}
```

Archivo `app.js`:

```
import {
    sumar,
    multiplicar,
    dividir
} from "./calculadora.js";

console.log(sumar(5, 3));
console.log(multiplicar(5, 3));
console.log(dividir(10, 2));
```

También podemos importar todos los elementos nombrados de un módulo:

```
import * as calculadora from "./calculadora.js";

console.log(calculadora.sumar(5, 3));
console.log(calculadora.multiplicar(5, 3));
```

En este caso, `calculadora` funciona como un objeto que contiene los elementos exportados.

### 3.7. Rutas de los módulos

Cuando importamos un archivo debemos indicar correctamente su ubicación.

Ejemplo:

```
proyecto/
│
├── index.html
│
└── js/
    ├── app.js
    │
    └── utilidades/
        ├── numeros.js
        └── textos.js
```

Desde `app.js`, para importar `numeros.js`:

```
import { sumar } from "./utilidades/numeros.js";
```

El prefijo `./` indica que la ruta comienza desde el directorio actual.

Otros ejemplos:

```
import { sumar } from "./numeros.js";
```

Archivo situado en el mismo directorio.

```
import { sumar } from "../numeros.js";
```

Archivo situado en el directorio superior.

**Recuerda:**

- `./` significa directorio actual.
    
- `../` significa directorio superior.
    
- Las rutas de módulos relativos deben indicar el archivo y su extensión `.js`.
    

### 3.8. Características importantes de los módulos

Los módulos JavaScript tienen algunas características particulares:

1. Se ejecutan en modo estricto automáticamente.
    
2. Cada módulo tiene su propio ámbito.
    
3. Los elementos no se convierten automáticamente en variables globales.
    
4. Permiten utilizar `import` y `export`.
    
5. Los módulos se cargan de forma diferida de manera predeterminada.
    
6. Los módulos se ejecutan una sola vez por URL dentro del mismo entorno de carga.
    

Por ejemplo:

Archivo `datos.js`:

```
const nombre = "Carlos";
```

Esta variable no se convierte automáticamente en una variable global accesible desde cualquier archivo.

Para compartirla debemos exportarla:

```
export const nombre = "Carlos";
```

### 3.9. Cómo ejecutar proyectos con módulos

Cuando utilizamos módulos JavaScript, debemos ejecutar la aplicación desde un servidor web.

No es recomendable abrir directamente el archivo HTML mediante `file://`.

Podemos utilizar, por ejemplo:

- La extensión Live Server de Visual Studio Code.
    
- Un servidor web local.
    
- Un servidor de desarrollo.
    

Esto evita problemas relacionados con las restricciones de seguridad del navegador al cargar módulos desde archivos locales.

## 4. Desarrollo práctico de la sesión

### Actividad 1. Crear un módulo de operaciones

Crea la siguiente estructura:

```
practica-modulos/
│
├── index.html
│
└── js/
    ├── app.js
    └── operaciones.js
```

En `index.html`:

```
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Práctica de módulos</title>
    <script type="module" src="js/app.js"></script>
</head>
<body>

    <h1>Mi primera aplicación modular</h1>

    <p>Abre la consola del navegador para ver los resultados.</p>

</body>
</html>
```

En `js/operaciones.js`:

```
export function sumar(a, b) {
    return a + b;
}

export function restar(a, b) {
    return a - b;
}

export function multiplicar(a, b) {
    return a * b;
}
```

En `js/app.js`:

```
import {
    sumar,
    restar,
    multiplicar
} from "./operaciones.js";

console.log("Suma:", sumar(10, 5));
console.log("Resta:", restar(10, 5));
console.log("Multiplicación:", multiplicar(10, 5));
```

Ejecuta el proyecto utilizando Live Server y comprueba los resultados.

### Actividad 2. Crear un módulo de alumnos

Crea un archivo llamado `alumnos.js`.

Debe contener:

- Una función `crearAlumno(nombre, edad)`.
    
- Una función `mostrarAlumno(alumno)`.
    
- Una constante `CENTRO` con el valor `"IES Ejemplo"`.
    

Exporta los tres elementos utilizando exportaciones nombradas.

Desde `app.js` importa los elementos y crea dos alumnos.

Muestra sus datos en la consola.

### Actividad 3. Utilizar export default

Crea un archivo llamado `mensajes.js`.

Debe contener una función que reciba un nombre y devuelva:

```
Bienvenido, NOMBRE
```

Exporta la función utilizando `export default`.

Desde `app.js` importa la función y muestra el saludo de tres personas diferentes.

### Actividad 4. Ampliar la aplicación

Organiza el proyecto de la siguiente manera:

```
gestion-alumnos/
│
├── index.html
│
└── js/
    ├── app.js
    ├── alumnos.js
    ├── notas.js
    └── mensajes.js
```

Requisitos:

1. `alumnos.js` debe contener las funciones relacionadas con los alumnos.
    
2. `notas.js` debe contener una función para calcular la media de tres notas.
    
3. `mensajes.js` debe exportar por defecto una función para generar mensajes de bienvenida.
    
4. `app.js` debe importar los elementos necesarios.
    
5. La aplicación debe mostrar en consola los datos de dos alumnos y sus medias.
    

## 5. Material necesario

- Visual Studio Code.
    
- Navegador web.
    
- Extensión Live Server o servidor web local.
    
- Conocimientos de HTML.
    
- Conocimientos básicos de funciones JavaScript.
    

## 6. Resumen para estudiar

|Concepto|Función|
|---|---|
|Módulo|Archivo JavaScript que organiza y comparte código|
|`type="module"`|Indica que se carga un módulo|
|`export`|Permite compartir elementos|
|`import`|Permite utilizar elementos de otro módulo|
|`export default`|Define la exportación principal del módulo|
|`as`|Permite utilizar un alias|
|`./`|Indica el directorio actual|
|`../`|Indica el directorio superior|

Ejemplo completo:

```
// operaciones.js

export function sumar(a, b) {
    return a + b;
}

export default function mensaje() {
    return "Aplicación iniciada";
}
```

```
// app.js

import mensaje, { sumar } from "./operaciones.js";

console.log(mensaje());
console.log(sumar(10, 20));
```

## 7. Errores habituales

- Olvidar `type="module"` en la etiqueta `<script>`.
    
- Utilizar `import` sin haber exportado previamente el elemento.
    
- Olvidar las llaves en una importación nombrada.
    
- Utilizar llaves al importar una exportación por defecto.
    
- Escribir incorrectamente la ruta del módulo.
    
- Olvidar la extensión `.js`.
    
- Intentar ejecutar módulos abriendo directamente el HTML mediante `file://`.
    
- Pensar que las variables de un módulo son automáticamente globales.
    

## 8. Autoevaluación

Responde sin consultar los apuntes.

1. ¿Qué es un módulo JavaScript?
    
2. ¿Qué ventajas tiene dividir una aplicación en varios archivos?
    
3. ¿Para qué sirve `type="module"`?
    
4. ¿Qué diferencia existe entre `import` y `export`?
    
5. ¿Qué es una exportación nombrada?
    
6. ¿Qué es una exportación por defecto?
    
7. ¿Qué diferencia existe entre importar con llaves y sin ellas?
    
8. ¿Para qué sirve la palabra `as`?
    
9. ¿Qué significa `./` en una ruta?
    
10. ¿Qué significa `../`?
    
11. ¿Por qué necesitamos un servidor web para trabajar cómodamente con módulos?
    
12. ¿Las variables de un módulo son automáticamente globales?
    

## 9. Preguntas tipo examen

**Pregunta 1.** ¿Qué atributo debemos utilizar para cargar un módulo JavaScript?

a) `type="javascript"`  
b) `type="module"`  
c) `module="true"`  
d) `src="module"`

**Pregunta 2.** ¿Qué instrucción permite compartir una función desde un módulo?

a) `import`  
b) `include`  
c) `export`  
d) `require`

**Pregunta 3.** ¿Cómo importamos una exportación nombrada llamada `sumar`?

a) `import sumar from "./operaciones.js"`  
b) `import { sumar } from "./operaciones.js"`  
c) `export { sumar }`  
d) `include sumar`

**Pregunta 4.** ¿Qué caracteriza a una exportación por defecto?

a) Un módulo puede tener tantas como quiera.  
b) Necesita siempre llaves al importarse.  
c) Un módulo puede tener una exportación por defecto.  
d) No permite importar funciones.

**Pregunta 5.** ¿Qué indica `../` en una ruta?

a) El directorio actual.  
b) El directorio superior.  
c) La raíz del servidor.  
d) Un archivo externo.

## 10. Qué debes dominar antes de continuar

- Sé explicar qué es un módulo JavaScript.
    
- Sé organizar una aplicación en varios archivos.
    
- Comprendo la utilidad de `type="module"`.
    
- Sé exportar funciones y constantes.
    
- Sé importar elementos de otros archivos.
    
- Distingo exportaciones nombradas y por defecto.
    
- Sé utilizar alias con `as`.
    
- Comprendo cómo funcionan las rutas relativas.
    
- Soy capaz de crear una aplicación sencilla utilizando varios módulos.
    

---