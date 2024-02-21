//camelCase
let myVar;
//UpperCase
let MyVar;
//snake_case
let my_var;
//camelCase   buenas practicas
let numero = 4;
// verbo
getVerifyTypeNumber()(numero) 
// camel case  no es esPositivo_oNegativo no es un verbo y no es camel case
//getVerifyTypeNumber() obtenerVerificacionDetipoDeNumero()

// 
function obtenerVerificacionDetipoDeNumero(numero){
    if( numero > 0) {
        console.log("El número es positivo")
    }else{
        console.log("No hay ningun número 0")
    
    }
}