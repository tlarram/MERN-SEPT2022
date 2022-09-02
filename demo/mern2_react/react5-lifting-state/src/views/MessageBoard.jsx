import React, {useState} from 'react'
import MessageDisplay from '../components/messageBoard/MessageDisplay'
import MessageForm from '../components/messageBoard/MessageForm'


const MessageBoard = () => {
    // showing only 1 message
    const [currentMsg, setCurrentMsg] = useState("There are no messages");

    // showing more than 1 message (messageList)
    const [messageList, setMessageList]= useState([])


    const receiveNewMessage =(newMsg)=>{
        // showing only 1 message
        setCurrentMsg(newMsg)

        // showing more than 1 message (messageList)
        setMessageList([...messageList, newMsg])
    }


    return (
        <div>
            <h1> Message board</h1>
            <MessageForm onNewMessage = {receiveNewMessage}/>

            <MessageDisplay message = {currentMsg} messageList={messageList}/>
            <p> {currentMsg }</p>
        </div>
    )
}

export default MessageBoard