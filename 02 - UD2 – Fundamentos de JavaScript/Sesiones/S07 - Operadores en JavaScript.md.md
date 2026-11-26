---

tipo: sesion  
asignatura: DWEC  
unidad: UD2 - Fundamentos de JavaScript  
numero_sesion: 7  
fecha:  
duracion: 55  
estado: pendiente  
resultado_aprendizaje: RA02  
criterios_evaluacion: []  
tags:

- dwec
    
- javascript
    
- ud2
    
- operadores
    

---

# S07 - Operadores en JavaScript

## 1. Objetivos de la sesión

Al finalizar esta sesión deberás ser capaz de:

- Identificar los diferentes tipos de operadores de JavaScript.
    
- Realizar operaciones aritméticas.
    
- Utilizar operadores de asignación.
    
- Comparar valores mediante operadores relacionales.
    
- Construir expresiones lógicas.
    
- Comprender el funcionamiento de los operadores de incremento y decremento.
    
- Aplicar la precedencia de operadores para interpretar expresiones.
    

## 2. Relación curricular

- **Resultado de aprendizaje:** RA02 (referencia provisional).
    
- **Criterios de evaluación:** pendientes de contrastar con la programación didáctica oficial.
    

Esta sesión trabaja la utilización de operadores y expresiones en JavaScript para construir programas que realicen cálculos y tomen decisiones.

## 3. Contenidos

### 3.1. ¿Qué es un operador?

Un operador es un símbolo o palabra que permite realizar una operación sobre uno o varios valores.

Por ejemplo:

```
let resultado = 10 + 5;
```

En esta expresión:

- `10` y `5` son operandos.
    
- `+` es el operador.
    
- `resultado` almacena el valor obtenido.
    

JavaScript dispone de diferentes familias de operadores.

### 3.2. Operadores aritméticos

Permiten realizar operaciones matemáticas.

|Operador|Operación|Ejemplo|Resultado|
|---|---|---|---|
|`+`|Suma|`10 + 5`|`15`|
|`-`|Resta|`10 - 5`|`5`|
|`*`|Multiplicación|`10 * 5`|`50`|
|`/`|División|`10 / 5`|`2`|
|`%`|Resto|`10 % 3`|`1`|
|`**`|Potencia|`2 ** 3`|`8`|

#### El operador módulo (%)

El operador `%` devuelve el resto de una división.

```
console.log(10 % 3); // 1
console.log(15 % 4); // 3
console.log(20 % 5); // 0
```

Una aplicación muy habitual es comprobar si un número es par:

```
let numero = 8;

if (numero % 2 === 0) {
    console.log("El número es par");
} else {
    console.log("El número es impar");
}
```

Si el resto de dividir entre 2 es cero, el número es par.

#### El operador de potencia (**)

Permite elevar un número a otro.

```
console.log(2 ** 3); // 8
console.log(5 ** 2); // 25
console.log(10 ** 3); // 1000
```

### 3.3. Operadores de asignación

Permiten asignar valores a variables.

El operador básico es `=`:

```
let edad = 20;
```

También existen operadores de asignación compuesta:

|Operador|Equivalencia|
|---|---|
|`x += 5`|`x = x + 5`|
|`x -= 5`|`x = x - 5`|
|`x *= 5`|`x = x * 5`|
|`x /= 5`|`x = x / 5`|
|`x %= 5`|`x = x % 5`|
|`x **= 2`|`x = x ** 2`|

Ejemplo:

```
let puntos = 10;

puntos += 5;
console.log(puntos); // 15

puntos *= 2;
console.log(puntos); // 30

puntos -= 10;
console.log(puntos); // 20
```

Estos operadores permiten modificar el valor de una variable de forma más compacta.

### 3.4. Operadores de incremento y decremento

Permiten aumentar o disminuir una unidad el valor de una variable.

- `++`: incrementa en uno.
    
- `--`: decrementa en uno.
    

Ejemplo:

```
let contador = 5;

contador++;

console.log(contador); // 6

contador--;

console.log(contador); // 5
```

#### Diferencia entre prefijo y sufijo

Es importante distinguir dónde se coloca el operador.

**Postincremento:**

```
let numero = 5;

let resultado = numero++;

console.log(resultado); // 5
console.log(numero);    // 6
```

Primero se utiliza el valor y después se incrementa.

**Preincremento:**

