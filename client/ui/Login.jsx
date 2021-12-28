import React, { useState } from "react";
import { login } from '../db/users';
import { SignUp } from "./SignUp";

export const Login= () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showSignup, setShowSignup] = useState(false);

    const onEmailChange = (event) => {
        event.preventDefault();
        setEmail(event.target.value);
    }

    const onPasswordChange = (event) => {
        event.preventDefault();
        setPassword(event.target.value);
    }

    const onLoginFormSubmit = (event) => {
        event.preventDefault();
        login(email, password);
    }

    const signUp = (event) => {
        event.preventDefault();
        setShowSignup(true);
    }

    return (
        <div>
            {showSignup ? (<SignUp />) : (
                <div>
                    <form className="login-form" onSubmit={onLoginFormSubmit}>
                        <div>
                            <input type="text" placeholder="Email" required onChange={onEmailChange} value={email}></input>
                            <input type="password" placeholder="Password" required onChange={onPasswordChange} value={password}></input>
                        </div>
                        <div>
                            <button name="login-button" type="submit">Login</button>
                        </div>
                    </form>
                    <button name="signUp-button" type="button" onClick={signUp}>Sign Up</button>
                </div>
            )}
        </div>
    );
}