// Modo Estricto
'use strict'; // Esto activa el modo estricto en JS
pi = 3.1416; // Sin moto estricto esto se puede ejecutar por el hoisting, que hace que JS declare var pi
console.log(pi); // No se ejecuta porque el modo estricto no permite que JS use el hoisting

function myFunction() {
    'use strict';
    return pi = 3.1416;
}

console.log(myFunction());