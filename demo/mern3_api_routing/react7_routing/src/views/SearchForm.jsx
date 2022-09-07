import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
// form : input - state
// handle submit
// redirect: 1. import useNavigate  2. instantiate navigate 3. redirect
const SearchForm = () => {
    const [pokemonName, setPokemonName] = useState("")
    const navigate = useNavigate()


    const handleSubmit = e =>{
        e.preventDefault()
        navigate(`/pokemon/${pokemonName}`)    
    }

    return (
        <fieldset>
            <legend> SearchForm.jsx</legend>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e)=>setPokemonName(e.target.value)} />
                <button type="submit"> Search!</button>
            </form>
        </fieldset>
    )
}

export default SearchForm