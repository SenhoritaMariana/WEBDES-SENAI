const numero = 7;

let divisores = 0
let i = 1;

while (i <= numero) {
  if (numero % i === 0) {
    divisores++;
  }
  i++;
}
if (divisores === 2) {
  console.log(numero + " é um número primo.");
} else {
  console.log(numero + " não é um número primo.");
}
