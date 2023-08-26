const pessoa = {
    nome: "José",
    idade: 46,
    profissao: "Motorista",
    boasvindas: function() {
        console.log(`Olá ${this.nome} seja Bem-Vindo!`);
    }
}

console.log(pessoa);
pessoa.boasvindas();