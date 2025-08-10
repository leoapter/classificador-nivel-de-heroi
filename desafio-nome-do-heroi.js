

let nome = "Arthas"; // A variável let nome armazena o nome do heroi
let experiencia = 9001; // A variável let experiência armazena a quantidade de experiência do heroi
// let nivel; // A variavel let nível irá armazenar o nível do heroi, após a verificação da experiência do mesmo

// Abaixo temos uma "estrutura de repetição" (for) que irá imprimir o nome do heroi e o seu nível

if (experiencia < 1000) { // Aqui temos uma "estrutura condicional de decisão" (if) com um "operador" (<) que verifica se a experiência é menor do que 1000
    nivel = "Ferro";
}
else if (experiencia >= 1001 && experiencia <= 2000) {
    nivel = "Bronze";
}
else if (experiencia >= 2001 && experiencia <= 5000) {
    nivel = "Prata";
}
else if (experiencia >= 5001 && experiencia <= 7000) {
    nivel = "Ouro";
}
else if (experiencia >= 7001 && experiencia <= 8000) {
    nivel = "Platina";
}
else if (experiencia >= 8001 && experiencia <= 9000) {
    nivel = "Ascendente";
}
else if (experiencia >= 9001 && experiencia <= 10000) {
    nivel = "Imortal"
}
else if (experiencia >= 10001) {
    nivel = "Radiante"
}

console.log(nivel);
console.log(nome + ':' + nivel);

// Abaixo temos o console.log que imprime o nome do heroi e o seu nível
console.log('O heroi de nome ' + nome + ' está no nível ' + nivel + '!!!');

