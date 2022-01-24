
const loginCallBack = (error) => {
    if(error) alert(error.toString());
}

const registerUserCallback = (error) => {
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
    Meteor.call('registerUser', firstName, lastName, email, password, registerUserCallback);
}