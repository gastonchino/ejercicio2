En JavaScript, tanto los métodos como las funciones son bloques de código que realizan una tarea específica, pero tienen algunas diferencias importantes:

1. **Funciones**: Son bloques de código independientes que pueden ser llamados y ejecutados en cualquier parte de tu programa. Puedes definir una función y luego llamarla cuando la necesites. Por ejemplo:

```javascript
function sumar(a, b) {
  return a + b;
}

console.log(sumar(3, 4)); // Esto imprimirá 7
```

2. **Métodos**: Son funciones que están asociadas a un objeto específico. En JavaScript, los objetos pueden tener propiedades que son funciones, y estas funciones se denominan métodos del objeto. Para llamar a un método, necesitas usar la notación de punto (`.`) para acceder al método desde el objeto. Por ejemplo:

```javascript
var persona = {
  nombre: 'Juan',
  edad: 30,
  saludar: function() {
    console.log('Hola, me llamo ' + this.nombre);
  }
};

persona.saludar(); // Esto imprimirá "Hola, me llamo Juan"
```

Entonces, la diferencia clave es que los métodos están asociados a objetos específicos y se acceden a través de la notación de punto, mientras que las funciones son bloques de código independientes que se pueden llamar en cualquier parte del programa.