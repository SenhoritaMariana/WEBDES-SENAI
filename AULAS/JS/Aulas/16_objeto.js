// Objeto Literal
const pessoa = {
    nome: "Mike",
    sobrenome: "Baguncinha",
    idade: 42,
    profissao: "S.W.A.T",
    saudacao: function() {
      console.log(`Olá, meu nome é ${this.nome} tenho ${this.idade} anos de idade`);
    }
  }
  
  console.log(pessoa);
  console.log(pessoa.nome);
  console.log(pessoa.profissao);
  pessoa.saudacao();
  
  
  // Objeto com função construtora
  function Carro(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.ligar = function() {
      console.log(`O ${this.modelo} está ligado.`);
    };
  }
  
  const meuCarro = new Carro("Nike", "Jordão", 1996);
  const seuCarro = new Carro("Chevrolet", "Celt", 2004)
  
  console.log(meuCarro);
  console.log(meuCarro.marca);
  meuCarro.ligar();
  
  console.log(seuCarro);
  
  // Adicionando propriedades dinamicamente
  
  const humano = {
    nome: "Cleyton",
    sobrenome: "Rasta",
    vulgo: "Cabeça de Gelo",
    idade: 31
  }
  
  console.log(humano);
  
  humano.profissao = "DJ Lendário"
  
  console.log(humano);
  
  delete humano.idade;
  console.log(humano);
  
  // Array Objeto
  
  const contasBancarias = [
    {
      nome: "Agenor",
      sobrenome: "Silva",
      banco: "Caixa Econômica",
      agencia: "123",
      conta: "XXXX-1",
      idade: 76,
      saldo: 3000,
      resultado: function() {
        console.log(`Olá ${this.nome}, seu saldo é de R$${this.saldo.toFixed(2)}`);
      }
    },
    {
      nome: "Enzo",
      sobrenome: "Schaefer",
      banco: "Nubank",
      agencia: "999",
      conta: "XXXX-2",
      idade: 20,
      saldo: 20000,
      resultado: function() {
        console.log(`Olá ${this.nome}, seu saldo é de R$${this.saldo.toFixed(2)}`);
      }
    },
    {
      nome: "Ronaldo",
      sobrenome: "Fenômeno",
      banco: "American Express",
      agencia: "009",
      conta: "XXXX-3",
      idade: 40,
      saldo: 10000000000,
      resultado: function() {
        console.log(`Olá ${this.nome}, seu saldo é de R$${this.saldo.toFixed(2)}`);
      }
    },
    {
      nome: "Felipe",
      sobrenome: "Neto",
      banco: ["Blaze", "Irmãos Neto"],
      agencia: "XXXX-4",
      conta: "157",
      idade: 30,
      saldo: 74000000,
      resultado: function() {
        console.log(`Olá ${this.nome}, seu saldo é de R$${this.saldo.toFixed(2)}`);
      }
    }
  ]
  
  console.log(contasBancarias[3]);
  contasBancarias[3].resultado();