---

tipo: sesion  
asignatura: DWEC  
unidad: UD2 - Fundamentos de JavaScript  
numero_sesion: 5  
fecha:  
duracion: 55  
estado: pendiente  
resultado_aprendizaje: RA02  
criterios_evaluacion: []  
tags:

- DWEC
    
- JavaScript
    
- UD2
    
- tipos-datos
    

---

# S05 - Tipos de datos en JavaScript

## 1. Objetivos de la sesión

Al finalizar esta sesión deberás ser capaz de:

- Comprender qué es un tipo de dato.
    
- Diferenciar los tipos de datos primitivos y los tipos de referencia.
    
- Identificar los principales tipos de datos de JavaScript.
    
- Utilizar el operador `typeof` para consultar tipos.
    
- Diferenciar `null` y `undefined`.
    
- Comprender cómo funcionan los arrays y los objetos.
    
- Identificar las particularidades de los números en JavaScript.
    

## 2. Relación curricular

Esta sesión trabaja la identificación, almacenamiento y utilización de los diferentes tipos de datos que proporciona JavaScript.

La relación definitiva con los resultados de aprendizaje y criterios de evaluación debe comprobarse con la programación didáctica oficial.

## 3. Contenidos

### 3.1. ¿Qué es un tipo de dato?

Un tipo de dato determina qué clase de información almacena una variable y qué operaciones podemos realizar con ella.

Por ejemplo, no es lo mismo almacenar:

- Un nombre.
    
- Una edad.
    
- Una cantidad de dinero.
    
- Si un usuario está conectado.
    
- Una lista de alumnos.
    

JavaScript dispone de diferentes tipos de datos para representar esta información.

Ejemplo:

```
let nombre = "Ana";
let edad = 20;
let precio = 19.95;
let activo = true;

console.log(nombre);
console.log(edad);
console.log(precio);
console.log(activo);
```

Cada variable contiene un tipo de información diferente.

### 3.2. Clasificación de los tipos de datos

Los tipos de datos de JavaScript se pueden dividir en dos grandes grupos:

**Tipos primitivos:**

- String.
    
- Number.
    
- BigInt.
    
- Boolean.
    
- Undefined.
    
- Null.
    
- Symbol.
    

**Tipos de referencia:**

- Objetos.
    
- Arrays.
    
- Funciones.
    
- Fechas y otras estructuras basadas en objetos.
    

Los tipos primitivos representan valores individuales. Los objetos permiten agrupar información y comportamientos.

### 3.3. String: cadenas de texto

El tipo `String` representa cadenas de caracteres.

Podemos utilizar comillas simples, dobles o comillas invertidas.

Ejemplos:

```
let nombre = "Carlos";
let apellido = 'García';
let ciudad = `Valencia`;
```

Las tres formas son válidas.

También podemos combinar texto y variables mediante plantillas literales (_template literals_).

```
let nombre = "Ana";
let edad = 20;

let mensaje = `Hola, me llamo ${nombre} y tengo ${edad} años`;

console.log(mensaje);
```

Resultado:

```
Hola, me llamo Ana y tengo 20 años
```

Las plantillas literales utilizan comillas invertidas y permiten insertar expresiones mediante `${ }`.

**Importante:** un número escrito entre comillas es texto, no un valor numérico.

```
let numero1 = 25;
let numero2 = "25";

console.log(typeof numero1);
console.log(typeof numero2);
```

Resultado:

```
number
string
```

### 3.4. Number: números

El tipo `Number` permite almacenar números enteros y decimales.

Ejemplos:

```
let edad = 20;
let precio = 19.95;
let temperatura = -5;
let resultado = 2.5;
```

JavaScript utiliza un único tipo `Number` para representar tanto números enteros como decimales habituales.

Podemos realizar operaciones matemáticas:

```
let numero1 = 10;
let numero2 = 5;

console.log(numero1 + numero2);
console.log(numero1 - numero2);
console.log(numero1 * numero2);
console.log(numero1 / numero2);
```

También existen valores numéricos especiales.

**NaN**

Significa _Not a Number_. Representa un resultado numérico inválido.

```
let resultado = "hola" / 2;

console.log(resultado);
```

Resultado:

```
NaN
```

Aunque su nombre significa que no es un número, `typeof NaN` devuelve `"number"`.

**Infinity**

Representa el infinito positivo o negativo.

```
console.log(10 / 0);
console.log(-10 / 0);
```

Resultado:

```
Infinity
-Infinity
```

### 3.5. BigInt: números enteros grandes

El tipo `BigInt` permite representar números enteros de tamaño arbitrario, más allá del límite de precisión de los números enteros seguros de `Number`.

Se crea añadiendo una `n` al final del número:

