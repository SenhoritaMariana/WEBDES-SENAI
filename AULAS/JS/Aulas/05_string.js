let TimeFutebol = "Palmeiras";

console.log(TimeFutebol.length);

let cidade = "sãO bERnaRDO dO CaMPo";

console.log(cidade.toLocaleUpperCase());
console.log(cidade.toLocaleLowerCase());

let pais = "Angola";

console.log(pais.charAt(3));
console.log(pais.indexOf("a"));

let frase1 = "Olha se você não me ama"

console.log(frase1.slice(3, 8));
console.log(frase1.substring(0, -1));

let frase2 = "Eu nasci assim"

console.log(frase2.replace("nasci", "morri"));
console.log(frase2.replaceAll("nasci", "morri"));

let CPF = "989.358.812-92"

CPF = CPF.replaceAll(".", "")
CPF = CPF.replace("-", "")
console.log(CPF);

let frase3 = "Armei uma carapuca na beira da estrada"

frase3 = frase3.split(" ")
console.log(frase3);

let nome = "   Mariana Andrade    "

nome = nome.trim()

console.log(nome);
