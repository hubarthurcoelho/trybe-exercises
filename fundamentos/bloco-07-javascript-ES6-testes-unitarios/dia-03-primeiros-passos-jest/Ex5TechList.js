function techList(array, name) {
    let objList = [];
    array.sort();
    for (let key in array) {
      if (array[key] !== '') {
        objList.push(
            {
            tech: array[key],
            name: name
        },
        );
      }
    }
    if (objList.length > 1) {
    return objList;
  }
  return 'Vazio!';
  }

  module.exports = techList;
  