```
let numeroGrande = 123456789012345678901234567890n;

console.log(numeroGrande);
console.log(typeof numeroGrande);
```

Resultado:

```
123456789012345678901234567890n
bigint
```

Podemos realizar operaciones matemáticas con valores `BigInt`:

```
let numero1 = 100n;
let numero2 = 200n;

console.log(numero1 + numero2);
```

Resultado:

```
300n
```

**Importante:** no podemos mezclar directamente valores `Number` y `BigInt` en operaciones aritméticas.

Incorrecto:

```
let numero1 = 10;
let numero2 = 20n;

console.log(numero1 + numero2);
```

Para realizar la operación debemos convertirlos a un mismo tipo:

```
let numero1 = 10;
let numero2 = 20n;

console.log(BigInt(numero1) + numero2);
```

### 3.6. Boolean: valores lógicos

El tipo `Boolean` solamente admite dos valores:

- `true`: verdadero.
    
- `false`: falso.
    

Se utiliza habitualmente para representar condiciones.

Ejemplo:

```
let usuarioActivo = true;
let tienePermiso = false;

console.log(usuarioActivo);
console.log(tienePermiso);
```

También podemos obtener valores booleanos mediante comparaciones:

```
let edad = 20;

console.log(edad >= 18);
console.log(edad < 18);
```

Resultado:

```
true
false
```

Los valores booleanos serán especialmente importantes cuando trabajemos con condicionales.

### 3.7. Undefined

El tipo `undefined` representa una variable que ha sido declarada, pero todavía no tiene asignado ningún valor.

Ejemplo:

```
let nombre;

console.log(nombre);
console.log(typeof nombre);
```

Resultado:

```
undefined
undefined
```

También podemos asignar explícitamente el valor `undefined`:

```
let edad = undefined;

console.log(edad);
```

Aunque es posible, normalmente dejamos que JavaScript utilice este valor cuando una variable todavía no ha sido inicializada.

### 3.8. Null

El valor `null` representa la ausencia intencionada de un valor.

Ejemplo:

```
let usuario = null;

console.log(usuario);
```

Podemos utilizarlo cuando queremos indicar que una variable no contiene actualmente un objeto o dato.

Ejemplo:

```
let alumno = {
    nombre: "Laura",
    edad: 20
};

alumno = null;
```

Ahora `alumno` no contiene una referencia al objeto anterior.

**Una particularidad importante:**

```
console.log(typeof null);
```

Resultado:

```
object
```

Esto es una particularidad histórica de JavaScript. Aunque `null` es un valor primitivo, el operador `typeof` devuelve `"object"`.

### 3.9. Diferencias entre null y undefined

Aunque ambos pueden representar ausencia de información, no significan exactamente lo mismo.

|Característica|undefined|null|
|---|---|---|
|Significado|Valor no asignado|Ausencia intencionada|
|Uso habitual|Variable sin inicializar|Valor vacío asignado expresamente|
|Tipo con typeof|`"undefined"`|`"object"`|
|Asignación|Puede aparecer automáticamente|Normalmente se asigna expresamente|

Ejemplo:

```
let nombre;
let apellido = null;

console.log(nombre);
console.log(apellido);
```

Resultado:

```
undefined
null
```

### 3.10. Symbol

El tipo `Symbol` permite crear valores únicos que pueden utilizarse, por ejemplo, como identificadores de propiedades de objetos.

Ejemplo:

```
const identificador1 = Symbol("id");
const identificador2 = Symbol("id");

console.log(identificador1 === identificador2);
```

Resultado:

```
false
```

Aunque ambos símbolos tienen la misma descripción, son valores diferentes y únicos.

Se utiliza especialmente en determinadas situaciones de programación avanzada.

### 3.11. Objetos

Los objetos permiten agrupar información relacionada mediante propiedades.

Ejemplo:

```
const alumno = {
    nombre: "Carlos",
    edad: 20,
    curso: "2º DAW",
    activo: true
};
```

Cada propiedad tiene un nombre y un valor.

Podemos acceder a sus propiedades mediante el punto:

```
console.log(alumno.nombre);
console.log(alumno.edad);
console.log(alumno.curso);
```

También podemos utilizar corchetes:

```
console.log(alumno["nombre"]);
```

Podemos modificar sus propiedades:

```
alumno.edad = 21;

console.log(alumno.edad);
```

Los objetos permiten representar elementos del mundo real dentro de nuestros programas.

### 3.12. Arrays

Los arrays permiten almacenar varios valores dentro de una única estructura ordenada.

Ejemplo:

```
const notas = [7, 8, 9, 6];

console.log(notas);
```

Cada elemento ocupa una posición denominada índice.

Los índices empiezan en cero:

|Índice|Valor|
|---|---|
|0|7|
|1|8|
|2|9|
|3|6|

Para acceder a un elemento:

