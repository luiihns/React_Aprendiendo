import React from "react";
import Style from "./Button.module.css";

const Button = (props) => {
    
    return (
        <button type={props.type}
            className={`${Style["button"]} ${props.className}`}
            onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default Button;