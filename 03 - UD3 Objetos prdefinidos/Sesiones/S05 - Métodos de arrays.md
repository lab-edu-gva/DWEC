---
asignatura: DWEC
unidad: UD3
sesion: S05
duracion: 55 minutos
tipo: material-alumnado
estado: preparado
ra: RA3
publicar: true
---
# S05 - Métodos de Arrays

## 1. Introducción

En la sesión anterior aprendimos a crear arrays, acceder a sus elementos, modificarlos y recorrerlos mediante estructuras de repetición.

Sin embargo, trabajar con arrays implica realizar operaciones habituales:

- Añadir nuevos elementos.
- Eliminar elementos existentes.
- Insertar elementos en posiciones concretas.
- Extraer una parte de un array.
- Buscar elementos.
- Comprobar si un valor está presente.
- Unir varios arrays.
- Convertir un array en una cadena de texto.

JavaScript proporciona diferentes métodos para realizar estas operaciones sin tener que implementar manualmente toda la lógica.

En esta sesión estudiaremos los métodos más importantes para manipular arrays.

## 2. Objetivos de aprendizaje

Al finalizar la sesión deberías ser capaz de:

1. Añadir y eliminar elementos al principio y al final de un array.
2. Insertar, sustituir y eliminar elementos en posiciones concretas.
3. Diferenciar entre `splice()` y `slice()`.
4. Buscar elementos utilizando `indexOf()` e `includes()`.
5. Combinar arrays mediante `concat()`.
6. Convertir arrays en cadenas utilizando `join()`.
7. Identificar qué métodos modifican el array original y cuáles devuelven un nuevo resultado.
8. Elegir el método más adecuado según el problema que se quiera resolver.

## 3. Conocimientos previos

Antes de comenzar, debes conocer:

- Qué es un array.
- Cómo declarar un array.
- Cómo acceder a sus elementos mediante índices.
- Cómo modificar elementos.
- Cómo utilizar `length`.
- Cómo recorrer arrays con `for` y `for...of`.

Ejemplo de partida:

```javascript
const frutas = ["manzana", "pera", "plátano"];

console.log(frutas[0]); // manzana
console.log(frutas.length); // 3
```

## 4. Métodos para añadir elementos

### 4.1. `push()`: añadir al final

El método `push()` permite añadir uno o varios elementos al final de un array.

**Sintaxis:**

```javascript
array.push(elemento1, elemento2, ...);
```

El método modifica el array original y devuelve la nueva longitud.

**Ejemplo:**

```javascript
const tareas = ["Estudiar", "Practicar"];

const longitud = tareas.push("Entregar ejercicio");

console.log(tareas);
console.log(longitud);
```

Resultado:

```text
["Estudiar", "Practicar", "Entregar ejercicio"]
3
```

Podemos añadir varios elementos en una única operación:

```javascript
const numeros = [10, 20];

numeros.push(30, 40, 50);

console.log(numeros);
```

Resultado:

```text
[10, 20, 30, 40, 50]
```

**¿Cuándo utilizarlo?**

Cuando necesitamos incorporar nuevos elementos al final de una colección, por ejemplo, añadir un producto a una cesta de compra.

### 4.2. `unshift()`: añadir al principio

El método `unshift()` incorpora uno o varios elementos al principio del array.

**Sintaxis:**

```javascript
array.unshift(elemento1, elemento2, ...);
```

También modifica el array original y devuelve su nueva longitud.

**Ejemplo:**

```javascript
const mensajes = ["Mensaje 2", "Mensaje 3"];

mensajes.unshift("Mensaje 1");

console.log(mensajes);
```

Resultado:

```text
["Mensaje 1", "Mensaje 2", "Mensaje 3"]
```

Podemos añadir varios elementos:

```javascript
const numeros = [30, 40];

numeros.unshift(10, 20);

console.log(numeros);
```

Resultado:

```text
[10, 20, 30, 40]
```

Observa que los elementos se incorporan manteniendo el orden en el que aparecen como argumentos.

## 5. Métodos para eliminar elementos

### 5.1. `pop()`: eliminar el último elemento

