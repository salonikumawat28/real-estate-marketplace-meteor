import { createUser, createUserProfile } from '../db/users';
import { check } from 'meteor/check'; 

const validateInputs = (firstName, lastName, email) => {
    check(firstName, String);
    check(lastName, String);
    check(email, String);
}



Meteor.methods({
    userRegistration: function(firstName, lastName, email, password) {
        validateInputs(firstName, lastName, email);
        createUser(email, password);
        createUserProfile(email, firstName, lastName);

    }
});