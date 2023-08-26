const pessoa = {
    nome: "José",
    sobrenome: "Silverio",
    idade: 46,
    profissao: "Motorista",
    cumprimento: function() {
        console.log(`Olá senhor ${this.nome}! seja Bem-Vindo ao nosso Site!`);
    }
}

console.log(pessoa);
pessoa.cumprimento();