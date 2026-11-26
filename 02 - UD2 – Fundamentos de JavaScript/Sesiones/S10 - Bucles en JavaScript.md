---

tipo: sesion  
asignatura: DWEC  
unidad: UD2 - Fundamentos de JavaScript  
numero_sesion: 10  
fecha:  
duracion: 55  
estado: pendiente  
resultado_aprendizaje: RA02  
criterios_evaluacion: []  
tags:

- dwec
    
- javascript
    
- ud2
    
- bucles
    
- iteraciones
    

---

# S10 - Bucles en JavaScript

## 1. Objetivos de la sesión

Al finalizar esta sesión deberás ser capaz de:

- Comprender qué es un bucle y para qué se utiliza.
    
- Diferenciar los bucles `while`, `do...while` y `for`.
    
- Utilizar `break` y `continue` para controlar la ejecución.
    
- Recorrer arrays y objetos mediante `for...of` y `for...in`.
    
- Crear contadores y acumuladores.
    
- Detectar y evitar los bucles infinitos.
    
- Elegir el tipo de bucle adecuado según el problema.
    

## 2. Relación curricular

**Resultado de aprendizaje:** RA02 (referencia provisional).

**Criterios de evaluación:** pendientes de contrastar con la programación didáctica oficial.

## 3. Contenidos

### 3.1. ¿Qué es un bucle?

Un bucle es una estructura de control que permite ejecutar repetidamente un bloque de código mientras se cumpla una determinada condición.

Imagina que queremos mostrar los números del 1 al 100. Podríamos escribir cien instrucciones `console.log()`, pero sería poco práctico.

Con un bucle podemos resolverlo en unas pocas líneas:

```
for (let i = 1; i <= 100; i++) {
    console.log(i);
}
```

Los bucles permiten:

- Repetir instrucciones.
    
- Recorrer arrays.
    
- Procesar colecciones de datos.
    
- Realizar cálculos repetitivos.
    
- Validar entradas.
    
- Automatizar tareas.
    

### 3.2. Bucle `while`

El bucle `while` ejecuta un bloque de código mientras su condición sea verdadera.

Su sintaxis es:

```
while (condicion) {
    // Código que se repite
}
```

Ejemplo:

```
let contador = 1;

while (contador <= 5) {
    console.log(contador);
    contador++;
}
```

Resultado:

```
1
2
3
4
5
```

El funcionamiento es el siguiente:

1. Se comprueba la condición.
    
2. Si es verdadera, se ejecuta el bloque.
    
3. Se vuelve a comprobar la condición.
    
4. El proceso continúa hasta que la condición sea falsa.
    

**Importante:** la condición se comprueba antes de ejecutar el bloque. Por tanto, puede ocurrir que el bucle no se ejecute ninguna vez.

```
let numero = 10;

while (numero < 5) {
    console.log("Hola");
}
```

En este caso no se muestra nada porque la condición es falsa desde el principio.

### 3.3. Bucle `do...while`

El bucle `do...while` es parecido a `while`, pero tiene una diferencia importante: primero ejecuta el código y después comprueba la condición.

Sintaxis:

```
do {
    // Código que se repite
} while (condicion);
```

Ejemplo:

```
let numero = 10;

do {
    console.log(numero);
    numero++;
} while (numero < 5);
```

Resultado:

```
10
```

Aunque la condición sea falsa inicialmente, el bloque se ejecuta una vez.

**Diferencia fundamental:**

|`while`|`do...while`|
|---|---|
|Comprueba primero la condición.|Ejecuta primero el bloque.|
|Puede ejecutarse cero veces.|Se ejecuta al menos una vez.|
|La condición aparece al principio.|La condición aparece al final.|

Un caso típico para utilizar `do...while` es solicitar una entrada al usuario y repetir la petición hasta que sea válida.

```
let edad;

do {
    edad = Number(prompt("Introduce tu edad:"));
} while (!Number.isFinite(edad) || edad < 0);

console.log("Edad registrada:", edad);
```

### 3.4. Bucle `for`

El bucle `for` es especialmente útil cuando conocemos el número de repeticiones o necesitamos controlar un contador.

Sintaxis:

```
for (inicializacion; condicion; actualizacion) {
    // Código que se repite
}
```

Ejemplo:

