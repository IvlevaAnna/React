import React, {useEffect, useState} from 'react'
import {Navigate, useParams} from "react-router-dom";
import s from "./Chat.module.css";
import {MessageForm} from "../MessageForm/MessageForm";
import {Message} from "../Message/Message";

export const Chat = () => {
    const {chatId} = useParams()

    const [messageList, setMessageList] = useState({
        chat1: [
            {text: 'hello', author: 'me', id: `chat1-msg1`},
            {text: 'hello', author: 'me', id: `chat1-msg2`},
        ],
        chat2: [
            {text: 'Hello, Nick!', author: 'me', id: `chat2-msg1`},
        ],
        chat3: [
            {text: 'Hi, sisters!', author: 'me', id: `chat3-msg1`},
            {text: 'What are you doin?', author: 'me', id: `chat3-msg2`},
        ],
        chat4: [
            {text: 'Good morning', author: 'me', id: `chat4-msg1`},
        ],
    })

    useEffect(() => {
        let timeout
        if(messageList[chatId][messageList[chatId]?.length -1].author === 'me') {
            timeout = setTimeout(() => {
                setMessageList((prevMessageList) =>
                    ({ ...prevMessageList, [chatId] : [...prevMessageList[chatId], {text: `Your message is: ${prevMessageList[chatId][prevMessageList[chatId].length-1].text}`, author: 'robot', id: `msg-${Date.now()}`}]}))
            }, 1500)
        }

        return () => clearTimeout(timeout)
    }, [messageList])


    const handleSubmit = (messageText) => {
        setMessageList((prevMessageList) =>
            ({...prevMessageList, [chatId] : [...prevMessageList[chatId], {text: messageText, author: 'me', id: `msg-${Date.now()}`}] }))

    }

    if (!messageList[chatId]) {
        return <Navigate to='/chats' replace />
    }

    return (
        <div className={s.container}>
            {
                messageList[chatId].map((message) =>
                    <Message text={message.text} author={message.author} key={message.id}/>)
            }
            <MessageForm onSubmit={handleSubmit}/>
        </div>
    )
}
