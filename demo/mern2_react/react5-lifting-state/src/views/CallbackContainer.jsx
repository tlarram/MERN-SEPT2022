import React, {useState} from 'react'
import SiblingCounter from '../components/callback/SiblingCounter'
import { SiblingDisplay } from '../components/callback/SiblingDisplay'

const CallbackContainer = () => {
    const [parentCount, setParentCount] = useState(0)
    // TODO: create a function for the child

    const addCount =()=>{
        setParentCount(parentCount+1)
    }
    const reduceCount =()=>{
        setParentCount(parentCount-1)
    }


    return (
        <fieldset style={{backgroundColor: "gainsboro"}}>
            <legend> CallbackContainer.jsx</legend>
            <SiblingCounter changeCount={addCount} />
            <SiblingCounter changeCount={reduceCount} />
            <SiblingDisplay count ={parentCount}/>
            <p> Parent count : {parentCount}</p>
        </fieldset>
    )
}

export default CallbackContainer

// pass info from parent component --> child component: props

// pass info from child --> parent