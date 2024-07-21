let num1: number = parseFloat(prompt("Digite o primeiro número:")!);
let num2: number = parseFloat(prompt("Digite o segundo número:")!);
let num3: number = parseFloat(prompt("Digite o terceiro número:")!);

let numeros: number[] = [num1, num2, num3];
numeros.sort((a, b) => a - b);

console.log("Números em ordem crescente:", numeros.join(", "));
