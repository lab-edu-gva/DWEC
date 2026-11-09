---
asignatura: DWEC
unidad: UD3
sesion: S04
duracion: 55 minutos
tipo: material-alumnado
estado: preparado
ra: RA3
publicar: true
---
# S04 — Arrays: creación, acceso y modificación

## ## 1. Introducción

En programación es muy habitual tener que trabajar con varios datos relacionados entre sí.

Imaginemos que queremos desarrollar una aplicación que almacene las notas de los alumnos de una clase.

Podríamos declarar una variable para cada nota:

```javascript
let nota1 = 7.5;
let nota2 = 8;
let nota3 = 6.5;
let nota4 = 9;
let nota5 = 5.5;
```

Este planteamiento funciona cuando tenemos pocos datos, pero resulta poco práctico cuando necesitamos almacenar decenas, cientos o miles de valores.

Además, ¿qué ocurriría si quisiéramos calcular la media de todas las notas? ¿Y si necesitáramos mostrar todas las notas por pantalla?

Tendríamos que escribir una gran cantidad de instrucciones.

JavaScript ofrece una estructura denominada **array**, que permite almacenar varios valores dentro de una única variable.

Por ejemplo:

```javascript
let notas = [7.5, 8, 6.5, 9, 5.5];

console.log(notas);
```

Resultado:

```text
[7.5, 8, 6.5, 9, 5.5]
```

Ahora tenemos todas las notas agrupadas dentro de una misma estructura.

Esto nos permite acceder a cada elemento, modificarlo, recorrer todos los valores y realizar operaciones sobre el conjunto de datos.

Los arrays son fundamentales en el desarrollo web. Los utilizaremos constantemente para trabajar con:

- Listas de usuarios.
- Productos de una tienda online.
- Notas de alumnos.
- Resultados de búsquedas.
- Reservas.
- Mensajes.
- Datos recibidos desde una API.
- Elementos que debemos mostrar dinámicamente en una página web.

### 1.1. ¿Qué es un array?

Un array es una estructura de datos que permite almacenar una colección ordenada de elementos.

Cada elemento ocupa una posición dentro del array, denominada **índice**.

Los índices comienzan siempre en cero.

Ejemplo:

```javascript
let frutas = ["Manzana", "Pera", "Naranja", "Plátano"];
```

Podemos representar su contenido de la siguiente manera:

| Índice | Elemento |
|---:|---|
| 0 | Manzana |
| 1 | Pera |
| 2 | Naranja |
| 3 | Plátano |

El primer elemento ocupa la posición 0, el segundo la posición 1 y así sucesivamente.

Esta numeración es una característica fundamental de los arrays en JavaScript.

### 1.2. Objetivos de aprendizaje

Al finalizar esta sesión deberás ser capaz de:

- Comprender qué es un array y para qué se utiliza.
- Crear arrays de diferentes formas.
- Acceder a sus elementos mediante índices.
- Modificar elementos existentes.
- Conocer la propiedad `length`.
- Añadir y eliminar elementos mediante asignaciones e instrucciones básicas.
- Recorrer arrays utilizando diferentes estructuras repetitivas.
- Comprender los arrays multidimensionales.
- Identificar los errores habituales al trabajar con índices.
- Aplicar arrays a problemas habituales de programación.

---

## 2. Crear arrays en JavaScript

JavaScript permite crear arrays de diferentes formas.

La forma más habitual y recomendable es utilizar los corchetes `[]`.

### 2.1. Crear un array vacío

Podemos crear un array sin elementos:

```javascript
let alumnos = [];

console.log(alumnos);
```

Resultado:

```text
[]
```

El array existe, pero todavía no contiene ningún elemento.

Podemos utilizarlo posteriormente para almacenar información.

### 2.2. Crear un array con elementos

Podemos declarar un array e introducir directamente sus elementos.

```javascript
let colores = ["Rojo", "Verde", "Azul"];

console.log(colores);
```

Resultado:

```text
["Rojo", "Verde", "Azul"]
```

Los elementos se separan mediante comas.

Cada elemento ocupa una posición determinada.

### 2.3. Arrays con diferentes tipos de datos

JavaScript permite almacenar diferentes tipos de datos dentro de un mismo array.

Por ejemplo:

```javascript
let datos = [
    "Luis",
    35,
    true,
    7.5
];

console.log(datos);
```

En este array encontramos:

| Índice | Valor | Tipo |
|---:|---|---|
| 0 | "Luis" | String |
| 1 | 35 | Number |
| 2 | true | Boolean |
| 3 | 7.5 | Number |

Aunque es posible mezclar tipos de datos, normalmente es recomendable que todos los elementos tengan una finalidad y una estructura coherentes.

Por ejemplo, un array de notas debería contener notas, mientras que un array de nombres debería contener nombres.

### 2.4. Crear un array utilizando el constructor Array

También podemos crear arrays utilizando el constructor `Array`.

```javascript
let numeros = new Array(10, 20, 30);

console.log(numeros);
```

Resultado:

```text
[10, 20, 30]
```

Sin embargo, debemos tener cuidado con una particularidad.

Si proporcionamos un único argumento numérico, JavaScript lo interpreta como la longitud del array.

```javascript
let numeros = new Array(5);

console.log(numeros);
console.log(numeros.length);
```

Resultado:

```text
[ <5 empty items> ]
5
```

No se ha creado un array que contenga el número 5, sino un array con una longitud de cinco posiciones vacías.

Si queremos almacenar el número 5 como único elemento, podemos utilizar:

```javascript
let numeros = [5];
```

Por claridad, utilizaremos preferentemente la notación con corchetes.

