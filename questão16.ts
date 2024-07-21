const verificarFaixaEtaria = (idade: number): string => {
    if (idade >= 0 && idade <= 1) {
        return "Você é um bebê.";
    } else if (idade >= 2 && idade <= 12) {
        return "Você é uma criança.";
    } else if (idade >= 13 && idade <= 18) {
        return "Você é um adolescente.";
    } else if (idade > 18) {
        return "Você é um adulto.";
    } else {
        return "Idade inválida. Por favor, insira uma idade positiva.";
    }
};


const idade = parseInt(prompt("Digite a sua idade:")!);

const faixaEtaria = verificarFaixaEtaria(idade);
console.log(faixaEtaria);

//alert(faixaEtaria);