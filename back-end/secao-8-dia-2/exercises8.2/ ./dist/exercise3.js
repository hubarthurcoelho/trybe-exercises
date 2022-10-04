"use strict";
function filter(array, callback) {
    const newArray = [];
    for (let i = 0; i < array.length; i += 1) {
        if (callback(array[i], i, array)) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
;
console.log(filter([1, 2, 3, 4, 5, 6, 7, 8], (item) => item % 2 === 0));
