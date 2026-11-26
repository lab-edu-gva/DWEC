---

tipo: sesion  
asignatura: DWEC  
unidad: UD2 - Fundamentos de JavaScript  
numero_sesion: 8  
fecha:  
duracion: 55  
estado: pendiente  
resultado_aprendizaje: RA02  
criterios_evaluacion: []  
tags:

- dwec
    
- javascript
    
- ud2
    
- destructuring
    
- spread
    
- rest
    

---

# S08 - Desestructuración, spread y rest en JavaScript

## 1. Objetivos de la sesión

Al finalizar esta sesión deberás ser capaz de:

- Extraer valores de arrays y propiedades de objetos mediante desestructuración.
    
- Utilizar valores predeterminados durante la desestructuración.
    
- Renombrar variables al desestructurar objetos.
    
- Copiar y combinar arrays y objetos mediante el operador spread.
    
- Recoger varios argumentos mediante el operador rest.
    
- Diferenciar correctamente los operadores spread y rest.
    
- Aplicar estas características para escribir código más limpio y legible.
    

## 2. Relación curricular

- **Resultado de aprendizaje:** RA02 (referencia provisional).
    
- **Criterios de evaluación:** pendientes de contrastar con la programación didáctica oficial.
    

Esta sesión trabaja características modernas de JavaScript (ES6+) relacionadas con la manipulación de arrays, objetos y parámetros de funciones.

## 3. Contenidos

### 3.1. ¿Qué es la desestructuración?

La desestructuración (_destructuring_) permite extraer valores de arrays u objetos y asignarlos directamente a variables.

Sin desestructuración, para obtener los valores de un array escribiríamos:

```
const colores = ["rojo", "verde", "azul"];

const primero = colores[0];
const segundo = colores[1];
const tercero = colores[2];

console.log(primero);
console.log(segundo);
console.log(tercero);
```

Con desestructuración podemos simplificarlo:

```
const colores = ["rojo", "verde", "azul"];

const [primero, segundo, tercero] = colores;

console.log(primero);
console.log(segundo);
console.log(tercero);
```

El resultado es exactamente el mismo.

La ventaja es que podemos obtener varios valores en una sola operación.

### 3.2. Desestructuración de arrays

La desestructuración de arrays utiliza corchetes `[]`.

```
const numeros = [10, 20, 30, 40];

const [a, b, c, d] = numeros;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30
console.log(d); // 40
```

**Importante:** las variables reciben los valores según su posición.

#### Ignorar elementos

Podemos omitir valores utilizando comas:

```
const numeros = [10, 20, 30, 40];

const [primero, , tercero] = numeros;

console.log(primero); // 10
console.log(tercero); // 30
```

En este ejemplo ignoramos el segundo elemento.

#### Valores predeterminados

Si un elemento no existe, podemos establecer un valor predeterminado.

```
const datos = ["Luis"];

const [nombre, ciudad = "Valencia"] = datos;

console.log(nombre); // Luis
console.log(ciudad); // Valencia
```

El valor predeterminado se utiliza cuando el elemento correspondiente es `undefined`.

Si el elemento contiene `null`, se conserva `null`.

#### Intercambiar variables

La desestructuración permite intercambiar dos variables sin utilizar una variable auxiliar.

```
let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a); // 20
console.log(b); // 10
```

Esta técnica es muy útil cuando necesitamos intercambiar valores.

### 3.3. Desestructuración de objetos

Los objetos almacenan información mediante propiedades.

Sin desestructuración:

```
const alumno = {
    nombre: "Ana",
    edad: 22,
    curso: "DAW"
};

const nombre = alumno.nombre;
const edad = alumno.edad;
const curso = alumno.curso;
```

Con desestructuración:

```
const alumno = {
    nombre: "Ana",
    edad: 22,
    curso: "DAW"
};

const { nombre, edad, curso } = alumno;

console.log(nombre);
console.log(edad);
console.log(curso);
```

La desestructuración de objetos utiliza llaves `{}`.

