let numero1 = 0;

while (numero1 <= 10) {
    console.log(numero1);
    numero1++ // numero1 + 1
}

let numero2 = 50

while (numero2 >= 0){
    console.log(numero2);
    numero2--
}

let numero3 = 0;
let soma = 0;

while (numero3 <= 100 ) {

    soma += numero3
    
    numero3++
}

console.log(soma);

let senha = "12345";
let cont = 0;
let decont = 3;

while (senha != "123456" && cont < 3){
    console.log("Repita a senha, voce tem " + decont + " tentativas");
    cont++
    decont--
}

let numero4 = 0

while (numero4 <= 10) {
    if (numero4 % 2 ==0){
        console.log(numero4);
    }
    numero4++
}

let senhaCorreta = "12345";
let senhaDigitada;

do {
  console.log("Digite sua senha");;
} while (senhaDigitada !== senhaCorreta);

console.log("Acesso permitido!");

console.log("Fim");