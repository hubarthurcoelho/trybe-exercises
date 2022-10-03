var distanceUnits = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
function distConvert(value, baseUnit, desiredUnit) {
    var baseIndex = distanceUnits.indexOf(baseUnit);
    var desiredIndex = distanceUnits.indexOf(desiredUnit);
    var exponent = desiredIndex - baseIndex;
    var desiredNumber = value * Math.pow(10, exponent);
    return desiredNumber;
}
;
console.log(distConvert(10000, 'm', 'km')); // prints 10;
console.log(distConvert(100, 'm', 'mm')); // prints 100000;
