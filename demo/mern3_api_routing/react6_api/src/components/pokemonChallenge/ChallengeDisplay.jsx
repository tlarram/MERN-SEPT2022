import React, {useState, useEffect} from 'react'
import axios from "axios"

const ChallengeDisplay = (props) => {
    const [pokemon, setPokemon] = useState();

    useEffect(() => {
        // .get -> read, .post -> creat, .put -> update, .delete -> delete
        axios.get(`https://pokeapi.co/api/v2/pokemon/${props.submittedName}`)
            .then(response => {
                console.log("calling API")
                setPokemon(response.data)
            })
            .catch()
    }, [props.submittedName])

    return (

        <div>
            <h5> {props.submittedName}</h5>
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

export default ChallengeDisplay