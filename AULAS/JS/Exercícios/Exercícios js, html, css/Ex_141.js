function Carro(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.ligar = function() {
      console.log(`O ${this.modelo} está ligado.`);
    };
  }
  
  const meuCarro = new Carro("Ford Ka", "cara que mora logo ali", 1996);
  
  console.log(meuCarro);
  meuCarro.ligar();