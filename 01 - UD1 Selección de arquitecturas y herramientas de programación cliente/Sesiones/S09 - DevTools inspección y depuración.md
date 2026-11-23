---
tipo: material-alumnado
asignatura: DWEC
curso: 2º DAW
unidad: UD1 - Selección de arquitecturas y herramientas de programación cliente
sesion: S09
resultado_aprendizaje: RA1
criterios_evaluacion: [RA1.b]
estado: preparado
impartido: false
---

# S09 – DevTools: inspección y depuración

## 1. Introducción y objetivos

Los navegadores incluyen herramientas para analizar las páginas mientras se ejecutan: **Developer Tools** o **DevTools**. Permiten inspeccionar el DOM, comprobar CSS, revisar errores, observar solicitudes de red y depurar JavaScript.

Al finalizar podrás utilizar los paneles principales y aplicar un procedimiento básico para localizar fallos.

## 2. Abrir DevTools

Se pueden abrir desde el menú del navegador o mediante atajos de teclado, que varían según navegador y sistema operativo. Los nombres de los paneles pueden variar ligeramente.

## 3. Elements o Inspector

Permite examinar el DOM construido por el navegador:

- Seleccionar elementos.
- Recorrer antecesores y descendientes.
- Consultar atributos y contenido.
- Modificar temporalmente el HTML desde las herramientas.

Los cambios realizados en el inspector normalmente no modifican el archivo original del proyecto.

## 4. Styles y Computed

**Styles** muestra las reglas CSS que afectan al elemento seleccionado, incluidas las declaraciones sobrescritas y heredadas.

**Computed** muestra los valores calculados finales. Es útil cuando varias reglas, la cascada y la herencia dificultan saber qué valor se aplica.

Una declaración tachada suele haber sido sustituida por otra regla de mayor prioridad o por otra declaración que prevalece en la cascada.

## 5. Console

La consola muestra mensajes y permite ejecutar expresiones JavaScript en el contexto de la página.

```javascript
console.log("Mensaje informativo");
console.warn("Advertencia");
console.error("Se ha producido un error");
```

También permite realizar consultas rápidas:

```javascript
document.querySelector("h1");
```

No sustituye al código organizado del proyecto: es una herramienta de observación y diagnóstico.

## 6. Tipos de errores

**Sintaxis:** el código no respeta la gramática.

```javascript
if (true {
    console.log("Hola");
}
```

**Referencia:** se utiliza una variable no definida en el ámbito.

```javascript
console.log(nombreUsuario);
```

**Tipo:** se realiza una operación no válida para el valor.

```javascript
const usuario = null;
console.log(usuario.nombre);
```

**Lógico:** el programa se ejecuta, pero el resultado no es el esperado.

```javascript
const precio = 100;
const descuento = 10;
const total = precio + descuento; // Se pretendía restar.
```

## 7. Sources y depuración

La depuración permite detener la ejecución y examinar el estado del programa.

Un **breakpoint** o punto de interrupción detiene la ejecución en una línea.

```javascript
const precio = 100;
const descuento = 15;
const total = precio - descuento;
console.log(total);
```

Coloca un breakpoint en la línea de cálculo y observa los valores.

Controles habituales:

- **Step over:** ejecuta la siguiente línea sin entrar en las funciones llamadas.
- **Step into:** entra en la función llamada.
- **Step out:** continúa hasta salir de la función actual.
- **Resume:** reanuda la ejecución hasta otro breakpoint o hasta que termine.

## 8. Network

El panel Network muestra las solicitudes de red:

- URL.
- Método HTTP.
- Código de estado.
- Tipo de recurso.
- Tiempo de respuesta.
- Tamaño transferido.
- Cabeceras y contenido, cuando corresponda.

Si un CSS no carga, puede aparecer una respuesta 404 o un problema de conexión.

## 9. Ejemplo guiado

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Depuración</title>
</head>
<body>
    <h1 id="titulo">Contador</h1>
    <button id="sumar">Sumar</button>
    <script>
        let contador = 0;
        document.querySelector("#sumar").addEventListener("click", () => {
            contador = contador + 1;
            document.querySelector("#titulo").textContent = contador;
            console.log("Contador:", contador);
        });
    </script>
</body>
</html>
```

Procedimiento:

1. Abre la página y DevTools.
2. Localiza el código en Sources/Debugger.
3. Coloca un breakpoint en el incremento.
4. Pulsa el botón.
5. Observa el valor de `contador`.
6. Avanza paso a paso.
7. Comprueba el cambio del título y el mensaje de consola.

## 10. Ejercicios

**E01 – Inspección:** selecciona un título, párrafo y botón de una página de prácticas. Identifica etiqueta, atributos y reglas CSS. No realices cambios permanentes.

**E02 – Consola:** crea un archivo que muestre un mensaje, una advertencia y un error. Explica las diferencias entre los tres.

**E03 – Diagnóstico:** clasifica los cuatro fragmentos del apartado 6 como error de sintaxis, referencia, tipo o lógico. Justifica.

**E04 – Depuración:** utiliza el contador del apartado 9. Coloca un breakpoint y documenta el valor antes y después del incremento.

**E05 – Red:** carga una página con CSS y JavaScript externos. Abre Network, recarga e identifica las solicitudes y sus códigos de estado.

## 11. Reto: localizar tres fallos

Crea una página con tres errores intencionados: un selector CSS que no coincide, una referencia JavaScript inexistente y una ruta incorrecta a un recurso. Utiliza Elements, Console y Network para encontrarlos. Entrega una tabla con fallo, herramienta, causa y solución.

## 12. Errores habituales, resumen y autoevaluación

No confundas cambios temporales del inspector con modificaciones del archivo. No ignores Console y revisa Network cuando falten recursos. Observa los valores mientras avanzas por el depurador.

- [ ] Inspecciono elementos del DOM.
- [ ] Analizo reglas CSS y valores calculados.
- [ ] Utilizo `console.log`, `warn` y `error`.
- [ ] Diferencio tipos de errores.
- [ ] Coloco breakpoints y avanzo paso a paso.
- [ ] Consulto solicitudes de red.

**Evaluación – RA1.b:** identificación y utilización de mecanismos del navegador para inspeccionar, ejecutar y depurar código cliente.
