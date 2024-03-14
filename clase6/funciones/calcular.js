let dinero = 100;
let producto = 90;
let detalleProduct = "alfajor";
//CB para identificar
// Función para obtener el cambio de la compra
const getCambioDeCompra = (dinero, producto, callback) => {
    const cambio = dinero - producto;
    callback(cambio);
};

// Función para obtener el detalle de la compra
const getDetalleCompra = (cambio, detalleProduct) => {
    console.log(`El cambio de la compra es ${cambio} y el producto es ${detalleProduct}`);
};

// Obtener el cambio de la compra y luego mostrar el detalle
getCambioDeCompra(dinero, producto, cambio => {
    getDetalleCompra(cambio, detalleProduct);
});
