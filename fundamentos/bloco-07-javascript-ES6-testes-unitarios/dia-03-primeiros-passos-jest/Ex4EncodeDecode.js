function encode(string) {
    let splitString = string.split('');
    let result = [];
    for (let index in splitString) {
      if (splitString[index] === 'a') {
        result.push('1');
      } else if (splitString[index] === 'e') {
        result.push('2');
      } else if (splitString[index] === 'i') {
        result.push('3');
      } else if (splitString[index] === 'o') {
        result.push('4');
      } else if (splitString[index] === 'u') {
        result.push('5');
      } else {
        result.push(splitString[index]);
      }
    }
    return result.join('');
  }
  
  function decode(string) {
    let splitString = string.split('');
    let result = [];
    for (let index in splitString) {
      if (splitString[index] === '1') {
        result.push('a');
      } else if (splitString[index] === '2') {
        result.push('e');
      } else if (splitString[index] === '3') {
        result.push('i');
      } else if (splitString[index] === '4') {
        result.push('o');
      } else if (splitString[index] === '5') {
        result.push('u');
      } else {
        result.push(splitString[index]);
      }
    }
    return result.join('');
  }

  module.exports = {encode, decode};
  