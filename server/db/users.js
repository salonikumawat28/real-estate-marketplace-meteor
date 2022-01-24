import { Accounts } from 'meteor/accounts-base';
import { ProfileCollection } from '../common/profileCollection';

export const userExists = (email) => Accounts.findUserByEmail(email);

const getUser = (email) => {
    return Accounts.findUserByEmail(email);
}

export const findUserId = (email) => {
    return getUser(email)._id;
}

export const createUser = (email, password) => {
    if (userExists(email)) {
        return; 
    }
    Accounts.createUser({
        email: email,
        password: password
    });
}

export const createUserProfile = (email, firstName, lastName) => {
    if (userExists(email)) {
        return; 
    }
    ProfileCollection.insert({
        _id: email,
        firstName: firstName,
        lastName: lastName
    });

}

