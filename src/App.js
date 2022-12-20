import { Navbar } from "./components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Clicker from "./ejemplos/Clicker/Clicker";
import { useState } from "react";

function App() {

  const [show, setShow] = useState(true)

  const handleShow = () => {
    setShow(!show)
  }

  return (
    <div>
      <Navbar />

      <button onClick={handleShow}>show</button>

      { show && <Clicker />}
      
    </div>
  );
}

export default App;
