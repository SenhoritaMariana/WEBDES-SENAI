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