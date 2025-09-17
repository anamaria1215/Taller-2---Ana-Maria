// Ejercicio 4 - Switch
let dia = "viernes"; // probar: "lunes", "viernes", "sábado", "domingo", "miercoles", etc.
switch (dia) {
    case "lunes":
        console.log("Es lunes, inicio de semana");
        break;
    case "viernes":
        console.log("Es viernes, casi fin de semana");
        break;
    case "sábado":
    case "domingo":
        console.log("Es sábado o domingo, fin de semana");
        break;
    default:
        console.log("Es un día entre semana");
        break;
}

// Ejemplos:
// "lunes" -> Es lunes, inicio de semana
// "viernes" -> Es viernes, casi fin de semana
// "sábado", "domingo" -> Es sábado o domingo, fin de semana
// "martes"/"miércoles"/"jueves" -> Es un día entre semana
