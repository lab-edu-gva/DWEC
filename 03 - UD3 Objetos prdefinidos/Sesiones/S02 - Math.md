---
asignatura: DWEC
unidad: UD3
sesion: S02
duracion: 55 minutos
tipo: material-alumnado
estado: preparado
ra: RA3
publicar: true
---
# S02 — El objeto Math

1. Introducción

JavaScript incorpora un objeto llamado `Math` que proporciona propiedades y métodos para realizar operaciones matemáticas.

Hasta ahora hemos trabajado con valores numéricos y conversiones mediante `Number`, `parseInt()` y `parseFloat()`. Sin embargo, en muchas aplicaciones necesitamos realizar operaciones más avanzadas:

- Redondear cantidades.
- Calcular raíces cuadradas.
- Obtener valores máximos y mínimos.
- Calcular potencias.
- Generar números aleatorios.
- Trabajar con ángulos y funciones trigonométricas.
- Obtener valores absolutos.

Imaginemos que estamos desarrollando una aplicación para gestionar las notas de un alumnado. Podríamos necesitar redondear una media, calcular una puntuación aleatoria para un juego o determinar la nota máxima de un conjunto de resultados.

Para estas operaciones utilizaremos el objeto `Math`.

### 1.1. ¿Qué es Math?

`Math` es un objeto incorporado en JavaScript que contiene propiedades y métodos matemáticos.

A diferencia de otros objetos que hemos estudiado, `Math` no necesita instanciarse para utilizar sus métodos.

Por ejemplo:

```javascript
let resultado = Math.sqrt(25);

console.log(resultado);
```

Resultado:

```text
5
```

Podemos observar que accedemos directamente al método `sqrt()` utilizando el nombre del objeto.

**Importante:** no debemos utilizar `new Math()`.

```javascript
// Incorrecto
let operaciones = new Math();

// Correcto
let resultado = Math.sqrt(25);
```

`Math` no es un constructor. Sus propiedades y métodos son estáticos, por lo que se utilizan directamente desde el propio objeto.

### 1.2. Objetivos de aprendizaje

Al finalizar esta sesión deberás ser capaz de:

- Comprender qué es el objeto `Math` y para qué se utiliza.
- Utilizar correctamente sus propiedades y métodos.
- Diferenciar entre redondeo, truncamiento y aproximación.
- Calcular potencias, raíces cuadradas y valores absolutos.
- Obtener valores máximos y mínimos.
- Generar números aleatorios dentro de intervalos determinados.
- Aplicar operaciones matemáticas en pequeños programas JavaScript.
- Seleccionar el método matemático adecuado según el problema planteado.

---

## 2. Propiedades del objeto Math

El objeto `Math` incorpora varias constantes matemáticas que podemos utilizar directamente en nuestros programas.

Las propiedades más importantes son las siguientes:

| Propiedad      | Significado               |   Valor aproximado |
| -------------- | ------------------------- | -----------------: |
| `Math.PI`      | Número pi                 |  3.141592653589793 |
| `Math.E`       | Número de Euler           |  2.718281828459045 |
| `Math.SQRT2`   | Raíz cuadrada de 2        | 1.4142135623730951 |
| `Math.SQRT1_2` | Raíz cuadrada de 1/2      | 0.7071067811865476 |
| `Math.LN2`     | Logaritmo natural de 2    | 0.6931471805599453 |
| `Math.LN10`    | Logaritmo natural de 10   |  2.302585092994046 |
| `Math.LOG2E`   | Logaritmo en base 2 de E  | 1.4426950408889634 |
| `Math.LOG10E`  | Logaritmo en base 10 de E | 0.4342944819032518 |

### 2.1. Utilizar Math.PI

La constante `Math.PI` representa el número pi.

Es especialmente útil para realizar cálculos relacionados con circunferencias y círculos.

Por ejemplo, la fórmula para calcular la longitud de una circunferencia es:

\[
L=2\cdot\pi\cdot r
\]

Donde:

- \(L\) es la longitud de la circunferencia.
- \(\pi\) es el número pi.
- \(r\) es el radio.

Ejemplo:

```javascript
let radio = 5;

let longitud = 2 * Math.PI * radio;

console.log(longitud);
```

Resultado aproximado:

```text
31.41592653589793
```

También podemos calcular el área de un círculo:

\[
A=\pi\cdot r^2
\]

```javascript
let radio = 5;

let area = Math.PI * radio ** 2;

console.log(area);
```

Resultado aproximado:

```text
78.53981633974483
```

Observa que utilizamos el operador `**` para elevar el radio al cuadrado.

### 2.2. ¿Cuándo utilizar las constantes de Math?

Siempre que necesitemos una constante matemática conocida, es recomendable utilizar la propiedad correspondiente en lugar de escribir manualmente su valor.

Por ejemplo:

```javascript
// Recomendado
let resultado = Math.PI * 10;

// Menos recomendable
let resultado2 = 3.141592653589793 * 10;
```

La primera opción es más legible y evita introducir errores al escribir valores aproximados.

---

## 3. Métodos de redondeo

Uno de los usos más habituales de `Math` consiste en modificar la representación de un número mediante diferentes tipos de redondeo.

JavaScript proporciona varios métodos que pueden parecer similares, pero cuyo comportamiento es diferente.

Los principales son:

- `Math.round()`
- `Math.ceil()`
- `Math.floor()`
- `Math.trunc()`

Es importante comprender sus diferencias porque utilizarlos incorrectamente puede provocar errores en los cálculos.

### 3.1. Math.round()

El método `Math.round()` devuelve el número entero más próximo.

Su sintaxis es:

```javascript
Math.round(numero);
```

Ejemplos:

```javascript
console.log(Math.round(4.2));
console.log(Math.round(4.5));
console.log(Math.round(4.8));
```

Resultado:

```text
4
5
5
```

El comportamiento general es:

- Si la parte decimal es inferior a 0.5, se aproxima al entero inferior.
- Si la parte decimal es igual o superior a 0.5, se aproxima al entero superior.

**Atención con los números negativos:**

En JavaScript, los valores situados exactamente a mitad de camino se redondean hacia el entero positivo más próximo.

```javascript
console.log(Math.round(-4.2));
console.log(Math.round(-4.5));
console.log(Math.round(-4.8));
```

Resultado:

```text
-4
-4
-5
```

Este comportamiento es importante cuando trabajamos con temperaturas, saldos negativos o variaciones de valores.

### 3.2. Math.ceil()

