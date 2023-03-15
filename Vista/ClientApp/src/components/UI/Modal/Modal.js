import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Style from "./Modal_Error.module.css";
import Card from "../cards/Card";
import Button from "../buttons/Button";

const Backdrop = (props) => {
    return <div className={Style["backdrop"]} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
    return (
        <Card className={Style["modal"]}>
            <header className={Style["header"]}>
                <h2>{props.titulo}</h2>
            </header>
            <div className={Style["content"]}>
                <p>{props.mensaje}</p>
            </div>
            <footer className={Style["actions"]}>
                <Button onClick={props.onClose}>Entendido</Button>
            </footer>
        </Card>
    );
};

const Modal_Error = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Backdrop onClose={props.onClose} />,
                document.getElementById("backdrop-root")
            )}
            {ReactDOM.createPortal(
                <ModalOverlay titulo={props.titulo} mensaje={props.mensaje} onClose={props.onClose} />,
                document.getElementById("modal-root")
            )}
        </Fragment>
    );
};

export default Modal_Error;
