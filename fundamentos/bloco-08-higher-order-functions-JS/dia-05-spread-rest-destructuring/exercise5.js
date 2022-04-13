const myList = [1, 2, 3];


function swap(array) {
  const [ firstElement, secondElement, thirdElement ] = array;
  return [thirdElement, secondElement, firstElement];
}
console.log(swap(myList));

//returns [3, 2, 1]
//or 

const quickSwap = ([a, b, c]) => [c, b, a];

console.log(quickSwap(myList));

//returns [3, 2, 1]
