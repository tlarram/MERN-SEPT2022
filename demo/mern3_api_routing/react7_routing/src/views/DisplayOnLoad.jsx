import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom';

const DisplayOnLoad = () => {
    const [pokemon, setPokemon] = useState();
    const {pokemonNameFromParams} = useParams()

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonNameFromParams}`)
            .then(response => {
                setPokemon(response.data)
            })
            .catch()
    }, [pokemonNameFromParams])

    return (

        <div>
            {
                pokemon ?
                    <>
                        <h1> {pokemon.name}</h1>
                        <img src={pokemon.sprites.front_default} />
                    </>:
                <h1> Loading...</h1>
            }
        </div>
    )
}

export default DisplayOnLoad