import Header from './Header';
import './App.css';
import Content from './Content';
import Footer from './Footer';
import './style.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <div className='listDiv'>
          <Content />
        </div>
      </header>
      <Footer />
    </div>
  );
}

export default App;
