import React from 'react'
import s from './Profile.module.css'
import {useDispatch, useSelector} from "react-redux";
import {changeDontDisturb} from "../../store/profile/actions";
import Button from "@material-ui/core/Button/Button";
import {logOut} from "../../services/firebase";

export const Profile = () => {
    const dispatch = useDispatch()
    const status = useSelector(state => state.status)

    const handleClick = () => {
        dispatch(changeDontDisturb)
    }

    return(
        <>
            <div className={s.container}>
                <div>Profile</div>
                <Button onClick={logOut}>Log out</Button>
            </div>
            <div>Status: {status}</div>
            <label>
                Don't disturb
                <input type='checkbox' onClick={handleClick}/>
            </label>
        </>
    )
}
