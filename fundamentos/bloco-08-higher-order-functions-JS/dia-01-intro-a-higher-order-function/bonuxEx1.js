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
const mageDmgAndMana = () => {
let mageInfo = 
  {
    damage: Math.floor(Math.random() * ((mage.intelligence * 2) - mage.intelligence)) + mage.intelligence,
    mana: () => {
      if (mage.mana < 15) {
        return mageInfo.damage = 'Não possui mana suficiente!';
      }
      return mage.mana - 15;
    }
  }
  return mageInfo;
}
console.log(mageDmgAndMana().mana());
