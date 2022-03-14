/** MINHA FUNCAO DEVE RECEBER UM ARRAY E RETORNAR O INDICE DE MAIOR VALOR
 * todo 1. Criar a função que receba um array;
 * todo 2. Criar estrutura de repetição que acesse todos os índices desse Array;
 * todo 3. Criar uma variável que vai armazenar um determinado valor caso ele seja maior que o anterior;
 * todo 4. Criar uma outra variável que armazene o índice ou posição do maior número;
 * todo 4. Imprimir o índice dessa variável.
*/


function maiorIndice (array) {
    let maiorNumero = array[0];
    let position = null;
    for (let index = 0; index < array.length; index++) {
        if (maiorNumero < array[index]) {
            maiorNumero = array[index];
            position = index;
        }
    }
 return 'O maior número é o ' + maiorNumero + ' na posicão ' + position + '.';
}

console.log(maiorIndice([1, 2, 3, 4, 2, 10, 15, 8, 7]));