El método `pop()` elimina el último elemento del array y lo devuelve.

**Sintaxis:**

```javascript
array.pop();
```

Modifica el array original.

**Ejemplo:**

```javascript
const tareas = ["Estudiar", "Practicar", "Entregar"];

const tareaEliminada = tareas.pop();

console.log(tareaEliminada);
console.log(tareas);
```

Resultado:

```text
Entregar
["Estudiar", "Practicar"]
```

Una característica importante es que podemos recuperar el elemento eliminado y almacenarlo en una variable.

**¿Qué sucede si el array está vacío?**

```javascript
const datos = [];

const resultado = datos.pop();

console.log(resultado); // undefined
console.log(datos); // []
```

No se produce un error: simplemente devuelve `undefined`.

### 5.2. `shift()`: eliminar el primer elemento

El método `shift()` elimina el primer elemento del array y lo devuelve.

**Sintaxis:**

```javascript
array.shift();
```

**Ejemplo:**

```javascript
const cola = ["Ana", "Luis", "Marta"];

const atendido = cola.shift();

console.log(atendido);
console.log(cola);
```

Resultado:

```text
Ana
["Luis", "Marta"]
```

Este método resulta especialmente útil para representar colas de atención, donde el primer elemento que entra es también el primero que sale.

### 5.3. Comparación entre los cuatro métodos básicos

| Método | Operación | Posición | Modifica el array |
|---|---|---|---|
| `push()` | Añadir | Final | Sí |
| `pop()` | Eliminar | Final | Sí |
| `unshift()` | Añadir | Principio | Sí |
| `shift()` | Eliminar | Principio | Sí |

Ejemplo conjunto:

```javascript
const numeros = [20, 30];

numeros.push(40);
numeros.unshift(10);

console.log(numeros);

numeros.pop();
numeros.shift();

console.log(numeros);
```

Resultado:

```text
[10, 20, 30, 40]
[20, 30]
```

## 6. `splice()`: insertar, eliminar y sustituir elementos

El método `splice()` es uno de los métodos más versátiles para trabajar con arrays.

Permite:

- Eliminar elementos de una posición determinada.
- Insertar elementos en una posición concreta.
- Sustituir elementos existentes.

A diferencia de `slice()`, `splice()` modifica directamente el array original.

### 6.1. Sintaxis

```javascript
array.splice(inicio, cantidadEliminar, elemento1, elemento2, ...);
```

Sus argumentos son:

- `inicio`: índice a partir del cual comienza la operación.
- `cantidadEliminar`: número de elementos que queremos eliminar.
- `elemento1`, `elemento2`, etc.: elementos que queremos insertar.

Los dos primeros argumentos son los fundamentales. Los elementos adicionales son opcionales.

### 6.2. Eliminar elementos

Supongamos que tenemos el siguiente array:

```javascript
const colores = ["rojo", "verde", "azul", "amarillo"];
```

Queremos eliminar el elemento situado en el índice 1.

```javascript
const eliminados = colores.splice(1, 1);

console.log(colores);
console.log(eliminados);
```

Resultado:

```text
["rojo", "azul", "amarillo"]
["verde"]
```

El primer argumento indica dónde empezamos y el segundo cuántos elementos eliminamos.

Podemos eliminar varios elementos:

```javascript
const numeros = [10, 20, 30, 40, 50];

numeros.splice(1, 3);

console.log(numeros);
```

Resultado:

```text
[10, 50]
```

Se han eliminado tres elementos comenzando en el índice 1.

### 6.3. Insertar elementos

También podemos insertar elementos sin eliminar ninguno.

Para ello, indicamos `0` como cantidad de elementos a eliminar.

```javascript
const frutas = ["manzana", "plátano"];

frutas.splice(1, 0, "pera");

console.log(frutas);
```

Resultado:

```text
["manzana", "pera", "plátano"]
```

Podemos insertar varios elementos:

```javascript
const numeros = [10, 40];

numeros.splice(1, 0, 20, 30);

console.log(numeros);
```

Resultado:

```text
[10, 20, 30, 40]
```

### 6.4. Sustituir elementos

