import React, {useState} from 'react'
import Display from './Display'


const OneStateForm = () => {
    const [formState, setFormState] =useState({
        username : "",
        age : 21
    })

    const [formError , setFormError] = useState({
        username: true,
        age: false
    })

    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)

    const handleSubmit =(e)=>{
        e.preventDefault()
        // create the user
        if(!formError.age && !formError.username ){
            const newUser = formState
            console.log(newUser)
            setHasBeenSubmitted(true)
        }else{
            alert("invalid form")
        }
        
    }
    const handleInput =(e) =>{
        const keyToUpdate = e.target.name
        const valToUpdate = e.target.value
        // handling input
        setFormState({
            ...formState,
            [keyToUpdate] : valToUpdate
        })

        // handle error
        const errors = {...formError}

        // if(keyToUpdate==="username"){
        //     if(valToUpdate.length < 3){
        //         errors.username = "Username must be at least 3 characters"
        //     }else{
        //         errors.username =""
        //     }
        // }else if(keyToUpdate==="age"){
        //     if(valToUpdate < 21){
        //         errors.age="Age must be at least 21 years old"
        //     }else{
        //         errors.age=""
        //     }
        // }

        switch(keyToUpdate){
            case 'username':
                valToUpdate.length < 3?
                    errors.username = "Username must be at least 3 characters":
                    errors.username =""
                break;
            case 'age':
                valToUpdate < 21?
                    errors.age="Age must be at least 21 years old":
                    errors.age=""
                break;
        }

        setFormError(errors)

    }


    return (
        <div>
            <h1> one state form with conditional rendering</h1>


            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username: </label>
                    <input type="text" name="username" value={formState.username} onChange={handleInput}/>
                    <span style={{color: "red"}}>{formError.username} </span>

                </div>
                <div>
                    <label>age: </label>
                    <input type="number" name="age" value={formState.age} onChange={handleInput} />
                    <span style={{color:"red"}}>{formError.age} </span>

                </div>
                <input type="submit" value="Create User" disabled={formError.age || formError.username}  />
            </form>
            <Display username={formState.username} age={formState.age}/>
        </div>
    )
}

export default OneStateForm