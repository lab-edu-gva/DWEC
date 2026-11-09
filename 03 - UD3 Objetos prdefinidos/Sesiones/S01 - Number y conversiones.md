---
asignatura: DWEC
unidad: UD3
sesion: S01
duracion: 55 minutos
tipo: material-alumnado
estado: preparado
ra: RA3
publicar: true
---
# S01 — Number y conversiones

1. Introducción

En cualquier aplicación informática es habitual trabajar con valores numéricos. Una tienda online necesita calcular precios, descuentos e impuestos; una aplicación bancaria debe realizar operaciones con saldos y movimientos; y un sistema de gestión necesita calcular cantidades, porcentajes y estadísticas.

JavaScript incorpora herramientas que permiten trabajar con números, realizar conversiones y comprobar si los valores obtenidos son válidos.

En este tema estudiaremos el tratamiento de valores numéricos en JavaScript, prestando especial atención al objeto predefinido `Number`.

También aprenderemos a convertir cadenas de texto en números, controlar los valores incorrectos y representar cantidades con una precisión determinada.

No basta con saber realizar una operación matemática: también debemos asegurarnos de que los datos utilizados son correctos.

## 1.1. Objetivos de aprendizaje

Al finalizar este tema deberás ser capaz de:

- Identificar el tipo de dato `number` en JavaScript.
- Comprender la relación entre los valores primitivos y el objeto `Number`.
- Diferenciar las conversiones realizadas mediante `Number()`, `parseInt()` y `parseFloat()`.
- Identificar los valores especiales `NaN`, `Infinity` y `-Infinity`.
- Comprobar si un valor es numérico, finito o entero.
- Utilizar las propiedades y métodos principales de `Number`.
- Aplicar correctamente los métodos de representación y precisión.
- Detectar errores habituales en operaciones numéricas.
- Resolver pequeños problemas prácticos utilizando conversiones y comprobaciones numéricas.

## 1.2. Conocimientos previos

Para seguir correctamente este tema es recomendable conocer:

- Declaración de variables mediante `let` y `const`.
- Tipos de datos básicos.
- Cadenas de texto.
- Operadores aritméticos.
- Estructuras condicionales.
- Funciones básicas.
- Uso de `console.log()`.

---

# 2. El tipo de dato number en JavaScript

JavaScript dispone de un único tipo de dato numérico denominado `number`.

A diferencia de otros lenguajes de programación, JavaScript no distingue entre tipos numéricos como:

- `int`: números enteros.
- `float`: números decimales.
- `double`: números decimales de doble precisión.

Todos estos valores se representan mediante el tipo `number`.

## 2.1. Números enteros

Un número entero es aquel que no contiene parte decimal.

```javascript
let edad = 25;
let alumnos = 28;
let temperatura = -5;

console.log(edad);
console.log(alumnos);
console.log(temperatura);
```

Los tres valores pertenecen al tipo `number`.

Podemos comprobarlo mediante el operador `typeof`.

```javascript
console.log(typeof edad);
console.log(typeof alumnos);
console.log(typeof temperatura);
```

Resultado:

```text
number
number
number
```

**Importante:** JavaScript no utiliza un tipo entero independiente para estos valores.

## 2.2. Números decimales

JavaScript también permite representar números con parte decimal.

En el código JavaScript se utiliza el punto como separador decimal.

```javascript
let precio = 19.95;
let altura = 1.82;
let descuento = 7.5;

console.log(typeof precio);
console.log(typeof altura);
console.log(typeof descuento);
```

Resultado:

```text
number
number
number
```

No debemos utilizar una coma como separador decimal.

```javascript
let precio = 19,95;
```

Este código no representa el número decimal 19,95. La coma se interpreta como un operador separador en determinadas expresiones y puede producir resultados inesperados.

La forma correcta es:

```javascript
let precio = 19.95;
```

## 2.3. Notación científica

JavaScript permite representar números mediante notación científica.

Esta notación resulta especialmente útil cuando trabajamos con cantidades muy grandes o muy pequeñas.

Su estructura utiliza la letra `e` para indicar una potencia de diez.

```javascript
let numero1 = 5e3;
let numero2 = 2.5e4;
let numero3 = 3e-3;

console.log(numero1);
console.log(numero2);
console.log(numero3);
```

Resultado:

```text
5000
25000
0.003
```

Interpretación:

| Expresión | Equivalencia | Resultado |
|---|---|---:|
| `5e3` | 5 × 10³ | 5000 |
| `2.5e4` | 2,5 × 10⁴ | 25000 |
| `3e-3` | 3 × 10⁻³ | 0.003 |

## 2.4. El operador typeof

El operador `typeof` permite conocer el tipo de dato de una expresión.

Su sintaxis es:

```javascript
typeof expresion;
```

Ejemplo:

```javascript
let cantidad = 150;
let precio = 12.50;
let nombre = "Luis";

console.log(typeof cantidad);
console.log(typeof precio);
console.log(typeof nombre);
```

Resultado:

```text
number
number
string
```

Esta operación resulta especialmente útil cuando recibimos información procedente de formularios o servicios externos.

Debemos recordar que `typeof` no comprueba si un número es válido matemáticamente. Por ejemplo, `NaN` también tiene tipo `number`.

```javascript
console.log(typeof NaN);
```

Resultado:

```text
number
```

---

# 3. El objeto predefinido Number

