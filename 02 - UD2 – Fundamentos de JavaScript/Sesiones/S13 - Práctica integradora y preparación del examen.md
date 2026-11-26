---

tipo: sesion  
asignatura: DWEC  
unidad: UD2 - Fundamentos de JavaScript  
numero_sesion: 13  
fecha:  
duracion: 55  
estado: pendiente  
resultado_aprendizaje: RA02  
criterios_evaluacion: []  
tags:

- dwec
    
- javascript
    
- ud2
    
- practica-integradora
    
- preparacion-examen
    

---

# S13 - Práctica integradora y preparación del examen

## 1. Objetivos de la sesión

Al finalizar esta sesión deberás ser capaz de:

- Integrar los contenidos fundamentales de JavaScript trabajados en la UD2.
    
- Incorporar JavaScript correctamente en un documento HTML.
    
- Utilizar variables, constantes y tipos de datos.
    
- Realizar conversiones de tipos y utilizar operadores.
    
- Trabajar con estructuras condicionales y bucles.
    
- Crear funciones tradicionales y funciones flecha.
    
- Utilizar arrays, objetos y desestructuración.
    
- Analizar código y detectar errores.
    
- Resolver un problema práctico dividiéndolo en partes más pequeñas.
    

## 2. Relación curricular

**Resultado de aprendizaje:** RA02 (referencia provisional).

**Criterios de evaluación:** pendientes de contrastar con la programación didáctica oficial.

Esta sesión integra los contenidos trabajados durante la unidad. No introduce nuevos conceptos, sino que permite aplicar conjuntamente los conocimientos adquiridos.

## 3. Contenidos

### 3.1. Incorporación de JavaScript en HTML

Podemos incorporar JavaScript directamente en un documento HTML mediante la etiqueta `script` o enlazar un archivo externo.

Ejemplo con archivo externo:

```
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Aplicación JavaScript</title>
</head>
<body>

    <h1>Gestión de notas</h1>

    <script src="script.js"></script>
</body>
</html>
```

Archivo `script.js`:

```
console.log("Aplicación iniciada");
```

También podemos utilizar módulos:

```
<script type="module" src="script.js"></script>
```

Los módulos permiten organizar el código en diferentes archivos y utilizar `import` y `export`.

### 3.2. Variables y constantes

JavaScript permite declarar variables utilizando `let`, `const` y `var`.

```
let edad = 20;
const nombre = "Ana";
var ciudad = "Valencia";
```

Diferencias principales:

|Declaración|Características|
|---|---|
|`let`|Permite reasignar el valor. Tiene ámbito de bloque.|
|`const`|No permite reasignar la variable. Tiene ámbito de bloque.|
|`var`|Tiene ámbito de función y permite redeclaración.|

Ejemplo:

```
let nota = 7;

nota = 9;

const curso = "DAW";
```

Recuerda que `const` impide reasignar la variable, pero no necesariamente modificar el contenido de un objeto o array.

```
const numeros = [1, 2, 3];

numeros.push(4);

console.log(numeros);
```

### 3.3. Ámbito de las variables y hoisting

El ámbito determina dónde podemos utilizar una variable.

```
let nombre = "Ana";

function mostrarNombre() {
    let edad = 20;

    console.log(nombre);
    console.log(edad);
}

mostrarNombre();
```

La variable `nombre` está disponible dentro de la función porque se ha declarado en el ámbito exterior.

La variable `edad` solamente está disponible dentro de la función.

También debemos recordar:

- `let` y `const` tienen ámbito de bloque.
    
- `var` tiene ámbito de función.
    
- Las declaraciones tradicionales de funciones tienen un comportamiento de hoisting.
    
- Las variables declaradas con `let` y `const` no pueden utilizarse antes de su inicialización.
    

### 3.4. Tipos de datos

Los tipos primitivos más importantes son:

