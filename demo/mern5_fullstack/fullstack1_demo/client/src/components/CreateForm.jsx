import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

// form input : onChange , useState
// form submit : handleSubmit
// send formData into api : axios
// logic after create : redirect to dashboard (navigate)

const CreateForm = (props) => {
    const navigate = useNavigate()
    const [location, setLocation] = useState("")
    const [rating, setRating] = useState(10)
    const [image, setImage] = useState("")
    const [season, setSeason] = useState("")
    const [errors, setErrors] = useState([])

    const handleSubmit =(e)=>{
        e.preventDefault()
        // send formData into API, if successful, redirect
        axios.post(`http://localhost:8000/api/destinations`, 
        {location, rating, image, season})
            .then(response=>{
                console.log(response.data) 
                // the object of the newly created dest
                navigate(`/destinations`)

            })
            .catch(err=>{
                const errorResponseDataErrors = err.response.data.errors
                console.log(errorResponseDataErrors)
                const errMsgArr =[]
                for(const eachKey in errorResponseDataErrors){
                    errMsgArr.push(errorResponseDataErrors[eachKey].message)
                }
                setErrors(errMsgArr)
            })
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
            {
                errors.map((eachErr, i)=>(
                    <p style={{color: "red"}}> {eachErr}</p>
                ))
            }
        </div>
    )
}

export default CreateForm