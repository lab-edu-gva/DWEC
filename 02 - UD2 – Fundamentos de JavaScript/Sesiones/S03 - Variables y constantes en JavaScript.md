---

tipo: sesion  
asignatura: DWEC  
unidad: UD2 - Fundamentos de JavaScript  
numero_sesion: 3  
fecha:  
duracion: 55  
estado: pendiente  
resultado_aprendizaje: RA02  
criterios_evaluacion: []  
tags:

- DWEC
    
- JavaScript
    
- UD2
    
- variables
    
- constantes
    

---

# S03 - Variables y constantes en JavaScript

## 1. Objetivos de la sesión

Al finalizar esta sesión deberás ser capaz de:

- Comprender qué es una variable y para qué se utiliza.
    
- Declarar e inicializar variables en JavaScript.
    
- Diferenciar `let`, `const` y `var`.
    
- Modificar el valor almacenado en una variable.
    
- Identificar cuándo utilizar variables y cuándo constantes.
    
- Aplicar buenas prácticas al nombrar variables.
    
- Comprender cómo funcionan las constantes que almacenan objetos y arrays.
    

## 2. Relación curricular

Esta sesión introduce el almacenamiento y la gestión de datos mediante variables y constantes en JavaScript.

La relación definitiva con los resultados de aprendizaje y criterios de evaluación debe comprobarse con la programación didáctica oficial.

## 3. Contenidos

### 3.1. ¿Qué es una variable?

Una variable es un espacio identificado mediante un nombre que permite almacenar un dato durante la ejecución de un programa.

Por ejemplo, en una aplicación de gestión de alumnos podemos necesitar almacenar:

- El nombre de un alumno.
    
- Su edad.
    
- La nota de un examen.
    
- El número de alumnos matriculados.
    
- Si ha aprobado o suspendido.
    

Para ello utilizamos variables.

Ejemplo:

```
let nombre = "Carlos";
let edad = 20;
let nota = 8.5;
```

En este ejemplo hemos creado tres variables:

|Variable|Valor|Tipo de dato|
|---|---|---|
|`nombre`|`"Carlos"`|Texto|
|`edad`|`20`|Número|
|`nota`|`8.5`|Número|

Podemos utilizar posteriormente esos valores:

```
console.log(nombre);
console.log(edad);
console.log(nota);
```

### 3.2. Declaración e inicialización

Es importante diferenciar dos conceptos:

**Declarar una variable** consiste en crearla utilizando una palabra reservada.

```
let nombre;
```

**Inicializar una variable** consiste en asignarle un valor.

```
nombre = "Ana";
```

También podemos declarar e inicializar una variable en una única instrucción:

```
let nombre = "Ana";
```

Una variable declarada con `let` puede existir inicialmente sin tener un valor asignado. En ese caso, su valor será `undefined`.

Ejemplo:

```
let edad;

console.log(edad);
```

Resultado:

```
undefined
```

### 3.3. Declaración con let

La palabra reservada `let` permite declarar variables cuyo valor puede cambiar durante la ejecución del programa.

Ejemplo:

```
let puntos = 10;

console.log(puntos);

puntos = 15;

console.log(puntos);
```

Resultado:

```
10
15
```

Podemos modificar el valor tantas veces como necesitemos.

Otro ejemplo:

```
let temperatura = 20;

temperatura = 22;
temperatura = 25;

console.log(temperatura);
```

Resultado:

```
25
```

**Importante:** no necesitamos volver a escribir `let` cuando modificamos una variable que ya ha sido declarada.

Correcto:

```
let ciudad = "Valencia";

ciudad = "Madrid";
```

Incorrecto como forma de modificar una variable existente:

```
let ciudad = "Valencia";

let ciudad = "Madrid";
```

Este último código intenta declarar de nuevo la misma variable dentro del mismo ámbito y produce un error.

### 3.4. Declaración con const

La palabra reservada `const` permite declarar una variable cuyo valor no puede ser reasignado.

Ejemplo:

```
const IVA = 0.21;

console.log(IVA);
```

Si intentamos modificarla:

```
const IVA = 0.21;

IVA = 0.10;
```

