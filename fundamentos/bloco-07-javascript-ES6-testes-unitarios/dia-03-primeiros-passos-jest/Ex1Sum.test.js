const sum = require('./Ex1Sum');

describe('Conferir a soma', () => {
    it('4 + 5 deve ser igual a 9', () => {
        expect(sum(4, 5)).toBe(9);
    })
    it('0 + 0 deve ser igual a 0', () => {
        expect(sum(0, 0)).toBe(0);
    })
    it('testa se utilizar uma string no lugar do numero lança um erro', () => {
        expect(() => {sum(4, '5')}).toThrow();
    })
    it('testa se utilizar uma string no lugar do numero lança o erro parameters must be numbers', () => {
        expect(() => {sum(4, '5')}).toThrowError(new Error('parameters must be numbers'));
    })
})
