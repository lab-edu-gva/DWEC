# Cheatsheet JavaScript: DOM, Eventos y Almacenamiento (DWEC)

### Selección de Elementos
```javascript
document.querySelector(selector);
document.querySelectorAll(selector);
document.getElementsByClassName(names);
```

### Navegación y Parentesco (DOM Traversing)
```javascript
elemento.closest(selector);
nodo.parentElement;
elemento.children;
elemento.firstElementChild;
elemento.nextElementSibling;
elemento.previousElementSibling;
```

### Creación, Inserción y Eliminación de Nodos
```javascript
document.createElement(tagName);
document.createElement(tagName, options);

padre.appendChild(aChild);
padre.prepend(...nodesOrDOMStrings);

elemento.remove();
```

### Contenido, Valores y Atributos
```javascript
elemento.textContent;
elemento.textContent = texto;

elemento.innerHTML;
elemento.innerHTML = htmlString;

input.value;
input.value = nuevoValor;

input.checked;
input.checked = boolean;

elemento.dataset.nombrePropiedad;
elemento.dataset.nombrePropiedad = valor;

elemento.setAttribute(name, value);
elemento.getAttribute(name);
```

### Gestión de Clases (`classList`)
```javascript
elemento.classList.add(className1, className2, ...);
elemento.classList.remove(className1, className2, ...);
elemento.classList.toggle(className);
elemento.classList.toggle(className, force);
elemento.classList.contains(className);
```

### Manejo de Eventos y Formularios
```javascript
target.addEventListener(type, listener);
target.addEventListener(type, listener, options);
target.addEventListener(type, listener, useCapture);

event.preventDefault();
event.target;

formElement.reset();
```

### Fechas y Expresiones Regulares
```javascript
new Date();
new Date(value);
new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds);

fecha.setHours(hours);
fecha.setHours(hours, min);
fecha.setHours(hours, min, sec);
fecha.setHours(hours, min, sec, ms);

Date.now();

/regex/.test(string);
```

### Almacenamiento Local (`localStorage`) y JSON
```javascript
localStorage.setItem(key, value);
localStorage.getItem(key);
localStorage.removeItem(key);
localStorage.clear();

JSON.stringify(value);
JSON.stringify(value, replacer, space);

JSON.parse(text);
JSON.parse(text, reviver);
```

### Métodos de Array
```javascript
array.push(element1, element2, ...);
array.filter(callback(element, index, array));
array.forEach(callback(currentValue, index, array));
```
