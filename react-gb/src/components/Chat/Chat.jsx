import React, {useEffect, useState} from 'react'
import {useNavigate, useParams} from "react-router-dom";
import s from "./Chat.module.css";
import {MessageForm} from "../MessageForm/MessageForm";
import {Message} from "../Message/Message";
import {useDispatch, useSelector} from "react-redux";
import {messagesSelector} from "../../store/messages/selectors";
import {addMessage, addMessageWithThunk, deleteChatMessages} from "../../store/messages/actions";
import {deleteChat} from "../../store/chats/actions";
import Button from "@material-ui/core/Button/Button";
import {getChatByIdRef, getMessageByIdRef, getMessagesChatByIdRef} from "../../services/firebase";
import {onChildAdded, onValue, set} from 'firebase/database'

export const Chat = () => {
    const dispatch = useDispatch()
    const {chatId} = useParams()
    const navigate = useNavigate()
    const [messageList, setMessageList] = useState([])
    // const messageList = useSelector(messagesSelector)

    const handleSubmit = (messageText) => {
        // dispatch(addMessageWithThunk(chatId, {text: messageText, author: 'me', id: `msg-${Date.now()}`}))
        const newMessage = {
            text: messageText,
            author: 'me',
            id: `msg-${Date.now()}`
        }
        // dispatch(addMessage(chatId, newMessage))
        set(getMessagesChatByIdRef(chatId), {empty: false})
        set(getMessageByIdRef(chatId, newMessage.id), newMessage)
        if (newMessage.author !== 'robot') {
            setTimeout(() => {
                const robotsMessage = {
                    text: `Your message is: ${newMessage.text}`,
                    author: 'robot',
                    id: `msg-${Date.now()}`
                }
                // dispatch(addMessage(chatId,
                //     {text: `Your message is: ${newMessage.text}`, author: 'robot', id: `msg-${Date.now()}`}))
                set(getMessageByIdRef(chatId, robotsMessage.id), robotsMessage)
            }, 1500)
        }
    }

    // if (!messageList) {
    //     return navigate('../chats', {replace: true})
    // }

    const handleDelete = () => {
        // dispatch(deleteChatMessages(chatId))
        // dispatch(deleteChat(chatId))
        set(getMessagesChatByIdRef(chatId), null)
        set(getChatByIdRef(chatId), null)
        navigate('/chats', {replace: true})
    }

    useEffect(() => {
        const unsubscribe = onValue(getMessagesChatByIdRef(chatId), (snapshot) => {
            const newMessageList = []
            snapshot.forEach((child) => {
                if ( child.key !== 'empty') {
                    newMessageList.push(child.val())
                }
            })
            setMessageList(newMessageList)
        });

        return unsubscribe;
    }, [chatId]);

    return (
        <div className={s.container}>
            <Button aria-label="delete" onClick={handleDelete}>
                delete chat
            </Button>
            {
                messageList?.map((message) =>
                    <Message text={message.text} author={message.author} key={message.id}/>)
            }
            <MessageForm onSubmit={handleSubmit}/>
        </div>
    )
}