El método `Math.ceil()` devuelve el entero más pequeño que sea mayor o igual que el número original.

En otras palabras, redondea hacia arriba.

Sintaxis:

```javascript
Math.ceil(numero);
```

Ejemplos:

```javascript
console.log(Math.ceil(4.1));
console.log(Math.ceil(4.5));
console.log(Math.ceil(4.9));
```

Resultado:

```text
5
5
5
```

También debemos tener en cuenta los negativos:

```javascript
console.log(Math.ceil(-4.1));
console.log(Math.ceil(-4.9));
```

Resultado:

```text
-4
-4
```

Aunque pueda parecer extraño, redondear hacia arriba significa acercarse al infinito positivo, no aumentar necesariamente el valor absoluto.

**Ejemplo práctico: calcular páginas necesarias**

Imaginemos que tenemos que distribuir 101 alumnos en grupos de 20 personas.

Necesitamos saber cuántos grupos completos o parciales debemos crear.

```javascript
let alumnos = 101;
let capacidadGrupo = 20;

let grupos = Math.ceil(alumnos / capacidadGrupo);

console.log(grupos);
```

Resultado:

```text
6
```

Necesitamos seis grupos porque cinco grupos solamente permitirían distribuir a 100 alumnos.

### 3.3. Math.floor()

El método `Math.floor()` devuelve el entero más grande que sea menor o igual que el número original.

Es decir, redondea hacia abajo.

Sintaxis:

```javascript
Math.floor(numero);
```

Ejemplos:

```javascript
console.log(Math.floor(4.1));
console.log(Math.floor(4.5));
console.log(Math.floor(4.9));
```

Resultado:

```text
4
4
4
```

Con números negativos:

```javascript
console.log(Math.floor(-4.1));
console.log(Math.floor(-4.9));
```

Resultado:

```text
-5
-5
```

**Ejemplo práctico: calcular grupos completos**

Disponemos de 101 alumnos y queremos saber cuántos grupos completos de 20 personas podemos formar.

```javascript
let alumnos = 101;
let capacidadGrupo = 20;

let gruposCompletos = Math.floor(alumnos / capacidadGrupo);

console.log(gruposCompletos);
```

Resultado:

```text
5
```

Podemos formar cinco grupos completos y quedaría un alumno sin grupo completo.

### 3.4. Math.trunc()

El método `Math.trunc()` elimina la parte decimal de un número sin realizar ningún tipo de redondeo.

Sintaxis:

```javascript
Math.trunc(numero);
```

Ejemplos:

```javascript
console.log(Math.trunc(4.9));
console.log(Math.trunc(4.1));
console.log(Math.trunc(-4.9));
```

Resultado:

```text
4
4
-4
```

La diferencia fundamental con `Math.floor()` aparece especialmente con números negativos:

```javascript
console.log(Math.floor(-4.9));
console.log(Math.trunc(-4.9));
```

Resultado:

```text
-5
-4
```

`Math.floor()` se dirige hacia el infinito negativo, mientras que `Math.trunc()` elimina la parte decimal acercándose a cero.

### 3.5. Comparativa de los métodos de redondeo

| Número | round() | ceil() | floor() | trunc() |
|---:|---:|---:|---:|---:|
| 4.2 | 4 | 5 | 4 | 4 |
| 4.5 | 5 | 5 | 4 | 4 |
| 4.8 | 5 | 5 | 4 | 4 |
| -4.2 | -4 | -4 | -5 | -4 |
| -4.5 | -4 | -4 | -5 | -4 |
| -4.8 | -5 | -4 | -5 | -4 |

Ejemplo para comprobar las diferencias:

```javascript
let numero = 7.8;

console.log("Round:", Math.round(numero));
console.log("Ceil:", Math.ceil(numero));
console.log("Floor:", Math.floor(numero));
console.log("Trunc:", Math.trunc(numero));
```

Resultado:

```text
Round: 8
Ceil: 8
Floor: 7
Trunc: 7
```

**Idea fundamental:** no debemos elegir un método porque su nombre nos resulte familiar. Debemos elegirlo según el resultado que necesitamos obtener.

---

## 4. Operaciones matemáticas

El objeto `Math` también proporciona métodos para realizar diferentes operaciones matemáticas.

Entre los más utilizados encontramos:

- `Math.abs()`
- `Math.pow()`
- `Math.sqrt()`
- `Math.cbrt()`
- `Math.sign()`

### 4.1. Math.abs()

El método `Math.abs()` devuelve el valor absoluto de un número.

El valor absoluto representa la distancia entre un número y el cero, por lo que nunca será negativo.

Sintaxis:

```javascript
Math.abs(numero);
```

Ejemplos:

```javascript
console.log(Math.abs(10));
console.log(Math.abs(-10));
console.log(Math.abs(0));
```

Resultado:

```text
10
10
0
```

**Ejemplo práctico: calcular diferencias de temperatura**

Imaginemos que queremos conocer la diferencia absoluta entre dos temperaturas.

```javascript
let temperaturaActual = 18;
let temperaturaAnterior = 25;

let diferencia = Math.abs(
    temperaturaActual - temperaturaAnterior
);

console.log(diferencia);
```

Resultado:

```text
7
```

Aunque la resta sea negativa, el método devuelve una diferencia positiva.

### 4.2. Math.pow()

El método `Math.pow()` permite elevar un número a una potencia.

Sintaxis:

```javascript
Math.pow(base, exponente);
```

Ejemplos:

```javascript
console.log(Math.pow(2, 3));
console.log(Math.pow(5, 2));
console.log(Math.pow(10, 3));
```

Resultado:

```text
8
25
1000
```

También podemos utilizar el operador `**`, que permite realizar la misma operación:

```javascript
let resultado1 = Math.pow(2, 3);
let resultado2 = 2 ** 3;

console.log(resultado1);
console.log(resultado2);
```

Resultado:

```text
8
8
```

En JavaScript moderno, el operador `**` suele resultar más sencillo y legible.

**Ejemplo práctico: calcular el volumen de un cubo**

La fórmula del volumen de un cubo es:

\[
V=l^3
\]

Donde \(l\) representa la longitud de uno de sus lados.

```javascript
let lado = 4;

let volumen = Math.pow(lado, 3);

console.log(volumen);
```

Resultado:

```text
64
```

### 4.3. Math.sqrt()

El método `Math.sqrt()` devuelve la raíz cuadrada de un número.

Sintaxis:

```javascript
Math.sqrt(numero);
```

Ejemplos:

```javascript
console.log(Math.sqrt(25));
console.log(Math.sqrt(64));
console.log(Math.sqrt(100));
```

Resultado:

```text
5
8
10
```

Si utilizamos un número negativo, el resultado será `NaN`:

```javascript
console.log(Math.sqrt(-25));
```

Resultado:

```text
NaN
```

Esto ocurre porque la raíz cuadrada de un número negativo no tiene un resultado real.

**Ejemplo práctico: calcular el lado de un cuadrado**

Sabemos que el área de un cuadrado se calcula multiplicando el lado por sí mismo:

\[
A=l^2
\]

Si conocemos el área, podemos obtener el lado mediante la raíz cuadrada:

\[
l=\sqrt{A}
\]

```javascript
let area = 144;

let lado = Math.sqrt(area);

console.log(lado);
```

Resultado:

```text
12
```

### 4.4. Math.cbrt()

El método `Math.cbrt()` devuelve la raíz cúbica de un número.

Sintaxis:

```javascript
Math.cbrt(numero);
```

Ejemplos:

```javascript
console.log(Math.cbrt(8));
console.log(Math.cbrt(27));
console.log(Math.cbrt(125));
```

Resultado:

```text
2
3
5
```

A diferencia de la raíz cuadrada, también podemos calcular la raíz cúbica de números negativos:

```javascript
console.log(Math.cbrt(-27));
```

Resultado:

```text
-3
```

### 4.5. Math.sign()

El método `Math.sign()` indica el signo de un número.

Devuelve:

- `1` si el número es positivo.
- `-1` si el número es negativo.
- `0` si el número es cero.
- `NaN` si el valor recibido es `NaN`.

Ejemplos:

```javascript
console.log(Math.sign(25));
console.log(Math.sign(-25));
console.log(Math.sign(0));
```

Resultado:

```text
1
-1
0
```

Este método puede resultar útil para identificar si una variación representa un incremento o una disminución.

Ejemplo:

```javascript
let variacion = -15;

if (Math.sign(variacion) === 1) {
    console.log("La cantidad ha aumentado");
} else if (Math.sign(variacion) === -1) {
    console.log("La cantidad ha disminuido");
} else {
    console.log("No ha habido cambios");
}
```

Resultado:

```text
La cantidad ha disminuido
```

---

## 5. Obtener valores máximos y mínimos

JavaScript permite obtener el mayor o el menor valor de varios números utilizando dos métodos:

- `Math.max()`
- `Math.min()`

### 5.1. Math.max()

Devuelve el mayor de los números proporcionados.

Sintaxis:

```javascript
Math.max(numero1, numero2, numero3, ...);
```

Ejemplo:

```javascript
let mayor = Math.max(10, 25, 8, 40, 15);

console.log(mayor);
```

Resultado:

```text
40
```

Podemos utilizar tantos argumentos como necesitemos:

```javascript
console.log(Math.max(5, 12));
console.log(Math.max(5, 12, 30));
console.log(Math.max(5, 12, 30, 50));
```

Resultado:

```text
12
30
50
```

Si no proporcionamos ningún argumento, devuelve `-Infinity`.

### 5.2. Math.min()

Devuelve el menor de los números proporcionados.

Sintaxis:

```javascript
Math.min(numero1, numero2, numero3, ...);
```

Ejemplo:

```javascript
let menor = Math.min(10, 25, 8, 40, 15);

console.log(menor);
```

Resultado:

```text
8
```

Si no proporcionamos ningún argumento, devuelve `Infinity`.

### 5.3. Ejemplo práctico: calcular la nota máxima y mínima

Imaginemos que tenemos las notas de cinco alumnos:

```javascript
let nota1 = 7.5;
let nota2 = 8.2;
let nota3 = 6.4;
let nota4 = 9.1;
let nota5 = 5.8;

let notaMaxima = Math.max(
    nota1,
    nota2,
    nota3,
    nota4,
    nota5
);

let notaMinima = Math.min(
    nota1,
    nota2,
    nota3,
    nota4,
    nota5
);

console.log("Nota máxima:", notaMaxima);
console.log("Nota mínima:", notaMinima);
```

Resultado:

```text
Nota máxima: 9.1
Nota mínima: 5.8
```

### 5.4. Utilizar Math.max() y Math.min() con arrays

Cuando los números están almacenados en un array, podemos utilizar el operador de propagación `...`.

Este operador permite expandir los elementos del array como argumentos individuales.

Ejemplo:

```javascript
let notas = [7.5, 8.2, 6.4, 9.1, 5.8];

let maxima = Math.max(...notas);
let minima = Math.min(...notas);

console.log("Máxima:", maxima);
console.log("Mínima:", minima);
```

Resultado:

```text
Máxima: 9.1
Mínima: 5.8
```

Observa la diferencia:

```javascript
Math.max(7, 8, 9);
```

Recibe tres argumentos numéricos.

En cambio:

```javascript
Math.max([7, 8, 9]);
```

Recibe un único argumento que es un array y devuelve `NaN`.

Para expandir el array utilizamos:

```javascript
Math.max(...[7, 8, 9]);
```

Resultado:

```text
9
```

---

## 6. Generación de números aleatorios

Uno de los métodos más interesantes de `Math` es `Math.random()`.

Este método genera un número decimal pseudoaleatorio comprendido entre 0 (incluido) y 1 (excluido).

Sintaxis:

```javascript
Math.random();
```

Ejemplo:

```javascript
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
```

Una posible salida sería:

```text
0.734829
0.152736
0.891245
```

Los resultados cambiarán cada vez que ejecutemos el programa.

**Importante:** `Math.random()` no devuelve números enteros y nunca devuelve exactamente 1.

### 6.1. Generar un número entre 0 y 9

Podemos multiplicar el resultado de `Math.random()` por 10:

```javascript
let numero = Math.random() * 10;

console.log(numero);
```

Una posible salida:

```text
7.34829
```

Sin embargo, todavía tenemos un número decimal.

Si queremos obtener un entero entre 0 y 9, podemos utilizar `Math.floor()`:

```javascript
let numero = Math.floor(Math.random() * 10);

console.log(numero);
```

Posibles resultados:

```text
0
1
2
3
4
5
6
7
8
9
```

### 6.2. Generar un número entre dos valores

Imaginemos que queremos generar un número entero entre 1 y 10, ambos incluidos.

Podemos utilizar la siguiente expresión:

```javascript
let numero = Math.floor(Math.random() * 10) + 1;

console.log(numero);
```