### 2.5. Declarar un array mediante const

También podemos declarar arrays utilizando `const`.

```javascript
const alumnos = ["Ana", "Pedro", "María"];

console.log(alumnos);
```

Una cuestión importante: declarar un array con `const` impide reasignar la variable a otro array, pero no impide modificar su contenido.

Por ejemplo:

```javascript
const alumnos = ["Ana", "Pedro", "María"];

alumnos[0] = "Carlos";

console.log(alumnos);
```

Resultado:

```text
["Carlos", "Pedro", "María"]
```

Sin embargo, esto produciría un error:

```javascript
const alumnos = ["Ana", "Pedro", "María"];

alumnos = ["Luis", "Marta"];
```

La variable `alumnos` no puede apuntar a otro array porque ha sido declarada con `const`.

**Idea importante:** `const` protege la referencia de la variable, no convierte el contenido del array en inmutable.

---

## 3. Acceder a los elementos de un array

Una vez creado un array, necesitamos poder consultar sus elementos.

Para ello utilizamos el índice correspondiente entre corchetes.

### 3.1. Acceder a un elemento

Ejemplo:

```javascript
let frutas = ["Manzana", "Pera", "Naranja"];

console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
```

Resultado:

```text
Manzana
Pera
Naranja
```

Recuerda que los índices empiezan en cero.

Por tanto:

- `frutas[0]` accede al primer elemento.
- `frutas[1]` accede al segundo elemento.
- `frutas[2]` accede al tercer elemento.

### 3.2. Acceder al último elemento

Una de las operaciones más habituales consiste en obtener el último elemento del array.

Podemos utilizar la propiedad `length`.

```javascript
let frutas = ["Manzana", "Pera", "Naranja", "Plátano"];

let ultimo = frutas[frutas.length - 1];

console.log(ultimo);
```

Resultado:

```text
Plátano
```

¿Por qué restamos uno?

Porque `length` devuelve el número total de elementos, pero los índices comienzan en cero.

En este caso:

```javascript
frutas.length
```

Devuelve:

```text
4
```

Sin embargo, el último índice es el 3.

Por eso utilizamos:

```javascript
frutas[4 - 1]
```

### 3.3. Acceder a una posición inexistente

¿Qué ocurre si intentamos acceder a un índice que no existe?

```javascript
let frutas = ["Manzana", "Pera", "Naranja"];

console.log(frutas[5]);
```

Resultado:

```text
undefined
```

JavaScript devuelve `undefined` porque no existe ningún elemento en esa posición.

Esto no genera necesariamente un error, pero puede provocar problemas si utilizamos ese valor sin comprobarlo.

### 3.4. Acceder a índices negativos

Los arrays tradicionales de JavaScript no utilizan los índices negativos para acceder a sus elementos desde el final.

```javascript
let frutas = ["Manzana", "Pera", "Naranja"];

console.log(frutas[-1]);
```

Resultado:

```text
undefined
```

Si queremos acceder al último elemento, debemos utilizar:

```javascript
console.log(frutas[frutas.length - 1]);
```

Existe también el método `at()`, que permite utilizar índices negativos:

```javascript
console.log(frutas.at(-1));
```

Resultado:

```text
Naranja
```

El método `at()` es una alternativa cómoda para acceder a posiciones desde el final del array.

---

## 4. Modificar elementos de un array

Los arrays son estructuras mutables, lo que significa que podemos modificar su contenido después de crearlos.

Para modificar un elemento, basta con asignar un nuevo valor a su índice.

### 4.1. Modificar un elemento existente

Ejemplo:

```javascript
let frutas = ["Manzana", "Pera", "Naranja"];

frutas[1] = "Sandía";

console.log(frutas);
```

Resultado:

```text
["Manzana", "Sandía", "Naranja"]
```

Hemos sustituido el elemento que ocupaba la posición 1.

El resto de elementos permanece igual.

### 4.2. Modificar varios elementos

Podemos realizar tantas modificaciones como necesitemos.

```javascript
let notas = [5, 6, 7, 8];

notas[0] = 9;
notas[2] = 10;

console.log(notas);
```

Resultado:

```text
[9, 6, 10, 8]
```

### 4.3. Asignar un valor a una posición posterior

JavaScript permite asignar un valor a una posición que todavía no existe.

```javascript
let numeros = [10, 20, 30];

numeros[5] = 60;

console.log(numeros);
console.log(numeros.length);
```

El array tendrá una longitud de 6.

Las posiciones intermedias que no se han rellenado serán huecos.

Conceptualmente:

| Índice | Contenido |
|---:|---|
| 0 | 10 |
| 1 | 20 |
| 2 | 30 |
| 3 | Hueco |
| 4 | Hueco |
| 5 | 60 |

Esto puede producir comportamientos poco intuitivos al recorrer el array.

Por norma general, debemos evitar crear huecos accidentalmente.

---

## 5. La propiedad length

La propiedad `length` permite conocer el número de posiciones que tiene un array.

Es una de las propiedades más utilizadas cuando trabajamos con colecciones.

### 5.1. Consultar la longitud

Ejemplo:

```javascript
let alumnos = ["Ana", "Pedro", "María", "Carlos"];

console.log(alumnos.length);
```

Resultado:

```text
4
```

El array contiene cuatro elementos.

### 5.2. Utilizar length para recorrer un array

La propiedad `length` resulta especialmente útil cuando queremos recorrer todos los elementos de un array.

```javascript
let frutas = ["Manzana", "Pera", "Naranja"];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
```

Resultado:

```text
Manzana
Pera
Naranja
```

