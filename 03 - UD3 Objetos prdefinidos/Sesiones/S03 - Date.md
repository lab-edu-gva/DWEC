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

1. Introducción

En muchas aplicaciones web necesitamos trabajar con fechas y horas.

Por ejemplo:

- Una tienda online debe registrar cuándo se realiza un pedido.
- Una aplicación de reservas necesita comprobar la fecha de una cita.
- Una plataforma educativa debe controlar las fechas de entrega de actividades.
- Una aplicación de control horario debe registrar las horas de entrada y salida de los trabajadores.
- Un sistema de noticias necesita mostrar cuándo se publicó un artículo.

JavaScript incorpora un objeto llamado `Date` que permite representar, consultar, modificar y realizar operaciones con fechas y horas.

Hasta ahora hemos trabajado con valores numéricos y operaciones matemáticas mediante `Number` y `Math`. En esta sesión aprenderemos a trabajar con información temporal.

### 1.1. ¿Qué es Date?

`Date` es un objeto incorporado en JavaScript que permite representar un instante concreto en el tiempo.

Para utilizarlo normalmente creamos una instancia mediante `new Date()`.

Ejemplo:

```javascript
let fechaActual = new Date();

console.log(fechaActual);
```

El resultado será una representación de la fecha y hora actuales del sistema.

Una posible salida:

```text
Mon Nov 09 2026 19:30:00 GMT+0100 (hora estándar de Europa central)
```

El resultado dependerá del momento de ejecución, del entorno y de la configuración regional.

A diferencia de `Math`, que se utiliza directamente sin crear instancias, `Date` es un constructor.

```javascript
// Correcto: creamos una instancia de Date.
let fecha = new Date();

// Incorrecto: no utilizamos Date directamente como si fuera un valor.
let fechaIncorrecta = Date();
```

La llamada `Date()` sin `new` devuelve una cadena con la fecha actual, no un objeto `Date`.

### 1.2. Objetivos de aprendizaje

Al finalizar esta sesión deberás ser capaz de:

- Comprender qué representa un objeto `Date`.
- Crear fechas utilizando diferentes constructores.
- Obtener la fecha y hora actuales.
- Consultar los componentes de una fecha.
- Modificar días, meses, años, horas y minutos.
- Comparar fechas.
- Realizar operaciones con fechas y marcas de tiempo.
- Comprender la diferencia entre fecha local y UTC.
- Formatear fechas para mostrarlas al usuario.
- Identificar los errores habituales al trabajar con fechas.

---

## 2. Crear objetos Date

JavaScript permite crear objetos `Date` de diferentes formas.

La elección dependerá de si necesitamos la fecha actual, una fecha concreta o un instante determinado.

### 2.1. Obtener la fecha y hora actuales

La forma más sencilla de crear un objeto `Date` es utilizar el constructor sin argumentos.

```javascript
let ahora = new Date();

console.log(ahora);
```

El objeto almacenará el instante actual.

Por ejemplo, si ejecutamos el programa el 9 de noviembre de 2026 a las 19:30, el resultado representará ese momento.

Es importante recordar que la fecha y hora se obtienen del reloj del sistema donde se ejecuta JavaScript.

Por tanto, no debemos asumir que el reloj del dispositivo del usuario siempre es correcto.

### 2.2. Crear una fecha indicando sus componentes

También podemos crear una fecha proporcionando el año, mes, día y otros componentes.

Sintaxis:

```javascript
new Date(año, mes, día, hora, minutos, segundos, milisegundos);
```

Los argumentos posteriores al año y al mes son opcionales.

Ejemplo:

```javascript
let fecha = new Date(2026, 10, 9);

console.log(fecha);
```

El resultado representará el 9 de noviembre de 2026 a las 00:00 en la zona horaria local.

**¡Cuidado! El mes comienza en cero.**

Esta es una de las particularidades más importantes de `Date`.

| Número del mes | Mes real |
|---:|---|
| 0 | Enero |
| 1 | Febrero |
| 2 | Marzo |
| 3 | Abril |
| 4 | Mayo |
| 5 | Junio |
| 6 | Julio |
| 7 | Agosto |
| 8 | Septiembre |
| 9 | Octubre |
| 10 | Noviembre |
| 11 | Diciembre |

Por tanto:

```javascript
let enero = new Date(2026, 0, 15);
let noviembre = new Date(2026, 10, 9);
let diciembre = new Date(2026, 11, 25);

console.log(enero);
console.log(noviembre);
console.log(diciembre);
```

Los resultados corresponderán al 15 de enero, al 9 de noviembre y al 25 de diciembre.

**Importante:** aunque el mes empieza en cero, el día del mes empieza en uno.

### 2.3. Crear una fecha indicando también la hora

Podemos proporcionar más argumentos para especificar la hora, los minutos, los segundos y los milisegundos.

```javascript
let fecha = new Date(2026, 10, 9, 19, 30, 45);

console.log(fecha);
```

Esta fecha representa:

- Año: 2026.
- Mes: noviembre.
- Día: 9.
- Hora: 19.
- Minutos: 30.
- Segundos: 45.
- Milisegundos: 0.

También podemos especificar los milisegundos:

```javascript
let fecha = new Date(2026, 10, 9, 19, 30, 45, 500);

console.log(fecha);
```

El último argumento representa 500 milisegundos.

### 2.4. Crear una fecha a partir de una cadena

Podemos crear un objeto `Date` a partir de una cadena de texto.

La opción más recomendable es utilizar el formato ISO 8601.

Ejemplo:

```javascript
let fecha = new Date("2026-11-09");

console.log(fecha);
```

También podemos indicar una fecha y una hora:

```javascript
let fecha = new Date("2026-11-09T19:30:00");
```

O especificar que la hora está expresada en UTC:

```javascript
let fecha = new Date("2026-11-09T18:30:00Z");
```

La letra `Z` indica que la hora está expresada en UTC.

Debemos tener cuidado con las diferencias entre las cadenas que contienen solamente una fecha y las que contienen fecha y hora.

- Una cadena con formato `YYYY-MM-DD` se interpreta como UTC.
- Una cadena con fecha y hora sin zona horaria, como `YYYY-MM-DDTHH:mm:ss`, se interpreta como hora local.
- Una cadena con `Z` o un desplazamiento horario explícito representa un instante con referencia horaria.

Por este motivo, es importante utilizar formatos claros y coherentes.

### 2.5. Crear una fecha mediante una marca de tiempo

También podemos crear una fecha a partir de un número que representa milisegundos transcurridos desde un instante de referencia.

Ese instante es:

**1 de enero de 1970 a las 00:00:00 UTC.**

Se conoce como *Unix epoch* o época Unix.

Ejemplo:

```javascript
let fecha = new Date(0);

console.log(fecha);
```

El resultado representa el comienzo de la época Unix, mostrado en la zona horaria local del dispositivo.

Si utilizamos un número mayor:

```javascript
let fecha = new Date(1000);

console.log(fecha);
```

Representará un segundo después del inicio de la época Unix.

Esto sucede porque `Date` utiliza milisegundos, no segundos.

### 2.6. Resumen de las formas de crear fechas