JavaScript proporciona el objeto `Number`, que contiene propiedades y métodos destinados al tratamiento de valores numéricos.

Es importante distinguir dos conceptos:

**El tipo primitivo number:** representa directamente un valor numérico.

**El objeto Number:** proporciona herramientas para trabajar con valores numéricos.

Por ejemplo:

```javascript
let cantidad = 25;

console.log(typeof cantidad);
```

Resultado:

```text
number
```

Podemos utilizar las propiedades y métodos de `Number` sin necesidad de crear un objeto manualmente.

```javascript
let precio = 19.95;

console.log(Number.isInteger(precio));
```

Resultado:

```text
false
```

## 3.1. ¿Qué diferencia existe entre number y Number?

Aunque sus nombres son prácticamente iguales, representan conceptos diferentes.

| Concepto | Descripción |
|---|---|
| `number` | Tipo de dato primitivo |
| `Number` | Objeto predefinido de JavaScript |
| `Number()` | Función que permite convertir valores a números |
| `new Number()` | Crea un objeto envoltorio de tipo Number |

Ejemplo:

```javascript
let numeroPrimitivo = 25;

let numeroObjeto = new Number(25);

console.log(typeof numeroPrimitivo);
console.log(typeof numeroObjeto);
```

Resultado:

```text
number
object
```

Aunque ambos contienen aparentemente el mismo valor, no son del mismo tipo.

### ¿Debemos utilizar new Number()?

En programación habitual no se recomienda utilizar `new Number()` para almacenar cantidades.

Es preferible trabajar con valores primitivos.

```javascript
let cantidad = 25;
```

En lugar de:

```javascript
let cantidad = new Number(25);
```

Los objetos envoltorio pueden producir comportamientos inesperados en comparaciones y comprobaciones lógicas.

Por ejemplo:

```javascript
let numero1 = 0;
let numero2 = new Number(0);

console.log(Boolean(numero1));
console.log(Boolean(numero2));
```

Resultado:

```text
false
true
```

¿Por qué?

- `numero1` es el número primitivo cero, que se considera falso.
- `numero2` es un objeto, y los objetos siempre se consideran verdaderos en contextos booleanos.

**Conclusión:** utilizaremos valores primitivos y recurriremos a las herramientas de `Number` cuando necesitemos convertir, comprobar o representar cantidades.

---

# 4. Conversión de cadenas de texto a números

Uno de los problemas más habituales al desarrollar aplicaciones web es recibir información numérica en forma de texto.

Por ejemplo, cuando un usuario introduce su edad en un formulario HTML, el valor obtenido mediante `input.value` es una cadena de texto.

```javascript
let edad = "25";

console.log(typeof edad);
```

Resultado:

```text
string
```

Aunque visualmente contenga un número, JavaScript lo está tratando como texto.

Para trabajar matemáticamente con ese dato necesitamos convertirlo.

JavaScript dispone de diferentes herramientas para realizar esta operación.

Las tres más importantes son:

- `Number()`
- `parseInt()`
- `parseFloat()`

## 4.1. Conversión mediante Number()

La función `Number()` intenta convertir un valor completo en un número.

Sintaxis:

```javascript
Number(valor);
```

Ejemplo:

```javascript
let cantidad = "150";

let resultado = Number(cantidad);

console.log(resultado);
console.log(typeof resultado);
```

Resultado:

```text
150
number
```

La conversión se ha realizado correctamente.

### Conversión de números decimales

```javascript
let precio = "19.95";

let resultado = Number(precio);

console.log(resultado);
```

Resultado:

```text
19.95
```

### Conversión de cadenas no numéricas

¿Qué sucede si intentamos convertir un texto que no representa un número?

```javascript
let cantidad = "hola";

let resultado = Number(cantidad);

console.log(resultado);
```

Resultado:

```text
NaN
```

JavaScript no puede realizar una conversión numérica válida.

El resultado es `NaN`, que significa *Not a Number*.

### Conversión de cadenas vacías

Un detalle importante es que `Number()` convierte una cadena vacía en cero.

```javascript
console.log(Number(""));
console.log(Number("   "));
```

Resultado:

```text
0
0
```

Este comportamiento puede resultar problemático cuando trabajamos con formularios.

Si un usuario deja un campo vacío, no siempre queremos interpretar ese dato como cero.

Por eso debemos validar los datos antes de convertirlos.

### Tabla de conversiones con Number()

| Expresión | Resultado | Explicación |
|---|---:|---|
| `Number("25")` | 25 | Conversión correcta |
| `Number("25.5")` | 25.5 | Conversión decimal |
| `Number("25abc")` | NaN | Contiene caracteres no numéricos |
| `Number("")` | 0 | Cadena vacía |
| `Number("   ")` | 0 | Espacios en blanco |
| `Number(true)` | 1 | Valor booleano verdadero |
| `Number(false)` | 0 | Valor booleano falso |
| `Number(null)` | 0 | Conversión de null |
| `Number(undefined)` | NaN | Valor no definido |

## 4.2. Conversión mediante parseInt()

La función `parseInt()` permite obtener un número entero a partir del comienzo de una cadena.

Sintaxis:

```javascript
parseInt(cadena, base);
```

El segundo parámetro indica la base numérica utilizada para interpretar el texto.

Normalmente trabajaremos con base 10.

Ejemplo:

```javascript
let cantidad = "150";

let resultado = parseInt(cantidad, 10);

console.log(resultado);
```

