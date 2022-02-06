import React, {useState} from "react";
import s from './Chats.module.css'
import List from "@material-ui/core/List/List";
import {Link, Outlet } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem/ListItem";

export const Chats = () => {
    const chats =[
        {id: 'chat1', name: 'Friends'},
        {id: 'chat2', name: 'Fam'},
        {id: 'chat3', name: 'Besties'},
        {id: 'chat4', name: 'Nick'},
    ]

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
            </div>
            <Outlet/>
        </div>
    );
}
