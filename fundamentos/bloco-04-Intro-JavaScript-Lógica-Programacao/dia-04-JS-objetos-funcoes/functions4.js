function posNeg (num) {
    if (num > 0) {
        return 'Positive.'
    }
    else if (num < 0) {
        return 'Negative.'
    }
    else {
        return 'Zero.'
    }
}

console.log(posNeg(3));
console.log(posNeg(-3));
console.log(posNeg(0));