| Forma | Ejemplo | Utilidad |
|---|---|---|
| Fecha actual | `new Date()` | Obtener el instante actual |
| Componentes | `new Date(2026, 10, 9)` | Crear una fecha concreta en hora local |
| Cadena ISO | `new Date("2026-11-09")` | Crear una fecha a partir de texto |
| Marca de tiempo | `new Date(0)` | Crear una fecha a partir de milisegundos |
| Fecha y hora UTC | `new Date("2026-11-09T18:30:00Z")` | Representar un instante en UTC |

---

## 3. Obtener los componentes de una fecha

Una vez creado un objeto `Date`, podemos consultar sus diferentes componentes mediante métodos específicos.

Los métodos más utilizados son:

| Método | Información obtenida |
|---|---|
| `getFullYear()` | Año completo |
| `getMonth()` | Mes, comenzando en cero |
| `getDate()` | Día del mes |
| `getDay()` | Día de la semana |
| `getHours()` | Hora |
| `getMinutes()` | Minutos |
| `getSeconds()` | Segundos |
| `getMilliseconds()` | Milisegundos |
| `getTime()` | Marca de tiempo en milisegundos |

Vamos a estudiar cada uno.

### 3.1. getFullYear()

Devuelve el año completo de una fecha.

```javascript
let fecha = new Date(2026, 10, 9);

let anio = fecha.getFullYear();

console.log(anio);
```

Resultado:

```text
2026
```

Es recomendable utilizar `getFullYear()` en lugar de `getYear()`, ya que este último tiene un comportamiento histórico poco intuitivo y está obsoleto.

### 3.2. getMonth()

Devuelve el mes de una fecha, comenzando desde cero.

```javascript
let fecha = new Date(2026, 10, 9);

let mes = fecha.getMonth();

console.log(mes);
```

Resultado:

```text
10
```

Recuerda que el valor 10 representa noviembre.

Si queremos mostrar el mes como un número comprendido entre 1 y 12, debemos sumar uno:

```javascript
let mes = fecha.getMonth() + 1;

console.log(mes);
```

Resultado:

```text
11
```

Esta diferencia es especialmente importante cuando construimos calendarios o mostramos fechas en una aplicación.

### 3.3. getDate()

Devuelve el día del mes.

```javascript
let fecha = new Date(2026, 10, 9);

console.log(fecha.getDate());
```

Resultado:

```text
9
```

A diferencia de `getMonth()`, el día comienza en uno.

### 3.4. getDay()

Devuelve el día de la semana.

Sus valores son:

| Valor | Día |
|---:|---|
| 0 | Domingo |
| 1 | Lunes |
| 2 | Martes |
| 3 | Miércoles |
| 4 | Jueves |
| 5 | Viernes |
| 6 | Sábado |

Ejemplo:

```javascript
let fecha = new Date(2026, 10, 9);

console.log(fecha.getDay());
```

Resultado:

```text
1
```

El 9 de noviembre de 2026 es lunes.

**Atención:** `getDay()` devuelve el día de la semana, no el día del mes.

- `getDate()` devuelve, por ejemplo, 9.
- `getDay()` devuelve, por ejemplo, 1.

No debemos confundirlos.

### 3.5. getHours()

Devuelve la hora de una fecha, utilizando el formato de 24 horas.

```javascript
let fecha = new Date(2026, 10, 9, 19, 30);

console.log(fecha.getHours());
```

Resultado:

```text
19
```

### 3.6. getMinutes()

Devuelve los minutos.

```javascript
let fecha = new Date(2026, 10, 9, 19, 30);

console.log(fecha.getMinutes());
```

Resultado:

```text
30
```

### 3.7. getSeconds()

Devuelve los segundos.

```javascript
let fecha = new Date(2026, 10, 9, 19, 30, 45);

console.log(fecha.getSeconds());
```

Resultado:

```text
45
```

### 3.8. getMilliseconds()

Devuelve los milisegundos.

```javascript
let fecha = new Date(2026, 10, 9, 19, 30, 45, 250);

console.log(fecha.getMilliseconds());
```

Resultado:

```text
250
```

### 3.9. getTime()

Devuelve el número de milisegundos transcurridos desde el 1 de enero de 1970 a las 00:00:00 UTC.

```javascript
let fecha = new Date("2026-11-09T00:00:00Z");

let marcaTiempo = fecha.getTime();

console.log(marcaTiempo);
```

El resultado será un número entero de milisegundos.

Este método es especialmente útil para comparar fechas y calcular intervalos de tiempo.

---

## 4. Obtener componentes en UTC

Hasta ahora hemos utilizado métodos como `getFullYear()`, `getMonth()` y `getHours()`.

Estos métodos devuelven los componentes de la fecha según la zona horaria local del dispositivo.

JavaScript también proporciona métodos para obtener los componentes en UTC.

UTC significa *Coordinated Universal Time* y es una referencia horaria utilizada para representar instantes independientemente de la zona horaria local.

Los métodos principales son:

| Método local | Método UTC |
|---|---|
| `getFullYear()` | `getUTCFullYear()` |
| `getMonth()` | `getUTCMonth()` |
| `getDate()` | `getUTCDate()` |
| `getDay()` | `getUTCDay()` |
| `getHours()` | `getUTCHours()` |
| `getMinutes()` | `getUTCMinutes()` |
| `getSeconds()` | `getUTCSeconds()` |
| `getMilliseconds()` | `getUTCMilliseconds()` |

Ejemplo:

```javascript
let fecha = new Date("2026-11-09T18:30:00Z");

console.log("Hora local:", fecha.getHours());
console.log("Hora UTC:", fecha.getUTCHours());
```

Si el dispositivo está configurado en la zona horaria peninsular española durante noviembre, una posible salida será:

```text
Hora local: 19
Hora UTC: 18
```

La diferencia se debe a que España peninsular utiliza UTC+1 durante el horario estándar de invierno.

Durante el horario de verano utiliza UTC+2.

**Idea fundamental:** un objeto `Date` representa un instante. Los métodos locales y UTC son distintas formas de consultar ese mismo instante.

---

## 5. Modificar una fecha

Además de consultar los componentes de una fecha, podemos modificarlos mediante métodos específicos.

Los métodos de modificación más importantes son:

| Método | Modifica |
|---|---|
| `setFullYear()` | Año |
| `setMonth()` | Mes |
| `setDate()` | Día del mes |
| `setHours()` | Hora |
| `setMinutes()` | Minutos |
| `setSeconds()` | Segundos |
| `setMilliseconds()` | Milisegundos |
| `setTime()` | Marca de tiempo |

Estos métodos modifican el objeto `Date` original.

### 5.1. setFullYear()

Permite modificar el año.

```javascript
let fecha = new Date(2026, 10, 9);

fecha.setFullYear(2030);

console.log(fecha);
```

La fecha pasará a representar el 9 de noviembre de 2030.

También podemos proporcionar el mes y el día:

```javascript
fecha.setFullYear(2030, 5, 15);
```

En este caso, la fecha pasará a representar el 15 de junio de 2030.

### 5.2. setMonth()

Permite modificar el mes.

```javascript
let fecha = new Date(2026, 0, 15);

fecha.setMonth(5);

console.log(fecha);
```

El mes 5 corresponde a junio.

Por tanto, la fecha representará el 15 de junio de 2026.

Recuerda que los meses comienzan en cero.

