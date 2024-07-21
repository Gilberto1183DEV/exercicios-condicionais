import promptSync from 'prompt-sync';

const prompt = promptSync();

const numero: number = parseInt(prompt('Digite um número inteiro: '));

if (numero % 3 === 0 && numero % 5 === 0) {
    console.log('O número é divisível por 3 e por 5.');
} else {
    console.log('O número não é divisível por 3 e por 5.');
}
