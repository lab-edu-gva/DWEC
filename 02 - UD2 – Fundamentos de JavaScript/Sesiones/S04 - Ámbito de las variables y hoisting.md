---

tipo: sesion  
asignatura: DWEC  
unidad: UD2 - Fundamentos de JavaScript  
numero_sesion: 4  
fecha:  
duracion: 55  
estado: pendiente  
resultado_aprendizaje: RA02  
criterios_evaluacion: []  
tags:

- DWEC
    
- JavaScript
    
- UD2
    
- ambito
    
- hoisting
    

---

# S04 - Ámbito de las variables y hoisting

## 1. Objetivos de la sesión

Al finalizar esta sesión deberás ser capaz de:

- Comprender qué es el ámbito de una variable (_scope_).
    
- Diferenciar el ámbito global, de función y de bloque.
    
- Comprender las diferencias entre `var`, `let` y `const` respecto al ámbito.
    
- Identificar dónde puede utilizarse una variable.
    
- Comprender el concepto de _hoisting_.
    
- Diferenciar el comportamiento de `var`, `let` y `const` antes de su declaración.
    
- Comprender qué es la zona temporal muerta (_Temporal Dead Zone_ o TDZ).
    

## 2. Relación curricular

Esta sesión profundiza en la declaración y utilización de variables, estudiando su visibilidad y disponibilidad dentro de un programa JavaScript.

La relación definitiva con los resultados de aprendizaje y criterios de evaluación debe comprobarse con la programación didáctica oficial.

## 3. Contenidos

### 3.1. ¿Qué es el ámbito de una variable?

El ámbito (_scope_) determina desde qué partes del programa podemos acceder a una variable.

No todas las variables están disponibles en cualquier lugar.

Por ejemplo:

```
let nombre = "Carlos";

console.log(nombre);
```

La variable `nombre` está declarada fuera de cualquier bloque o función, por lo que tiene ámbito global en este contexto.

Sin embargo, una variable declarada dentro de una función tiene un ámbito diferente:

```
function saludar() {
    let mensaje = "Hola";
    console.log(mensaje);
}

saludar();

console.log(mensaje);
```

La primera llamada a `console.log()` funciona, pero la segunda produce un error porque `mensaje` solamente existe dentro de la función.

### 3.2. Ámbito global

Una variable tiene ámbito global cuando se declara fuera de funciones y bloques.

Ejemplo:

```
const centro = "IES Ejemplo";

function mostrarCentro() {
    console.log(centro);
}

mostrarCentro();

console.log(centro);
```

Resultado:

```
IES Ejemplo
IES Ejemplo
```

La variable `centro` puede utilizarse tanto fuera como dentro de la función.

**Características:**

- Está disponible desde diferentes partes del programa.
    
- Puede ser utilizada por funciones y bloques que estén dentro de su ámbito.
    
- Conviene evitar crear demasiadas variables globales porque pueden provocar conflictos entre diferentes partes de una aplicación.
    

### 3.3. Ámbito de función

Las variables declaradas dentro de una función solamente están disponibles dentro de esa función y en los ámbitos anidados que dependan de ella.

Ejemplo:

```
function calcularNota() {
    let nota = 8;

    console.log(nota);
}

calcularNota();

console.log(nota);
```

La primera instrucción muestra `8`.

La segunda produce un error porque `nota` no está disponible fuera de `calcularNota()`.

Podemos tener diferentes funciones que utilicen variables con el mismo nombre:

```
function mostrarAlumno() {
    let nombre = "Ana";
    console.log(nombre);
}

function mostrarProfesor() {
    let nombre = "Luis";
    console.log(nombre);
}

mostrarAlumno();
mostrarProfesor();
```

Cada función tiene su propio ámbito y sus propias variables.

### 3.4. Ámbito de bloque

Un bloque es un conjunto de instrucciones delimitado por llaves `{ }`.

Por ejemplo:

```
if (true) {
    let mensaje = "Hola";
}
```

Las variables declaradas con `let` y `const` dentro de un bloque solamente están disponibles en ese bloque y en sus bloques internos.

Ejemplo:

```
if (true) {
    let edad = 20;
    const nombre = "Carlos";

    console.log(edad);
    console.log(nombre);
}

console.log(edad);
console.log(nombre);
```

Los dos últimos `console.log()` producen errores porque las variables no existen fuera del bloque.

También ocurre con los bloques de los bucles:

