let prova1: number = parseFloat(prompt("Digite a primeira nota:")!);
let prova2: number = parseFloat(prompt("Digite a segunda nota:")!);
let prova3: number = parseFloat(prompt("Digite a terceira nota:")!);

let mediaFinal: number = (prova1 + prova2 + prova3) / 3;

if (mediaFinal >= 7) {
    console.log("Aluno aprovado com média:", mediaFinal.toFixed(2));
} else {
    console.log("Aluno reprovado com média:", mediaFinal.toFixed(2));
}
