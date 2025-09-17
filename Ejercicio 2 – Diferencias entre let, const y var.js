// Ejercicio 2 - Diferencias entre let, const y var

// 1) let -> puedes cambiar el valor sin problema
let ciudad = "Bogotá";
console.log("Ciudad inicial:", ciudad);
ciudad = "Medellín"; // cambiando valor
console.log("Ciudad cambiada:", ciudad);

// 2) const -> su valor NO puede cambiar
const pais = "Colombia";
console.log("País inicial:", pais);
// pais = "Argentina"; // Si descomentas esto dará error: "TypeError: Assignment to constant variable."

// 3) var -> se puede redeclarar y su comportamiento es diferente en bloques
var color = "Rojo";
console.log("Color fuera del bloque:", color);

{
  var color = "Azul"; // Cambia la variable globalmente
  console.log("Color dentro del bloque:", color);
}

console.log("Color después del bloque:", color);
