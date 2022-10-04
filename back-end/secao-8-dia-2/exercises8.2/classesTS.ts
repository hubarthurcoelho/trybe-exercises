// dog class

class Dog {
  name: string;
  breed: string;
  age: number;
  birthday: Date;

  constructor(name: string, breed: string, age: number, birthday: Date) {
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.birthday = birthday;
  };

  bark (dogMessage: string): void {
    console.log(`woof woof ${dogMessage} woof woof`);
  };
}

const woody = new Dog('Woody', 'Spitz', 6, new Date('2014-03-26'));
console.log(woody); // prints: 
// Dog {
//   name: 'Woody',
//   breed: 'Spitz',
//   age: 6,
//   birthday: 2014-03-26T00:00:00.000Z
// }
woody.bark('I love my family!'); // prints: woof woof I love my family! woof woof

class House {
  location: string;
  constructionDate: Date;
  owner: string;

  constructor(location: string, constructionDate: Date, owner: string) {
    this.location = location;
    this.constructionDate = constructionDate;
    this.owner = owner;
  };
};

const lakeHouse = new House('By the lake', new Date, 'Woody');

console.log(lakeHouse); // prints:
// House {
//   location: 'By the lake',
//   constructionDate: 2022-10-04T18:12:27.762Z,
//   owner: 'Woody'
// }

class Flight {
  company: string;
  origin: string;
  destination: string;
  departure: Date;

  constructor(company: string, origin: string, destination: string, departure: Date) {
    this.company = company;
    this.origin = origin;
    this.destination = destination;
    this.departure = departure;
  };
}

const MCZ_SP = new Flight('Azul', 'MCZ', 'SP', new Date);

console.log(MCZ_SP); // prints: 
// Flight {
//   company: 'Azul',
//   origin: 'MCZ',
//   destination: 'SP',
//   departure: 2022-10-04T18:12:27.762Z
// }