JavaScript producirá un error porque estamos intentando asignar un nuevo valor a una constante.

Las constantes deben inicializarse en el momento de su declaración.

Incorrecto:

```
const nombre;
```

Correcto:

```
const nombre = "Laura";
```

Utilizaremos `const` cuando no necesitemos reasignar una variable.

Ejemplos habituales:

```
const PI = 3.141592;
const NOMBRE_CENTRO = "IES Ejemplo";
const URL_API = "https://api.ejemplo.com";
```

### 3.5. Diferencias entre let y const

|Característica|let|const|
|---|---|---|
|Permite declarar variables|Sí|Sí|
|Exige inicialización inmediata|No|Sí|
|Permite cambiar el valor|Sí|No|
|Permite reasignación|Sí|No|
|Tiene ámbito de bloque|Sí|Sí|

Ejemplo:

```
let edad = 18;
edad = 19; // Correcto

const nombre = "María";
nombre = "Ana"; // Error
```

**Regla práctica:**

- Utiliza `const` por defecto.
    
- Utiliza `let` cuando necesites cambiar el valor.
    
- Evita utilizar `var` en código JavaScript moderno.
    

### 3.6. La palabra reservada var

Antes de la aparición de `let` y `const`, JavaScript utilizaba principalmente `var` para declarar variables.

Ejemplo:

```
var nombre = "Pedro";

nombre = "Carlos";

console.log(nombre);
```

Al igual que `let`, permite modificar el valor.

Sin embargo, `var` tiene diferencias importantes:

- Tiene ámbito de función o global, no de bloque.
    
- Permite volver a declarar una variable dentro del mismo ámbito.
    
- Su comportamiento de elevación de declaraciones puede provocar errores difíciles de detectar.
    

Ejemplo de redeclaración:

```
var edad = 20;
var edad = 25;

console.log(edad);
```

Este código funciona y muestra:

```
25
```

Con `let`, intentar declarar dos veces la misma variable en el mismo ámbito produce un error.

Por este motivo, en JavaScript moderno se recomienda utilizar `let` y `const`.

### 3.7. Normas para nombrar variables

Los nombres de variables deben cumplir determinadas reglas.

**Reglas principales:**

1. Pueden contener letras, números, guiones bajos y el símbolo `$`.
    
2. No pueden comenzar por un número.
    
3. No pueden contener espacios.
    
4. No pueden utilizar palabras reservadas de JavaScript.
    
5. Distinguen entre mayúsculas y minúsculas.
    

Ejemplos válidos:

```
let nombre;
let edadAlumno;
let nota1;
let numero_alumnos;
let $precio;
let _contador;
```

Ejemplos incorrectos:

```
let 1nombre;
let nombre alumno;
let let;
```

JavaScript diferencia mayúsculas y minúsculas.

Por tanto:

```
let nombre = "Ana";
let Nombre = "Carlos";

console.log(nombre);
console.log(Nombre);
```

Son dos variables diferentes.

### 3.8. Convenciones para nombrar variables

Aunque existen varias formas de nombrar variables, en JavaScript es habitual utilizar camelCase.

Ejemplo:

```
let nombreAlumno;
let notaFinal;
let numeroDeAlumnos;
let fechaNacimiento;
```

En camelCase:

- La primera palabra comienza en minúscula.
    
- Las siguientes palabras comienzan con mayúscula.
    
- No se utilizan espacios.
    

Para constantes que representan valores fijos conocidos antes de ejecutar el programa es habitual utilizar mayúsculas y guiones bajos:

```
const IVA = 0.21;
const MAX_INTENTOS = 3;
const NOMBRE_CENTRO = "IES Ejemplo";
```

Es recomendable utilizar nombres descriptivos.

Poco recomendable:

```
let x = 20;
let y = 8;
```

Más recomendable:

```
let edadAlumno = 20;
let notaExamen = 8;
```

Un buen nombre ayuda a comprender el código sin necesidad de añadir comentarios constantemente.

### 3.9. Constantes con objetos y arrays

Existe una particularidad importante de `const`.

Cuando declaramos un objeto o un array mediante `const`, no podemos reasignar la variable a otro objeto o array, pero sí podemos modificar su contenido.

