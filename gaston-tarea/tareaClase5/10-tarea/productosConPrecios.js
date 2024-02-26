// Crear un array de productos con sus precios
let productos = [
    "sillon", 2300,
    "cama", 1980,
   "escalera", 500,
    "paraguas", 34
  ];
  
  // Imprimir la información de cada producto usando for...in
  for (let indice in productos) {
    if (indice % 2 === 0) {
      let nombreProducto = productos[indice];
      let precioProducto = productos[parseInt(indice) + 1];
      console.log(nombreProducto + ", Precio: " + precioProducto);
    }
  }
  