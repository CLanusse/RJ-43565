import { Navbar } from "./components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Contacto from "./components/Contacto/Contacto";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./context/CartContext";
// import Nosotros from "./components/Nosotros/Nosotros";


function App() {

  return (
    <CartProvider>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path="/" element={ <ItemListContainer /> }/>
          <Route path="/productos/:categoryId" element={ <ItemListContainer /> }/>
          <Route path="/detail/:itemId" element={ <ItemDetailContainer />} />
          <Route path="/contacto" element={ <Contacto />} />
          <Route path="/cart" element={ <Cart /> }/>
          <Route path="*" element={ <Navigate to={"/"}/> }/>
          
        </Routes>  

        {/* <Footer /> */}
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

/* <Route path="/productos/search/:busqueda" element={ <ItemListContainer /> }/>
    <Route path="/nosotros" element={ <Nosotros /> }/>
    <Route path="/pokemon" element={ <PokeApi /> }/>
    <Route path="*" element={ <Error404 /> }/> */