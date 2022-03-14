/** MINHA FUNCAO DEVE DIZER QUAL NUMERO MAIS SE REPETE EM UM ARRAY.
*/

function maisRepetido (nums) {
    let contRepetido = 0;                        //? VAI NOS PERMITIR RESETAR O CONTADOR SEM PERDER A INFORMAÇÃO
    let contNumero = 0;                          //? VAI ARMAZENAR QUANTAS VEZES O NÚMERO SE REPETIU AO FAZER O CRUZAMENTO FOR X FOR
    let indexNumeroRepetido = 0;                 //? VAI MARCAR A POSIÇÃO DO NÚMERO QUE MAIS APARECER

    for (index in nums) {                        //? ESSE FOR VAI FAZER O CRUZAMENTO DOS NÚMEROS
        for (index2 in nums) {                   //? AQUI VAMOS CRUZAR OS NÚMEROS ATRÁVES DE 2 FOR. CADA NUMERO VAI INTERAGIR COM TODOS OS OUTROS E CHECAR SE SÃO IGUAIS
            if (nums[index] === nums[index2]) {  //? CASO HAJA UM MATCH, O contNumero VAI CONTAR E ARMAZENAR O VALOR (DEPOIS DE TODOS OS CRUZAMENTOS)
                contNumero += 1;
            }
        }
        if (contNumero > contRepetido) {         //? ESSE IF FOI REALIZADO FORA DO ÚLTIMO FOR PARA QUE O contNumero TENHA O VALOR FINAL (DEPOIS DAS ITERAÇÕES)
            contRepetido = contNumero;           //? AGORA NÓS VAMOS ARMAZENAR O VALOR DE contNumero NO contRepetido, PARA QUE POSSAMOS USAR O contNumero NOS PRÓXIMOS CRUZAMENTOS
            indexNumeroRepetido = index;         //? AQUI VAMOS MARCAR O INDEX DO NUMERO QUE MAIS SE REPETE. LEMBRANDO QUE SÓ VAI ENTRAR NESSE IF SE A CONTAGEM FOR MAIOR 
        }                                        //? QUE A ANTERIOR.
        contNumero = 0;                          //? AQUI VAMOS ZERAR O CONTADOR PARA IR PARA A PROXIMA ITERAÇÃO. POR ISSO FOI NECESSÁRIO ARMAZENAR SEU VALOR ANTERIORMENTE
    }                                            //? PARA QUE PUDESSE SER COMPARADO COM O PRÓXIMO.
    return nums[indexNumeroRepetido];            //? AQUI APENAS RETORNAMOS O ÍNDICE QUE MARCAMOS NO IF ANTERIOR.
}

console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));
