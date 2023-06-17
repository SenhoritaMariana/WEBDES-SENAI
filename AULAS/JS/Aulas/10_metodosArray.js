//push
let frutas = ["Abacaxi", "Melancia", "Banana"];
console.log(frutas);

frutas.push("Laranja")
console.log(frutas);

//pop
let jogos = ["Mario", "Crash", "Bixo", "GTA"];
console.log(jogos);

jogos.pop()
jogos[0] = jogos[0].toUpperCase()
console.log(jogos);

//splice
let filmes = ["Cinderela Baiana", "Cidade de Deus", "Noé", "Click", "Interstelar", "Avangers"]
console.log(filmes);
filmes.splice(3, 1)
console.log(filmes);

let times = ["São Paulo", "Palmeiras", "Cúrintiás", "Vasco"]
console.log(times);
times.splice(2, 0, "Santos")
console.log(times);

//slice
let paises = ["Angola", "França", "Brasil", "Uruguai", "Venezula"]
console.log(paises);
let subPaises = paises.slice(1, 4)
console.log(subPaises);

//concat
let carros1 = ["Civic", "Golf", "Uno com escada"]
let carros2 = ["A3", "Celta", "Celt"]
let carros = carros2.concat(carros1)
console.log(carros);

//join
let cantores = ["Manel", "Naldo", "Ednaldo", "Marrone", "Belchior", "Kasinão"]
console.log(cantores);
let stringCatores = cantores.join(", ")
console.log(stringCatores);

//sort
let nomes = ["Ramon", "Enzo", "Juninho", "Valentina", "Cleiton Rasta"]
console.log(nomes);
nomes.sort()
console.log(nomes);

//indexOf
let comidas = ["Tropeiro", "Galopé", "Pequi", "Giló", "Gabiroba", "Dobradinha"];
let i = 0;
console.log(comidas);
console.log(comidas.indexOf("Gabiroba"));

while (i < comidas.length) {
    if (comidas.indexOf("gabiroba") != -1) {
        console.log("Existe Gabiroba");
    } else {
        console.log("Não Existe Gabiroba");
    }
    // console.log(comidas[i]);

    i++
}