let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multipliedNumbers = [];

for (index = 0; index < numbers.length; index++) {
    if (index + 1 < numbers.length) {
        multipliedNumbers.push(numbers[index] * numbers[index + 1]);
    }
    else {
        multipliedNumbers.push(numbers[index] * 2);
    }
}
console.log(multipliedNumbers);
