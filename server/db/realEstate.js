
import { RealEstateCollection } from '../common/realEstateCollection';

export const createNewRealEstate = (propertyName, propertyPurpose, propertyType, propertyBHK, propertyPrice, companyName, email, phoneNumber, address, description) => {
    RealEstateCollection.insert({
        name: propertyName,
        purpose: propertyPurpose,
        type: propertyType,
        bhk: propertyBHK,
        price: propertyPrice,
        companyName: companyName,
        email: email,
        phoneNumber: phoneNumber,
        address:address,
        description: description
    });
}