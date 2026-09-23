let montoARS = parseFloat(prompt("Ingrese el monto en Pesos Argentinos (ARS): "));

let monedaDestino = prompt("Ingrese la moneda de destino (USD, EUR, BRL): ").toUpperCase();

let mesesInflacion = parseInt(prompt("Ingrese los meses de proyección de inflación (1-12): "));
let montoConvertido = 0;
const cotizaciones = {
    USD: 1300,
    EUR: 1420,
    BRL: 220
};

switch (monedaDestino) {

    case "USD":
        montoConvertido = montoARS / cotizaciones.USD;
        break;

    case "EUR":
        montoConvertido = montoARS / cotizaciones.EUR;
        break;

    case "BRL":
        montoConvertido = montoARS / cotizaciones.BRL;
        break;

    default:
        document.getElementById("resultado").innerHTML =
            "Moneda de destino no válida.";
        break;
}
if (montoConvertido > 0) {

    let montoConComision = montoConvertido * 0.98;

    let inflacionAcumulada =
        montoARS * (1 + 0.04 * mesesInflacion);

    document.getElementById("resultado").innerHTML =
        "<h2>Resultado</h2>" +
        "<p>Monto convertido antes de comisión: " +
        montoConvertido.toFixed(2) + " " + monedaDestino + "</p>" +

        "<p>Monto convertido después de comisión del 2%: " +
        montoConComision.toFixed(2) + " " + monedaDestino + "</p>" +

        "<p>Valor equivalente proyectado por inflación en ARS: $" +
        inflacionAcumulada.toFixed(2) + "</p>";
}  
