/*
Escribir un programa que cargue en una variable un número entero e imprima 
por pantalla su tabla de multiplicar (del 1 al 12).

*/
// tabla_multiplicar.js

// Cargar un número entero en una variable

const numero = 5; // Puedes cambiar este número según tus necesidades

// Imprimir la tabla de multiplicar
console.log(`Tabla de multiplicar del ${numero}:`);

for (let i = 1; i <= 12; i++) {
    const resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
}
