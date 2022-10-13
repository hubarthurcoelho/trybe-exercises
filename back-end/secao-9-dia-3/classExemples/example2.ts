abstract class Animal2 {
  constructor(public name: string) {};
  abstract move(): void;
}

class Bird2 extends Animal2 {
  move() {
    console.log(`${this.name} is flying`);
  }
}

class Mammal2 extends Animal2 {
  move() {
    console.log(`${this.name} is walking`);
  }
}

class Fish extends Animal2 {
  move() {
    console.log(`${this.name} is swimming`);
  }
}

const my2Move = (animal: Animal2) => {
  animal.move();
}

const nemo = new Fish('Nemo');
const rio = new Bird2('Rio');
const manny = new Mammal2('Manny');

my2Move(nemo);
// Nemo is swimming
my2Move(rio);
// Rio is flying
my2Move(manny);
// Manny is walking
