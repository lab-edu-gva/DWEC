---
asignatura: DWEC
unidad: UD3
sesion: S03
duracion: 55 minutos
tipo: material-alumnado
estado: preparado
ra: RA3
publicar: true
---

# S03 — El objeto Date

## Objetivos

- Crear objetos `Date`.
- Obtener día, mes, año, horas y minutos.
- Comprender las particularidades de los meses y días de la semana.
- Mostrar fechas con un formato legible.

## 1. Crear fechas

```javascript
let ahora = new Date();
console.log(ahora);
```

Crear una fecha concreta:

```javascript
let fecha = new Date(2026, 10, 8);
console.log(fecha);
```

**Atención:** los meses empiezan en cero. Enero es `0`, febrero es `1` y diciembre es `11`. En el ejemplo, `10` representa noviembre.

También podemos crear una fecha a partir de una cadena ISO:

```javascript
let fechaISO = new Date("2026-11-08");
```

## 2. Obtener componentes

```javascript
let fecha = new Date();

console.log(fecha.getFullYear());
console.log(fecha.getMonth());    // 0 a 11
console.log(fecha.getDate());     // día del mes
console.log(fecha.getDay());      // 0 domingo ... 6 sábado
console.log(fecha.getHours());
console.log(fecha.getMinutes());
```

No confundas:

- `getDate()`: día del mes.
- `getDay()`: día de la semana.

## 3. Modificar fechas

```javascript
let fecha = new Date();

fecha.setDate(fecha.getDate() + 7);

console.log(fecha);
```

Este ejemplo desplaza la fecha siete días. JavaScript gestiona automáticamente el cambio de mes o de año cuando corresponde.

## 4. Mostrar una fecha de forma legible

```javascript
let fecha = new Date();

let opciones = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
};

console.log(fecha.toLocaleDateString("es-ES", opciones));
```

Para mostrar fecha y hora:

```javascript
console.log(
    fecha.toLocaleString("es-ES")
);
```

## Ejercicios

### Ejercicio 1 — Fecha actual

Muestra por consola el año, mes, día del mes, día de la semana, hora y minutos actuales.

### Ejercicio 2 — Cumpleaños

Crea un objeto `Date` con una fecha de cumpleaños concreta. Muestra el día, el mes y el año. Recuerda que el mes comienza en cero.

### Ejercicio 3 — Dentro de siete días

Obtén la fecha actual, calcula la fecha de dentro de siete días y muestra ambas con formato español.

### Ejercicio 4 — ¿Ha caducado?

Declara una fecha de caducidad y compárala con la fecha actual.

El programa debe indicar si el producto está caducado o todavía está dentro de plazo.

Pista: los objetos `Date` pueden compararse mediante sus valores temporales, por ejemplo con `getTime()`.

### Reto — Días entre fechas

Crea dos fechas y calcula cuántos días completos hay entre ellas.

Pista:

```javascript
let diferenciaMilisegundos = Math.abs(fecha2.getTime() - fecha1.getTime());
```

Un día tiene `24 * 60 * 60 * 1000` milisegundos. Ten en cuenta que este cálculo mide intervalos de 24 horas; no es una solución general para todas las particularidades de calendarios y zonas horarias.

## Entrega

Entrega el código de los ejercicios y comprueba varios casos, incluyendo un cambio de mes.
