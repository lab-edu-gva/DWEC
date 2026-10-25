// 1. Declaramos la constante 'productos' que almacena un array de objetos (nuestro inventario)
const productos = [
  // 2. Objeto 1: producto 'Teclado' con su precio (15) y stock disponible (10)
  { nombre: 'Teclado', precio: 15, stock: 10 },
  // 3. Objeto 2: producto 'Ratón' con su precio (25) y stock sin unidades (0)
  { nombre: 'Ratón', precio: 25, stock: 0 },
  // 4. Objeto 3: producto 'Monitor' con su precio (150) y stock disponible (5)
  { nombre: 'Monitor', precio: 150, stock: 5 },
  // 5. Objeto 4: producto 'Auriculares' con su precio (45) y stock disponible (12)
  { nombre: 'Auriculares', precio: 45, stock: 12 }
]; // 6. Cierre del array de objetos

// 7. Definimos una función flecha guardada en la constante 'obtenerProductosDisponibles' que recibe el parámetro 'lista'
const obtenerProductosDisponibles = (lista) => 
  // 8. Tomamos el array recibido en 'lista' e iniciamos el encadenamiento de métodos
  lista
    // 9. .filter() recorre el array y conserva solo los objetos donde 'stock > 0' Y 'precio > 20'
    .filter(p => p.stock > 0 && p.precio > 20)
    // 10. .map() transforma el array filtrado devolviendo únicamente una lista con la propiedad 'nombre'
    .map(p => p.nombre);

// 11. Ejecutamos la función pasándole el array 'productos' e imprimimos el resultado en la consola del navegador o Node.js
console.log(obtenerProductosDisponibles(productos)); 
// Salida esperada: ['Monitor', 'Auriculares']