El resultado será siempre un entero entre 1 y 10.

### 6.3. Fórmula general para generar enteros aleatorios

Si queremos generar un número entero entre un mínimo y un máximo, ambos incluidos, utilizaremos:

```javascript
Math.floor(
    Math.random() * (maximo - minimo + 1)
) + minimo;
```

La fórmula puede parecer complicada al principio, pero cada parte tiene una función.

Supongamos que queremos obtener un número entre 5 y 15.

```javascript
let minimo = 5;
let maximo = 15;

let numero = Math.floor(
    Math.random() * (maximo - minimo + 1)
) + minimo;

console.log(numero);
```

Vamos a descomponer la expresión:

**Paso 1.** Calculamos la diferencia entre el máximo y el mínimo y sumamos uno.

```javascript
maximo - minimo + 1
```

Resultado:

```text
11
```

Necesitamos once valores posibles: 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 y 15.

**Paso 2.** Multiplicamos el número aleatorio por 11.

```javascript
Math.random() * 11
```

Obtenemos un número decimal comprendido entre 0 y un valor inferior a 11.

**Paso 3.** Aplicamos `Math.floor()`.

```javascript
Math.floor(Math.random() * 11)
```

Obtenemos un entero entre 0 y 10.

**Paso 4.** Sumamos el valor mínimo.

```javascript
Math.floor(Math.random() * 11) + 5
```

El resultado estará comprendido entre 5 y 15.

### 6.4. Generar números decimales dentro de un intervalo

También podemos generar números decimales entre dos valores.

La fórmula general es:

```javascript
Math.random() * (maximo - minimo) + minimo;
```

Ejemplo: generar un número decimal entre 10 y 20.

```javascript
let minimo = 10;
let maximo = 20;

let numero = Math.random() * (maximo - minimo) + minimo;

console.log(numero);
```

Una posible salida:

```text
14.735829
```

En este caso, el valor mínimo está incluido y el máximo no.

### 6.5. Ejemplo práctico: simular un dado

Vamos a desarrollar un pequeño programa que simule el lanzamiento de un dado de seis caras.

```javascript
let dado = Math.floor(Math.random() * 6) + 1;

console.log("Resultado del dado:", dado);
```

Posibles resultados:

```text
Resultado del dado: 1
Resultado del dado: 4
Resultado del dado: 6
```

Cada ejecución puede producir un resultado diferente.

### 6.6. ¿Los números aleatorios son realmente aleatorios?

`Math.random()` genera números pseudoaleatorios. Esto significa que utiliza un algoritmo para producir valores que parecen aleatorios.

Para juegos sencillos, simulaciones y ejercicios, suele ser suficiente.

Sin embargo, no debemos utilizar `Math.random()` para generar contraseñas, tokens de autenticación o valores relacionados con la seguridad.

Para esos casos existe la API `Crypto`, que proporciona mecanismos de generación aleatoria adecuados para aplicaciones de seguridad.

---

## 7. Funciones trigonométricas

El objeto `Math` también incorpora métodos para realizar operaciones trigonométricas.

Aunque no siempre los utilizaremos en aplicaciones web habituales, son importantes cuando trabajamos con gráficos, animaciones, videojuegos, simulaciones o cálculos geométricos.

Los métodos principales son:

| Método | Operación |
|---|---|
| `Math.sin()` | Seno |
| `Math.cos()` | Coseno |
| `Math.tan()` | Tangente |
| `Math.asin()` | Arcoseno |
| `Math.acos()` | Arcocoseno |
| `Math.atan()` | Arcotangente |
| `Math.atan2()` | Arcotangente de dos argumentos |

### 7.1. Los ángulos se expresan en radianes

Una característica muy importante es que los métodos trigonométricos de JavaScript trabajan con radianes, no con grados.

Por ejemplo:

- 180 grados equivalen a \(\pi\) radianes.
- 90 grados equivalen a \(\pi/2\) radianes.
- 360 grados equivalen a \(2\pi\) radianes.

Para convertir grados a radianes utilizamos:

\[
radianes=grados\cdot\frac{\pi}{180}
\]

Ejemplo:

```javascript
let grados = 90;

let radianes = grados * Math.PI / 180;

console.log(radianes);
```

Resultado aproximado:

```text
1.5707963267948966
```

### 7.2. Math.sin()

Devuelve el seno de un ángulo expresado en radianes.

```javascript
let angulo = 90 * Math.PI / 180;

let resultado = Math.sin(angulo);

console.log(resultado);
```

Resultado aproximado:

```text
1
```

### 7.3. Math.cos()

Devuelve el coseno de un ángulo expresado en radianes.

```javascript
let angulo = 60 * Math.PI / 180;

let resultado = Math.cos(angulo);

console.log(resultado);
```

Resultado aproximado:

```text
0.5
```

### 7.4. Math.tan()

Devuelve la tangente de un ángulo expresado en radianes.

```javascript
let angulo = 45 * Math.PI / 180;

let resultado = Math.tan(angulo);

console.log(resultado);
```

Resultado aproximado:

```text
1
```

### 7.5. Convertir radianes a grados

Si tenemos un resultado expresado en radianes y queremos convertirlo a grados, utilizaremos:

\[
grados=radianes\cdot\frac{180}{\pi}
\]

En JavaScript:

```javascript
let radianes = Math.PI;

let grados = radianes * 180 / Math.PI;

console.log(grados);
```

Resultado:

```text
180
```

---

## 8. Otras operaciones matemáticas

Además de los métodos anteriores, `Math` incorpora otras funciones que pueden resultar útiles.

### 8.1. Math.log()

Devuelve el logaritmo natural de un número, es decir, su logaritmo en base \(e\).

```javascript
console.log(Math.log(Math.E));
```

Resultado:

```text
1
```

### 8.2. Math.log10()

Devuelve el logaritmo en base 10.

```javascript
console.log(Math.log10(100));
```

Resultado:

```text
2
```

Porque:

\[
10^2=100
\]

### 8.3. Math.log2()

Devuelve el logaritmo en base 2.

```javascript
console.log(Math.log2(8));
```

Resultado:

```text
3
```

Porque:

\[
2^3=8
\]

### 8.4. Math.hypot()

Calcula la raíz cuadrada de la suma de los cuadrados de sus argumentos.

Por ejemplo:

```javascript
let resultado = Math.hypot(3, 4);

console.log(resultado);
```

Resultado:

```text
5
```

Este método permite calcular la hipotenusa de un triángulo rectángulo cuando conocemos sus dos catetos.

