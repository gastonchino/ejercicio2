var año = 2024; 
AñoBisiesto_oNo(año)
// camel case  no es AñoBisiesto_oNo no es un verbo y no es camel case 
// getVerifyLeapYear() obtenerVerificacionAñoBisiesto() un ejemplo
function AñoBisiesto_oNo(año){
    if ((año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0)) {
        console.log(año + " es un año bisiesto");
      } else {
        console.log(año + " no es un año bisiesto");
      }
}
