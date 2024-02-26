// 6. "Determinar si un número es primo."

let numero = 13;
let esPrimo = true;

if (numero <= 1) {
    esPrimo = false; 
} else if (numero === 2) {
    esPrimo = true; 
} else if (numero % 2 === 0) {
    esPrimo = false; 
} else {
    let divisor = 3;
    const limite = Math.sqrt(numero);

    while (divisor <= limite) {
        if (numero % divisor === 0) {
            esPrimo = false;
            break;
        }
        divisor += 2; 
    }
}

if (esPrimo) {
    console.log(`${numero} es un numero primo`);
} else {
    console.log(`${numero} no es un numero primo`);
}
