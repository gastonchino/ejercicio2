/*
Crear un programa de 3 preguntas.
 que sean infinitas y que tras cada respuesta pregunte al usuario 
si quiere continuar (S/N) y seguir ejecutando hasta que la respuesta sea 'N'.
*/

// aca si o si un bucle infinito 
// no me sirve for - forEach forIn 
// for - solo sirve si nesesito una cantidad finita de ciclo (nesesito 1 -3 5 ciclo?)
// forEach forIn solo sirven para recorrer arreglos 

//porque  su extrura me permite hacer bucles infinitos 

let pregunta1 = "que edad tenes?";
let pregunta2 = "cuantos años tenes?";
let pregunta3 = "como te llamas ?";

let continuar = 'S';
//esto esta mal porque no corta hecho por el profe !!

while (continuar === 'S') {

    prompt(pregunta1);
    prompt(pregunta2);
    prompt(pregunta3);
    console.log("respuesta 1 " + pregunta1)
    console.log("respuesta 2 " + pregunta2)
    console.log("respuesta 3 " + pregunta3)
}
console.log("fin")