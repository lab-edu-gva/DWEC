---

tipo: sesion  
asignatura: DWEC  
unidad: UD2 - Fundamentos de JavaScript  
numero_sesion: 9  
fecha:  
duracion: 55  
estado: pendiente  
resultado_aprendizaje: RA02  
criterios_evaluacion: []  
tags:

- dwec
    
- javascript
    
- ud2
    
- condicionales
    
- control-flujo
    

---

# S09 - Estructuras condicionales en JavaScript

## 1. Objetivos de la sesión

Al finalizar esta sesión deberás ser capaz de:

- Comprender cómo funcionan las estructuras condicionales.
    
- Utilizar `if`, `else` y `else if`.
    
- Construir condiciones utilizando operadores de comparación y lógicos.
    
- Utilizar `switch` para seleccionar entre diferentes alternativas.
    
- Comprender el funcionamiento de `break` y `default`.
    
- Utilizar condiciones anidadas.
    
- Aplicar estructuras condicionales para resolver problemas reales.
    
- Validar datos antes de procesarlos.
    

## 2. Relación curricular

- **Resultado de aprendizaje:** RA02 (referencia provisional).
    
- **Criterios de evaluación:** pendientes de contrastar con la programación didáctica oficial.
    

Esta sesión trabaja las estructuras de control que permiten modificar el comportamiento de un programa en función de determinadas condiciones.

## 3. Contenidos

### 3.1. ¿Qué es una estructura condicional?

Una estructura condicional permite ejecutar diferentes instrucciones dependiendo de si una condición se cumple o no.

Por ejemplo, podemos desarrollar un programa que compruebe si una persona es mayor de edad:

```
let edad = 20;

if (edad >= 18) {
    console.log("Eres mayor de edad");
}
```

La instrucción que aparece dentro del `if` solamente se ejecuta cuando la condición devuelve `true`.

### 3.2. Estructura if

La estructura `if` permite ejecutar un bloque de código cuando una condición es verdadera.

Sintaxis:

```
if (condicion) {
    // Código que se ejecuta si la condición es verdadera
}
```

Ejemplo:

```
let nota = 8;

if (nota >= 5) {
    console.log("Has aprobado");
}
```

Si la nota es inferior a 5, no se ejecuta ninguna instrucción del bloque.

Podemos utilizar cualquier expresión que devuelva un valor evaluable como verdadero o falso.

```
let usuarioActivo = true;

if (usuarioActivo) {
    console.log("Bienvenido");
}
```

### 3.3. Estructura if...else

Cuando necesitamos ejecutar una alternativa si la condición no se cumple, utilizamos `else`.

Sintaxis:

```
if (condicion) {
    // Si la condición es verdadera
} else {
    // Si la condición es falsa
}
```

Ejemplo:

```
let edad = 16;

if (edad >= 18) {
    console.log("Acceso permitido");
} else {
    console.log("Acceso denegado");
}
```

En este caso siempre se ejecutará uno de los dos bloques.

### 3.4. Estructura if...else if...else

Cuando tenemos varias alternativas podemos encadenar condiciones.

Sintaxis:

```
if (condicion1) {
    // Primera alternativa
} else if (condicion2) {
    // Segunda alternativa
} else if (condicion3) {
    // Tercera alternativa
} else {
    // Ninguna condición anterior se cumple
}
```

Ejemplo: clasificación de una nota.

```
let nota = 8;

if (nota >= 9) {
    console.log("Sobresaliente");
} else if (nota >= 7) {
    console.log("Notable");
} else if (nota >= 6) {
    console.log("Bien");
} else if (nota >= 5) {
    console.log("Suficiente");
} else {
    console.log("Insuficiente");
}
```

**Importante:** JavaScript comprueba las condiciones de arriba hacia abajo. Cuando encuentra la primera condición verdadera, ejecuta su bloque y no comprueba las siguientes alternativas.

Por eso es importante ordenar correctamente las condiciones.

Por ejemplo, este código es incorrecto:

```
let nota = 9;

if (nota >= 5) {
    console.log("Aprobado");
} else if (nota >= 9) {
    console.log("Sobresaliente");
}
```

El resultado será `Aprobado`, porque la primera condición ya se cumple.

### 3.5. Condiciones utilizando operadores lógicos

Podemos combinar varias condiciones mediante los operadores lógicos.

Recordemos:

- `&&`: todas las condiciones deben cumplirse.
    
- `||`: al menos una condición debe cumplirse.
    
