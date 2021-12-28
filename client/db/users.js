import { meteor } from 'meteor/meteor';

const loginCallBack = (error) => {
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