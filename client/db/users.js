import { meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';


const loginCallBack = (error) => {
    if(error) alert(error.toString());
}

const signUpCallBack = (error) => {
    if(error) alert(error.toString());
}

export const getUser = () => {
    return Meteor.user();
}

export const login = (username, password) => {
    Meteor.loginWithPassword(username, password, loginCallBack);
}

export const logout = () => {
    Meteor.logout();
}

export const createUser = (firstName, lastName, email, password) => {
    Meteor.call('userRegistration', firstName, lastName, email, password, signUpCallBack);
}