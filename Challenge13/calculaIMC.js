
let peso = 64;     
let altura = 1.65;


let imc = peso / (altura ** 2);

console.log("Tu IMC es:", imc.toFixed(2));

if (imc < 18.5) {
  console.log("Categoría: Peso bajo");
} else if (imc >= 18.5 && imc <= 24.99) {
  console.log("Categoría: Peso normal");
} else {
  console.log("Categoría: Sobrepeso");
}
