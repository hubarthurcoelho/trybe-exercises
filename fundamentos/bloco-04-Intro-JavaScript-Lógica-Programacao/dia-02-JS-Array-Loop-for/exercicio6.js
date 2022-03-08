let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let oddNumbers = [];
let totalNumbers = 0;

for (index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 !== 0) {
        totalNumbers++
        oddNumbers.push(numbers[index]);
    }
}
if (oddNumbers == []) {
    console.log("Nenhum valor ímpar encontrado.");
}
else {
    console.log ("Existe um total de " + totalNumbers + " números ímpares, e são eles: " + oddNumbers);
}