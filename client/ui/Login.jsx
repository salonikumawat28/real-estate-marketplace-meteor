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
        <div class="color  rounded mx-5 my-5">
            {showSignup ? (<SignUp />) : (
                <div class="p-5">
                    <div>
                        <form action="/action_page.php" onSubmit={onLoginFormSubmit}>
                            <div class="text-center mb-3 my-3 mx-5">
                                <input type="text" class="form-control" placeholder="Email" required onChange={onEmailChange} value={email}></input>
                            </div>
                            <div class="mb-3 mx-5">
                                <input type="password" class="form-control" placeholder="Password" required onChange={onPasswordChange} value={password}></input>
                            </div>
                            <div class="mx-5">
                                <button name="login-button" type="submit" className="btn btn-primary active btn-lg btn-block ">Log In</button>
                            </div>
                        </form>
                    </div>
                    <button name="signUp-button" class="btn btn-success mx-5 mt-3 mb-3" type="button" onClick={signUp}>Create New Account</button>
                </div>
            )}
        </div>
    );
}