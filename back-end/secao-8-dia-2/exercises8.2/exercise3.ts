type callback<T> = (value: T, index?: number, array?: Array<T>) => boolean;

function filter<T>(array: Array<T>, callback: callback<T>): Array<T> {
  const newArray: Array<T> = [];

  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i], i, array)) {
      newArray.push(array[i]);
    }
  }

  return newArray;
};

console.log(filter([1, 2, 3, 4, 5, 6, 7, 8], (item) => item % 2 === 0));
