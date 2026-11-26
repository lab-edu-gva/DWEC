---

tipo: sesion  
asignatura: DWEC  
unidad: UD2 - Fundamentos de JavaScript  
numero_sesion: 12  
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
    
- funciones-flecha
    
- arrow-functions
    

---

# S12 - Funciones flecha y parámetros por defecto

## 1. Objetivos de la sesión

Al finalizar esta sesión deberás ser capaz de:

- Comprender qué son las funciones flecha (_arrow functions_).
    
- Declarar funciones utilizando la sintaxis `=>`.
    
- Diferenciar funciones tradicionales y funciones flecha.
    
- Utilizar funciones flecha con uno o varios parámetros.
    
- Aplicar el retorno implícito.
    
- Utilizar parámetros por defecto.
    
- Comprender qué ocurre cuando una función flecha utiliza `this`.
    
- Elegir la forma de declaración de función adecuada según el contexto.
    

## 2. Relación curricular

**Resultado de aprendizaje:** RA02 (referencia provisional).

**Criterios de evaluación:** pendientes de contrastar con la programación didáctica oficial.

## 3. Contenidos

### 3.1. ¿Qué son las funciones flecha?

Las funciones flecha son una forma alternativa de escribir funciones en JavaScript.

Se introdujeron en ECMAScript 2015 (ES6) y permiten utilizar una sintaxis más compacta.

Una función tradicional:

```
function sumar(a, b) {
    return a + b;
}
```

La misma función utilizando una función flecha:

```
const sumar = (a, b) => {
    return a + b;
};
```

La expresión `=>` es lo que caracteriza a las funciones flecha.

Observa que:

- La función se asigna a una constante.
    
- Los parámetros aparecen entre paréntesis.
    
- La flecha separa los parámetros del cuerpo de la función.
    
- El cuerpo se encuentra entre llaves.
    
- La función devuelve el resultado mediante `return`.
    

### 3.2. Funciones flecha con varios parámetros

Cuando una función recibe dos o más parámetros, debemos escribirlos entre paréntesis.

```
const multiplicar = (a, b) => {
    return a * b;
};

console.log(multiplicar(4, 5));
```

Resultado:

```
20
```

Podemos utilizar tantos parámetros como necesitemos.

```
const calcularMedia = (nota1, nota2, nota3) => {
    return (nota1 + nota2 + nota3) / 3;
};

console.log(calcularMedia(7, 8, 9));
```

### 3.3. Funciones flecha con un solo parámetro

Cuando una función flecha recibe exactamente un parámetro, podemos eliminar los paréntesis.

Con paréntesis:

```
const duplicar = (numero) => {
    return numero * 2;
};
```

Sin paréntesis:

```
const duplicar = numero => {
    return numero * 2;
};
```

Ambas formas son válidas.

Sin embargo, si no recibe parámetros o recibe más de uno, los paréntesis son necesarios.

Sin parámetros:

```
const saludar = () => {
    console.log("Hola");
};
```

Con dos parámetros:

```
const restar = (a, b) => {
    return a - b;
};
```

### 3.4. Retorno implícito

Una de las características más interesantes de las funciones flecha es que pueden devolver un resultado sin utilizar explícitamente `return`.

Para ello, debemos escribir una expresión directamente después de la flecha y no utilizar llaves.

Con retorno explícito:

```
const cuadrado = numero => {
    return numero * numero;
};
```

Con retorno implícito:

```
const cuadrado = numero => numero * numero;
```

Ambas funciones realizan exactamente la misma operación.

Otro ejemplo:

```
const sumar = (a, b) => a + b;

console.log(sumar(10, 5));
```

Resultado:

```
15
```

**Importante:** el retorno implícito solamente se produce cuando el cuerpo de la función es una expresión sin llaves.

Si utilizamos llaves, debemos escribir `return` cuando queramos devolver un resultado.

Este ejemplo no devuelve el resultado:

```
const sumar = (a, b) => {
    a + b;
};

console.log(sumar(5, 3));
```

El resultado será:

```
undefined
```

La forma correcta sería:

```
const sumar = (a, b) => {
    return a + b;
};
```

### 3.5. Funciones flecha que no devuelven valores

Las funciones flecha también pueden ejecutar instrucciones sin devolver un resultado.

```
const mostrarMensaje = () => {
    console.log("Operación realizada correctamente");
};

mostrarMensaje();
```

En este caso utilizamos llaves porque queremos ejecutar una instrucción.

No es obligatorio que todas las funciones devuelvan un valor.

### 3.6. Parámetros por defecto

JavaScript permite asignar valores predeterminados a los parámetros de una función.

Esta característica está disponible tanto en funciones tradicionales como en funciones flecha.

Ejemplo:

