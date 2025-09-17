// Ejercicio 3 - If / Else
let edadUsuario = 17; // cambiar para probar distintos casos

if (typeof edadUsuario !== "number" || Number.isNaN(edadUsuario)) {
    console.log("La edad no es un número válido.");
} else if (edadUsuario >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

// Si edadUsuario = 17 -> "Eres menor de edad"
// Si edadUsuario = 18 -> "Eres mayor de edad"