```
console.log(notas[0]);
console.log(notas[2]);
```

Resultado:

```
7
9
```

Podemos modificar los elementos:

```
notas[0] = 10;

console.log(notas);
```

También podemos almacenar diferentes tipos de datos:

```
const datos = [
    "Ana",
    20,
    true,
    null
];
```

Aunque JavaScript lo permite, en aplicaciones bien organizadas suele ser preferible mantener una estructura coherente.

### 3.13. El operador typeof

El operador `typeof` permite conocer el tipo de dato de un valor.

Ejemplo:

```
let nombre = "Ana";
let edad = 20;
let activo = true;
let dato;

console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof activo);
console.log(typeof dato);
```

Resultado:

```
string
number
boolean
undefined
```

Otros ejemplos:

```
console.log(typeof 25);
console.log(typeof "Hola");
console.log(typeof true);
console.log(typeof 100n);
console.log(typeof Symbol("id"));
console.log(typeof null);
console.log(typeof {});
```

Resultado:

```
number
string
boolean
bigint
symbol
object
object
```

**Importante:** `typeof` devuelve `"object"` tanto para `null` como para arrays y objetos normales.

Para comprobar si un valor es un array debemos utilizar:

```
const notas = [7, 8, 9];

console.log(Array.isArray(notas));
```

Resultado:

```
true
```

## 4. Desarrollo práctico de la sesión

### Actividad 1. Identificar tipos de datos

Crea un archivo JavaScript y declara las siguientes variables:

```
let nombre = "Laura";
let edad = 19;
let altura = 1.68;
let activo = true;
let telefono = null;
let direccion;
let numeroGrande = 12345678901234567890n;
let identificador = Symbol("usuario");
```

Utiliza `console.log()` y `typeof` para mostrar el valor y el tipo de cada variable.

Responde:

1. ¿Qué tipo tiene `nombre`?
    
2. ¿Qué tipo tiene `edad`?
    
3. ¿Qué tipo tiene `altura`?
    
4. ¿Qué tipo tiene `activo`?
    
5. ¿Qué devuelve `typeof telefono`?
    
6. ¿Qué tipo tiene `direccion`?
    
7. ¿Qué diferencia existe entre `telefono` y `direccion`?
    

### Actividad 2. Analizar valores

Indica qué resultado devuelve cada instrucción:

```
console.log(typeof "JavaScript");
console.log(typeof 100);
console.log(typeof 10.5);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof 100n);
console.log(typeof []);
console.log(typeof {});
```

Comprueba posteriormente las respuestas en el navegador.

### Actividad 3. Crear un objeto alumno

Crea un objeto llamado `alumno` con las siguientes propiedades:

- `nombre`.
    
- `apellidos`.
    
- `edad`.
    
- `curso`.
    
- `activo`.
    
- `nota`.
    

Después:

1. Muestra todas las propiedades.
    
2. Muestra únicamente el nombre.
    
3. Modifica la edad.
    
4. Modifica la nota.
    
5. Añade una propiedad llamada `ciudad`.
    
6. Comprueba el tipo de dato del objeto.
    

### Actividad 4. Trabajar con arrays

Crea un array llamado `notas` con cinco calificaciones.

Ejemplo:

```
const notas = [6, 8, 7, 9, 5];
```

Realiza las siguientes operaciones:

1. Muestra el array completo.
    
2. Muestra el primer elemento.
    
3. Muestra el último elemento.
    
4. Modifica la segunda nota.
    
5. Añade una nueva nota.
    
6. Comprueba si la variable es un array utilizando `Array.isArray()`.
    

### Actividad 5. Detectar diferencias

Analiza el siguiente código:

```
let nombre;
let apellido = null;

console.log(nombre);
console.log(apellido);

console.log(typeof nombre);
console.log(typeof apellido);
```

Responde:

1. ¿Qué valor tiene `nombre`?
    
2. ¿Qué valor tiene `apellido`?
    
3. ¿Por qué son diferentes?
    
4. ¿Qué devuelve `typeof` en cada caso?
    
5. ¿Por qué `typeof null` devuelve `"object"`?
    

### Actividad 6. Ficha de un producto

Crea un objeto llamado `producto` con estas propiedades:

- `nombre`: texto.
    
- `precio`: número.
    
- `disponible`: booleano.
    
- `codigo`: texto.
    
- `descuento`: número.
    

Después:

1. Muestra todos los datos.
    
2. Muestra el tipo de cada propiedad.
    
3. Modifica el precio.
    
4. Cambia la disponibilidad.
    
5. Añade una propiedad llamada `stock`.
    
6. Comprueba el tipo de dato del objeto.
    

## 5. Material necesario

- Visual Studio Code.
    
- Navegador web.
    
- Consola de desarrollador.
    
