const leia = require('readline-sync');

// Exercicio 8
//Desenvolva um algoritmo que simule as operações básicas de uma Conta Bancária. O programa deverá ler o tipo da operação a ser realizada com base na tabela abaixo (número inteiro entre 1 e 3) e o valor a ser depositado ou sacado (somente nas opções 2 e 3). Considere que um saque só pode ser realizado caso haja saldo suficiente. Ao final de cada operação, exiba o novo Saldo na tela. A variável saldo (número real), será inicializada com o valor de R$ 1000.00. Caso o número da operação esteja fora do intervalo entre 1 e 4, mostre a mensagem na tela Operação Inválida!


let saldo = 1000;


let operacao = leia.questionInt(`Escolha uma dessas operacoes:\n 1 - Saldo\n 2 - Saque\n 3 - Deposito\n`);
console.log(operacao);

switch(operacao) {
  case 1:
    console.log(`Saldo: `, new Intl.NumberFormat('pt-BR', {
        style: 'currency', 
        currency: 'BRL',
      }).format(saldo))
    break

  case 2: 
    let saque = leia.questionInt(`Digite o valor de saque: `);
    if (saque <= saldo){
      let total = saldo - saque;
      console.log(`Novo saldo: `, new Intl.NumberFormat('pt-BR', {
        style: 'currency', 
        currency: 'BRL',
      }).format(total))
    }else {
      console.log(`Saldo insuficiente!`);
    };
    break

  case 3:
    let deposito = leia.questionInt(`Digite o valor do deposito: `);
    let total = saldo + deposito;
    console.log(`Novo saldo: `, new Intl.NumberFormat('pt-BR', {
        style: 'currency', 
        currency: 'BRL',
      }).format(total));
    break

  default:
    console.log(`Operação inválida!`);
}