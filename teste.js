const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Crie uma variável para armazenar o nome
let nome;

// Pergunte ao usuário
rl.question('Digite seu nome: ', (resposta) => {
  nome = resposta;

  // Exiba o nome digitado
  console.log(`Você digitou: ${nome}`);

  // Feche a interface readline
  rl.close();
});

console.log(nome)