El bucle comienza en cero y termina cuando el índice alcanza la longitud del array.

La condición:

```javascript
i < frutas.length
```

Evita intentar acceder a una posición inexistente al finalizar el recorrido.

### 5.3. Modificar length

Una particularidad de los arrays es que podemos modificar directamente su propiedad `length`.

Por ejemplo, podemos reducir su longitud:

```javascript
let numeros = [10, 20, 30, 40, 50];

numeros.length = 3;

console.log(numeros);
```

Resultado:

```text
[10, 20, 30]
```

Los elementos que se encontraban fuera de la nueva longitud se eliminan.

También podemos aumentar la longitud:

```javascript
let numeros = [10, 20, 30];

numeros.length = 5;

console.log(numeros);
```

Se crearán dos posiciones vacías al final.

Esta posibilidad existe, pero normalmente no necesitamos modificar `length` directamente para gestionar los elementos de un array.

---

## 6. Añadir y eliminar elementos

JavaScript proporciona diferentes métodos para añadir y eliminar elementos de un array.

En esta sesión estudiaremos las operaciones básicas necesarias para gestionar una colección.

### 6.1. Añadir elementos mediante push()

El método `push()` añade uno o varios elementos al final del array.

Sintaxis:

```javascript
array.push(elemento);
```

Ejemplo:

```javascript
let frutas = ["Manzana", "Pera"];

frutas.push("Naranja");

console.log(frutas);
```

Resultado:

```text
["Manzana", "Pera", "Naranja"]
```

Podemos añadir varios elementos en una misma operación:

```javascript
let frutas = ["Manzana", "Pera"];

frutas.push("Naranja", "Plátano", "Sandía");

console.log(frutas);
```

Resultado:

```text
["Manzana", "Pera", "Naranja", "Plátano", "Sandía"]
```

El método `push()` modifica el array original y devuelve su nueva longitud.

```javascript
let frutas = ["Manzana", "Pera"];

let nuevaLongitud = frutas.push("Naranja");

console.log(nuevaLongitud);
```

Resultado:

```text
3
```

### 6.2. Eliminar el último elemento mediante pop()

El método `pop()` elimina el último elemento del array.

```javascript
let frutas = ["Manzana", "Pera", "Naranja"];

let eliminado = frutas.pop();

console.log(frutas);
console.log(eliminado);
```

Resultado:

```text
["Manzana", "Pera"]
Naranja
```

Es importante recordar que `pop()` devuelve el elemento eliminado.

Esto nos permite guardar el valor antes de descartarlo.

### 6.3. Añadir elementos al principio mediante unshift()

El método `unshift()` permite añadir uno o varios elementos al principio del array.

```javascript
let frutas = ["Manzana", "Pera"];

frutas.unshift("Naranja");

console.log(frutas);
```

Resultado:

```text
["Naranja", "Manzana", "Pera"]
```

Los elementos existentes desplazan sus posiciones para dejar espacio a los nuevos.

El método devuelve la nueva longitud del array.

### 6.4. Eliminar el primer elemento mediante shift()

El método `shift()` elimina el primer elemento del array.

```javascript
let frutas = ["Manzana", "Pera", "Naranja"];

let eliminado = frutas.shift();

console.log(frutas);
console.log(eliminado);
```

Resultado:

```text
["Pera", "Naranja"]
Manzana
```

Al igual que `pop()`, devuelve el elemento eliminado.

### 6.5. Resumen de push(), pop(), unshift() y shift()

| Método | Operación | Posición |
|---|---|---|
| `push()` | Añade elementos | Final |
| `pop()` | Elimina un elemento | Final |
| `unshift()` | Añade elementos | Principio |
| `shift()` | Elimina un elemento | Principio |

Podemos representar estas operaciones de la siguiente manera:

```text
             PRINCIPIO                    FINAL
                 ↓                          ↓
             ┌──────┬──────┬──────┐
             │  A   │  B   │  C   │
             └──────┴──────┴──────┘
                 ↑                          ↑
              shift()                     pop()

            unshift()                     push()
```

Estos cuatro métodos son fundamentales para gestionar colecciones de datos.

---

## 7. Recorrer arrays

Una de las operaciones más habituales consiste en recorrer todos los elementos de un array para consultarlos o realizar alguna operación.

JavaScript permite hacerlo mediante diferentes estructuras.

### 7.1. Recorrer un array con for

El bucle `for` es una de las formas más utilizadas para recorrer arrays.

Ejemplo:

```javascript
let frutas = ["Manzana", "Pera", "Naranja"];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
```

Resultado:

```text
Manzana
Pera
Naranja
```

Vamos a analizar el funcionamiento.

**Primera parte: inicialización**

```javascript
let i = 0;
```

Creamos una variable que representa la posición que estamos consultando.

Comenzamos en cero porque el primer índice del array es cero.

**Segunda parte: condición**

```javascript
i < frutas.length;
```

El bucle se ejecuta mientras el índice sea inferior a la longitud del array.

**Tercera parte: incremento**

```javascript
i++;
```

Después de cada repetición incrementamos el índice en una unidad.

**Cuarta parte: acceso al elemento**

```javascript
console.log(frutas[i]);
```

Mostramos el elemento que ocupa la posición indicada por `i`.

### 7.2. Trazado de un bucle for

Supongamos el siguiente array:

```javascript
let numeros = [10, 20, 30];
```

Y este bucle:

```javascript
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}
```

Podemos representar su ejecución:

| Iteración | i | numeros[i] | ¿Se ejecuta? |
|---:|---:|---:|---|
| 1 | 0 | 10 | Sí |
| 2 | 1 | 20 | Sí |
| 3 | 2 | 30 | Sí |
| 4 | 3 | undefined | No, la condición falla |

