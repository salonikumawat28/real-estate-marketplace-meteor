import React, { useState } from "react";
import { createUser } from "../../client/db/users";
import { isEmailValid, isPasswordSame } from "../utils/validation";
import { App } from './App';


export const SignUp = () => {

    const[firstName, setFirstName] = useState('');
    const[lastName, setlastName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[confirmPassword, setConfirmPassword] = useState('');

    const onFirstNameChange = (event) => {
        event.preventDefault();
        setFirstName(event.target.value);
    }

    const onLastNameChange = (event) => {
        event.preventDefault();
        setlastName(event.target.value);
    }

    const onEmailChange = (event) => {
        event.preventDefault();
        setEmail(event.target.value);
    }

    const onPasswordChange = (event) => {
        event.preventDefault();
        setPassword(event.target.value);
    }

    const onConfirmPasswordChange = (event) => {
        event.preventDefault();
        setConfirmPassword(event.target.value);
    }

    const signUpSubmit = (event) => {
        event.preventDefault();
        if(!isEmailValid(email)) alert("Invalid email");
        if(password !== confirmPassword) alert("Passwords are different");
        else {
            createUser(firstName, lastName, email, password);
        }
        
    }


    return (
         <div className="signup-form">
            <form className="needs-validation" action="/examples/actions/confirmation.php" method="post" onSubmit={signUpSubmit}>
                <h2>Create an Account</h2>
                <p className="hint-text">Sign up with your social media account or email address</p>
                <div className="social-btn">
                    <a href="#" className="btn btn-primary btn-lg mx-5"><i className="fa fa-facebook"></i> Facebook</a>
                    <a href="#" className="btn btn-danger btn-lg"><i className="fa fa-google"></i> Google</a>
                </div>
                <div className="or-seperator"><b>or</b></div>
                <div className="form-group p-2">
                    <input type="text" className="form-control input-lg" name="firstname" placeholder="First Name" required onChange={onFirstNameChange}/>
                </div>
                <div className="input-group form-group p-2">
                    <input type="text" className="form-control input-lg" name="lastname" placeholder="Last Name" required onChange={onLastNameChange}/>
                </div>
                <div className="input-group form-group p-2">
                    <input type="email" className="form-control input-lg" name="email" placeholder="Email Address" required onChange={onEmailChange}/>
                </div>
                <div className="input-group form-group p-2">
                    <input type="password" className="form-control input-lg" name="password" placeholder="Password" required onChange={onPasswordChange}/>
                </div>
                <div className="input-group form-group p-2">
                    <input type="password" className="form-control input-lg" name="confirm_password" placeholder="Confirm Password" required onChange={onConfirmPasswordChange}/>
                </div>  
                <div className="input-group form-group p-2">
                    <button type="submit" className="btn btn-success btn-lg btn-block signup-btn">Sign Up</button>
                </div>
            </form>
        </div>
    );
}