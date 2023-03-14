import React, { Fragment } from 'react';
import Tarea from './Tarea';

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
            <h3 className="text-white">No existen tareas registradas.</h3>
        );
    }

    return (
        <Fragment>
            {props.items.map((item) => (
                <Tarea key={item.id}
                    id={item.id}
                    descripcion={item.descripcion}
                    fechaCreacion={item.fechaCreacion}
                    onTareaDeleted={eliminarTarea}>
                </Tarea>
            ))}
        </Fragment>
    );
};

export default Tareas_Listado;