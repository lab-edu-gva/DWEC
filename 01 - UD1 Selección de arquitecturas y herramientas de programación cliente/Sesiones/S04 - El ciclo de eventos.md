---
tipo: material-alumnado
asignatura: DWEC
curso: 2º DAW
unidad: UD1 - Selección de arquitecturas y herramientas de programación cliente
sesion: S04
resultado_aprendizaje: RA1
criterios_evaluacion: [RA1.b, RA1.d]
estado: preparado
impartido: false
---

# S04 – El ciclo de eventos y la ejecución de JavaScript

## 1. Introducción y objetivos

JavaScript permite responder a clics, temporizadores y respuestas de red. En el navegador, el código de una página se ejecuta normalmente en un hilo principal y se coordina con las operaciones asíncronas mediante el **Event Loop** o ciclo de eventos.

Al terminar podrás diferenciar ejecución síncrona y asíncrona, explicar la pila de llamadas, las colas de tareas y el Event Loop, e interpretar el orden de ejecución de ejemplos.

## 2. Ejecución síncrona y pila de llamadas

El código síncrono se ejecuta en orden: cada instrucción espera a que termine la anterior.

```javascript
console.log("Primero");
console.log("Segundo");
console.log("Tercero");
```

La **Call Stack** o pila de llamadas registra las funciones que se están ejecutando. Sigue el principio LIFO: la última función que entra es la primera que sale.

```javascript
function saludar() {
    mostrarMensaje();
    console.log("Fin");
}

function mostrarMensaje() {
    console.log("Hola");
}

saludar();
```

Secuencia: entra `saludar`; entra `mostrarMensaje`; se muestra `Hola`; sale `mostrarMensaje`; se muestra `Fin`; sale `saludar`.

Una función que realiza un trabajo muy largo mantiene ocupada la pila y puede bloquear la interacción con la página.

## 3. Operaciones asíncronas

Una operación asíncrona inicia un trabajo cuyo resultado se atenderá más adelante. Mientras se espera, el programa puede continuar con otras instrucciones.

Ejemplos: temporizadores (`setTimeout`), eventos del usuario y solicitudes de red. El navegador proporciona APIs que gestionan estas operaciones y, cuando corresponde, dejan disponible el callback para su ejecución.

## 4. Event Loop y tareas

El **Event Loop** coordina la ejecución del código con las tareas pendientes. De forma simplificada:

```text
JavaScript en ejecución
       |
   Call Stack
       |
¿La pila puede atender otra tarea?
       |
   Event Loop
       |
  Cola de tareas
```

Una tarea pendiente no interrumpe una función que ya está ejecutándose. Cuando la pila queda disponible, el mecanismo de eventos puede permitir que se procese otra tarea.

Este modelo es didáctico: los navegadores implementan distintas fuentes de tareas y mecanismos adicionales.

## 5. setTimeout

```javascript
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");
```

Salida:

```text
A
C
B
```

El navegador registra el temporizador y el programa continúa. Cuando el temporizador está listo y la ejecución actual ha terminado, el callback podrá ejecutarse. Un retardo `0` no significa ejecución inmediata ni garantiza un instante exacto.

## 6. Microtareas y promesas

Las promesas utilizan una cola de microtareas. De forma simplificada, las microtareas pendientes se procesan al terminar el trabajo síncrono actual y antes de pasar a otra tarea.

```javascript
console.log("Inicio");

setTimeout(() => console.log("Temporizador"), 0);

Promise.resolve().then(() => console.log("Promesa"));

console.log("Fin");
```

Salida habitual:

```text
Inicio
Fin
Promesa
Temporizador
```

No todas las operaciones asíncronas utilizan el mismo mecanismo de planificación.

## 7. Bloqueo del hilo principal

```javascript
const limite = Date.now() + 3000;

while (Date.now() < limite) {
    // Simula trabajo bloqueante
}

console.log("Terminado");
```

Durante el bucle, el hilo principal está ocupado. La página puede dejar de responder y otros eventos tendrán que esperar. En aplicaciones reales se deben evitar tareas largas innecesarias y, cuando proceda, dividir el trabajo o utilizar mecanismos como Web Workers.

## 8. Ejercicios

**E01 – Pila:** escribe la salida y explica la pila:

```javascript
function uno() {
    console.log("A");
    dos();
    console.log("B");
}
function dos() {
    console.log("C");
}
uno();
```

**E02 – Temporizador:** predice y justifica la salida de:

```javascript
console.log("Inicio");
setTimeout(() => console.log("Tarea"), 0);
console.log("Final");
```

**E03 – Promesa:** predice la salida e identifica código síncrono, microtarea y tarea:

```javascript
console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
console.log("D");
```

**E04 – Diagnóstico:** una página deja de responder al pulsar un botón que inicia un bucle largo. Explica qué está ocurriendo y propone dos mejoras.

## 9. Reto: orden de ejecución

Crea una página con un botón «Ejecutar». Al pulsarlo, muestra en consola `Inicio`, programa un `setTimeout`, programa una microtarea con `Promise.resolve().then(...)` y muestra `Fin`. Entrega el código y justifica el orden de salida.

## 10. Errores habituales

- Creer que `setTimeout(..., 0)` se ejecuta inmediatamente.
- Pensar que el Event Loop interrumpe funciones.
- Confundir Call Stack y cola de tareas.
- Suponer que todas las operaciones asíncronas utilizan una única cola.
- Creer que usar callbacks impide bloquear el hilo principal.

## 11. Resumen y autoevaluación

La pila registra funciones activas; las APIs del navegador gestionan operaciones; el Event Loop coordina tareas pendientes. Las promesas utilizan microtareas. El código síncrono se ejecuta antes de atender tareas posteriores y un trabajo largo puede bloquear la interfaz.

- [ ] Explico la pila de llamadas.
- [ ] Diferencio código síncrono y asíncrono.
- [ ] Explico el Event Loop.
- [ ] Interpreto `setTimeout`.
- [ ] Reconozco las microtareas de las promesas.
- [ ] Explico cómo se bloquea el hilo principal.

**Evaluación – RA1.b y RA1.d:** explicación de mecanismos de ejecución del navegador y análisis de las particularidades de la programación mediante scripts.
