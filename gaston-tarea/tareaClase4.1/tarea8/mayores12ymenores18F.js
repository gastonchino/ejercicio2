let niñosMayores = 12;
let niñosMenores = 18;
let mayoresEdad = 19;

niñosMenores_niñosMayores(niñosMayores,niñosMenores,mayoresEdad)

function niñosMenores_niñosMayores(niñosMayores,niñosMenores,mayoresEdad){
    if (niñosMayores <= 12) {
        console.log("No pagan entrada")
    }
    else(niñosMenores <= 18 && mayoresEdad > 19)
        console.log("Tienen que pagar entrada")
        console.log("Los mayores no pueden ingresar");
}