import { useEffect, useState } from "react"
import PokeDetail from "./PokeDetail"




const PokeList = () => {

    const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=0`)
    const [instances, setInstances] = useState({})
    const [list, setList] = useState([])
    console.log(instances)

    const handleSiguientes = () => {
        instances.next && setUrl(instances.next)
    }

    const handleAnterior = () => {
        instances.previous && setUrl(instances.previous)
    }

    useEffect(() => {
        fetch(url) 
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)

                setList(data.results)
                setInstances({
                    next: data.next,
                    previous: data.previous
                })
            })
            .catch((err) => console.log(err))
    }, [url])

    return (
        <div className="container my-5">
            <h2>Poke List</h2>
            <hr/>

            <button className="btn btn-primary" onClick={handleAnterior}>Anterior</button>

            <button className="btn btn-primary mx-3" onClick={handleSiguientes}>Siguiente</button>

            {
                list.map((pokemon) => <PokeDetail url={pokemon.url} key={pokemon.name}/>)
            }
        </div>
    )
}

export default PokeList