**Importante:** a diferencia de los arrays, en los objetos se utilizan los nombres de las propiedades, no sus posiciones.

#### Cambiar el nombre de una variable

Podemos asignar una propiedad a una variable con otro nombre.

```
const alumno = {
    nombre: "Ana",
    edad: 22
};

const { nombre: nombreAlumno } = alumno;

console.log(nombreAlumno);
```

En este caso:

- `nombre` es la propiedad del objeto.
    
- `nombreAlumno` es la variable creada.
    

#### Valores predeterminados

También podemos establecer valores predeterminados:

```
const alumno = {
    nombre: "Carlos"
};

const {
    nombre,
    edad = 18,
    ciudad = "Valencia"
} = alumno;

console.log(nombre); // Carlos
console.log(edad);   // 18
console.log(ciudad); // Valencia
```

#### Desestructuración de objetos anidados

También podemos extraer propiedades de objetos que contienen otros objetos.

```
const alumno = {
    nombre: "María",
    direccion: {
        ciudad: "Valencia",
        codigoPostal: 46001
    }
};

const {
    nombre,
    direccion: { ciudad, codigoPostal }
} = alumno;

console.log(nombre);
console.log(ciudad);
console.log(codigoPostal);
```

Observa que no se crea una variable llamada `direccion`. Se extraen directamente sus propiedades internas.

### 3.4. ¿Qué es el operador spread (...)?

El operador spread permite expandir los elementos de un iterable o las propiedades enumerables de un objeto.

Se representa mediante tres puntos:

```
...
```

Se utiliza habitualmente para:

- Copiar arrays.
    
- Combinar arrays.
    
- Añadir elementos a un array.
    
- Copiar objetos.
    
- Combinar objetos.
    
- Crear nuevos objetos a partir de otros.
    

#### Copiar un array

```
const numeros = [1, 2, 3];

const copia = [...numeros];

console.log(copia);
```

El resultado es un nuevo array con los mismos elementos.

Es importante entender que no estamos creando una referencia al mismo array.

```
const numeros = [1, 2, 3];

const copia = [...numeros];

copia.push(4);

console.log(numeros); // [1, 2, 3]
console.log(copia);   // [1, 2, 3, 4]
```

#### Combinar arrays

```
const frutas = ["manzana", "pera"];
const verduras = ["zanahoria", "tomate"];

const alimentos = [...frutas, ...verduras];

console.log(alimentos);
```

Resultado:

```
["manzana", "pera", "zanahoria", "tomate"]
```

#### Añadir elementos

```
const numeros = [2, 3, 4];

const nuevosNumeros = [1, ...numeros, 5];

console.log(nuevosNumeros);
```

Resultado:

```
[1, 2, 3, 4, 5]
```

#### Copiar objetos

También podemos utilizar spread con objetos.

```
const alumno = {
    nombre: "Ana",
    edad: 20
};

const copiaAlumno = { ...alumno };

console.log(copiaAlumno);
```

Podemos modificar la copia sin modificar las propiedades originales:

```
const alumno = {
    nombre: "Ana",
    edad: 20
};

const copiaAlumno = {
    ...alumno,
    edad: 21
};

console.log(alumno.edad);     // 20
console.log(copiaAlumno.edad); // 21
```

#### Combinar objetos

```
const datosPersonales = {
    nombre: "Carlos",
    edad: 25
};

const datosAcademicos = {
    curso: "DAW",
    nota: 8
};

const alumno = {
    ...datosPersonales,
    ...datosAcademicos
};

console.log(alumno);
```

Si dos objetos contienen una misma propiedad, el valor que aparece más a la derecha prevalece.

```
const usuario = {
    nombre: "Ana",
    edad: 20
};

const actualizacion = {
    edad: 21
};

const usuarioActualizado = {
    ...usuario,
    ...actualizacion
};

console.log(usuarioActualizado);
```

El resultado tendrá `edad: 21`.

### 3.5. Copias superficiales y referencias

Es importante conocer una limitación de spread: realiza una copia superficial (_shallow copy_).

