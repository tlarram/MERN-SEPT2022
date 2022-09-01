import React, {useState} from 'react'
import Display from './Display'

const Form2 = () => {
    const [username, setUsername] = useState("")
    const [age, setAge] = useState(21)
    const [password, setPassword] = useState("")
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)

    const handleUsername = (e) =>{
        setUsername(e.target.value)
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        // create the user
        if(username.length>2 && age>=21){
            const newUser = { username, age, password}
            console.log(newUser)
            setHasBeenSubmitted(true)
        }else{
            alert("invalid form")
        }
    }

    return (
        <div>
            <h1> Form with conditional rendering</h1>
            {
                hasBeenSubmitted?
                    <p> Thank you for creating the user</p>:
                    <p> Please fill in the form</p>
            }

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username: </label>
                    <input type="text" name="username" value={username} onChange={handleUsername}/>
                    {
                        username.length < 3 &&
                        <span style={{color: "red"}}> Username must be at least 3 characters</span>
                    }
                </div>
                <div>
                    <label>age: </label>
                    <input type="number" name="age" value={age} onChange={(e)=> setAge(e.target.value)} />
                    {
                        age<21&&
                        <span style={{color:"red"}}> You must be at least 21 years old</span>
                    }
                </div>
                <input type="submit" value="Create User" disabled={username.length < 3 || age<21} />
            </form>
            <Display username= {username} age={age} password ={password} />

        </div>
    )
}

export default Form2