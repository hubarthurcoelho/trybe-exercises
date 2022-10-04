// crie a interface de uma pizza
type CommunFlavor = 'Calabresa' | 'Frango' | 'Pepperoni';
type VegetarianFlavor = 'Marguerita' | 'Palmito' | 'Cogumelo';
type SweetPizzaFlavor = 'Nutella' | 'Romeu e Julieta' | 'Marshmallow';
type Slices = 4 | 6 | 8;

interface Pizza {
  flavor: string,
  slices: Slices
};

interface CommunPizza extends Pizza {
  flavor: CommunFlavor,
};

interface VeggiePizza extends Pizza {
  flavor: VegetarianFlavor,
};

interface SweetPizza extends Pizza {
  flavor: SweetPizzaFlavor,
  slices: 4,
};


const calabresa: Pizza = {
  flavor: 'Calabresa',
  slices: 8
};

const marguerita: Pizza = {
  flavor: 'Marguerita',
  slices: 6,
};

const nutella: Pizza = {
  flavor: 'Nutella',
  slices: 4,
};

const frango: CommunPizza = {
  flavor: 'Frango',
  slices: 8,
};

const cogumelo: VeggiePizza = {
  flavor: 'Cogumelo',
  slices: 6,
};

const marshmallow: SweetPizza = {
  flavor: 'Marshmallow',
  slices: 4,
};
