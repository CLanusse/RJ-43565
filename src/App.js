import { Navbar } from "./components/Navbar/Navbar";
import { Usuario } from "./components/Usuario/Usuario";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contenedor from "./components/Contenedor/Contenedor";
import MyButton from "./ejemplos/MyButton/MyButton";

function App() {

  return (
    <div>
      <Navbar />

      <Contenedor>
        <Usuario nombre="John DOe" curso="ReactJS" edad="22"/>

        <MyButton variant={2} className="otra-clase">
          Clickeame!
          <small>dale, enserio</small>
        </MyButton>
      </Contenedor>
    </div>
  );
}

export default App;
