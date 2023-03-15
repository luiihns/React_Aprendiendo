import React, { useState } from 'react';
import Style from "./Tarea_Agregar.module.css";
import Card from '../UI/Card/Card';
import Button_Add from '../UI/Button/Button_Add';
import Input from "../UI/Input/Input";

const Tarea_Agregar = (props) => {

    const [descripcion, setDescripcion] = useState("");

    const actualizarDescripcion = (e) => {
        setDescripcion(e.target.value);
    };

    const guardarTarea = async (e) => {
        e.preventDefault();

        const response = await fetch("api/tarea/Guardar", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ descripcion: descripcion })
        });

        if (response.ok) {
            setDescripcion("");
            await props.onTareaAgregada();
        }
    };

    return (
        <Card key="card_tarea_agregar">
            <form onSubmit={guardarTarea} className={Style["input"]}>
                <Input id="txt_tarea"
                    type="text"
                    label="Nueva tarea"
                    value={descripcion}
                    onChange={actualizarDescripcion}
                    placeholder="Ingrese la descripcion">
                </Input>
                <Button_Add type="submit">Agregar</Button_Add>
            </form>
        </Card>
    );
};

export default Tarea_Agregar;