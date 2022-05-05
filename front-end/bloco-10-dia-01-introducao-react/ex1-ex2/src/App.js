
import './App.css';


const array = ['buy fruits', 'sell clothes', 'cook dinner'];
const task = (array) => {
  return (
    array.map((currentTask) => <li>{currentTask}</li>)
  );
};

function App() {
  return (
    <div className="App">
      <ol>{task(array)}</ol>
    </div>
  );
}

export default App;