Ejemplo con un objeto:

```
const alumno = {
    nombre: "Carlos",
    edad: 20
};

alumno.edad = 21;

console.log(alumno);
```

El código funciona porque no estamos reasignando la variable `alumno`, sino modificando una propiedad del objeto.

Sin embargo:

```
const alumno = {
    nombre: "Carlos",
    edad: 20
};

alumno = {
    nombre: "Ana",
    edad: 19
};
```

Produce un error porque intentamos asignar un objeto diferente a una constante.

Lo mismo ocurre con los arrays:

```
const notas = [7, 8, 9];

notas.push(10);

console.log(notas);
```

Resultado:

```
[7, 8, 9, 10]
```

Podemos modificar el contenido del array, pero no reasignar la variable:

```
const notas = [7, 8, 9];

notas = [5, 6, 7]; // Error
```

**Idea fundamental:** `const` impide reasignar la variable, pero no convierte automáticamente los objetos o arrays en estructuras inmutables.

## 4. Desarrollo práctico de la sesión

### Actividad 1. Crear y modificar variables

Escribe el siguiente código:

```
let nombre = "Laura";
let edad = 19;
let ciudad = "Valencia";

console.log(nombre);
console.log(edad);
console.log(ciudad);

edad = 20;
ciudad = "Alicante";

console.log("Datos actualizados:");
console.log(nombre);
console.log(edad);
console.log(ciudad);
```

Responde:

1. ¿Qué valores tienen inicialmente las variables?
    
2. ¿Qué valores tienen después de modificarlas?
    
3. ¿Por qué podemos modificar `edad` y `ciudad`?
    
4. ¿Qué ocurriría si hubiéramos declarado `edad` con `const`?
    

### Actividad 2. Utilizar constantes

Crea un pequeño programa para calcular el precio final de un producto.

Debes declarar:

- Una constante `IVA` con el valor `0.21`.
    
- Una variable `precioBase` con el valor `100`.
    
- Una variable `precioFinal` que almacene el resultado.
    

Calcula el precio final aplicando el IVA.

Muestra por consola:

```
Precio base: 100
IVA: 21%
Precio final: 121
```

Modifica el precio base y comprueba que el resultado cambia.

### Actividad 3. Detectar errores

Analiza el siguiente código:

```
let nombre = "Ana";
let edad = 20;

const ciudad = "Valencia";

nombre = "Carlos";
edad = 21;

ciudad = "Madrid";

let nota;
const IVA;

console.log(nombre);
console.log(edad);
console.log(ciudad);
```

Identifica todos los errores que encuentres y explica por qué se producen.

### Actividad 4. Gestionar datos de alumnos

Crea un programa que almacene la información de un alumno.

Debe contener:

- Una constante `CENTRO`.
    
- Una variable `nombreAlumno`.
    
- Una variable `edadAlumno`.
    
- Una variable `notaFinal`.
    
- Una constante `CURSO`.
    

Muestra todos los datos en la consola.

Después:

1. Modifica el nombre del alumno.
    
2. Modifica su nota.
    
3. Intenta modificar el centro.
    
4. Explica qué operaciones funcionan y cuáles producen errores.
    

### Actividad 5. Objetos y arrays con const

Crea el siguiente objeto:

```
const alumno = {
    nombre: "María",
    edad: 20,
    curso: "2º DAW"
};
```

Realiza las siguientes operaciones:

1. Cambia la edad del alumno.
    
2. Cambia el nombre.
    
3. Añade una propiedad llamada `nota`.
    
4. Intenta asignar un nuevo objeto a `alumno`.
    

Después crea un array:

```
const notas = [7, 8, 9];
```

Realiza estas operaciones:

1. Añade una nota con `push()`.
    
2. Modifica la primera nota.
    
3. Intenta asignar un nuevo array a `notas`.
    

Anota qué operaciones funcionan y cuáles generan errores.

## 5. Material necesario

- Visual Studio Code.
    
- Navegador web.
    
- Consola de desarrollador.
    
- Conocimientos básicos de HTML y JavaScript.
    

## 6. Resumen para estudiar

