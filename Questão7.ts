let letras: string = prompt("Digite um letras:")!.toLowerCase();

if ("aeiou".includes(letras)) {
    console.log(letras, "é uma vogal.");
} else {
    console.log(letras, "é uma consoante.");
}
