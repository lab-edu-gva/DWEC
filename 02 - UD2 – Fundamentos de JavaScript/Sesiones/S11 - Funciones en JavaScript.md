---

tipo: sesion  
asignatura: DWEC  
unidad: UD2 - Fundamentos de JavaScript  
numero_sesion: 11  
fecha:  
duracion: 55  
estado: pendiente  
resultado_aprendizaje: RA02  
criterios_evaluacion: []  
tags:

- dwec
    
- javascript
    
- ud2
    
- funciones
    
- parametros
    

---

# S11 - Funciones en JavaScript

## 1. Objetivos de la sesión

Al finalizar esta sesión deberás ser capaz de:

- Comprender qué es una función y por qué se utiliza.
    
- Declarar y ejecutar funciones en JavaScript.
    
- Diferenciar parámetros y argumentos.
    
- Utilizar valores de retorno mediante `return`.
    
- Comprender el ámbito de las variables dentro de las funciones.
    
- Utilizar funciones para dividir un programa en partes más pequeñas.
    
- Identificar la diferencia entre una función que devuelve un valor y otra que solamente ejecuta instrucciones.
    

## 2. Relación curricular

**Resultado de aprendizaje:** RA02 (referencia provisional).

**Criterios de evaluación:** pendientes de contrastar con la programación didáctica oficial.

## 3. Contenidos

### 3.1. ¿Qué es una función?

Una función es un bloque de código diseñado para realizar una tarea concreta.

Podemos definir una función una vez y ejecutarla tantas veces como necesitemos.

Por ejemplo, si necesitamos calcular varias veces el cuadrado de un número, no tenemos que escribir la misma operación repetidamente.

Sin función:

```
let resultado1 = 5 * 5;
let resultado2 = 8 * 8;
let resultado3 = 12 * 12;

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);
```

Utilizando una función:

```
function calcularCuadrado(numero) {
    return numero * numero;
}

console.log(calcularCuadrado(5));
console.log(calcularCuadrado(8));
console.log(calcularCuadrado(12));
```

Las funciones permiten:

- Reutilizar código.
    
- Evitar repetir instrucciones.
    
- Organizar mejor los programas.
    
- Dividir problemas complejos en tareas pequeñas.
    
- Facilitar el mantenimiento y las pruebas.
    

### 3.2. Declaración de una función

La forma tradicional de declarar una función es mediante la palabra reservada `function`.

Sintaxis:

```
function nombreFuncion() {
    // Instrucciones
}
```

Ejemplo:

```
function saludar() {
    console.log("Hola, bienvenido a JavaScript");
}
```

Esta instrucción declara la función, pero todavía no la ejecuta.

Para ejecutarla debemos escribir su nombre seguido de paréntesis:

```
saludar();
```

Podemos llamarla varias veces:

```
saludar();
saludar();
saludar();
```

Cada llamada ejecutará el bloque de instrucciones.

**Importante:** declarar una función y ejecutarla son dos operaciones diferentes.

### 3.3. Funciones con parámetros

Los parámetros permiten que una función reciba información desde el exterior.

Ejemplo:

```
function saludar(nombre) {
    console.log("Hola, " + nombre);
}

saludar("Ana");
saludar("Luis");
saludar("Marta");
```

Resultado:

```
Hola, Ana
Hola, Luis
Hola, Marta
```

En este ejemplo:

- `nombre` es un parámetro.
    
- `"Ana"`, `"Luis"` y `"Marta"` son argumentos.
    

**Parámetro:** variable definida en la declaración de la función.

**Argumento:** valor que se proporciona cuando se llama a la función.

Podemos utilizar varios parámetros:

```
function presentarPersona(nombre, edad) {
    console.log("Nombre:", nombre);
    console.log("Edad:", edad);
}

presentarPersona("Carlos", 20);
```

Los argumentos se asignan a los parámetros según su posición.

### 3.4. Funciones con valores de retorno: `return`

Una función puede devolver un resultado mediante la instrucción `return`.

Ejemplo:

```
function sumar(numero1, numero2) {
    return numero1 + numero2;
}

let resultado = sumar(10, 5);

console.log(resultado);
```

Resultado:

```
15
```

La instrucción `return`:

1. Devuelve un valor al lugar desde el que se llamó a la función.
    