Para sustituir un elemento debemos eliminarlo e insertar otro en la misma posición.

```javascript
const asignaturas = ["DWEC", "DIW", "Inglés"];

asignaturas.splice(2, 1, "AO");

console.log(asignaturas);
```

Resultado:

```text
["DWEC", "DIW", "AO"]
```

En este caso:

1. Comenzamos en el índice 2.
2. Eliminamos un elemento.
3. Insertamos el nuevo valor en esa posición.

### 6.5. Eliminar desde una posición hasta el final

Si no indicamos la cantidad de elementos que queremos eliminar, `splice()` elimina desde la posición indicada hasta el final.

```javascript
const datos = [10, 20, 30, 40, 50];

datos.splice(2);

console.log(datos);
```

Resultado:

```text
[10, 20]
```

### 6.6. Índices negativos

`splice()` también admite índices negativos.

Un índice negativo cuenta desde el final del array:

```javascript
const frutas = ["manzana", "pera", "plátano", "naranja"];

frutas.splice(-1, 1);

console.log(frutas);
```

Resultado:

```text
["manzana", "pera", "plátano"]
```

Se ha eliminado el último elemento.

### 6.7. Ejemplo práctico: modificar una lista de alumnos

```javascript
const alumnos = [
    "Ana",
    "Luis",
    "Marta",
    "Pedro"
];

// Eliminamos a Marta.
alumnos.splice(2, 1);

// Incorporamos a Carlos en la posición 1.
alumnos.splice(1, 0, "Carlos");

console.log(alumnos);
```

Resultado:

```text
["Ana", "Carlos", "Luis", "Pedro"]
```

## 7. `slice()`: extraer una parte de un array

El método `slice()` permite obtener una parte de un array sin modificar el original.

Esta característica lo diferencia claramente de `splice()`.

**Sintaxis:**

```javascript
array.slice(inicio, fin);
```

- `inicio`: índice desde el que comenzamos a extraer.
- `fin`: índice donde dejamos de extraer, sin incluirlo.

El método devuelve un nuevo array.

### 7.1. Extraer elementos

```javascript
const numeros = [10, 20, 30, 40, 50];

const resultado = numeros.slice(1, 4);

console.log(resultado);
console.log(numeros);
```

Resultado:

```text
[20, 30, 40]
[10, 20, 30, 40, 50]
```

Observa que el índice final no se incluye.

### 7.2. Extraer desde una posición hasta el final

Si omitimos el segundo argumento, se extraen todos los elementos desde el índice inicial hasta el final.

```javascript
const frutas = ["manzana", "pera", "plátano", "naranja"];

const resultado = frutas.slice(2);

console.log(resultado);
```

Resultado:

```text
["plátano", "naranja"]
```

### 7.3. Utilizar índices negativos

También podemos utilizar índices negativos:

```javascript
const numeros = [10, 20, 30, 40, 50];

const resultado = numeros.slice(-2);

console.log(resultado);
```

Resultado:

```text
[40, 50]
```

### 7.4. Copiar un array

Una utilidad habitual de `slice()` es obtener una copia superficial de un array.

```javascript
const original = [10, 20, 30];

const copia = original.slice();

copia.push(40);

console.log(original);
console.log(copia);
```

Resultado:

```text
[10, 20, 30]
[10, 20, 30, 40]
```

El array original no se ha modificado.

También podemos realizar una copia utilizando el operador spread:

```javascript
const copia = [...original];
```

Por ahora, quédate con la idea principal: `slice()` permite extraer elementos sin alterar el array original.

## 8. Diferencias entre `splice()` y `slice()`

Aunque sus nombres son parecidos, realizan operaciones diferentes.

| Característica | `splice()` | `slice()` |
|---|---|---|
| Finalidad | Insertar, eliminar o sustituir | Extraer una parte |
| Modifica el original | Sí | No |
| Devuelve | Elementos eliminados | Nuevo array |
| Permite insertar | Sí | No |
| Permite eliminar | Sí | No directamente |

Ejemplo comparativo:

