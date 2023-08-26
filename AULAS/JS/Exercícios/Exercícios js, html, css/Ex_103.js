let numeros = [2, 5, 10, 27, 45, 67, 89, 93]

function menorNumero(array) {
    let menor = 0;
    for (let i = 0; i < array.length; i++) {
        if (menor < array[i]){
            menor = array[i];
        }
    }
    return menor;
}

console.log(menorNumero(numeros));