2. Finaliza inmediatamente la ejecución de esa función.
    

Podemos guardar el resultado en una variable, mostrarlo por consola o utilizarlo en otra operación.

```
function multiplicar(a, b) {
    return a * b;
}

let resultado = multiplicar(4, 5);

console.log(resultado);
console.log(resultado + 10);
```

Resultado:

```
20
30
```

### 3.5. Diferencia entre `return` y `console.log()`

Es una de las diferencias más importantes que debes comprender.

**Utilizando** `**console.log()**`**:**

```
function sumar(a, b) {
    console.log(a + b);
}

let resultado = sumar(5, 3);

console.log(resultado);
```

Resultado:

```
8
undefined
```

La función muestra el resultado por consola, pero no devuelve ningún valor. Por eso, la variable `resultado` contiene `undefined`.

**Utilizando** `**return**`**:**

```
function sumar(a, b) {
    return a + b;
}

let resultado = sumar(5, 3);

console.log(resultado);
```

Resultado:

```
8
```

Ahora sí podemos utilizar el resultado de la función.

|`console.log()`|`return`|
|---|---|
|Muestra información por consola.|Devuelve un valor.|
|No devuelve automáticamente el resultado mostrado.|Permite utilizar el resultado fuera de la función.|
|Se utiliza para depurar o mostrar información.|Se utiliza para obtener resultados de una función.|

### 3.6. Funciones sin parámetros y con retorno

Una función no necesita recibir parámetros para devolver un valor.

```
function obtenerNumero() {
    return 100;
}

let numero = obtenerNumero();

console.log(numero);
```

Resultado:

```
100
```

### 3.7. Funciones con parámetros y sin retorno

También podemos recibir información sin devolver ningún resultado.

```
function mostrarNombre(nombre) {
    console.log("El nombre es:", nombre);
}

mostrarNombre("Laura");
```

En este caso la función recibe un argumento y muestra información, pero no devuelve ningún valor explícitamente.

### 3.8. Funciones con varios parámetros

Podemos definir tantos parámetros como necesitemos.

```
function calcularPrecio(precio, cantidad, descuento) {
    let total = precio * cantidad;
    return total - descuento;
}

let resultado = calcularPrecio(20, 3, 5);

console.log(resultado);
```

Resultado:

```
55
```

Los argumentos deben proporcionarse en el orden correspondiente.

### 3.9. Valores por defecto en los parámetros

Podemos establecer valores predeterminados para los parámetros.

```
function saludar(nombre = "invitado") {
    console.log("Hola, " + nombre);
}

saludar("Ana");
saludar();
```

Resultado:

```
Hola, Ana
Hola, invitado
```

Cuando no se proporciona un argumento, se utiliza el valor predeterminado.

Si se proporciona un argumento, este sustituye al valor por defecto.

### 3.10. El valor `undefined` en los parámetros

Si llamamos a una función sin proporcionar todos los argumentos y no existen valores predeterminados, los parámetros que falten tendrán el valor `undefined`.

```
function presentar(nombre, edad) {
    console.log(nombre);
    console.log(edad);
}

presentar("Carlos");
```

Resultado:

```
Carlos
undefined
```

Podemos evitarlo estableciendo valores por defecto:

```
function presentar(nombre, edad = 18) {
    console.log(nombre);
    console.log(edad);
}

presentar("Carlos");
```

Resultado:

```
Carlos
18
```

### 3.11. Ámbito de las variables dentro de las funciones

Las variables declaradas dentro de una función tienen ámbito local.

Esto significa que solamente pueden utilizarse dentro de esa función.

```
function calcular() {
    let resultado = 20;
    console.log(resultado);
}

calcular();
```

La variable `resultado` existe dentro de la función.

Si intentamos acceder a ella desde fuera:

```
function calcular() {
    let resultado = 20;
}

calcular();

console.log(resultado);
```

Se producirá un error porque `resultado` no está definida en el ámbito exterior.

Podemos utilizar variables globales desde una función:

```
let nombre = "Ana";

function saludar() {
    console.log("Hola", nombre);
}

saludar();
```

La función puede acceder a `nombre` porque está declarada fuera de ella.

**Recomendación:** siempre que sea posible, utiliza parámetros para proporcionar información a las funciones y valores de retorno para recuperar resultados. Así evitarás depender innecesariamente de variables globales.

