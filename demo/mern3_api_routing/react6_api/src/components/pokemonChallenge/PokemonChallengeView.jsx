import React, { useState } from 'react'
import ChallengeDisplay from './ChallengeDisplay'

const PokemonChallengeView = () => {
    const [pokemonName, setPokemonName] = useState("pikachu");
    const [confirmedName, setConfirmedName] = useState("pikachu")

    const handleSubmit = (e) =>{
        e.preventDefault();
        setConfirmedName(pokemonName)
    }

    return (
        <div>
            <h1> Pokemon Challenge</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setPokemonName(e.target.value)} />
                <button type="submit"> Search</button>
            </form>
            <ChallengeDisplay submittedName={confirmedName}/>


        </div>
    )
}

export default PokemonChallengeView