Resultado:

```text
150
```

### ¿Qué sucede con los decimales?

```javascript
let precio = "19.95";

let resultado = parseInt(precio, 10);

console.log(resultado);
```

Resultado:

```text
19
```

`parseInt()` deja de interpretar la cadena cuando encuentra un carácter que no forma parte del número.

Por eso elimina la parte decimal.

### Interpretación parcial de cadenas

Una característica importante de `parseInt()` es que puede interpretar el comienzo numérico de una cadena aunque después aparezcan otros caracteres.

```javascript
console.log(parseInt("150 euros", 10));
```

Resultado:

```text
150
```

En cambio:

```javascript
console.log(parseInt("euros 150", 10));
```

Resultado:

```text
NaN
```

¿Por qué?

Porque `parseInt()` necesita encontrar el comienzo del número después de los espacios permitidos y de un posible signo.

No busca números en cualquier posición de la cadena.

### Uso de la base numérica

El segundo parámetro de `parseInt()` permite indicar la base.

```javascript
console.log(parseInt("1010", 2));
console.log(parseInt("20", 10));
console.log(parseInt("FF", 16));
```

Resultado:

```text
10
20
255
```

Interpretación:

| Expresión | Base | Resultado |
|---|---:|---:|
| `parseInt("1010", 2)` | Binaria | 10 |
| `parseInt("20", 10)` | Decimal | 20 |
| `parseInt("FF", 16)` | Hexadecimal | 255 |

En nuestras aplicaciones habituales utilizaremos principalmente la base decimal.

## 4.3. Conversión mediante parseFloat()

La función `parseFloat()` permite obtener un número decimal a partir del comienzo de una cadena.

Sintaxis:

```javascript
parseFloat(cadena);
```

Ejemplo:

```javascript
let precio = "19.95";

let resultado = parseFloat(precio);

console.log(resultado);
```

Resultado:

```text
19.95
```

A diferencia de `parseInt()`, conserva la parte decimal.

También permite interpretar parcialmente las cadenas:

```javascript
console.log(parseFloat("19.95 euros"));
```

Resultado:

```text
19.95
```

Sin embargo:

```javascript
console.log(parseFloat("euros 19.95"));
```

Resultado:

```text
NaN
```

## 4.4. Comparación entre Number(), parseInt() y parseFloat()

Esta es una de las partes más importantes del tema.

Las tres herramientas realizan conversiones, pero no funcionan de la misma manera.

| Valor original | Number() | parseInt() | parseFloat() |
|---|---:|---:|---:|
| `"25"` | 25 | 25 | 25 |
| `"25.75"` | 25.75 | 25 | 25.75 |
| `"25 euros"` | NaN | 25 | 25 |
| `"25.75 euros"` | NaN | 25 | 25.75 |
| `"euros 25"` | NaN | NaN | NaN |
| `""` | 0 | NaN | NaN |
| `"12.5"` | 12.5 | 12 | 12.5 |

### ¿Cuál debemos utilizar?

La elección dependerá del tipo de información que recibamos.

- `Number()`: cuando esperamos que toda la cadena represente un número válido.
- `parseInt()`: cuando necesitamos interpretar un número entero al principio de una cadena.
- `parseFloat()`: cuando necesitamos interpretar un número decimal al principio de una cadena.

En formularios web, `Number()` suele ser una buena elección cuando queremos validar el contenido completo del campo, pero debemos comprobar también que no esté vacío.

---

# 5. Valores especiales: NaN e Infinity

JavaScript dispone de algunos valores especiales que debemos conocer para evitar errores en nuestros programas.

Los más importantes son:

- `NaN`
- `Infinity`
- `-Infinity`

## 5.1. NaN: Not a Number

`NaN` representa un resultado que no puede interpretarse como un número válido.

Se puede producir, por ejemplo, al intentar convertir una cadena incorrecta.

```javascript
let resultado = Number("hola");

console.log(resultado);
```

Resultado:

```text
NaN
```

También puede aparecer como resultado de operaciones matemáticas inválidas.

```javascript
console.log(0 / 0);
console.log(Math.sqrt(-1));
```

Resultado:

```text
NaN
NaN
```

### Una característica sorprendente de NaN

`NaN` tiene un comportamiento especial en las comparaciones.

```javascript
console.log(NaN === NaN);
```

Resultado:

```text
false
```

Aunque pueda parecer extraño, este comportamiento está definido por JavaScript.

Por tanto, no debemos comprobar si un valor es `NaN` utilizando directamente el operador `===`.

La forma adecuada es utilizar `Number.isNaN()`.

## 5.2. Infinity y -Infinity

JavaScript utiliza `Infinity` para representar un valor infinito positivo.

También dispone de `-Infinity` para representar el infinito negativo.

Un ejemplo sencillo es dividir un número positivo entre cero.

```javascript
let resultado = 10 / 0;

console.log(resultado);
```

Resultado:

```text
Infinity
```

Si dividimos un número negativo entre cero:

```javascript
console.log(-10 / 0);
```

Resultado:

```text
-Infinity
```

También podemos trabajar directamente con estos valores:

```javascript
console.log(Infinity > 1000000);
console.log(-Infinity < -1000000);
```

Resultado:

```text
true
true
```

Estos valores tienen tipo `number`.

```javascript
console.log(typeof Infinity);
```

Resultado:

```text
number
```

## 5.3. Resumen de valores especiales