El resultado será:

```text
10
20
30
```

Este tipo de trazado es muy útil para comprender cómo se ejecutan los bucles.

### 7.3. Recorrer un array con for...of

JavaScript proporciona una estructura especialmente diseñada para recorrer elementos de colecciones: `for...of`.

Ejemplo:

```javascript
let frutas = ["Manzana", "Pera", "Naranja"];

for (let fruta of frutas) {
    console.log(fruta);
}
```

Resultado:

```text
Manzana
Pera
Naranja
```

A diferencia del bucle `for` tradicional, no necesitamos gestionar manualmente el índice.

En cada repetición, la variable `fruta` recibe el siguiente elemento del array.

Esta estructura resulta muy cómoda cuando solamente necesitamos consultar los valores.

### 7.4. Diferencias entre for y for...of

| Característica | for | for...of |
|---|---|---|
| Utiliza índices | Sí | No directamente |
| Necesita controlar el contador | Sí | No |
| Permite modificar el índice | Sí | No directamente |
| Accede fácilmente a posiciones concretas | Sí | No directamente |
| Es adecuado para recorrer elementos | Sí | Sí |

Ejemplo con `for`:

```javascript
let numeros = [10, 20, 30];

for (let i = 0; i < numeros.length; i++) {
    console.log("Índice:", i);
    console.log("Valor:", numeros[i]);
}
```

Ejemplo con `for...of`:

```javascript
let numeros = [10, 20, 30];

for (let numero of numeros) {
    console.log(numero);
}
```

Utilizaremos `for` cuando necesitemos trabajar con posiciones y `for...of` cuando queramos recorrer directamente los valores.

### 7.5. Recorrer un array con while

También podemos utilizar el bucle `while`.

```javascript
let frutas = ["Manzana", "Pera", "Naranja"];

let i = 0;

while (i < frutas.length) {
    console.log(frutas[i]);

    i++;
}
```

El funcionamiento es equivalente al de un `for`, pero la inicialización y el incremento se encuentran separados de la condición.

Debemos recordar incrementar el contador para evitar un bucle infinito.

### 7.6. Recorrer un array en sentido inverso

También podemos recorrer un array desde el último elemento hasta el primero.

```javascript
let frutas = ["Manzana", "Pera", "Naranja"];

for (let i = frutas.length - 1; i >= 0; i--) {
    console.log(frutas[i]);
}
```

Resultado:

```text
Naranja
Pera
Manzana
```

Esta técnica resulta útil cuando necesitamos procesar elementos en orden inverso.

---

## 8. Arrays multidimensionales

Hasta ahora hemos trabajado con arrays que contienen una única secuencia de elementos.

Sin embargo, JavaScript también permite crear arrays que contienen otros arrays.

Se conocen habitualmente como arrays multidimensionales.

Son útiles para representar estructuras como:

- Tablas.
- Matrices.
- Tableros de juegos.
- Horarios.
- Datos organizados por filas y columnas.

### 8.1. Crear un array bidimensional

Ejemplo:

```javascript
let alumnos = [
    ["Ana", 8],
    ["Pedro", 7],
    ["María", 9]
];

console.log(alumnos);
```

Cada elemento del array principal contiene otro array.

Podemos representar los datos de esta forma:

| Índice exterior | Nombre | Nota |
|---:|---|---:|
| 0 | Ana | 8 |
| 1 | Pedro | 7 |
| 2 | María | 9 |

### 8.2. Acceder a los elementos

Para acceder a un elemento de un array bidimensional utilizamos dos índices.

El primero identifica el array interior.

El segundo identifica el elemento dentro de ese array.

Ejemplo:

```javascript
let alumnos = [
    ["Ana", 8],
    ["Pedro", 7],
    ["María", 9]
];

console.log(alumnos[0][0]);
console.log(alumnos[0][1]);
console.log(alumnos[1][0]);
console.log(alumnos[2][1]);
```

Resultado:

```text
Ana
8
Pedro
9
```

La expresión:

```javascript
alumnos[1][0]
```

Significa:

1. Acceder al elemento de índice 1 del array principal.
2. Dentro del array obtenido, acceder al elemento de índice 0.

### 8.3. Modificar un elemento de un array bidimensional

También podemos modificar los elementos interiores.

```javascript
let alumnos = [
    ["Ana", 8],
    ["Pedro", 7],
    ["María", 9]
];

alumnos[1][1] = 8.5;

console.log(alumnos);
```

Resultado:

```text
[
    ["Ana", 8],
    ["Pedro", 8.5],
    ["María", 9]
]
```

Hemos modificado la nota de Pedro.

### 8.4. Recorrer un array bidimensional

Podemos utilizar dos bucles anidados.

El bucle exterior recorre los arrays interiores.

El bucle interior recorre los elementos de cada uno.

```javascript
let alumnos = [
    ["Ana", 8],
    ["Pedro", 7],
    ["María", 9]
];

for (let i = 0; i < alumnos.length; i++) {

    for (let j = 0; j < alumnos[i].length; j++) {

        console.log(alumnos[i][j]);

    }

}
```

Resultado:

```text
Ana
8
Pedro
7
María
9
```

### 8.5. Ejemplo de una matriz

Podemos utilizar arrays bidimensionales para representar una matriz de números.

```javascript
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matriz[0][0]);
console.log(matriz[1][1]);
console.log(matriz[2][2]);
```

Resultado:

```text
1
5
9
```

En este ejemplo estamos accediendo a los elementos de la diagonal principal.

