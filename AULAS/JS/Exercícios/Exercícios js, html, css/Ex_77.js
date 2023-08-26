for (let i = 1; i <= 100; i++) {
    
  let divisores = 0;

  for (let j = 1; j <= i; j++) {
     if (i % j === 0) {
        divisores++;
     }
   }

   if (divisores === 2) {
    console.log(i + " é um número primo.");
   } else {
    console.log(i + " não é um número primo.");
   }

}