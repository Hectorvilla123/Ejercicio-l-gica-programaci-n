const prompt = require('prompt-sync')();

let numero1 = prompt("Ingresa un primer numero: ");
let numero2 = prompt("Ingresa un segundo numero: ");
let numero3 = prompt("Ingresa un tercer numero: ");

numero1 = Number(numero1);
numero2 = Number(numero2);
numero3 = Number(numero3);


console.log("su primer numero es: ", numero1);
console.log("su segundo numero es: ", numero2);
console.log("su tercer numero es: ", numero3);