### 5.3. setDate()

Permite modificar el día del mes.

```javascript
let fecha = new Date(2026, 10, 9);

fecha.setDate(20);

console.log(fecha);
```

La fecha pasará a representar el 20 de noviembre de 2026.

Una característica interesante es que JavaScript ajusta automáticamente los valores que superan los límites del calendario.

Por ejemplo:

```javascript
let fecha = new Date(2026, 10, 30);

fecha.setDate(35);

console.log(fecha);
```

El resultado será el 5 de diciembre de 2026.

JavaScript interpreta que estamos avanzando cinco días desde el 30 de noviembre.

### 5.4. setHours()

Permite modificar la hora.

```javascript
let fecha = new Date(2026, 10, 9, 10, 30);

fecha.setHours(18);

console.log(fecha);
```

La hora pasará a ser las 18:30.

También podemos modificar minutos, segundos y milisegundos:

```javascript
fecha.setHours(20, 15, 30, 500);
```

La fecha pasará a representar las 20:15:30.500.

### 5.5. setMinutes()

Permite modificar los minutos.

```javascript
let fecha = new Date(2026, 10, 9, 10, 30);

fecha.setMinutes(45);

console.log(fecha);
```

La hora pasará a ser las 10:45.

### 5.6. setSeconds()

Permite modificar los segundos.

```javascript
let fecha = new Date(2026, 10, 9, 10, 30, 15);

fecha.setSeconds(50);

console.log(fecha);
```

### 5.7. setTime()

Permite modificar directamente la marca de tiempo en milisegundos.

```javascript
let fecha = new Date();

fecha.setTime(0);

console.log(fecha);
```

El objeto representará el comienzo de la época Unix.

### 5.8. Métodos locales y UTC para modificar fechas

Al igual que ocurre con los métodos de consulta, existen métodos de modificación que trabajan con la hora local y otros que trabajan con UTC.

Por ejemplo:

- `setHours()` modifica la hora local.
- `setUTCHours()` modifica la hora UTC.
- `setDate()` modifica el día del calendario local.
- `setUTCDate()` modifica el día del calendario UTC.

Debemos utilizar el método adecuado según el tipo de operación que necesitemos realizar.

---

## 6. Comparar fechas

Una de las operaciones más habituales consiste en determinar si una fecha es anterior, posterior o igual a otra.

JavaScript permite comparar directamente dos objetos `Date` mediante operadores de comparación.

Ejemplo:

```javascript
let fecha1 = new Date("2026-11-09T10:00:00Z");
let fecha2 = new Date("2026-11-09T12:00:00Z");

console.log(fecha1 < fecha2);
console.log(fecha1 > fecha2);
```

Resultado:

```text
true
false
```

La primera fecha representa un instante anterior a la segunda.

### 6.1. Utilizar los operadores de comparación

Podemos utilizar:

| Operador | Significado                                     |
| -------- | ----------------------------------------------- |
| `<`      | Menor que                                       |
| `>`      | Mayor que                                       |
| `<=`     | Menor o igual que                               |
| `>=`     | Mayor o igual que                               |
| `===`    | Igualdad estricta de referencia/valor primitivo |
| `!==`    | Desigualdad estricta                            |

Para comparar instantes, es preferible utilizar los valores numéricos obtenidos mediante `getTime()`.

### 6.2. Comparar si dos fechas representan el mismo instante

Hay una particularidad importante con `Date`.

Dos objetos pueden representar exactamente el mismo instante, pero no ser el mismo objeto.

Ejemplo:

```javascript
let fecha1 = new Date("2026-11-09T10:00:00Z");
let fecha2 = new Date("2026-11-09T10:00:00Z");

console.log(fecha1 === fecha2);
```

Resultado:

```text
false
```

¿Por qué ocurre?

Porque `fecha1` y `fecha2` son dos objetos diferentes almacenados en memoria.

Para comprobar si representan el mismo instante debemos comparar sus marcas de tiempo:

```javascript
console.log(fecha1.getTime() === fecha2.getTime());
```

Resultado:

```text
true
```

### 6.3. Ejemplo práctico: comprobar una fecha de entrega

Imaginemos que una actividad debe entregarse antes del 15 de noviembre de 2026.

Queremos comprobar si la fecha actual se encuentra antes del límite.

```javascript
let fechaActual = new Date();

let fechaLimite = new Date(2026, 10, 15);

if (fechaActual < fechaLimite) {
    console.log("Todavía estás dentro del plazo.");
} else {
    console.log("El plazo de entrega ha finalizado.");
}
```

El resultado dependerá del momento en que ejecutemos el programa.

---

## 7. Calcular diferencias entre fechas

Como `Date` permite obtener marcas de tiempo en milisegundos, podemos calcular la diferencia entre dos fechas mediante una resta.

Esta operación resulta especialmente útil para calcular duraciones.

### 7.1. Diferencia en milisegundos

Ejemplo:

```javascript
let fechaInicio = new Date("2026-11-09T08:00:00Z");
let fechaFin = new Date("2026-11-09T10:30:00Z");

let diferencia = fechaFin.getTime() - fechaInicio.getTime();

console.log(diferencia);
```

Resultado:

```text
9000000
```

El resultado está expresado en milisegundos.

### 7.2. Convertir milisegundos a segundos

Sabemos que:

\[
1\ segundo=1000\ milisegundos
\]

Por tanto:

```javascript
let segundos = diferencia / 1000;

console.log(segundos);
```

Resultado:

```text
9000
```

### 7.3. Convertir milisegundos a minutos

Sabemos que:

\[
1\ minuto=60000\ milisegundos
\]

Código:

```javascript
let minutos = diferencia / (1000 * 60);

console.log(minutos);
```

Resultado:

```text
150
```

### 7.4. Convertir milisegundos a horas

Sabemos que:

\[
1\ hora=3600000\ milisegundos
\]

Código:

```javascript
let horas = diferencia / (1000 * 60 * 60);

console.log(horas);
```

Resultado:

```text
2.5
```

### 7.5. Convertir milisegundos a días

Para convertir una diferencia en milisegundos a días:

\[
1\ día=86400000\ milisegundos
\]

Código:

```javascript
let dias = diferencia / (1000 * 60 * 60 * 24);

console.log(dias);
```

El resultado puede contener decimales porque representa una duración exacta.

### 7.6. Ejemplo práctico: calcular la duración de una actividad

Imaginemos que un alumno comienza una actividad a las 9:00 y termina a las 11:45.

Queremos calcular cuántos minutos ha durado.

```javascript
let inicio = new Date("2026-11-09T09:00:00");
let fin = new Date("2026-11-09T11:45:00");

let diferencia = fin.getTime() - inicio.getTime();

let minutos = diferencia / (1000 * 60);

console.log("Duración en minutos:", minutos);
```

Resultado:

```text
Duración en minutos: 165
```

**Importante:** restar dos marcas de tiempo permite calcular la duración transcurrida entre dos instantes. No equivale necesariamente a calcular días de calendario, meses o años. Los meses tienen distinta duración y los cambios de horario pueden modificar el número de horas de un día local.

---

## 8. Añadir y restar tiempo a una fecha

Podemos utilizar los métodos `setDate()`, `setMonth()` y `setFullYear()` para avanzar o retroceder en el calendario.

