import React from 'react'

const MessageDisplay = (props) => {
    return (
        <fieldset>
            <legend> MessageDisplay.jsx</legend>
            <h1>Current Message</h1>
            <pre>{props.message}</pre>
            <h1>Chat History</h1>
            {
                props.messageList.map((eachMessage, i)=>{
                    return (
                        <pre key={i} style={{color: eachMessage}}> {eachMessage}</pre>
                    )
                })
            }


        </fieldset>
    )
}

export default MessageDisplay