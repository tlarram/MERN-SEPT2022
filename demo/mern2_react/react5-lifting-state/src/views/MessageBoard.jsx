import React, {useState} from 'react'
import MessageDisplay from '../components/messageBoard/MessageDisplay'
import MessageForm from '../components/messageBoard/MessageForm'


const MessageBoard = () => {
    // showing more than 1 message (messageList)
    const [messageList, setMessageList]= useState([])


    const receiveNewMessage =(newMsg)=>{
        // showing more than 1 message (messageList)
        setMessageList([...messageList, newMsg])
    }


    return (
        <div>
            <h1> Message board</h1>
            <MessageForm onNewMessage ={receiveNewMessage}/>

            <MessageDisplay messageList={messageList}/>
        </div>
    )
}

export default MessageBoard