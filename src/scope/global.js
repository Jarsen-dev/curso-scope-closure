var a; // declarando
var b = 'b'; // inicializando
b = 'bb'; // reasignacion
var a = 'aa'; // redeclaracion

// Global Scope
var fruit = 'Apple';

function bestFruit() {
    console.log(fruit);
}

bestFruit();

// No hacer lo siguiente:

function countries() {
    country = 'colombia'; // Al no declarar que sea una variable tipo var, const o let. Esto pasa a ser de scope global.
    console.log(country);
}

countries();
console.log(country);