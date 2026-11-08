---
asignatura: DWEC
unidad: UD3
sesion: S01
duracion: 55 minutos
tipo: material-alumnado
estado: preparado
ra: RA3
publicar: true
---

# S01 — Number y conversiones

## Objetivos

- Diferenciar valores de tipo `string` y `number`.
- Convertir cadenas a números.
- Utilizar `Number()`, `parseInt()` y `parseFloat()`.
- Detectar conversiones no válidas mediante `Number.isNaN()`.

## 1. Los números y las cadenas

```javascript
let edad = 25;
let edadTexto = "25";

console.log(typeof edad);       // "number"
console.log(typeof edadTexto);  // "string"
```

Aunque ambos valores parecen iguales, JavaScript los trata de forma distinta.

```javascript
console.log(edad + 5);       // 30
console.log(edadTexto + 5);  // "255"
```

Con `+`, JavaScript puede sumar números o concatenar cadenas.

## 2. Convertir con Number()

```javascript
let precioTexto = "19.95";
let precio = Number(precioTexto);

console.log(precio);        // 19.95
console.log(typeof precio); // "number"
```

Si el contenido no representa un número válido, el resultado será `NaN`.

```javascript
console.log(Number("hola")); // NaN
```

## 3. parseInt() y parseFloat()

`parseInt()` obtiene la parte entera inicial de una cadena:

```javascript
console.log(parseInt("25.8")); // 25
```

`parseFloat()` permite obtener un número decimal:

```javascript
console.log(parseFloat("25.8")); // 25.8
```

Diferencia importante:

| Expresión | Resultado |
|---|---:|
| `Number("25.8")` | `25.8` |
| `parseInt("25.8")` | `25` |
| `parseFloat("25.8")` | `25.8` |
| `Number("hola")` | `NaN` |
| `Number("")` | `0` |

`Number("")` devuelve `0`. En una aplicación real, una cadena vacía puede tener que tratarse como un dato ausente, no como un cero.

## 4. Comprobar resultados

```javascript
let valor = Number("hola");

if (Number.isNaN(valor)) {
    console.log("El valor no es un número válido");
} else {
    console.log("Valor:", valor);
}
```

También podemos comprobar si un valor es un entero:

```javascript
console.log(Number.isInteger(25));   // true
console.log(Number.isInteger(25.5)); // false
```

## 5. Ejercicios

### Ejercicio 1 — ¿Suma o concatena?

Sin ejecutar primero el código, predice el resultado de cada instrucción. Después comprueba tus respuestas.

```javascript
let a = 20;
let b = "20";
let c = "20.5";

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(a + 5);
console.log(b + 5);
console.log(Number(b) + 5);
```

Explica por qué los resultados no son todos iguales.

### Ejercicio 2 — Conversión sencilla

Crea un programa que:

1. Guarde el texto `"125"` en una variable.
2. Lo convierta a número con `Number()`.
3. Sume 25.
4. Muestre el resultado y su tipo.

### Ejercicio 3 — Calculadora de precios

Partimos de estos datos:

```javascript
let precio = "19.95";
let unidades = "3";
```

El programa debe convertir los datos, calcular el importe total y mostrar el resultado. Muestra también el tipo de las variables convertidas.

### Ejercicio 4 — Detectar valores no numéricos

```javascript
let datos = ["45", "12.5", "hola", "", "100"];
```

Recorre el array y muestra para cada elemento:

- Valor original.
- Resultado de `Number()`.
- Si el resultado es `NaN`.

Después responde: ¿por qué la cadena vacía no se detecta como `NaN`?

### Reto — Media de notas

```javascript
let nota1 = "7.5";
let nota2 = "8";
let nota3 = "6.5";
```

Convierte las notas, comprueba que ninguna sea `NaN` y calcula la media con dos decimales.

## Entrega

Entrega el archivo JavaScript con los ejercicios resueltos y comprueba su ejecución en el navegador o en el entorno indicado por el profesor.
