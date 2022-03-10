let word = "trybe";
let backward = [];
for (let index = word.length - 1; index >= 0; index--) {
    backward.push(word[index]);
}
console.log(backward.join(""));