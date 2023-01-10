import { useState } from "react"



const ItemCount = ({cantidad, setCantidad, max, onAdd}) => {

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }

    return (
        <div>
            <button onClick={handleRestar} className="btn btn-outline-primary">-</button>
            <span className="mx-3">{cantidad}</span>
            <button onClick={handleSumar} className="btn btn-primary">+</button>
            <br/>
            <button className="btn btn-success my-3" onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount