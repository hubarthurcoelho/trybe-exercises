const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortArray = (array) => {
    for (let index = 0; index < array.length; index += 1) {
        for (let index2 = 0; index2 < array.length; index2 += 1)
        if (array[index2] > array[index2 + 1]) {
            let position = array[index2];
            array[index2] = array[index2 + 1];
            array[index2 + 1] = position;
        }
    }
    return `Os números ${array} se encontram ordenados de forma crescente!`;
}
// Seu código aqui.

console.log (sortArray(oddsAndEvens)); // será necessário alterar essa linha 😉