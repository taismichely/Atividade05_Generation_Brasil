const leia = require('readline-sync');

//Exercicio 1
//Desenvolva um algoritmo que leia 3 valores inteiros A, B e C e imprima na tela se a soma de A + B é maior, menor ou igual a C.

let numberA, numberB, numberC;
let soma;

numberA = leia.questionInt("Digite o numero A: ");
numberB = leia.questionInt("Digite o numero B: ");
numberC = leia.questionInt("Digite o numero C ");

soma = numberA + numberB;
if(soma > numberC) {
  console.log(`A soma de A + B é Maior do que C`);
} else if (soma < numberC){
  console.log(`A soma A + B é Menor do que C `);
} else {
  console.log(`A soma de A + B é Igual a C`);
}
