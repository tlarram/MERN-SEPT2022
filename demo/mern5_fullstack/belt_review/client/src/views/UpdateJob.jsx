import React, { useEffect,useState } from 'react'
import axios from "axios"
import {useParams, useNavigate } from "react-router-dom"

const UpdateJob = () => {
  const navigate =useNavigate()
  const [title, setTitle] = useState("")
  const [company, setCompany] = useState("")
  const [salary, setSalary] = useState(70000)
  const [isRemote, setIsRemote] = useState(false)

  const {id} = useParams()
  useEffect(()=>{
    // get the job information from API 
    axios.get(`http://localhost:8000/api/jobs/${id}`) // same route as DetailPage
      .then(response=>{
        console.log(response.data)
        const job = response.data
        setTitle(job.title)
        setCompany(job.company)
        setSalary(job.salary)
        setIsRemote(job.isRemote)
      })
      .catch(err=> console.log(err))
  }, [])

  const handleSubmit = (e)=>{
    e.preventDefault()
    axios.put(`http://localhost:8000/api/jobs/${id}`, {title, company, salary, isRemote})
      .then(response=>navigate(`/jobs/${id}`))
      .catch(err=>console.log(err))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="form-label"> Title</label>
          <input type="text" className="form-control" name="title" 
          onChange={(e) => setTitle(e.target.value)} value={title} />
        </div>
        <div>
          <label className="form-label"> Company</label>
          <input type="text" className="form-control" name="company" 
          onChange={(e) => setCompany(e.target.value)} value={company} />
        </div>
        <div>
          <label className="form-label"> Salary</label>
          <input type="number" className="form-control" name="salary" onChange={(e) => setSalary(e.target.value)} value={salary} />
        </div>
        <div>
          <input type="checkbox" className="form-check-input" name="isRemote" checked={isRemote} onChange={(e)=>setIsRemote(e.target.checked)} />
          <label className="form-label"> Remote</label>
        </div>
        <button type="submit" className='btn btn-success'> Edit Job</button>
      </form>

    </div>
  )
}

export default UpdateJob