```javascript
const datos1 = [10, 20, 30, 40];
const datos2 = [10, 20, 30, 40];

const resultado1 = datos1.splice(1, 2);
const resultado2 = datos2.slice(1, 3);

console.log(datos1);
console.log(resultado1);

console.log(datos2);
console.log(resultado2);
```

Resultado:

```text
[10, 40]
[20, 30]

[10, 20, 30, 40]
[20, 30]
```

**Regla para recordar:**

- `splice()` modifica el array.
- `slice()` obtiene una parte sin modificarlo.

Si tienes dudas, recuerda que `splice()` es el método que puede hacer cirugía en el array. `slice()` solamente se lleva una porción.

## 9. Métodos para buscar elementos

En muchas aplicaciones necesitamos localizar un elemento dentro de un array.

JavaScript proporciona varios métodos para realizar búsquedas.

### 9.1. `indexOf()`: obtener la posición de un elemento

El método `indexOf()` devuelve el índice de la primera aparición de un elemento.

**Sintaxis:**

```javascript
array.indexOf(elemento);
```

Si encuentra el elemento, devuelve su posición. Si no lo encuentra, devuelve `-1`.

**Ejemplo:**

```javascript
const frutas = ["manzana", "pera", "plátano"];

const posicion = frutas.indexOf("pera");

console.log(posicion);
```

Resultado:

```text
1
```

Si el elemento no existe:

```javascript
const posicion = frutas.indexOf("naranja");

console.log(posicion);
```

Resultado:

```text
-1
```

También podemos indicar desde qué posición queremos comenzar la búsqueda:

```javascript
const numeros = [10, 20, 30, 20, 40];

console.log(numeros.indexOf(20));    // 1
console.log(numeros.indexOf(20, 2)); // 3
```

### 9.2. `includes()`: comprobar si existe un elemento

El método `includes()` permite comprobar si un array contiene un determinado valor.

Devuelve un valor booleano:

- `true`: el elemento existe.
- `false`: el elemento no existe.

**Sintaxis:**

```javascript
array.includes(elemento);
```

**Ejemplo:**

```javascript
const asignaturas = ["DWEC", "DIW", "AO"];

console.log(asignaturas.includes("DWEC"));
console.log(asignaturas.includes("Inglés"));
```

Resultado:

```text
true
false
```

Podemos utilizarlo directamente en una condición:

```javascript
const usuarios = ["Ana", "Luis", "Marta"];

const nuevoUsuario = "Luis";

if (usuarios.includes(nuevoUsuario)) {
    console.log("El usuario ya está registrado.");
} else {
    console.log("El usuario puede registrarse.");
}
```

### 9.3. Diferencias entre `indexOf()` e `includes()`

| Método | Resultado | Uso principal |
|---|---|---|
| `indexOf()` | Número o `-1` | Conocer la posición |
| `includes()` | `true` o `false` | Comprobar existencia |

Ejemplo:

```javascript
const productos = ["Teclado", "Ratón", "Monitor"];

if (productos.includes("Ratón")) {
    console.log("Producto disponible.");
}

const posicion = productos.indexOf("Ratón");

console.log("Posición:", posicion);
```

### 9.4. Buscar elementos en arrays de objetos

Hay una limitación importante: `indexOf()` e `includes()` no permiten buscar directamente un objeto por el contenido de sus propiedades.

Ejemplo:

```javascript
const alumnos = [
    { nombre: "Ana", edad: 20 },
    { nombre: "Luis", edad: 22 }
];

console.log(alumnos.includes({ nombre: "Ana", edad: 20 }));
```

El resultado será:

```text
false
```

Esto sucede porque JavaScript compara los objetos por referencia, no por el contenido de sus propiedades.

Para resolver búsquedas de este tipo existen otros métodos, que estudiaremos más adelante.

## 10. Combinar arrays con `concat()`

El método `concat()` permite unir dos o más arrays y obtener un nuevo array con todos sus elementos.

**Sintaxis:**

```javascript
array1.concat(array2, array3, ...);
```

No modifica los arrays originales.

**Ejemplo:**

