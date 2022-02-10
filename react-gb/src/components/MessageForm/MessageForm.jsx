import React, {useState} from 'react'
import s from './MessageForm.module.css'
import TextField from '@material-ui/core/TextField/TextField'
import Button from '@material-ui/core/Button/Button'

export const MessageForm = ({onSubmit}) => {
    const [messageText, setMessageText] = useState('')

    const handleChange = (e) => {
        setMessageText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(messageText)
        setMessageText('')
    }

    return(
        <form className={s.container}>
            <TextField value={messageText} autoFocus={true} type='text' label='Message' variant='standard' onChange={(e) => handleChange(e)}/>
            <Button size='small' variant="contained" type='submit' onClick={handleSubmit}>
                Send
            </Button>
        </form>
    )
}
