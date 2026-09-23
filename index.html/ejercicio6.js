let ingresoMensual = parseFloat(prompt("Ingrese su ingreso mensual neto (ARS): "));
let antiguedadLaboral = parseFloat(prompt("Ingrese su antigüedad laboral en años: "));
let historialDeudas = prompt("¿Posee deudas pendientes? (si/no): ").toLowerCase();
let montoCredito = parseFloat(prompt("Ingrese el monto del crédito solicitado (ARS): "));
if (historialDeudas === "si") {
    document.getElementById("resultado").innerHTML = "Solicitud de crédito Rechazada: posee deudas pendientes.";
} else if (antiguedadLaboral < 1) {
    document.getElementById("resultado").innerHTML = "Solicitud de crédito Rechazada: antigüedad laboral insuficiente.";
}else {
    let cuotaMensual = (montoCredito * 1.3) / 12; 
    let porcentajeIngreso = ingresoMensual * 0.3;
    if (cuotaMensual <= porcentajeIngreso) {
        document.getElementById("resultado").innerHTML = "Solicitud de crédito Pre-Aprobada.";
    } else {
        document.getElementById("resultado").innerHTML = "Solicitud de crédito Rechazada: la cuota mensual supera el 30% del ingreso mensual neto.";
    }
}