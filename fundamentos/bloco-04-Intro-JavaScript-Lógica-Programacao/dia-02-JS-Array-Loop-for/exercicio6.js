let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let evenNumbers = [];

for (index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 !== 0) {
        evenNumbers.push(numbers[index]);
    }
}
if (evenNumbers == []) {
    console.log("Nenhum valor ímpar encontrado.");
}
else {
    console.log ("Os números ímpares são: " + evenNumbers);
}