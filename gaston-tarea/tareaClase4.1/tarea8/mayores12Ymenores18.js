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