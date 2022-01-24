import React, { useState } from "react";
import { Logout } from "./Logout";
import { RealEstateForm } from "./RealEstateForm";

export const Home = () => {
    
    const [showAddProperty, setShowAddProperty] = useState(false);

    const addProperty = (event) => {
        event.preventDefault();
        setShowAddProperty(true);
    }
    return (
        <div>
            {showAddProperty ? (<RealEstateForm/>) : (
                <div>
                    <nav className="navbar navbar-expand-sm bg-navbar navbar-dark navbar-top">
                    <div className="container-fluid">
                        <button type="button" className="btn btn-success" type="button" onClick={addProperty} >Add property</button>
                        <Logout/>
                    
                    </div>
                    </nav>
                    <div className="container-fluid">
                        <h3>Welcome !!</h3>
                    </div>
                </div>
            )}  
        </div>
    );
}