|Tipo|Ejemplo|
|---|---|
|`string`|`"Hola"`|
|`number`|`25`, `3.14`|
|`boolean`|`true`, `false`|
|`undefined`|Variable sin valor asignado.|
|`null`|Ausencia intencionada de valor.|
|`bigint`|`123456789n`|
|`symbol`|`Symbol("id")`|

Podemos comprobar el tipo de un valor mediante `typeof`.

```
console.log(typeof "Hola");
console.log(typeof 25);
console.log(typeof true);
```

### 3.5. Conversión y coerción de tipos

Podemos convertir valores de un tipo a otro.

```
Number("25");
String(100);
Boolean(1);
parseInt("25");
parseFloat("3.14");
```

Ejemplo:

```
let numero1 = "10";
let numero2 = 5;

console.log(numero1 + numero2);
console.log(Number(numero1) + numero2);
```

La primera operación concatena texto. La segunda realiza una suma numérica.

También debemos distinguir:

- `==`: compara valores permitiendo conversión de tipos.
    
- `===`: compara valor y tipo sin realizar esa conversión.
    

Como regla general, utiliza `===` para evitar conversiones inesperadas.

### 3.6. Operadores

Los operadores permiten realizar operaciones con los datos.

**Aritméticos:**

```
+  -  *  /  %  **
```

**Comparación:**

```
==  ===  !=  !==  >  <  >=  <=
```

**Lógicos:**

```
&&  ||  !
```

**Asignación:**

```
=  +=  -=  *=  /=
```

**Incremento y decremento:**

```
++  --
```

Ejemplo:

```
let edad = 20;

if (edad >= 18 && edad <= 65) {
    console.log("Edad dentro del intervalo");
}
```

También podemos utilizar el operador ternario:

```
const mensaje = edad >= 18 ? "Mayor de edad" : "Menor de edad";
```

Y el operador de coalescencia nula:

```
const nombre = null;

const nombreFinal = nombre ?? "Usuario";
```

### 3.7. Desestructuración, spread y rest

La desestructuración permite extraer valores de arrays y propiedades de objetos.

```
const alumno = {
    nombre: "Carlos",
    edad: 20
};

const { nombre, edad } = alumno;
```

Con arrays:

```
const notas = [7, 8, 9];

const [primera, segunda, tercera] = notas;
```

El operador spread permite expandir elementos:

```
const numeros = [1, 2, 3];

const copia = [...numeros];
```

El operador rest permite agrupar elementos restantes:

```
const sumar = (...numeros) => {
    let resultado = 0;

    for (const numero of numeros) {
        resultado += numero;
    }

    return resultado;
};

console.log(sumar(1, 2, 3, 4));
```

### 3.8. Estructuras condicionales

Las estructuras condicionales permiten ejecutar diferentes instrucciones según se cumpla una condición.

```
if (nota >= 5) {
    console.log("Aprobado");
} else {
    console.log("Suspenso");
}
```

Podemos utilizar `else if` para comprobar varias condiciones:

```
if (nota >= 9) {
    console.log("Sobresaliente");
} else if (nota >= 7) {
    console.log("Notable");
} else if (nota >= 5) {
    console.log("Aprobado");
} else {
    console.log("Suspenso");
}
```

También podemos utilizar `switch`:

```
const dia = 2;

switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    default:
        console.log("Otro día");
}
```

### 3.9. Bucles

Los bucles permiten repetir instrucciones.

```
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

También podemos utilizar `while`:

```
let contador = 1;

while (contador <= 5) {
    console.log(contador);
    contador++;
}
```

Para recorrer arrays:

```
const nombres = ["Ana", "Luis", "Marta"];

for (const nombre of nombres) {
    console.log(nombre);
}
```

Para recorrer las propiedades de un objeto:

```
const alumno = {
    nombre: "Ana",
    edad: 20
};

