let idade = 18

if (idade >= 18) {
    console.log("Você tem idade para dirigir");
}
else {
    console.log("Você não tem idade para dirigir");
}

if (idade < 16) {
    console.log("Você tem idade para votar");
}
else if (idade >= 16 && idade <= 60) {
    console.log("Você é obrigado a votar");
}
else {
    console.log("Você não é obrigado a votar");
}

let senha = 1234

if (senha == 1234 || senha == 4321) {
    console.log("Senha correta");
}
else {
    console.log("Senha incorreta");
}

let email = "SeNaIALmiraNte@gmail.com"

email = email.toLocaleLowerCase()

if (email ==  "senaialmirante@gmail.com") {
    console.log("E-mail válido");
}
else {
    console.log("E-mail inválido");
}