También podemos trabajar con milisegundos cuando necesitamos sumar duraciones exactas.

### 8.1. Añadir días

Ejemplo:

```javascript
let fecha = new Date(2026, 10, 9);

fecha.setDate(fecha.getDate() + 7);

console.log(fecha);
```

Resultado: 16 de noviembre de 2026.

Estamos sumando siete días a la fecha original.

### 8.2. Restar días

```javascript
let fecha = new Date(2026, 10, 9);

fecha.setDate(fecha.getDate() - 3);

console.log(fecha);
```

Resultado: 6 de noviembre de 2026.

### 8.3. Añadir meses

```javascript
let fecha = new Date(2026, 10, 9);

fecha.setMonth(fecha.getMonth() + 1);

console.log(fecha);
```

Resultado: 9 de diciembre de 2026.

### 8.4. Añadir años

```javascript
let fecha = new Date(2026, 10, 9);

fecha.setFullYear(fecha.getFullYear() + 1);

console.log(fecha);
```

Resultado: 9 de noviembre de 2027.

### 8.5. Añadir horas mediante milisegundos

Una hora equivale a 3.600.000 milisegundos.

Podemos utilizar `getTime()` y crear una nueva fecha:

```javascript
let fechaActual = new Date();

let unaHoraDespues = new Date(
    fechaActual.getTime() + 60 * 60 * 1000
);

console.log("Actual:", fechaActual);
console.log("Una hora después:", unaHoraDespues);
```

También podemos sumar milisegundos directamente mediante `setTime()`:

```javascript
let fecha = new Date();

fecha.setTime(fecha.getTime() + 3600000);

console.log(fecha);
```

### 8.6. Precaución al sumar meses

Los meses no tienen todos la misma duración.

Además, JavaScript normaliza automáticamente las fechas que superan los límites de un mes.

Por ejemplo:

```javascript
let fecha = new Date(2026, 0, 31);

fecha.setMonth(fecha.getMonth() + 1);

console.log(fecha);
```

El resultado puede sorprender: JavaScript intenta pasar al mes siguiente conservando el día 31, pero febrero no tiene ese día. Por tanto, la fecha se desborda hacia marzo.

Esto significa que sumar un mes mediante `setMonth()` no siempre equivale a obtener el último día del mes siguiente.

Cuando una aplicación necesita reglas específicas para vencimientos, facturación o calendarios, debemos definir expresamente cómo tratar los finales de mes.

---

## 9. Formatear fechas

Cuando trabajamos con fechas, no siempre queremos mostrar la representación completa de un objeto `Date`.

En una aplicación web normalmente necesitamos presentar la información de forma comprensible para el usuario.

JavaScript ofrece diferentes métodos para convertir una fecha en texto.

### 9.1. toString()

Devuelve una representación textual de la fecha y hora en la zona horaria local.

```javascript
let fecha = new Date(2026, 10, 9, 19, 30);

console.log(fecha.toString());
```

Una posible salida:

```text
Mon Nov 09 2026 19:30:00 GMT+0100 (hora estándar de Europa central)
```

El formato exacto depende del entorno.

### 9.2. toDateString()

Devuelve una representación textual de la parte correspondiente a la fecha, sin mostrar la hora.

```javascript
let fecha = new Date(2026, 10, 9, 19, 30);

console.log(fecha.toDateString());
```

Una posible salida:

```text
Mon Nov 09 2026
```

### 9.3. toTimeString()

Devuelve una representación textual de la parte correspondiente a la hora.

```javascript
let fecha = new Date(2026, 10, 9, 19, 30);

console.log(fecha.toTimeString());
```

Una posible salida:

```text
19:30:00 GMT+0100 (hora estándar de Europa central)
```

### 9.4. toISOString()

Devuelve una representación de la fecha en formato ISO 8601, expresada en UTC.

```javascript
let fecha = new Date("2026-11-09T19:30:00+01:00");

console.log(fecha.toISOString());
```

Resultado:

```text
2026-11-09T18:30:00.000Z
```

Observa que la hora cambia porque se convierte a UTC.

Este método es especialmente útil para intercambiar fechas entre aplicaciones y enviar información a servidores.

### 9.5. toLocaleDateString()

Permite mostrar una fecha utilizando el formato correspondiente a una configuración regional.

```javascript
let fecha = new Date(2026, 10, 9);

console.log(fecha.toLocaleDateString("es-ES"));
```

Resultado:

```text
9/11/2026
```

Podemos utilizar otras configuraciones regionales:

```javascript
console.log(fecha.toLocaleDateString("es-ES"));
console.log(fecha.toLocaleDateString("en-GB"));
console.log(fecha.toLocaleDateString("en-US"));
```

Los formatos serán diferentes según la configuración regional.

### 9.6. toLocaleTimeString()

Permite mostrar la hora siguiendo una configuración regional.

```javascript
let fecha = new Date(2026, 10, 9, 19, 30);

console.log(fecha.toLocaleTimeString("es-ES"));
```

Una posible salida:

```text
19:30:00
```

### 9.7. toLocaleString()

Permite mostrar conjuntamente la fecha y la hora.

```javascript
let fecha = new Date(2026, 10, 9, 19, 30);

console.log(fecha.toLocaleString("es-ES"));
```

Una posible salida:

```text
9/11/2026, 19:30:00
```

### 9.8. Personalizar el formato con opciones

Los métodos `toLocaleDateString()`, `toLocaleTimeString()` y `toLocaleString()` permiten recibir un segundo argumento con opciones de formato.

Ejemplo:

```javascript
let fecha = new Date(2026, 10, 9, 19, 30, 45);

let opciones = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
};

console.log(fecha.toLocaleDateString("es-ES", opciones));
```

Resultado aproximado:

```text
lunes, 9 de noviembre de 2026
```

También podemos mostrar la hora con un formato personalizado:

```javascript
let opcionesHora = {
    hour: "2-digit",
    minute: "2-digit"
};

console.log(fecha.toLocaleTimeString("es-ES", opcionesHora));
```

Resultado:

```text
19:30
```

Esta técnica resulta muy útil cuando queremos mostrar fechas de manera profesional en una aplicación web.

### 9.9. Resumen de métodos de formato

| Método | Resultado |
|---|---|
| `toString()` | Fecha y hora en formato textual local |
| `toDateString()` | Solo la fecha |
| `toTimeString()` | Solo la hora |
| `toISOString()` | Fecha y hora en formato ISO UTC |
| `toLocaleDateString()` | Fecha adaptada a una región |
| `toLocaleTimeString()` | Hora adaptada a una región |
| `toLocaleString()` | Fecha y hora adaptadas a una región |

---

## 10. Validar fechas

No todas las fechas que intentamos crear son válidas.

Por ejemplo, podemos recibir datos incorrectos desde un formulario o desde una API.

JavaScript representa una fecha inválida mediante un objeto `Date` cuyo valor interno es `NaN`.

### 10.1. Crear una fecha inválida

```javascript
let fecha = new Date("esto no es una fecha");

console.log(fecha);
```

Resultado:

```text
Invalid Date
```

El objeto existe, pero no contiene un instante válido.

### 10.2. Comprobar si una fecha es válida

