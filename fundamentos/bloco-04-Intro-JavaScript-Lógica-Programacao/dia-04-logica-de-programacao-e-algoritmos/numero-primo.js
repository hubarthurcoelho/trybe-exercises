let maiorNumero = null;

for (let index = 1; index <=50; index++) {
    let isPrime = true;
        for (let divisor = 2; divisor < index; divisor++) {
            if (index % divisor == 0) {
                isPrime = false;
            }
        }
    if (isPrime) {
        maiorNumero = index;
    }
}
console.log(maiorNumero);
