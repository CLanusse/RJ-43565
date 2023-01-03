import { Navbar } from "./components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import PokeApi from "./ejemplos/PokeApi/PokeApi";
import PokeList from "./ejemplos/PokeApi/PokeList";

function App() {

  return (
    <div>
      <Navbar />
      <PokeList />
      {/* <PokeApi /> */}
      {/* <ItemListContainer /> */}
    </div>
  );
}

export default App;
