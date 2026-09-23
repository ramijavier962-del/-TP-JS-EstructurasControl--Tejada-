let sueldoBruto = parseInt(prompt("Ingrese el Sueldo Bruto del trabajador: "));
let jubilacion = sueldoBruto * 0.11;
let obraSocial = sueldoBruto * 0.03;
let ley19032 = sueldoBruto * 0.03;
let sueldoNetoProvisorio = sueldoBruto - jubilacion - obraSocial - ley19032;
if (sueldoNetoProvisorio <= 1200000) {
    document.getElementById("resultado").innerHTML = "Sueldo Neto Provisorio: $" + sueldoNetoProvisorio + " - Exento de Impuesto a las Ganancias.";
    document.getElementById("resultado").innerHTML += "<br>Sueldo Neto Final: $" + sueldoNetoProvisorio;
} if (sueldoNetoProvisorio > 1200001 && sueldoNetoProvisorio <= 2000000) {
    let impuestoGanancias = (sueldoNetoProvisorio - 1200000) * 0.15;
    let sueldoNetoFinal = sueldoNetoProvisorio - impuestoGanancias;
    document.getElementById("resultado").innerHTML = "Sueldo Neto Provisorio: $" + sueldoNetoProvisorio;
    document.getElementById("resultado").innerHTML += "<br>Retención de Ganancias: $" + impuestoGanancias;
    document.getElementById("resultado").innerHTML += "<br>Sueldo Neto Final: $" + sueldoNetoFinal;
}else {
    let impuestoGanancias = 120000 + (sueldoNetoProvisorio - 2000000) * 0.25;
    let sueldoNetoFinal = sueldoNetoProvisorio - impuestoGanancias;
    document.getElementById("resultado").innerHTML = "Sueldo Neto Provisorio: $" + sueldoNetoProvisorio;
    document.getElementById("resultado").innerHTML += "<br>Retención de Ganancias: $" + impuestoGanancias;
    document.getElementById("resultado").innerHTML += "<br>Sueldo Neto Final: $" + sueldoNetoFinal;
}