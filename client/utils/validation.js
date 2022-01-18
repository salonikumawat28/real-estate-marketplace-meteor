import React from "react";

export const isEmailValid = (email) => {
    let rex = /\S+@\S+\.\S+/;
    return rex.test(email);

}
