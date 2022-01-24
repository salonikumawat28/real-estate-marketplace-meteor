import React, { useState } from "react";
import { addNewProperty } from "../db/realEstate";

export const RealEstateForm = () => {

    const [propertyName, setPropertyName] = useState('');
    const [propertyPurpose, setPropertyPurpose] = useState('');
    const [propertyType, setPropertyType] = useState('');
    const [propertyBHK, setPropertyBHK] = useState('');
    const [propertyPrice, setPropertyPrice] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setphoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');

    const onPropertyNameChange = (event) => {
        event.preventDefault();
        setPropertyName(event.target.value);
    }

    const onPropertyPurposeChange = (event) => {
        event.preventDefault();
        setPropertyPurpose(event.target.value);
    }

    const onPropertyTypeChange = (event) => {
        event.preventDefault();
        setPropertyType(event.target.value);
    }

    const onPropertyBHKChange = (event) => {
        event.preventDefault();
        setPropertyBHK(event.target.value);
    }

    const onPriceChange = (event) => {
        event.preventDefault();
        setPropertyPrice(event.target.value);
    }

    const onCompanyNameChange = (event) => {
        event.preventDefault();
        setCompanyName(event.target.value);
    }

    const onEmailChange = (event) => {
        event.preventDefault();
        setEmail(event.target.value);
    }

    const onPhoneNumberChange = (event) => {
        event.preventDefault();
        setphoneNumber(event.target.value);
    }

    const onAddressChange = (event) => {
        event.preventDefault();
        setAddress(event.target.value);
    }

    const onDescriptionChange = (event) => {
        event.preventDefault();
        setDescription(event.target.value);
    }

    const addProperty = (event) => {
        event.preventDefault();
        addNewProperty(propertyName, propertyPurpose, propertyType, propertyBHK, propertyPrice, companyName, email, phoneNumber, address, description);
    }

    

    
    return (
        <div className="form">
            <h1>Add New Property</h1>
            <form onSubmit={addProperty}>
                <div className="row mb-3">
                    <div className="col">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" name="propertyName" placeholder="propertyName" required onChange={onPropertyNameChange}/>
                            <label htmlfor="propertyName">Name of the Property</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-floating">
                            <input type="text" className="form-control" name="propertyPurpose" placeholder="sell / rent" required onChange={onPropertyPurposeChange}/>
                            <label htmlfor="propertyPurpose">sell / rent</label>
                        </div>
                    </div>
                </div>
  
                <div className="row mb-3">
                    <div className="col">
                        <div className="form-floating mb-3">
                            <select className="form-select" id="propertyType" aria-label="Floating label select example" required onChange={onPropertyTypeChange}>
                                <option value="Flat">Flat</option>
                                <option value="Land">Land</option>
                                <option value="DuplexFlat">Duplex in Flat</option>
                                <option value="socityVilla">Villa in socity</option>
                                <option value="individualVila">Individual Vila</option>
                                <option value="individualHouse">Individual House</option>
                            </select>
                            <label htmlfor="propertyType">Type of Property</label>
                        </div>
                    </div>
                    <div className="col">
    <                   div className="form-floating">
                            <select className="form-select" id="propertyBHK" aria-label="Floating label select example" required onChange={onPropertyBHKChange}>
                                <option value="1">1 BHK</option>
                                <option value="2">2 BHK</option>
                                <option value="3">3 BHK</option>
                                <option value="3">4 BHK</option>
                                <option value="3">5 BHK</option>
                                <option value="3">MORE THAN 5 BHK</option>

                            </select>
                            <label htmlfor="propertyBHK">BHK</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-floating">
                            <input type="number" className="form-control" id="propertyPrice" placeholder="price" required onChange={onPriceChange}/>
                            <label htmlfor="propertyPrice">Price in lakhs</label>
                        </div>
                    </div>
                </div>

                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="companyName" placeholder="companyName" required onChange={onCompanyNameChange}/>
                    <label htmlfor="companyName">Comapany / Builder</label>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="email" placeholder="Email" required onChange={onEmailChange}/>
                            <label htmlfor="email">Email</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-floating">
                            <input type="tel" id="phoneNumber" className="form-control" placeholder="phone" required onChange={onPhoneNumberChange}/>
                            <label  htmlfor="phoneNumber">Phone No.</label>
                        </div>
                    </div>
                </div>

                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="address" placeholder="Address" required onChange={onAddressChange}/>
                    <label htmlfor="address">Address</label>
                </div>

                <div className="form-floating mb-3">
                    <textarea className="form-control" id="description" rows="4" onChange={onDescriptionChange}></textarea>
                    <label htmlfor="description">Description</label>
                </div>

                <div className="property-btn">
                    <button type="submit" className="btn btn-primary btn-block mb-4">Add Property</button>
                </div>
  
            </form>
        </div>
    );
}