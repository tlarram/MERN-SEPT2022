import React from 'react'

const DisplayPoke = (props) => {
  return (
    <div>
        <h1>{props.pokemon.name}</h1>
        <img src={props.pokemon.sprites.front_default} /> 
    </div>
  )
}

export default DisplayPoke