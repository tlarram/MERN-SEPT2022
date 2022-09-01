import React from 'react'

const Display = (props) => {
  return (
    <div>
        <h1> Display information</h1>
        <p> Username: {props.username} </p>
        <p> Age: {props.age} </p>
        <p> Password: {props.password} </p>


    </div>
  )
}

export default Display