```javascript
const grupoA = ["Ana", "Luis"];
const grupoB = ["Marta", "Pedro"];

const grupoCompleto = grupoA.concat(grupoB);

console.log(grupoCompleto);
```

Resultado:

```text
["Ana", "Luis", "Marta", "Pedro"]
```

Los arrays originales permanecen intactos.

### 10.1. Combinar varios arrays

```javascript
const numeros1 = [1, 2];
const numeros2 = [3, 4];
const numeros3 = [5, 6];

const resultado = numeros1.concat(numeros2, numeros3);

console.log(resultado);
```

Resultado:

```text
[1, 2, 3, 4, 5, 6]
```

También podemos añadir valores individuales:

```javascript
const frutas = ["manzana", "pera"];

const resultado = frutas.concat("plátano", "naranja");

console.log(resultado);
```

Resultado:

```text
["manzana", "pera", "plátano", "naranja"]
```

### 10.2. Combinar arrays utilizando spread

Otra posibilidad es utilizar el operador spread:

```javascript
const grupoA = ["Ana", "Luis"];
const grupoB = ["Marta", "Pedro"];

const resultado = [...grupoA, ...grupoB];

console.log(resultado);
```

Ambas alternativas permiten combinar colecciones sin modificar los arrays originales.

## 11. Convertir arrays en cadenas con `join()`

El método `join()` permite convertir los elementos de un array en una única cadena de texto.

Podemos elegir el separador que queremos utilizar entre los elementos.

**Sintaxis:**

```javascript
array.join(separador);
```

Si no indicamos ningún separador, JavaScript utilizará una coma.

### 11.1. Utilizar el separador predeterminado

```javascript
const frutas = ["manzana", "pera", "plátano"];

const resultado = frutas.join();

console.log(resultado);
```

Resultado:

```text
manzana,pera,plátano
```

### 11.2. Elegir un separador

```javascript
const frutas = ["manzana", "pera", "plátano"];

const resultado = frutas.join(" - ");

console.log(resultado);
```

Resultado:

```text
manzana - pera - plátano
```

Podemos utilizar diferentes separadores:

```javascript
const numeros = [10, 20, 30];

console.log(numeros.join(" "));
console.log(numeros.join(" | "));
console.log(numeros.join(""));
```

Resultado:

```text
10 20 30
10 | 20 | 30
102030
```

### 11.3. Ejemplo práctico: generar una lista de productos

```javascript
const productos = [
    "Teclado",
    "Ratón",
    "Monitor",
    "Impresora"
];

const lista = productos.join(", ");

console.log("Productos disponibles: " + lista);
```

Resultado:

```text
Productos disponibles: Teclado, Ratón, Monitor, Impresora
```

Este método resulta útil cuando necesitamos presentar información de un array en una cadena de texto.

## 12. Resumen general de los métodos

| Método | Función | Modifica el original |
|---|---|---|
| `push()` | Añadir al final | Sí |
| `pop()` | Eliminar el último | Sí |
| `unshift()` | Añadir al principio | Sí |
| `shift()` | Eliminar el primero | Sí |
| `splice()` | Insertar, eliminar o sustituir | Sí |
| `slice()` | Extraer una parte | No |
| `indexOf()` | Obtener la posición de un elemento | No |
| `includes()` | Comprobar si existe un elemento | No |
| `concat()` | Combinar arrays | No |
| `join()` | Convertir un array en cadena | No |

## 13. Ejercicios prácticos

Los siguientes ejercicios están organizados de menor a mayor dificultad. Debes resolverlos utilizando los métodos estudiados.

No se trata únicamente de conseguir que el programa funcione: también debes elegir el método adecuado y justificar tu elección.

### Nivel 1. Fundamentos

#### E01 - Añadir productos

Crea un array llamado `productos` que contenga inicialmente:

- Teclado
- Ratón
- Monitor

Realiza las siguientes operaciones:

1. Añade un producto al final.
2. Añade otro producto al principio.
3. Muestra el array completo.
4. Muestra su longitud.

#### E02 - Eliminar elementos

Crea un array con los siguientes nombres:

```javascript
const alumnos = ["Ana", "Luis", "Marta", "Pedro"];
```

