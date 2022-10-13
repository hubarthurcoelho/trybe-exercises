abstract class Person {
  constructor(protected _type: string) {};
  abstract get type(): string;
}

// abstract class Employee extends Person {
//   constructor(protected _salary: number, type: string) {
//     super(type);
//   };
//   abstract get salary(): string;
// }

// class Professor extends Employee {
//   get type() {
//     return `Esse professor possui registro ${this._type}`
//   }
//   get salary() {
//     return `Este mero servo recebe este misero salario: R$${this._salary}`
//   }
// }

// const arthur = new Student('batatossauro');
// const devis = new Professor(1200, 'gigachad');

// console.log(arthur.type);
// console.log(devis.type);
// console.log(devis.salary);

interface Enrollable {
  _enrollment: string;
  generateEnrollment(enrollment: string, grades: number[], projects: number[]): void;
}

class Student extends Person implements Enrollable {
  _enrollment: string;
  constructor(enrollment: string, type: string) {
    super(type);
    this.generateEnrollment(enrollment, [], []);
    this._enrollment = enrollment;
  }

  generateEnrollment(enrollment: string, grades: number[], projects: number[]): void {
    if (!(enrollment.length >= 16 && grades.length <= 4 && projects.length <= 2)) {
      throw new Error('Cheque seus inputs');
    }
  }

  get type() {
    return `Esse estudante possui ${this._type}`;
  };

}

