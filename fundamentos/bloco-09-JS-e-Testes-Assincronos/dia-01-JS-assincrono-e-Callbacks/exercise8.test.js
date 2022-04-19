
// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require('./exercise8');

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const expectedError = new Error('Não temos esse pokémon para você :(');
    // const callback = (error, message) => {
    //     expect(error).toEqual(expectedError);
    // }
    getPokemonDetails(
        (pokemon) => pokemon.name === 'Squirtli', 
        (error, message) => {
        expect(error).toEqual(expectedError);
        done();
    })
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    const expectedMessage = 'Olá, seu pokémon é o Squirtle, o tipo dele é Water e a habilidade principal dele é Water Gun'
    getPokemonDetails(
        (pokemon) => pokemon.name === 'Squirtle', 
        (error, message) => {
        expect(message).toEqual(expectedMessage);
        done();
    })
  });
});