```
let numero = 5;

let resultado = ++numero;

console.log(resultado); // 6
console.log(numero);    // 6
```

Primero se incrementa el valor y después se utiliza.

Lo mismo sucede con `--`.

### 3.5. Operadores de comparación

Permiten comparar dos valores. El resultado siempre es un booleano: `true` o `false`.

|Operador|Significado|
|---|---|
|`==`|Igualdad no estricta|
|`===`|Igualdad estricta|
|`!=`|Desigualdad no estricta|
|`!==`|Desigualdad estricta|
|`>`|Mayor que|
|`<`|Menor que|
|`>=`|Mayor o igual que|
|`<=`|Menor o igual que|

Ejemplos:

```
console.log(10 > 5);     // true
console.log(10 < 5);     // false
console.log(10 >= 10);   // true
console.log(10 <= 9);    // false
console.log(10 === 10);  // true
console.log(10 !== 5);   // true
```

Recuerda que `===` compara tanto el valor como el tipo de dato.

```
console.log(5 == "5");  // true
console.log(5 === "5"); // false
```

**Buena práctica:** utiliza `===` y `!==` siempre que sea posible.

### 3.6. Operadores lógicos

Permiten combinar varias condiciones.

Los tres operadores lógicos principales son:

|Operador|Nombre|Significado|
|---|---|---|
|`&&`|AND|Y|
|`||`|OR|O|
|`!`|NOT|Negación|

#### AND (&&)

Devuelve `true` cuando todas las condiciones son verdaderas.

```
let edad = 25;
let tieneCarnet = true;

console.log(edad >= 18 && tieneCarnet); // true
```

Tabla de verdad:

|A|B|A && B|
|---|---|---|
|true|true|true|
|true|false|false|
|false|true|false|
|false|false|false|

#### OR (||)

Devuelve `true` cuando al menos una condición es verdadera.

```
let esFinDeSemana = false;
let esFestivo = true;

console.log(esFinDeSemana || esFestivo); // true
```

Tabla de verdad:

|A|B|A \| B|
|---|---|---|
|true|true|true|
|true|false|true|
|false|true|true|
|false|false|false|

#### NOT (!)

Invierte el valor booleano.

```
let activo = true;

console.log(!activo); // false
```

También puede utilizarse para comprobar condiciones:

```
let conectado = false;

if (!conectado) {
    console.log("No hay conexión");
}
```

### 3.7. Cortocircuito lógico

Los operadores `&&` y `||` utilizan evaluación de cortocircuito.

Esto significa que JavaScript puede dejar de evaluar una expresión cuando ya conoce el resultado.

Con `&&`, si la primera condición es falsa, no necesita comprobar la segunda.

```
let edad = 15;

edad >= 18 && console.log("Acceso permitido");
```

Con `||`, si la primera condición es verdadera, no necesita comprobar la segunda.

```
let usuarioRegistrado = true;

usuarioRegistrado || console.log("Debes registrarte");
```

Este comportamiento también se utiliza para proporcionar valores alternativos:

```
let nombre = "";

let nombreMostrar = nombre || "Usuario desconocido";

console.log(nombreMostrar);
```

En este caso se muestra `Usuario desconocido`, porque una cadena vacía es falsy.

### 3.8. Operador ternario

El operador ternario permite escribir una condición sencilla en una sola expresión.

Su estructura es:

```
condicion ? valorSiVerdadero : valorSiFalso;
```

Ejemplo:

```
let edad = 20;

let mensaje = edad >= 18
    ? "Mayor de edad"
    : "Menor de edad";

console.log(mensaje);
```

Es equivalente a:

```
let edad = 20;
let mensaje;

if (edad >= 18) {
    mensaje = "Mayor de edad";
} else {
    mensaje = "Menor de edad";
}

console.log(mensaje);
```

Utiliza el ternario para condiciones sencillas. Si la lógica es compleja, es preferible utilizar `if...else`.

### 3.9. Operador nullish coalescing (??)

Este operador devuelve el valor de la derecha cuando el de la izquierda es `null` o `undefined`.

```
let nombre = null;

let nombreFinal = nombre ?? "Invitado";

console.log(nombreFinal); // Invitado
```

Su diferencia con `||` es importante:

```
let puntos = 0;

console.log(puntos || 100); // 100
console.log(puntos ?? 100); // 0
```

- `||` utiliza el valor alternativo cuando el valor de la izquierda es falsy.
    
