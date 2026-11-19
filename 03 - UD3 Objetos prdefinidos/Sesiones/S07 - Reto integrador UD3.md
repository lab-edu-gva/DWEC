---

tipo: actividad-practica  
asignatura: DWEC  
curso: 2º DAW  
unidad: UD3 - Objetos predefinidos del lenguaje, BOM y almacenamiento  
titulo: Reto integrador UD3 - Sistema de gestión económica de una excursión  
sesion: S07  
duracion: 60 minutos  
estado: preparado  
destinatario: alumnado  
dificultad: intermedio-alto  
etiquetas:

- DWEC
    
- JavaScript
    
- UD3
    
- Number
    
- Math
    
- Date
    
- Arrays
    
- reto-practico
    

---

# Reto integrador UD3: Sistema de gestión económica de una excursión

<small>DWEC · 2.º DAW · Duración: 60 minutos · Dificultad: Intermedio-alto</small>

## 1. Contexto

El departamento de actividades extraescolares está organizando una excursión para el alumnado del centro.

Se necesita desarrollar una pequeña aplicación en JavaScript que permita analizar los gastos previstos, comprobar las aportaciones de los participantes y generar un informe económico.

Los datos iniciales contienen algunos errores: cantidades almacenadas como texto, valores vacíos y aportaciones incorrectas. Por tanto, no basta con realizar operaciones matemáticas: será necesario validar, transformar y procesar correctamente la información.

El objetivo es construir un programa que genere un resumen económico fiable.

## 2. Objetivos

Al finalizar la actividad deberás ser capaz de:

- Convertir y validar valores numéricos mediante `Number()`.
    
- Detectar valores no válidos utilizando `Number.isFinite()`.
    
- Procesar colecciones con `map()`, `filter()`, `reduce()`, `find()`, `sort()` e `includes()`.
    
- Realizar cálculos utilizando el objeto `Math`.
    
- Trabajar con fechas mediante el objeto `Date`.
    
- Organizar los resultados en un informe comprensible.
    
- Evitar modificar innecesariamente los datos originales.
    

## 3. Datos iniciales

Crea un archivo JavaScript y define los siguientes datos:

### Gastos previstos

```
const gastos = [
    { concepto: "Autobús", categoria: "Transporte", importe: "450" },
    { concepto: "Comida", categoria: "Alimentación", importe: "320" },
    { concepto: "Entradas", categoria: "Actividades", importe: "180" },
    { concepto: "Seguro", categoria: "Seguridad", importe: "75" },
    { concepto: "Material", categoria: "Material", importe: "45.50" },
    { concepto: "Extra", categoria: "Otros", importe: "" },
    { concepto: "Reserva", categoria: "Transporte", importe: "abc" },
    { concepto: "Imprevistos", categoria: "Otros", importe: "-50" }
];
```

### Participantes

```
const participantes = [
    { nombre: "Ana", aportacion: "100" },
    { nombre: "Luis", aportacion: "100" },
    { nombre: "Marta", aportacion: "75" },
    { nombre: "Carlos", aportacion: "50" },
    { nombre: "Lucía", aportacion: "120" },
    { nombre: "Pablo", aportacion: "0" },
    { nombre: "Elena", aportacion: "abc" },
    { nombre: "David", aportacion: "150" },
    { nombre: "Sara", aportacion: "" },
    { nombre: "Jorge", aportacion: "80" }
];
```

### Configuración

```
const presupuestoMaximo = 1200;

const fechaExcursion = new Date(2026, 11, 18);

const fechaLimitePago = new Date(2026, 11, 11);
```

> Recuerda que los meses del objeto `Date` empiezan en cero: enero es 0 y diciembre es 11.

## 4. Parte 1. Validación de gastos

Antes de realizar cálculos, debes comprobar que los importes son válidos.

1. Convierte cada importe a número.
    
2. Comprueba que el resultado es un número finito.
    
3. Rechaza los importes vacíos, negativos o iguales a cero.
    
4. Crea dos arrays:
    
    - `gastosValidos`: contiene los gastos correctos.
        
    - `gastosRechazados`: contiene los gastos que no superan la validación.
        

**Condición:** no debes modificar el array original `gastos`.

**Resultado esperado:** los gastos válidos deben conservar su concepto, categoría e importe numérico.

## 5. Parte 2. Resumen económico

A partir de los gastos válidos, calcula:

1. Importe total de los gastos.
    
2. Gasto más elevado.
    
3. Gasto más reducido.
    
4. Número de gastos aceptados.
    
5. Número de gastos rechazados.
    
6. Dinero disponible respecto al presupuesto máximo.
    
7. Porcentaje del presupuesto consumido.
    

