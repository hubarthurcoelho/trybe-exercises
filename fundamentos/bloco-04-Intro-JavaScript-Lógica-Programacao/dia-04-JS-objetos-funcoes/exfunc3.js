/** MINHA FUNCAO DEVE RECEBER UM ARRAY E RETORNAR O INDICE DE MENOR VALOR
 * todo 1. Criar a função que receba um array;
 * todo 2. Criar estrutura de repetição que acesse todos os índices desse Array;
 * todo 3. Criar uma variável que vai armazenar um determinado valor caso ele seja menor que o anterior, e tendo um valor inicial de array[0];
 * todo 4. Criar uma outra variável que armazene o índice ou posição do menor número;
 * todo 4. Imprimir o índice dessa variável.
*/

function menorIndice (array) {
    let menorNumero = array[0];
    let position = null;
    for (let index = 0; index < array.length; index++) {
        if (menorNumero > array[index]) {
            menorNumero = array[index];
            position = index;
        }
    }
    return 'O menor número é ' + menorNumero + ' e seu índice é o ' + position;
}

console.log(menorIndice([1, 2, 3, 4, 2, 10, 15, 8, -7]));
