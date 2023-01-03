


//   | protoclo |     dominio      | endpoints | params
// url:  https://www.coderhouse.com/api/alumnos

import { useEffect, useState } from "react"

// query params
// GET: id = number
// url:  https://www.coderhouse.com/api/alumno?id=12334

// GET: curso = string, limit = number
// url:  https://www.coderhouse.com/api/alumnos?limit=50&curso=javascript

// url/segment params
// GET:  https://www.coderhouse.com/api/cursos/{nombre}/{comision}
// url:  https://www.coderhouse.com/api/cursos/reactjs/43565



const PokeApi = () => {

    const [pokemon, setPokemon] = useState(null)
    const [id, setId] = useState(1)

    const handleSiguiente = () => {
        setId(id + 1)
    }

    const handleAnterior = () => {
        if (id > 1) {
            setId(id - 1)
        }
    }

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`) 
            .then((resp) => resp.json())
            .then((data) => {
                setPokemon(data)
            })
            .catch((err) => console.log(err))
    }, [id])

    return (
        <div className="container my-5">
            <h2>PokeApi</h2>
            <hr/>

            {
                pokemon &&
                <div>
                    <h3>{pokemon.name}</h3>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                </div>
            }

            <button className="btn btn-outline-primary" onClick={handleAnterior}>Anterior</button>
            <button className="btn btn-primary mx-3" onClick={handleSiguiente}>Siguiente</button>
        </div>
    )
}

export default PokeApi