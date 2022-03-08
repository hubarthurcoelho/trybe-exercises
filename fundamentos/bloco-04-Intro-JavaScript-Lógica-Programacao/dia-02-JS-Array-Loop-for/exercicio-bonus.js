let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index++) {
    for (let index2 = 0; index2 < index; index2++){
        if (numbers[index] > numbers[index2]) {
            let position = numbers[index2];
            numbers[index2] = numbers[index];
            numbers[index] = position;
        }
    }
}
console.log(numbers);
