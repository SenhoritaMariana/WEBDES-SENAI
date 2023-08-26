let numeros = [1, 2, 3, 4, 5]

let quadrados = []

//numeros[i] -> i -> numeros 
numeros.forEach(function (numero, indice, arrayCompleto) {

    const quadrado = Math.pow(numero, 2)
    quadrados.push(quadrado)

    console.log(`Elemento: ${numero}`);
    console.log(`índice: ${indice}`);
    console.log(`Array Original: ${arrayCompleto}`);
    console.log(`Quadrado: ${quadrado} \n\n`);
})

console.log('Array Original:', numeros);
console.log('Array com Quadrados:', quadrados);

//Outra forma (Claramente Mais Complexa) de mostrar o triplo dos números (Nome da Variável criada)
let numerosTriplo = []

numeros.forEach(function(n){

    console.log(n * 3);
    
    numerosTriplo.push(n*3)
});

console.log(numerosTriplo);

numeros.forEach(function(n, i) {
    console.log(`índice ${i}: ${n}`);
});

//Mostra o Tripllo dos números que foram usados na variável
numeros.forEach(numero => console.log(numero*3));

//Seleciona cada seção para aparecer no Terminal
const pessoas = [
    { nome: 'João', idade: 30 },
    { nome: 'Maria', idade: 25 },
    { nome: 'Pedro', idade: 40 }
];

pessoas.forEach(function (pessoa) {
    console.log(pessoa.nome);
    console.log(pessoa.idade);
});

//Soma
let soma = 0;

numeros.forEach(function(numeros) {

    soma += numeros
});

console.log(soma);