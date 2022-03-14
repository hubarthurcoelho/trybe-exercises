function maiorDeTres (num1, num2, num3) {
    if (num1 > num2 & num1 > num3) {
        return 'O maior número é o ' + num1;
    }
    else if (num2 > num1 & num2 > num3) {
        return 'O maior número é o ' + num2;
    }
    else if (num3 > num1 & num3 > num2) {
        return 'O maior número é o ' + num3;
    }
    else {
        return 'Os números são iguais.'
    }
}
console.log(maiorDeTres(3, 2, 1));
console.log(maiorDeTres(1, 4, 2));
console.log(maiorDeTres(1, 2, 5));
console.log(maiorDeTres(3, 3, 3));
