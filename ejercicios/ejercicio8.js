/*
Escribir un programa que declare un numero entero del 1 al 7 y muestre por pantalla el dia de la semana correspondiente. Controlar que el numero se encuentre en el rango correcto, si no es asi,
 informar un error. Si el numero es 2 el dia es martes.
*/
// Día de la semana

// Declarar un número entero del 1 al 7
const numeroDia = 2; // Puedes cambiar este valor según tus necesidades

// Verificar si el número está en el rango correcto (1 al 7)
if (numeroDia >= 1 && numeroDia <= 7) {
    // Asignar el día de la semana correspondiente
    let diaSemana;

    switch (numeroDia) {
        case 1:
            diaSemana = "Domingo";
            break;
        case 2:
            diaSemana = "Lunes";
            break;
        case 3:
            diaSemana = "Martes";
            break;
        case 4:
            diaSemana = "Miércoles";
            break;
        case 5:
            diaSemana = "Jueves";
            break;
        case 6:
            diaSemana = "Viernes";
            break;
        case 7:
            diaSemana = "Sábado";
            break;
        default:
            break;
    }

    // Mostrar el día de la semana
    console.log(`El número ${numeroDia} corresponde a ${diaSemana}.`);
} else {
    // Informar un error si el número está fuera del rango
    console.log("Error: El número debe estar en el rango del 1 al 7.");
}
