
let numeros = [16, 58, 30, 42, 90];
let i = 0;
let soma = 0;

console.log(numeros.length); 
console.log(numeros[2]);

while (i < numeros.length) {
    soma += numeros[i];
    i++;
}

console.log(soma);