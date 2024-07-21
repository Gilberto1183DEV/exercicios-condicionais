const verificarNumero = (numero: number): string => {
    if (numero > 0) {
        return "O número é positivo.";
    } else if (numero < 0) {
        return "O número é negativo.";
    } else {
        return "O número é zero.";
    }
};

