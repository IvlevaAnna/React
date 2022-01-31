import React from 'react'
import s from './Message.module.css'

export const Message = (props) => {

    return (
        <div className={props.author === 'robot' ? s.message_robot : s.message}>
            {props.text}
        </div>
    )
}
