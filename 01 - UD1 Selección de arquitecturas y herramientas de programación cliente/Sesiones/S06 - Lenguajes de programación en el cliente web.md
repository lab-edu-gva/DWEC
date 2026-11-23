---
tipo: material-alumnado
asignatura: DWEC
curso: 2º DAW
unidad: UD1 - Selección de arquitecturas y herramientas de programación cliente
sesion: S06
resultado_aprendizaje: RA1
criterios_evaluacion: [RA1.c, RA1.d]
estado: preparado
impartido: false
---

# S06 – Lenguajes de programación en el cliente web

## 1. Introducción y objetivos

Una aplicación web combina tecnologías con responsabilidades diferentes. HTML estructura, CSS presenta y JavaScript permite programar el comportamiento. En esta sesión estudiarás sus diferencias, las características de JavaScript y las ventajas y limitaciones de los scripts en el navegador.

Al terminar podrás clasificar estas tecnologías, describir JavaScript y justificar qué tareas conviene ejecutar en cliente y cuáles en servidor.

## 2. HTML, CSS y JavaScript

**HTML** (*HyperText Markup Language*) es un lenguaje de marcado que describe estructura y significado:

```html
<h1>Catálogo</h1>
<p>Consulta nuestros productos.</p>
<button>Comprar</button>
```

**CSS** (*Cascading Style Sheets*) define la presentación:

```css
h1 { color: navy; font-size: 32px; }
button { background: blue; color: white; }
```

**JavaScript** es un lenguaje de programación que permite instrucciones, decisiones, bucles, funciones, datos y eventos:

```javascript
const boton = document.querySelector("button");
boton.addEventListener("click", () => {
    alert("Has pulsado el botón");
});
```

HTML y CSS no desempeñan la misma función que un lenguaje de programación general como JavaScript.

## 3. JavaScript en el navegador

El motor JavaScript analiza y ejecuta el código. El navegador, además, proporciona APIs para acceder a funcionalidades:

- DOM y eventos.
- Temporizadores.
- Almacenamiento web.
- Solicitudes de red.
- Geolocalización, cuando está disponible y autorizada.

El lenguaje y las APIs del navegador son conceptos distintos: `Promise` forma parte del lenguaje; `document` y muchas capacidades de la página son proporcionadas por el entorno web.

## 4. Características de JavaScript

- **Alto nivel:** ofrece abstracciones que evitan gestionar directamente muchos detalles del hardware.
- **Tipado dinámico:** una variable puede recibir valores de tipos distintos durante la ejecución.
- **Multiparadigma:** permite estilos imperativos, orientados a objetos y funcionales.
- **Basado en prototipos:** los objetos pueden heredar de otros objetos mediante cadenas de prototipos.
- **Orientado a eventos en el navegador:** es habitual responder a clics, envíos de formularios y respuestas de red.
- **Modelo de ejecución coordinado por el Event Loop:** las APIs del navegador y las colas de tareas permiten atender operaciones asíncronas.

Ejemplo de tipado dinámico:

```javascript
let dato = 25;
dato = "veinticinco";
```

Ejemplo de evento:

```javascript
boton.addEventListener("click", () => {
    console.log("Clic recibido");
});
```

## 5. ¿Interpretado o compilado?

A menudo se describe JavaScript como interpretado porque el desarrollador puede ejecutar el código fuente sin generar manualmente un ejecutable nativo. Sin embargo, los motores modernos aplican técnicas como compilación JIT (*Just-In-Time*) y optimizaciones. Decir que es «solo interpretado» es una simplificación.

## 6. Programación mediante scripts

Un script es un programa que se ejecuta dentro de un entorno que proporciona servicios y objetos.

```html
<button id="saludar">Saludar</button>
<script>
const boton = document.querySelector("#saludar");
boton.addEventListener("click", () => alert("¡Hola!"));
</script>
```

El script utiliza el entorno del navegador para localizar el botón y registrar una función que se ejecutará al producirse un clic.

## 7. Ventajas de la programación cliente

