import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addChat} from "../../store/chats/actions";
import {chatsSelector} from "../../store/chats/selectors";
import {addChatMessages} from "../../store/messages/actions";
import {Chats} from "./Chats";
import {chatsRef, getChatByIdRef, getMessagesChatByIdRef, messagesRef} from "../../services/firebase";
import {onValue, set} from 'firebase/database'

export const ChatsContainer = () => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const [name, setName] = useState('')
    const [chats, setChats] = useState([])

    // const chats = useSelector(chatsSelector)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleChange = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // dispatch(addChat(`chat-${name}`, name))
        set(getChatByIdRef(`chat-${name}`),{id: `chat-${name}`, name: name} )
        // dispatch(addChatMessages(`chat-${name}`))
        set(getMessagesChatByIdRef(`chat-${name}`), { empty: true })
        setOpen(false)
    }

    useEffect(() => {
        const unsubscribe = onValue(chatsRef, (snapshot) => {
            const newChats = []
            snapshot.forEach((child) => {
                newChats.push(child.val())
            })
            setChats(newChats)
        })

        return unsubscribe
    }, [])

    return (
        <Chats chats={chats}
               handleOpen={handleOpen}
               open={open}
               handleClose={handleClose}
               name={name}
               handleChange={handleChange}
               handleSubmit={handleSubmit}
        />
    );
}
