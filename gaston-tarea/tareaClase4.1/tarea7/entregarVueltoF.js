let valor = 30;//entrada: 2
let pago = 80;
getCambio(valor,pago)//Estoy llamando a la funcion para que funcione. Y le pase el valor del producto y con cuanto me pagaron.
//cree la funcion getcambio
function getCambio(valor,pago){
//proceso
let vuelto = pago - valor;
//let vuelto = 50 - 30;

if (pago > valor){
    console.log("El vuelto es", vuelto);
    //salida
}

}