import { Navbar } from "./components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import PokeApi from "./ejemplos/PokeApi/PokeApi";
import PokeList from "./ejemplos/PokeApi/PokeList";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {

  return (
    <div>
      <Navbar />

      <ItemDetailContainer itemId={12}/>
      {/* <PokeList /> */}
      {/* <PokeApi /> */}
      {/* <ItemListContainer /> */}
    </div>
  );
}

export default App;