### 3.12. Declaraciones de función y hoisting

Las declaraciones tradicionales de funciones tienen un comportamiento especial denominado _hoisting_.

Esto permite llamar a una función antes de su declaración.

```
saludar();

function saludar() {
    console.log("Hola");
}
```

El código funciona correctamente.

Sin embargo, esto no significa que todas las formas de crear funciones se comporten igual. Las expresiones de función asignadas a variables tienen reglas diferentes, que veremos al trabajar con funciones flecha y otras formas de definición.

## 4. Desarrollo práctico

### Práctica 1. Crear una función para saludar

Crea una función llamada `saludar` que muestre el mensaje:

```
Bienvenido al curso de JavaScript
```

Ejecuta la función tres veces.

### Práctica 2. Función con parámetro

Crea una función llamada `saludarPersona` que reciba un nombre y muestre:

```
Hola, Ana. Bienvenida.
```

Prueba la función con tres nombres diferentes.

### Práctica 3. Calculadora básica

Crea cuatro funciones:

- `sumar(a, b)`
    
- `restar(a, b)`
    
- `multiplicar(a, b)`
    
- `dividir(a, b)`
    

Cada función debe devolver el resultado de su operación mediante `return`.

En la función de división, comprueba que el divisor no sea cero.

### Práctica 4. Calcular el área de un rectángulo

Crea una función llamada `calcularArea` que reciba la base y la altura.

Debe devolver el área del rectángulo.

Recuerda:

```
Área = base × altura
```

Prueba con diferentes valores.

### Práctica 5. Comprobar si un número es par

Crea una función llamada `esPar` que reciba un número y devuelva `true` si es par y `false` si es impar.

Utiliza el operador módulo `%`.

Ejemplo de uso:

```
console.log(esPar(8));
console.log(esPar(7));
```

### Práctica 6. Calcular la media

Crea una función llamada `calcularMedia` que reciba tres notas y devuelva su media aritmética.

Ejemplo:

```
let media = calcularMedia(7, 8, 9);

console.log(media);
```

### Práctica 7. Conversor de temperaturas

Crea dos funciones:

- `celsiusAFahrenheit(celsius)`
    
- `fahrenheitACelsius(fahrenheit)`
    

Fórmulas:

```
Fahrenheit = Celsius × 9 / 5 + 32

Celsius = (Fahrenheit - 32) × 5 / 9
```

Ambas funciones deben devolver el resultado.

### Práctica 8. Analizar el funcionamiento de una función

Estudia el siguiente código:

```
function calcular(a, b) {
    let resultado = a + b;

    return resultado * 2;
}

let numero = calcular(5, 3);

console.log(numero);
```

Responde:

1. ¿Cómo se llama la función?
    
2. ¿Cuáles son sus parámetros?
    
3. ¿Qué argumentos recibe?
    
4. ¿Qué valor tiene la variable `resultado`?
    
5. ¿Qué devuelve la función?
    
6. ¿Qué muestra la consola?
    

## 5. Material necesario

- Ordenador con navegador web.
    
- Editor de código.
    
- Consola de desarrollador del navegador.
    
- Conocimientos de variables, operadores, condicionales y bucles.
    

Ejemplo de estructura de trabajo:

```
proyecto/
├── index.html
└── script.js
```

Archivo `index.html`:

```
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Funciones JavaScript</title>
</head>
<body>

    <h1>Práctica de funciones</h1>

    <script src="script.js"></script>
</body>
</html>
```

## 6. Resumen de la sesión

|Concepto|Descripción|
|---|---|
|Función|Bloque de código reutilizable.|
|`function`|Palabra reservada para declarar una función.|
|Parámetro|Variable definida en la declaración.|
|Argumento|Valor proporcionado al llamar a la función.|
|`return`|Devuelve un resultado y finaliza la función.|
|`console.log()`|Muestra información en la consola.|
|Ámbito local|Zona donde una variable puede utilizarse.|
|Valor por defecto|Valor utilizado cuando no se proporciona un argumento.|
|Hoisting|Comportamiento que permite utilizar determinadas declaraciones antes de su posición en el código.|

Recuerda especialmente:

- Una función no se ejecuta por el simple hecho de declararla.
    
- Los argumentos se pasan a los parámetros.
    
- `return` devuelve un valor.
    