- `!`: invierte el resultado de una condición.
    

Ejemplo con AND:

```
let edad = 25;
let tieneCarnet = true;

if (edad >= 18 && tieneCarnet) {
    console.log("Puede conducir");
} else {
    console.log("No puede conducir");
}
```

Ejemplo con OR:

```
let esAlumno = false;
let esProfesor = true;

if (esAlumno || esProfesor) {
    console.log("Puede acceder al centro");
}
```

Ejemplo con NOT:

```
let conectado = false;

if (!conectado) {
    console.log("Debes iniciar sesión");
}
```

### 3.6. Condiciones anidadas

Una condición anidada es una estructura condicional situada dentro de otra.

Ejemplo:

```
let edad = 20;
let tieneEntrada = true;

if (edad >= 18) {

    if (tieneEntrada) {
        console.log("Puedes entrar");
    } else {
        console.log("Necesitas una entrada");
    }

} else {
    console.log("No tienes la edad necesaria");
}
```

Primero se comprueba la edad.

Solamente si la edad es suficiente se comprueba si tiene entrada.

Las condiciones anidadas son útiles cuando una comprobación depende de otra.

No obstante, demasiados niveles de anidamiento pueden dificultar la lectura. Siempre que sea posible, conviene simplificar las condiciones.

### 3.7. Estructura switch

La estructura `switch` permite ejecutar diferentes bloques de código dependiendo del valor de una expresión.

Es especialmente útil cuando queremos comparar una variable con varios valores concretos.

Sintaxis:

```
switch (expresion) {
    case valor1:
        // Instrucciones
        break;

    case valor2:
        // Instrucciones
        break;

    default:
        // Ningún caso coincide
}
```

Ejemplo:

```
let dia = 3;

switch (dia) {
    case 1:
        console.log("Lunes");
        break;

    case 2:
        console.log("Martes");
        break;

    case 3:
        console.log("Miércoles");
        break;

    case 4:
        console.log("Jueves");
        break;

    case 5:
        console.log("Viernes");
        break;

    default:
        console.log("Día no válido");
}
```

El resultado será:

```
Miércoles
```

#### La instrucción break

`break` permite salir del bloque `switch` una vez ejecutado el caso correspondiente.

¿Qué ocurre si no utilizamos `break`?

```
let numero = 2;

switch (numero) {
    case 1:
        console.log("Uno");

    case 2:
        console.log("Dos");

    case 3:
        console.log("Tres");

    default:
        console.log("Final");
}
```

Se mostrarán:

```
Dos
Tres
Final
```

Esto sucede porque JavaScript continúa ejecutando los siguientes casos. Este comportamiento se conoce como _fall-through_.

#### La instrucción default

`default` se ejecuta cuando ningún `case` coincide con el valor evaluado.

No es obligatorio, pero resulta recomendable cuando necesitamos controlar valores no contemplados.

#### Agrupar varios casos

Podemos utilizar varios `case` para ejecutar el mismo bloque:

```
let dia = 6;

switch (dia) {
    case 6:
    case 7:
        console.log("Fin de semana");
        break;

    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Día laborable");
        break;

    default:
        console.log("Día no válido");
}
```

### 3.8. Diferencias entre if y switch

|Característica|if / else|switch|
|---|---|---|
|Comparaciones|Permite condiciones complejas|Compara valores concretos|
|Operadores lógicos|Sí|No directamente en los casos|
|Rangos numéricos|Muy adecuado|No es su uso habitual|
|Muchos valores concretos|Puede resultar largo|Puede ser más claro|
|break|No lo necesita|Habitualmente necesario|

Ejemplo de uso de `if`:

```
let edad = 25;

if (edad >= 18 && edad <= 65) {
    console.log("Edad dentro del intervalo");
}
```

Ejemplo de uso de `switch`:

```
let opcion = 2;

switch (opcion) {
    case 1:
        console.log("Crear");
        break;

    case 2:
        console.log("Modificar");
        break;

    case 3:
        console.log("Eliminar");
        break;

    default:
        console.log("Opción incorrecta");
}
```

### 3.9. Validación de datos mediante condicionales

Es habitual utilizar condicionales para comprobar los datos introducidos por el usuario.

Ejemplo:

```
let nota = Number(prompt("Introduce tu nota"));

if (Number.isNaN(nota)) {
    console.log("Debes introducir un número");

} else if (nota < 0 || nota > 10) {
    console.log("La nota debe estar entre 0 y 10");

} else if (nota >= 5) {
    console.log("Has aprobado");

} else {
    console.log("Has suspendido");
}
```

