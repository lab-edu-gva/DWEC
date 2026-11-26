---

tipo: sesion  
asignatura: DWEC  
unidad: UD2 - Fundamentos de JavaScript  
numero_sesion: 6  
fecha:  
duracion: 55  
estado: pendiente  
resultado_aprendizaje: RA02  
criterios_evaluacion: []  
tags:

- dwec
    
- javascript
    
- ud2
    
- conversion-tipos
    
- coercion
    

---

# S06 - Conversión y coerción de tipos en JavaScript

## 1. Objetivos de la sesión

Al finalizar esta sesión deberás ser capaz de:

- Diferenciar conversión explícita y coerción implícita.
    
- Convertir datos utilizando `Number()`, `String()` y `Boolean()`.
    
- Utilizar `parseInt()` y `parseFloat()`.
    
- Identificar los valores considerados verdaderos y falsos en JavaScript.
    
- Comprender cómo JavaScript convierte automáticamente algunos valores.
    
- Evitar errores habituales al trabajar con datos procedentes de formularios.
    

## 2. Relación curricular

- **Resultado de aprendizaje:** RA02 (referencia provisional).
    
- **Criterios de evaluación:** pendientes de contrastar con la programación didáctica oficial.
    

Esta sesión trabaja el manejo de tipos de datos y las operaciones de conversión necesarias para desarrollar programas JavaScript fiables.

## 3. Contenidos

### 3.1. ¿Por qué necesitamos convertir tipos?

JavaScript permite trabajar con diferentes tipos de datos: números, cadenas de texto, booleanos, objetos, etc.

En ocasiones necesitamos transformar un dato de un tipo a otro.

Por ejemplo:

```
let edad = "25";

console.log(edad + 5);
```

El resultado será:

```
255
```

¿Por qué? Porque `edad` es una cadena de texto y el operador `+` concatena cadenas.

Si queremos realizar una operación matemática, debemos convertir el valor:

```
let edad = "25";

let edadSiguiente = Number(edad) + 5;

console.log(edadSiguiente);
```

Resultado:

```
30
```

### 3.2. Conversión explícita

La conversión explícita ocurre cuando nosotros indicamos directamente que queremos transformar un valor.

JavaScript dispone de varias funciones para hacerlo.

#### Number()

Convierte un valor en número.

```
console.log(Number("25"));       // 25
console.log(Number("3.14"));     // 3.14
console.log(Number("hola"));     // NaN
console.log(Number(""));         // 0
console.log(Number(true));       // 1
console.log(Number(false));      // 0
```

`NaN` significa _Not a Number_. Representa un valor que no es un número válido.

Podemos comprobar si una conversión ha producido `NaN`:

```
let resultado = Number("hola");

console.log(Number.isNaN(resultado)); // true
```

#### String()

Convierte un valor en una cadena de texto.

```
console.log(String(25));       // "25"
console.log(String(true));     // "true"
console.log(String(false));    // "false"
console.log(String(null));     // "null"
console.log(String(undefined));// "undefined"
```

También podemos utilizar la concatenación:

```
let edad = 25;

let mensaje = "Tengo " + edad + " años";

console.log(mensaje);
```

#### Boolean()

Convierte un valor en booleano: `true` o `false`.

```
console.log(Boolean(1));        // true
console.log(Boolean(0));        // false
console.log(Boolean("hola"));   // true
console.log(Boolean(""));       // false
console.log(Boolean(null));     // false
```

### 3.3. parseInt() y parseFloat()

Estas funciones permiten extraer valores numéricos de cadenas de texto.

**parseInt()**

Convierte una cadena en un número entero, leyendo desde el principio de la cadena.

```
console.log(parseInt("25"));       // 25
console.log(parseInt("25.90"));    // 25
console.log(parseInt("25px", 10)); // 25
```

Es recomendable indicar la base decimal mediante el segundo parámetro: `10`.

**parseFloat()**

Convierte una cadena en un número decimal.

```
console.log(parseFloat("25.90"));    // 25.9
console.log(parseFloat("12.75 euros")); // 12.75
```

#### Diferencia entre Number() y parseInt()

Es importante conocer esta diferencia:

```
console.log(Number("25px"));      // NaN
console.log(parseInt("25px", 10));// 25
```

`Number()` intenta convertir toda la cadena.

`parseInt()` y `parseFloat()` leen la parte numérica inicial que pueden interpretar.

### 3.4. Valores truthy y falsy

JavaScript permite evaluar cualquier valor como verdadero o falso dentro de una condición.

Los valores que se interpretan como falsos se denominan **falsy**.

Los principales valores falsy son:

|Valor|Resultado|
|---|---|
|`false`|false|
|`0`|false|
|`-0`|false|
|`0n`|false|
|`""`|false|
|`null`|false|
|`undefined`|false|
|`NaN`|false|

Prácticamente todos los demás valores son **truthy**, es decir, se interpretan como verdaderos.

Algunos ejemplos que pueden sorprender:

```
console.log(Boolean("0"));     // true
console.log(Boolean("false")); // true
console.log(Boolean(" "));     // true
console.log(Boolean([]));      // true
console.log(Boolean({}));      // true
```

**Importante:** una cadena que contiene texto, aunque sea `"false"`, no es el booleano `false`.

### 3.5. Conversión implícita o coerción

La coerción se produce cuando JavaScript convierte automáticamente un valor para poder realizar una operación.

Por ejemplo:

```
console.log("5" + 2); // "52"
```

JavaScript interpreta que queremos concatenar cadenas.

Sin embargo:

```
console.log("5" - 2); // 3
```

En este caso convierte automáticamente la cadena `"5"` en número.

Otros ejemplos:

```
console.log("10" * 2); // 20
console.log("10" / 2); // 5
console.log("10" - 2); // 8
```

El operador `+` tiene un comportamiento especial: puede sumar números o concatenar cadenas.

Por eso es importante controlar los tipos de datos.

### 3.6. Igualdad y coerción

JavaScript dispone de dos operadores de igualdad principales.

**Igualdad no estricta (**`**==**`**)**

Compara valores permitiendo conversiones automáticas de tipo.

```
console.log(5 == "5"); // true
```

**Igualdad estricta (**`**===**`**)**

Compara valor y tipo de dato, sin realizar esa conversión automática.

```
console.log(5 === "5"); // false
```

También existen sus versiones de desigualdad:

```
console.log(5 != "5");  // false
console.log(5 !== "5"); // true
```

Como norma general, utiliza `===` y `!==` para evitar resultados inesperados.

### 3.7. Datos introducidos mediante prompt()

La función `prompt()` permite solicitar información al usuario.

Su resultado siempre es una cadena de texto, salvo que se cancele el cuadro de diálogo, en cuyo caso devuelve `null`.

Ejemplo:

```
let edad = prompt("Introduce tu edad");

console.log(typeof edad);
```

Si el usuario introduce `25`, el resultado será:

```
string
```

Si queremos utilizar ese dato en operaciones matemáticas, debemos convertirlo:

```
let edad = Number(prompt("Introduce tu edad"));

let edadSiguiente = edad + 1;

console.log("El año que viene tendrás " + edadSiguiente);
```

También debemos comprobar que la entrada sea válida:

```
let numero = Number(prompt("Introduce un número"));

if (Number.isNaN(numero)) {
    console.log("No has introducido un número válido");
} else {
    console.log("El doble es: " + numero * 2);
}
```

**Atención:** `Number("")` devuelve `0`. Si necesitamos distinguir entre una entrada vacía y un cero introducido por el usuario, tendremos que comprobar también el texto original.

### 3.8. Comprobar si un valor es un número válido

JavaScript dispone de métodos que permiten comprobar valores numéricos.

`Number.isNaN()` comprueba si un valor es exactamente `NaN`:

```
console.log(Number.isNaN(NaN));   // true
console.log(Number.isNaN("hola"));// false
```

`Number.isFinite()` comprueba si un valor es un número finito:

```
console.log(Number.isFinite(25));       // true
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(NaN));      // false
console.log(Number.isFinite("25"));     // false
```

Estos métodos son útiles para validar datos antes de utilizarlos.

## 4. Desarrollo práctico

### Ejercicio 1. Conversión de tipos

Crea un archivo `ejercicio1.js`.

Declara las siguientes variables:

```
let numeroTexto = "125";
let precioTexto = "19.95";
let activoTexto = "true";
let valorVacio = "";
```

Realiza las siguientes operaciones:

1. Convierte `numeroTexto` en número.
    
2. Convierte `precioTexto` en número decimal.
    
3. Convierte `activoTexto` en booleano.
    
4. Convierte `valorVacio` en booleano.
    
5. Muestra el resultado y su tipo de dato utilizando `typeof`.
    

### Ejercicio 2. Number(), parseInt() y parseFloat()

Analiza el resultado de las siguientes instrucciones:

```
console.log(Number("45"));
console.log(Number("45.75"));
console.log(Number("45px"));

console.log(parseInt("45.75", 10));
console.log(parseInt("45px", 10));
console.log(parseFloat("45.75"));
console.log(parseFloat("45.75 euros"));
```

Después, explica por qué los resultados son diferentes.

### Ejercicio 3. Valores truthy y falsy

Crea un programa que compruebe los siguientes valores:

```
let valores = [
    0,
    1,
    "",
    "hola",
    "false",
    false,
    null,
    undefined,
    [],
    {}
];
```

Recorre el array utilizando un bucle y muestra por consola:

- El valor.
    
- Su tipo de dato.
    
- Su conversión a booleano.
    

### Ejercicio 4. Calculadora de edad

Crea un programa que:

1. Solicite al usuario su edad mediante `prompt()`.
    
2. Convierta el resultado a número.
    
3. Compruebe si el dato es válido.
    
4. Si es válido, calcule cuántos años tendrá dentro de 10 años.
    
5. Si no es válido, muestre un mensaje de error.
    

Controla también que no se acepte una entrada vacía.

### Ejercicio 5. Detectar errores de coerción

Observa el siguiente código:

