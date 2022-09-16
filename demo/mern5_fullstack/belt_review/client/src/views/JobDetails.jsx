import React, {useEffect, useState} from 'react'
import axios from "axios"
import {useParams, Link, useNavigate} from "react-router-dom"


// 1. get id from params (useParams)
// 2. use the id, get info from API when loading the component (useEffect, axios)
// 3. get job --> useState
const JobDetails = () => {
  const {id} = useParams()
  const [job, setJob] = useState()
  const navigate = useNavigate()

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/jobs/${id}`)
      .then(response=>{
        console.log(response.data)
        setJob(response.data)
      })
      .catch(err=> console.log(err))
  }, [])

  const handleDelete =()=>{
    axios.delete(`http://localhost:8000/api/jobs/${id}`)
      .then(response=>navigate(`/`))
      .catch(err=> console.log(err))
  }

  return (
    <div>
        {
          job?
          <div>
            <h3> Job Title: {job.title}</h3>
            <h3> Company: {job.company}</h3>
            <h3> Salary: {job.salary}</h3>
            <h3> {job.isRemote? "This is a remote job":"This is not a remote job"} </h3>
            <Link to={`/jobs/edit/${id}`} className="btn btn-primary"> Edit</Link>
            <button onClick={handleDelete} className="btn btn-danger"> Delete</button>



          </div>:
          <h1> Wrong ID</h1>
        }

    </div>
  )
}

export default JobDetails