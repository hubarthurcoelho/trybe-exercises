const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObject = (carro) => {
  const [ model, manufacturer, year ] = carro;
  return {
    model,
    manufacturer,
    year,
  };
};
console.log(toObject(palio)); //returns {model: "Palio", manufacturer: "Fiat", year: 2019};
console.log(toObject(shelbyCobra)); //returns {model: "Shelby Cobra", manufacturer: "Ford", year: 1963};
console.log(toObject(chiron)); //returns {model: "Chiron", manufacturer: "Bugatti", year: 2016};