```
const saludar = (nombre = "invitado") => {
    return "Hola, " + nombre;
};

console.log(saludar("Ana"));
console.log(saludar());
```

Resultado:

```
Hola, Ana
Hola, invitado
```

Cuando proporcionamos un argumento, se utiliza ese valor.

Cuando omitimos el argumento o pasamos `undefined`, se utiliza el valor predeterminado.

```
const calcularPrecio = (precio, cantidad = 1) => {
    return precio * cantidad;
};

console.log(calcularPrecio(20));
console.log(calcularPrecio(20, 3));
```

Resultado:

```
20
60
```

### 3.7. Varios parámetros por defecto

Podemos definir valores predeterminados para varios parámetros.

```
const crearUsuario = (
    nombre = "Usuario",
    edad = 18,
    activo = true
) => {
    return {
        nombre: nombre,
        edad: edad,
        activo: activo
    };
};

console.log(crearUsuario());
console.log(crearUsuario("Ana", 25, false));
```

También podemos combinar parámetros normales y parámetros por defecto.

```
const calcularDescuento = (precio, descuento = 10) => {
    return precio - (precio * descuento / 100);
};

console.log(calcularDescuento(100));
console.log(calcularDescuento(100, 20));
```

Resultado:

```
90
80
```

**Recomendación:** coloca los parámetros con valores predeterminados al final de la lista cuando sea posible. Así resulta más sencillo proporcionar argumentos en el orden correcto.

### 3.8. Diferencias entre funciones tradicionales y funciones flecha

Aunque ambas permiten definir funciones, existen diferencias importantes.

|Característica|Función tradicional|Función flecha|
|---|---|---|
|Sintaxis|`function`|`=>`|
|Parámetros|Entre paréntesis|Entre paréntesis, salvo un único parámetro|
|Retorno implícito|No|Sí, con expresión sin llaves|
|`this`|Depende de cómo se invoque|Hereda el `this` del contexto exterior|
|Uso con `new`|Puede ser constructora si corresponde|No puede utilizarse como constructora|
|Objeto `arguments`|Disponible en funciones normales|No dispone de uno propio|

No debemos pensar que las funciones flecha son siempre mejores. Son especialmente útiles para funciones cortas y callbacks, pero las funciones tradicionales siguen siendo necesarias en determinados contextos.

### 3.9. El comportamiento de `this` en las funciones flecha

La palabra reservada `this` hace referencia al contexto de ejecución de una función.

En una función tradicional, el valor de `this` depende de cómo se invoque la función.

En una función flecha, `this` no se crea de nuevo. La función utiliza el valor de `this` del contexto donde fue definida.

Ejemplo:

```
const persona = {
    nombre: "Ana",

    saludar: function () {
        console.log("Hola, soy " + this.nombre);
    }
};

persona.saludar();
```

Resultado:

```
Hola, soy Ana
```

En este caso, `this` hace referencia al objeto `persona`.

Si escribimos el método como una función flecha:

```
const persona = {
    nombre: "Ana",

    saludar: () => {
        console.log("Hola, soy " + this.nombre);
    }
};

persona.saludar();
```

No debemos esperar que `this` haga referencia a `persona`.

La función flecha hereda el `this` del contexto exterior, por lo que en este caso puede producir un resultado diferente del esperado.

**Regla práctica:** para los métodos de objetos que necesitan acceder a sus propias propiedades mediante `this`, utiliza normalmente una función tradicional.

### 3.10. Funciones flecha como callbacks

Un callback es una función que se pasa como argumento a otra función para que pueda ejecutarse posteriormente.

Las funciones flecha son muy habituales en este contexto.

Ejemplo:

```
const numeros = [1, 2, 3, 4, 5];

numeros.forEach(numero => {
    console.log(numero);
});
```

En este ejemplo:

- `forEach()` es un método de los arrays.
    
- La función flecha se pasa como argumento.
    
- El método ejecuta esa función para cada elemento.
    

Otro ejemplo:

```
const numeros = [1, 2, 3, 4, 5];

const dobles = numeros.map(numero => numero * 2);

console.log(dobles);
```

Resultado:

```
[2, 4, 6, 8, 10]
```

El método `map()` crea un nuevo array aplicando la función a cada elemento.

Estas funciones de callback se utilizan frecuentemente en JavaScript, especialmente al trabajar con eventos, arrays y operaciones asíncronas.

### 3.11. Funciones flecha y eventos

También podemos utilizar funciones flecha para gestionar eventos del navegador.

Ejemplo:

```
<button id="boton">Pulsar</button>

<script>
    const boton = document.querySelector("#boton");

    boton.addEventListener("click", () => {
        console.log("Has pulsado el botón");
    });
</script>
```

La función flecha se ejecuta cuando se produce el evento `click`.

