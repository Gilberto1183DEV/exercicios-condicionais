let peso: number = parseFloat(prompt("Digite o seu peso (kg):")!);
let altura: number = parseFloat(prompt("Digite a sua altura (m):")!);

let imc: number = peso / (altura * altura);
let classificacao: string;

if (imc < 18.5) {
    classificacao = "abaixo do peso";
} else if (imc < 24.9) {
    classificacao = "com peso normal";
} else if (imc < 29.9) {
    classificacao = "com sobrepeso";
} else if (imc < 34.9) {
    classificacao = "obesa";
} else {
    classificacao = "muito obesa";
}

console.log("Seu IMC é", imc.toFixed(2), "e você está", classificacao);
