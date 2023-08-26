let numeros = [1, 2, 3]
console.log(numeros);
console.log(...numeros);

let nome = "Bruno"
console.log(nome);
console.log(...nome);

// Copiar Arrays
let array1 = [1, 2, 3]
let array2 = [...array1]

console.log(array1);
console.log(array2);

//Concatenar arrays

let num1 = [1, 2, 3]
let num2 = [4, 5, 6]

const concatenatedArray = [...num2, ...num1]
console.log(concatenatedArray);

// Passar elementos como argumentos para uma função
const numbers = [1, 2, 3, 4, 5];

console.log(Math.max(...numbers));
console.log(Math.min(...numbers));

//Copiar propriedades de objetos

const pessoa = {
    nome: "Eduardo",
    sobrenome: "Mônica",
    idade: 23
}

const clonePessoa = {...pessoa}

console.log(pessoa);
console.log(clonePessoa);

// Criar clones de objetos com modificações
const famoso = {
    nome: "Cleyton",
    trabalho: "Bom de Guerra",
    idade: 350
}
const modificaFamoso = {...famoso, trabalho:"Gúd ófi uár"}

console.log(famoso);
console.log(modificaFamoso);