```
for (let i = 0; i < 3; i++) {
    console.log(i);
}

console.log(i);
```

El último `console.log()` produce un error porque `i` solamente existe dentro del bloque del `for`.

### 3.5. Diferencias entre var, let y const

Una de las diferencias más importantes entre estas tres formas de declarar variables es su ámbito.

|Declaración|Ámbito de función|Ámbito de bloque|
|---|---|---|
|`var`|Sí|No|
|`let`|Sí|Sí|
|`const`|Sí|Sí|

Ejemplo con `var`:

```
if (true) {
    var mensaje = "Hola";
}

console.log(mensaje);
```

Resultado:

```
Hola
```

Aunque `mensaje` se ha declarado dentro del bloque `if`, puede utilizarse fuera porque `var` no tiene ámbito de bloque.

Ahora utilizamos `let`:

```
if (true) {
    let mensaje = "Hola";
}

console.log(mensaje);
```

Este código produce un error porque `let` sí tiene ámbito de bloque.

La misma regla se aplica a `const`.

**Recuerda:** `var` tiene ámbito global o de función, mientras que `let` y `const` tienen ámbito de bloque.

### 3.6. ¿Qué es el hoisting?

El _hoisting_ es el comportamiento de JavaScript por el cual las declaraciones se procesan antes de ejecutar el código de su ámbito.

Esto significa que determinadas declaraciones pueden estar disponibles antes de la línea donde aparecen escritas.

No significa que JavaScript mueva físicamente las instrucciones en el archivo, sino que es una forma de describir cómo funciona la creación del entorno de ejecución.

El comportamiento depende de cómo se haya declarado la variable.

### 3.7. Hoisting con var

Las variables declaradas con `var` se procesan antes de ejecutar el código, pero su inicialización no se adelanta.

Ejemplo:

```
console.log(nombre);

var nombre = "Ana";
```

Resultado:

```
undefined
```

¿Por qué ocurre?

JavaScript procesa la declaración de esta manera:

```
var nombre;

console.log(nombre);

nombre = "Ana";
```

La variable existe desde el principio del ámbito, pero todavía no tiene asignado el valor `"Ana"`.

Por eso devuelve `undefined`.

**Importante:** que una variable con `var` pueda utilizarse antes de su declaración no significa que sea una buena práctica.

### 3.8. Hoisting con let y const

Las declaraciones `let` y `const` también se procesan antes de ejecutar el código, pero no pueden utilizarse antes de llegar a su declaración.

Ejemplo:

```
console.log(edad);

let edad = 20;
```

Este código produce un `ReferenceError`.

Con `const` sucede lo mismo:

```
console.log(IVA);

const IVA = 0.21;
```

También produce un `ReferenceError`.

La diferencia con `var` es que las variables `let` y `const` no están disponibles antes de su declaración.

### 3.9. Temporal Dead Zone (TDZ)

La _Temporal Dead Zone_ o zona temporal muerta es el periodo comprendido entre el inicio del ámbito de una variable `let` o `const` y el momento en que se ejecuta su declaración.

Durante ese periodo no podemos acceder a la variable.

Ejemplo:

```
{
    console.log(nombre);

    let nombre = "Laura";
}
```

El código produce un `ReferenceError`.

La variable existe dentro del ámbito, pero todavía no se puede utilizar.

Otro ejemplo:

```
{
    let numero = 10;

    console.log(numero);
}
```

Este código funciona porque la variable se utiliza después de su declaración.

**Para recordar:**

- `var`: puede utilizarse antes de su declaración, pero su valor será `undefined` si todavía no se ha inicializado.
    
- `let`: no puede utilizarse antes de su declaración.
    
- `const`: tampoco puede utilizarse antes de su declaración.
    

### 3.10. Hoisting de funciones

Las declaraciones de funciones también presentan un comportamiento relacionado con el hoisting.

Una función declarada mediante la sintaxis tradicional puede invocarse antes de su declaración.

Ejemplo:

```
saludar();

function saludar() {
    console.log("Hola");
}
```

Resultado:

```
Hola
```

Esto funciona porque las declaraciones de funciones se procesan antes de ejecutar el código.

Sin embargo, una función almacenada en una variable tiene un comportamiento diferente.

Ejemplo:

```
saludar();

const saludar = function() {
    console.log("Hola");
};
```

Este código produce un error porque intentamos utilizar `saludar` antes de que se haya inicializado la constante.

