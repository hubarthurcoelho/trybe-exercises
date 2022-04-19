const upperCase = require('./exercise7');

describe('Testing uppercase function', () => {
    it('upperCase "house" to equal "HOUSE"', (done) => {
        upperCase('house', (string) => {
            try {
                expect(string).toBe('HOUSE');
                done();
            } catch (error) {
                done(error);
            }
        })
    })
});
