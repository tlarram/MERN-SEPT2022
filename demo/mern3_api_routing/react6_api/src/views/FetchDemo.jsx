import React, {useState, useEffect} from 'react'
import DisplayPoke from '../components/DisplayPoke'
import axios from "axios"
import DisplayOnLoad from '../components/DisplayOnLoad'

const FetchDemo = () => {
    const [pokemon, setPokemon] = useState()


    const fetchPokemonWithThen = () =>{
        fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
            .then(response =>{
                console.log(response)
                return response.json();// .json() is another promise
            }) // successful call
            .then(jsonResponse =>{
                console.log(jsonResponse)
                setPokemon(jsonResponse)
            })
            .catch(err=> console.log(err))// unsuccessful call
    }

    const fetchPokemonWithAwait = async() =>{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/eevee`)
        const jsonResponse = await response.json()
        console.log(jsonResponse)
        setPokemon(jsonResponse)
    }

    const fetchPokemonWithAxios =() =>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/snorlax`)
            .then(response => {
                console.log(response)
                setPokemon(response.data)
            })
            .catch()
    }

    const fetchPokemonWithAxiosAsync = async() =>{
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/pichu`)
        setPokemon(response.data)
    }

    return (
        <div>
            <h1> Fetch pokemon demo</h1>
            <button onClick={fetchPokemonWithThen}> Fetch with .then</button>
            <button onClick={fetchPokemonWithAwait}> Fetch with async/await</button>
            <button onClick={fetchPokemonWithAxios}> Fetch with axios</button>
            <button onClick={fetchPokemonWithAxiosAsync}> Fetch with axios</button>

            {
                <DisplayOnLoad />
            }
           
        </div>
    )
}

export default FetchDemo