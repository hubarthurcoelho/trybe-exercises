var Person = /** @class */ (function () {
    function Person(name, birthDate) {
        this._name = name;
        this._birthDate = birthDate;
    }
    Person.getAge = function (value) {
        var diff = Math.abs(new Date().getTime() - value.getTime());
        var yearsMS = 31536000000;
        return Math.floor(diff / yearsMS);
    };
    Person.prototype.validateName = function (name) {
        if (name.length < 3)
            throw new Error('Name is too short');
    };
    Person.prototype.validateBirthDate = function (birthDate) {
        if (birthDate.getTime() < new Date().getDate())
            throw new Error('Cant be born in the future');
        if (Person.getAge(birthDate) > 120)
            throw new Error('You cant live that long...');
    };
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this.validateName(value);
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "birthDate", {
        get: function () {
            return this._birthDate;
        },
        set: function (value) {
            this.validateBirthDate(value);
            this._birthDate = value;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
function createPerson() {
    var arthur = new Person('Arthur', new Date('01-18-1999'));
    arthur.name = 'Ar';
    var devis = new Person('Devis', new Date('01-18-1990'));
    console.log(arthur, devis);
}
createPerson();
