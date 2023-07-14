// var
var firstName; // Undefined
firstName = 'Ana';
console.log(firstName);

var lastName = 'Torres'; // declarando / asignando
lastName = 'Hernandez'; // reasignando
console.log(lastName);

var secondName = 'Miguel'; // declarando / asignando
var secondName = 'Armando'; // redeclarando / reasigando
console.log(secondName);

// let
let fruit = 'Apple'; // declarando / asignando
fruit = 'Kiwi'; // reasignando
console.log(fruit);

let frui = 'Banana';
console.log(fruit); 

//const
const animal = 'dog'; // declarando / asignando
animal = 'cat'; // no se puede reasignar y tampoco se puede redeclarar
console.log(animal);

/*Con arrays es distinto const, ya que para ingresar valores o quitar valores
con los metodos de los arrays afecta unicamente al array, pero si cambiamos el
nombre de la constante o si queremos redeclarar la constante entonces si nos dara un error*/
const vehicles = [];
vehicles.push('car');
console.log(vehicles);

vehicles.pop();
console.log(vehicles);