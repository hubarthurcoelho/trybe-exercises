const factorial = (number) => {
    if (number > 1){
        return number * factorial(number-1);
    } else {
        return 1;
    }
}

console.log(factorial(5));

const factorial2 = (number) => (number > 1) ? number * factorial2(number - 1) : 1;

console.log(factorial2(5));
