import React, {useState} from 'react'

export const MessageForm = ({onSubmit}) => {
    const [messageText, setMessageText] = useState('')

    const handleChange = (e) => {
        setMessageText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(messageText)

    }

    return(
        <form>
            <input type='text' onChange={(e) => handleChange(e)}/>
            <button style={{backgroundColor: '#edebe6'}} type='submit' onClick={(e) => handleSubmit(e)}>Send Message</button>
        </form>
    )
}
