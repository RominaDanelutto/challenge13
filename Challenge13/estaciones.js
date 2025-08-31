let mes = prompt("Escribe un mes del año:");

if (mes === "Diciembre" || mes === "Enero" || mes === "Febrero") {
  alert("Verano");
} else if (mes === "Marzo" || mes === "Abril" || mes === "Mayo") {
  alert("Otoño");
} else if (mes === "Junio" || mes === "Julio" || mes === "Agosto") {
  alert("Invierno");
} else if (mes === "Septiembre" || mes === "Octubre" || mes === "Noviembre") {
  alert("Primavera");
} else {
  alert("Mes invalido");
}