Este programa realiza varias comprobaciones:

1. Comprueba si el dato es numérico.
    
2. Comprueba si está dentro del intervalo permitido.
    
3. Determina si el alumno ha aprobado.
    

Validar los datos antes de procesarlos permite evitar errores y resultados inesperados.

### 3.10. Bloques de código y llaves

Las llaves `{}` delimitan el bloque de instrucciones que pertenece a una estructura condicional.

Es recomendable utilizarlas siempre, aunque el bloque contenga una sola instrucción.

Ejemplo:

```
let edad = 20;

if (edad >= 18) {
    console.log("Mayor de edad");
}
```

Evita escribir condiciones excesivamente comprimidas. La legibilidad es una característica importante del código profesional.

## 4. Desarrollo práctico

### Ejercicio 1. Mayor o menor de edad

Crea un programa que solicite la edad de una persona.

El programa debe:

1. Convertir el dato introducido a número.
    
2. Comprobar que sea válido.
    
3. Comprobar que la edad no sea negativa.
    
4. Mostrar si es mayor o menor de edad.
    

### Ejercicio 2. Clasificación de notas

Solicita una nota entre 0 y 10.

El programa debe mostrar:

|Nota|Resultado|
|---|---|
|Menor que 5|Insuficiente|
|Desde 5 hasta menos de 6|Suficiente|
|Desde 6 hasta menos de 7|Bien|
|Desde 7 hasta menos de 9|Notable|
|Desde 9 hasta 10|Sobresaliente|

Debes controlar que la nota introducida sea válida.

Utiliza `if`, `else if` y `else`.

### Ejercicio 3. Número positivo, negativo o cero

Solicita un número al usuario.

El programa debe indicar si es:

- Positivo.
    
- Negativo.
    
- Cero.
    

Controla también las entradas no numéricas.

### Ejercicio 4. Calculadora básica

Solicita dos números y una operación.

Las operaciones permitidas serán:

- Suma.
    
- Resta.
    
- Multiplicación.
    
- División.
    

Utiliza `switch` para seleccionar la operación.

El programa debe controlar:

- Que los dos valores sean números válidos.
    
- Que la operación seleccionada sea correcta.
    
- Que no se intente dividir entre cero.
    

### Ejercicio 5. Día de la semana

Solicita un número del 1 al 7.

Utiliza `switch` para mostrar el día correspondiente:

- 1: lunes.
    
- 2: martes.
    
- 3: miércoles.
    
- 4: jueves.
    
- 5: viernes.
    
- 6: sábado.
    
- 7: domingo.
    

Si el número no está entre 1 y 7, muestra un mensaje de error.

### Ejercicio 6. Acceso a una plataforma

Crea un programa que solicite:

- Nombre de usuario.
    
- Contraseña.
    
- Estado de la cuenta.
    

El acceso solamente estará permitido cuando:

- El nombre de usuario no esté vacío.
    
- La contraseña no esté vacía.
    
- La cuenta esté activa.
    

Utiliza operadores lógicos y estructuras condicionales.

Para esta práctica puedes establecer los valores de usuario, contraseña y estado directamente en el código. No es necesario implementar un sistema de autenticación real.

### Ejercicio 7. Descuento comercial

Una tienda aplica las siguientes condiciones:

- Compras inferiores a 50 euros: sin descuento.
    
- Compras desde 50 hasta menos de 100 euros: descuento del 5 %.
    
- Compras desde 100 hasta menos de 200 euros: descuento del 10 %.
    
- Compras de 200 euros o más: descuento del 15 %.
    

Solicita el importe de la compra y calcula:

1. El porcentaje de descuento.
    
2. El importe descontado.
    
3. El precio final.
    

Controla que el importe sea un número válido y no negativo.

### Ejercicio 8. Reto integrador: menú de gestión

Desarrolla un programa que muestre el siguiente menú:

```
GESTIÓN DE ALUMNOS

1. Mostrar alumnos
2. Añadir alumno
3. Consultar notas
4. Salir
```

El programa debe:

1. Solicitar una opción.
    
2. Utilizar `switch` para seleccionar la acción.
    
3. Mostrar un mensaje diferente para cada opción.
    
4. Mostrar un mensaje de error si la opción no existe.
    

En esta práctica no necesitas desarrollar todavía las operaciones reales de gestión. El objetivo es construir correctamente el menú y controlar sus opciones.

