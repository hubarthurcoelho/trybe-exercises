import {randomNumber} from './services';

// Utilize o mock e defina o retorno padrão como 10.
// Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.

describe('Testes para o arquivo services', () => {
  it('Testa se a função retorna um número aleatório', () => {
    randomNumber = jest.fn().mockReturnValue(10);
    expect(randomNumber()).toBe(10);
  })
})