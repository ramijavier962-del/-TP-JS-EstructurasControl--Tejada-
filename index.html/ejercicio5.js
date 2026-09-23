let ingresosBrutos = parseFloat(prompt("Ingrese los ingresos brutos anuales (ARS): "));
let superficieAfectada = parseFloat(prompt("Ingrese la superficie afectada (m^2): "));

if (ingresosBrutos <= 6000000 && superficieAfectada <= 30) {
    document.getElementById("resultado").innerHTML = "Categoría asignada: A";
}else if (ingresosBrutos <= 12000000 && superficieAfectada <= 45) {
    document.getElementById("resultado").innerHTML = "Categoría asignada: B";
}else if (ingresosBrutos <= 18000000 && superficieAfectada <= 85) {
    document.getElementById("resultado").innerHTML = "Categoría asignada: C";
}else {
    document.getElementById("resultado").innerHTML = "Categoría asignada: Régimen General";
}
document.getElementById("resultado").innerHTML +=
    "<br>Ingresos Brutos Anuales: $" + ingresosBrutos;

document.getElementById("resultado").innerHTML +=
    "<br>Superficie Afectada: " + superficieAfectada + " m^2";