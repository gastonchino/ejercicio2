
const numeroDia = 2; // instanciar == crear 


if (numeroDia >= 1 && numeroDia <= 7) {
    
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

    
    console.log(`El número ${numeroDia} corresponde a ${diaSemana}.`);
} else {
    
    console.log("Error: El número debe estar en el rango del 1 al 7.");
}