Utiliza los métodos de arrays y las funciones de `Math` que consideres apropiados.

Redondea los resultados económicos a dos decimales.

**Condición:** si el gasto total supera el presupuesto, el programa debe indicarlo claramente.

## 6. Parte 3. Análisis por categorías

El programa debe generar un resumen de gastos agrupados por categoría.

Para cada categoría calcula:

- Nombre de la categoría.
    
- Número de gastos asociados.
    
- Importe total.
    
- Porcentaje que representa sobre el gasto total.
    

No escribas manualmente los resultados: deben calcularse a partir del array `gastosValidos`.

**Pista:** puedes obtener primero las categorías sin repetir y después recorrerlas para calcular sus importes.

## 7. Parte 4. Análisis de participantes

Ahora debes analizar las aportaciones económicas.

1. Convierte las aportaciones a números.
    
2. Identifica las aportaciones válidas.
    
3. Rechaza valores vacíos, no numéricos y negativos.
    
4. Calcula el dinero total recaudado.
    
5. Identifica a los participantes que todavía no han aportado dinero.
    
6. Identifica a quienes han aportado 100 € o más.
    
7. Ordena los participantes válidos por aportación, de mayor a menor.
    
8. Calcula cuánto debería aportar cada participante si el coste total se repartiera por igual entre todos los participantes válidos.
    

**Importante:** una aportación de 0 € es válida, aunque representa que esa persona todavía no ha pagado.

## 8. Parte 5. Control de fechas

Utilizando el objeto `Date`, calcula:

1. Cuántos días faltan para la excursión.
    
2. Si todavía se puede realizar el pago antes de la fecha límite.
    
3. Cuántos días quedan hasta la fecha límite.
    
4. Si la excursión ya ha pasado.
    

Para realizar los cálculos, utiliza una fecha actual creada mediante `new Date()`.

Evita calcular los días dividiendo directamente fechas sin tener en cuenta que pueden existir cambios de hora. Trabaja con diferencias de tiempo y redondea los días de forma coherente.

## 9. Parte 6. Informe final

El programa debe mostrar un informe organizado en consola.

La estructura mínima será:

```
========================================
       INFORME DE LA EXCURSIÓN
========================================

GASTOS
----------------------------------------
Total de gastos:
Presupuesto máximo:
Dinero disponible:
Porcentaje consumido:
Gastos aceptados:
Gastos rechazados:

CATEGORÍAS
----------------------------------------
Transporte:
Alimentación:
Actividades:
...

PARTICIPANTES
----------------------------------------
Total recaudado:
Participantes válidos:
Participantes pendientes:
Participantes con 100 € o más:

FECHAS
----------------------------------------
Fecha de excursión:
Días restantes:
Fecha límite de pago:
Estado del plazo:

========================================
```

Puedes mejorar la presentación utilizando `console.log()`, plantillas literales y funciones auxiliares.

## 10. Requisitos técnicos

Tu solución debe utilizar obligatoriamente:

|Objeto o método|Aplicación|
|---|---|
|`Number()`|Conversión de importes|
|`Number.isFinite()`|Validación numérica|
|`Math.round()`|Redondeo|
|`Math.max()`|Valor máximo|
|`Math.min()`|Valor mínimo|
|`Date`|Gestión de fechas|
|`map()`|Transformación de datos|
|`filter()`|Filtrado|
|`reduce()`|Acumulación|
|`find()`|Búsqueda de elementos|
|`sort()`|Ordenación|
|`includes()`|Comprobación de pertenencia|
|`forEach()`|Recorrido de resultados|

Puedes utilizar otros métodos si lo consideras necesario.

## 11. Preguntas de reflexión

Responde al finalizar:

1. ¿Por qué es necesario convertir los importes antes de realizar operaciones matemáticas?
    
2. ¿Qué diferencia existe entre `isNaN()` y `Number.isFinite()`?
    
3. ¿Por qué es conveniente conservar los datos originales?
    
4. ¿Qué ventajas aporta utilizar `reduce()` para calcular el gasto total?
    
5. ¿Qué problemas pueden aparecer al trabajar con fechas y horas?
    
6. ¿Qué ocurriría si todos los gastos fueran rechazados?

**Criterios de calidad:**

- Código ordenado e indentado.
    
- Variables con nombres descriptivos.
    
- Validaciones correctas.
    
- Resultados coherentes.
    
- No modificar los datos originales.
    
- Evitar repetir código innecesariamente.

> **Consejo:** no intentes resolver todo de golpe. Divide el problema en pequeñas funciones, comprueba cada resultado y construye el informe al final. Un programa que calcula bien vale más que uno que imprime muchas cosas muy bonitas y todas mal.