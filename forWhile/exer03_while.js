//While
// Exercicio 03 - Escreva um algoritmo, que leia a idade de várias pessoas (números inteiros), via teclado e mostre na tela o total de pessoas cuja idade seja menor que 21 anos e o total de pessoas cuja idade, seja maior que 50 anos. A leitura dos dados deve ser finalizada ao digitar uma idade negativa. Veja o exemplo abaixo:

const leia = require('readline-sync');

let twentyOne = 0;
let fifty = 0;
let active = true;

while (active === true){
  let age = leia.questionInt("Digite uma idade: ");
  if(age < 0) {
    active = false;
  } else if(age < 21){
    twentyOne++;

  } else if(age > 50){
    fifty++;
  }
}

console.log(`Total de pessoas menores de 21 anos: ${twentyOne}`)
console.log(`Total de pessoas maiores de 50 anos: ${fifty}`)