---

## 9. Arrays y variables: diferencias importantes

Es importante comprender que un array es un objeto y que las variables que contienen arrays almacenan una referencia a ese objeto.

Esta característica tiene consecuencias cuando asignamos un array a otra variable.

### 9.1. Asignar un array a otra variable

Ejemplo:

```javascript
let numeros1 = [10, 20, 30];

let numeros2 = numeros1;

numeros2[0] = 100;

console.log(numeros1);
console.log(numeros2);
```

Resultado:

```text
[100, 20, 30]
[100, 20, 30]
```

¿Por qué se han modificado los dos arrays?

En realidad, no tenemos dos arrays diferentes.

Las variables `numeros1` y `numeros2` hacen referencia al mismo objeto en memoria.

Podemos representarlo de la siguiente manera:

```text
numeros1 ──────┐
               │
               ▼
          [10, 20, 30]
               ▲
               │
numeros2 ──────┘
```

Cuando modificamos el array a través de una variable, el cambio es visible a través de la otra.

### 9.2. Crear una copia mediante spread

Si queremos crear un array independiente a partir de otro, podemos utilizar el operador spread (`...`).

```javascript
let numeros1 = [10, 20, 30];

let numeros2 = [...numeros1];

numeros2[0] = 100;

console.log(numeros1);
console.log(numeros2);
```

Resultado:

```text
[10, 20, 30]
[100, 20, 30]
```

Ahora tenemos dos arrays diferentes.

**Importante:** esta técnica realiza una copia superficial. Si el array contiene otros arrays u objetos, los elementos interiores siguen compartiendo referencias. Para copiar estructuras anidadas necesitaremos técnicas adicionales.

### 9.3. Comprobar si una variable es un array

Podemos utilizar el método estático `Array.isArray()`.

```javascript
let numeros = [10, 20, 30];

console.log(Array.isArray(numeros));
```

Resultado:

```text
true
```

También podemos comprobar otros tipos de datos:

```javascript
console.log(Array.isArray("Hola"));
console.log(Array.isArray(25));
console.log(Array.isArray(true));
```

Resultado:

```text
false
false
false
```

Este método resulta útil cuando recibimos información de origen desconocido y necesitamos comprobar si realmente estamos trabajando con un array.

---

## 10. Errores habituales al trabajar con arrays

### Error 1. Pensar que el primer índice es uno

Código:

```javascript
let frutas = ["Manzana", "Pera", "Naranja"];

console.log(frutas[1]);
```

El resultado es:

```text
Pera
```

El primer elemento está en el índice cero.

### Error 2. Intentar acceder a una posición inexistente

Código:

```javascript
let frutas = ["Manzana", "Pera"];

console.log(frutas[5]);
```

El resultado será `undefined`.

Debemos comprobar que el índice se encuentra dentro de los límites del array.

### Error 3. Utilizar <= en lugar de < al recorrer un array

Código incorrecto:

```javascript
let numeros = [10, 20, 30];

for (let i = 0; i <= numeros.length; i++) {
    console.log(numeros[i]);
}
```

La condición permite llegar hasta el índice 3, que no existe.

Código correcto:

```javascript
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}
```

### Error 4. Olvidar incrementar el contador de un while

Código incorrecto:

```javascript
let numeros = [10, 20, 30];

let i = 0;

while (i < numeros.length) {
    console.log(numeros[i]);
}
```

Este programa nunca incrementa `i`.

Por tanto, el bucle se ejecutará indefinidamente.

Código correcto:

```javascript
let i = 0;

while (i < numeros.length) {
    console.log(numeros[i]);

    i++;
}
```

### Error 5. Confundir length con el último índice

Código:

```javascript
let frutas = ["Manzana", "Pera", "Naranja"];

console.log(frutas[frutas.length]);
```

El resultado es `undefined`.

La longitud es 3, pero el último índice es 2.

Código correcto:

```javascript
console.log(frutas[frutas.length - 1]);
```

### Error 6. Pensar que const impide modificar un array

Código:

```javascript
const numeros = [10, 20, 30];

numeros[0] = 100;

console.log(numeros);
```

Este código es válido.

Lo que no podemos hacer es reasignar la variable:

```javascript
numeros = [1, 2, 3];
```

### Error 7. Confundir push() con pop()

`push()` añade elementos al final.

`pop()` elimina el último elemento.

No realizan la misma operación.

### Error 8. Confundir shift() con unshift()

`shift()` elimina el primer elemento.

`unshift()` añade elementos al principio.

### Error 9. Pensar que asignar un array a otra variable crea una copia

Código:

```javascript
let a = [1, 2, 3];

let b = a;
```

Las dos variables hacen referencia al mismo array.

Si necesitamos una copia independiente de los elementos, podemos utilizar:

```javascript
let b = [...a];
```

### Error 10. Olvidar que los arrays pueden contener huecos

Código:

```javascript
let numeros = [];

numeros[3] = 50;

console.log(numeros);
```

El array tendrá longitud 4, aunque solamente hay un elemento con valor asignado.

Debemos evitar generar huecos accidentalmente.

---

## 11. Buenas prácticas

Cuando trabajemos con arrays debemos tener en cuenta las siguientes recomendaciones.

### 11.1. Utilizar nombres descriptivos

Es preferible:

```javascript
let nombresAlumnos = ["Ana", "Pedro", "María"];
```

En lugar de:

```javascript
let x = ["Ana", "Pedro", "María"];
```

Los nombres descriptivos facilitan la comprensión del código.

### 11.2. Utilizar const cuando no vayamos a reasignar el array

```javascript
const notas = [7, 8, 9];
```

