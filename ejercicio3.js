const prompt = require('prompt-sync')();

let numero1 = prompt("Ingresa un primer numero: ");
let numero2 = prompt("Ingresa un segundo numero: ");
let numero3 = prompt("Ingresa un tercer numero: ");

numero1 = Number(numero1);
numero2 = Number(numero2);
numero3 = Number(numero3);

let mayor = 0;
let centro = 0;
let menor = 0;

if (numero1 >= numero2 && numero1 >= numero3){
    mayor = numero1;
    if (numero2 >= numero3){
        centro = numero2;
        menor = numero3;
    }else {
        centro = numero3;
        menor = numero2;
    }
}else if (numero2 >= numero1 && numero2 >= numero3){
    mayor = numero2;
    if (numero1 >= numero3){
        centro = numero1;
        menor = numero3;
    }else {
        centro = numero3
        menor = numero1
    }
}else {
    mayor = numero3;
    if (numero1 >= numero2){
        centro = numero1;
        menor = numero2;
    }else {
        centro = numero2;
        menor = numero1;
    }
}

console.log(`orden de mayor a menor: ${mayor} ${centro} ${menor}`);
console.log(`orden de menor a mayor: ${menor} ${centro} ${mayor}`);