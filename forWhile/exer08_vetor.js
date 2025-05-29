// Exercicio 8
//Elabore um algoritmo que leia 10 números inteiros e armazene em um vetor. Em seguida, mostre na tela:

// Todos os elementos dos índices ímpares do vetor 
// Todos os elementos do vetor que são números pares
// A Soma de todos os elementos do vetor
// A Média de todos os elementos do vetor, armazenada em uma variável do tipo real


let list = [];

const leia = require('readline-sync');
let sum = 0;

for(let i = 0; i < 10; i++) {
  list[i] = leia.questionInt("Digite um numero: ");
  sum = sum + list[i];

}
console.log("---------------------------------")
console.log(`A soma dos valores: ${sum}`)
console.log(`A média dos valores: ${(sum/10).toFixed(2)}`)
console.log("---------------------------------")

//impares
for(let i = 1; i < 10; i+=2) {
  console.log(`Elementos nos indices ímpares:  ${list[i]}`);
}

console.log("---------------------------------")
//Mostra os pares
for(let i = 0; i < 10; i++) {
  if(list[i] % 2 === 0) {
    console.log(`Elementos nos indices pares: ${list[i]}`);
  }
}