```
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

El bucle contiene tres partes:

|Parte|Función|
|---|---|
|Inicialización|Crea e inicializa la variable de control.|
|Condición|Determina si continúa el bucle.|
|Actualización|Modifica la variable de control.|

Su ejecución es la siguiente:

1. Se ejecuta la inicialización una sola vez.
    
2. Se comprueba la condición.
    
3. Si es verdadera, se ejecuta el bloque.
    
4. Se ejecuta la actualización.
    
5. Se vuelve a comprobar la condición.
    

Ejemplo: mostrar los números pares del 2 al 20.

```
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}
```

### 3.5. Contadores y acumuladores

Son dos conceptos muy habituales cuando trabajamos con bucles.

**Contador**

Una variable que registra cuántas veces sucede algo.

```
let contador = 0;

for (let i = 1; i <= 10; i++) {
    contador++;
}

console.log("Repeticiones:", contador);
```

**Acumulador**

Una variable que va almacenando progresivamente un resultado.

```
let suma = 0;

for (let i = 1; i <= 5; i++) {
    suma += i;
}

console.log("Suma:", suma);
```

Resultado:

```
Suma: 15
```

En este ejemplo, la variable `suma` conserva el resultado anterior y añade el nuevo valor en cada iteración.

### 3.6. Controlar un bucle con `break`

La instrucción `break` permite abandonar inmediatamente un bucle.

```
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }

    console.log(i);
}
```

Resultado:

```
1
2
3
4
```

Cuando `i` vale 5, se ejecuta `break` y el bucle termina.

Puede utilizarse cuando encontramos el elemento que estamos buscando o cuando se cumple una condición que hace innecesario continuar.

### 3.7. Controlar un bucle con `continue`

La instrucción `continue` permite saltar la iteración actual y continuar con la siguiente.

```
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i);
}
```

Resultado:

```
1
2
4
5
```

Cuando `i` vale 3, se omite el resto del bloque y comienza la siguiente iteración.

**Diferencia:**

- `break`: termina completamente el bucle.
    
- `continue`: termina únicamente la iteración actual.
    

### 3.8. Bucles anidados

Un bucle anidado es un bucle que se encuentra dentro de otro.

Ejemplo:

```
for (let fila = 1; fila <= 3; fila++) {
    for (let columna = 1; columna <= 3; columna++) {
        console.log(`Fila ${fila}, columna ${columna}`);
    }
}
```

El bucle exterior controla las filas y el interior las columnas.

Por cada repetición del bucle exterior, el interior realiza todas sus iteraciones.

Un ejemplo habitual es generar tablas de multiplicar:

```
for (let tabla = 1; tabla <= 3; tabla++) {
    console.log(`Tabla del ${tabla}`);

    for (let numero = 1; numero <= 10; numero++) {
        console.log(`${tabla} x ${numero} = ${tabla * numero}`);
    }
}
```

### 3.9. Recorrer arrays con `for...of`

Cuando queremos recorrer los elementos de un array, podemos utilizar `for...of`.

```
const nombres = ["Ana", "Luis", "Marta"];

for (const nombre of nombres) {
    console.log(nombre);
}
```

Resultado:

```
Ana
Luis
Marta
```

En cada iteración, la variable `nombre` contiene un elemento del array.

También podemos trabajar con números:

```
const notas = [7, 8, 5, 9, 6];

let suma = 0;

for (const nota of notas) {
    suma += nota;
}

console.log("Suma:", suma);
console.log("Media:", suma / notas.length);
```

**Ventaja:** no necesitamos controlar manualmente un índice para acceder a cada elemento.

### 3.10. Recorrer objetos con `for...in`

El bucle `for...in` permite recorrer las propiedades enumerables de un objeto.

```
const alumno = {
    nombre: "Carlos",
    edad: 20,
    curso: "DAW"
};

for (const propiedad in alumno) {
    console.log(propiedad);
}
```

Resultado:

```
nombre
edad
curso
```

Si queremos obtener también los valores:

```
for (const propiedad in alumno) {
    console.log(propiedad, alumno[propiedad]);
}
```

Resultado:

```
nombre Carlos
edad 20
curso DAW
```

Observa que utilizamos:

```
alumno[propiedad]
```

Esto permite acceder dinámicamente al valor de una propiedad.

**Diferencia entre** `**for...of**` **y** `**for...in**`**:**

|`for...of`|`for...in`|
|---|---|
|Recorre valores.|Recorre nombres de propiedades o claves.|
|Se utiliza con arrays y otros iterables.|Se utiliza principalmente con objetos.|
|Devuelve cada elemento.|Devuelve cada clave.|

Para recorrer arrays normalmente utilizaremos `for...of`. Aunque `for...in` puede recorrer sus índices, no es la opción recomendada para recorrer sus elementos.

### 3.11. Cómo evitar los bucles infinitos

Un bucle infinito es aquel que nunca termina porque su condición continúa siendo verdadera.

Ejemplo incorrecto:

```
let contador = 1;

while (contador <= 5) {
    console.log(contador);
}
```

El problema es que nunca modificamos `contador`.

La condición siempre será verdadera.

Corrección:

```
let contador = 1;

while (contador <= 5) {
    console.log(contador);
    contador++;
}
```

Antes de ejecutar un bucle, comprueba:

1. Que la condición puede llegar a ser falsa.
    
2. Que las variables utilizadas en la condición se actualizan correctamente.
    
3. Que la actualización no impide alcanzar el final.
    
4. Que los límites de repetición son correctos.
    

## 4. Desarrollo práctico

### Práctica 1. Contar del 1 al 100

Crea un programa que muestre por consola los números del 1 al 100 utilizando un bucle `for`.

```
for (let i = 1; i <= 100; i++) {
    console.log(i);
}
```

Modifica el programa para mostrar únicamente los números pares.

### Práctica 2. Sumar números

Crea un programa que calcule la suma de todos los números comprendidos entre 1 y 100.

Requisitos:

- Utiliza un acumulador.
    
- Utiliza un bucle `for`.
    
- Muestra el resultado por consola.
    

### Práctica 3. Tabla de multiplicar

Solicita un número al usuario y muestra su tabla de multiplicar del 1 al 10.

Ejemplo:

```
Introduce un número: 7

7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
...
7 x 10 = 70
```

### Práctica 4. Recorrer un array

Crea un array con los nombres de cinco compañeros.

Utiliza `for...of` para mostrar todos los nombres.

Después, modifica el programa para contar cuántos nombres contiene el array.

### Práctica 5. Calcular la media de notas

Crea un array con las siguientes notas:

```
const notas = [6, 8, 7, 5, 9, 10];
```

El programa debe:

1. Recorrer el array.
    
2. Sumar todas las notas.
    
3. Calcular la media.
    
4. Mostrar la media por consola.
    
5. Indicar cuántas notas hay.
    

### Práctica 6. Recorrer un objeto

Crea un objeto que represente un ordenador:

```
const ordenador = {
    marca: "Dell",
    procesador: "Intel i7",
    memoria: "16 GB",
    almacenamiento: "512 GB SSD"
};
```

Utiliza `for...in` para mostrar todas sus propiedades y valores.

### Práctica 7. Detectar números

Crea un programa que recorra los números del 1 al 30.

Requisitos:

- Si el número es divisible entre 3, muestra `"Múltiplo de 3"`.
    
- Si es divisible entre 5, muestra `"Múltiplo de 5"`.
    
- Si es divisible entre ambos, muestra `"Múltiplo de 3 y 5"`.
    
- En cualquier otro caso, muestra el número.
    

### Práctica 8. Analizar el código

Indica qué resultado produce cada fragmento y explica por qué.

**Código A**

```
let i = 0;

while (i < 3) {
    console.log(i);
    i++;
}
```

**Código B**

```
let i = 0;

do {
    console.log(i);
    i++;
} while (i < 3);
```

**Código C**

```
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i);
}
```

**Código D**

```
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break;
    }

    console.log(i);
}
```

## 5. Material necesario

- Ordenador con navegador web.
    
- Editor de código.
    
- Consola de desarrollador del navegador.
    
- Conocimientos previos de variables, operadores y estructuras condicionales.
    

Para ejecutar los ejemplos puedes utilizar un archivo HTML:

```
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Bucles JavaScript</title>
</head>
<body>

    <h1>Práctica de bucles</h1>

    <script src="script.js"></script>
</body>
</html>
```

Guarda el código JavaScript en `script.js` y abre el archivo HTML en el navegador.

## 6. Resumen de la sesión

|Estructura|Utilidad|
|---|---|
|`while`|Repite mientras se cumpla una condición.|
|`do...while`|Ejecuta al menos una vez y después comprueba la condición.|
|`for`|Repite utilizando inicialización, condición y actualización.|
|`for...of`|Recorre los valores de un iterable.|
|`for...in`|Recorre las propiedades enumerables de un objeto.|
|`break`|Finaliza el bucle.|
|`continue`|Salta a la siguiente iteración.|

Recuerda:

- Un contador registra repeticiones.
    
- Un acumulador almacena resultados parciales.
    
- Un bucle anidado contiene otro bucle.
    
- Un bucle infinito no alcanza nunca su condición de finalización.
    

## 7. Errores habituales

**Error 1. Olvidar actualizar el contador**

```
let i = 1;

while (i <= 5) {
    console.log(i);
}
```

El bucle nunca termina porque `i` no cambia.

**Error 2. Utilizar un operador incorrecto**

```
for (let i = 1; i < 5; i++) {
    console.log(i);
}
```

Este código muestra del 1 al 4, no del 1 al 5.

**Error 3. Confundir** `**break**` **y** `**continue**`

`break` termina el bucle. `continue` solamente omite la iteración actual.

**Error 4. Confundir** `**for...of**` **y** `**for...in**`

`for...of` devuelve valores; `for...in` devuelve claves o propiedades.

**Error 5. Reiniciar un acumulador dentro del bucle**

```
for (let i = 1; i <= 5; i++) {
    let suma = 0;
    suma += i;
}
```

La variable `suma` se vuelve a inicializar en cada iteración. Por tanto, no acumula correctamente los resultados.

## 8. Autoevaluación

Comprueba si eres capaz de responder a estas preguntas:

- ¿Sé explicar qué es un bucle?
    
- ¿Sé diferenciar `while` y `do...while`?
    
- ¿Sé construir un bucle `for`?
    
- ¿Sé utilizar contadores y acumuladores?
    
- ¿Sé utilizar `break` y `continue`?
    
- ¿Sé crear bucles anidados?
    
- ¿Sé recorrer arrays con `for...of`?
    
- ¿Sé recorrer objetos con `for...in`?
    
- ¿Sé identificar un bucle infinito?
    
- ¿Sé elegir el bucle más adecuado para cada situación?
    

## 9. Preguntas tipo examen

**Pregunta 1.** ¿Qué diferencia existe entre `while` y `do...while`?

**Pregunta 2.** ¿Cuáles son las tres partes de un bucle `for`?

**Pregunta 3.** ¿Qué ocurre si olvidamos actualizar el contador de un bucle?

**Pregunta 4.** ¿Qué diferencia existe entre `break` y `continue`?

**Pregunta 5.** ¿Qué resultado produce este código?

```
for (let i = 1; i <= 5; i++) {
    console.log(i * 2);
}
```

**Pregunta 6.** ¿Qué resultado produce este código?

```
let suma = 0;

for (let i = 1; i <= 4; i++) {
    suma += i;
}

console.log(suma);
```

**Pregunta 7.** ¿Qué diferencia existe entre `for...of` y `for...in`?

**Pregunta 8.** ¿Qué estructura utilizarías para recorrer todos los elementos de un array? Justifica tu respuesta.

**Pregunta 9.** ¿Qué resultado produce este código?

```
let contador = 0;

while (contador < 5) {
    contador++;

    if (contador === 3) {
        continue;
    }

    console.log(contador);
}
```

**Pregunta 10.** Escribe un programa que recorra los números del 1 al 50 y muestre únicamente los divisibles entre 2 y 5.

## 10. Checklist de dominio

Antes del examen deberías ser capaz de realizar sin ayuda las siguientes tareas:

- Crear un bucle `while`.
    
- Crear un bucle `do...while`.
    
- Crear un bucle `for`.
    
- Utilizar correctamente la inicialización, condición y actualización.
    
- Construir un contador.
    
- Construir un acumulador.
    
- Utilizar `break`.
    
- Utilizar `continue`.
    
- Crear bucles anidados.
    
- Recorrer arrays con `for...of`.
    
- Recorrer objetos con `for...in`.
    
- Detectar y corregir bucles infinitos.
    
- Analizar el resultado de un código con bucles.
    

---

**Siguiente sesión:** S11 - Funciones en JavaScript.