import React from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
    const navigate = useNavigate()

    return (
        <fieldset>
            <legend> ErrorPage.jsx</legend>
            <button onClick={()=>navigate("/")}>Home</button>
            <button onClick={()=>navigate(-1)}>Go Back</button>
        </fieldset>
    )
}

export default ErrorPage