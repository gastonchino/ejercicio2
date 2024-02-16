/*
Escribir un programa que cree dos variables enteras y muestre por pantalla, la suma, la resta, 
la multiplicación, la división entera y el resto de la división entera.

node ejercicio.js
*/
// operaciones_enteras.js

// Crear dos variables enteras
const numero1 = 10;
const numero2 = 3;

// Realizar operaciones y mostrar resultados
console.log(`Operaciones con ${numero1} y ${numero2}:`);

// Suma
const suma = numero1 + numero2;
console.log(`Suma: ${suma}`);

// Resta
const resta = numero1 - numero2;
console.log(`Resta: ${resta}`);

// Multiplicación
const multiplicacion = numero1 * numero2;
console.log(`Multiplicación: ${multiplicacion}`);

// División entera
const divisionEntera = Math.floor(numero1 / numero2);
console.log(`División entera: ${divisionEntera}`);

// Resto de la división entera
const resto = numero1 % numero2;
console.log(`Resto de la división entera: ${resto}`);
