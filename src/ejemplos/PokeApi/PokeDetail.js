import { useEffect, useState } from "react"



const PokeDetail = ({url}) => {

    const [pokemon, setPokemon] = useState(null)

    useEffect(() => {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => setPokemon(data))
    }, [])

    return (
        <div>
            {
                pokemon &&
                <>
                    <h3>{pokemon.name}</h3>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                    <hr/>
                </>
            }
        </div>
    )
}

export default PokeDetail