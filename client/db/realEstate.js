const realestateCallBack = (error) => {
    if(error) alert(error.toString());
}

export const addNewProperty = (propertyName, propertyPurpose, propertyType, propertyBHK, propertyPrice, companyName, email, phoneNumber, address, description) => {
    Meteor.call('insertRealEstate', propertyName, propertyPurpose, propertyType, propertyBHK, propertyPrice, companyName, email, phoneNumber, address, description, realestateCallBack);

}