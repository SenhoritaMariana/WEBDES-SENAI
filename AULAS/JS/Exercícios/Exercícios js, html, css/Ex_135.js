const pessoa = {
    nome: "José",
    sobrenome: "Silverio",
    idade: 46,
    profissao: "Motorista",
    cumprimento: function() {
        console.log(`Olá senhor ${this.nome}! Você concluiu 2 anos como nosso ${this.profissao}!`);
    }
}

console.log(pessoa);
pessoa.cumprimento();