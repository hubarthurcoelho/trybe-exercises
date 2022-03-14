// RECEBE O COMEÇO DE UMA PALAVRA E UM POSSIVEL FINAL. A FUNÇÃO DEVE CONFIRMAR SE O FINAL É REALMENTE O FINAL DA PALAVRA.
function wordEnd (word, end) {
    let result;
    word = word.split('').reverse().join('');
    end = end.split('').reverse().join('');
    for (let index = 0; index < end.length; index++) {
        if (word[index] !== end[index]) {
            result = false;
            break;
        } else {
            result = true;
        }
    }
    return result;
}
console.log(wordEnd('trybe', 'be'));
console.log(wordEnd('trybe', 'eb'));
