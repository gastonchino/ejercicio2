const NUMERO=21; 
let numero;
var n;

// teoria variables resumida! 
// en que se parecen?  cualquieran adminten valores de todo tipo numero string decimales etc.
// en que se diferencian ? cada uno tiene un uso diferente 
// let desde el momento que se instancia su valor este tiene el alcance que se tiene
// var no respeta su alcance
// const si o si se declara la variable en mayuscula y si o si se tiene que instacion con un valor. 

// que es una funcion y un metodo?  ambos son lo mismo , segun el lenguaje de programacion 
                                //y el paradigma usas un u otro. 
                                //y es como una pequeña tarea o acción que puedes reutilizar una y otra vez en tu programa.

// como es su estructura vasica= 
// se declara con el nombre de function se le pone un nombre , puede o no llevar parametros , puede o no tener devolver un valor
// ejemplos 

 function sumarNoDevuelveDato(){
    let a=10
    let b=10
    let sumar = a+b;
 }
 function sumarNoDevuelveDatoConParametro(a,b){
    let sumar = a+b;
 }
 function sumarRetornaDato(){
    let a=10
    let b=10
    return a+b;
 }
 function sumarRetornaDatoConParametro(){
    return a+b;
 }
 
const numeroDia = 2; // instanciar == crear 

// cuando usar un if = validar dato si mayores de 18   
if(numeroDia==0){
    console("lunes")
}

// if  =mayore 18 . que esten vien vestidos si son pareja o vienen 
if (numeroDia >= 1 )
if(numeroDia >= 1 ) {
    console("lunes")
}

//cuando usar un if = validar dato si mayores de 18
if (numeroDia >= 1 && numeroDia <= 7) {
    // aceptas  entro dato 
}else{
    // rechasar no pasas  
}
if (numeroDia >= 1 && numeroDia <= 7) {
// aca se cumplio ambas condiciones  aca no entra 9, 0,10
// solamente de 1 al 7 
}else {
// aca entra 0 , 9 10 11
}



if (numeroDia >= 1 || numeroDia <= 7){
  // una de las dos entra   

}

// && == todas las condiciones se cumplan   ||  and  or == con que cumpla una es ficiente  