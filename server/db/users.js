import { Accounts } from 'meteor/accounts-base';

const userExists = (email) => Accounts.findUserByEmail(email);

export const createUser = (firstName, lastName, email, password) => {
    if (userExists(email)) return;
    Accounts.createUser({
        firstName: firstName,
        lastName: lastName,
        email: emailId,
        password: password
    });

}