import promptSync from 'prompt-sync';

const prompt = promptSync();

const numero: number = parseInt(prompt('Digite um número inteiro de 1 a 5: '));

switch (numero) {
    case 1:
        console.log('Muito insuficiente');
        break;
    case 2:
        console.log('Insuficiente');
        break;
    case 3:
        console.log('Regular');
        break;
    case 4:
        console.log('Bom');
        break;
    case 5:
        console.log('Muito bom');
        break;
    default:
        console.log('Número fora do intervalo de 1 a 5.');
}