```
let precio = "20";
let unidades = "3";

let total = precio + unidades;

console.log(total);
```

Modifica el programa para que calcule correctamente el importe total.

Después, explica por qué el resultado original no era el esperado.

### Ejercicio 6. Comparaciones

Ejecuta las siguientes instrucciones:

```
console.log(10 == "10");
console.log(10 === "10");

console.log(0 == false);
console.log(0 === false);

console.log(null == undefined);
console.log(null === undefined);
```

Anota el resultado de cada comparación y explica la diferencia entre `==` y `===`.

## 5. Material necesario

- Editor de código.
    
- Navegador web.
    
- Consola de desarrollador.
    
- Archivo HTML para ejecutar JavaScript.
    
- Conocimientos de variables, constantes y tipos de datos.
    

Puedes utilizar esta estructura básica:

```
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Conversión de tipos</title>
</head>
<body>

    <h1>Prácticas de JavaScript</h1>

    <script src="ejercicio1.js"></script>
</body>
</html>
```

## 6. Resumen de la sesión

|Concepto|Función o comportamiento|
|---|---|
|Conversión explícita|Transformación indicada por el programador|
|Coerción|Conversión automática realizada por JavaScript|
|`Number()`|Convierte a número|
|`String()`|Convierte a cadena|
|`Boolean()`|Convierte a booleano|
|`parseInt()`|Extrae un número entero desde el principio|
|`parseFloat()`|Extrae un número decimal desde el principio|
|`Number.isNaN()`|Comprueba si un valor es `NaN`|
|`Number.isFinite()`|Comprueba si un valor es finito|
|`==`|Compara permitiendo coerción|
|`===`|Compara sin coerción|

Recuerda estas tres reglas:

1. Los datos recibidos mediante `prompt()` son cadenas de texto, salvo cuando se cancela.
    
2. El operador `+` puede concatenar cadenas en lugar de sumar números.
    
3. Es preferible utilizar `===` antes que `==`.
    

## 7. Errores habituales

- Pensar que `"25"` es un número porque contiene cifras.
    
- Utilizar `parseInt()` cuando necesitamos conservar decimales.
    
- Creer que `Boolean("false")` devuelve `false`.
    
- Confundir `NaN` con `null`.
    
- Utilizar `==` sin comprender las conversiones automáticas.
    
- Sumar dos cadenas pensando que estamos realizando una operación matemática.
    
- No comprobar si el usuario ha introducido un dato válido.
    
- Olvidar que `Number("")` devuelve `0`.
    

## 8. Autoevaluación

Indica si las siguientes afirmaciones son verdaderas o falsas.

1. `Number("20")` devuelve un número.
    
2. `String(25)` devuelve una cadena.
    
3. `Boolean("false")` devuelve `false`.
    
4. `Number("hola")` devuelve `NaN`.
    
5. `parseInt("12.8", 10)` devuelve `12`.
    
6. `prompt()` devuelve directamente un número cuando el usuario introduce cifras.
    
7. `"5" + 2` devuelve `7`.
    
8. `"5" - 2` devuelve `3`.
    
9. `5 === "5"` devuelve `true`.
    
10. `Boolean([])` devuelve `false`.
    

## 9. Preguntas tipo examen

**Pregunta 1.** ¿Qué diferencia existe entre conversión explícita y coerción implícita?

**Pregunta 2.** ¿Qué resultado devuelve la siguiente instrucción?

```
console.log(Number("15.5"));
```

**Pregunta 3.** Explica la diferencia entre `Number()` y `parseInt()`.

**Pregunta 4.** ¿Qué significa que un valor sea falsy? Indica cuatro ejemplos.

**Pregunta 5.** ¿Por qué `Boolean("0")` devuelve `true`?

**Pregunta 6.** ¿Qué resultado produce el siguiente código y por qué?

```
let a = "10";
let b = 5;

console.log(a + b);
console.log(a - b);
```

**Pregunta 7.** Explica la diferencia entre `==` y `===`.

**Pregunta 8.** ¿Qué tipo de dato devuelve `prompt()`?

**Pregunta 9.** ¿Para qué sirve `Number.isNaN()`?

**Pregunta 10.** ¿Por qué es importante validar los datos introducidos por el usuario?

## 10. Checklist de dominio

Antes de finalizar esta unidad, comprueba que eres capaz de:

- Diferenciar conversión explícita y coerción implícita.
    
- Utilizar `Number()`, `String()` y `Boolean()`.
    
- Utilizar correctamente `parseInt()` y `parseFloat()`.
    
- Identificar valores truthy y falsy.
    
- Explicar cómo funciona la coerción con el operador `+`.
    
- Diferenciar `==` y `===`.
    
- Convertir correctamente los datos recibidos mediante `prompt()`.
    
- Detectar conversiones no válidas utilizando `Number.isNaN()`.
    
- Validar los datos antes de realizar operaciones.
    

**Objetivo final:** ser capaz de recibir datos, convertirlos al tipo adecuado y realizar operaciones sin depender de conversiones automáticas que puedan provocar errores.