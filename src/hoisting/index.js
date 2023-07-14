/** Lo que hace Hoisting es que al tratar de mostrar una variable en consola, la cual
 * aun no ah sido inicializada o que se inicializo despues llamara a esa variable antes
 * de la llamada y se declarara como undefined.
 */

// var nameOfDog;
// console.log(nameOfDog);

// var nameOfDog = 'Elmo';
// console.log(nameOfDog);

nameOfDog();

function nameOfDog() {
    console.log(`El mejor perrito es ${elmo}`);
}

var elmo = 'Elmito';