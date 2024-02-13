// 1. Calcular si un número es par o impar.

let par = 8;
let inpar = 3;
if (par === par){ console.log("El numero es =", par)}
else{console.log("El numero es =", inpar)
};

//2. Determinar si un número es positivo, negativo o cero.
let numero = 4;
if( numero > 0) {
    console.log("El numero es positivo")
}else{
    console.log("No hay ningun numero 0")
};

//3. Calcular si un año es bisiesto o no.

var año = 2024;

if ((año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0)) {
  console.log(año + " es un año bisiesto");
} else {
  console.log(año + " no es un año bisiesto");
}


// 4. Determinar si una persona es mayor de edad.
let mayor = 18;

if (mayor >= 18){
console.log("es mayor de edad")};

//  8. Crear un script para una sala de juegos infantiles que sirva para que niños mayores de 12 no paguen entrada y menores de 18 si tengan que pagar entrada pero que mayores de  edad no puedan ingresar. 

// 5. Calcular que el numero ingresado sea  máximo de tres .
var año = 2024;

if ((año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0)) {
  console.log(año + " es un año bisiesto");
} else {
  console.log(año + " no es un año bisiesto");
}

// 6. Determinar si un número es primo.

// 7. Crear un script para un local de comida donde si una persona paga mas de lo que sale el producto tenga que entregar cambio que corresponde.

let valor = 30;
let pago = 50;
let vuelto = 50 - 30;

if (pago > valor){
    console.log("El vuelto es", vuelto);
}

// 8. Crear un script para una sala de juegos infantiles que sirva para que niños mayores de 12 no paguen entrada y menores de 18 si tengan que pagar entrada pero que mayores de  edad no puedan ingresar. 

let niñosMayores = 12;
let niñosMenores = 18;
let mayoresEdad = 19;

if (niñosMayores <= 12) {
    console.log("No pagan entrada")
}
else(niñosMenores <= 18 && mayoresEdad > 19)
    console.log("Tienen que pagar entrada")
    console.log("Los mayores no pueden ingresar");