Esto significa que copia las propiedades del primer nivel, pero los objetos anidados siguen compartiendo referencias.

Ejemplo:

```
const alumno = {
    nombre: "Ana",
    direccion: {
        ciudad: "Valencia"
    }
};

const copia = { ...alumno };

copia.nombre = "Carlos";
copia.direccion.ciudad = "Madrid";

console.log(alumno.nombre); // Ana
console.log(alumno.direccion.ciudad); // Madrid
```

¿Por qué cambia la ciudad del objeto original?

Porque `direccion` sigue siendo el mismo objeto en ambas estructuras.

No debemos confundir una copia superficial con una copia profunda.

### 3.6. ¿Qué es el operador rest (...)?

El operador rest también utiliza tres puntos, pero su función es diferente.

Permite recoger varios elementos y agruparlos en un único array.

Se utiliza habitualmente en:

- Parámetros de funciones.
    
- Desestructuración de arrays.
    
- Desestructuración de objetos.
    

#### Rest en funciones

```
function sumar(...numeros) {
    let total = 0;

    for (const numero of numeros) {
        total += numero;
    }

    return total;
}

console.log(sumar(1, 2, 3));       // 6
console.log(sumar(10, 20, 30, 40)); // 100
```

El parámetro `...numeros` recoge todos los argumentos restantes en un array.

La función puede recibir una cantidad variable de argumentos.

#### Rest con parámetros normales

Podemos combinar parámetros normales y rest:

```
function presentar(nombre, ...asignaturas) {
    console.log("Alumno:", nombre);
    console.log("Asignaturas:", asignaturas);
}

presentar("Ana", "DWEC", "DIW", "DAW");
```

En este caso:

- `nombre` recibe el primer argumento.
    
- `asignaturas` recoge el resto.
    

El parámetro rest debe ser el último parámetro de la función.

#### Rest en arrays

```
const numeros = [10, 20, 30, 40, 50];

const [primero, segundo, ...resto] = numeros;

console.log(primero); // 10
console.log(segundo); // 20
console.log(resto);   // [30, 40, 50]
```

#### Rest en objetos

```
const alumno = {
    nombre: "Carlos",
    edad: 22,
    curso: "DAW",
    ciudad: "Valencia"
};

const { nombre, ...otrosDatos } = alumno;

console.log(nombre);
console.log(otrosDatos);
```

La variable `otrosDatos` contiene todas las propiedades que no se han extraído previamente.

### 3.7. Diferencia entre spread y rest

Ambos utilizan los tres puntos `...`, pero tienen objetivos diferentes.

|Característica|Spread|Rest|
|---|---|---|
|Función|Expandir elementos|Agrupar elementos|
|Uso|Copias y combinaciones|Parámetros y desestructuración|
|Resultado habitual|Elementos o propiedades expandidos|Array u objeto agrupado|
|Ejemplo|`[...numeros]`|`function sumar(...numeros)`|

Ejemplo de spread:

```
const numeros = [1, 2, 3];

console.log(...numeros);
```

Resultado:

```
1 2 3
```

Ejemplo de rest:

```
function mostrar(...valores) {
    console.log(valores);
}

mostrar(1, 2, 3);
```

Resultado:

```
[1, 2, 3]
```

**Truco para recordarlo:**

- Spread expande.
    
- Rest recoge.
    

## 4. Desarrollo práctico

### Ejercicio 1. Desestructuración de arrays

Crea un array con cinco nombres de alumnos.

Utiliza desestructuración para obtener:

1. El primer alumno.
    
2. El segundo alumno.
    
3. El quinto alumno.
    
4. Todos los elementos restantes en un array llamado `resto`.
    

Muestra cada variable por consola.

### Ejercicio 2. Desestructuración de objetos

Crea el siguiente objeto:

```
const producto = {
    nombre: "Teclado",
    precio: 35,
    categoria: "Periféricos",
    stock: 12
};
```

Realiza las siguientes operaciones:

