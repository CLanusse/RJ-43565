


//   | protoclo |     dominio      | endpoints | params
// url:  https://www.coderhouse.com/api/alumnos

import { useEffect, useState } from "react"
import useFetch from "../../hooks/useFetch"

// query params
// GET: id = number
// url:  https://www.coderhouse.com/api/alumno?id=12334

// GET: curso = string, limit = number
// url:  https://www.coderhouse.com/api/alumnos?limit=50&curso=javascript

// url/segment params
// GET:  https://www.coderhouse.com/api/cursos/{nombre}/{comision}
// url:  https://www.coderhouse.com/api/cursos/reactjs/43565



const PokeApi = () => {

    const [id, setId] = useState(1)

    const { data } = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`, [id])

    const handleSiguiente = () => {
        setId(id + 1)
    }

    const handleAnterior = () => {
        if (id > 1) {
            setId(id - 1)
        }
    }

    return (
        <div className="container my-5">
            <h2>PokeApi</h2>
            <hr/>

            {
                data &&
                <div>
                    <h3>{data.name}</h3>
                    <img src={data.sprites.front_default} alt={data.name}/>
                </div>
            }

            <button className="btn btn-outline-primary" onClick={handleAnterior}>Anterior</button>
            <button className="btn btn-primary mx-3" onClick={handleSiguiente}>Siguiente</button>
        </div>
    )
}

export default PokeApi