Lo mismo sucede con una función flecha almacenada en una variable:

```
saludar();

const saludar = () => {
    console.log("Hola");
};
```

**Diferencia fundamental:**

- Las funciones declaradas con `function nombre()` pueden invocarse antes de su declaración.
    
- Las funciones almacenadas en variables `let` o `const` no pueden utilizarse antes de inicializar esas variables.
    

## 4. Desarrollo práctico de la sesión

### Actividad 1. Identificar ámbitos

Analiza el siguiente código:

```
let nombreCentro = "IES Ejemplo";

function mostrarDatos() {
    let nombreAlumno = "Carlos";

    console.log(nombreCentro);
    console.log(nombreAlumno);
}

mostrarDatos();

console.log(nombreCentro);
console.log(nombreAlumno);
```

Responde:

1. ¿Qué variable tiene ámbito global?
    
2. ¿Qué variable tiene ámbito de función?
    
3. ¿Qué instrucciones funcionan?
    
4. ¿Qué instrucción produce un error?
    
5. ¿Por qué no podemos acceder a `nombreAlumno` desde fuera de la función?
    

### Actividad 2. Comparar var y let

Ejecuta estos dos ejemplos.

Primer ejemplo:

```
if (true) {
    var mensaje = "Hola desde var";
}

console.log(mensaje);
```

Segundo ejemplo:

```
if (true) {
    let mensaje = "Hola desde let";
}

console.log(mensaje);
```

Responde:

1. ¿Qué sucede en el primer ejemplo?
    
2. ¿Qué sucede en el segundo?
    
3. ¿Por qué se comportan de manera diferente?
    
4. ¿Cuál de las dos declaraciones tiene ámbito de bloque?
    

### Actividad 3. Investigar el hoisting

Analiza el siguiente código:

```
console.log(numero);

var numero = 10;
```

Después analiza:

```
console.log(numero);

let numero = 10;
```

Responde:

1. ¿Qué muestra el primer ejemplo?
    
2. ¿Qué sucede en el segundo?
    
3. ¿Qué diferencia existe entre ambos?
    
4. ¿Qué es el hoisting?
    
5. ¿Qué significa `undefined`?
    

### Actividad 4. Comprender la TDZ

Analiza el siguiente código:

```
{
    console.log(nombre);

    let nombre = "Ana";

    console.log(nombre);
}
```

Responde:

1. ¿Por qué falla el primer `console.log()`?
    
2. ¿Por qué el segundo podría ejecutarse correctamente si se elimina el primero?
    
3. ¿Qué es la Temporal Dead Zone?
    
4. ¿Afecta también a las variables declaradas con `const`?
    

### Actividad 5. Hoisting de funciones

Compara estos dos ejemplos:

Ejemplo A:

```
saludar();

function saludar() {
    console.log("Hola");
}
```

Ejemplo B:

```
saludar();

const saludar = function() {
    console.log("Hola");
};
```

Responde:

1. ¿Qué ejemplo funciona?
    
2. ¿Qué ejemplo produce un error?
    
3. ¿Qué diferencia existe entre declarar una función y almacenarla en una constante?
    
4. ¿Qué relación tiene este comportamiento con el hoisting?
    

### Actividad 6. Aplicación práctica

Crea un programa que gestione información de un alumno.

Requisitos:

1. Declara una variable global llamada `centro`.
    
2. Crea una función `mostrarAlumno()`.
    
3. Dentro de la función declara una variable `nombre`.
    
4. Dentro de la función declara una variable `nota`.
    
5. Muestra los tres datos desde la función.
    
6. Intenta mostrar `nombre` y `nota` fuera de la función.
    
7. Explica por qué se producen los errores correspondientes.
    

## 5. Material necesario

- Visual Studio Code.
    
- Navegador web.
    
- Consola de desarrollador.
    
- Conocimientos sobre variables y constantes.
    

## 6. Resumen para estudiar

|Concepto|Explicación|
|---|---|
|Scope|Ámbito desde el que se puede acceder a una variable|
|Ámbito global|Variable accesible desde diferentes partes del programa dentro de su ámbito|
|Ámbito de función|Variable accesible dentro de la función donde se declara|
|Ámbito de bloque|Variable accesible dentro del bloque donde se declara|
|Hoisting|Procesamiento de declaraciones antes de ejecutar el código|
|TDZ|Periodo en el que una variable `let` o `const` todavía no puede utilizarse|
|`undefined`|Valor de una variable declarada con `var` que todavía no ha sido inicializada|