Podemos utilizar `getTime()` junto con `Number.isNaN()`.

```javascript
let fecha = new Date("esto no es una fecha");

if (Number.isNaN(fecha.getTime())) {
    console.log("La fecha no es válida.");
} else {
    console.log("La fecha es válida.");
}
```

Resultado:

```text
La fecha no es válida.
```

También podemos utilizar:

```javascript
let fecha = new Date();

if (Number.isFinite(fecha.getTime())) {
    console.log("Fecha válida");
}
```

### 10.3. Comprobar fechas recibidas desde formularios

Imaginemos que un usuario introduce una fecha y queremos comprobar si el objeto `Date` se ha creado correctamente.

```javascript
let textoFecha = "2026-11-09";

let fecha = new Date(textoFecha);

if (Number.isNaN(fecha.getTime())) {
    console.log("No se ha podido interpretar la fecha.");
} else {
    console.log("Fecha:", fecha.toLocaleDateString("es-ES"));
}
```

**Importante:** que JavaScript pueda interpretar una cadena no significa que esa fecha cumpla todas las reglas de negocio de nuestra aplicación.

Si necesitamos validar estrictamente una fecha de calendario, debemos comprobar también que el año, mes y día recibidos son los esperados.

Por ejemplo, una aplicación que recoge fechas de nacimiento no debería aceptar automáticamente cualquier fecha que el constructor normalice.

---

## 11. Ejemplos guiados paso a paso

En este apartado vamos a combinar los métodos de `Date` para resolver problemas prácticos.

### Ejemplo 1. Mostrar la fecha actual de forma personalizada

**Enunciado**

Desarrolla un programa que obtenga la fecha actual y muestre el día de la semana, el día del mes, el mes y el año.

**Código:**

```javascript
let fechaActual = new Date();

let diaSemana = fechaActual.toLocaleDateString("es-ES", {
    weekday: "long"
});

let dia = fechaActual.getDate();

let mes = fechaActual.toLocaleDateString("es-ES", {
    month: "long"
});

let anio = fechaActual.getFullYear();

console.log("Hoy es", diaSemana);
console.log("Día:", dia);
console.log("Mes:", mes);
console.log("Año:", anio);
```

Una posible salida:

```text
Hoy es lunes
Día: 9
Mes: noviembre
Año: 2026
```

**Explicación:**

1. Creamos un objeto `Date` con la fecha actual.
2. Obtenemos el nombre del día mediante `toLocaleDateString()`.
3. Consultamos el día del mes con `getDate()`.
4. Obtenemos el nombre del mes utilizando las opciones de formato.
5. Consultamos el año mediante `getFullYear()`.
6. Mostramos los resultados.

### Ejemplo 2. Calcular los días que faltan para un evento

**Enunciado**

Queremos saber cuántos días faltan para una fecha determinada.

**Código:**

```javascript
let fechaActual = new Date();

let fechaEvento = new Date("2026-12-25T00:00:00");

let diferencia = fechaEvento.getTime() - fechaActual.getTime();

let dias = Math.ceil(diferencia / (1000 * 60 * 60 * 24));

console.log("Días que faltan:", dias);
```

**Explicación:**

1. Obtenemos la fecha actual.
2. Creamos la fecha del evento.
3. Calculamos la diferencia entre ambas marcas de tiempo.
4. Convertimos los milisegundos a días.
5. Utilizamos `Math.ceil()` para contar cualquier fracción de día como un día pendiente.

Esta última decisión es una regla del programa: si quedan unas pocas horas, todavía consideramos que falta un día para el evento.

Si el evento ya ha pasado, el resultado será cero o un número negativo, según el momento de ejecución.

### Ejemplo 3. Calcular la duración de una jornada

**Enunciado**

Un trabajador comienza su jornada a las 08:00 y termina a las 15:30.

Queremos calcular cuántos minutos ha trabajado.

**Código:**

```javascript
let entrada = new Date("2026-11-09T08:00:00");

let salida = new Date("2026-11-09T15:30:00");

let diferencia = salida.getTime() - entrada.getTime();

let minutosTrabajados = diferencia / (1000 * 60);

let horas = Math.floor(minutosTrabajados / 60);

let minutos = minutosTrabajados % 60;

console.log("Minutos trabajados:", minutosTrabajados);
console.log("Duración:", horas, "horas y", minutos, "minutos");
```

Resultado:

```text
Minutos trabajados: 450
Duración: 7 horas y 30 minutos
```

**Explicación:**

1. Creamos la fecha de entrada.
2. Creamos la fecha de salida.
3. Restamos ambas marcas de tiempo.
4. Convertimos la diferencia a minutos.
5. Dividimos los minutos entre 60 para obtener las horas completas.
6. Utilizamos el operador módulo `%` para obtener los minutos restantes.

Este ejemplo es una introducción al cálculo de duraciones. En una aplicación real de control horario habría que tratar también las pausas, los cambios de día, las zonas horarias y los cambios de horario estacional.

### Ejemplo 4. Calcular la edad de una persona

**Enunciado**

Desarrolla un programa que calcule la edad de una persona a partir de su fecha de nacimiento.

**Código:**

```javascript
let nacimiento = new Date(2000, 5, 15);

let hoy = new Date();

let edad = hoy.getFullYear() - nacimiento.getFullYear();

let cumpleAniversario = new Date(
    hoy.getFullYear(),
    nacimiento.getMonth(),
    nacimiento.getDate()
);

if (hoy < cumpleAniversario) {
    edad--;
}

console.log("Fecha de nacimiento:", nacimiento.toLocaleDateString("es-ES"));
console.log("Edad:", edad);
```

**Explicación:**

1. Creamos la fecha de nacimiento.
2. Obtenemos el año actual.
3. Restamos el año de nacimiento al año actual.
4. Creamos una fecha con el cumpleaños correspondiente al año actual.
5. Comprobamos si todavía no ha llegado ese día.
6. Si el cumpleaños aún no se ha producido, restamos un año.

De esta forma evitamos calcular la edad únicamente mediante la resta de años.

---

## 12. Errores habituales al trabajar con Date

El objeto `Date` tiene algunas particularidades que debemos conocer para evitar errores.

### Error 1. Pensar que los meses empiezan en uno

Código:

```javascript
let fecha = new Date(2026, 10, 9);

console.log(fecha);
```

El mes 10 corresponde a noviembre, no a octubre.

Recuerda:

- Enero = 0.
- Febrero = 1.
- ...
- Diciembre = 11.

### Error 2. Confundir getDay() con getDate()

Código:

```javascript
let fecha = new Date(2026, 10, 9);

console.log(fecha.getDay());
console.log(fecha.getDate());
```

El primer método devuelve el día de la semana.

El segundo devuelve el día del mes.

### Error 3. Utilizar getYear() en lugar de getFullYear()

Código poco recomendable:

```javascript
let fecha = new Date();

console.log(fecha.getYear());
```

Debemos utilizar:

```javascript
console.log(fecha.getFullYear());
```

Este último devuelve el año completo.

### Error 4. Confundir segundos y milisegundos

Código:

```javascript
let fecha = new Date(1000);
```

Esto no representa mil segundos.

Representa 1.000 milisegundos, es decir, un segundo después del inicio de la época Unix.

