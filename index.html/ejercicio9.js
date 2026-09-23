
     let dificultadRespirar = prompt(
    "¿Presenta dificultad para respirar? (si/no): "
).toLowerCase();

let nivelDolor = parseInt(prompt("Ingrese el nivel de dolor del 1 al 10: "));
let presionArterial = parseInt(prompt("Ingrese la presión arterial sistólica (mm Hg): "));
let resultado = "";
let espera = "";


if (dificultadRespirar === "si" || presionArterial > 180) {

    resultado = "Nivel Rojo: Atención Inmediata.";
    espera = "Tiempo máximo de espera: Inmediato.";

} else if (nivelDolor >= 7 ||(presionArterial >= 140 && presionArterial <= 180)) {

    resultado = "Nivel Amarillo: Urgencia Media.";
    espera = "Tiempo máximo de espera: 30 minutos.";

} else {

    resultado = "Nivel Verde: Consulta Baja Prioridad.";
    espera = "Tiempo máximo de espera: 2 horas.";
}

document.getElementById("resultado").innerHTML =
    "<h2>Resultado</h2>" +
    "<p>" + resultado + "</p>" +
    "<p>" + espera + "</p>";
