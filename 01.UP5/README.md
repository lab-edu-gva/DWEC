# Prácticas de Aula: Validación de Formularios en Cliente (DWEC)

**Módulo:** Desarrollo Web en Entorno Cliente  
**Unidad:** UP5 - Eventos y Formularios  
**Instrucciones:** Crea una carpeta para cada ejercicio con su correspondiente estructura de archivos (`index.html`, `estilos.css` y `script.js`). Toda la lógica de control debe implementarse exclusivamente en JavaScript sin utilizar la validación nativa de HTML5 (añade el atributo `novalidate` en la etiqueta `<form>`).

---

## Ejercicio 1: Formulario de Registro de Usuarios

### Objetivos
Implementar la validación básica de campos de texto y correo electrónico utilizando eventos de formulario y manipulación del DOM.

### Requisitos del Formulario
Crea un formulario de alta de usuario con los siguientes elementos:
* Campo de texto para el **Nombre de usuario**.
* Campo de texto para el **Correo electrónico**.
* Mensajes de error individuales debajo de cada campo (inicialmente ocultos).
* Botón de envío de tipo `submit`.

### Especificaciones de Validación
1. **Nombre de usuario:**
   * Debe tener como mínimo 3 caracteres útiles (sin contar espacios al inicio o al final).
   * Debe validarse en tiempo real mientras el usuario escribe. Si no cumple el requisito, se mostrará el mensaje de error y se aplicará un borde rojo al campo. En cuanto cumpla el requisito, el error se ocultará.
2. **Correo electrónico:**
   * Debe comprobarse que cumple con la estructura estándar de un e-mail (`usuario@dominio.extension`).
3. **Envío del formulario (`submit`):**
   * Se debe detener el envío por defecto de la página.
   * Se revisarán ambos campos. Si alguno contiene errores, no se procesará el formulario y se mostrarán los avisos correspondientes. Si todo es correcto, se mostrará un mensaje de confirmación por pantalla.

---

## Ejercicio 2: Reserva de Entradas para Eventos

### Objetivos
Gestionar controles de formulario de tipo fecha (`date`), listas desplegables (`select`) y casillas de verificación (`checkbox`).

### Requisitos del Formulario
Crea un formulario para la reserva de pases a un taller técnico:
* Seleccionador de **Fecha de asistencia**.
* Desplegable con el **Tipo de entrada** (Opciones: *"Seleccione opción"*, *"General"*, *"VIP"*, *"Estudiante"*).
* Casilla de verificación (*checkbox*) para la **Aceptación de la política de cancelación**.
* Botón de confirmación de reserva.

### Especificaciones de Validación
1. **Fecha de asistencia:**
   * La fecha seleccionada por el usuario no puede ser anterior al día actual.
2. **Tipo de entrada:**
   * El usuario debe seleccionar obligatoriamente una opción válida (no se permite mantener la opción por defecto *"Seleccione opción"*).
3. **Política de cancelación:**
   * La casilla de verificación debe estar marcada obligatoriamente para poder continuar.
4. **Comportamiento general:**
   * Las comprobaciones se ejecutarán al intentar enviar el formulario. Se marcarán visualmente los campos incorrectos y se mostrará un mensaje descriptivo junto a cada elemento no válido.

---

## Ejercicio 3: Módulo de Cambio de Contraseña

### Objetivos
Trabajar la coincidencia de campos de texto, el uso de expresiones regulares para patrones de seguridad y el feedback visual inmediato.

### Requisitos del Formulario
Diseña una interfaz de actualización de clave de acceso con tres campos de tipo `password`:
* **Contraseña actual**.
* **Nueva contraseña**.
* **Repetir nueva contraseña**.

### Especificaciones de Validación
1. **Contraseña actual:**
   * Es un campo obligatorio.
2. **Nueva contraseña:**
   * Debe tener una longitud mínima de 8 caracteres.
   * Debe contener al menos un número y al menos una letra mayúscula.
   * Debe ser distinta de la contraseña actual.
3. **Repetir nueva contraseña:**
   * Debe coincidir exactamente carácter por carácter con el campo "Nueva contraseña".
4. **Feedback interactivo (Tiempo real):**
   * Mientras el usuario escribe en el campo "Repetir nueva contraseña", la casilla debe cambiar dinámicamente de aspecto: borde verde si la clave coincide con la nueva contraseña, o borde rojo si aún no es idéntica.