Aplicando el teorema de Pitágoras:

\[
h=\sqrt{a^2+b^2}
\]

También podemos utilizar varios argumentos:

```javascript
console.log(Math.hypot(2, 3, 6));
```

El resultado será la raíz cuadrada de:

\[
2^2+3^2+6^2=49
\]

Resultado:

```text
7
```

---

## 9. Ejemplos guiados paso a paso

En este apartado vamos a combinar diferentes métodos de `Math` para resolver pequeños problemas.

### Ejemplo 1. Calcular el área y el perímetro de un círculo

**Enunciado**

Desarrolla un programa que almacene el radio de un círculo y calcule su área y su perímetro.

Las fórmulas son:

\[
A=\pi\cdot r^2
\]

\[
P=2\cdot\pi\cdot r
\]

**Código:**

```javascript
let radio = 8;

// Calculamos el área.
let area = Math.PI * Math.pow(radio, 2);

// Calculamos el perímetro.
let perimetro = 2 * Math.PI * radio;

// Mostramos los resultados.
console.log("Radio:", radio);
console.log("Área:", area);
console.log("Perímetro:", perimetro);
```

**Resultado aproximado:**

```text
Radio: 8
Área: 201.06192982974676
Perímetro: 50.26548245743669
```

**Explicación:**

1. Declaramos una variable para almacenar el radio.
2. Utilizamos `Math.PI` para obtener el valor de pi.
3. Calculamos el área elevando el radio al cuadrado.
4. Calculamos el perímetro multiplicando el radio por dos y por pi.
5. Mostramos los resultados.

### Ejemplo 2. Calcular cuántas cajas necesitamos

**Enunciado**

Una empresa tiene que transportar 237 productos. Cada caja tiene capacidad para 24 productos.

Queremos calcular cuántas cajas necesitamos para transportar todos los productos.

**Código:**

```javascript
let productos = 237;
let capacidadCaja = 24;

let cajas = Math.ceil(productos / capacidadCaja);

console.log("Productos:", productos);
console.log("Capacidad por caja:", capacidadCaja);
console.log("Cajas necesarias:", cajas);
```

**Resultado:**

```text
Productos: 237
Capacidad por caja: 24
Cajas necesarias: 10
```

**Explicación:**

Si dividimos 237 entre 24 obtenemos:

\[
237/24=9.875
\]

No podemos utilizar 9,875 cajas. Necesitamos diez cajas completas o parciales.

Por eso utilizamos `Math.ceil()`.

### Ejemplo 3. Calcular una nota final redondeada

**Enunciado**

Un alumno obtiene tres calificaciones:

- Examen: 7.85.
- Prácticas: 8.25.
- Participación: 6.75.

Queremos calcular la media y mostrarla redondeada a dos decimales.

**Código:**

```javascript
let examen = 7.85;
let practicas = 8.25;
let participacion = 6.75;

let media = (examen + practicas + participacion) / 3;

// Redondeamos a dos decimales.
let mediaRedondeada = Math.round(media * 100) / 100;

console.log("Media:", media);
console.log("Media redondeada:", mediaRedondeada);
```

**Resultado aproximado:**

```text
Media: 7.616666666666666
Media redondeada: 7.62
```

**Explicación:**

1. Sumamos las tres calificaciones.
2. Dividimos el resultado entre tres.
3. Multiplicamos la media por 100.
4. Aplicamos `Math.round()` para obtener un entero.
5. Dividimos entre 100 para recuperar los dos decimales.

Este procedimiento permite redondear numéricamente a dos posiciones decimales en este caso.

Debemos recordar que JavaScript utiliza números binarios de coma flotante, por lo que algunos decimales no pueden representarse exactamente. En aplicaciones económicas o de facturación es necesario diseñar cuidadosamente el tratamiento de importes y redondeos.

### Ejemplo 4. Juego de adivinar un número

**Enunciado**

Queremos generar un número aleatorio entre 1 y 20 y comprobar si una variable contiene ese mismo número.

**Código:**

```javascript
let numeroSecreto = Math.floor(Math.random() * 20) + 1;

let numeroUsuario = 12;

console.log("Número secreto:", numeroSecreto);
console.log("Número introducido:", numeroUsuario);

if (numeroUsuario === numeroSecreto) {
    console.log("¡Has acertado!");
} else {
    console.log("No has acertado.");
}
```

**Explicación:**

1. Generamos un número entero entre 1 y 20.
2. Almacenamos el número en `numeroSecreto`.
3. Declaramos el número que introduce el usuario.
4. Comparamos ambos valores mediante `===`.
5. Mostramos el mensaje correspondiente.

En este ejemplo el número del usuario está escrito directamente en el código. Más adelante podremos utilizar formularios HTML para recoger datos introducidos por el usuario.

---

## 10. Ejercicios prácticos

Los siguientes ejercicios están organizados en tres niveles de dificultad.

Debes realizar los programas utilizando JavaScript y mostrar los resultados mediante `console.log()`.

Guarda cada ejercicio en un archivo independiente o utiliza una organización equivalente en tu entorno de trabajo.

### Nivel 1. Fundamentos

#### E01. Redondeo de números

Declara una variable llamada `numero` con el valor `8.7`.

Muestra por consola los resultados de aplicar:

1. `Math.round()`.
2. `Math.ceil()`.
3. `Math.floor()`.
4. `Math.trunc()`.

Repite el ejercicio utilizando el valor `-8.7`.

**Objetivos:**

- Comprender las diferencias entre los cuatro métodos.
- Identificar el comportamiento con números positivos y negativos.

#### E02. Valor absoluto

Declara dos variables:

```javascript
let temperaturaActual = 12;
let temperaturaAnterior = 19;
```

Calcula la diferencia entre ambas temperaturas.

Muestra por consola:

- La diferencia obtenida mediante la resta.
- El valor absoluto de esa diferencia.

Repite el ejercicio intercambiando los valores de las variables.

**Objetivos:**

- Utilizar `Math.abs()`.
- Comprender la diferencia entre una resta y una distancia absoluta.

#### E03. Potencias y raíces

Desarrolla un programa que realice las siguientes operaciones:

1. Calcule \(2^8\) utilizando `Math.pow()`.
2. Calcule \(5^3\) utilizando el operador `**`.
3. Calcule la raíz cuadrada de 225.
4. Calcule la raíz cúbica de 216.

Muestra todos los resultados por consola.

**Objetivos:**

