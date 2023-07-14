/** Un Closure no es mas que tener funciones anidadas y dentro de estas funciones
 * hacer llamados de variables externas a su Scope de Bloque.
 */
const myGlobal = 0;

function myFunction() {
    const myNumber = 1;
    console.log(myGlobal);

    function parent() {
        const inner = 2;
        console.log(myNumber, myGlobal);

        function child() {
            console.log(inner, myNumber, myGlobal);
        }

        return child();
    }

    return parent();
}

myFunction();