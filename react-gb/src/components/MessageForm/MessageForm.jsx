import React, {useState} from 'react'
import s from './MessageForm.module.css'
import TextField from '@material-ui/core/TextField/TextField'
import Button from '@material-ui/core/Button/Button'

export const MessageForm = ({onSubmit}) => {
    const [messageText, setMessageText] = useState('')
    const [focus, setFocus] = useState(true)

    const handleChange = (e) => {
        setMessageText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(messageText)
        setMessageText('')
        setFocus(true)
    }

    return(
        <form className={s.container}>
            <TextField value={messageText} autoFocus={focus} type='text' label='Message' variant='standard' onChange={(e) => handleChange(e)}/>
            <Button size='small' variant="contained" type='submit' onClick={(e) => handleSubmit(e)}>
                Send
            </Button>
        </form>
    )
}
