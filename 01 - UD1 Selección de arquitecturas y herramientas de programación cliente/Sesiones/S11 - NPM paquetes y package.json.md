---
tipo: material-alumnado
asignatura: DWEC
curso: 2º DAW
unidad: UD1 - Selección de arquitecturas y herramientas de programación cliente
sesion: S11
resultado_aprendizaje: RA1
criterios_evaluacion: [RA1.b]
estado: preparado
impartido: false
---

# S11 – NPM, paquetes y package.json

## 1. Introducción y objetivos

Los proyectos JavaScript pueden reutilizar bibliotecas y herramientas desarrolladas por terceros. Para gestionar esas dependencias se utiliza **npm**, el ecosistema de gestión de paquetes asociado habitualmente a Node.js.

Al finalizar podrás crear un proyecto, interpretar `package.json`, instalar y eliminar paquetes y explicar el papel de `node_modules` y `package-lock.json`.

## 2. ¿Qué es un paquete?

Un paquete es una unidad distribuible de código que puede reutilizarse en otros proyectos. Puede incluir código, metadatos, documentación y dependencias.

Reutilizar paquetes evita desarrollar desde cero funcionalidades comunes, pero introduce dependencias que deben mantenerse y revisarse.

## 3. ¿Qué es npm?

npm permite inicializar proyectos, instalar y eliminar paquetes, actualizar dependencias, consultar información y ejecutar scripts.

Comprueba la instalación:

```bash
npm --version
```

## 4. Crear un proyecto

```bash
mkdir proyecto-npm
cd proyecto-npm
npm init
```

El asistente solicita nombre, versión, descripción y otros datos. También puedes generar una configuración inicial con valores predeterminados:

```bash
npm init -y
```

Se crea `package.json`.

## 5. package.json

Este archivo contiene metadatos y configuración del proyecto.

```json
{
  "name": "proyecto-npm",
  "version": "1.0.0",
  "description": "Ejemplo de proyecto JavaScript",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {},
  "devDependencies": {}
}
```

| Campo | Función |
|---|---|
| `name` | Nombre del proyecto |
| `version` | Versión |
| `description` | Descripción |
| `main` | Punto de entrada tradicional del paquete |
| `scripts` | Comandos del proyecto |
| `dependencies` | Dependencias necesarias para la aplicación |
| `devDependencies` | Dependencias utilizadas durante desarrollo |

Los campos utilizados pueden variar según el tipo de proyecto y las herramientas.

## 6. Instalar un paquete

```bash
npm install dayjs
```

npm registra la dependencia en `package.json` y descarga los paquetes necesarios en `node_modules`.

## 7. node_modules y package-lock.json

`node_modules` contiene los paquetes instalados y sus dependencias. Puede incluir muchos archivos y subdirectorios.

`package-lock.json` registra información detallada de las versiones concretas instaladas y del árbol de dependencias. Facilita instalaciones reproducibles. No debe editarse manualmente como práctica habitual.

Normalmente no se incluye `node_modules` en el repositorio: se conserva la información de dependencias y bloqueo para reconstruirlo mediante npm.

## 8. dependencies y devDependencies

- `dependencies`: paquetes necesarios para la aplicación o para su ejecución.
- `devDependencies`: herramientas utilizadas durante desarrollo, pruebas o construcción y que no tienen por qué formar parte del entorno final.

Instalación normal:

```bash
npm install nombre-paquete
```

Dependencia de desarrollo:

```bash
npm install nombre-paquete --save-dev
```

## 9. Scripts npm

En `package.json`:

```json
{
  "scripts": {
    "start": "node index.js",
    "saludo": "node saludo.js"
  }
}
```

Ejecuta:

```bash
npm run saludo
npm start
```

Los scripts permiten que el equipo comparta comandos comunes.

## 10. Ejemplo práctico

```bash
mkdir ejemplo-fechas
cd ejemplo-fechas
npm init -y
npm install dayjs
```

Crea `index.js`:

```javascript
const dayjs = require("dayjs");

const ahora = dayjs();
console.log("Fecha:", ahora.format("DD/MM/YYYY"));
console.log("Hora:", ahora.format("HH:mm"));
```

Ejecuta `node index.js`. El ejemplo utiliza una biblioteca instalada con npm. La sintaxis de importación depende de si el proyecto utiliza CommonJS o módulos ECMAScript.

## 11. Actualizar y eliminar

```bash
npm update
npm uninstall dayjs
```

Antes de actualizar paquetes en un proyecto real, revisa los cambios y comprueba que la aplicación sigue funcionando.

## 12. Seguridad y mantenimiento

- Revisa que el paquete sea adecuado y confiable.
- Comprueba su documentación y mantenimiento.
- Evita dependencias innecesarias.
- Mantén las versiones controladas.
- Revisa avisos de seguridad.
- No ejecutes comandos desconocidos sin comprenderlos.
- No publiques credenciales en el repositorio.

## 13. Ejercicios

**E01 – Inicialización:** crea `practica-npm` con `npm init -y` y explica los campos de `package.json`.

**E02 – Instalación:** instala `dayjs`. Identifica los cambios en `package.json`, el contenido de `node_modules` y la función del archivo de bloqueo.

**E03 – Script:** crea `saludo.js`, define el script `saludar` y ejecútalo con `npm run saludar`.

**E04 – Dependencias:** explica la diferencia entre dependencias de ejecución y desarrollo. Propón un ejemplo para cada una.

**E05 – Limpieza:** desinstala `dayjs` y comprueba los cambios en los archivos del proyecto.

## 14. Reto: proyecto reproducible

Crea un proyecto que tenga `package.json`, utilice al menos un paquete, incluya un script npm y conserve `package-lock.json`. Añade `.gitignore` para excluir `node_modules`. Explica cómo otra persona podría instalar las dependencias y ejecutar el proyecto.

## 15. Errores habituales, resumen y autoevaluación

No confundas npm con Node.js, no subas `node_modules` al repositorio y no elimines el archivo de bloqueo sin motivo. `package.json` describe el proyecto; `node_modules` contiene paquetes instalados; `package-lock.json` registra el árbol concreto de dependencias.

- [ ] Explico qué es npm.
- [ ] Inicializo un proyecto.
- [ ] Interpreto `package.json`.
- [ ] Instalo y elimino paquetes.
- [ ] Diferencio dependencies y devDependencies.
- [ ] Explico `node_modules` y `package-lock.json`.
- [ ] Ejecuto scripts npm.

**Evaluación – RA1.b:** identificación y utilización de herramientas de desarrollo y gestión de paquetes relacionadas con la programación cliente.
