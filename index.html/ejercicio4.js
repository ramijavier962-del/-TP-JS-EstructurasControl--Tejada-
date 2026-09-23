let distanciaKm = parseFloat( prompt("Ingrese la distancia del viaje en kilómetros: "));
let tiempoMinutos = parseFloat(prompt("Ingrese el tiempo estimado del viaje en minutos: "));
let nivelDemanda = prompt("Ingrese el nivel de demanda (baja, media, alta): ").toLowerCase();
let tarifaBase = 800 + (distanciaKm * 350) + (tiempoMinutos * 80);
let factorDemanda;
let tarifaTotal;

switch (nivelDemanda) {
    case "baja":
        factorDemanda = 1.0;
        break;

    case "media":
        factorDemanda = 1.3;
        break;

    case "alta":
        factorDemanda = 1.8;
        break;

    default:
        document.getElementById("resultado").innerHTML = "Nivel de demanda no válido.";
        break;
}

if (factorDemanda !== undefined) {

    tarifaTotal = tarifaBase * factorDemanda;

    if (distanciaKm > 20) {
        tarifaTotal += 1500;
    }

    document.getElementById("resultado").innerHTML =
        "Factor de demanda aplicado: " + factorDemanda;

    document.getElementById("resultado").innerHTML +=
        "<br>El costo estimado total del viaje es: $" + tarifaTotal;
}