/*
Escribir un programa que cargue en una variable un número entero e imprima 
por pantalla su tabla de multiplicar (del 1 al 12).
*/
// tabla_multiplicar_argumento.js

// Obtener el número desde la línea de comandos
const numero = process.argv[2];

// Verificar si se proporcionó un número
if (!numero || isNaN(numero)) {
    console.log("Por favor, proporciona un número válido como argumento.");
    process.exit(1);
}

// Imprimir la tabla de multiplicar
console.log(`Tabla de multiplicar del ${numero}:`);

for (let i = 1; i <= 12; i++) {
    const resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
}

//se ejecuta asi:  node tabla_multiplicar_argumento.js 7


/*
process: Es un objeto global en Node.js que proporciona información y control sobre el proceso de ejecución.
argv: Es una propiedad de process que contiene una matriz con los argumentos de la línea 
de comandos proporcionados al ejecutar el proceso Node.js.
[2]: Accede al tercer elemento de la matriz argv, 
ya que los primeros dos elementos son rutas al ejecutable de Node.js 
y al script que se está ejecutando. En JavaScript, los índices de matriz comienzan en 0, 
por lo que [2] hace referencia al tercer elemento.
En resumen, const numero = process.argv[2];
 establece una constante llamada numero 
 que contiene el tercer argumento pasado al script Node.js al ejecutarlo desde la línea de comandos.
  Por ejemplo, si ejecutas node script.js 10, numero tendrá el valor "10".
*/