let dia = 0; 

DiaDeLaSemana(dia)

function DiaDeLaSemana(dia){
    if (dia === 0) {
        console.log("Lunes");
    } else if (dia === 1) {
        console.log("Martes");
    } else if (dia === 2) {
        console.log("Miércoles");
    } else if (dia === 3) {
        console.log("Jueves");
    } else if (dia === 4) {
        console.log("Viernes");
    } else if (dia === 5) {
        console.log("Sábado");
    } else if (dia === 6) {
        console.log("Domingo");
    } else {
        console.log("Número de día no válido");
    }
    
    
}