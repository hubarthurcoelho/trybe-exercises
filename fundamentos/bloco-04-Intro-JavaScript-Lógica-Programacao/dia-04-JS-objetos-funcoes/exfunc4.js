/** MINHA FUNCAO DEVE RECEBER UM ARRAY DE NOMES E RETORNAR O QUE TENHA MAIS CARACTERES
 * todo 1. Criar a função que receba um array;
 * todo 2. Criar estrutura de repetição que acesse todos os índices desse Array;
 * todo 3. Criar uma variável que vai armazenar um determinado nome caso ele seja maior que o anterior, e tendo um valor inicial de array[0].length;
 * todo 4. Criar uma outra variável que armazene o índice ou posição do nome mais longo;
 * todo 4. Imprimir o índice dessa variável.
*/

function maiorNome (array) {
    let maiorNome = array[0];
    for (let index = 0; index < array.length; index++) {
        if (maiorNome.length < array[index].length) {
            maiorNome = array[index];
        }
    }
    return 'O maior nome é ' + maiorNome;
}

console.log(maiorNome(['carlos', 'Arthur', 'Matheus', 'Devis']));