for (const propiedad in alumno) {
    console.log(propiedad, alumno[propiedad]);
}
```

Recuerda:

- `break` termina el bucle.
    
- `continue` salta a la siguiente iteración.
    
- Un acumulador almacena resultados.
    
- Un contador registra repeticiones.
    

### 3.10. Funciones tradicionales y funciones flecha

Función tradicional:

```
function sumar(a, b) {
    return a + b;
}
```

Función flecha:

```
const sumarFlecha = (a, b) => a + b;
```

Las funciones permiten organizar el código y reutilizar operaciones.

También podemos utilizar parámetros por defecto:

```
const saludar = (nombre = "Usuario") => {
    return `Hola ${nombre}`;
};
```

Y callbacks:

```
const numeros = [1, 2, 3];

numeros.forEach(numero => {
    console.log(numero);
});
```

## 4. Desarrollo práctico

# Práctica integradora: Sistema de gestión de notas

### 4.1. Descripción del problema

Vamos a desarrollar una pequeña aplicación que permita gestionar las notas de un grupo de alumnos.

La aplicación trabajará con un array de objetos. Cada alumno tendrá un nombre y una nota.

El programa deberá:

1. Almacenar los alumnos.
    
2. Mostrar todos los alumnos y sus notas.
    
3. Calcular la media del grupo.
    
4. Identificar los alumnos aprobados y suspensos.
    
5. Obtener la nota más alta.
    
6. Contar cuántos alumnos han aprobado.
    
7. Mostrar un resumen final.
    

### 4.2. Estructura del proyecto

Crea una carpeta llamada `gestion-notas`.

Dentro, crea los siguientes archivos:

```
gestion-notas/
├── index.html
└── script.js
```

Archivo `index.html`:

```
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gestión de notas</title>
</head>
<body>

    <h1>Gestión de notas</h1>

    <p>Abre la consola del navegador para consultar los resultados.</p>

    <script src="script.js"></script>
