class Animal {
  constructor(public name: string) {}
  move() { console.log(`${this.name} is moving`)}
};

class Bird extends Animal {
  move() {
    console.log(`${this.name} is flying`);    
  }
};

class Mammal extends Animal {
  move() { console.log(`${this.name} is walking`)}
};

const shark = new Animal('Shark');
const perrot = new Bird('Perrot');
const dog = new Mammal('Dog');

const myMove = (animal: Animal) => {
  animal.move();
};

myMove(shark); 
// shark is moving
myMove(perrot);
// Perrot is flying
myMove(dog);
// dog is walking