### Error 5. Comparar objetos Date mediante ===

Código:

```javascript
let fecha1 = new Date("2026-11-09T10:00:00Z");
let fecha2 = new Date("2026-11-09T10:00:00Z");

console.log(fecha1 === fecha2);
```

Resultado:

```text
false
```

Para comprobar si representan el mismo instante debemos comparar sus marcas de tiempo:

```javascript
console.log(fecha1.getTime() === fecha2.getTime());
```

### Error 6. No tener en cuenta la zona horaria

Código:

```javascript
let fecha = new Date("2026-11-09T18:30:00Z");

console.log(fecha.getHours());
console.log(fecha.getUTCHours());
```

Los resultados pueden ser diferentes porque uno utiliza la zona horaria local y el otro UTC.

Debemos saber en qué zona horaria están expresados los datos que recibimos.

### Error 7. Pensar que todos los días tienen siempre 24 horas

Normalmente un día tiene 24 horas, pero en las zonas horarias que aplican cambios estacionales puede haber días locales de 23 o 25 horas.

Por ejemplo, al cambiar al horario de verano puede desaparecer una hora del reloj local. Al volver al horario estándar puede repetirse una hora.

Por eso no debemos asumir que sumar 24 horas en milisegundos siempre equivale a avanzar un día de calendario local.

### Error 8. Utilizar formatos de fecha ambiguos

Código poco recomendable:

```javascript
let fecha = new Date("09/11/2026");
```

El formato puede interpretarse de manera diferente según el entorno.

Es preferible utilizar formatos ISO:

```javascript
let fecha = new Date("2026-11-09");
```

Cuando trabajemos con fecha y hora, debemos indicar también si se trata de hora local o UTC.

### Error 9. No comprobar si una fecha es válida

Código:

```javascript
let fecha = new Date("fecha incorrecta");

console.log(fecha.getTime());
```

El resultado será `NaN`.

Debemos comprobar la validez antes de realizar operaciones:

```javascript
if (Number.isNaN(fecha.getTime())) {
    console.log("Fecha no válida");
}
```

### Error 10. Modificar una fecha sin conservar el valor original

Los métodos `setDate()`, `setMonth()` y similares modifican el objeto original.

Ejemplo:

```javascript
let fecha = new Date(2026, 10, 9);

fecha.setDate(fecha.getDate() + 5);

console.log(fecha);
```

La variable `fecha` ya no contiene el día 9, sino el día 14.

Si necesitamos conservar la fecha original, podemos crear una copia:

```javascript
let fechaOriginal = new Date(2026, 10, 9);

let fechaModificada = new Date(fechaOriginal.getTime());

fechaModificada.setDate(fechaModificada.getDate() + 5);

console.log("Original:", fechaOriginal);
console.log("Modificada:", fechaModificada);
```

---

## 13. Buenas prácticas

Cuando trabajemos con fechas en JavaScript, debemos seguir una serie de recomendaciones.

### 13.1. Utilizar formatos ISO para intercambiar fechas

Cuando enviemos fechas entre el navegador y un servidor, es recomendable utilizar formatos normalizados como ISO 8601.

Ejemplo:

```javascript
let fecha = new Date();

let fechaISO = fecha.toISOString();

console.log(fechaISO);
```

Esto permite representar el instante en UTC de una forma clara.

### 13.2. Diferenciar fecha y hora local de UTC

No debemos mezclar métodos locales y UTC sin saber qué estamos haciendo.

Si un servidor envía una fecha en UTC, debemos interpretarla correctamente y decidir cómo mostrarla al usuario.

### 13.3. Utilizar getTime() para comparar instantes

Es recomendable comparar las marcas de tiempo cuando necesitamos comprobar si dos objetos representan exactamente el mismo instante.

```javascript
if (fecha1.getTime() === fecha2.getTime()) {
    console.log("Mismo instante");
}
```

### 13.4. Validar los datos recibidos

Las fechas pueden proceder de formularios, servidores o servicios externos.

Debemos comprobar que son válidas antes de utilizarlas.

### 13.5. No asumir que un mes tiene 30 días

Los meses tienen diferentes duraciones:

- Febrero puede tener 28 o 29 días.
- Abril tiene 30 días.
- Enero tiene 31 días.

No debemos calcular meses sumando automáticamente 30 días.

### 13.6. No confundir una duración con una fecha de calendario

Una duración de 24 horas equivale a 86.400.000 milisegundos.

Sin embargo, avanzar un día en un calendario local no siempre equivale a sumar exactamente esa cantidad de milisegundos debido a los cambios de horario.

### 13.7. Utilizar formatos adaptados al usuario

Para mostrar fechas en una interfaz web, podemos utilizar:

```javascript
fecha.toLocaleDateString("es-ES");
```

Esto permite adaptar la presentación a las convenciones del idioma y la región.

### 13.8. Recordar que Date trabaja con instantes

Un objeto `Date` no almacena una zona horaria propia como parte de su identidad.

Representa un instante basado en milisegundos desde la época Unix. Los métodos locales y UTC permiten consultar ese instante desde distintas referencias horarias.

---

## 14. Resumen de los principales métodos de Date

| Método | Función |
|---|---|
| `new Date()` | Crea un objeto con la fecha y hora actuales |
| `new Date(año, mes, día)` | Crea una fecha a partir de componentes locales |
| `new Date(cadena)` | Crea una fecha a partir de una cadena interpretable |
| `new Date(milisegundos)` | Crea una fecha a partir de una marca de tiempo |
| `getFullYear()` | Obtiene el año |
| `getMonth()` | Obtiene el mes, de 0 a 11 |
| `getDate()` | Obtiene el día del mes |
| `getDay()` | Obtiene el día de la semana |
| `getHours()` | Obtiene la hora local |
| `getMinutes()` | Obtiene los minutos |
| `getSeconds()` | Obtiene los segundos |
| `getMilliseconds()` | Obtiene los milisegundos |
| `getTime()` | Obtiene la marca de tiempo |
| `getUTCFullYear()` | Obtiene el año en UTC |
| `getUTCMonth()` | Obtiene el mes en UTC |
| `getUTCDate()` | Obtiene el día del mes en UTC |
| `getUTCHours()` | Obtiene la hora en UTC |
| `setFullYear()` | Modifica el año |
| `setMonth()` | Modifica el mes |
| `setDate()` | Modifica el día del mes |
| `setHours()` | Modifica la hora |
| `setMinutes()` | Modifica los minutos |
| `setSeconds()` | Modifica los segundos |
| `setTime()` | Modifica la marca de tiempo |
| `toString()` | Convierte la fecha en texto |
| `toDateString()` | Convierte la parte de fecha en texto |
| `toTimeString()` | Convierte la parte de hora en texto |
| `toISOString()` | Devuelve una representación ISO en UTC |
| `toLocaleDateString()` | Muestra la fecha adaptada a una región |
| `toLocaleTimeString()` | Muestra la hora adaptada a una región |
| `toLocaleString()` | Muestra fecha y hora adaptadas a una región |

---

## 15. Ejercicios prácticos

Los siguientes ejercicios están organizados en tres niveles de dificultad.

Debes desarrollar los programas utilizando JavaScript y mostrar los resultados mediante `console.log()`.

### Nivel 1. Fundamentos

