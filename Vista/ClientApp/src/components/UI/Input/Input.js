import React, { useRef, useImperativeHandle } from "react";
import Style from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
    const inputRef = useRef();

    const focusOn = () => {
        inputRef.current.focus();
    };

    useImperativeHandle(ref, () => {
        return { focusOn: focusOn };
    });

    return (
        <div className={`${Style.control} ${props.isValid === false ? Style.invalid : ""}`}>
            <label htmlFor={props.id}>{props.label}</label>
            <input id={props.id}
                type={props.type}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
                ref={inputRef}/>
        </div>
    );
});

export default Input;