const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.reduce((arr, curr) => arr.concat(curr))
}
console.log(flatten());
