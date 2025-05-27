const leia = require('readline-sync');

//Exercicio 3 
//Para doar sangue é necessário ter entre 18 e 69 anos. Pessoas com idade entre 60 e 69 anos, só podem doar sangue se não for a sua primeira doação. Escreva um Algoritmo que leia via teclado o nome do doador (string), a idade (número inteiro) do doador e se já fez outras doações de sangue (boolean). Conforme as Regras para a doação de sangue citadas acima, mostre na tela se o doador está Apto ou Não Apto para doar sangue. Veja os exemplos abaixo:

let nameComplete, age, bloodActive;

nameComplete = leia.question("Digite o nome do doador: ", {limitMessage: "Apenas letras"});
age = leia.questionInt("Digite a idade do doador: ", {limitMessage: "Apneas digite numeros"});
bloodActive = leia.keyInYN("Primeira doacao de sangue? ", {limitMessage: "Apenas y ou n"});

if (age >= 18 && age < 60) {
  console.log(`${nameComplete} está apto para doar sangue!`);

}else if (age >= 60 && age <= 69){
  if(bloodActive === true) {
    console.log(`${nameComplete} não está apto para doar sangue!`);
  } else {
    console.log(`${nameComplete} está apto para doar sangue!`);
  }
} else {
  console.log(`${nameComplete} não está apto para doar sangue!`);
}