// Solicita ao usuário que digite um número e converte para inteiro usando parseInt
const numero = 7;

// Variável para contar quantos divisores o número possui
let divisores = 0;

// Variável de controle para o laço de repetição while
let i = 1;

// Laço de repetição while que verifica se i é menor ou igual ao número digitado
while (i <= numero) {
  // Verifica se o número é divisível por i, ou seja, se o resto da divisão é igual a 0
  if (numero % i === 0) {
    // Incrementa o contador de divisores
    divisores++;
  }
  // Incrementa o valor de i para verificar o próximo número
  i++;
}

// Verifica se o número possui exatamente dois divisores (1 e ele mesmo)
if (divisores === 2) {
  console.log(numero + " é um número primo.");
} else {
  console.log(numero + " não é um número primo.");
}

//Array com cícylos que utiliza o forEach
let numeros = [5, 9, 4, 7, 1]

let círculos = []

numeros.forEach(function (numero, indice, arrayCompleto) {

  const círculo = Math.pow(numero, 5)
  círculos.push(círculo)

  console.log(`Elemento: ${numero}`);
  console.log(`Índice: ${indice}`);
  console.log(`Primeiro Array: ${arrayCompleto}`);
  console.log(`Círculo: ${círculo} \n\n`); 
})

console.log('Primeiro Array:', numeros);
console.log('Array com círculos:', círculosj);