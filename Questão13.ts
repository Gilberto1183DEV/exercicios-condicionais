import promptSync from 'prompt-sync';

const prompt = promptSync();

const diaSemana: string = prompt('Digite o dia da semana (por extenso): ').toLowerCase();

if (diaSemana === 'sábado' || diaSemana === 'domingo') {
    console.log('É fim de semana.');
} else {
    console.log('É dia útil.');
}
