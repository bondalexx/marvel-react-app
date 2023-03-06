import React from "react";
import img from './error.gif'

const ErrorMessage = () => {
    return (
        <img src={img} style={{margin: "0 auto"}} alt='error' />
    )
}

export default ErrorMessage;