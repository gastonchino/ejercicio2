/*
Escribir un programa que cargue en una variable un número entero e imprima 
por pantalla su tabla de multiplicar (del 1 al 12).
*/
// tabla_multiplicar_argumento.js

// Obtener el número desde la línea de comandos
const numero = process.argv[2];

// Verificar si se proporcionó un número
if (!numero || isNaN(numero)) {
    console.log("Por favor, proporciona un número válido como argumento.");
    process.exit(1);
}

// Imprimir la tabla de multiplicar
console.log(`Tabla de multiplicar del ${numero}:`);

for (let i = 1; i <= 12; i++) {
    const resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
}

//se ejecuta asi:  node tabla_multiplicar_argumento.js 7
