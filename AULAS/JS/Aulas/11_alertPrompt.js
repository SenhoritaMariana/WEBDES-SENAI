let capNome = document.querySelector("#nome");
let nome

let i = 1;

while (i <= 3) {
    nome = prompt("Digite seu nome");
    capNome.innerHTML += "<br>" + nome
    i++
}

let n1 = Number(prompt("Digite o 1 numero"))
let n2 = Number(prompt("Digite o 2 numero"))

alert(n1 + n2)

let digiteSenha = prompt("Digite a Senha:")
let senha = "1234"

while (senha != digiteSenha) {
  digiteSenha = prompt("Senha Incorreta. Digite a senha novamente:")
}