De esta forma podemos separar la detección del evento de las instrucciones que queremos ejecutar.

## 4. Desarrollo práctico

### Práctica 1. Convertir funciones tradicionales

Convierte las siguientes funciones tradicionales en funciones flecha.

**A.**

```
function sumar(a, b) {
    return a + b;
}
```

**B.**

```
function duplicar(numero) {
    return numero * 2;
}
```

**C.**

```
function mostrarMensaje() {
    console.log("Hola");
}
```

### Práctica 2. Crear funciones flecha

Crea las siguientes funciones:

1. Una función que reciba un número y devuelva su triple.
    
2. Una función que reciba dos números y devuelva el mayor.
    
3. Una función que reciba un nombre y muestre un saludo.
    
4. Una función que reciba dos números y devuelva su división.
    
5. Una función que devuelva el texto `"Bienvenido a DWEC"`.
    

Utiliza funciones flecha en todos los casos.

### Práctica 3. Utilizar retorno implícito

Reescribe las siguientes funciones utilizando retorno implícito cuando sea posible.

```
const sumar = (a, b) => {
    return a + b;
};

const multiplicar = (a, b) => {
    return a * b;
};

const obtenerNombre = () => {
    return "Carlos";
};
```

### Práctica 4. Parámetros por defecto

Crea una función flecha llamada `crearMensaje` que reciba:

- `nombre`, cuyo valor por defecto será `"Usuario"`.
    
- `curso`, cuyo valor por defecto será `"DAW"`.
    

La función debe devolver un mensaje con este formato:

```
Hola Ana, estás matriculado en DAW
```

Prueba la función:

- Sin argumentos.
    
- Solamente con el nombre.
    
- Con ambos argumentos.
    

### Práctica 5. Calcular descuentos

Crea una función flecha llamada `aplicarDescuento`.

Debe recibir:

- Un precio.
    
- Un descuento del 10 % por defecto.
    

Debe devolver el precio final después de aplicar el descuento.

Prueba estos casos:

```
console.log(aplicarDescuento(100));
console.log(aplicarDescuento(100, 25));
console.log(aplicarDescuento(50, 5));
```

### Práctica 6. Trabajar con arrays y funciones flecha

Crea el siguiente array:

```
const numeros = [2, 4, 6, 8, 10];
```

Realiza las siguientes operaciones:

1. Utiliza `forEach()` para mostrar todos los números.
    
2. Utiliza `map()` para crear un array con el doble de cada número.
    
3. Utiliza `map()` para crear un array con el cuadrado de cada número.
    

### Práctica 7. Gestionar un evento

Crea un documento HTML con un botón y un elemento de texto.

Cuando el usuario pulse el botón, utiliza una función flecha para cambiar el contenido del elemento de texto.

Ejemplo:

```
<button id="boton">Mostrar mensaje</button>

<p id="mensaje">Esperando...</p>

<script>
    const boton = document.querySelector("#boton");
    const mensaje = document.querySelector("#mensaje");

    boton.addEventListener("click", () => {
        mensaje.textContent = "Mensaje mostrado correctamente";
    });
</script>
```

### Práctica 8. Analizar el código

Indica qué resultado produce cada fragmento y explica por qué.

**Código A**

```
const sumar = (a, b) => a + b;

console.log(sumar(5, 3));
```

**Código B**

```
const multiplicar = (a, b) => {
    a * b;
};

console.log(multiplicar(4, 5));
```

**Código C**

```
const saludar = (nombre = "invitado") => {
    return "Hola " + nombre;
};

console.log(saludar());
console.log(saludar("Ana"));
```

**Código D**

```
const numeros = [1, 2, 3];

const resultado = numeros.map(numero => numero * 3);

console.log(resultado);
```

## 5. Material necesario

- Ordenador con navegador web.
    
- Editor de código.
    
- Consola de desarrollador del navegador.
    
- Conocimientos de funciones tradicionales, parámetros, argumentos y valores de retorno.
    

Estructura recomendada:

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
    <title>Funciones flecha</title>
</head>
<body>

    <h1>Práctica de funciones flecha</h1>

    <script src="script.js"></script>