## 5. Material necesario

- Editor de código.
    
- Navegador web.
    
- Consola de desarrollador.
    
- Conocimientos de operadores, variables y conversiones.
    

Estructura recomendada:

```
UD2/
└── S09/
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
    <title>Estructuras condicionales</title>
</head>
<body>

    <h1>Prácticas de estructuras condicionales</h1>

    <script src="ejercicio1.js"></script>
</body>
</html>
```

## 6. Resumen de la sesión

|Estructura|Utilidad|
|---|---|
|`if`|Ejecutar código si se cumple una condición|
|`if...else`|Elegir entre dos alternativas|
|`else if`|Evaluar varias condiciones|
|`switch`|Seleccionar entre valores concretos|
|`case`|Definir una alternativa de switch|
|`break`|Salir de un bloque switch|
|`default`|Ejecutar una alternativa por defecto|
|Condicional anidado|Introducir una condición dentro de otra|

Recuerda:

- Las condiciones se evalúan de arriba hacia abajo.
    
- En una cadena `if...else if`, se ejecuta la primera condición verdadera.
    
- En `switch`, utiliza `break` para evitar ejecuciones no deseadas.
    
- Valida los datos antes de utilizarlos.
    
- Utiliza `===` para realizar comparaciones estrictas.
    

## 7. Errores habituales

- Confundir `=` con `===`.
    
- Olvidar las llaves de los bloques.
    
- Ordenar incorrectamente las condiciones.
    
- Colocar una condición general antes de otra más específica.
    
- Olvidar `break` en un `switch`.
    
- No controlar el caso `default`.
    
- Comparar datos de tipos diferentes sin convertirlos.
    
- No comprobar si un dato introducido es válido.
    
- Crear demasiados niveles de condiciones anidadas.
    
- No contemplar valores límite, como una nota exactamente igual a 5.
    

## 8. Autoevaluación

Indica si las siguientes afirmaciones son verdaderas o falsas.

1. `if` permite ejecutar código cuando una condición es verdadera.
    
2. `else` puede utilizarse sin un `if` anterior.
    
3. En una estructura `if...else if`, pueden ejecutarse varios bloques de condiciones verdaderas.
    
4. `switch` permite comparar una expresión con diferentes valores.
    
5. `break` permite salir de un bloque `switch`.
    
6. `default` se ejecuta cuando ningún caso coincide.
    
7. Las condiciones anidadas son condiciones dentro de otras condiciones.
    
8. `switch` es la mejor opción para comprobar cualquier intervalo numérico.
    
9. Es recomendable validar los datos introducidos por el usuario.
    
10. El orden de las condiciones puede cambiar el resultado de un programa.
    

## 9. Preguntas tipo examen

**Pregunta 1.** Explica la diferencia entre `if` e `if...else`.

**Pregunta 2.** ¿Para qué se utiliza `else if`?

**Pregunta 3.** Explica por qué es importante ordenar correctamente las condiciones.

**Pregunta 4.** ¿Qué diferencia existe entre `if` y `switch`?

**Pregunta 5.** ¿Para qué sirve `break` dentro de un `switch`?

**Pregunta 6.** ¿Qué sucede si olvidamos utilizar `break` en un caso de `switch`?

**Pregunta 7.** ¿Qué función desempeña `default`?

**Pregunta 8.** Escribe una condición que compruebe si un número está entre 10 y 50, ambos incluidos.

**Pregunta 9.** ¿Qué son las condiciones anidadas? Escribe un ejemplo.

**Pregunta 10.** Desarrolla un programa que solicite una nota, compruebe que está entre 0 y 10 y determine si el alumno ha aprobado o suspendido.

## 10. Checklist de dominio

- Utilizo correctamente `if`.
    
- Construyo estructuras `if...else`.
    
- Utilizo varias alternativas con `else if`.
    
- Combino condiciones con `&&`, `||` y `!`.
    
- Construyo condiciones anidadas.
    
- Utilizo `switch` para seleccionar entre distintas opciones.
    
- Comprendo la función de `break`.
    
- Utilizo `default` para controlar opciones no contempladas.
    
- Valido los datos introducidos por el usuario.
    
- Resuelvo problemas utilizando estructuras condicionales.
    

**Objetivo final:** desarrollar programas capaces de tomar decisiones y ejecutar diferentes instrucciones dependiendo de los datos y las condiciones que se cumplan.