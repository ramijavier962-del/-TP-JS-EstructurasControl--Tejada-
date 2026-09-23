let montoCarrito = parseFloat(
    prompt("Ingrese el monto total del carrito (ARS): ")
);

let categoriaUsuario = prompt("Ingrese la categoría del usuario (Bronce, Plata, Oro): ").toLowerCase();
let codigoDescuento = prompt("Ingrese el código de descuento (DESC10, SUPER20, ninguno): ").toUpperCase();
let descuentoCupon = 0;
let descuentoMembresia = 0;



if (categoriaUsuario === "bronce") {
    descuentoMembresia = 0;
}

if (categoriaUsuario === "plata") {
    descuentoMembresia = 0.05;
}

if (categoriaUsuario === "oro") {
    descuentoMembresia = 0.15;
}



switch (codigoDescuento) {

    case "DESC10":
        descuentoCupon = 0.10;
        break;

    case "SUPER20":
        if (montoCarrito > 50000) {
            descuentoCupon = 0.20;
        }
        break;

    case "ninguno":
        descuentoCupon = 0;
        break;
}

let total = montoCarrito  * (1 - descuentoMembresia)* (1 - descuentoCupon);
let costoEnvio;

if (total > 100000) {
    costoEnvio = 0;
} else {
    costoEnvio = 4500;
}
let totalNeto = total + costoEnvio;


document.getElementById("resultado").innerHTML =
    "<h2>Resumen de compra</h2>" +
    "<p>Descuento por membresía: " +
    (descuentoMembresia * 100) + "%</p>" +

    "<p>Descuento por cupón: " +
    (descuentoCupon * 100) + "%</p>" +

    "<p>Costo de envío: $" +
    costoEnvio + "</p>" +

    "<p><strong>Total neto a pagar: $" +
    totalNeto + "</strong></p>";