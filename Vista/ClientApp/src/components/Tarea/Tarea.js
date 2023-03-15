import React from 'react';
import Style from "./Tarea.module.css";
import Card from '../UI/Card/Card';
import Button_Delete from '../UI/Button/Button_Delete';

const Tarea = (props) => {

    const formatDate = (string) => {
        let options = { year: 'numeric', month: 'long', day: 'numeric' };
        let fecha = new Date(string).toLocaleDateString("es-CL", options);
        let hora = new Date(string).toLocaleTimeString();
        return fecha + " | " + hora;
    };

    return (
        <li>
            <Card className={Style["tarea-item"]}>
                <div className={Style["tarea-item__description"]}>
                    <h2>{props.descripcion}</h2>
                    <p>{formatDate(props.fechaCreacion)}</p>
                    <Button_Delete onClick={() => props.onTareaDeleted(props.id)}>Eliminar</Button_Delete>
                </div>
            </Card>
        </li>
    );
};

export default Tarea;