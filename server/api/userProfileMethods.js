import { createUser, createUserProfile, userExists } from '../db/users';
import { check } from 'meteor/check'; 

const validateInputs = (firstName, lastName, email) => {
    check(firstName, String);
    check(lastName, String);
    check(email, String);
}

Meteor.methods({
    registerUser: function(firstName, lastName, email, password) {
        validateInputs(firstName, lastName, email);
        if (userExists(email)) {
            throw new Meteor.Error("User already exists - bla");
        } else {
            createUser(email, password);
            createUserProfile(email, firstName, lastName);
        }
        
    }
});