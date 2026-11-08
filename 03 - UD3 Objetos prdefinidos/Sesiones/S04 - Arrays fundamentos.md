---
asignatura: DWEC
unidad: UD3
sesion: S04
duracion: 55 minutos
tipo: material-alumnado
estado: preparado
ra: RA3
publicar: true
---

# S04 — Arrays: creación, acceso y modificación

## Objetivos

- Crear arrays.
- Consultar elementos mediante su índice.
- Conocer la propiedad `length`.
- Añadir, modificar y eliminar elementos.

## 1. ¿Qué es un array?

Un array permite almacenar varios valores en una misma variable.

```javascript
let frutas = ["manzana", "pera", "naranja"];
```

Los índices comienzan en cero:

```javascript
console.log(frutas[0]); // manzana
console.log(frutas[1]); // pera
console.log(frutas[2]); // naranja
```

## 2. Longitud

La propiedad `length` indica cuántos elementos contiene el array.

```javascript
console.log(frutas.length); // 3
```

El último elemento está en la posición `length - 1`:

```javascript
console.log(frutas[frutas.length - 1]);
```

## 3. Modificar elementos

```javascript
frutas[1] = "melocotón";
```

## 4. Añadir y eliminar

```javascript
frutas.push("kiwi"); // añade al final
frutas.pop();        // elimina el último

frutas.unshift("uva"); // añade al principio
frutas.shift();        // elimina el primero
```

## 5. Recorrer un array

Con un bucle `for`:

```javascript
let notas = [7, 8, 5, 9];

for (let i = 0; i < notas.length; i++) {
    console.log(notas[i]);
}
```

Con `for...of`:

```javascript
for (let nota of notas) {
    console.log(nota);
}
```

## Ejercicios

### Ejercicio 1 — Lista de nombres

Crea un array con cinco nombres. Muestra el primero, el tercero y el último.

### Ejercicio 2 — Modificar la lista

Partiendo del array anterior:

1. Cambia el segundo nombre.
2. Añade un nombre al final.
3. Elimina el primero.
4. Muestra el array y su longitud.

### Ejercicio 3 — Sumar valores

Crea un array de cinco números y calcula la suma recorriéndolo con un bucle.

### Ejercicio 4 — Media de notas

Crea un array con seis notas. Calcula la suma y la media sin utilizar todavía `reduce()`.

### Reto — Inventario sencillo

Crea un array con cinco productos. Simula que llega un producto nuevo, que se vende el primero de la lista y que se modifica el nombre de uno de los restantes. Muestra el inventario final.

## Entrega

Entrega el código y explica qué diferencia hay entre el índice de un elemento y la longitud del array.
