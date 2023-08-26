let diaAtual = new Date()
let diaNumero = diaAtual.getDate()
let diaSemana = diaAtual.getDay()
let mes = diaAtual.getMonth()
let ano = diaAtual.getFullYear()

console.log(diaAtual);
console.log(diaNumero);
console.log(diaSemana);
console.log(mes);
console.log(ano);

let dataEspecifica = new Date(2006, 5, 19)
console.log(dataEspecifica);

const timestamp = diaAtual.getTime()
console.log(timestamp);

const dataFormatada = diaAtual.toLocaleDateString()
console.log(dataFormatada);

const dataISO = diaAtual.toISOString()
console.log(dataISO);

console.log(diaAtual);
diaAtual.setMonth(7)
console.log(diaAtual);

console.log(diaAtual);
diaAtual.setFullYear(2030)
console.log(diaAtual);