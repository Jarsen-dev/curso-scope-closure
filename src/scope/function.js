function greeting() {
    let userName = 'Ana';
    console.log(userName);

    if (userName === 'Ana') {
        console.log(`Hello ${userName}`);
    }
}

greeting();
console.log(userName); // No puede ser accedido porque el alcance de la variable solo se encuentra dentro de la función.