1. Extrae `nombre` y `precio`.
    
2. Extrae `categoria` y guárdala en una variable llamada `tipo`.
    
3. Extrae `stock` y establece un valor predeterminado de `0`.
    
4. Muestra todos los datos por consola.
    

### Ejercicio 3. Intercambiar variables

Declara dos variables:

```
let primero = "HTML";
let segundo = "JavaScript";
```

Intercambia sus valores utilizando desestructuración.

No puedes utilizar una tercera variable.

### Ejercicio 4. Copiar y combinar arrays

Crea dos arrays:

```
const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["PHP", "Python", "Java"];
```

Realiza lo siguiente:

1. Crea una copia del array `frontend`.
    
2. Combina ambos arrays en uno llamado `tecnologias`.
    
3. Añade `"SQL"` al principio del nuevo array.
    
4. Añade `"Node.js"` al final.
    
5. Comprueba que los arrays originales no han cambiado.
    

### Ejercicio 5. Actualizar un objeto

Crea un objeto con los datos de un alumno:

```
const alumno = {
    nombre: "Laura",
    edad: 20,
    curso: "DAW"
};
```

Utiliza spread para crear un nuevo objeto que:

- Mantenga todos los datos originales.
    
- Cambie la edad a 21.
    
- Añada una propiedad llamada `nota` con valor 8.
    

Muestra los dos objetos y comprueba que el original no ha cambiado.

### Ejercicio 6. Función con rest

Crea una función llamada `calcularMedia` que reciba una cantidad variable de notas.

La función debe:

1. Recibir todas las notas mediante rest.
    
2. Calcular la suma de las notas.
    
3. Dividir la suma entre la cantidad de notas.
    
4. Devolver la media.
    

Prueba la función con diferentes cantidades de notas.

### Ejercicio 7. Extraer información de un objeto

Dispones del siguiente objeto:

```
const usuario = {
    nombre: "Carlos",
    email: "carlos@email.com",
    edad: 28,
    ciudad: "Valencia",
    activo: true
};
```

Utiliza desestructuración y rest para:

1. Obtener el nombre y el correo electrónico.
    
2. Guardar el resto de propiedades en una variable llamada `informacionAdicional`.
    
3. Mostrar ambas partes por consola.
    

### Ejercicio 8. Reto integrador: gestión de alumnos

Crea un programa que gestione información de alumnos.

Dispondrás de estos datos:

```
const alumno1 = {
    nombre: "Ana",
    curso: "DAW",
    nota: 8
};

const alumno2 = {
    nombre: "Carlos",
    curso: "DAW",
    nota: 6
};

const alumno3 = {
    nombre: "Laura",
    curso: "DAW",
    nota: 9
};
```

El programa debe:

1. Crear un array con los tres alumnos.
    
2. Crear una copia del array utilizando spread.
    
3. Añadir un cuarto alumno sin modificar el array original.
    
4. Crear una función llamada `mostrarAlumnos` que reciba cualquier número de alumnos utilizando rest.
    
5. Mostrar el nombre y la nota de cada alumno.
    
6. Utilizar desestructuración para extraer los datos de cada objeto.
    

## 5. Material necesario

- Editor de código.
    
- Navegador web.
    
- Consola de desarrollador.
    
- Conocimientos de arrays, objetos, variables y funciones.
    

Estructura recomendada:

```
UD2/
└── S08/
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
    <title>Desestructuración, spread y rest</title>
</head>
<body>

    <h1>Práctica de JavaScript ES6+</h1>

    <script src="ejercicio1.js"></script>
</body>
</html>
```

## 6. Resumen de la sesión

|Concepto|Utilidad|
|---|---|
|Desestructuración de arrays|Extraer valores por posición|
|Desestructuración de objetos|Extraer propiedades por nombre|
|Valores predeterminados|Asignar un valor si el extraído es `undefined`|
|Renombrado|Asignar una propiedad a una variable con otro nombre|
|Spread (`...`)|Expandir elementos o propiedades|
|Rest (`...`)|Agrupar elementos o propiedades restantes|
|Copia superficial|Copiar el primer nivel de una estructura|

