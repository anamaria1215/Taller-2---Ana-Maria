// Ejercicio 2 - let, const, var

// 1) let: se puede reasignar
let ciudad = "Bogotá";
console.log("ciudad (inicio):", ciudad); // Bogotá
ciudad = "Medellín";
console.log("ciudad (cambiada):", ciudad); // Medellín

// 2) const: no se puede reasignar
const pais = "Colombia";
console.log("pais:", pais);
try {
    // esto causará un error en ejecución
    pais = "Perú";
} catch (error) {
    console.error("Intento de reasignar 'pais' (const) -> Error:", error.message);
    // Mensaje: "Assignment to constant variable."
}

// 3) var: no es block-scoped (es function-scoped), por eso cambia fuera del bloque
var color = "rojo";
console.log("color antes del bloque:", color); // rojo
{
    var color = "azul"; // redeclaración y cambio afecta fuera del bloque
    console.log("color dentro del bloque:", color); // azul
}
console.log("color después del bloque:", color); // azul

// Comparación con let (block-scoped)
let mascota = "gato";
console.log("mascota antes:", mascota); // gato
{
    let mascota = "perro"; // esta 'mascota' es otra (solo existe dentro del bloque)
    console.log("mascota dentro del bloque:", mascota); // perro
}
console.log("mascota fuera del bloque:", mascota); // gato