| Valor | Significado | Tipo |
|---|---|---|
| `NaN` | Resultado numérico no válido | number |
| `Infinity` | Infinito positivo | number |
| `-Infinity` | Infinito negativo | number |

---

# 6. Comprobaciones numéricas con Number

Una aplicación profesional no debe limitarse a convertir los datos. También debe comprobar que los resultados son válidos.

Para ello, el objeto `Number` dispone de varios métodos estáticos.

Un método estático se utiliza directamente sobre el objeto, sin necesidad de crear una instancia.

Por ejemplo:

```javascript
Number.isNaN(valor);
```

## 6.1. Number.isNaN()

Permite comprobar si un valor es exactamente `NaN`.

Sintaxis:

```javascript
Number.isNaN(valor);
```

Devuelve:

- `true`: si el valor es `NaN`.
- `false`: en cualquier otro caso.

Ejemplo:

```javascript
let cantidad = Number("hola");

console.log(Number.isNaN(cantidad));
```

Resultado:

```text
true
```

Otro ejemplo:

```javascript
let precio = 25;

console.log(Number.isNaN(precio));
```

Resultado:

```text
false
```

### Diferencia entre isNaN() y Number.isNaN()

JavaScript también dispone de una función global denominada `isNaN()`.

Aunque sus nombres son iguales, presentan diferencias importantes.

```javascript
console.log(isNaN("hola"));
console.log(Number.isNaN("hola"));
```

Resultado:

```text
true
false
```

¿Por qué?

La función global `isNaN()` intenta convertir previamente el valor a número.

`Number.isNaN()` no realiza esa conversión. Solo comprueba si el valor recibido es realmente `NaN`.

Por eso, en nuestras aplicaciones utilizaremos preferentemente `Number.isNaN()` cuando queramos comprobar un resultado numérico.

## 6.2. Number.isFinite()

Permite comprobar si un valor es un número finito.

Sintaxis:

```javascript
Number.isFinite(valor);
```

Devuelve:

- `true`: si es un número finito.
- `false`: si es `NaN`, `Infinity`, `-Infinity` o no es de tipo numérico.

Ejemplo:

```javascript
console.log(Number.isFinite(25));
console.log(Number.isFinite(19.95));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite("25"));
```

Resultado:

```text
true
true
false
false
false
```

Este método es especialmente útil para comprobar resultados de operaciones matemáticas.

## 6.3. Number.isInteger()

Permite comprobar si un valor es un número entero.

Sintaxis:

```javascript
Number.isInteger(valor);
```

Ejemplo:

```javascript
console.log(Number.isInteger(25));
console.log(Number.isInteger(25.5));
console.log(Number.isInteger(-10));
console.log(Number.isInteger("25"));
```

Resultado:

```text
true
false
true
false
```

Debemos recordar que el texto `"25"` no es un número entero para esta comprobación. Es una cadena de texto.

Primero habría que convertirlo:

```javascript
let cantidad = Number("25");

console.log(Number.isInteger(cantidad));
```

Resultado:

```text
true
```

## 6.4. Comparación de los métodos de comprobación

| Método | ¿Qué comprueba? |
|---|---|
| `Number.isNaN()` | Si el valor es NaN |
| `Number.isFinite()` | Si es un número finito |
| `Number.isInteger()` | Si es un número entero |

Ejemplo conjunto:

```javascript
let valor = 25;

console.log(Number.isNaN(valor));
console.log(Number.isFinite(valor));
console.log(Number.isInteger(valor));
```

Resultado:

```text
false
true
true
```

---

# 7. Propiedades importantes del objeto Number

El objeto `Number` dispone de propiedades estáticas que permiten consultar determinados límites y características de la representación numérica.

## 7.1. Number.MAX_VALUE

Representa el mayor valor numérico finito positivo que puede manejar el tipo `number`.

```javascript
console.log(Number.MAX_VALUE);
```

El resultado es aproximadamente:

```text
1.7976931348623157e+308
```

No debemos confundir este valor con el mayor entero que puede representarse de manera segura.

## 7.2. Number.MIN_VALUE

Representa el menor valor positivo distinto de cero que puede representarse en JavaScript.

```javascript
console.log(Number.MIN_VALUE);
```

Su valor aproximado es:

```text
5e-324
```

**Atención:** `Number.MIN_VALUE` no representa el número negativo más pequeño. Representa el valor positivo más próximo a cero.

Esta diferencia es importante.

## 7.3. Number.MAX_SAFE_INTEGER

Representa el mayor número entero que puede manejarse de forma segura mediante el tipo `number`.

```javascript
console.log(Number.MAX_SAFE_INTEGER);
```

Resultado:

```text
9007199254740991
```

Es decir:

```text
2^53 - 1
```

Por encima de este límite pueden producirse problemas de precisión al representar números enteros consecutivos.

## 7.4. Number.MIN_SAFE_INTEGER

Representa el menor entero seguro.

```javascript
console.log(Number.MIN_SAFE_INTEGER);
```

Resultado:

```text
-9007199254740991
```

## 7.5. Number.EPSILON

Representa la diferencia entre 1 y el siguiente número representable mediante `number`.

```javascript
console.log(Number.EPSILON);
```

Resultado aproximado:

```text
2.220446049250313e-16
```

Esta propiedad resulta útil para comprender los problemas de precisión de los números decimales.

Por ejemplo:

```javascript
console.log(0.1 + 0.2);
```

