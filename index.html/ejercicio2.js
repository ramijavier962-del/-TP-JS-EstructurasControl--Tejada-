let edadConductor = parseInt(prompt("Ingrese la edad del conductor: "));
let tipoCobertura = prompt("Ingrese el tipo de cobertura (terceros, terceros_completo, todo_riesgo): ").toLowerCase();
let cantidadAccidentes = parseInt(prompt("Ingrese la cantidad de accidentes en el último año: "));

 let tarifaBase = 0;
 switch (tipoCobertura) {
    case "terceros":
        tarifaBase = 45000;
        break;
    case "terceros_completo":
        tarifaBase = 70000;
        break;
    case "todo_riesgo":
        tarifaBase = 110000;
        break;
    default:
        document.getElementById("resultado").innerHTML = "Tipo de cobertura no válido.";
        tarifaBase = 0;
        break;
} if (edadConductor < 25) {
        document.getElementById("resultado").innerHTML = "Se aplicará un recargo del 20% por ser menor de 25 años.";
        tarifaBase *= 1.2;  
    }else if (cantidadAccidentes === 0) {
        document.getElementById("resultado").innerHTML = "Se aplicará un descuento del 10% por no tener accidentes en el último año.";
        tarifaBase *= 0.9;  
    }if (cantidadAccidentes >= 3 && tipoCobertura === "todo_riesgo") {
    document.getElementById("resultado").innerHTML = "No se puede contratar la cobertura 'todo_riesgo' debido a su historial de accidentes.";
    tarifaBase *=1.3; 
}
