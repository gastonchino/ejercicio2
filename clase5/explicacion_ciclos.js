
// es varible que te deja almacer mas de un dato distinto
 
let dato =1; // un solo dato

let listaValorTipo=[2][2]; // vector 
let letras = ['a', 'b', 'c', 'd', 'e']; // 5 datos

// RECORRER Arreglos vector objeto 
//for in 

for (let letra in letras) {

    console.log(letra);
  }

  //for each
letras.forEach((letra)=> {
    console.log(letra);
  });

//  CONTROL DE CICLO 
  //for clasico
 //  contador let i = 1;
 // el que tengo que hacer i <= 5; // condicion?
 // como quiero que me lo incremente i++ 

 for (let i = 10; i <= 5; i++) {
    console.log(i);
  }

  //do 
do {
    i++;
    console.log(i);
    
  } while (i <= 5); // condiciones 