- Respuesta rápida a interacciones.
- Validaciones iniciales sin esperar siempre al servidor.
- Menos solicitudes para operaciones que pueden resolverse localmente.
- Interfaces dinámicas.
- Distribución de parte del trabajo en el dispositivo del usuario.

## 8. Limitaciones y riesgos

- **Seguridad:** el usuario puede inspeccionar el código cliente; no se deben guardar secretos.
- **Confianza:** las validaciones del navegador pueden modificarse o evitarse.
- **Compatibilidad:** las capacidades varían entre navegadores y versiones.
- **Rendimiento:** scripts ineficientes pueden bloquear la interfaz.
- **Conectividad:** las operaciones dependientes del servidor necesitan comunicación, salvo que se diseñe otro mecanismo.

Regla esencial: las reglas de negocio, permisos y validaciones importantes deben comprobarse también en el servidor.

## 9. Cliente y servidor: responsabilidades

| Tarea | Cliente | Servidor |
|---|---|---|
| Mostrar formularios | Sí | Puede generar la respuesta |
| Validación inicial | Sí | Debe validar de nuevo |
| Acceso a base de datos privada | No directamente | Sí |
| Autorizar operaciones | Puede adaptar la interfaz | Debe aplicar permisos |
| Mostrar resultados | Sí | Envía datos |
| Almacenar datos centrales | Solicita operación | Gestiona almacenamiento |

Ejemplo de validación cliente:

```html
<form id="formulario">
    <label>Edad: <input id="edad" type="number" min="0"></label>
    <button>Comprobar</button>
</form>
<p id="resultado"></p>
<script>
const formulario = document.querySelector("#formulario");
const edad = document.querySelector("#edad");
const resultado = document.querySelector("#resultado");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const valor = Number(edad.value);

    if (edad.value === "" || !Number.isFinite(valor) || valor < 0) {
        resultado.textContent = "Introduce una edad válida.";
        return;
    }
    resultado.textContent = `Edad registrada: ${valor}`;
});
</script>
```

Esta comprobación mejora la experiencia, pero si se envían datos al servidor, este debe validarlos de nuevo.

## 10. Ejercicios

**E01 – Clasificación:** clasifica HTML, CSS y JavaScript y explica por qué sus funciones son distintas.

**E02 – Características:** define alto nivel, tipado dinámico, multiparadigma, prototipos y programación orientada a eventos. Añade ejemplos de tres características.

**E03 – Ventajas y riesgos:** una aplicación valida reservas en el navegador y las guarda en un servidor. Indica qué valida cada parte y qué riesgo existiría si solo validara el cliente.

**E04 – Analizar el ejemplo:** identifica el evento, explica `preventDefault()` y razona por qué la validación cliente no garantiza la seguridad.

## 11. Reto: decisión de arquitectura

Una empresa crea una aplicación de inscripción a cursos. Debe mostrar un catálogo, validar formularios, registrar usuarios y almacenar inscripciones. Diseña una tabla de responsabilidades cliente/servidor, justifica cinco decisiones y explica los riesgos de confiar toda la lógica al navegador.

## 12. Errores habituales

No clasifiques HTML como lenguaje de programación general; no confundas JavaScript con las APIs web; no afirmes que los motores actuales solo interpretan; no confíes exclusivamente en validaciones cliente ni guardes secretos en el código descargado por el navegador.

## 13. Resumen y autoevaluación

HTML estructura, CSS presenta y JavaScript programa el comportamiento. JavaScript es de alto nivel, dinámico y multiparadigma. Los scripts aportan interactividad, pero el cliente no es un entorno de confianza para proteger secretos o aplicar por sí solo reglas críticas.

- [ ] Diferencio HTML, CSS y JavaScript.
- [ ] Explico características de JavaScript.
- [ ] Defino un script.
- [ ] Expongo ventajas y limitaciones de la programación cliente.
- [ ] Distingo validación cliente y servidor.

**Evaluación – RA1.c y RA1.d:** caracterización de lenguajes cliente y análisis de particularidades, ventajas y limitaciones de la programación mediante scripts.