- Utilizar `Math.pow()`.
- Utilizar `Math.sqrt()`.
- Utilizar `Math.cbrt()`.
- Diferenciar las operaciones matemáticas.

#### E04. Valores máximos y mínimos

Declara cinco variables con diferentes valores numéricos.

Por ejemplo:

```javascript
let numero1 = 18;
let numero2 = 45;
let numero3 = 7;
let numero4 = 32;
let numero5 = 21;
```

Utiliza `Math.max()` y `Math.min()` para mostrar:

- El valor máximo.
- El valor mínimo.

**Objetivos:**

- Utilizar `Math.max()`.
- Utilizar `Math.min()`.
- Trabajar con varios argumentos.

### Nivel 2. Aplicación

#### E05. Cálculo de una circunferencia

Desarrolla un programa que calcule el área y la longitud de una circunferencia.

El radio deberá almacenarse en una variable.

Utiliza las siguientes fórmulas:

\[
A=\pi\cdot r^2
\]

\[
L=2\cdot\pi\cdot r
\]

Muestra:

- El radio utilizado.
- El área calculada.
- La longitud de la circunferencia.

Redondea ambos resultados a dos decimales.

**Objetivos:**

- Utilizar `Math.PI`.
- Realizar operaciones matemáticas combinadas.
- Aplicar redondeos.

#### E06. Distribución de trabajadores

Una empresa necesita distribuir 157 trabajadores en salas con una capacidad máxima de 18 personas.

Desarrolla un programa que calcule:

1. El número de salas necesarias.
2. El número de salas que estarán completamente ocupadas.
3. El número de trabajadores que quedarán en la última sala.

Utiliza `Math.ceil()` y `Math.floor()` cuando corresponda.

**Objetivos:**

- Resolver un problema práctico mediante operaciones matemáticas.
- Diferenciar el redondeo hacia arriba y hacia abajo.
- Utilizar operadores aritméticos.

#### E07. Generador de números aleatorios

Desarrolla un programa que genere:

1. Un número entero entre 1 y 100.
2. Un número entero entre 50 y 75.
3. Un número decimal entre 10 y 20.

Muestra los tres resultados por consola.

**Objetivos:**

- Utilizar `Math.random()`.
- Combinar `Math.random()` con `Math.floor()`.
- Generar valores dentro de intervalos.

#### E08. Estadísticas de calificaciones

Una clase tiene las siguientes calificaciones:

```javascript
let notas = [6.5, 8.2, 4.7, 9.1, 7.8, 5.5, 6.9];
```

Desarrolla un programa que calcule:

1. La nota máxima.
2. La nota mínima.
3. La diferencia entre ambas.
4. El valor absoluto de esa diferencia.
5. La media aritmética de las calificaciones.

Para obtener el máximo y el mínimo utiliza `Math.max()` y `Math.min()` junto con el operador de propagación `...`.

**Objetivos:**

- Combinar `Math` con arrays.
- Utilizar el operador de propagación.
- Realizar operaciones matemáticas con varios datos.

### Nivel 3. Razonamiento y resolución de problemas

#### E09. Simulador de lanzamiento de dados

Desarrolla un programa que simule el lanzamiento de dos dados de seis caras.

El programa deberá:

1. Generar un número aleatorio entre 1 y 6 para cada dado.
2. Mostrar el resultado de cada dado.
3. Calcular la suma de ambos resultados.
4. Indicar si la suma es par o impar.
5. Indicar si se ha obtenido una pareja de valores iguales.

**Ejemplo de salida:**

```text
Dado 1: 4
Dado 2: 4
Suma: 8
La suma es par.
¡Has obtenido una pareja!
```

Los valores anteriores son un ejemplo. Cada ejecución debe poder producir resultados diferentes.

**Objetivos:**

- Utilizar `Math.random()`.
- Aplicar `Math.floor()`.
- Combinar operaciones matemáticas con estructuras condicionales.
- Resolver un pequeño problema de simulación.

#### E10. Calculadora de distancias

Desarrolla un programa que calcule la distancia entre dos puntos de un plano cartesiano.

Cada punto estará definido mediante dos coordenadas:

- Punto A: `(x1, y1)`.
- Punto B: `(x2, y2)`.

La fórmula para calcular la distancia es:

\[
d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}
\]

Utiliza:

- `Math.sqrt()`.
- `Math.pow()` o el operador `**`.

Muestra las coordenadas de ambos puntos y la distancia calculada.

**Ejemplo:**

```javascript
let x1 = 2;
let y1 = 3;

let x2 = 5;
let y2 = 7;
```

El resultado debe ser:

```text
Distancia entre los puntos: 5
```

**Objetivos:**

- Aplicar una fórmula matemática en JavaScript.
- Utilizar potencias y raíces cuadradas.
- Combinar diferentes métodos de `Math`.

---

## 11. Reto integrador: simulador de una máquina expendedora

### 11.1. Planteamiento

Una empresa quiere desarrollar un pequeño simulador para una máquina expendedora.

La máquina dispone de diferentes productos y necesita calcular importes, aplicar descuentos y determinar algunos resultados aleatorios para una promoción.

Debes desarrollar un programa JavaScript que permita trabajar con los siguientes datos:

| Producto | Precio |
|---|---:|
| Agua | 1.20 € |
| Refresco | 1.75 € |
| Zumo | 2.10 € |
| Bocadillo | 3.50 € |
| Snack | 1.40 € |

Para simplificar el ejercicio, almacenaremos los precios en variables independientes.

### 11.2. Requisitos funcionales

El programa deberá cumplir los siguientes requisitos:

**Requisito 1. Selección de productos**

Declara cinco variables con los precios de los productos.

Selecciona tres productos y almacena sus precios en otras variables.

**Requisito 2. Calcular el importe**

Calcula el importe total de los tres productos.

**Requisito 3. Aplicar un descuento**

La máquina aplica un descuento del 10 % cuando el importe total es igual o superior a 5 €.

Si se cumple la condición, calcula el importe del descuento y réstalo al total.

Si no se cumple, el importe del descuento será cero.

**Requisito 4. Redondear el importe**

Muestra el importe final con dos decimales utilizando una operación de `Math` que permita redondear a dos posiciones.

**Requisito 5. Generar una promoción**

La máquina debe generar un número aleatorio entre 1 y 100.

Si el número es igual o inferior a 20, el cliente obtiene una promoción especial.

En caso contrario, no obtiene ninguna promoción.

**Requisito 6. Mostrar el resumen**

Muestra por consola:

