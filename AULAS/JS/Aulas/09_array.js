let nomes = ["Mariana", "José", "Renan", "Maria", "Ryan"]

console.log(nomes);
console.log(nomes[0]);

nomes[3] = "Geovanna"
console.log(nomes);
console.log(nomes.length);

while (i < nomes.length) {
    console.log(nomes[i]);
    i++
}

let numeros = [10, 17, 13, 22, 5];
let i = 0;
let soma = 0;

console.log(numeros.length); 
console.log(numeros[2]);

while (i < numeros.length) {
    soma += numeros[i];
    i++;
}

console.log(soma);