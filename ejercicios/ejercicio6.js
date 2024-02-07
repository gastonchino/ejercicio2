/*
Declarar dos variables enteras (con cualquier valor) e informar por pantalla cual es menor de las dos, 
si son iguales, indicarlo por separado. Cambiar el orden de los valores para comprobar el funcionamiento.
*/
// Comparación de dos variables enteras

// Declarar dos variables enteras con cualquier valor
let numero1 = 7;
let numero2 = 12;

// Mostrar los valores iniciales
console.log(`Valores iniciales: Numero1 = ${numero1}, Numero2 = ${numero2}`);

// Comparar y mostrar resultados
if (numero1 < numero2) {
    console.log("El menor de los dos números es Numero1.");
} else if (numero2 < numero1) {
    console.log("El menor de los dos números es Numero2.");
} else {
    console.log("Ambos números son iguales.");
}

// Cambiar el orden de los valores
[numero1, numero2] = [numero2, numero1];

// Mostrar los valores después del cambio
console.log(`Valores después del cambio: Numero1 = ${numero1}, Numero2 = ${numero2}`);

// Comparar y mostrar resultados después del cambio
if (numero1 < numero2) {
    console.log("El menor de los dos números es Numero1.");
} else if (numero2 < numero1) {
    console.log("El menor de los dos números es Numero2.");
} else {
    console.log("Ambos números son iguales.");
}
