function hydrate(string) {
    let exp = /\d+/g;
    let result = string.match(exp);
    let int = result.map(Number);
    let sum = 0;
    for (let index in int) {
      sum += int[index];
    }
    if (sum === 1){
      return sum + ' copo de água';
    }
    return sum + ' copos de água';
  }
  
  module.exports = hydrate;
  