#### E01. Crear fechas

Crea tres objetos `Date` diferentes:

1. Una fecha con el momento actual.
2. Una fecha correspondiente al 15 de marzo de 2026.
3. Una fecha correspondiente al 25 de diciembre de 2027 a las 18:30.

Muestra los tres objetos por consola.

**Objetivos:**

- Crear objetos `Date`.
- Diferenciar entre fecha actual y fecha concreta.
- Comprender el orden de los argumentos del constructor.

#### E02. Obtener los componentes de una fecha

Crea un objeto `Date` correspondiente al 23 de abril de 2026 a las 16:45:30.

Obtén y muestra por separado:

1. Año.
2. Mes.
3. Día del mes.
4. Día de la semana.
5. Hora.
6. Minutos.
7. Segundos.

**Objetivos:**

- Utilizar los métodos `get`.
- Diferenciar `getMonth()` de `getDate()`.
- Comprender el comportamiento de `getDay()`.

#### E03. Modificar una fecha

Crea un objeto `Date` correspondiente al 10 de enero de 2026.

Realiza las siguientes modificaciones:

1. Cambia el año a 2030.
2. Cambia el mes a junio.
3. Cambia el día a 15.
4. Cambia la hora a las 12:30.

Muestra la fecha después de cada modificación.

**Objetivos:**

- Utilizar los métodos `set`.
- Comprender que estos métodos modifican el objeto original.
- Trabajar con los componentes de una fecha.

#### E04. Formatear fechas

Crea un objeto `Date` correspondiente al 9 de noviembre de 2026 a las 19:30.

Muestra:

1. La fecha completa mediante `toString()`.
2. Solo la fecha mediante `toDateString()`.
3. Solo la hora mediante `toTimeString()`.
4. La fecha en formato español mediante `toLocaleDateString()`.
5. La fecha y hora mediante `toLocaleString()`.

**Objetivos:**

- Utilizar diferentes métodos de conversión a texto.
- Diferenciar entre representación técnica y presentación al usuario.

### Nivel 2. Aplicación

#### E05. Calculadora de edad

Desarrolla un programa que almacene una fecha de nacimiento y calcule la edad de una persona.

El programa deberá:

1. Crear un objeto `Date` con la fecha de nacimiento.
2. Obtener la fecha actual.
3. Calcular la diferencia entre los años.
4. Comprobar si la persona ya ha cumplido años durante el año actual.
5. Mostrar la edad final.

Prueba el programa con diferentes fechas de nacimiento.

**Objetivos:**

- Utilizar `getFullYear()`.
- Utilizar `getMonth()` y `getDate()`.
- Aplicar estructuras condicionales.
- Comprender que la edad no se calcula únicamente restando años.

#### E06. Calculadora de duración

Una persona comienza una actividad a las 09:15 y termina a las 13:45 del mismo día.

Desarrolla un programa que calcule:

1. La duración en milisegundos.
2. La duración en segundos.
3. La duración en minutos.
4. La duración en horas.

Muestra todos los resultados.

**Objetivos:**

- Utilizar `getTime()`.
- Restar marcas de tiempo.
- Convertir milisegundos a diferentes unidades.

#### E07. Fecha de vencimiento

Una empresa emite un documento el 9 de noviembre de 2026 y establece un plazo de 30 días naturales.

Desarrolla un programa que:

1. Cree la fecha de emisión.
2. Calcule la fecha de vencimiento.
3. Muestre la fecha de emisión.
4. Muestre la fecha de vencimiento en formato español.

Utiliza `setDate()`.

**Objetivos:**

- Modificar fechas.
- Sumar días a un calendario.
- Mostrar fechas mediante métodos de formato.

#### E08. Comparar fechas de entrega

Una actividad tiene como fecha límite el 20 de noviembre de 2026.

Declara una fecha de entrega y comprueba:

1. Si se ha entregado antes de la fecha límite.
2. Si se ha entregado exactamente en el límite.
3. Si se ha entregado después del límite.

Para probar los tres casos, cambia la fecha de entrega.

**Objetivos:**

- Comparar objetos `Date`.
- Utilizar operadores relacionales.
- Comprender la diferencia entre comparar objetos y comparar instantes.

### Nivel 3. Razonamiento y resolución de problemas

#### E09. Calculadora de cuenta atrás

Desarrolla un programa que calcule cuánto tiempo falta para un evento.

El evento tendrá una fecha y hora determinadas.

El programa deberá:

1. Obtener la fecha y hora actuales.
2. Crear la fecha y hora del evento.
3. Calcular la diferencia en milisegundos.
4. Convertir la diferencia en días completos.
5. Obtener las horas restantes.
6. Obtener los minutos restantes.
7. Mostrar el resultado.

**Ejemplo de salida:**

```text
Faltan:
12 días
5 horas
30 minutos
```

El resultado dependerá de la fecha y hora de ejecución.

Si el evento ya ha pasado, el programa deberá mostrar un mensaje indicando que ha finalizado.

**Objetivos:**

- Combinar `Date` con operaciones matemáticas.
- Utilizar `Math.floor()` y el operador módulo.
- Resolver un problema real de cálculo temporal.

#### E10. Calculadora de jornada laboral

Una empresa necesita calcular la duración de una jornada de trabajo.

Desarrolla un programa que almacene:

- Hora de entrada.
- Hora de salida.
- Hora de inicio de la pausa.
- Hora de finalización de la pausa.

El programa deberá calcular:

1. La duración total entre entrada y salida.
2. La duración de la pausa.
3. El tiempo efectivo trabajado.
4. El resultado en horas y minutos.

**Ejemplo:**

```text
Entrada: 08:00
Inicio pausa: 11:00
Fin pausa: 11:30
Salida: 15:00

Tiempo total: 7 horas
Pausa: 30 minutos
Tiempo efectivo: 6 horas y 30 minutos
```

Para simplificar, considera que todas las horas pertenecen al mismo día.

**Objetivos:**

- Crear objetos `Date`.
- Calcular diferencias entre instantes.
- Restar pausas.
- Convertir milisegundos a horas y minutos.
- Aplicar los conocimientos de la sesión a una situación real.

---

## 16. Reto integrador: sistema de gestión de reservas

### 16.1. Planteamiento

Una empresa necesita desarrollar un pequeño sistema para gestionar las reservas de sus clientes.

Cada reserva tiene una fecha y hora de inicio y una duración determinada.

Vamos a desarrollar una primera versión del sistema utilizando exclusivamente JavaScript y el objeto `Date`.

### 16.2. Datos de la reserva

El programa trabajará con los siguientes datos:

| Dato | Valor |
|---|---|
| Cliente | Ana García |
| Fecha de reserva | 20 de noviembre de 2026 |
| Hora de inicio | 10:30 |
| Duración | 90 minutos |
| Tiempo de antelación mínimo | 24 horas |

### 16.3. Requisitos funcionales

**Requisito 1. Crear la reserva**

Crea un objeto `Date` que represente el inicio de la reserva.

**Requisito 2. Calcular la hora de finalización**

Utiliza la duración de 90 minutos para calcular la hora de finalización.

Recuerda que `Date` trabaja con milisegundos.

**Requisito 3. Obtener la fecha actual**

