let nome1: string = prompt("Digite o nome da primeira pessoa:")!;
let nome2: string = prompt("Digite o nome da segunda pessoa:")!;

if (nome1.length > nome2.length) {
    console.log(nome1, "possui mais caracteres que", nome2);
} else if (nome1.length < nome2.length) {
    console.log(nome2, "possui mais caracteres que", nome1);
} else {
    console.log("Ambos os nomes possuem a mesma quantidade de caracteres.");
}