- Precio de cada producto.
- Importe total.
- Descuento aplicado.
- Importe final.
- Número aleatorio generado.
- Resultado de la promoción.

### 11.3. Ejemplo de salida

Una posible ejecución podría producir:

```text
================================
       MÁQUINA EXPENDEDORA
================================

Producto 1: 1.20 €
Producto 2: 3.50 €
Producto 3: 1.75 €

Importe total: 6.45 €
Descuento: 0.65 €
Importe final: 5.81 €

Número promocional: 14

¡ENHORABUENA!
Has conseguido una promoción especial.
================================
```

Los resultados pueden variar según los productos seleccionados y el número aleatorio generado.

**Importante:** el valor mostrado es ilustrativo. En JavaScript, los números decimales utilizan representación binaria de coma flotante. Para este ejercicio utilizaremos las operaciones de `Math` indicadas, pero en una aplicación real de facturación habría que definir una estrategia de cálculo monetario y redondeo más rigurosa.

### 11.4. Condiciones técnicas

El programa deberá:

- Utilizar variables con nombres descriptivos.
- Utilizar correctamente el objeto `Math`.
- Incluir al menos una operación de redondeo.
- Utilizar `Math.random()` para generar la promoción.
- Utilizar una estructura condicional.
- Mostrar los resultados de forma ordenada.
- Incluir comentarios explicativos en las operaciones más importantes.

### 11.5. Ampliaciones opcionales

Cuando hayas terminado el reto principal, puedes añadir alguna de estas mejoras:

1. Generar automáticamente una cantidad aleatoria de productos.
2. Calcular el ahorro total del cliente.
3. Generar un descuento aleatorio entre el 5 % y el 15 %.
4. Calcular el importe máximo y mínimo de los productos seleccionados.
5. Simular varias compras consecutivas.

---

## 12. Errores habituales al trabajar con Math

Es importante conocer los errores más frecuentes para evitar resultados incorrectos.

### Error 1. Intentar crear una instancia de Math

Código incorrecto:

```javascript
let operaciones = new Math();
```

¿Por qué está mal?

Porque `Math` no es un constructor.

Forma correcta:

```javascript
let resultado = Math.sqrt(16);
```

### Error 2. Confundir Math.round() con Math.floor()

Código:

```javascript
console.log(Math.round(4.8));
console.log(Math.floor(4.8));
```

Resultados:

```text
5
4
```

No realizan la misma operación.

- `round()` aproxima al entero más cercano.
- `floor()` obtiene el entero inferior.

### Error 3. Olvidar que Math.random() no incluye el 1

Código:

```javascript
let numero = Math.random();
```

El resultado siempre será mayor o igual que cero y menor que uno.

Si queremos obtener un entero entre 1 y 10, debemos utilizar:

```javascript
let numero = Math.floor(Math.random() * 10) + 1;
```

### Error 4. Utilizar incorrectamente Math.max() con un array

Código incorrecto:

```javascript
let numeros = [5, 10, 15];

console.log(Math.max(numeros));
```

Resultado:

```text
NaN
```

¿Por qué ocurre?

Porque `Math.max()` espera recibir números como argumentos individuales.

Solución:

```javascript
console.log(Math.max(...numeros));
```

Resultado:

```text
15
```

### Error 5. Pensar que Math.sqrt() acepta números negativos

Código:

```javascript
console.log(Math.sqrt(-16));
```

Resultado:

```text
NaN
```

La raíz cuadrada de un número negativo no tiene resultado dentro de los números reales.

### Error 6. Utilizar grados directamente en las funciones trigonométricas

Código incorrecto para calcular el seno de 90 grados:

```javascript
console.log(Math.sin(90));
```

Este código calcula el seno de 90 radianes, no de 90 grados.

Solución:

```javascript
let angulo = 90 * Math.PI / 180;

console.log(Math.sin(angulo));
```

Resultado aproximado:

```text
1
```

### Error 7. Pensar que Math.round() redondea siempre hacia arriba

Código:

```javascript
console.log(Math.round(-4.5));
```

Resultado:

```text
-4
```

No debemos confundir el redondeo con `Math.ceil()`.

### Error 8. Utilizar Math.random() para cuestiones de seguridad

`Math.random()` no es adecuado para generar contraseñas, claves de seguridad o tokens de autenticación.

Para estos casos debemos utilizar mecanismos criptográficamente seguros, como la API `Crypto`.

### Error 9. Confundir Math.pow() con el operador de multiplicación

Código:

```javascript
console.log(Math.pow(3, 2));
console.log(3 * 2);
console.log(3 ** 2);
```

Resultado:

```text
9
6
9
```

- `Math.pow(3, 2)` calcula 3 elevado a 2.
- `3 * 2` multiplica 3 por 2.
- `3 ** 2` también calcula 3 elevado a 2.

---

## 13. Buenas prácticas

Cuando trabajemos con el objeto `Math`, debemos seguir una serie de recomendaciones.

### 13.1. Utilizar el método adecuado

No todos los métodos de redondeo son equivalentes.

Antes de utilizar uno, debemos preguntarnos qué resultado necesitamos.

### 13.2. Utilizar constantes incorporadas

Es preferible utilizar:

```javascript
Math.PI
```

En lugar de escribir manualmente el valor de pi.

### 13.3. Utilizar nombres descriptivos

Es preferible:

```javascript
let radio = 5;
let areaCirculo = Math.PI * radio ** 2;
```

En lugar de:

```javascript
let r = 5;
let a = Math.PI * r ** 2;
```

Los nombres descriptivos facilitan la comprensión y el mantenimiento del código.

### 13.4. Controlar los valores de entrada

Algunas operaciones matemáticas pueden devolver resultados especiales como `NaN` o `Infinity`.

Por ejemplo:

```javascript
let resultado = Math.sqrt(-25);

console.log(resultado);
```

Antes de utilizar un resultado en cálculos posteriores, debemos comprobar que es válido cuando la aplicación lo requiera.

### 13.5. No utilizar redondeos innecesarios

No debemos redondear todos los resultados intermedios de una operación.

Es preferible conservar la precisión durante los cálculos y aplicar el redondeo al mostrar o presentar el resultado final, salvo que las reglas del problema indiquen lo contrario.

### 13.6. Tener cuidado con los importes económicos

El tipo `number` utiliza una representación binaria de coma flotante.

Esto puede producir resultados inesperados:

```javascript
console.log(0.1 + 0.2);
```

Resultado:

```text
0.30000000000000004
```

No significa que JavaScript esté roto. Es una consecuencia de cómo se representan determinados números decimales en binario.

