function palindrome (word) {
    // let split = word.split("");
    // let reverse = split.reverse();
    // let join = reverse.join("");
    // Da para juntar tudo em um só:
    if (word === word.split("").reverse().join("")) {
        return 'É um palíndromo.'
    }
    else {
        return 'Não é um palíndromo.'
    }
}
console.log(palindrome('arara'));
console.log(palindrome('banco'));
