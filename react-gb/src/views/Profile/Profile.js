import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {changeDontDisturb} from "../../store/profile/actions";

export const Profile = () => {
    const dispatch = useDispatch()
    const status = useSelector(state => state.status)

    const handleClick = () => {
        dispatch(changeDontDisturb)
    }

    return(
        <>
            <div>Profile</div>
            <div>Status: {status}</div>
            <label>
                Don't disturb
                <input type='checkbox' onClick={handleClick}/>
            </label>
        </>
    )
}
