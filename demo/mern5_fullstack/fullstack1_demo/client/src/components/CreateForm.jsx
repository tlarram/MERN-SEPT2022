import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

// form input : onChange , useState
// form submit : handleSubmit
// send formData into api : axios
// logic after create : redirect to dashboard (navigate)

const CreateForm = () => {
    const navigate = useNavigate()
    const [location, setLocation] = useState("")
    const [rating, setRating] = useState(10)
    const [image, setImage] = useState("")
    const [season, setSeason] = useState("")

    const handleSubmit =(e)=>{
        e.preventDefault()
        // send formData into API, if successful, redirect
        axios.post(`http://localhost:8000/api/destinations`, {location, rating, image, season})
            .then(response=>{
                console.log(response)
                navigate('/destinations')
            })
            .catch(err=>console.log(err))
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Location: </label>
                    <input type="text" name="location" value={location} 
                        onChange={(e)=>setLocation(e.target.value)} />
                </div>
                <div>
                    <label> Rating: </label>
                    <input type="number" name="rating" value={rating} 
                        onChange={(e)=>setRating(e.target.value)} />
                </div>
                <div>
                    <label> Image URL: </label>
                    <input type="text" name="image" value={image} 
                        onChange={(e)=>setImage(e.target.value)} />
                </div>
                <div>
                    <label> Season</label>
                    <select name="season" value={season} onChange={(e)=>setSeason(e.target.value)}>
                        <option hidden> Choose a season</option>
                        <option value="spring"> Spring</option>
                        <option value="summer"> Summer</option>
                        <option value="fall"> Fall</option>
                        <option value="winter"> Winter</option>
                    </select>
                </div>
                <button type="submit"> Add a destination</button>
            </form>

        </div>
    )
}

export default CreateForm