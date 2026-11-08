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

# S05 — Métodos de arrays

## Objetivos

- Recorrer arrays con métodos de orden superior.
- Transformar elementos con `map()`.
- Filtrar elementos con `filter()`.
- Buscar elementos con `find()`.
- Calcular resultados con `reduce()`.

## 1. forEach()

Ejecuta una función para cada elemento. No crea un array nuevo.

```javascript
let nombres = ["Ana", "Luis", "Marta"];

nombres.forEach(function(nombre) {
    console.log(nombre);
});
```

## 2. map()

Crea un nuevo array transformando cada elemento.

```javascript
let numeros = [1, 2, 3];

let dobles = numeros.map(function(numero) {
    return numero * 2;
});

console.log(dobles); // [2, 4, 6]
```

## 3. filter()

Crea un nuevo array con los elementos que cumplen una condición.

```javascript
let edades = [15, 22, 17, 30];

let mayoresEdad = edades.filter(function(edad) {
    return edad >= 18;
});

console.log(mayoresEdad); // [22, 30]
```

## 4. find()

Devuelve el primer elemento que cumple la condición. Si no encuentra ninguno, devuelve `undefined`.

```javascript
let usuarios = ["Ana", "Luis", "Marta"];

let resultado = usuarios.find(function(nombre) {
    return nombre === "Luis";
});

console.log(resultado);
```

## 5. reduce()

Acumula los elementos del array en un único resultado.

```javascript
let numeros = [2, 4, 6];

let suma = numeros.reduce(function(acumulador, numero) {
    return acumulador + numero;
}, 0);

console.log(suma); // 12
```

El `0` es el valor inicial del acumulador.

## Comparación rápida

| Método | Para qué sirve | Resultado |
|---|---|---|
| `forEach()` | Ejecutar una acción por elemento | No crea un resultado nuevo |
| `map()` | Transformar elementos | Nuevo array |
| `filter()` | Filtrar elementos | Nuevo array |
| `find()` | Encontrar el primero que cumple | Elemento o `undefined` |
| `reduce()` | Acumular valores | Un resultado |

## Ejercicios

Trabaja con este array:

```javascript
let productos = [
    { nombre: "Teclado", precio: 25, stock: 8 },
    { nombre: "Ratón", precio: 15, stock: 0 },
    { nombre: "Monitor", precio: 180, stock: 4 },
    { nombre: "Webcam", precio: 45, stock: 10 },
    { nombre: "Auriculares", precio: 35, stock: 0 }
];
```

### Ejercicio 1 — Mostrar productos

Utiliza `forEach()` para mostrar el nombre y el precio de cada producto.

### Ejercicio 2 — Aplicar descuento

Utiliza `map()` para crear un nuevo array con los nombres y los precios con un descuento del 10 %. No modifiques el array original.

### Ejercicio 3 — Productos disponibles

Utiliza `filter()` para obtener los productos cuyo stock sea mayor que cero.

### Ejercicio 4 — Buscar un producto

Utiliza `find()` para localizar el producto llamado `"Monitor"`.

### Ejercicio 5 — Valor total del inventario

Utiliza `reduce()` para calcular el valor total del inventario: precio multiplicado por stock de cada producto.

### Reto — Informe de inventario

Obtén:

1. Un array con los nombres de todos los productos.
2. Un array con los productos sin stock.
3. El número total de unidades disponibles.
4. El valor económico total del inventario.

## Entrega

Entrega el código y explica con tus palabras la diferencia entre `map()`, `filter()` y `find()`.
