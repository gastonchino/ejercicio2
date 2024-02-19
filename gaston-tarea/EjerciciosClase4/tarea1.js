













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

//  9. Crear un script que si ingresas una fecha con el siguiente formato DD-MM-YYYY se guarda en el sistema y se muestra en pantalla y si tiene otro formato, no te tiene que permitir guardar y que de aviso que  ese no es el formato que el formato correcto es DD-MM-YYYY  


let format = "DD-MM-YYYY";
let guardar = true;
if (format === format || format == guardar) {console.log(
    "El formato, fecha es correcto y se guardo en el sistema"
)}else(false)
if(guardar === false){
    console.log("No se puede guardar en el sistema por el el formato correcto es:DD-MM-YYYY")
};

//10. Crear un programa donde puedas guardar dinero y que tenga un limite de 100 dolares. si queres guardar mas de ese monto el programa tiene que ingresar solo los 100 y delvolver el resto. 

let guardar = 90;
let guardardos = 110;
let limite = 100;
let masLimite = 120;
let resto = guardardos - guardar;

if(guardar <= limite || guardardos >= masLimite){
    console.log("El dinero se guardo")
    console.log("el sistema automaticamente ingreso los 100")
   
}if (resto === resto) {console.log("su resto es " + resto.toString())};

//11. crear un programa que dependiendo que numero del día de la semana es, dicho programa te devuelve el dia. ejemplo . si ingreso el 1 me tiene que devolver el día lunes.

let Lunes = 0;
let Martes = 1;
let Miercoles = 2;
let Jueves = 3;
let Viernes = 4;
let dia = dia;
 if(dia == Miercoles){
    console.log("es:", dia.toString())
 };

 // 12. crear un script que sabiendo que gana n cantidad de pesos un trabajador . me devuelva el análisis de cuanto gana por semana y cuanto gana día y por hora.

 
sueldo = 300.000;
semana = 300.000 / 4;
resultsemana = semana;
dia = 75 / 5;
resuldia = dia;
hora = 9.3 / 8;
resulthora = hora
if (resultsemana / semana || dia / resultdia && hora / hora)
{
    console.log("gana por semana", semana.toString())
    console.log("gana por dia", dia.toString())
    console.log("gana por hora", hora.toString())
};

//13. Implementar un menú con opciones numeradas y realizar una acción dependiendo de la opción seleccionada por el usuario utilizando 


// no funciona y no lo complete es para revisar.

let usuario = "eligio";
let num = "fruta";
let op1 = "usuario" + "num";
let opUno = "op1"
let mun2 = "sandia";
let num3 = "naranja";


if(op1 == usuario + num)  //|| usuario == num2 && usuario == nume3)
{
    console.log("la opcion", op1)
};