Crea un objeto con la fecha y hora actuales.

**Requisito 4. Comprobar la reserva**

Comprueba si la reserva se encuentra al menos 24 horas en el futuro.

Si se cumple la condición, muestra:

```text
Reserva válida.
```

En caso contrario, muestra:

```text
No se puede realizar la reserva.
```

**Requisito 5. Mostrar la información**

El programa deberá mostrar:

- Nombre del cliente.
- Fecha de la reserva.
- Hora de inicio.
- Hora de finalización.
- Duración en minutos.
- Tiempo que falta para la reserva.
- Resultado de la validación.

### 16.4. Ejemplo de salida

Una posible ejecución podría producir:

```text
====================================
        SISTEMA DE RESERVAS
====================================

Cliente: Ana García

Fecha: 20/11/2026
Hora de inicio: 10:30
Hora de finalización: 12:00

Duración: 90 minutos

Tiempo hasta la reserva:
10 días y 15 horas

Estado: RESERVA VÁLIDA

====================================
```

Los resultados dependerán del momento en que se ejecute el programa.

### 16.5. Condiciones técnicas

El programa deberá:

- Utilizar objetos `Date`.
- Utilizar `getTime()` para calcular diferencias.
- Utilizar operaciones matemáticas para convertir unidades.
- Utilizar `setTime()` o crear una nueva fecha para calcular la finalización.
- Utilizar `toLocaleDateString()` y `toLocaleTimeString()` para mostrar la información.
- Utilizar estructuras condicionales.
- Comprobar la antelación mínima de 24 horas.
- Utilizar nombres de variables descriptivos.
- Incluir comentarios en las operaciones más importantes.

### 16.6. Ampliaciones opcionales

Cuando hayas terminado el reto principal, puedes añadir las siguientes funcionalidades:

1. Permitir diferentes duraciones de reserva.
2. Añadir un segundo cliente y una segunda reserva.
3. Comprobar si dos reservas se solapan.
4. Impedir reservas en fechas anteriores a la actual.
5. Mostrar cuántos minutos faltan para el inicio.
6. Permitir cancelar una reserva y mostrar su estado.

---

## 17. Autoevaluación

Comprueba si has comprendido los conceptos estudiados durante la sesión.

Responde a las siguientes preguntas sin consultar previamente los ejemplos.

### P01. Objeto Date

¿Qué instrucción permite crear un objeto con la fecha y hora actuales?

A. `Date.nowObject()`

B. `new Date()`

C. `Math.date()`

D. `new Math.Date()`

### P02. Meses

¿Qué valor devuelve `getMonth()` para noviembre?

A. 9

B. 10

C. 11

D. 12

### P03. Día del mes

¿Qué método permite obtener el día del mes?

A. `getDay()`

B. `getMonth()`

C. `getDate()`

D. `getFullYear()`

### P04. Día de la semana

¿Qué valor devuelve `getDay()` cuando la fecha corresponde a un domingo?

A. 1

B. 6

C. 7

D. 0

### P05. Año

¿Qué método devuelve el año completo?

A. `getYear()`

B. `getFullYear()`

C. `getMonth()`

D. `getTime()`

### P06. Modificación

¿Qué método permite modificar el día del mes?

A. `setDay()`

B. `setDate()`

C. `setMonth()`

D. `setTime()`

### P07. Marca de tiempo

¿Qué unidad utiliza internamente `Date` para representar el tiempo?

A. Segundos.

B. Minutos.

C. Milisegundos.

D. Días.

### P08. Comparación

Tenemos dos objetos `Date` que representan el mismo instante, pero se han creado por separado. ¿Qué ocurre al compararlos mediante `===`?

A. Devuelve siempre `true`.

B. Devuelve `false`, porque son objetos diferentes.

C. Devuelve `NaN`.

D. Produce un error.

### P09. Comparar instantes

¿Qué método podemos utilizar para comparar las marcas de tiempo de dos objetos `Date`?

A. `getDate()`

B. `getMonth()`

C. `getTime()`

D. `toString()`

### P10. UTC

¿Qué significa que una fecha esté expresada en UTC?

A. Que utiliza siempre la hora española.

B. Que utiliza una referencia horaria universal.

C. Que no contiene minutos.

D. Que solamente puede representar fechas actuales.

### P11. Formato ISO

¿Qué método devuelve una representación de fecha y hora en formato ISO expresada en UTC?

A. `toString()`

B. `toDateString()`

C. `toISOString()`

D. `toLocaleDateString()`

### P12. Validación

¿Qué resultado devuelve `getTime()` cuando el objeto `Date` es inválido?

A. `0`

B. `null`

C. `undefined`

D. `NaN`

### P13. Fecha actual

¿Qué instrucción permite obtener la marca de tiempo actual en milisegundos sin necesidad de crear un objeto `Date`?

A. `Date.now()`

B. `Date.getTime()`

C. `Math.random()`

D. `new Date().getMonth()`

### P14. Zona horaria

¿Qué método devuelve la hora en UTC?

A. `getHours()`

B. `getUTCHours()`

C. `getLocalHours()`

D. `getTimeHours()`

### P15. Diferencia temporal

Si queremos calcular la diferencia entre dos instantes en milisegundos, ¿qué operación es la adecuada?

A. Sumar los dos valores de `getTime()`.

B. Restar los dos valores de `getTime()`.

C. Multiplicar los dos valores de `getTime()`.

D. Comparar únicamente los días del mes.

---

## 18. Checklist de aprendizaje

Antes de finalizar esta sesión, comprueba que eres capaz de realizar las siguientes tareas.

- [ ] Sé explicar qué es el objeto `Date`.
- [ ] Sé crear una fecha actual.
- [ ] Sé crear una fecha indicando año, mes y día.
- [ ] Recuerdo que los meses comienzan en cero.
- [ ] Sé crear fechas utilizando cadenas ISO.
- [ ] Sé consultar los componentes de una fecha.
- [ ] Diferencio entre `getDay()` y `getDate()`.
- [ ] Sé modificar fechas mediante los métodos `set`.
- [ ] Comprendo la diferencia entre hora local y UTC.
- [ ] Sé comparar dos fechas.
- [ ] Sé utilizar `getTime()` para calcular diferencias.
- [ ] Sé convertir milisegundos a segundos, minutos, horas y días.
- [ ] Sé añadir o restar tiempo a una fecha.
- [ ] Sé mostrar fechas mediante métodos de formato.
- [ ] Sé comprobar si una fecha es válida.
- [ ] Comprendo los problemas relacionados con los meses y los cambios horarios.

---

## 19. Conclusión

El objeto `Date` es una herramienta fundamental para desarrollar aplicaciones que necesitan gestionar información temporal.

Durante esta sesión hemos aprendido a crear fechas, consultar sus componentes, modificarlas, compararlas y calcular diferencias entre distintos instantes.

También hemos estudiado la importancia de trabajar correctamente con UTC, las zonas horarias y los formatos de fecha.

Estos conocimientos nos permitirán desarrollar funcionalidades habituales en aplicaciones web, como calendarios, reservas, vencimientos, registros de actividad y sistemas de control horario.

En la siguiente sesión comenzaremos a trabajar con los arrays, una estructura fundamental para almacenar y organizar colecciones de datos en JavaScript.