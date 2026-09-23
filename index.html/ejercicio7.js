
let saldoInicial = 250000;
let opcion = parseInt(prompt("Seleccione una opción:\n1: Consultar Saldo\n2: Extraer Dinero\n3: Depositar Dinero\n4: Salir"));

switch (opcion) {
    case 1:
        document.getElementById("resultado").innerHTML =
            "Saldo disponible: $" + saldoInicial;
        break;

    case 2:
        let cantidadExtraer = parseInt(prompt("Ingrese la cantidad a extraer (múltiplo de $1.000): "));

        if (cantidadExtraer % 1000 !== 0) {
            document.getElementById("resultado").innerHTML =
                "La cantidad a extraer debe ser un múltiplo de $1.000.";
         } else if (cantidadExtraer > saldoInicial) {
            document.getElementById("resultado").innerHTML =
                "Fondos insuficientes.";
            } else {
            saldoInicial -= cantidadExtraer;

            document.getElementById("resultado").innerHTML =
                "Extracción exitosa. Saldo disponible: $" + saldoInicial;
        }

        break;

    case 3:
        let montoDepositar = parseInt(prompt("Ingrese el monto a depositar: "));
         saldoInicial += montoDepositar;
         document.getElementById("resultado").innerHTML =
            "Depósito exitoso. Saldo disponible: $" + saldoInicial;
        break;

    case 4:
        document.getElementById("resultado").innerHTML =
            "Gracias por utilizar el cajero automático.";
        break;

    default:
        document.getElementById("resultado").innerHTML =
            "Opción no válida.";
}
