---
asignatura: DWEC
unidad: UD3
sesion: S02
duracion: 55 minutos
tipo: material-alumnado
estado: preparado
ra: RA3
publicar: true
---

# S02 — El objeto Math

## Objetivos

- Utilizar constantes y métodos del objeto `Math`.
- Redondear números.
- Obtener valores mínimos y máximos.
- Generar números aleatorios y controlar sus rangos.

## 1. ¿Qué es Math?

`Math` es un objeto predefinido de JavaScript que proporciona propiedades y métodos para realizar operaciones matemáticas. No necesitamos crear una instancia.

```javascript
console.log(Math.PI);
console.log(Math.sqrt(81));
```

## 2. Redondear números

```javascript
console.log(Math.round(4.4)); // 4
console.log(Math.round(4.5)); // 5

console.log(Math.floor(4.9)); // 4
console.log(Math.ceil(4.1));  // 5
```

- `Math.round()`: redondea al entero más cercano.
- `Math.floor()`: redondea hacia abajo.
- `Math.ceil()`: redondea hacia arriba.

## 3. Mínimo, máximo y valor absoluto

```javascript
console.log(Math.min(8, 3, 12)); // 3
console.log(Math.max(8, 3, 12)); // 12
console.log(Math.abs(-15));     // 15
```

Para pasar un array como conjunto de argumentos podemos utilizar el operador spread:

```javascript
let notas = [7, 4, 9, 6];

console.log(Math.max(...notas)); // 9
```

## 4. Potencias y raíces

```javascript
console.log(Math.pow(2, 3)); // 8
console.log(2 ** 3);         // 8
console.log(Math.sqrt(64));  // 8
```

## 5. Números aleatorios

`Math.random()` devuelve un número decimal mayor o igual que 0 y menor que 1.

```javascript
console.log(Math.random());
```

Entero entre 0 y 9:

```javascript
let numero = Math.floor(Math.random() * 10);
```

Entero entre 1 y 10:

```javascript
let numero = Math.floor(Math.random() * 10) + 1;
```

Fórmula general para obtener un entero entre `min` y `max`, ambos incluidos:

```javascript
let numero = Math.floor(Math.random() * (max - min + 1)) + min;
```

## Ejercicios

### Ejercicio 1 — Redondeos

Crea variables con los valores `4.2`, `4.5` y `4.9`. Muestra para cada uno el resultado de `round()`, `floor()` y `ceil()`.

### Ejercicio 2 — Temperaturas

Dispones de estas temperaturas:

```javascript
let temperaturas = [18.5, 22.3, 16.8, 25.1, 19.7];
```

Muestra la temperatura mínima, la máxima y la diferencia entre ambas.

### Ejercicio 3 — Generador de números

Genera y muestra:

1. Un entero entre 1 y 6, como si fuera un dado.
2. Un entero entre 1 y 100.
3. Cinco números entre 1 y 10.

### Ejercicio 4 — Precio con descuento

Declara un precio de `79.90` y un descuento del 15 %. Calcula el precio final y muestra el resultado con dos decimales.

### Reto — Simulador de dado

Simula 100 lanzamientos de un dado. Cuenta cuántas veces aparece cada resultado del 1 al 6 y muestra las frecuencias.

## Entrega

Entrega el código y una breve explicación de la fórmula que has utilizado para generar números aleatorios dentro de un intervalo.
