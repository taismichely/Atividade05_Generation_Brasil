//For
// Exercicio 1 = Escreva um algoritmo, que leia 2 números inteiros via teclado, onde o primeiro número deve ser menor do que o segundo número. Caso contrário, deve ser exibida uma mensagem na tela informando que o intervalo é inválido e sair do programa. 

// No intervalo informado, mostre na tela todos os números que são múltiplos de 3 e 5. Veja os exemplos abaixo:

const leia = require('readline-sync');

let intOne = leia.questionInt("Digite o primeiro numero do intervalo: ");
let intTwo = leia.questionInt("Digite o segundo numero do intervalo: ");

if(intOne < intTwo) {
  console.log("---------------------------------------\n")
  console.log(`No intervalo entre ${intOne} e ${intTwo} são: `);
  for(intOne; intOne < intTwo; intOne++) {
    if(intOne % 3 === 0 && intOne % 5 === 0) {
      console.log(`${intOne} é multiplo de 3 e 5`)
    }
  }
} else {
  console.log(`Intervalo inválido!`);
}