import React, { useState, useEffect } from 'react'
import axios from "axios"
import DestinationTable from '../components/DestinationTable'

// get info from API : axios
// get info when the component is mounted: useEffect
// variable change: useState

const DashboardPage = () => {
  const [destinations, setDestinations] = useState()

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/destinations`)
      .then(response=>{
        setDestinations(response.data)
      })
      .catch(err=>console.log(err))
  },[])

  return (
    <div>
      <h1> Dashboard table</h1>
      {
        destinations?
        <DestinationTable destinations={destinations}/>:
        <h1> No destinations available</h1>
      }
    </div>
  )
}

export default DashboardPage