Resultado:

```text
0.30000000000000004
```

¿Por qué no aparece exactamente `0.3`?

Porque JavaScript utiliza el estándar IEEE 754 para representar los números de punto flotante. Algunos valores decimales no pueden representarse de forma exacta en binario.

Por tanto, se produce una pequeña diferencia de precisión.

Una forma de comparar resultados decimales aproximados consiste en utilizar una tolerancia.

```javascript
let resultado = 0.1 + 0.2;

let esCorrecto = Math.abs(resultado - 0.3) < Number.EPSILON;

console.log(esCorrecto);
```

Resultado:

```text
true
```

En aplicaciones financieras, donde la precisión monetaria es especialmente importante, debemos diseñar el tratamiento de las cantidades con cuidado, por ejemplo trabajando con unidades mínimas enteras (céntimos) cuando corresponda.

---

# 8. Representación y precisión de los números

JavaScript dispone de métodos que permiten controlar cómo se representa un número.

Es importante distinguir entre el valor numérico almacenado y su representación como cadena de texto.

Los métodos principales que estudiaremos son:

- `toFixed()`
- `toPrecision()`
- `toString()`

## 8.1. Método toFixed()

Permite representar un número con una cantidad determinada de decimales.

Sintaxis:

```javascript
numero.toFixed(cantidadDecimales);
```

Ejemplo:

```javascript
let precio = 19.956;

console.log(precio.toFixed(2));
```

Resultado:

```text
19.96
```

El método redondea la representación a dos posiciones decimales.

### Más ejemplos

```javascript
let numero = 15.6789;

console.log(numero.toFixed(0));
console.log(numero.toFixed(1));
console.log(numero.toFixed(2));
console.log(numero.toFixed(3));
```

Resultado:

```text
16
15.7
15.68
15.679
```

### ¿Qué sucede si utilizamos toFixed(4)?

```javascript
let numero = 15.6;

console.log(numero.toFixed(4));
```

Resultado:

```text
15.6000
```

El método completa con ceros cuando es necesario.

### ¡Importante! toFixed() devuelve una cadena de texto

Este es uno de los errores más habituales.

```javascript
let precio = 19.95;

let resultado = precio.toFixed(2);

console.log(typeof resultado);
```

Resultado:

```text
string
```

Aunque visualmente parezca un número, el resultado es una cadena.

Si necesitamos seguir realizando operaciones matemáticas, podemos convertirlo:

```javascript
let precio = 19.956;

let resultado = Number(precio.toFixed(2));

console.log(resultado);
console.log(typeof resultado);
```

Resultado:

```text
19.96
number
```

## 8.2. Método toPrecision()

Permite representar un número utilizando una cantidad determinada de cifras significativas.

Sintaxis:

```javascript
numero.toPrecision(cantidadCifras);
```

A diferencia de `toFixed()`, no controla directamente la cantidad de decimales, sino el número total de cifras significativas.

Ejemplo:

```javascript
let numero = 123.456;

console.log(numero.toPrecision(4));
```

Resultado:

```text
123.5
```

Se utilizan cuatro cifras significativas.

### Más ejemplos

```javascript
let numero = 123.456;

console.log(numero.toPrecision(2));
console.log(numero.toPrecision(3));
console.log(numero.toPrecision(5));
```

Resultado:

```text
1.2e+2
123
123.46
```

En determinados casos, JavaScript puede utilizar notación científica.

### Diferencia entre toFixed() y toPrecision()

| Método | Controla | Ejemplo |
|---|---|---|
| `toFixed(2)` | Número de decimales | `123.46` |
| `toPrecision(4)` | Número de cifras significativas | `123.5` |

Ambos devuelven cadenas de texto.

## 8.3. Método toString()

Permite convertir un valor numérico en una cadena de texto.

Ejemplo:

```javascript
let cantidad = 150;

let resultado = cantidad.toString();

console.log(resultado);
console.log(typeof resultado);
```

Resultado:

```text
150
string
```

También podemos indicar una base numérica.

```javascript
let numero = 10;

console.log(numero.toString(2));
console.log(numero.toString(8));
console.log(numero.toString(16));
```

Resultado:

```text
1010
12
a
```

---

# 9. Trazados de ejecución paso a paso

Comprender un programa no consiste únicamente en leer sus instrucciones. También debemos ser capaces de seguir la evolución de las variables y justificar el resultado de cada operación.

En este apartado aprenderemos a realizar trazados de ejecución.

## 9.1. Ejemplo guiado 1: conversión de una cantidad

Código:

```javascript
let cantidadTexto = "125";
let cantidad = Number(cantidadTexto);

let incremento = 25;

let resultado = cantidad + incremento;

console.log(resultado);
```

### Análisis paso a paso

**Paso 1.** Se declara una variable con una cadena de texto.

```javascript
let cantidadTexto = "125";
```

Su valor es `"125"` y su tipo es `string`.

**Paso 2.** Se realiza una conversión numérica.

```javascript
let cantidad = Number(cantidadTexto);
```

La cadena `"125"` se convierte en el número `125`.

**Paso 3.** Se declara una variable numérica.

```javascript
let incremento = 25;
```

**Paso 4.** Se realiza la suma.

```javascript
let resultado = cantidad + incremento;
```

JavaScript suma dos valores numéricos:

125 + 25 = 150

**Paso 5.** Se muestra el resultado.

```javascript
console.log(resultado);
```