Podremos modificar los elementos, pero no asignar otro array a la variable.

### 11.3. Comprobar los límites de los índices

Antes de acceder a una posición debemos asegurarnos de que existe.

```javascript
let posicion = 3;

if (posicion >= 0 && posicion < notas.length) {
    console.log(notas[posicion]);
}
```

### 11.4. Utilizar for...of cuando no necesitemos índices

```javascript
for (let nota of notas) {
    console.log(nota);
}
```

Es una forma sencilla y legible de recorrer elementos.

### 11.5. Utilizar for cuando necesitemos posiciones

```javascript
for (let i = 0; i < notas.length; i++) {
    console.log(i, notas[i]);
}
```

### 11.6. Mantener una estructura de datos coherente

Si un array almacena nombres, debemos evitar introducir números o valores booleanos sin una razón justificada.

Una estructura coherente facilita el mantenimiento del programa.

### 11.7. Evitar huecos innecesarios

Es recomendable añadir y eliminar elementos mediante los métodos apropiados en lugar de asignar posiciones alejadas del final del array.

### 11.8. Recordar que algunos métodos modifican el array original

Los métodos `push()`, `pop()`, `shift()` y `unshift()` modifican el array sobre el que se ejecutan.

Debemos tenerlo presente cuando compartimos arrays entre diferentes partes del programa.

---

## 12. Resumen de conceptos fundamentales

| Concepto | Descripción |
|---|---|
| Array | Colección ordenada de elementos |
| `[]` | Sintaxis habitual para crear arrays |
| Índice | Posición de un elemento |
| Índice inicial | 0 |
| `length` | Número de posiciones del array |
| `array[0]` | Acceso al primer elemento |
| `array[1]` | Acceso al segundo elemento |
| `array[0] = valor` | Modifica el primer elemento |
| `push()` | Añade elementos al final |
| `pop()` | Elimina el último elemento |
| `unshift()` | Añade elementos al principio |
| `shift()` | Elimina el primer elemento |
| `for` | Recorre utilizando índices |
| `for...of` | Recorre directamente los valores |
| `while` | Permite recorrer mediante una condición |
| `Array.isArray()` | Comprueba si un valor es un array |
| `...` | Permite crear una copia superficial mediante spread |

---

## 13. Ejercicios prácticos

Los ejercicios están organizados en tres niveles de dificultad.

Todos deberán desarrollarse en JavaScript y mostrar los resultados mediante `console.log()`.

### Nivel 1. Fundamentos

#### E01. Crear un array de nombres

Crea un array llamado `nombres` que contenga cinco nombres de personas.

El programa deberá:

1. Mostrar el array completo.
2. Mostrar el primer nombre.
3. Mostrar el tercer nombre.
4. Mostrar el último nombre.
5. Mostrar la longitud del array.

**Objetivos:**

- Crear arrays.
- Acceder mediante índices.
- Utilizar `length`.

#### E02. Modificar elementos

Crea un array con cinco ciudades.

Realiza las siguientes operaciones:

1. Muestra el array original.
2. Sustituye el segundo elemento por otra ciudad.
3. Sustituye el cuarto elemento por otra ciudad.
4. Muestra el array modificado.

**Objetivos:**

- Acceder a posiciones.
- Modificar elementos.
- Comprender que los arrays son mutables.

#### E03. Añadir y eliminar elementos

Crea un array con tres nombres de productos.

Realiza las siguientes operaciones:

1. Añade un producto al final utilizando `push()`.
2. Añade otro producto al principio utilizando `unshift()`.
3. Elimina el último producto utilizando `pop()`.
4. Elimina el primer producto utilizando `shift()`.
5. Muestra el resultado después de cada operación.

**Objetivos:**

- Utilizar los cuatro métodos básicos.
- Comprender qué elementos se modifican.
- Identificar los valores devueltos por cada método.

#### E04. Recorrer un array

Crea un array con ocho números.

Utiliza un bucle `for` para mostrar todos los elementos.

Después, utiliza `for...of` para volver a mostrar los mismos valores.

**Objetivos:**

- Recorrer arrays.
- Utilizar dos estructuras diferentes.
- Comprender las diferencias entre índices y valores.

### Nivel 2. Aplicación

#### E05. Gestión de notas

Crea un array llamado `notas` que almacene las calificaciones de cinco alumnos.

El programa deberá:

1. Mostrar todas las notas.
2. Calcular la suma de las notas.
3. Calcular la media.
4. Mostrar la nota más alta.
5. Mostrar la nota más baja.

Para obtener la suma, utiliza un bucle.

Para localizar la nota más alta y la más baja, recorre el array y compara los valores.

**Objetivos:**

- Recorrer arrays.
- Acumular valores.
- Utilizar estructuras condicionales.
- Trabajar con variables auxiliares.

#### E06. Gestión de una lista de compra

Crea un array llamado `compra` con cinco productos.

El programa deberá:

1. Mostrar la lista inicial.
2. Añadir dos productos al final.
3. Eliminar el primer producto.
4. Mostrar el número de productos.
5. Mostrar todos los productos mediante un bucle `for...of`.

**Objetivos:**

- Gestionar una colección.
- Añadir y eliminar elementos.
- Utilizar `length`.
- Recorrer los valores.

#### E07. Buscar un número

Crea un array con diez números enteros.

Solicita o declara un número que queramos localizar.

Recorre el array y comprueba si aparece.

El programa deberá mostrar:

- Si el número existe.
- En qué posición se encuentra.
- Cuántas veces aparece.

No utilices todavía `indexOf()` ni `includes()`: resolveremos la búsqueda mediante un bucle.

