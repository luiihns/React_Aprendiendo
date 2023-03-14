import React, { useState, Fragment } from 'react';

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
        <Fragment>
            <h2 className="text-white">Lista de tareas.</h2>
            <div className="row">
                <div className="col-sm-12">
                    <form onSubmit={guardarTarea}>
                        <div className="input-group">
                            <input type="text"
                                className="form-control"
                                placeholder="Ingrese la descripcion"
                                value={descripcion}
                                onChange={actualizarDescripcion}
                            />
                            <button className="btn btn-success" type="submit">Agregar</button>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    );
};

export default Tarea_Agregar;