Realiza estas operaciones:

1. Elimina el último alumno.
2. Muestra el nombre eliminado.
3. Elimina el primer alumno.
4. Muestra el nombre eliminado.
5. Muestra el array resultante.

#### E03 - Insertar elementos

Partiendo del siguiente array:

```javascript
const asignaturas = ["DWEC", "DIW", "Inglés"];
```

Realiza las siguientes operaciones:

1. Inserta `"AO"` en la posición 1.
2. Inserta `"Empresa"` al final.
3. Muestra el resultado.

#### E04 - Buscar elementos

Crea el siguiente array:

```javascript
const usuarios = ["Ana", "Luis", "Marta", "Pedro"];
```

Realiza las siguientes operaciones:

1. Comprueba si existe `"Marta"`.
2. Comprueba si existe `"Carlos"`.
3. Obtén la posición de `"Pedro"`.
4. Intenta obtener la posición de `"Carlos"`.
5. Muestra los resultados con mensajes descriptivos.

### Nivel 2. Aplicación

#### E05 - Modificar una lista de tareas

Crea un array con las siguientes tareas:

```javascript
const tareas = [
    "Preparar documentación",
    "Estudiar JavaScript",
    "Realizar ejercicios",
    "Entregar proyecto",
    "Revisar apuntes"
];
```

Realiza las siguientes operaciones:

1. Elimina la tarea situada en el índice 2.
2. Inserta `"Practicar arrays"` en la posición 1.
3. Sustituye `"Revisar apuntes"` por `"Preparar examen"`.
4. Muestra el array después de cada operación.

#### E06 - Extraer información

Crea un array con los nombres de diez ciudades.

Realiza las siguientes operaciones:

1. Obtén un nuevo array con las tres primeras ciudades.
2. Obtén otro array con las tres últimas ciudades.
3. Obtén un array con las ciudades situadas entre las posiciones 3 y 6, sin incluir el índice final.
4. Comprueba que el array original no ha cambiado.

#### E07 - Unificar grupos

Una empresa tiene dos departamentos con sus respectivos empleados:

```javascript
const departamentoA = ["Ana", "Luis", "Marta"];
const departamentoB = ["Pedro", "Carlos", "Laura"];
```

Realiza las siguientes operaciones:

1. Combina los dos departamentos en un único array.
2. Añade dos empleados más al resultado.
3. Genera una cadena con todos los nombres separados por `" - "`.
4. Muestra los arrays originales para comprobar que no han cambiado.

#### E08 - Control de inventario

Una tienda dispone de los siguientes productos:

```javascript
const inventario = [
    "Teclado",
    "Ratón",
    "Monitor",
    "Impresora",
    "Webcam"
];
```

Desarrolla un programa que permita:

1. Comprobar si existe `"Monitor"`.
2. Obtener la posición de `"Webcam"`.
3. Eliminar `"Impresora"`.
4. Insertar `"Altavoces"` en la posición 2.
5. Mostrar el inventario actualizado.

### Nivel 3. Razonamiento y dominio

#### E09 - Analizar el comportamiento de los métodos

Sin ejecutar inicialmente el código, indica qué resultado aparecerá en cada `console.log()` y justifica tus respuestas.

```javascript
const numeros = [10, 20, 30, 40, 50];

const resultado1 = numeros.slice(1, 3);

console.log(numeros);
console.log(resultado1);

const resultado2 = numeros.splice(1, 2);

console.log(numeros);
console.log(resultado2);

numeros.push(60);
numeros.unshift(5);

console.log(numeros);

const resultado3 = numeros.join(" - ");

console.log(resultado3);
```

Después, ejecuta el programa y comprueba tus predicciones.

#### E10 - Diseñar una solución

Una aplicación necesita gestionar una lista de participantes de un curso.

Inicialmente tenemos:

```javascript
const participantes = [
    "Ana",
    "Luis",
    "Marta",
    "Pedro",
    "Laura"
];
```

Desarrolla un programa que realice estas operaciones:

