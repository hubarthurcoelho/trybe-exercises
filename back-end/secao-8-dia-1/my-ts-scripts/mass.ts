const massUnits: Array<string> = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

function massConvert(value: number, baseUnit: string, desiredUnit: string): number {
  const baseIndex = massUnits.indexOf(baseUnit);
  const desiredIndex = massUnits.indexOf(desiredUnit);
  const exponent = desiredIndex - baseIndex;
  const convertedNumber = value * Math.pow(10, exponent);
  return convertedNumber;
};


console.log(massConvert(10000, 'g', 'kg')); // prints 10;
console.log(massConvert(100, 'g', 'mg')); // prints 100000;
