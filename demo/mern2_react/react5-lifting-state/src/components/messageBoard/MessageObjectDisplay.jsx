import React from 'react'

const MessageObjectDisplay = (props) => {
    return (
        <fieldset>
            <legend> MessageDisplay.jsx</legend>
            <h1>Chat History</h1>
            {
                props.messageList.map((eachMessage, i)=>{
                    return (
                        <pre key={i}>{eachMessage.sender}: {eachMessage.content}</pre>
                    )
                })
            }


        </fieldset>
    )
}

export default MessageObjectDisplay