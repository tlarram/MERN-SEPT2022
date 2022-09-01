import React, {useState} from 'react'
import Display from './Display'

const Form3 = () => {
    const [username, setUsername] = useState("")
    const [age, setAge] = useState(21)
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)

    // errors
    const [usernameError, setUsernameError] = useState("")
    const [ageError, setAgeError] = useState("")

    
    const handleSubmit =(e)=>{
        e.preventDefault()
        // create the user
        if(username.length>2 && age>=21){
            const newUser = { username, age}
            console.log(newUser)
            setHasBeenSubmitted(true)
        }else{
            alert("invalid form")
        }
    }
    
    const formMessage =() =>{
        if(hasBeenSubmitted){
            return "Thank you for creating the user"
        }else{
            return "Please fill in the form"
        }
    }
    
    const handleUsername = (e) =>{
        setUsername(e.target.value)
        if(e.target.value.length<3){
            setUsernameError("Username must be at least 3 characters")
        }else{
            setUsernameError("")
        }
    }

    const handleAge = (e) =>{
        setAge(e.target.value)
        if(e.target.value <21){
            setAgeError("You must be at least 21 years old")
        }else{
            setAgeError("")
        }
    }


    return (
        <div>
            <h1> refactored form with conditional rendering</h1>
            <p>{formMessage()}</p>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username: </label>
                    <input type="text" name="username" value={username} onChange={handleUsername}/>
                    <span style={{color: "red"}}> {usernameError}</span>

                </div>
                <div>
                    <label>age: </label>
                    <input type="number" name="age" value={age} onChange={handleAge} />
                    <span style={{color:"red"}}> {ageError}</span>

                </div>
                <input type="submit" value="Create User" disabled={username.length < 3 || age<21} />
            </form>

        </div>
    )
}

export default Form3