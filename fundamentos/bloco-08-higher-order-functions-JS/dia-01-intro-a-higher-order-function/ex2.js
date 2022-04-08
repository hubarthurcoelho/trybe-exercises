const sorteio = (num, funcao) => {
  const sorteado = Math.floor(Math.random() * 5);
    return funcao(num, sorteado);
}

const checarSorteio = (n, sorte) => {
    if (n === sorte) {
      return 'Parabéns você ganhou!';
    }
    return 'Tente novamente';
}
console.log(sorteio(2, checarSorteio));
