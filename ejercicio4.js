const prompt = require('prompt-sync')();

let numero1 = prompt("Ingresa un primer numero: ");
let numero2 = prompt("Ingresa un segundo numero: ");
let numero3 = prompt("Ingresa un tercer numero: ");

numero1 = Number(numero1);
numero2 = Number(numero2);
numero3 = Number(numero3);


if (numero1 === numero2 && numero2 === numero3) {
    console.log("Los tres números son iguales.");
} else if (numero1 === numero2) {
    console.log("El primer y segundo número son iguales.");
} else if (numero1 === numero3) {
    console.log("El primer y tercer número son iguales.");
} else if (numero2 === numero3) {
    console.log("El segundo y tercer número son iguales.");
} else {
    console.log("Ninguno de los números son iguales.");
}