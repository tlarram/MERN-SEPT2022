import React, {useState} from 'react'
import Display from './Display'

const Form1 = () => {
    const [username, setUsername] = useState("")
    const [age, setAge] = useState(21)
    const [password, setPassword] = useState("")

    const handleUsername = (e) =>{
        setUsername(e.target.value)
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        const newUser = { username, age, password}
        console.log(newUser)
    }

    return (
        <div>
            <h1> Basic Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username: </label>
                    <input type="text" name="username" value={username} onChange={handleUsername}/>
                </div>
                <div>
                    <label>age: </label>
                    <input type="number" name="age" value={age} onChange={(e)=> setAge(e.target.value)} />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" name="password" value={password} onChange={(e)=> setPassword(e.target.value)}  />
                </div>
                <input type="submit" value="Create User" />
            </form>
            <Display username= {username} age={age} password ={password} />

        </div>
    )
}

export default Form1