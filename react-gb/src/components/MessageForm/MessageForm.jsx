import React, {useEffect, useState} from 'react'
import s from './MessageForm.module.css'

export const MessageForm = (props) => {
    const [messageText, setMessageText] = useState('')

    useEffect(() => {
        let timeout
        if(props.messageList[props.messageList.length -1]?.author === 'me') {
            timeout = setTimeout(() => {
                props.setMessageList((prevMessageList) => [...prevMessageList, {text: `Your message is: ${messageText}`, author: 'robot'}])
            }, 1500)
        }

        return () => clearTimeout(timeout)
    }, [props.messageList])

    const handleChange = (e) => {
        setMessageText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.setMessageList([...props.messageList, {text: messageText, author: 'me'}])

    }

    return(
        <form>
            <input type='text' onChange={(e) => handleChange(e)}/>
            <button style={{backgroundColor: '#edebe6'}} type='submit' onClick={(e) => handleSubmit(e)}>Send Message</button>
        </form>
    )
}