Resultado:

```text
150
```

### Tabla de seguimiento

| Variable | Valor | Tipo |
|---|---|---|
| cantidadTexto | `"125"` | string |
| cantidad | 125 | number |
| incremento | 25 | number |
| resultado | 150 | number |

## 9.2. Ejemplo guiado 2: validación de una cantidad

Código:

```javascript
let precioTexto = "19.95";

let precio = Number(precioTexto);

if (Number.isNaN(precio)) {
    console.log("El precio no es válido");
} else {
    console.log("Precio correcto: " + precio);
}
```

### Análisis paso a paso

1. Se recibe el precio como una cadena.
2. Se convierte mediante `Number()`.
3. Se comprueba si el resultado es `NaN`.
4. Como la conversión es correcta, la condición devuelve `false`.
5. Se ejecuta el bloque `else`.

Resultado:

```text
Precio correcto: 19.95
```

Ahora cambiamos el valor inicial:

```javascript
let precioTexto = "diecinueve";
```

La conversión produce `NaN`, por lo que se ejecuta el primer bloque.

Resultado:

```text
El precio no es válido
```

## 9.3. Ejemplo guiado 3: cálculo de una media

Código:

```javascript
let nota1 = "7.5";
let nota2 = "8";
let nota3 = "6.5";

let media = (
    Number(nota1) +
    Number(nota2) +
    Number(nota3)
) / 3;

console.log(media.toFixed(2));
```

### Análisis

Primero convertimos las tres cadenas:

- `"7.5"` → 7.5
- `"8"` → 8
- `"6.5"` → 6.5

Después realizamos la suma:

7.5 + 8 + 6.5 = 22

Dividimos entre tres:

22 / 3 = 7.333333...

Finalmente utilizamos `toFixed(2)` para mostrar dos decimales.

Resultado:

```text
7.33
```

---

# 10. Ejercicios prácticos

Los ejercicios se organizan de forma progresiva.

No avances al siguiente nivel sin haber comprendido los anteriores.

> [!tip] Recomendación
> Intenta resolver cada ejercicio sin consultar la solución. Después ejecuta el código y compara tus resultados.

## Nivel 1 – Fundamentos

### E01. Identificación de tipos numéricos

Declara las siguientes variables:

- Una edad de 22 años.
- Un precio de 49.95 euros.
- Una temperatura de -3 grados.
- Una cantidad expresada mediante notación científica: 3 × 10⁴.

Muestra por consola el valor y el tipo de cada variable.

**Requisitos:**

- Utilizar `let` o `const`.
- Utilizar `typeof`.
- Mostrar resultados mediante `console.log()`.

### E02. Conversiones básicas

Dispones de las siguientes cadenas:

```javascript
let cantidad1 = "150";
let cantidad2 = "25.75";
let cantidad3 = "80";
```

Realiza las siguientes operaciones:

1. Convierte `cantidad1` en un número.
2. Convierte `cantidad2` en un número decimal.
3. Convierte `cantidad3` en un número entero.
4. Suma los tres resultados.
5. Muestra el resultado y su tipo de dato.

### E03. Diferencias entre conversiones

Ejecuta las siguientes instrucciones:

```javascript
console.log(Number("25.8"));
console.log(parseInt("25.8", 10));
console.log(parseFloat("25.8"));

console.log(Number("25 euros"));
console.log(parseInt("25 euros", 10));
console.log(parseFloat("25 euros"));
```

Responde:

1. ¿Qué diferencias observas?
2. ¿Por qué `Number("25 euros")` devuelve `NaN`?
3. ¿Por qué las otras dos conversiones devuelven un resultado numérico?

### E04. Comprobación de valores

Declara las siguientes variables:

```javascript
let numero1 = 25;
let numero2 = 25.5;
let numero3 = "25";
let numero4 = NaN;
let numero5 = Infinity;
```

Utiliza los métodos:

- `Number.isNaN()`
- `Number.isFinite()`
- `Number.isInteger()`

Comprueba cada variable y muestra los resultados.

## Nivel 2 – Aplicación

### E05. Calculadora de precios

Una tienda necesita calcular el importe de una compra.

Dispones de los siguientes datos:

```javascript
let precioTexto = "39.95";
let unidadesTexto = "3";
```

Desarrolla un programa que:

1. Convierta ambos valores en números.
2. Compruebe que las conversiones son válidas.
3. Calcule el importe total.
4. Muestre el resultado con dos decimales.
5. Muestre también el tipo de dato del resultado final.

**Condición:** si algún dato no es válido, debe mostrarse un mensaje de error.

### E06. Calculadora de notas

Un profesor necesita calcular la nota media de un alumno.

Dispones de tres notas:

```javascript
let nota1 = "7.5";
let nota2 = "8.25";
let nota3 = "6";
```

Desarrolla un programa que:

1. Convierta las tres notas.
2. Compruebe que son valores numéricos finitos.
3. Compruebe que todas se encuentran entre 0 y 10.
4. Calcule la media.
5. Muestre la media con dos decimales.

Si alguna nota es incorrecta, el programa debe mostrar un mensaje indicando que los datos no son válidos.

### E07. Control de precisión

Ejecuta el siguiente código:

```javascript
let resultado = 0.1 + 0.2;

console.log(resultado);
console.log(resultado.toFixed(2));
```

Responde:

