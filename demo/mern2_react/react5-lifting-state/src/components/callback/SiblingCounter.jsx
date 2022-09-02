import React from 'react'


const SiblingCounter = (props) => {

    const handleCount =()=>{
        props.changeCount();
    }

    return (
        <fieldset style={{backgroundColor: "powderblue"}}>
            <legend> SiblingCounter.jsx</legend>
            <button onClick={handleCount}> Edit Count!</button>

        </fieldset>
    )
}

export default SiblingCounter