- `??` solo utiliza el valor alternativo cuando es `null` o `undefined`.
    

### 3.10. Precedencia de operadores

Cuando una expresión contiene varios operadores, JavaScript sigue unas reglas de precedencia para decidir qué operaciones realizar primero.

Ejemplo:

```
let resultado = 10 + 5 * 2;

console.log(resultado); // 20
```

Primero se realiza la multiplicación y después la suma.

Podemos modificar el orden utilizando paréntesis:

```
let resultado = (10 + 5) * 2;

console.log(resultado); // 30
```

Orden general de precedencia, de mayor a menor:

|Prioridad|Operadores|
|---|---|
|1|`()`|
|2|`++`, `--` (según posición)|
|3|`**`|
|4|`*`, `/`, `%`|
|5|`+`, `-`|
|6|`<`, `>`, `<=`, `>=`|
|7|`==`, `===`, `!=`, `!==`|
|8|`&&`|
|9|`||`|
|10|`??`|
|11|`?:`|
|12|`=`, `+=`, `-=`, etc.|

Esta tabla es una referencia general. Para evitar errores, utiliza paréntesis cuando una expresión pueda resultar ambigua.

## 4. Desarrollo práctico

### Ejercicio 1. Operaciones aritméticas

Crea un archivo llamado `ejercicio1.js`.

Declara dos variables:

```
let numero1 = 15;
let numero2 = 4;
```

Muestra por consola:

1. La suma.
    
2. La resta.
    
3. La multiplicación.
    
4. La división.
    
5. El resto de la división.
    
6. La potencia de `numero1` elevado a `numero2`.
    

### Ejercicio 2. Operadores de asignación

Crea una variable:

```
let saldo = 100;
```

Realiza las siguientes operaciones utilizando asignación compuesta:

1. Añade 50 al saldo.
    
2. Resta 20.
    
3. Multiplica el saldo por 2.
    
4. Divide el saldo entre 4.
    
5. Calcula el resto de dividir el saldo entre 7.
    

Muestra el saldo después de cada operación.

### Ejercicio 3. Incremento y decremento

Analiza el siguiente código:

```
let contador = 10;

console.log(contador++);
console.log(++contador);
console.log(contador--);
console.log(--contador);
console.log(contador);
```

Escribe en tu cuaderno el resultado de cada instrucción antes de ejecutarla.

Después, comprueba tus respuestas en el navegador.

### Ejercicio 4. Comprobar si un número es par

Solicita un número mediante `prompt()`.

Convierte el resultado a número y comprueba si es par o impar utilizando el operador `%`.

El programa debe mostrar uno de estos mensajes:

- El número es par.
    
- El número es impar.
    

Controla también que la entrada sea válida.

### Ejercicio 5. Acceso a una plataforma

Crea un programa que solicite:

- La edad del usuario.
    
- Si tiene una cuenta activa.
    

El acceso estará permitido cuando:

- El usuario tenga 18 años o más.
    
- Y tenga una cuenta activa.
    

Utiliza operadores lógicos y muestra el resultado.

### Ejercicio 6. Descuento en una compra

Una tienda aplica las siguientes condiciones:

- Si la compra supera los 100 euros, aplica un descuento del 15 %.
    
- Si no supera los 100 euros, no aplica descuento.
    

Solicita el importe mediante `prompt()` y calcula el total utilizando operadores aritméticos y una condición.

### Ejercicio 7. Operador ternario

Solicita una nota entre 0 y 10.

Utiliza el operador ternario para mostrar:

- `Aprobado` si la nota es igual o superior a 5.
    
- `Suspenso` si la nota es inferior a 5.
    

Comprueba que la nota introducida sea válida y esté dentro del intervalo permitido.

### Ejercicio 8. Precedencia de operadores

Calcula mentalmente el resultado de estas expresiones antes de ejecutarlas:

```
console.log(5 + 3 * 2);
console.log((5 + 3) * 2);
console.log(20 / 2 + 3);
console.log(20 / (2 + 3));
console.log(10 % 3 + 4 * 2);
console.log(2 ** 3 * 2);
```

Explica qué operaciones se realizan primero.

## 5. Material necesario

- Editor de código.
    
- Navegador web.
    
- Consola de desarrollador.
    
- Conocimientos de variables, tipos de datos y conversiones.
    

Estructura recomendada:

```
UD2/
└── S07/
    ├── index.html
    └── ejercicio1.js
```