1. ¿Por qué el primer resultado no es exactamente 0.3?
2. ¿Qué hace `toFixed(2)`?
3. ¿Qué tipo de dato devuelve `toFixed()`?
4. ¿Qué ocurriría si intentásemos utilizar directamente el resultado de `toFixed()` en una operación matemática?

## Nivel 3 – Razonamiento y resolución de problemas

### E08. Validación de un formulario

Imagina que estás desarrollando un formulario para registrar productos.

El usuario debe introducir:

- Nombre del producto.
- Precio.
- Cantidad disponible.

Dispones de estos datos de ejemplo:

```javascript
let nombre = "Teclado";
let precioTexto = "29.95";
let cantidadTexto = "15";
```

Desarrolla un programa que:

1. Compruebe que el nombre no está vacío.
2. Convierta el precio a número.
3. Convierta la cantidad a número.
4. Compruebe que el precio es finito y mayor que cero.
5. Compruebe que la cantidad es un entero y no es negativa.
6. Calcule el valor total del inventario.
7. Muestre los datos del producto si todas las comprobaciones son correctas.

### E09. Análisis de resultados

Sin ejecutar inicialmente el código, indica qué resultado produce cada instrucción y justifica tu respuesta.

```javascript
console.log(Number(""));

console.log(Number("12.5"));

console.log(parseInt("12.5", 10));

console.log(parseFloat("12.5 euros"));

console.log(Number.isNaN(NaN));

console.log(Number.isFinite(Infinity));

console.log(Number.isInteger(12.0));

console.log(typeof (25).toFixed(2));

console.log((255).toString(16));
```

Después ejecuta el código y comprueba tus respuestas.

### E10. Sistema de cálculo de nóminas simplificado

Una empresa necesita calcular el importe bruto mensual de sus trabajadores.

Cada trabajador tiene:

- Un salario base.
- Un complemento.
- Un porcentaje de incentivo.

Datos iniciales:

```javascript
let salarioTexto = "1450.50";
let complementoTexto = "125";
let incentivoTexto = "5";
```

Desarrolla un programa que:

1. Convierta todos los datos.
2. Compruebe que son números finitos.
3. Compruebe que salario y complemento no son negativos.
4. Compruebe que el incentivo está entre 0 y 100.
5. Calcule la suma del salario y el complemento.
6. Calcule el incentivo sobre esa cantidad.
7. Obtenga el importe bruto final.
8. Muestre los resultados con dos decimales.

**Importante:** se trata de un ejercicio didáctico. No representa un cálculo completo de nómina ni contempla retenciones o cotizaciones.

---

# 11. Reto práctico – Sistema de facturación

> [!example] Reto de aplicación
> **Dificultad:** avanzada  
> **Tiempo recomendado:** 20-30 minutos de trabajo autónomo.

Una pequeña empresa necesita una aplicación que permita calcular el importe de una factura.

El usuario proporciona los siguientes datos:

```javascript
let precioTexto = "125.50";
let cantidadTexto = "4";
let descuentoTexto = "10";
let ivaTexto = "21";
```

Debes desarrollar un programa que calcule el importe final de la factura.

## Requisitos funcionales

**1. Conversión de datos**

Convierte los cuatro valores a números.

**2. Validación**

Comprueba que:

- Todos los datos son números finitos.
- El precio es mayor que cero.
- La cantidad es un entero positivo.
- El descuento está entre 0 y 100.
- El IVA está entre 0 y 100.

**3. Cálculos**

Calcula:

- Importe bruto.
- Importe del descuento.
- Base imponible.
- Importe del IVA.
- Total de la factura.

**4. Presentación**

Muestra un resumen con dos decimales para los importes monetarios.

## Resultado esperado

Con los datos proporcionados:

| Concepto | Importe |
|---|---:|
| Precio unitario | 125,50 € |
| Unidades | 4 |
| Importe bruto | 502,00 € |
| Descuento (10 %) | 50,20 € |
| Base imponible | 451,80 € |
| IVA (21 %) | 94,878 € |
| Total | 546,678 € |

La presentación monetaria con dos decimales sería:

**Total de factura: 546,68 €**

En una aplicación comercial real habría que definir también las reglas de redondeo fiscal y monetario correspondientes.

---

# 12. Errores habituales

Durante el desarrollo de los ejercicios pueden aparecer los siguientes errores.

| Error | Explicación | Solución |
|---|---|---|
| Sumar cadenas en lugar de números | JavaScript puede concatenar textos | Convertir antes de sumar |
| Confundir Number y number | Uno es el objeto y otro el tipo primitivo | Diferenciar ambos conceptos |
| Utilizar parseInt() para importes decimales | Elimina la parte decimal | Utilizar Number() o parseFloat() |
| No comprobar NaN | Pueden propagarse resultados inválidos | Utilizar Number.isNaN() |
| Comparar NaN con === | NaN nunca es igual a sí mismo | Utilizar Number.isNaN() |
| Confundir MAX_VALUE y MAX_SAFE_INTEGER | Representan límites diferentes | Comprender qué limita cada propiedad |
| Pensar que toFixed() devuelve un número | Devuelve una cadena | Convertir el resultado si es necesario |
| Considerar que Number("") es NaN | La conversión devuelve cero | Validar cadenas vacías previamente |
| No comprobar Infinity | Algunas operaciones producen valores infinitos | Utilizar Number.isFinite() |

## 12.1. Ejemplo de error: concatenación de cadenas

Código incorrecto:

