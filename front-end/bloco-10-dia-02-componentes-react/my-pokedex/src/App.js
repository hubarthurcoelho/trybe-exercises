
import './App.css';
import Pokedex from './Pokedex';
import pokemons from './data';
function App() {
  return (
    <>
    <header>
      <h1>Pokedex</h1>
    </header>
      <Pokedex pokemons={pokemons}/>
    </>
  );
}

export default App;
