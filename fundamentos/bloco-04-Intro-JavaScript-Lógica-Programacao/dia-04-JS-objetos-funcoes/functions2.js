function maiorNumero (num1, num2) {
    if (num1 > num2) {
        return num1 + ' é maior que ' + num2;
    }
    else if (num1 < num2) {
        return num2 + ' é maior que ' + num1;
    }
    else {
        return 'os números são iguais.';
    }
}
console.log(maiorNumero(2, 3));
console.log(maiorNumero(3,4));
console.log(maiorNumero(3, 3));