```javascript
let precio = "20";
let cantidad = "3";

let total = precio + cantidad;

console.log(total);
```

Resultado:

```text
203
```

El operador `+` concatena las cadenas.

Código correcto:

```javascript
let precio = Number("20");
let cantidad = Number("3");

let total = precio + cantidad;

console.log(total);
```

Resultado:

```text
23
```

---

# 13. Buenas prácticas

Al trabajar con números en JavaScript es recomendable seguir estas pautas:

1. Utilizar `Number()` cuando necesitemos validar una conversión completa.
2. Comprobar que los campos obligatorios no están vacíos.
3. Utilizar `Number.isNaN()` para detectar resultados inválidos.
4. Utilizar `Number.isFinite()` para comprobar resultados finitos.
5. Utilizar `Number.isInteger()` cuando necesitemos cantidades enteras.
6. No utilizar `new Number()` para almacenar cantidades.
7. Recordar que `toFixed()` y `toPrecision()` devuelven cadenas.
8. No confiar exclusivamente en la validación del navegador.
9. Comprobar siempre los datos recibidos antes de realizar operaciones.
10. Tener en cuenta los problemas de precisión de los números decimales.

---

# 14. Resumen del tema

En este tema hemos aprendido que JavaScript utiliza un único tipo numérico denominado `number`.

El objeto `Number` proporciona herramientas para convertir, comprobar y representar valores numéricos.

### Conceptos fundamentales

| Elemento | Función |
|---|---|
| `Number()` | Convierte un valor a número |
| `parseInt()` | Interpreta un entero al principio de una cadena |
| `parseFloat()` | Interpreta un decimal al principio de una cadena |
| `Number.isNaN()` | Comprueba si un valor es NaN |
| `Number.isFinite()` | Comprueba si un número es finito |
| `Number.isInteger()` | Comprueba si un valor es entero |
| `toFixed()` | Representa un número con decimales determinados |
| `toPrecision()` | Representa un número con cifras significativas determinadas |
| `toString()` | Convierte un número en texto |

### Propiedades fundamentales

| Propiedad | Descripción |
|---|---|
| `Number.MAX_VALUE` | Mayor número finito positivo |
| `Number.MIN_VALUE` | Menor número positivo distinto de cero |
| `Number.MAX_SAFE_INTEGER` | Mayor entero seguro |
| `Number.MIN_SAFE_INTEGER` | Menor entero seguro |
| `Number.EPSILON` | Diferencia entre 1 y el siguiente número representable |

---

# 15. Autoevaluación

Antes de continuar con el siguiente tema, comprueba si eres capaz de responder correctamente a estas preguntas.

### Preguntas teóricas

**P01.** ¿Qué tipo de dato utiliza JavaScript para representar números enteros y decimales?

**P02.** ¿Qué diferencia existe entre `Number` y `number`?

**P03.** ¿Qué diferencia existe entre `Number()` y `parseInt()`?

**P04.** ¿Qué resultado devuelve `Number("hola")`?

**P05.** ¿Por qué `NaN === NaN` devuelve `false`?

**P06.** ¿Qué diferencia existe entre `Number.isNaN()` e `isNaN()`?

**P07.** ¿Qué diferencia existe entre `Number.MAX_VALUE` y `Number.MAX_SAFE_INTEGER`?

**P08.** ¿Qué diferencia existe entre `toFixed()` y `toPrecision()`?

**P09.** ¿Qué tipo de dato devuelve `toFixed()`?

**P10.** ¿Por qué `0.1 + 0.2` no siempre produce exactamente `0.3`?

### Preguntas prácticas

**P11.** ¿Qué resultado produce el siguiente código?

```javascript
let numero = Number("25.75");

console.log(parseInt(numero, 10));
```

**P12.** ¿Qué resultado produce el siguiente código?

```javascript
let numero = "15";

console.log(Number.isInteger(numero));
```

**P13.** ¿Qué resultado produce el siguiente código?

```javascript
let numero = 25.678;

console.log(numero.toFixed(1));
```

**P14.** ¿Qué resultado produce el siguiente código?

```javascript
console.log(Number("20 euros"));
```

**P15.** ¿Qué resultado produce el siguiente código?

```javascript
console.log(parseFloat("20.75 euros"));
```

### Criterio de autoevaluación

| Resultado | Interpretación |
|---|---|
| 13-15 respuestas correctas | Dominio satisfactorio |
| 10-12 respuestas correctas | Buen nivel, revisar algunos conceptos |
| 7-9 respuestas correctas | Necesitas reforzar algunos apartados |
| Menos de 7 respuestas correctas | Conviene repasar el tema y repetir los ejercicios |

---

# 16. Antes de continuar

Comprueba que eres capaz de:

- [ ] Diferenciar `number` y `Number`.
- [ ] Convertir correctamente cadenas a números.
- [ ] Explicar las diferencias entre las tres funciones de conversión.
- [ ] Identificar valores `NaN` e `Infinity`.
- [ ] Validar valores numéricos.
- [ ] Aplicar `toFixed()` y `toPrecision()`.
- [ ] Realizar un trazado de ejecución.
- [ ] Resolver el reto práctico de facturación.

> [!success] Objetivo alcanzado
> Si puedes resolver los ejercicios y justificar los resultados sin depender de las soluciones, tienes una base adecuada para continuar con el objeto `Math`.

**Fin del Tema 01 – Number y conversiones numéricas.**