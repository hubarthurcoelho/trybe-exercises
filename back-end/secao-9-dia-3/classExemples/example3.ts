abstract class Character {
  constructor(public name: string) {};
  abstract talk(): void;
  abstract specialMove(): void;
};

class MeleeCharacter extends Character {
  talk() { console.log('Im a melee character') };
  specialMove() {
    console.log('This is my special melee move');
  }
}

class LongRangeCharacter extends Character {
  talk() {
    console.log('Im a ranged character');
  }
  specialMove() {
    console.log('This is my special ranged move');
  }
}

const aragorn = new MeleeCharacter('Aragorn');
const legolas = new LongRangeCharacter('Legolas');

const introduceCharacter = (character: Character) => {
  character.talk();
  character.specialMove();
}

introduceCharacter(aragorn);
// Im a melee character
// This is my special melee move
introduceCharacter(legolas);
// Im a ranged character
// This is my special ranged move
