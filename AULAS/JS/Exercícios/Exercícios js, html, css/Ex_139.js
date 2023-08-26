function Carro(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

const meuCarro = new Carro("Adidas", "Mar Vermelho", 2001);

console.log(meuCarro);

meuCarro.cor = "Azul Claro"

console.log(meuCarro);