**Diferencias fundamentales:**

```
// var: ámbito de función o global
if (true) {
    var a = 10;
}

console.log(a); // 10

// let: ámbito de bloque
if (true) {
    let b = 20;
}

console.log(b); // ReferenceError
```

**Hoisting:**

```
console.log(a);
var a = 10; // undefined
```

```
console.log(b);
let b = 20; // ReferenceError
```

**Funciones:**

```
saludar();

function saludar() {
    console.log("Hola");
}
```

La declaración tradicional de función puede invocarse antes de aparecer en el código.

## 7. Errores habituales

- Pensar que todas las variables son globales.
    
- Confundir ámbito de función y ámbito de bloque.
    
- Creer que `var` tiene ámbito de bloque.
    
- Pensar que `let` y `const` se comportan igual que `var` durante el hoisting.
    
- Confundir `undefined` con un error.
    
- Intentar utilizar una variable dentro de su TDZ.
    
- Confundir una declaración de función con una función almacenada en una variable.
    
- Pensar que el hoisting mueve físicamente las líneas de código.
    

## 8. Autoevaluación

Responde sin consultar los apuntes.

1. ¿Qué es el ámbito de una variable?
    
2. ¿Qué diferencia existe entre ámbito global y ámbito de función?
    
3. ¿Qué es un bloque?
    
4. ¿Qué diferencia existe entre `var` y `let` respecto al ámbito?
    
5. ¿Qué es el hoisting?
    
6. ¿Qué valor muestra una variable `var` si se consulta antes de su inicialización?
    
7. ¿Qué sucede si consultamos una variable `let` antes de su declaración?
    
8. ¿Qué es la Temporal Dead Zone?
    
9. ¿Afecta la TDZ a `const`?
    
10. ¿Podemos invocar una función tradicional antes de su declaración?
    
11. ¿Podemos invocar una función flecha antes de inicializar la constante que la almacena?
    
12. ¿Por qué es recomendable declarar las variables antes de utilizarlas?
    

## 9. Preguntas tipo examen

**Pregunta 1.** ¿Qué tipo de ámbito tiene una variable declarada con `let` dentro de un bloque `if`?

a) Global.  
b) De bloque.  
c) De documento.  
d) Permanente.

**Pregunta 2.** ¿Qué sucede con una variable `var` consultada antes de su inicialización?

a) Produce siempre un `SyntaxError`.  
b) Devuelve `undefined`.  
c) Devuelve `null`.  
d) Se elimina automáticamente.

**Pregunta 3.** ¿Qué es el hoisting?

a) Un sistema para ordenar arrays.  
b) El procesamiento de declaraciones antes de ejecutar el código.  
c) Una forma de importar módulos.  
d) Un tipo de bucle.

**Pregunta 4.** ¿Qué ocurre al acceder a una variable `let` antes de su declaración?

a) Devuelve `undefined`.  
b) Devuelve `null`.  
c) Produce un `ReferenceError`.  
d) Se inicializa automáticamente.

**Pregunta 5.** ¿Qué declaración tiene ámbito de función en lugar de ámbito de bloque?

a) `let`.  
b) `const`.  
c) `var`.  
d) Todas tienen ámbito de bloque.

**Pregunta 6.** ¿Qué sucede con este código?

```
saludar();

function saludar() {
    console.log("Hola");
}
```

a) Produce un error.  
b) Muestra `Hola`.  
c) Muestra `undefined`.  
d) No ejecuta la función.

**Pregunta 7.** ¿Qué es la TDZ?

a) Un tipo de variable global.  
b) Un periodo en el que una variable `let` o `const` todavía no puede utilizarse.  
c) Una instrucción para importar módulos.  
d) Una función de JavaScript.

## 10. Qué debes dominar antes de continuar

- Comprendo qué es el ámbito de una variable.
    
- Distingo ámbito global, de función y de bloque.
    
- Sé explicar las diferencias entre `var`, `let` y `const` respecto al ámbito.
    
- Comprendo qué es el hoisting.
    
- Sé explicar por qué `var` puede devolver `undefined`.
    
- Comprendo por qué `let` y `const` producen un error antes de su declaración.
    
- Sé explicar qué es la TDZ.
    
- Distingo declaraciones de funciones y funciones almacenadas en variables.
    

---