|Concepto|Explicación|
|---|---|
|Variable|Espacio identificado por un nombre que almacena un valor|
|Declaración|Creación de una variable|
|Inicialización|Asignación de su primer valor|
|`let`|Declara variables que pueden cambiar|
|`const`|Declara variables que no pueden reasignarse|
|`var`|Forma antigua de declarar variables|
|camelCase|Convención habitual para nombrar variables|
|`undefined`|Valor de una variable declarada sin inicializar|

Ejemplo:

```
let edad = 20;
edad = 21;

const nombre = "Carlos";

console.log(edad);
console.log(nombre);
```

Recuerda estas tres reglas:

1. Utiliza `const` cuando no necesites reasignar una variable.
    
2. Utiliza `let` cuando necesites cambiar su valor.
    
3. Evita `var` en código moderno.
    

## 7. Errores habituales

- Utilizar una variable sin haberla declarado.
    
- Intentar declarar dos veces una variable `let` en el mismo ámbito.
    
- Intentar modificar una constante.
    
- Declarar una constante sin inicializarla.
    
- Utilizar nombres que contienen espacios.
    
- Comenzar un nombre de variable por un número.
    
- Confundir mayúsculas y minúsculas.
    
- Pensar que un objeto declarado con `const` no puede modificarse.
    
- Utilizar nombres poco descriptivos.
    

## 8. Autoevaluación

Responde sin consultar los apuntes.

1. ¿Qué es una variable?
    
2. ¿Qué diferencia existe entre declarar e inicializar?
    
3. ¿Qué diferencia existe entre `let` y `const`?
    
4. ¿Qué ocurre si intentamos modificar una constante?
    
5. ¿Es obligatorio inicializar una variable declarada con `let`?
    
6. ¿Es obligatorio inicializar una constante?
    
7. ¿Qué problemas presenta `var` frente a `let`?
    
8. ¿Qué es camelCase?
    
9. ¿Por qué `nombre` y `Nombre` son variables diferentes?
    
10. ¿Podemos modificar una propiedad de un objeto declarado con `const`?
    
11. ¿Podemos añadir elementos a un array declarado con `const`?
    
12. ¿Podemos reasignar un objeto a una variable declarada con `const`?
    

## 9. Preguntas tipo examen

**Pregunta 1.** ¿Qué palabra reservada permite declarar una variable cuyo valor puede cambiar?

a) `const`  
b) `let`  
c) `static`  
d) `final`

**Pregunta 2.** ¿Cuál de las siguientes declaraciones es correcta?

a) `const edad;`  
b) `let 1nombre = "Ana";`  
c) `let edad = 20;`  
d) `const = 10;`

**Pregunta 3.** ¿Qué ocurre al intentar modificar una constante?

a) Se modifica normalmente.  
b) El navegador reinicia el programa.  
c) Se produce un error.  
d) La constante pasa a ser una variable.

**Pregunta 4.** ¿Qué convención de nombres es habitual en JavaScript?

a) snake_case exclusivamente.  
b) camelCase.  
c) PascalCase exclusivamente.  
d) Nombres con espacios.

**Pregunta 5.** ¿Qué ocurre en este código?

```
const notas = [5, 6, 7];
notas.push(8);
```

a) Se produce un error porque `const` no permite modificar arrays.  
b) Se añade correctamente el número 8.  
c) El array se convierte en una variable `let`.  
d) Se elimina el primer elemento.

**Pregunta 6.** ¿Cuál es la principal diferencia entre `var` y `let` respecto al ámbito?

a) `var` tiene ámbito de bloque y `let` global.  
b) `var` tiene ámbito de función y `let` de bloque.  
c) Ambos tienen exactamente el mismo ámbito.  
d) `let` solamente funciona dentro de funciones.

## 10. Qué debes dominar antes de continuar

- Sé explicar qué es una variable.
    
- Distingo declaración e inicialización.
    
- Sé utilizar `let`.
    
- Sé utilizar `const`.
    
- Comprendo las diferencias entre `var`, `let` y `const`.
    
- Sé nombrar variables correctamente.
    
- Utilizo camelCase.
    
- Comprendo qué sucede con los objetos y arrays declarados con `const`.
    
- Soy capaz de crear un programa que almacene y modifique datos.
    

---