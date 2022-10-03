var massUnits = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];
function massConvert(value, baseUnit, desiredUnit) {
    var baseIndex = massUnits.indexOf(baseUnit);
    var desiredIndex = massUnits.indexOf(desiredUnit);
    var exponent = desiredIndex - baseIndex;
    var convertedNumber = value * Math.pow(10, exponent);
    return convertedNumber;
}
;
console.log(massConvert(10000, 'g', 'kg')); // prints 10;
console.log(massConvert(100, 'g', 'mg')); // prints 100000;
