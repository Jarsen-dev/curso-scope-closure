/** Closure es tener funciones anidadas y que la funcion interna acceda a las variables
 * de la función padre y esta misma pueda guardar los valores que se le asignen cada vez que
 * se ejecute.
 */
// function myMoneyBox(coins) {
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`MoneyBox: $${saveCoins}`);
// }

// myMoneyBox(5);
// myMoneyBox(5);

function moneyBox() {
    let saveCoins = 0;
    function countCoins(coins) {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);