import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addChat} from "../../store/chats/actions";
import {chatsSelector} from "../../store/chats/selectors";
import {addChatMessages} from "../../store/messages/actions";
import {Chats} from "./Chats";

export const ChatsContainer = () => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const [name, setName] = useState('')

    const chats = useSelector(chatsSelector)

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
        dispatch(addChat(`chat-${name}`, name))
        dispatch(addChatMessages(`chat-${name}`))
        setOpen(false)
    }

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
