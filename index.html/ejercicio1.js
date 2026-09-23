let rol = prompt("Ingrese su rol (admin, editor, cliente): ").toLowerCase();
let estadoCuenta = prompt("Ingrese el estado de su cuenta (activa, suspendida): ").toLowerCase();
let horaActual = parseInt(prompt("Ingrese la hora actual (0-23): "));
if (estadoCuenta === "suspendida") {
    document.getElementById("resultado").innerHTML = "Acceso denegado: cuenta suspendida.";
}else {
    switch (rol) {
        case "admin":
            document.getElementById("resultado").innerHTML = "Acceso permitido: rol de administrador.";
            break;
        case "editor":
            if (horaActual >= 8 && horaActual < 18) {
                document.getElementById("resultado").innerHTML = "Acceso permitido: rol de editor.";
            } else {
                document.getElementById("resultado").innerHTML = "Acceso denegado: fuera del horario de trabajo.";
            }
            break;
        case "cliente":
            if (estadoCuenta === "activa") {
                document.getElementById("resultado").innerHTML = "Acceso permitido: rol de cliente.";
            } else {
                document.getElementById("resultado").innerHTML = "Acceso denegado: cuenta no activa.";
            }
            break;
        default:
            document.getElementById("resultado").innerHTML = "Rol no autorizado.";
    }
}
