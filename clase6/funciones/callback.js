// Función para procesar una orden de compra
function procesarOrden(infoOrden, realizarPago) {
    console.log(`Procesando orden para ${infoOrden.producto}...`);
    
    // Lógica para procesar la orden, como verificar el inventario, calcular el total, etc.

    // Llamar al callback para realizar el pago
    realizarPago(infoOrden.total);
}

// Función para realizar el pago
function realizarPago(total) {
    console.log(`Realizando pago por un total de ${total}...`);
    // Aquí iría la lógica para procesar el pago, como conectar con una pasarela de pago, procesar la tarjeta, etc.
    console.log("El pago se ha realizado con éxito.");
}

// Información de la orden
let orden = {
    producto: "Camisa",
    cantidad: 1,
    total: 30
};

// Procesar la orden y realizar el pago
procesarOrden(orden, realizarPago);
