import React, {useState} from 'react'
import SiblingCounter from '../components/callback/SiblingCounter'
import { SiblingDisplay } from '../components/callback/SiblingDisplay'

const CallbackContainer = () => {

    // TODO: create a function for the child


    return (
        <fieldset style={{backgroundColor: "gainsboro"}}>
            <legend> CallbackContainer.jsx</legend>
            <SiblingCounter  />
            <SiblingDisplay />
            <p> </p>
        </fieldset>
    )
}

export default CallbackContainer

// pass info from parent component --> child component: props

// pass info from child --> parent