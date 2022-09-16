import React, {useState, useEffect} from 'react'
import axios from "axios"
import {Link} from "react-router-dom"
// 1. get info from API when mounting the component (axios, useEffect)
// 2. jobList will be updated after API call (useState)
// 3. jobList --> .map

const DashboardPage = () => {
  const [jobList, setJobList] = useState([])


  useEffect(()=>{
    axios.get(`http://localhost:8000/api/jobs`)
      .then(response=>{
        console.log(response.data)
        setJobList(response.data)
      })
      .catch(err=>console.log(err))
  },[])

  const handleDelete =(deleteId)=>{
    axios.delete(`http://localhost:8000/api/jobs/${deleteId}`)
      .then(response=>{
        const filterList = jobList.filter((job)=>job._id !== deleteId)
        setJobList(filterList)
      })
      .catch(err=>console.log(err))
  }


  return (
    <div>
      <Link to="/jobs/new">Create new jobs</Link>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th> Job Title</th>
            <th> Company</th>
            <th> Salary</th>
            <th> Remote</th>
            <th colSpan={2}> Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            jobList.map((eachJob, i)=>{
              return(
                <tr key={i}>
                  <td> <Link to={`/jobs/${eachJob._id}`} >{eachJob.title}</Link></td>
                  <td> {eachJob.company}</td>
                  <td> {eachJob.salary}</td>
                  <td> {eachJob.isRemote?"Yes":"No"}</td>
                  <td> <Link to={`/jobs/edit/${eachJob._id}`} className="btn btn-primary">Edit</Link></td>
                  <td> <button onClick={()=>handleDelete(eachJob._id)} className="btn btn-danger"> Delete</button></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

    </div>
  )
}

export default DashboardPage