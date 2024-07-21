
let numero1: number = parseInt(prompt("Digite o primeiro número inteiro:")!);
let numero2: number = parseInt(prompt("Digite o segundo número inteiro:")!);

// Verifica qual número é maior ou se são iguais
if (numero1 > numero2) {
    console.log("O primeiro número (" + numero1 + ") é maior que o segundo número (" + numero2 + ").");
} else if (numero1 < numero2) {
    console.log("O segundo número (" + numero2 + ") é maior que o primeiro número (" + numero1 + ").");
} else {
    console.log("Os dois números são iguais.");
}