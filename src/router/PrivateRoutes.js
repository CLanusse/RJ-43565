import { Navbar } from "../components/Navbar/Navbar";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import Contacto from "../components/Contacto/Contacto";
import Cart from "../components/Cart/Cart";
import { Routes, Route, Navigate } from "react-router-dom"
import Checkout from "../components/Checkout/Checkout";

const PrivateRoutes = () => {

    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={ <ItemListContainer /> }/>
                <Route path="/productos/:categoryId" element={ <ItemListContainer /> }/>
                <Route path="/detail/:itemId" element={ <ItemDetailContainer />} />
                <Route path="/contacto" element={ <Contacto />} />
                <Route path="/cart" element={ <Cart /> }/>
                <Route path="/checkout" element={ <Checkout /> }/>
                <Route path="*" element={ <Navigate to={"/"}/> }/>
            </Routes>  
        </>
    )
}

export default PrivateRoutes