- `console.log()` muestra información, pero no sustituye a `return`.
    
- Las variables locales no pueden utilizarse directamente fuera de su función.
    

## 7. Errores habituales

**Error 1. Declarar una función y olvidar llamarla**

```
function saludar() {
    console.log("Hola");
}
```

Este código declara la función, pero no la ejecuta.

Para ejecutarla:

```
saludar();
```

**Error 2. Olvidar los paréntesis al llamar a una función**

```
saludar;
```

Esta expresión hace referencia a la función, pero no la ejecuta.

**Error 3. Confundir parámetros y argumentos**

```
function sumar(a, b) {
    return a + b;
}

sumar(5, 3);
```

`a` y `b` son parámetros. `5` y `3` son argumentos.

**Error 4. Confundir** `**return**` **y** `**console.log()**`

Mostrar un resultado no significa devolverlo.

**Error 5. Escribir código después de** `**return**`

```
function ejemplo() {
    return 10;
    console.log("Hola");
}
```

La instrucción `console.log()` nunca se ejecutará porque `return` finaliza la función.

**Error 6. Intentar acceder a variables locales**

```
function ejemplo() {
    let numero = 10;
}

console.log(numero);
```

La variable `numero` no existe fuera de la función.

**Error 7. No devolver el resultado de una operación**

```
function sumar(a, b) {
    a + b;
}
```

La función realiza la operación, pero no devuelve el resultado.

Corrección:

```
function sumar(a, b) {
    return a + b;
}
```

## 8. Autoevaluación

- ¿Sé declarar una función?
    
- ¿Sé ejecutar una función?
    
- ¿Sé utilizar parámetros?
    
- ¿Sé diferenciar parámetros y argumentos?
    
- ¿Sé utilizar varios parámetros?
    
- ¿Sé devolver valores con `return`?
    
- ¿Sé diferenciar `return` y `console.log()`?
    
- ¿Sé utilizar valores por defecto?
    
- ¿Comprendo el ámbito local de las variables?
    
- ¿Sé explicar el hoisting de las declaraciones de función?
    
- ¿Sé dividir un programa en funciones reutilizables?
    

## 9. Preguntas tipo examen

**Pregunta 1.** ¿Qué es una función y qué ventajas ofrece?

**Pregunta 2.** ¿Qué diferencia existe entre declarar una función y ejecutarla?

**Pregunta 3.** ¿Qué diferencia existe entre un parámetro y un argumento?

**Pregunta 4.** ¿Qué función tiene la instrucción `return`?

**Pregunta 5.** ¿Qué diferencia existe entre `return` y `console.log()`?

**Pregunta 6.** ¿Qué resultado produce este código?

```
function calcular(a, b) {
    return a * b;
}

console.log(calcular(4, 5));
```

**Pregunta 7.** ¿Qué resultado produce este código?

```
function ejemplo() {
    console.log("Hola");
}

let resultado = ejemplo();

console.log(resultado);
```

**Pregunta 8.** ¿Qué ocurre cuando intentamos acceder desde fuera de una función a una variable declarada con `let` dentro de ella?

**Pregunta 9.** ¿Qué resultado produce este código?

```
function saludar(nombre = "invitado") {
    return "Hola " + nombre;
}

console.log(saludar());
console.log(saludar("Ana"));
```

**Pregunta 10.** ¿Qué es el hoisting en las declaraciones tradicionales de funciones?

**Pregunta 11.** Escribe una función que reciba dos números y devuelva el mayor de ellos.

**Pregunta 12.** Escribe una función que reciba un número y devuelva `true` si es positivo y `false` en caso contrario.

## 10. Checklist de dominio

Antes del examen deberías ser capaz de:

- Declarar funciones tradicionales.
    
- Ejecutar funciones.
    
- Crear funciones con parámetros.
    
- Utilizar varios argumentos.
    
- Devolver resultados con `return`.
    
- Diferenciar funciones con retorno y sin retorno explícito.
    
- Utilizar parámetros por defecto.
    
- Comprender el ámbito local y global.
    
- Interpretar el valor `undefined` cuando falta un argumento.
    
- Comprender el hoisting de las declaraciones de función.
    
- Crear pequeñas aplicaciones dividiendo el código en funciones.
    

---

**Siguiente sesión:** S12 - Funciones flecha y parámetros por defecto.