const distanceUnits: Array<string> = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

function distConvert(value: number, baseUnit: string, desiredUnit: string): number {
  const baseIndex = distanceUnits.indexOf(baseUnit);
  const desiredIndex = distanceUnits.indexOf(desiredUnit);
  const exponent = desiredIndex - baseIndex;
  const desiredNumber = value * Math.pow(10, exponent);
  return desiredNumber;
};

console.log(distConvert(10000, 'm', 'km')); // prints 10;
console.log(distConvert(100, 'm', 'mm')); // prints 100000;
