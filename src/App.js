import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from "./context/CartContext";
import { LoginProvider } from "./context/LoginContext";
import AppRouter from './router/AppRouter';


function App() {

  return (
    <LoginProvider>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </LoginProvider>
  );
}

export default App;

/* <Route path="/productos/search/:busqueda" element={ <ItemListContainer /> }/>
    <Route path="/nosotros" element={ <Nosotros /> }/>
    <Route path="/pokemon" element={ <PokeApi /> }/>
    <Route path="*" element={ <Error404 /> }/> */