Ejemplos fundamentales:

```
// Desestructuración
const [a, b] = [10, 20];

// Desestructuración de objetos
const { nombre } = { nombre: "Ana" };

// Spread
const copia = [...numeros];

// Spread en objetos
const copiaObjeto = { ...alumno };

// Rest
function sumar(...numeros) {
    return numeros.length;
}
```

## 7. Errores habituales

- Utilizar llaves `{}` para desestructurar arrays.
    
- Utilizar corchetes `[]` para desestructurar objetos.
    
- Pensar que la desestructuración de objetos depende de la posición.
    
- Confundir el nombre de una propiedad con el nombre de la variable creada al renombrarla.
    
- Olvidar que spread crea copias superficiales.
    
- Pensar que modificar un objeto anidado copiado con spread nunca afecta al original.
    
- Confundir spread y rest.
    
- Colocar un parámetro rest antes de otros parámetros.
    
- Intentar utilizar más de un parámetro rest en una misma función.
    
- Olvidar que rest recoge los argumentos restantes en un array.
    

## 8. Autoevaluación

Indica si las siguientes afirmaciones son verdaderas o falsas.

1. La desestructuración de arrays utiliza corchetes.
    
2. La desestructuración de objetos utiliza llaves.
    
3. En los objetos, la desestructuración depende de la posición de las propiedades.
    
4. Spread permite copiar arrays.
    
5. Spread permite combinar objetos.
    
6. Rest permite recibir un número variable de argumentos.
    
7. Spread y rest utilizan tres puntos.
    
8. Rest puede colocarse en cualquier posición de los parámetros de una función.
    
9. Spread realiza copias profundas automáticamente.
    
10. La desestructuración permite intercambiar dos variables sin utilizar una tercera.
    

## 9. Preguntas tipo examen

**Pregunta 1.** Explica qué es la desestructuración y para qué se utiliza.

**Pregunta 2.** ¿Qué resultado produce el siguiente código?

```
const numeros = [10, 20, 30];

const [a, b] = numeros;

console.log(a);
console.log(b);
```

**Pregunta 3.** Explica cómo se puede cambiar el nombre de una variable durante la desestructuración de un objeto.

**Pregunta 4.** ¿Qué resultado produce esta expresión?

```
const valores = [1, 2, 3];

const copia = [...valores];

console.log(copia);
```

**Pregunta 5.** ¿Qué diferencia existe entre spread y rest?

**Pregunta 6.** Explica qué hace el siguiente código:

```
function sumar(...numeros) {
    let total = 0;

    for (const numero of numeros) {
        total += numero;
    }

    return total;
}
```

**Pregunta 7.** ¿Qué resultado produce el siguiente código?

```
const usuario = {
    nombre: "Ana",
    edad: 20
};

const actualizado = {
    ...usuario,
    edad: 21
};

console.log(actualizado);
```

**Pregunta 8.** ¿Qué significa que spread realice una copia superficial?

**Pregunta 9.** ¿Qué resultado produce esta desestructuración?

```
const datos = [10, 20, 30, 40];

const [primero, ...resto] = datos;

console.log(primero);
console.log(resto);
```

**Pregunta 10.** Escribe una función que reciba un nombre y un número variable de asignaturas utilizando rest.

## 10. Checklist de dominio

- Desestructuro arrays correctamente.
    
- Desestructuro objetos utilizando sus propiedades.
    
- Establezco valores predeterminados.
    
- Cambio el nombre de las variables al desestructurar.
    
- Intercambio variables mediante desestructuración.
    
- Copio y combino arrays utilizando spread.
    
- Copio y combino objetos utilizando spread.
    
- Comprendo qué es una copia superficial.
    
- Utilizo rest en los parámetros de una función.
    
- Diferencio correctamente spread y rest.
    

**Objetivo final:** manipular arrays y objetos de forma más eficiente utilizando las características modernas de JavaScript.