</body>
</html>
```

### 4.3. Datos iniciales

En `script.js`, crea un array de alumnos:

```
const alumnos = [
    { nombre: "Ana", nota: 8 },
    { nombre: "Luis", nota: 4 },
    { nombre: "Marta", nota: 9 },
    { nombre: "Carlos", nota: 6 },
    { nombre: "Laura", nota: 3 },
    { nombre: "Pedro", nota: 7 }
];
```

Cada alumno es un objeto con dos propiedades:

- `nombre`: nombre del alumno.
    
- `nota`: calificación obtenida.
    

### 4.4. Mostrar los alumnos

Crea una función llamada `mostrarAlumnos()`.

Debe recorrer el array y mostrar el nombre y la nota de cada alumno.

Utiliza:

- Una función tradicional.
    
- Un bucle `for...of`.
    
- Desestructuración de objetos.
    

### 4.5. Calcular la media

Crea una función llamada `calcularMedia()`.

Debe:

1. Recorrer el array.
    
2. Sumar todas las notas.
    
3. Dividir la suma entre el número de alumnos.
    
4. Devolver el resultado.
    

Utiliza un acumulador.

### 4.6. Contar aprobados

Crea una función llamada `contarAprobados()`.

Debe recorrer el array y contar cuántos alumnos tienen una nota igual o superior a 5.

Devuelve el número de aprobados.

### 4.7. Obtener la nota más alta

Crea una función llamada `obtenerNotaMaxima()`.

Debe recorrer el array y devolver la nota más alta.

No utilices todavía métodos avanzados de arrays: resuélvelo mediante un bucle.

### 4.8. Mostrar la calificación de cada alumno

Crea una función flecha llamada `obtenerCalificacion`.

Debe recibir una nota y devolver:

|Nota|Resultado|
|---|---|
|Menor que 5|Suspenso|
|Desde 5 hasta menos de 7|Aprobado|
|Desde 7 hasta menos de 9|Notable|
|Desde 9 hasta 10|Sobresaliente|

Utiliza estructuras condicionales.

### 4.9. Generar el informe final

Crea una función llamada `mostrarInforme()`.

Debe mostrar:

- Número total de alumnos.
    
- Número de aprobados.
    
- Número de suspensos.
    
- Media del grupo.
    
- Nota más alta.
    

Utiliza las funciones que has creado anteriormente.

### 4.10. Ampliación voluntaria

Si has terminado, añade las siguientes funcionalidades:

1. Crear una función que permita añadir un nuevo alumno al array.
    
2. Comprobar que la nota se encuentra entre 0 y 10.
    
3. Mostrar solamente los alumnos aprobados.
    
4. Crear una función flecha que reciba un alumno y devuelva un mensaje con su nombre y calificación.
    
5. Utilizar el operador spread para crear una copia del array de alumnos.
    

**Importante:** organiza el código en funciones independientes. Evita escribir todo el programa dentro de una única función.

## 5. Material necesario

- Ordenador.
    
- Editor de código.
    
- Navegador web.
    
- Consola de desarrollador.
    
- Archivos HTML y JavaScript.
    
- Conocimientos trabajados durante las sesiones S01 a S12.
    

## 6. Resumen de la sesión

En esta unidad hemos trabajado los fundamentos de JavaScript necesarios para desarrollar programas básicos.

|Bloque|Contenidos|
|---|---|
|Integración|JavaScript en documentos HTML y archivos externos.|
|Organización|Archivos y módulos.|
|Variables|`let`, `const`, `var` y ámbito.|
|Tipos|Tipos primitivos y conversiones.|
|Operadores|Aritméticos, comparación, lógicos y asignación.|
|Datos|Arrays, objetos, desestructuración, spread y rest.|
|Condicionales|`if`, `else`, `else if` y `switch`.|
|Repetición|`for`, `while`, `do...while`, `for...of` y `for...in`.|
|Funciones|Declaraciones, parámetros, argumentos y retorno.|
|Funciones flecha|Sintaxis `=>`, retorno implícito y parámetros por defecto.|

## 7. Errores habituales

**Error 1. Confundir** `**=**` **con** `**===**`

```
if (nota = 5) {
    console.log("Aprobado");
}
```

El operador `=` asigna un valor. Para comparar debemos utilizar `===` cuando corresponda.

**Error 2. No convertir los datos introducidos por el usuario**

```
const edad = prompt("Introduce tu edad");
```

`prompt()` devuelve texto. Si necesitamos un número, debemos convertirlo.

```
const edad = Number(prompt("Introduce tu edad"));
```

**Error 3. Olvidar** `**return**`

```
function sumar(a, b) {
    a + b;
}
```

La función no devuelve el resultado.

**Error 4. Olvidar actualizar un contador**

Un bucle puede convertirse en infinito si la condición nunca deja de cumplirse.

**Error 5. Confundir** `**for...of**` **y** `**for...in**`

`for...of` recorre valores. `for...in` recorre propiedades.

**Error 6. Utilizar llaves en una función flecha sin** `**return**`

```
const doble = numero => {
    numero * 2;
};
```

Con llaves debemos utilizar `return` si queremos devolver un resultado.

**Error 7. Modificar una constante mediante reasignación**

```
const numero = 10;
numero = 20;
```

Esto produce un error porque una constante no puede reasignarse.

## 8. Autoevaluación

Marca los contenidos que dominas:

- Sé incorporar JavaScript en un documento HTML.
    
- Sé utilizar archivos JavaScript externos.
    
- Sé declarar variables y constantes.
    
- Comprendo el ámbito de las variables.
    
- Sé identificar los tipos de datos.
    
- Sé realizar conversiones de tipos.
    
- Sé utilizar operadores.
    
- Sé trabajar con arrays y objetos.
    
- Sé utilizar desestructuración.
    
- Comprendo spread y rest.
    
- Sé utilizar estructuras condicionales.
    
- Sé crear bucles.
    
- Sé utilizar contadores y acumuladores.
    
- Sé declarar funciones tradicionales.
    
- Sé utilizar parámetros y argumentos.
    
- Sé devolver valores con `return`.
    
- Sé declarar funciones flecha.
    
- Comprendo el retorno implícito.
    
- Sé utilizar parámetros por defecto.
    
- Sé analizar y corregir errores de código.
    

## 9. Preguntas tipo examen

### Parte A. Conceptos

**Pregunta 1.** Explica las diferencias entre `let`, `const` y `var`.

**Pregunta 2.** ¿Qué diferencia existe entre `==` y `===`?

**Pregunta 3.** ¿Qué devuelve la función `typeof`?

**Pregunta 4.** ¿Qué diferencia existe entre `null` y `undefined`?

**Pregunta 5.** Explica qué es la desestructuración y escribe un ejemplo.

**Pregunta 6.** ¿Qué diferencia existe entre `break` y `continue`?

**Pregunta 7.** ¿Qué diferencia existe entre `for...of` y `for...in`?

**Pregunta 8.** ¿Qué diferencia existe entre parámetros y argumentos?

**Pregunta 9.** ¿Qué diferencia existe entre `return` y `console.log()`?

**Pregunta 10.** ¿Qué es una función flecha y qué ventajas ofrece?

### Parte B. Análisis de código

**Pregunta 11.** Indica qué resultado produce:

```
let numero = "10";

