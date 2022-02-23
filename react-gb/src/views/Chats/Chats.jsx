import React from "react";
import s from './Chats.module.css'
import List from "@material-ui/core/List/List";
import {Link, Outlet } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem/ListItem";
import Button from "@material-ui/core/Button/Button";
import {Dialog, DialogContent, TextField} from "@material-ui/core";

export const Chats = ({chats, handleOpen, open, handleClose, name, handleChange, handleSubmit }) => {

    return (
        <div className={s.container}>
            <div className={s.left_container}>
                <List className={s.list}>
                    {
                        chats.map((chat) =>
                            <ListItem key={chat.id}>
                                <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
                            </ListItem>)
                    }
                </List>
                <Button onClick={handleOpen}>add chat</Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                >
                    <DialogContent>
                        <TextField value={name} onChange={handleChange}/>
                        <Button onClick={handleSubmit}>add chat</Button>
                    </DialogContent>
                </Dialog>
            </div>
            <Outlet/>
        </div>
    );
}
