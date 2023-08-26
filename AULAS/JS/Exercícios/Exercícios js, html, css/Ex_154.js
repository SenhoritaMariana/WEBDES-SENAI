let numeros = [2, 5, 4, 71, 8] 

numeros.forEach(function(n){

    console.log(n);

    if (numeros % 2 === 0) {
        console.log("É um número par");
    } else {
        console.log("Não é um número par");
    }
});