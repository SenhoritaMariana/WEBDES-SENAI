function primeiroCodigo() {
    console.log("Hello World !!!");
}

primeiroCodigo();

function dadosPessoais(nome, idade) {
    let texto = "Olá ${nome}, você tem ${idade} anos de idade";
    return texto;
}

let nome = "Mariana";
let idade = 16;

console.log(dadosPessoais(nome, idade));

function somar(n1, n2) {
    return n1 + n2;
}

console.log(somar(10,15));
console.log(somar(7,20));

function verificaPar(numero) {
    let resposta = "";
    if (numero % 2 === 0){
        resposta = "Par"
        return resposta
    }else{
        resposta = "Impar"
        return resposta
    }
}

console.log(verificaPar(5));
console.log(verificaPar(6));

let numeros = [13, 20, 22, 23, 24, 19, 7, 17]

function maiorNumero(array) {
    let maior = 0;
    for (let i = 0; i < array.length; i++) {
        if (maior < array[i]){
            maior = array[i];
        }
    }
    return maior;
}

console.log(maiorNumero(numeros));

function numeroAleatorio(maximo) {
    let aleatorio = Math.floor(Math.random() * maximo + 1);
    return aleatorio
}

console.log(numeroAleatorio(100));