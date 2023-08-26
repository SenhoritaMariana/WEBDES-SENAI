const pessoa = {
    nome: "José",
    idade: 46,
    profissao: "Motorista",
    beleza: 100
}

console.log(pessoa);

pessoa.email = "algumacoisa0514@gmail.com"

console.log(pessoa);

delete pessoa.profissão;
console.log(pessoa);