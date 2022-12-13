import logo from './logo.svg';
import './App.css';
import { Listado } from './Listado'
import { Seccion } from './Seccion'

function App() {

  const nombre = 'Conrado Lanusse'
  const estilo = {color: 'red', fontSize: '20px', fontWeight: 700}

  return (
    <div className="App">
      <header id="header" className="App-header">
        <p style={estilo}>
          { nombre }
        </p>
        <br></br>
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

      <Seccion />
    </div>
  );
}

export default App;
