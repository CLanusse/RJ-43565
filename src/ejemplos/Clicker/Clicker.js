import { useEffect, useState } from "react"
import Bomba from "./Bomba"


const Clicker = () => {

    const [counter, setCounter] = useState(1)
    const [show, setShow] = useState(true)

    const sumar = () => {
        setCounter( counter + 1 )
    }

    const restar = () => {
        if (counter > 1) {
            setCounter( counter - 1 )
        }
    }

    const mostrar = () => {
        setShow( !show )
    }
    
    useEffect(() => {
        console.log('Clicker montado!')

        return () => { // efecto de limpieza
            console.log('Clicker desmontado')
        }
    }, [])

    useEffect(() => {
        console.log('Post render', counter)

        return () => {
            console.log('Pre render', counter)
        }
    }, [counter])

    return (
        <div className="container my-5">
            <h2>Clicker</h2>
            <hr/>

            <button className="btn btn-outline-primary" onClick={restar}>Restar!</button>
            <button className="btn btn-primary mx-3" onClick={sumar}>Sumar!</button>
            <p>{counter}</p>

            <hr/>
            <button className="btn btn-success" onClick={mostrar}>
                {show ? 'Ocultar' : 'Mostrar'}
            </button>

            <Bomba show={show} counter={counter} />
        </div>
    )
}

export default Clicker