- Conocimientos sobre variables y constantes.
    

## 6. Resumen para estudiar

|Tipo|Ejemplo|typeof|
|---|---|---|
|String|`"Hola"`|`"string"`|
|Number|`25`|`"number"`|
|BigInt|`25n`|`"bigint"`|
|Boolean|`true`|`"boolean"`|
|Undefined|`undefined`|`"undefined"`|
|Null|`null`|`"object"`|
|Symbol|`Symbol("id")`|`"symbol"`|
|Object|`{ nombre: "Ana" }`|`"object"`|
|Array|`[1, 2, 3]`|`"object"`|

**Conceptos fundamentales:**

- JavaScript dispone de siete tipos primitivos.
    
- `String` almacena texto.
    
- `Number` almacena números enteros y decimales habituales.
    
- `BigInt` permite representar enteros grandes.
    
- `Boolean` almacena `true` o `false`.
    
- `undefined` representa un valor no asignado.
    
- `null` representa una ausencia intencionada de valor.
    
- `Symbol` permite crear identificadores únicos.
    
- Los objetos agrupan información mediante propiedades.
    
- Los arrays almacenan colecciones ordenadas.
    
- `typeof` permite consultar el tipo de un valor.
    
- `Array.isArray()` permite comprobar si un valor es un array.
    

## 7. Errores habituales

- Confundir un número con una cadena numérica.
    
- Pensar que `null` y `undefined` significan exactamente lo mismo.
    
- Creer que `typeof null` devuelve `"null"`.
    
- Pensar que los arrays tienen el tipo `"array"` al utilizar `typeof`.
    
- Olvidar que los índices de los arrays empiezan en cero.
    
- Confundir `true` y `"true"`.
    
- Intentar mezclar directamente `Number` y `BigInt` en operaciones aritméticas.
    
- Pensar que los objetos y arrays son tipos primitivos.
    

## 8. Autoevaluación

Responde sin consultar los apuntes.

1. ¿Qué es un tipo de dato?
    
2. ¿Cuáles son los siete tipos primitivos de JavaScript?
    
3. ¿Qué diferencia existe entre `String` y `Number`?
    
4. ¿Qué diferencia existe entre `Number` y `BigInt`?
    
5. ¿Qué valores puede almacenar un `Boolean`?
    
6. ¿Qué significa `undefined`?
    
7. ¿Qué significa `null`?
    
8. ¿Qué diferencia existe entre `null` y `undefined`?
    
9. ¿Para qué sirve `Symbol`?
    
10. ¿Qué es un objeto?
    
11. ¿Qué es un array?
    
12. ¿Qué devuelve `typeof null`?
    
13. ¿Qué devuelve `typeof []`?
    
14. ¿Para qué sirve `Array.isArray()`?
    
15. ¿Cómo podemos conocer el tipo de una variable?
    

## 9. Preguntas tipo examen

**Pregunta 1.** ¿Qué tipo de dato representa una cadena de texto?

a) Number.  
b) String.  
c) Boolean.  
d) Object.

**Pregunta 2.** ¿Qué devuelve `typeof 25`?

a) `"integer"`.  
b) `"float"`.  
c) `"number"`.  
d) `"numeric"`.

**Pregunta 3.** ¿Qué valor representa una ausencia intencionada de información?

a) undefined.  
b) null.  
c) false.  
d) NaN.

**Pregunta 4.** ¿Qué devuelve `typeof null`?

a) `"null"`.  
b) `"undefined"`.  
c) `"object"`.  
d) `"boolean"`.

**Pregunta 5.** ¿Qué tipo de dato permite representar enteros grandes?

a) Number.  
b) BigInt.  
c) String.  
d) Symbol.

**Pregunta 6.** ¿Qué devuelve `typeof []`?

a) `"array"`.  
b) `"list"`.  
c) `"object"`.  
d) `"undefined"`.

**Pregunta 7.** ¿Qué método permite comprobar si un valor es un array?

a) `typeof()`.  
b) `isArray()`.  
c) `Array.isArray()`.  
d) `Object.isArray()`.

**Pregunta 8.** ¿Qué valores puede almacenar un Boolean?

a) 0 y 1 exclusivamente.  
b) true y false.  
c) null y undefined.  
d) Texto y números.

## 10. Qué debes dominar antes de continuar

- Sé identificar los tipos de datos primitivos.
    
- Distingo String y Number.
    
- Comprendo la utilidad de BigInt.
    
- Sé utilizar valores booleanos.
    
- Distingo null y undefined.
    
- Comprendo para qué sirve Symbol.
    
- Sé crear y utilizar objetos.
    
- Sé crear y utilizar arrays.
    
- Sé consultar tipos mediante typeof.
    
- Sé comprobar arrays mediante Array.isArray().
    

---