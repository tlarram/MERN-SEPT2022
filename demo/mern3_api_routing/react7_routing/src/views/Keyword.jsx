import React from 'react'
import { useParams } from 'react-router-dom'

const Keyword = () => {
    const { keyword, color} = useParams();
    return (
        <fieldset>
            <legend> Keyword.jsx</legend>
            <h2 style={{backgroundColor: color, color: "white"}}> Searching for {keyword} in {color}</h2>
        </fieldset>
    )
}

export default Keyword