1. Comprueba si `"Marta"` está inscrita.
2. Elimina al último participante.
3. Incorpora `"Carlos"` al principio.
4. Sustituye a `"Luis"` por `"Javier"`.
5. Obtiene una copia de los tres primeros participantes.
6. Combina esa copia con un segundo grupo:

```javascript
const segundoGrupo = ["Sergio", "Elena"];
```

7. Genera una cadena con todos los participantes del grupo combinado.
8. Muestra el resultado de cada operación.

**Condición:** utiliza los métodos estudiados y evita modificar innecesariamente los arrays originales.

## 14. Reto integrador: gestión de una tienda

### Contexto

Una tienda de informática necesita una pequeña aplicación para gestionar los productos disponibles.

La aplicación debe permitir añadir productos, retirar productos, modificar el catálogo, consultar existencias y generar un listado para mostrarlo al usuario.

Partimos del siguiente catálogo:

```javascript
const catalogo = [
    "Teclado mecánico",
    "Ratón inalámbrico",
    "Monitor 24 pulgadas",
    "Impresora láser",
    "Webcam HD"
];
```

### Requisitos funcionales

Desarrolla un programa que realice las siguientes operaciones:

**1. Incorporar productos**

Añade `"Auriculares"` al final del catálogo.

Añade `"Portátil"` al principio.

**2. Retirar productos**

Elimina el último producto y guarda el nombre en una variable.

Elimina el primer producto y guarda también su nombre.

**3. Modificar el catálogo**

Sustituye `"Monitor 24 pulgadas"` por `"Monitor 27 pulgadas"`.

Inserta `"Altavoces"` en la posición 2.

**4. Consultar productos**

Comprueba si existe `"Ratón inalámbrico"`.

Obtén la posición de `"Webcam HD"`.

Comprueba si existe `"Tablet"`.

**5. Crear una selección**

Obtén una copia con los tres primeros productos del catálogo.

No debes modificar el catálogo original al realizar esta operación.

**6. Incorporar otro departamento**

Crea un segundo array:

```javascript
const accesorios = [
    "Alfombrilla",
    "Cable HDMI",
    "Adaptador USB"
];
```

Combina ambos arrays en una nueva colección.

**7. Generar un listado**

Convierte el catálogo final en una cadena de texto, separando los productos mediante `" | "`.

### Resultado esperado

El programa debe mostrar:

- El catálogo después de las modificaciones.
- Los productos eliminados.
- El resultado de las búsquedas.
- La selección de los tres primeros productos.
- El catálogo combinado con los accesorios.
- El listado final en una única cadena.

### Condiciones técnicas

- Utiliza los métodos de arrays estudiados.
- No reconstruyas manualmente los arrays cuando puedas utilizar un método.
- Comprueba el resultado de cada operación.
- Utiliza nombres de variables descriptivos.
- Añade comentarios para explicar las operaciones importantes.

## 15. Errores frecuentes

### Error 1. Confundir `slice()` con `splice()`

Incorrecto:

```javascript
const numeros = [10, 20, 30, 40];

numeros.slice(1, 2);

console.log(numeros);
```

El array no cambia porque `slice()` devuelve otro array.

Si queremos eliminar elementos del original, debemos utilizar `splice()`.

### Error 2. Olvidar que `splice()` modifica el array

```javascript
const numeros = [10, 20, 30, 40];

const resultado = numeros.splice(1, 2);

console.log(numeros);
console.log(resultado);
```

El array original ha cambiado. El resultado contiene los elementos eliminados.

### Error 3. Confundir el valor devuelto por `push()` con el array

```javascript
const numeros = [10, 20];

const resultado = numeros.push(30);

console.log(resultado);
```

El resultado es `3`, porque `push()` devuelve la nueva longitud del array, no el propio array.

### Error 4. No comprobar el resultado de `indexOf()`

```javascript
const nombres = ["Ana", "Luis"];

const posicion = nombres.indexOf("Carlos");

console.log(posicion);
```

El resultado es `-1`. No debemos interpretar este valor como una posición válida.

### Error 5. Confundir los índices de `slice()`

```javascript
const numeros = [10, 20, 30, 40, 50];

console.log(numeros.slice(1, 4));
```

