function obterDiaDaSemana(numero: number): string {
    switch (numero) {
        case 1:
            return "Domingo";
        case 2:
            return "Segunda-feira";
        case 3:
            return "Terça-feira";
        case 4:
            return "Quarta-feira";
        case 5:
            return "Quinta-feira";
        case 6:
            return "Sexta-feira";
        case 7:
            return "Sábado";
        default:
            return "Número inválido! Por favor, digite um número entre 1 e 7.";
    }
}

const numero = parseInt(prompt("Digite um número entre 1 e 7:")!);

const diaDaSemana = obterDiaDaSemana(numero);
console.log(diaDaSemana);


