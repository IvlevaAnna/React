import React from 'react'
import ListItemText from "@material-ui/core/ListItemText/ListItemText"
import ListItem from "@material-ui/core/ListItem/ListItem"

export const Chat = (props) => {
    return (
        <ListItem>
            <ListItemText primary={props.name}/>
        </ListItem>
    )
}
