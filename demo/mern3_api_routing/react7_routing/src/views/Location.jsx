import React from 'react'
import { useParams } from 'react-router-dom'

const Location = () => {
    const {city} = useParams()

    return (
        <fieldset>
            <legend> Location.jsx</legend>
            <h1> Let's go to {city} </h1>
        </fieldset>
    )
}

export default Location