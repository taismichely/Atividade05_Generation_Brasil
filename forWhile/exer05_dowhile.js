// Exercicio 5 - Escreva um algoritmo, que leia números inteiros via teclado, até que o número zero seja digitado. Ao final, mostre na tela a soma de todos os números digitados, que sejam positivos. Veja o exemplo abaixo:


const leia = require('readline-sync');
let number;
let sum = 0;
let active = true;

do {
  number = leia.questionInt("Digite um numero: ");
  if(number > 0) {
    sum = sum + number;
  } else if (number === 0){
    active = false;
  }
} while (active === true);

console.log("-----------------------------------------");
console.log(`A soma dos números positivos é: ${sum}`);