**Objetivos:**

- Recorrer arrays.
- Comparar valores.
- Utilizar condicionales.
- Contabilizar coincidencias.

#### E08. Invertir el orden de un array

Crea un array con seis nombres.

Muestra los elementos en orden original.

Después, recorre el array desde el último índice hasta el primero y muestra los nombres en orden inverso.

No utilices todavía el método `reverse()`.

**Objetivos:**

- Trabajar con índices.
- Recorrer arrays en sentido inverso.
- Comprender la relación entre `length` e índices.

### Nivel 3. Razonamiento y resolución de problemas

#### E09. Control de temperaturas

Una estación meteorológica registra las temperaturas de una semana.

Crea un array con siete valores numéricos, uno por cada día.

El programa deberá:

1. Mostrar todas las temperaturas.
2. Calcular la temperatura media.
3. Localizar la temperatura máxima.
4. Localizar la temperatura mínima.
5. Indicar cuántos días se ha superado la temperatura de 25 grados.
6. Mostrar los días en los que se ha superado esa temperatura.

Para simplificar, utiliza los índices del array para representar los días de la semana.

**Objetivos:**

- Recorrer arrays.
- Calcular acumulaciones.
- Buscar valores extremos.
- Utilizar contadores.
- Resolver un problema con datos reales.

#### E10. Gestión de alumnos y calificaciones

Crea un array bidimensional que almacene los nombres y las notas de cinco alumnos.

Ejemplo de estructura:

```javascript
let alumnos = [
    ["Ana", 8],
    ["Pedro", 6],
    ["María", 9],
    ["Carlos", 5],
    ["Lucía", 7]
];
```

El programa deberá:

1. Mostrar todos los alumnos y sus notas.
2. Calcular la media de la clase.
3. Mostrar el nombre del alumno con la nota más alta.
4. Mostrar el nombre del alumno con la nota más baja.
5. Contar cuántos alumnos han aprobado.
6. Mostrar los nombres de los alumnos que han obtenido una nota igual o superior a 8.

**Objetivos:**

- Trabajar con arrays bidimensionales.
- Utilizar índices anidados.
- Recorrer estructuras mediante bucles.
- Combinar arrays, condiciones y acumuladores.

---

## 14. Reto integrador: sistema de gestión de inventario

### 14.1. Planteamiento

Una pequeña tienda necesita desarrollar un programa para gestionar los productos que tiene almacenados.

El sistema deberá permitir consultar los productos, modificar sus existencias y mostrar información básica del inventario.

Para esta primera versión utilizaremos arrays y estructuras de control.

No utilizaremos todavía bases de datos ni almacenamiento externo.

### 14.2. Datos iniciales

El inventario comenzará con los siguientes productos:

| Producto | Unidades |
|---|---:|
| Teclado | 12 |
| Ratón | 20 |
| Monitor | 8 |
| Auriculares | 15 |
| Webcam | 6 |

Podemos representar los datos mediante un array bidimensional:

```javascript
let inventario = [
    ["Teclado", 12],
    ["Ratón", 20],
    ["Monitor", 8],
    ["Auriculares", 15],
    ["Webcam", 6]
];
```

### 14.3. Requisitos funcionales

**Requisito 1. Mostrar el inventario**

Recorre el array y muestra todos los productos junto con sus unidades disponibles.

Ejemplo:

```text
TECLADO: 12 unidades
RATÓN: 20 unidades
MONITOR: 8 unidades
AURICULARES: 15 unidades
WEBCAM: 6 unidades
```

**Requisito 2. Calcular el número total de unidades**

Recorre el inventario y suma todas las unidades disponibles.

**Requisito 3. Mostrar el producto con más existencias**

Localiza el producto que tiene el mayor número de unidades.

**Requisito 4. Mostrar el producto con menos existencias**

Localiza el producto que tiene el menor número de unidades.

**Requisito 5. Añadir un nuevo producto**

Añade al inventario un nuevo producto con sus unidades.

Por ejemplo:

```javascript
["Impresora", 4]
```

Puedes utilizar `push()`.

**Requisito 6. Modificar las existencias**

Localiza un producto mediante un recorrido del array y modifica su cantidad.

Por ejemplo, el teclado pasa de tener 12 unidades a tener 18.

**Requisito 7. Mostrar productos con pocas existencias**

Muestra todos los productos que tengan menos de 10 unidades.

### 14.4. Ejemplo de salida

```text
=====================================
       SISTEMA DE INVENTARIO
=====================================

PRODUCTOS DISPONIBLES

Teclado: 12 unidades
Ratón: 20 unidades
Monitor: 8 unidades
Auriculares: 15 unidades
Webcam: 6 unidades

-------------------------------------

TOTAL DE UNIDADES: 61

PRODUCTO CON MÁS EXISTENCIAS:
Ratón (20 unidades)

PRODUCTO CON MENOS EXISTENCIAS:
Webcam (6 unidades)

-------------------------------------

PRODUCTOS CON MENOS DE 10 UNIDADES:

Monitor: 8 unidades
Webcam: 6 unidades

=====================================
```

### 14.5. Condiciones técnicas

El programa deberá:

- Utilizar arrays.
- Utilizar un array bidimensional.
- Recorrer los elementos mediante bucles.
- Utilizar `length`.
- Utilizar `push()` para añadir productos.
- Utilizar índices para consultar y modificar datos.
- Utilizar condicionales.
- Utilizar variables acumuladoras y auxiliares.
- Evitar repetir innecesariamente el código.
- Incluir comentarios en las operaciones más importantes.

### 14.6. Ampliaciones opcionales

