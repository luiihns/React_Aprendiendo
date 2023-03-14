import React from 'react';

const Tarea = (props) => {

    const formatDate = (string) => {
        let options = { year: 'numeric', month: 'long', day: 'numeric' };
        let fecha = new Date(string).toLocaleDateString("es-CL", options);
        let hora = new Date(string).toLocaleTimeString();
        return fecha + " | " + hora;
    };

    return (
        <div key={props.id} className="list-group-item list-group-item-action">
            <h5 className="text-primary">{props.descripcion}</h5>

            <div className="d-flex justify-content-between">
                <small className="text-muted">{formatDate(props.fechaCreacion)}</small>
                <button onClick={() => props.onTareaDeleted(props.id)} className="btn btn-sm btn-outline-danger">Eliminar</button>
            </div>
        </div>
    );
};

export default Tarea;