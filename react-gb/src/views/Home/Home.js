import React, {useState} from 'react'
import s from './Home.module.css'
import Button from "@material-ui/core/Button/Button";
import {TextField} from "@material-ui/core";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {signIn, signUp} from "../../services/firebase";

export const Home = () => {
    const [isSignIn, setIsSignIn] = useState(true)
    const [error, setError] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleChange = (event, value) => {
        setIsSignIn(value);
    }

    const handleSignIn = async () => {
        try {
            await signIn(email, password)
        } catch (e) {
            setError(e.message)
        }
    }
    const handleSignUp = async () => {
        try {
            await signUp(email, password)
        } catch (e) {
            setError(e.message)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (isSignIn) {
            handleSignIn()
        } else {
            handleSignUp()
        }
        setEmail('')
        setPassword('')
    }


    return(
        <>
            <h2>HOME</h2>

            <ToggleButtonGroup
                style={{marginBottom: '20px'}}
                color="primary"
                value={isSignIn}
                exclusive
                onChange={handleChange}
            >
                <ToggleButton value={true} style={{paddingRight: '5px'}}>Sign In</ToggleButton>
                <ToggleButton value={false} style={{paddingLeft: '5px'}}>Sign Up</ToggleButton>
            </ToggleButtonGroup>

            <form className={s.container} onSubmit={handleSubmit}>
                <TextField label="Email" variant="outlined" value={email} onChange={handleChangeEmail}/>
                <TextField label="Password" type='password' variant="outlined" value={password} onChange={handleChangePassword}/>
                <Button type="submit">{isSignIn ? 'Sign In' : 'Sign Up'}</Button>
            </form>
            { error && <div style={{color: 'red'}}>{error}</div>}
        </>
    )
}
