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