El resultado es:

```text
[20, 30, 40]
```

El índice final no se incluye.

### Error 6. Pensar que `concat()` modifica los arrays

```javascript
const a = [1, 2];
const b = [3, 4];

a.concat(b);

console.log(a);
```

El resultado sigue siendo:

```text
[1, 2]
```

Para conservar la combinación debemos guardar el resultado:

```javascript
const resultado = a.concat(b);
```

## 16. Buenas prácticas

1. Utiliza `push()` y `pop()` cuando trabajes con elementos del final del array.
2. Utiliza `unshift()` y `shift()` cuando necesites operar con el principio.
3. Utiliza `splice()` cuando debas modificar posiciones concretas.
4. Utiliza `slice()` cuando quieras obtener una parte sin alterar el original.
5. Utiliza `includes()` cuando solo necesites comprobar si existe un valor.
6. Utiliza `indexOf()` cuando necesites conocer la posición de un elemento.
7. Utiliza `concat()` para combinar colecciones sin modificar las originales.
8. Utiliza `join()` para presentar los elementos de un array como texto.
9. Comprueba siempre qué devuelve cada método.
10. No modifiques un array si necesitas conservar su contenido original para otras operaciones.

## 17. Autoevaluación

Responde a las siguientes preguntas sin consultar los ejemplos.

**P01.** ¿Qué método permite añadir un elemento al final de un array?

**P02.** ¿Qué devuelve `pop()`?

**P03.** ¿Qué diferencia existe entre `shift()` y `unshift()`?

**P04.** ¿Qué método permite insertar un elemento en una posición concreta?

**P05.** ¿Qué diferencia fundamental existe entre `splice()` y `slice()`?

**P06.** ¿Qué devuelve `indexOf()` cuando no encuentra un elemento?

**P07.** ¿Qué devuelve `includes()`?

**P08.** ¿Qué método permite combinar dos arrays?

**P09.** ¿Qué método convierte los elementos de un array en una cadena?

**P10.** ¿Qué ocurre si ejecutamos `push()` sobre un array y guardamos el resultado en una variable?

**P11.** ¿El método `concat()` modifica los arrays originales?

**P12.** ¿Qué significa que el segundo índice de `slice()` no se incluya?

**P13.** ¿Qué método utilizarías para eliminar dos elementos desde el índice 3?

**P14.** ¿Qué método utilizarías para comprobar si existe un usuario en una lista?

**P15.** Si necesitas obtener una copia de un array sin modificar el original, ¿qué método puedes utilizar?

## 18. Checklist de aprendizaje

Antes de considerar finalizada esta sesión, comprueba que puedes realizar las siguientes operaciones:

- [ ] Añadir elementos al final mediante `push()`.
- [ ] Añadir elementos al principio mediante `unshift()`.
- [ ] Eliminar el último elemento mediante `pop()`.
- [ ] Eliminar el primer elemento mediante `shift()`.
- [ ] Insertar elementos en posiciones concretas mediante `splice()`.
- [ ] Eliminar elementos utilizando `splice()`.
- [ ] Sustituir elementos utilizando `splice()`.
- [ ] Extraer una parte de un array mediante `slice()`.
- [ ] Diferenciar correctamente entre `splice()` y `slice()`.
- [ ] Buscar elementos mediante `indexOf()`.
- [ ] Comprobar la existencia de elementos mediante `includes()`.
- [ ] Combinar arrays mediante `concat()`.
- [ ] Convertir arrays en cadenas mediante `join()`.
- [ ] Identificar cuándo se modifica el array original.

## 19. Conclusión

Los métodos de arrays permiten trabajar con colecciones de datos de una manera mucho más sencilla y organizada.

En esta sesión hemos aprendido a añadir, eliminar, insertar, sustituir, extraer, buscar y combinar elementos.

Estos conocimientos son fundamentales para desarrollar aplicaciones JavaScript capaces de gestionar información dinámica.

En la siguiente sesión aplicaremos los conocimientos adquiridos mediante un reto integrador de la unidad, combinando los objetos predefinidos y las operaciones con arrays.