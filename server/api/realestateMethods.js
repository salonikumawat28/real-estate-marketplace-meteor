import { createNewRealEstate } from '../db/realEstate';
Meteor.methods({
    insertRealEstate: function(propertyName, propertyPurpose, propertyType, propertyBHK, propertyPrice, companyName, email, phoneNumber, address, description){
        createNewRealEstate(propertyName, propertyPurpose, propertyType, propertyBHK, propertyPrice, companyName, email, phoneNumber, address, description);
       }

});