</body>
</html>
```

## 6. Resumen de la sesión

|Concepto|Descripción|
|---|---|
|Función flecha|Forma alternativa de declarar funciones mediante `=>`.|
|`=>`|Operador que separa parámetros y cuerpo de la función.|
|Retorno implícito|Devuelve automáticamente una expresión cuando no se utilizan llaves.|
|Parámetro por defecto|Valor utilizado cuando no se proporciona un argumento válido para ese parámetro.|
|Callback|Función que se pasa como argumento a otra función.|
|`this`|En una función flecha se hereda del contexto exterior.|
|`map()`|Crea un nuevo array transformando sus elementos.|
|`forEach()`|Ejecuta una función para cada elemento de un array.|

Recuerda:

- Las funciones flecha utilizan `=>`.
    
- Con un solo parámetro podemos omitir los paréntesis.
    
- Con varios parámetros debemos utilizar paréntesis.
    
- Si utilizamos llaves, necesitamos `return` para devolver un resultado.
    
- Las funciones flecha no tienen un `this` propio.
    
- Los parámetros por defecto pueden utilizarse tanto en funciones tradicionales como en funciones flecha.
    

## 7. Errores habituales

**Error 1. Olvidar los paréntesis cuando son necesarios**

Incorrecto:

```
const sumar = a, b => a + b;
```

Correcto:

```
const sumar = (a, b) => a + b;
```

**Error 2. Utilizar llaves sin** `**return**`

Incorrecto:

```
const sumar = (a, b) => {
    a + b;
};
```

Correcto:

```
const sumar = (a, b) => {
    return a + b;
};
```

**Error 3. Confundir retorno implícito con retorno explícito**

Estas dos funciones son equivalentes:

```
const cuadrado = numero => numero * numero;
```

```
const cuadrado = numero => {
    return numero * numero;
};
```

**Error 4. Olvidar el valor por defecto**

```
const saludar = (nombre = "invitado") => {
    return "Hola " + nombre;
};
```

Si no se proporciona un argumento, se utiliza `"invitado"`.

**Error 5. Utilizar** `**this**` **como si fuera una función tradicional**

Las funciones flecha no crean su propio contexto `this`.

**Error 6. Confundir** `**map()**` **y** `**forEach()**`

- `map()` devuelve un nuevo array.
    
- `forEach()` ejecuta una función para cada elemento y devuelve `undefined`.
    

## 8. Autoevaluación

- ¿Sé declarar una función flecha?
    
- ¿Sé utilizar funciones flecha con uno y varios parámetros?
    
- ¿Sé utilizar funciones sin parámetros?
    
- ¿Comprendo el retorno implícito?
    
- ¿Sé cuándo necesito escribir `return`?
    
- ¿Sé establecer parámetros por defecto?
    
- ¿Comprendo las diferencias entre funciones tradicionales y flecha?
    
- ¿Sé explicar el comportamiento de `this`?
    
- ¿Sé utilizar funciones flecha como callbacks?
    
- ¿Sé utilizar funciones flecha con `map()` y `forEach()`?
    
- ¿Sé gestionar eventos utilizando funciones flecha?
    

## 9. Preguntas tipo examen

**Pregunta 1.** ¿Qué caracteriza a una función flecha?

**Pregunta 2.** ¿Qué operador se utiliza para declarar una función flecha?

**Pregunta 3.** ¿Cuándo podemos omitir los paréntesis de los parámetros?

**Pregunta 4.** ¿Qué diferencia existe entre retorno explícito e implícito?

**Pregunta 5.** ¿Qué resultado produce este código?

```
const sumar = (a, b) => a + b;

console.log(sumar(10, 20));
```

**Pregunta 6.** ¿Qué resultado produce este código?

```
const duplicar = numero => {
    numero * 2;
};

console.log(duplicar(5));
```

**Pregunta 7.** ¿Qué resultado produce este código?

```
const saludar = (nombre = "invitado") => "Hola " + nombre;

console.log(saludar());
console.log(saludar("Luis"));
```

**Pregunta 8.** ¿Qué diferencia existe entre el comportamiento de `this` en una función tradicional y en una función flecha?

**Pregunta 9.** ¿Qué diferencia existe entre `map()` y `forEach()`?

**Pregunta 10.** Convierte esta función tradicional en una función flecha con retorno implícito:

```
function calcularCuadrado(numero) {
    return numero * numero;
}
```

**Pregunta 11.** Escribe una función flecha que reciba dos números y devuelva su media.

**Pregunta 12.** Escribe una función flecha que reciba un precio y un descuento del 15 % por defecto y devuelva el precio final.

## 10. Checklist de dominio

Antes del examen deberías ser capaz de:

- Declarar funciones flecha.
    
- Utilizar correctamente `=>`.
    
- Trabajar con parámetros.
    
- Aplicar el retorno implícito.
    
- Utilizar `return` cuando corresponda.
    
- Establecer parámetros por defecto.
    
- Diferenciar funciones tradicionales y funciones flecha.
    
- Comprender el comportamiento de `this`.
    
- Utilizar funciones flecha como callbacks.
    
- Trabajar con `map()` y `forEach()`.
    
- Gestionar eventos mediante funciones flecha.
    
- Convertir funciones tradicionales en funciones flecha.
    

---

**Siguiente sesión:** S13 - Práctica integradora y preparación del examen.