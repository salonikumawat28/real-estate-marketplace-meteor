import React, { useState } from "react";
import { Logout } from "./Logout";
import { RealEstateForm } from "./RealEstateForm";

export const Home = () => {
    
    const [showAddProperty, setShowAddProperty] = useState(false);

    const addProperty = (event) => {
        event.preventDefault();
        setShowAddProperty(true);
    }

    const viewProperty = (event) => {
        event.preventDefault();
        setShowAddProperty(false);
    }
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-navbar navbar-dark navbar-top">
                <div className="container-fluid">
                    <button type="button" className="btn btn-success" onClick={addProperty} >Add RealEstate</button>
                    <button type="button" className="btn btn-success mx-5" onClick={viewProperty}>View RealEstate</button>
                    <Logout/>
                    
                </div>
            </nav>

            {showAddProperty ? (<RealEstateForm/>) : (
                <div>
                    <div className="container-fluid">
                    <h3>Welcome !! All your advertisements are here......</h3>

                    </div>
                </div>
            )}  
        </div>
    );
}