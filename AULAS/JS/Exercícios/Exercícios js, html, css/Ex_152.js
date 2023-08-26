let calcularnumeros = [20, 16, 30, 45, 52];
let soma = 0;
let media = 0;

calcularnumeros.forEach(function(calcularnumero) {
    soma += calcularnumero
    media = soma/calcularnumeros.length
});

console.log(media);