En aplicaciones económicas reales debemos controlar cuidadosamente la precisión y el redondeo.

---

## 14. Resumen de los principales métodos de Math

| Método o propiedad | Función |
|---|---|
| `Math.PI` | Devuelve el valor de pi |
| `Math.E` | Devuelve el número de Euler |
| `Math.round()` | Redondea al entero más cercano |
| `Math.ceil()` | Redondea hacia arriba |
| `Math.floor()` | Redondea hacia abajo |
| `Math.trunc()` | Elimina la parte decimal |
| `Math.abs()` | Devuelve el valor absoluto |
| `Math.pow()` | Calcula una potencia |
| `Math.sqrt()` | Calcula una raíz cuadrada |
| `Math.cbrt()` | Calcula una raíz cúbica |
| `Math.sign()` | Devuelve el signo de un número |
| `Math.max()` | Obtiene el valor máximo |
| `Math.min()` | Obtiene el valor mínimo |
| `Math.random()` | Genera un número pseudoaleatorio |
| `Math.sin()` | Calcula el seno |
| `Math.cos()` | Calcula el coseno |
| `Math.tan()` | Calcula la tangente |
| `Math.log()` | Calcula el logaritmo natural |
| `Math.log10()` | Calcula el logaritmo en base 10 |
| `Math.log2()` | Calcula el logaritmo en base 2 |
| `Math.hypot()` | Calcula la raíz de la suma de cuadrados |

---

## 15. Autoevaluación

Comprueba si has comprendido los conceptos estudiados.

Responde a las siguientes preguntas sin consultar previamente los ejemplos.

### P01. Objeto Math

¿Qué afirmación describe correctamente el objeto `Math`?

A. Es un objeto que debe instanciarse mediante `new Math()`.

B. Es un objeto incorporado que proporciona propiedades y métodos matemáticos.

C. Es una librería externa que debemos instalar.

D. Es un tipo de dato numérico.

### P02. Número pi

¿Qué propiedad permite acceder al valor de pi?

A. `Math.PI`

B. `Math.Pi`

C. `Math.pi()`

D. `Math.P`

### P03. Redondeo

¿Qué devuelve la siguiente expresión?

```javascript
Math.round(7.8);
```

A. 7

B. 7.8

C. 8

D. 9

### P04. Redondeo hacia arriba

¿Qué método debemos utilizar para redondear hacia arriba?

A. `Math.floor()`

B. `Math.ceil()`

C. `Math.trunc()`

D. `Math.round()`

### P05. Truncamiento

¿Qué devuelve la siguiente expresión?

```javascript
Math.trunc(8.95);
```

A. 8

B. 9

C. 8.95

D. 0

### P06. Valores negativos

¿Qué devuelve la siguiente expresión?

```javascript
Math.floor(-3.2);
```

A. -3

B. -4

C. 3

D. -3.2

### P07. Valor absoluto

¿Qué método permite obtener el valor absoluto de un número?

A. `Math.round()`

B. `Math.abs()`

C. `Math.sign()`

D. `Math.floor()`

### P08. Raíz cuadrada

¿Qué devuelve la siguiente expresión?

```javascript
Math.sqrt(144);
```

A. 14

B. 72

C. 12

D. 24

### P09. Potencias

¿Qué resultado devuelve?

```javascript
Math.pow(2, 5);
```

A. 10

B. 25

C. 32

D. 64

### P10. Valor máximo

¿Qué devuelve la siguiente expresión?

```javascript
Math.max(12, 45, 8, 31);
```

A. 8

B. 12

C. 31

D. 45

### P11. Números aleatorios

¿Qué valores puede devolver `Math.random()`?

A. Números enteros entre 0 y 10.

B. Números decimales mayores o iguales que 0 y menores que 1.

C. Números decimales entre 0 y 1, ambos incluidos.

D. Únicamente números enteros positivos.

### P12. Aleatorios enteros

¿Qué expresión permite generar un número entero entre 1 y 6, ambos incluidos?

A. `Math.random() * 6`

B. `Math.floor(Math.random() * 6) + 1`

C. `Math.ceil(Math.random() * 6) + 1`

D. `Math.round(Math.random() * 6)`

### P13. Arrays

¿Qué operador permite pasar los elementos de un array como argumentos individuales a `Math.max()`?

A. `&&`

B. `...`

C. `??`

D. `++`

### P14. Trigonometría

¿Qué unidad utilizan los métodos trigonométricos de `Math`?

A. Grados.

B. Porcentajes.

C. Radianes.

D. Revoluciones por minuto.

### P15. Seguridad

¿Por qué no debemos utilizar `Math.random()` para generar contraseñas seguras?

A. Porque siempre devuelve el mismo número.

B. Porque solamente genera números enteros.

C. Porque no está diseñado para proporcionar aleatoriedad criptográficamente segura.

D. Porque no funciona en navegadores modernos.

---

## 16. Checklist de aprendizaje

Antes de finalizar esta sesión, comprueba que eres capaz de realizar las siguientes tareas.

- [ ] Sé explicar qué es el objeto `Math`.
- [ ] Sé utilizar sus propiedades matemáticas.
- [ ] Diferencio entre `Math.round()`, `Math.ceil()` y `Math.floor()`.
- [ ] Comprendo el funcionamiento de `Math.trunc()`.
- [ ] Sé utilizar `Math.abs()`.
- [ ] Sé calcular potencias y raíces.
- [ ] Sé obtener valores máximos y mínimos.
- [ ] Sé utilizar `Math.random()`.
- [ ] Sé generar números aleatorios dentro de intervalos.
- [ ] Sé combinar métodos de `Math` con estructuras condicionales.
- [ ] Comprendo que las funciones trigonométricas utilizan radianes.
- [ ] Sé identificar los errores más habituales al trabajar con `Math`.

---

## 17. Conclusión

El objeto `Math` es una herramienta fundamental de JavaScript que permite realizar operaciones matemáticas sin necesidad de instalar librerías adicionales.

Durante esta sesión hemos aprendido a utilizar sus principales propiedades y métodos, desde operaciones sencillas como redondear números hasta generar valores aleatorios o calcular distancias.

Estos conocimientos nos permitirán desarrollar programas más completos y resolver problemas que requieren cálculos matemáticos.

En las siguientes sesiones continuaremos trabajando con otros objetos predefinidos de JavaScript, especialmente `Date`, que nos permitirá gestionar fechas y horas dentro de nuestras aplicaciones web.