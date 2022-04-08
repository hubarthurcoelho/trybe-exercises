const myFizzBuzz = require('./Ex3FizzBuzz');

describe('Requisito 3', () => {
    it('Confere se retorna fizzbuzz caso seja divisível por 3 e por 5', () => {
        expect(myFizzBuzz(15)).toMatch('fizzbuzz');
    });
    it('Confere se retorna fizz caso seja divisível apenas por 3', () => {
        expect(myFizzBuzz(3)).toMatch('fizz');
    });
    it('Confere se retorna buzz caso seja divisível apenas por 5', () => {
        expect(myFizzBuzz(5)).toMatch('buzz');
    });
    it('Confere se retorna o input caso não seja divisível por 3 e por 5', () => {
        expect(myFizzBuzz(17)).toBe(17);
    });
    it('Confere se retorna false caso não seja um número', () => {
        expect(myFizzBuzz('cinco')).toBe(false);
    });
})