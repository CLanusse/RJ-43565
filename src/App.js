import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Conrado Lanusse the best
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bienvenidos a React en Coder
        </a>
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <section className="miclase">
        Hola mundo
      </section>
    </div>
  );
}

export default App;
