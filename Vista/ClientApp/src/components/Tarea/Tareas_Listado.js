import React, { Fragment } from 'react';
import Style from './Tareas_Listado.module.css';
import Tarea from './Tarea';
import Card from '../UI/Card/Card';

const Tareas_Listado = (props) => {

    const eliminarTarea = async (id) => {

        const response = await fetch("api/tarea/Eliminar/" + id, {
            method: "DELETE"
        });

        if (response.ok) {
            await props.onTareaEliminada();
        }
    };

    if (props.items.length === 0) {
        return (
            <h2 className={Style["tareas-list__result"]}>No existen tareas registradas.</h2>
        );
    }

    return (
        <Card>
            <h2 className={Style["tareas-list__result"]}>Lista de tareas.</h2>
            <ul className={Style["tareas-list"]}>
                {props.items.map((item) => (
                    <Tarea key={item.id}
                        id={item.id}
                        descripcion={item.descripcion}
                        fechaCreacion={item.fechaCreacion}
                        onTareaDeleted={eliminarTarea}>
                    </Tarea>
                ))}
            </ul>
        </Card>
    );
};

export default Tareas_Listado;