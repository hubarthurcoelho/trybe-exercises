const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const DragonDmg = () => Math.floor(Math.random() * (dragon.strength - 15)) + 15;
const warriorDmg = () => Math.floor(Math.random() * ((warrior.weaponDmg * warrior.strength) - warrior.strength)) + warrior.strength;

const mageDmgAndMana = (mage) => {
  let mageMana = mage.mana;
  let mageCurrentInfo = 
    {
      damage: Math.floor(Math.random() * ((mage.intelligence * 2) - mage.intelligence)) + mage.intelligence,
      manaUsed: 0,
    }
    
    if (mageMana < 15) {
      mageCurrentInfo.damage = 'Não possui mana suficiente!';
    }
    mageCurrentInfo.damage = Math.floor(Math.random() * ((mage.intelligence * 2) - mage.intelligence)) + mage.intelligence;
    mageCurrentInfo.manaUsed = 15;
    return mageCurrentInfo;  
}

const gameActions = {
    warriorTurn: (warriorDamage) => {
        let warriorHit = warriorDamage();
        dragon.healthPoints -= warriorHit;
        warrior.damage = warriorHit;
        let warriorTurnInfo = `The warrior dealt ${warrior.damage} damage to the dragon. The dragon now has ${dragon.healthPoints}HP!`
        return warriorTurnInfo;
    },
    mageTurn: (mageDamage) => {
        let mageHit = mageDamage(mage).damage;
        mage.mana -= mageDamage(mage).manaUsed;
        dragon.healthPoints -= mageHit;
        mage.damage = mageHit;
        let MageTurnInfo = `The mage dealt ${mage.damage} damage to the dragon and has ${mage.mana}MP! The dragon now has ${dragon.healthPoints}HP!`
        return MageTurnInfo;
    },
    dragonTurn: (dragonDamage) => {
        let dragonHit = dragonDamage();
        mage.healthPoints -= dragonHit;
        warrior.healthPoints -= dragonHit;
        dragon.damage = dragonHit;
        let dragonTurnInfo = `The dragon dealt ${dragon.damage} damage to the party! 
The mage now has ${mage.healthPoints}HP, and the warrior has ${warrior.healthPoints}!`
        return dragonTurnInfo;
    },
    turnResult: () => (battleMembers),
};

console.log(gameActions.warriorTurn(warriorDmg))
console.log(gameActions.mageTurn(mageDmgAndMana))
console.log(gameActions.dragonTurn(DragonDmg))
console.log(gameActions.turnResult());