numero = Number(numero);

console.log(numero + 5);
console.log(typeof numero);
```

**Pregunta 12.** Indica qué resultado produce:

```
const numeros = [2, 4, 6];

let suma = 0;

for (const numero of numeros) {
    suma += numero;
}

console.log(suma);
```

**Pregunta 13.** Indica qué resultado produce:

```
function calcular(a, b = 5) {
    return a * b;
}

console.log(calcular(3));
console.log(calcular(3, 4));
```

**Pregunta 14.** Indica qué resultado produce:

```
const numeros = [1, 2, 3, 4];

const resultado = numeros.map(numero => numero * 2);

console.log(resultado);
```

**Pregunta 15.** Identifica el error:

```
let contador = 1;

while (contador <= 5) {
    console.log(contador);
}
```

### Parte C. Programación

**Pregunta 16.** Crea una función que reciba un número y devuelva si es par o impar.

**Pregunta 17.** Crea un programa que muestre los números del 1 al 50, pero solamente los múltiplos de 5.

**Pregunta 18.** Crea una función que reciba tres números y devuelva el mayor.

**Pregunta 19.** Crea un array de cinco notas y calcula su media mediante un bucle.

**Pregunta 20.** Crea un objeto que represente un alumno y utiliza `for...in` para mostrar sus propiedades y valores.

## 10. Checklist de dominio

Antes de presentarte al examen, comprueba que puedes:

- Crear un proyecto básico HTML y JavaScript.
    
- Organizar el código en archivos.
    
- Declarar y utilizar variables y constantes.
    
- Identificar y convertir tipos de datos.
    
- Utilizar operadores correctamente.
    
- Trabajar con arrays y objetos.
    
- Utilizar destructuring, spread y rest.
    
- Resolver problemas con condicionales.
    
- Resolver problemas con bucles.
    
- Utilizar contadores y acumuladores.
    
- Crear funciones reutilizables.
    
- Trabajar con parámetros y valores de retorno.
    
- Utilizar funciones flecha.
    
- Analizar código y predecir sus resultados.
    
- Detectar errores y corregirlos.
    
- Resolver un ejercicio completo sin copiar código de otros ejemplos.
    

---

## Recomendaciones para preparar el examen

1. Repasa los ejemplos de las sesiones S01 a S12.
    
2. Practica escribiendo código sin consultar los apuntes.
    
3. Ejecuta los fragmentos de código y comprueba sus resultados.
    
4. Aprende a explicar por qué funciona cada instrucción.
    
5. Presta especial atención a las conversiones de tipos, los ámbitos, los bucles y las funciones.
    
6. No memorices únicamente el resultado de los ejemplos: aprende a razonar cómo se ejecutan.
    

**Fin de la UD2 - Fundamentos de JavaScript.**