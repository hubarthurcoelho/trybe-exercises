const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];

const filteredArray = names.reduce((acc, curr) => `${acc}${curr}`)

function checkAs(string) {
  let stringUp = string.toUpperCase();
  let count = 0;
  for (let key in stringUp) {
    if (stringUp[key] === 'A') count += 1;
  }
  return count;
};

console.log(checkAs(filteredArray));
