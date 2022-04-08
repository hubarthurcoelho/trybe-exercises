const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const conferencia = (a, b) => {
  let total = 0;
    for (let index = 0; index < a.length; index += 1) {
        if (a[index] === b[index]) {
            total += 1;
        }
    }
    return total;
}

const gabarito = (a, b, c) => c(a, b);

console.log(gabarito(RIGHT_ANSWERS, STUDENT_ANSWERS, conferencia));
