// Función A que realiza una tarea y luego llama a la función B
function A(callback) {
    // Realizar alguna tarea
    console.log("Función A: Tarea completada");
    
    // Llamar al callback
    callback();
}

// Función B que se llama después de que la función A ha terminado
function B() {
    console.log("Función B: Se ejecuta después de la función A");
}

// Llamar a la función A y pasar la función B como callback
A(B);