Cuando hayas terminado el reto principal, puedes añadir:

1. Eliminar un producto del inventario.
2. Buscar un producto por su nombre.
3. Comprobar si un producto existe antes de modificarlo.
4. Calcular el porcentaje de existencias de cada producto respecto al total.
5. Mostrar el inventario ordenado manualmente por número de unidades.
6. Incorporar un menú de opciones mediante `prompt()` y estructuras condicionales.

---

## 15. Autoevaluación

Responde a las siguientes preguntas para comprobar si has comprendido los conceptos de la sesión.

### P01. Definición

¿Qué es un array?

A. Una variable que solamente almacena números.

B. Una estructura que permite almacenar una colección ordenada de elementos.

C. Una función matemática.

D. Un tipo de bucle.

### P02. Índices

¿Cuál es el primer índice de un array en JavaScript?

A. 1

B. -1

C. 0

D. 10

### P03. Crear arrays

¿Cuál es la forma habitual de crear un array vacío?

A. `let datos = {};`

B. `let datos = [];`

C. `let datos = ();`

D. `let datos = "";`

### P04. Acceso

Dado el siguiente array:

```javascript
let colores = ["Rojo", "Verde", "Azul"];
```

¿Qué valor devuelve `colores[1]`?

A. Rojo

B. Verde

C. Azul

D. undefined

### P05. Longitud

¿Qué devuelve la propiedad `length`?

A. El último índice.

B. El primer elemento.

C. El número de posiciones del array.

D. La suma de sus elementos.

### P06. Último elemento

¿Qué expresión permite acceder al último elemento de un array?

A. `array[array.length]`

B. `array[array.length - 1]`

C. `array[0]`

D. `array[-1]`

### P07. Modificación

¿Qué instrucción modifica el segundo elemento de un array llamado `datos`?

A. `datos[2] = valor;`

B. `datos[1] = valor;`

C. `datos.length = valor;`

D. `datos.push(valor);`

### P08. Añadir al final

¿Qué método añade un elemento al final del array?

A. `pop()`

B. `shift()`

C. `push()`

D. `unshift()`

### P09. Eliminar al final

¿Qué método elimina el último elemento de un array?

A. `push()`

B. `pop()`

C. `shift()`

D. `unshift()`

### P10. Añadir al principio

¿Qué método permite añadir un elemento al principio?

A. `push()`

B. `pop()`

C. `shift()`

D. `unshift()`

### P11. Recorrido

¿Qué estructura permite recorrer directamente los valores de un array?

A. `for...of`

B. `if...else`

C. `switch`

D. `try...catch`

### P12. Condición de recorrido

Si un array tiene cinco elementos, ¿qué condición es adecuada para recorrerlo desde el índice cero?

A. `i <= array.length`

B. `i < array.length`

C. `i > array.length`

D. `i === array.length`

### P13. Arrays multidimensionales

¿Qué representa la expresión `datos[1][2]`?

A. El segundo array y su tercer elemento.

B. El primer array y su segundo elemento.

C. El segundo elemento del array principal.

D. La longitud del array.

### P14. Referencias

¿Qué ocurre cuando asignamos un array a otra variable mediante `let b = a`?

A. Se crea automáticamente una copia independiente.

B. Ambas variables hacen referencia al mismo array.

C. Se elimina el array original.

D. Se convierte el array en una cadena.

### P15. Comprobar arrays

¿Qué método permite comprobar si un valor es un array?

A. `typeofArray()`

B. `Array.isArray()`

C. `isArray()`

D. `Number.isArray()`

---

## 16. Checklist de aprendizaje

Antes de finalizar esta sesión, comprueba que eres capaz de realizar las siguientes tareas.

- [ ] Sé explicar qué es un array.
- [ ] Sé crear arrays vacíos y con elementos.
- [ ] Comprendo que los índices comienzan en cero.
- [ ] Sé acceder a los elementos de un array.
- [ ] Sé consultar la longitud mediante `length`.
- [ ] Sé modificar elementos existentes.
- [ ] Comprendo qué ocurre cuando accedo a una posición inexistente.
- [ ] Sé utilizar `push()` y `pop()`.
- [ ] Sé utilizar `unshift()` y `shift()`.
- [ ] Sé recorrer arrays mediante `for`.
- [ ] Sé recorrer arrays mediante `for...of`.
- [ ] Sé recorrer arrays utilizando `while`.
- [ ] Sé recorrer un array en sentido inverso.
- [ ] Comprendo cómo funcionan los arrays bidimensionales.
- [ ] Sé acceder a elementos mediante dos índices.
- [ ] Comprendo la diferencia entre copiar un array y compartir su referencia.
- [ ] Sé utilizar `Array.isArray()`.
- [ ] Sé resolver problemas utilizando arrays, bucles y condicionales.

---

## 17. Conclusión

Los arrays son una de las estructuras de datos más importantes de JavaScript.

Permiten agrupar información, acceder a sus elementos mediante índices, modificarlos y recorrerlos para realizar operaciones.

Durante esta sesión hemos aprendido a crear arrays, consultar su contenido, modificar sus elementos, gestionar su longitud y utilizar los principales métodos para añadir y eliminar valores.

También hemos trabajado con estructuras bidimensionales y hemos aprendido que las variables que contienen arrays almacenan referencias a objetos.

Estos conocimientos son la base para trabajar con colecciones de datos en aplicaciones web reales.

En la siguiente sesión profundizaremos en los métodos de los arrays, aprendiendo a insertar, eliminar, buscar, combinar, dividir y transformar colecciones mediante herramientas específicas de JavaScript.