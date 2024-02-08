 En JavaScript, una variable es un contenedor para almacenar valores. Puedes declarar variables utilizando las palabras clave `var`, `let` o `const`. Aquí hay una breve descripción y alcance de cada una, junto con algunas diferencias clave:

1. **var:**
   - **Declaración:** `var nombreVariable;`
   - **Alcance:** Variables `var` tienen un alcance de función. Esto significa que están disponibles dentro de la función en la que se declaran.
   - **Hoisting:** Las declaraciones `var` son elevadas al principio de su contexto de ejecución. Esto significa que puedes usar la variable antes de declararla, pero su valor será `undefined`.

   ```javascript
   function ejemplo() {
     console.log(x); // undefined
     var x = 5;
     console.log(x); // 5
   }
   ```

2. **let:**
   - **Declaración:** `let nombreVariable;`
   - **Alcance:** Las variables `let` tienen un alcance de bloque. Esto significa que están disponibles solo dentro del bloque (declaración `if`, `for`, `while`, etc.) en el que se declaran.
   - **Hoisting:** Las variables `let` también se elevan, pero a diferencia de `var`, no se puede acceder a ellas antes de su declaración.

   ```javascript
  if (true) {
   var y = 10; 
   console.log(y); // 10 
  } console.log(y); 
  //el console log que esta fuera del condicional muestra valor ?
   ```

3. **const:**
   - **Declaración:** `const nombreVariable = valor;`
   - **Alcance:** Al igual que `let`, las variables `const` tienen un alcance de bloque. Sin embargo, a diferencia de `let`, una vez que asignas un valor a una variable `const`, no puedes reasignarla.
   - **Hoisting:** Las variables `const` también se elevan, pero al igual que `let`, no puedes acceder a ellas antes de su declaración.

   ```javascript
   const PI = 3.14;
   // PI = 3.14159; // Error: Assignment to constant variable.
   ```

En general, se recomienda usar `const` siempre que sea posible, ya que promueve la inmutabilidad. Si necesitas reasignar la variable, usa `let`. Evita `var` a menos que estés trabajando en un entorno más antiguo que no admite `let` y `const`.

```javascript
if (true) {
  var y = 10;
  console.log(y); // 10
}
console.log(y); // 10
```

Sí, en JavaScript, si declaras una variable con `var` dentro de un bloque condicional (o cualquier otro bloque), esa variable estará disponible fuera del bloque. Esto se debe a que las variables `var` tienen un alcance de función, y no de bloque.

En tu ejemplo:

```javascript
if (true) {
  var y = 10;
  console.log(y); // 10
}
console.log(y); // 10
```

El `console.log(y)` fuera del bloque condicional mostrará el valor de `y` como 10. Aunque `y` fue declarada dentro del bloque `if`, su alcance se extiende más allá del bloque y abarca toda la función (o el ámbito global si no estás dentro de una función).
