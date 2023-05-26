/*const nombre = "Juan";
const mensaje = `Hola, ${nombre}. ¿Cómo estás?`;
console.log(mensaje); // Hola, Juan. ¿Cómo estás?
*/
const miNombre = "Miguel";
const miApellido = "Tierra";
let nombreCompleto = `hola soy: ${miNombre} ${miApellido}`;
console.log(nombreCompleto);

//push, shift, unshift, splice, pop
//push: agrega un elemento al final del array
//shift: elimina el primer elemento del array
//unshift: agrega un elemento al inicio del array
//splice: elimina un elemento del array
//pop: elimina el ultimo elemento del array

var miArreglo = [1,2,3,4,5,6,7,8,9,10];
console.log(miArreglo);
miArreglo.push(11);
console.log(miArreglo);
miArreglo.shift();
console.log(miArreglo);
miArreglo.unshift(100);
console.log(miArreglo);
miArreglo.splice(5,3);
console.log(miArreglo);
miArreglo.pop();
console.log(miArreglo);

console.log(`la cantidad de elementos del arreglo es: ${miArreglo.length}`);

//filter: filtra los elementos de un array
miArreglo = [10,21,32,4,52,6,7,5,9,10];
const filtrar = miArreglo.filter((e) => e.length > 2);
console.log(`elementos filtrados: ${filtrar}`);

console.log(`elementos filtrados: ${miArreglo.filter((e) => e.length > 2)}`);

//unificar los elementos de una cadena de caracteres
console.log(`la unificacion es la siguiente: ${miArreglo.join(" - ")}`);

//ordenar la lista de elementos de un array
console.log(`el orden de los elementos es el siguiente: ${miArreglo.sort()}`);

//conociendo la posicion
console.log(`la posicion del elemento 5 es: ${miArreglo.indexOf(5)}`);

//union de arreglos
var miArreglo2 = [11,12,13,14,15,16,17,18,19,20];
var miArreglo3 = miArreglo.concat(miArreglo2);
console.log(`la union de los arreglos es: ${miArreglo3}`);
