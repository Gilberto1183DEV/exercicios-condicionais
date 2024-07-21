let salario: number = parseFloat(prompt("Digite o salário do funcionário:")!);
let aumento: number;

if (salario > 1500) {
    aumento = salario * 0.10;
} else {
    aumento = salario * 0.15;
}

let novoSalario: number = salario + aumento;
console.log("O novo salário é:", novoSalario.toFixed(2));
