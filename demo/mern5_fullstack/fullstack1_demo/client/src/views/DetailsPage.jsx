import React, {useEffect, useState} from 'react'
import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom'

// 1. get id from params (useParams())
// 2. use the id to get info from api : axios
// 3. display info on load: useEffect
// 4. variable change: useState
const DetailsPage = () => {
  const {id} = useParams();
  const [destination, setDestination] = useState()
  // DELETE 
  // 1. attach a function (handleDelete)
  // 2. axios.delete with the ID (from parasm/ from function)
  // 3. navigate
  const navigate = useNavigate()


  useEffect(()=>{
    axios.get(`http://localhost:8000/api/destinations/${id}`)
      .then(response=>{
        console.log(response.data)
        setDestination(response.data)
      })
      .catch(err=>console.log(err))
  },[])

  // DELETE
  const handleDelete = () =>{
    axios.delete(`http://localhost:8000/api/destinations/${id}`)
      .then(response=>{
        navigate(`/destinations`)
      })
      .catch(err=>console.log(err))
  }

  return (
    <div>
      {
        destination&&
        <div>
          <h1> {destination.location}</h1>
          <h5> Rating: {destination.rating} </h5>
          <h5> Season: {destination.season} </h5>
          <img src={destination.image} /> 
          <button onClick={()=>handleDelete()}> Delete</button>

        </div>
      }


    </div>
  )
}

export default DetailsPage