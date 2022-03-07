import React, {useEffect, useState} from 'react'
import {useNavigate, useParams} from "react-router-dom";
import s from "./Chat.module.css";
import {MessageForm} from "../MessageForm/MessageForm";
import {Message} from "../Message/Message";
import {useDispatch, useSelector} from "react-redux";
import {messagesSelector} from "../../store/messages/selectors";
import {addMessageWithThunk, deleteChatMessages} from "../../store/messages/actions";
import {deleteChat} from "../../store/chats/actions";
import Button from "@material-ui/core/Button/Button";

export const Chat = () => {
    const dispatch = useDispatch()
    const {chatId} = useParams()
    const navigate = useNavigate()

    const messageList = useSelector(messagesSelector)

    const handleSubmit = (messageText) => {
        dispatch(addMessageWithThunk(chatId, {text: messageText, author: 'me', id: `msg-${Date.now()}`}))
    }

    if (!messageList[chatId]) {
        return navigate('../chats', {replace: true})
    }

    const handleDelete = () => {
        dispatch(deleteChatMessages(chatId))
        dispatch(deleteChat(chatId))
        navigate('/chats', {replace: true})
    }

    return (
        <div className={s.container}>
            <Button aria-label="delete" onClick={handleDelete}>
                delete chat
            </Button>
            {
                messageList[chatId]?.map((message) =>
                    <Message text={message.text} author={message.author} key={message.id}/>)
            }
            <MessageForm onSubmit={handleSubmit}/>
        </div>
    )
}
