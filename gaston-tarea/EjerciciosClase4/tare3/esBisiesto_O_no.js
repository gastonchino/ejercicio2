//3. Calcular si un año es bisiesto o no.

var año = 2024;

if ((año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0)) {
  console.log(año + " es un año bisiesto");
} else {
  console.log(año + " no es un año bisiesto");
}