Plantilla HTML:

```
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Operadores JavaScript</title>
</head>
<body>

    <h1>Práctica de operadores</h1>

    <script src="ejercicio1.js"></script>
</body>
</html>
```

## 6. Resumen de la sesión

|Familia|Operadores principales|
|---|---|
|Aritméticos|`+`, `-`, `*`, `/`, `%`, `**`|
|Asignación|`=`, `+=`, `-=`, `*=`, `/=`|
|Incremento y decremento|`++`, `--`|
|Comparación|`===`, `!==`, `>`, `<`, `>=`, `<=`|
|Lógicos|`&&`, `||`,` !`|
|Ternario|`? :`|
|Nullish coalescing|`??`|

Ideas fundamentales:

1. Los operadores aritméticos realizan cálculos.
    
2. Los operadores de comparación devuelven valores booleanos.
    
3. Los operadores lógicos permiten combinar condiciones.
    
4. El operador ternario simplifica condiciones sencillas.
    
5. Los paréntesis permiten controlar el orden de las operaciones.
    

## 7. Errores habituales

- Confundir `=` con `==` o `===`.
    
- Utilizar `==` cuando necesitamos comparar también el tipo.
    
- Confundir `&&` con `||`.
    
- Olvidar que `%` devuelve el resto de una división.
    
- No distinguir entre `contador++` y `++contador`.
    
- Pensar que las operaciones se realizan siempre de izquierda a derecha.
    
- No utilizar paréntesis cuando una expresión es compleja.
    
- Confundir `||` con `??`.
    
- Utilizar operadores ternarios para condiciones excesivamente complejas.
    

## 8. Autoevaluación

Indica si las siguientes afirmaciones son verdaderas o falsas.

1. El operador `%` devuelve el resto de una división.
    
2. El operador `**` permite calcular potencias.
    
3. `x += 5` equivale a `x = x + 5`.
    
4. `++x` y `x++` siempre devuelven el mismo resultado en una expresión.
    
5. Los operadores de comparación devuelven un booleano.
    
6. `&&` devuelve verdadero cuando al menos una condición es verdadera.
    
7. `||` devuelve verdadero cuando al menos una condición es verdadera.
    
8. El operador `!` invierte un valor booleano.
    
9. El operador ternario permite expresar una condición en una sola expresión.
    
10. `??` utiliza el valor alternativo cuando el valor original es `null` o `undefined`.
    

## 9. Preguntas tipo examen

**Pregunta 1.** Explica la diferencia entre los operadores `=` y `===`.

**Pregunta 2.** ¿Qué resultado devuelve esta expresión?

```
console.log(15 % 4);
```

**Pregunta 3.** Explica la diferencia entre `++contador` y `contador++`.

**Pregunta 4.** ¿Qué resultado devuelve el siguiente código?

```
let x = 10;
x += 5;
x *= 2;

console.log(x);
```

**Pregunta 5.** ¿Qué diferencia existe entre los operadores `&&` y `||`?

**Pregunta 6.** ¿Qué resultado devuelve esta expresión?

```
console.log(10 > 5 && 3 < 2);
```

**Pregunta 7.** Transforma el siguiente condicional en un operador ternario:

```
let edad = 20;
let mensaje;

if (edad >= 18) {
    mensaje = "Mayor de edad";
} else {
    mensaje = "Menor de edad";
}
```

**Pregunta 8.** ¿Qué diferencia existe entre `||` y `??`?

**Pregunta 9.** ¿Qué resultado devuelve esta expresión y por qué?

```
console.log(5 + 3 * 2);
```

**Pregunta 10.** Escribe una condición que compruebe que una persona tiene entre 18 y 65 años, ambos incluidos.

## 10. Checklist de dominio

- Identifico los operadores aritméticos.
    
- Utilizo correctamente el operador módulo.
    
- Realizo asignaciones compuestas.
    
- Distingo entre prefijo y sufijo en incremento y decremento.
    
- Utilizo operadores de comparación.
    
- Combino condiciones mediante `&&` y `||`.
    
- Utilizo el operador de negación `!`.
    
- Construyo expresiones con el operador ternario.
    
- Comprendo la diferencia entre `||` y `??`.
    
- Interpreto expresiones teniendo en cuenta la precedencia.
    

**Objetivo final:** ser capaz de construir expresiones JavaScript que realicen cálculos, comparen valores y combinen condiciones de forma correcta.