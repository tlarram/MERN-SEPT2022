import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"

// 1. form input : useState for each field
// 2. handle submit
// 3. send info to api: axios
// 4. navigate

const CreateJob = () => {
  const navigate =useNavigate()
  const [title, setTitle] = useState("")
  const [company, setCompany] = useState("")
  const [salary, setSalary] = useState(70000)
  const [isRemote, setIsRemote] = useState(false)

  const [errors, setErrors] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    // send all details to API
    axios.post(`http://localhost:8000/api/jobs`, {title:title, company:company, salary:salary, isRemote:isRemote})
      .then(response=>navigate("/"))
      .catch(err=>{
        const errorResponseDataErrors = err.response.data.errors
        const errMsgArr =[]
        for(const eachKey in errorResponseDataErrors){
            errMsgArr.push(errorResponseDataErrors[eachKey].message)
        }
        setErrors(errMsgArr)
    })
  }

  const clearForm = () =>{
    setTitle("")
    setCompany("")
    setSalary(70000)
    setIsRemote(false)
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="form-label"> Title</label>
          <input type="text" className="form-control" name="title" onChange={(e) => setTitle(e.target.value)} value={title} />
        </div>
        <div>
          <label className="form-label"> Company</label>
          <input type="text" className="form-control" name="company" onChange={(e) => setCompany(e.target.value)} value={company} />
        </div>
        <div>
          <label className="form-label"> Salary</label>
          <input type="number" className="form-control" name="salary" onChange={(e) => setSalary(e.target.value)} value={salary} />
        </div>
        <div>
          <input type="checkbox" className="form-check-input" name="isRemote" checked={isRemote} onChange={(e)=>setIsRemote(e.target.checked)} />
          <label className="form-label"> Remote</label>
        </div>
        <button type="submit" className='btn btn-success'> Create Job</button>
        <button type="button" className='btn btn-secondary' onClick={clearForm}>Cancel</button>
      </form>
      {
        errors.map((eachErr, i)=>(
          <p key={i} style={{color: "red"}}> {eachErr} </p>
        ))
      }
    </div>
  )
}

export default CreateJob