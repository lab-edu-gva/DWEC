---
asignatura: DWEC
unidad: UD3
sesion: S06
duracion: 55 minutos
tipo: material-alumnado
estado: preparado
ra: RA3
publicar: true
---

# S06 — Reto integrador: registro de actividad

## Situación

Una pequeña empresa quiere analizar una lista de actividades registradas durante la semana. Cada actividad contiene una descripción, una duración en minutos y una fecha.

```javascript
let actividades = [
    { descripcion: "Reunión", minutos: "45", fecha: "2026-11-02" },
    { descripcion: "Formación", minutos: "90", fecha: "2026-11-03" },
    { descripcion: "Soporte", minutos: "35", fecha: "2026-11-04" },
    { descripcion: "Documentación", minutos: "60", fecha: "2026-11-05" },
    { descripcion: "Revisión", minutos: "50", fecha: "2026-11-06" }
];
```

## Objetivos

Aplicar conjuntamente:

- `Number()` para convertir duraciones.
- `Date` para trabajar con fechas.
- Arrays y sus métodos para recorrer, filtrar y calcular.
- `Math` para realizar algún cálculo o redondeo.

## Tareas

### 1. Mostrar actividades

Recorre el array y muestra la descripción y la duración de cada actividad.

### 2. Calcular duración total

Convierte los minutos a números y calcula el total de minutos.

### 3. Calcular horas

Convierte el total de minutos a horas y minutos. Por ejemplo, 280 minutos son 4 horas y 40 minutos.

### 4. Buscar actividades largas

Crea un nuevo array con las actividades cuya duración sea igual o superior a 60 minutos.

### 5. Mostrar fechas

Convierte las fechas de texto a objetos `Date` y muestra cada fecha en formato español.

### 6. Informe final

Muestra:

- Número de actividades.
- Duración total en minutos.
- Duración total en horas y minutos.
- Número de actividades de 60 minutos o más.

## Ampliación

Añade una actividad nueva al array y vuelve a calcular el informe sin duplicar el código.

## Condiciones

- No modificar directamente los datos originales salvo cuando se solicite añadir una actividad.
- Utilizar nombres de variables descriptivos.
- Comprobar los resultados en la consola.
- Si una conversión numérica falla, informar del dato incorrecto en lugar de continuar con un cálculo erróneo.

## Entrega

Entrega un único archivo JavaScript con el reto resuelto y una captura o transcripción de la salida.
