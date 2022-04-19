const upperCaseFunction = require('.exercise7');

describe('Testing uppercase function', () => {
    it('tests if the function returns a string in upper case', (done) => {
        try {
            upperCaseFunction('casa', callback);
            done();
        } catch (error) {
            done(error);
        }
    })
});
