class Person {
  private _name: string;
  private _birthDate: Date;

  constructor(name: string, birthDate: Date) {
    this._name = name;
    this._birthDate = birthDate;
  }

  static getAge(value: Date): number {
    const diff = Math.abs(new Date().getTime() - value.getTime());
    const yearsMS = 31536000000;
    return Math.floor(diff / yearsMS);
  }

  private validateName(name: string): void {
    if (name.length < 3) throw new Error('Name is too short');
  }
  
  private validateBirthDate(birthDate: Date): void {
    if (birthDate.getTime() < new Date().getDate()) throw new Error('Cant be born in the future');
    if (Person.getAge(birthDate) > 120) throw new Error('You cant live that long...');
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this.validateName(value);
    this._name = value;
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  set birthDate(value: Date) {
    this.validateBirthDate(value);
    this._birthDate = value;
  }

}

function createPerson() {
  const arthur = new Person('Arthur', new Date('01-18-1999'));
  arthur.name = 'Ar';
  const devis = new Person('Devis', new Date('01-18-1990'));
  console.log(arthur, devis);
}

createPerson();