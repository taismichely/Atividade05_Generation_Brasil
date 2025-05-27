const leia = require('readline-sync');

//Exercicio 5
//Com base na tabela abaixo, escreva um algoritmo que leia o código de um item (número inteiro entre 1 e 6) e a quantidade comprada deste item (número inteiro). A seguir, mostre na tela o valor total da conta e o nome do produto que foi comprado.

let soma;
let produto;
let code = leia.questionInt(`Digite o codigo de 1 a 6 de um item: `);
let count = leia.questionInt(`Digite a quantidade do produto comprado: `);
console.log("-----------------------------------------")

switch(code) {
  case 1:
    produto = "Cachorro Quente" 
    soma = count * 10;
    console.log(`Produto: `, produto, `\nValor Total: `, 
      new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
        }).format(soma)
    );
    break

  case 2:
    produto = "X-Salada"
    soma = count * 15;
    console.log(`Produto: `, produto, `\nValor Total: `, 
      new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
        }).format(soma)
    );
    break

  case 3:
    produto = "X-Bacon"
    soma = count * 18;
    console.log(`Produto: `, produto, `\nValor Total: `, 
      new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
        }).format(soma)
    );
    break

  case 4:
    produto = "Bauru"
    soma = count * 12;
    console.log(`Produto: `, produto, `\nValor Total: `, 
      new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
        }).format(soma)
    );
    break

  case 5:
    produto = "Refrigerante"
    soma = count * 8;
    console.log(`Produto: `, produto, `\nValor Total: `, 
      new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
        }).format(soma)
    );
    break

  case 6:
    produto = "Suco de laranja"
    soma = count * 13;
    console.log(`Produto: `, produto, `\nValor Total: `, 
      new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
        }).format(soma)
    );
    break
}