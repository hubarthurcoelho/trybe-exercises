const myRemove = (array, item) => {
    if (array.includes(item)) {
    array.splice(array.indexOf(item), 1);
    return array;
    }
    return 'item não faz parte do array'; 
}
myRemove([1, 2, 3, 4], 5);
module.exports = myRemove;
